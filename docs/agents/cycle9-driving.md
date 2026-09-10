# Driving Redteam — Cycle 9 (read-only)

Scope: current `src/sim.ts` + `src/drift-control.ts` + `src/trackgen.ts` +
`src/barrier-plan.ts` + `src/loop.ts` + `src/main.ts` (1226-check build:
wide hug arcs, pendulum drift, open edges, visible barriers, entry cut,
exit slingshot), via headless probes in `/tmp/probe*.mjs` against `test-dist`
(no edits to implementation/config/dist). Code is truth; old handoff claims
were re-measured, not trusted.

## Measurements (all reproduced)

- Grip yaw at top speed: `80.0 u/s`, full-lock yaw `0.67 rad/s`, radius `~120u`
  (`src/sim.ts:451`). Drift corners are `R 105–130`; grip physically cannot hold
  them — ordering vs drift is structural, not just tuning.
- Sweeper `R160`: grip `10.72s` beats drift `10.97s`. Drift `R105`: drift
  `11.55s` beats grip `12.02s`. Strategy ordering correct on both terrains.
- Held-handbrake spam punished: tap `q=0.895 perfect` vs 1s-held `q=0.217 weak`
  (`sloppyScale 0.4`). Cooldown + neutral + `spamCount` reject immediate
  re-entry (measured `event=none, spamCount=1`). Boost spam: no exploit.
- Grind punished: 2s lean-in `80 → 1.8 u/s`; head-on impact keeps `67%` + crash
  upset (`crashT`). Shallow kiss costs `79 → 52` in 0.5s via scrape drag with
  zero `wallHit` events (see F5 note).
- Straight-line accel is dt-stable (`1/30`, `1/60`, `1/120` agree to `<1u`
  over 10s). Low-FPS spiral fixed since C4 (`clampAcc`, `ACC_MAX 0.1`,
  `src/loop.ts`, wired `src/main.ts:768`). High-FPS: fixed `DT`, zero-step
  frames retain display (`updateDisplay`). No FPS bug found.
- Open-edge departure at ~17° off, `80 u/s`: OOB message at `2.2s`, `44u`
  past centerline, `py=-228`, unrecoverable long before it fires (threshold
  `halfW+15` must first be crossed, then `900ms` sustain).

## Ranked findings (surgical, at most five)

### F1 — Live R restarts the whole run; tested rescue does not exist in game
- `doRespawn` (`src/main.ts:610`) calls `startRun(true)`: full restart, timer
  to zero, ~40s run discarded. `simRespawn` (`src/sim.ts:330`, snapshot + exact
  `3000ms`, gated snapshot) is headless-only. Every test proving "R rescues"
  exercises a path players never get.
- Incentive damage: with open edges, one fall = run over. Rational play is
  ultra-conservative lines near edges (or quit); the hug-arc risk gameplay the
  wide corners were built for is punished ~13x over the tested design. The
  `OFF COURSE — R RESET` prompt implies a rescue that never comes.
- Fix: wire `doRespawn` to `simRespawn` (+ minimal countdown/settle, keep
  `+3000ms` + ghost gap semantics).
- Acceptance: fall off an open edge → R → resume at snapshot, `raceMs` delta
  exactly `+3000`, ghost gap in `[3000, 3000+120+1]`, `lastIdx` at snapshot,
  no return to start.

### F2 — Poor exits chain harder than good ones (inverted incentive)
- `src/drift-control.ts:321`: `if (q < 0.3) residual = max(residual, pendAmp)`
  overrides even in-phase damping. Measured: `age≈0.1s, q=0` exit arms a chain
  (`chainArmed=true, pendAmp=0.81`); a mid-phase quality exit damps to `0.11`,
  no chain. Mashing an early worthless exit is the best way to keep chaining,
  and `enterChain` then grants a free `0.09 rad` yawKick.
- Fix: gate chain arming on quality (e.g. only `q >= 0.3` arms, residual scaled
  by `q`), and/or suppress `yawKick` on chains following poor exits.
- Acceptance: `age<0.15` exit → `chainArmed=false`, `pendAmp≈0`; a good
  anti-phase exit (`q>0.55`, `cos(pendPhase)<-0.3`) still arms.

### F3 — Simultaneous steer+tap flick silently fails (no feedback)
- Tap entry reads smoothed `steerEff` (`src/sim.ts:371,384`): one step after a
  simultaneous flick it is `~0.1 < DRIFT_MIN_STEER 0.18`. Measured: `pre=0`
  flick → `phase=idle`; `pre=5` → `sliding`. No `rejected` event fires (gate
  just ignores), so keyboard/mobile flicks die undiscoverably. C4 called this
  "correct anti-accident"; with reactions now timed at speed on wide entries,
  silent ignore is a feel bug.
- Fix: evaluate rhythm entry on raw input steer (or `max(raw, smoothed)`)
  and/or emit `rejected` so the HUD can flash the reason.
- Acceptance: `pre=0` flick at speed enters `sliding`; spam guards (cooldown,
  neutral, `spamCount`) unchanged; existing tap-timing tests still green.

### F4 — Countersteer decisiveness barely matters
- Exit quality (`src/drift-control.ts:202`): counter weight `0.15`, band
  `0.2–0.7`. Measured at optimal age: counter `0.1 → q=0.775`,
  `0.8 → q=0.925`. Full opposite lock buys `+0.15` over a lazy flick —
  "countersteer timing" is a headline mechanic priced as a footnote.
- Fix: raise counter weight (e.g. `0.15 → 0.25`, renormalize) and/or widen the
  band (`counterLo 0.2 → 0.35`); consider `q=0` below a decisiveness floor.
- Acceptance: counter `0.15` vs `0.7` at fixed age/slip/speed differs by
  `>=0.25` in `q`; perfect grade unattainable with lazy counter.

### F5 — Entry cut lands mid-slide, not on entry
- `DRIFT_ENTRY_CUT` applies when `driftAmt` crosses `0.15`
  (`src/sim.ts:499`): at `DRIFT_ATTACK 3.5/s` that is ~3 steps after the tap.
  Measured speed ratio on the tap step: `1.000` (no dip); the "readable entry
  price" reads as mid-slide drag instead of an entry dip.
- Fix: apply the one-shot cut on the rhythm `entered` event (same step),
  keep the `driftAmt`-threshold path as fallback for autoBreak entries.
- Acceptance: tap step at speed → `fSpeed × 0.94` same step; autoBreak entries
  still pay exactly once; top-speed bands unchanged.

## Verified solid (no change recommended)

- Apex hugging: inside line legal, outside mistakes caught (existing
  `corner-apex` §§2–4,7–8 re-read; geometry math checks out).
- Boost spam / permanent drift / no-drift: all lose by measurement (sloppy
  penalty, fatigue/loosening, sweeper ordering above). AutoBreak full-lock
  yank slides without a tap but earned no legacy `exitT` in probing and keeps
  the wobble tax — watch item, not a bug.
- Wall rebound: head-on loss + upset + cooldown + grind-to-stall all sane.
  Note: shallow-kiss cost (`-34%` via scrape, no `wallHit`) exceeds the glance
  contract's spirit (`GLANCE_MAX 0.15`) — acceptable if deliberate, but the
  "brief kiss deflects cheaply" comment overpromises.
- Respawn snapshot gates, cut freeze, finish tail-gate/arm, ghost
  determinism, low-FPS clamp: solid by code + existing suites.
- No brake input exists (auto-gas only) — entry speed control is drift-only
  by design. Not a bug, but it is the binding constraint on corner-entry
  tuning; any future brake must re-run the F4/sweeper margins above.
