# Corner speed dynamics — Cycle 7 handoff

Worker `01a07eb8-75cf-7403-b999-56b2c1c16161`. Owned files only:
`src/sim.ts`, `tests/physics-feel.ts` (+ this doc). `src/drift-control.ts`
and `tests/drift-control.ts` untouched. No deploy, no shared builds (all
compiles ran under `/tmp/c7*`).

## What the user asked

- Handbrake must create readable speed loss on corner entry.
- A well-timed exit must produce a stronger, perceptible acceleration/slingshot.

## Root cause found (measured, not guessed)

The timed-exit slingshot was firing but doing almost nothing sim-side. In
`simStep`, `maxSp` was computed from `rhythmBoost` **before** the live
one-shot value was read two lines later, so the variable was always the
stale `0` and the `BOOST_SPEED_CAP` lift never applied: the boost accel
fought the 74 drift cap and the surge never materialized. Baseline probe
(scripted pre-steer + tap + develop + opposite commit, q=0.84 perfect):
vEx=73.7, peak=80.0, speed *dropped* to 73.5 in the first 0.1s post-exit.

## Changes (`src/sim.ts`, 4 small edits, public API unchanged)

- `DRIFT_ENTRY_CUT` 0.96 -> 0.94: one-shot engagement price is now a
  readable HUD dip (~80 -> 77.7 @0.1s, 77.5 @0.2s) without crash-like cost.
- `EXIT_BOOST_ACCEL` 24 -> 32: legacy clean-exit grip punches harder.
- Read `rhythmBoost` BEFORE `maxSp`: timed rhythm exits now lift the cap to
  `BOOST_SPEED_CAP` (84) for the 0.6s boost window. Perfect exit now surges
  74.7 -> 80.6 @0.1s -> 84.0 @0.3s.
- Two guards so the envelope holds: while the one-shot is live, TOTAL speed
  (not just forward) is clamped to 84, so stacked lateral slide cannot breach
  the cap (harsh chained-slide script peaked 85.65 before the clamp, 84.00
  after; baseline was 81.17); after every boost expires, overshoot above
  grip top bleeds back exponentially (rate 2.0/s, frame-rate independent),
  so the slingshot is a surge, not a permanent +4 cruise (+1.5s ~81.2,
  +2.0s ~80.4).

## Measured before -> after (synthetic wide tracks, /tmp builds)

- Entry dip @0.1s: 79.30 -> 77.70; @0.2s: 78.55 -> 77.47.
- Perfect-exit peak: 80.01 -> 84.00 (cap 84 respected, D6.5 `<= 84.5` holds).
- F1 tapped-vs-held: +1.52% -> +1.46% (still deliberate-beats-held).
- Spam script peak: 81.17 -> 84.00 (capped, one-shot/cooldown/neutral
  anti-spam untouched in the module).
- Rate equivalence (same per-second script, DT vs DT/2): dq=0.021,
  dpeak=0.000; replay byte-identical.

## Tests

- `tests/physics-feel.ts`: +13 checks in a `Cycle 7` block (entry
  readability/bound/engagement, exit quality/surge speed/cap/settle tail,
  legacy exit grip, spam cap, determinism, rate equivalence).
- Full owned suites in isolated `/tmp` builds: physics-feel 171/171,
  drift-control 91/91 (module untouched, still green).

## Risks / notes for the integrator

- Wall contact, progress/anti-cut, finish, ghosts, fixed-step determinism,
  and steering-sign conventions are untouched; barrier worker can rewire
  the sim-side wall contact as planned.
- `BOOST_SPEED_CAP` (84), `GRIP_TOP_SPEED` (80), `boostTime` (0.6), and all
  drift-control sizing constants are unchanged; drift-control test 18's
  projection bounds still pass verbatim.
- Tapping from a centered wheel still never enters (steering smoothing keeps
  entry steer below threshold on the edge) — pre-existing D6 behavior, the
  tap must land while steering, like a real flick. Not changed this cycle.
- Thinnest margins to watch on re-verify: F1 +1.46%, D6.5 peak 84.0 vs 84.5.
