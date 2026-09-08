# Drift cycle 6 — aggressive handbrake / pendulum handoff

## What changed

A steering handbrake tap now breaks the rear aggressively (one-step bounded
yaw impulse + 0.12s lateral-grip cut to 35%) and stores deterministic
pendulum energy: a decaying oscillator (7 rad/s, tau ~0.55s, ~3% left at 2s)
that biases yaw and produces a visible wobble. Countersteer timing is read
against pendulum phase: in-phase commits damp to zero and pay the existing
one-shot slingshot; anti-phase commits amplify and arm a chained opposite
slide; poor releases carry residual energy into a 0.8s chain window where
steering with the swing re-engages without a neutral pass. Exit quality
scoring is untouched by phase — phase only routes energy. One reward per
armed drift, cooldown + neutral re-arm, and all caps still hold.

## Tuning constants (new)

- `drift-control.ts`: `kickRad 0.09`, `pendFreq 7.0`, `pendDecay 1.8`,
  `pendYaw 1.6`, `chainWindow 0.8`, `chainHold 0.35`, `chainMin 0.25`,
  `chainBoost 1.5`. State: `pendAmp/pendPhase/chainDir/chainT/chainHoldT`;
  outputs: `yawKick/pendRate/pendAmp/chainArmed`.
- `sim.ts`: `KICK_WINDOW 0.12`, `KICK_GRIP_KEEP 0.35`, `kickT` state,
  `pendAmp/kickT/chainArmed` step telemetry. Kick + pendulum suppressed in
  wall contact (`|lat| > halfW+0.2`, tighter than the untouched loosen zone).
- Sign convention: outputs are sim-space heading deltas
  (`heading -= steer*yawRate*dt`), so a dir=+1 entry kicks negative.

## Before -> after (scripted, wide synthetic track)

- Tap yaw@0.15s: -0.23 -> -0.45; yaw@0.3s: -0.28 -> -0.73; peak slip:
  2.1deg -> 16.0deg; time-to-45deg: 2.18s (grip, pre-loaded) -> 0.85s.
- Yaw-rate ripple p2p: 1.45 early -> 0.15 late (10x decay, direction kept).
- S-turn (tap, hold, opposite tap, hold): baseline re-entered never
  (cooldown + neutral blocked it); now a poor/anti-phase exit chains the
  opposite slide at ~1.35s with no neutral, while a clean in-phase exit
  (q 0.84) damps to zero and holds dead.
- In-phase countersteer: q 0.84, slip 0.0deg after, boost peak 81.0
  (cap 84). Anti-phase: residual 0.51 -> chained slide.
- Spam (4 alternating undeveloped flicks): maxQ 0.191 (module) / 0.000
  (sim), no farmable slingshot.
- Scheduling: 60/90/120/144Hz same rhythm events; dPos <= 1.25u,
  dHead <= 0.018 (fixed-step accumulator makes render rate moot).
- Wall tap in contact: kickT never sets, pen 0.000, <= 1 event,
  heading within 0.026 of no-tap control.
- Suites: physics-feel 158/158, drift-control 91/91 (all pre-existing
  E/F/W/R + rhythm 1-20 checks unchanged and green); byte-identical
  replay across runs.

## Risks / integrator notes

- Taps from a centered wheel still never enter (steering smoothing keeps
  entry steer sub-threshold on the edge) — pre-load steer first; mobile
  analog flicks produce edges the same way, no binding changes.
- Chain window (0.8s) is shorter than cooldown (1.2s) by design: chains
  never leak into idle; one chain per exit (entry consumes it).
- Full-lock into-wall grinds still pin near zero (punishment, recovers in
  <= 0.9s) — do not strengthen scrape drag without re-checking E6/W5.
- Mid-slide handbrake holds never re-kick (spam vector closed).
- Thinnest margins: F1 tapped-vs-held distance (+1.5% re-verified green),
  13d-lean stuckMs 1800 vs 1500 (untouched path, deterministic).
- Only owned files touched: `src/sim.ts`, `src/drift-control.ts`,
  `tests/physics-feel.ts`, `tests/drift-control.ts`. Built/run in
  `/tmp/drift6*` only; no shared builds, dist, or deploy.
