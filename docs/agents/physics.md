# Physics feel worker handoff

Updated: 2026-09-07. Owned files only: `src/sim.ts`,
`tests/physics-feel.ts`, this doc. No changes to `main.ts`, `trackgen.ts`,
`harness.ts`, configs, `dist/`, or `test-dist/`. No deploy. All compiles/runs
used `/tmp` output dirs only; shared `npm test` was never invoked (the shared
harness was compiled to `/tmp` read-only for a regression check — 251/251).

## What changed and why

Driving feel tuning inside `simStep`, additive only (no signature changes).
Goal: deliberate drift timing beats holding the slide, over-rotation stays
possible but recoverable, countersteer and clean exits feel skillful —
without moving the verified envelope.

- Proportional countersteer (`oppose` 0..1 from lock-against-slip): recovery
  rate now blends `DRIFT_RELEASE`→`DRIFT_RECOVER_FAST` instead of binary, and
  active counter adds lateral bite (`COUNTER_GRIP_BOOST`) plus over-slip scrub
  relief (`SCRUB_COUNTER_RELIEF`). Neutral release still unwinds fast but bites
  less. Spot behavior for the harness cases (±0.6) is numerically identical.
- Sustained-slide clock (`driftHold`): held drifts progressively loosen the
  rear (`REAR_LOOSEN_*`, over-rotation possible) and accrue small extra drag
  (`DRIFT_FATIGUE_*`, holding keeps costing). Both capped small.
- Clean-exit reward (`exitT`): unwinding a real drift (`driftHold>0.25`) with
  settled slip (`<EXIT_SLIP_MAX`) grants `EXIT_BOOST_TIME` of extra exit accel
  (`EXIT_BOOST_ACCEL`). Messy/forced exits earn nothing.
- Counter benefits and loosening are suppressed near walls (`nearWall`) and
  offroad, so the verified wall/offroad contract is byte-for-byte untouched by
  this worker.

## Measured before → after (synthetic tracks, deterministic)

Wall-free mechanism deltas, pre-patch snapshot vs patched (same trackgen):

| Metric | Before | After | Band |
|---|---|---|---|
| Grip t70 / top | 0.80s / 80.0 | 0.80s / 80.0 | 0.6–1.0 / 78–82 |
| Drift top | 73.7 | 73.4 | 72–76 |
| Drift radius / slip | 51.2 / 16.6° | 44.5 / 20.0° | 35–55 / 12–28 |
| Recovery hold / counter | 0.32s / 0.13s | 0.33s / 0.15s | <1.5, counter faster |
| Forced 45° collapse | 80→13 | 80→13 | guardrail intact |
| Offroad 4s max | 24 vs road 80 | 24 vs road 80 | <30, <half road |

Skill measurements (patched, synthetic hairpin + fixed-input taps):

- Tapped drift beats held drift, equal steering: 460.8 vs 443.2 (+4.0%).
- Hairpin ms: timed 10608, cont 10556, vearly 11114, vlate 11231, grip 11114.
  Gross mistiming costs ~500ms+; single-hairpin timed-vs-cont is ±50ms noise
  (the sim's 0.18 steer gate already forbids straight-line drifting), so the
  continuous-vs-deliberate assertion lives in the tap test, not lap ms.
- Clean release: unwinds in ~10 steps, `exitT`=0.68s, rebuilds 75.8→80 in 1s;
  messy release: `exitT`=0. Crossed air landing still spins out (peak 76°,
  v 1.9) vs clean (v 80); deep ground slide recovers via counter in 0.22s.
- Full shared harness on patched sim: 251/251 green (run from `/tmp`).

Note: wall numbers moved during this task due to the integrator's
reconciliation (restitution 0.3→0.7, applied after loss; harness 11h/13d/13e
updated to the bouncy contract). That change is not mine; my test tracks the
current contract and my patch is verified compatible with it.

## Changed symbols (`src/sim.ts`)

New exported constants: `DRIFT_FATIGUE_GRACE` (1.0), `DRIFT_FATIGUE_GAIN`
(0.10), `DRIFT_FATIGUE_MAX` (0.30), `REAR_LOOSEN_GAIN` (0.4),
`REAR_LOOSEN_MAX` (0.8), `COUNTER_GRIP_BOOST` (5.0),
`SCRUB_COUNTER_RELIEF` (0.5), `EXIT_BOOST_ACCEL` (24), `EXIT_BOOST_TIME`
(0.7), `EXIT_SLIP_MAX` (0.35). `SimState` gains `driftHold`, `exitT`
(initialized in `createSimState`, reset in `resetRun`/`simRespawn`). All
pre-existing exports and signatures unchanged; `main.ts` needs no changes
(`StepInfo` untouched).

## Risks / tuning knobs

- If drift top nears the 72 floor, lower `DRIFT_FATIGUE_MAX` first.
- If drift slip nears 28°, lower `REAR_LOOSEN_MAX` first.
- If exits feel too strong, lower `EXIT_BOOST_ACCEL` (24) or `EXIT_BOOST_TIME`.
- `nearWall` uses `|lat| > halfW + 1.0`; keep it inside the wall `LIM`
  (`halfW + 1.6`) so wall behavior stays decoupled.
- F2 asserts gross-mistiming ordering only; do not tighten to cont-vs-timed
  ms without a multi-corner scenario (noise-dominated on one hairpin).

## Integration notes (for integrator)

1. My test is standalone and synthetic-only (no `trackgen` import, immune to
   generator churn). Run: `npx tsc src/sim.ts tests/physics-feel.ts --target
   es2020 --module nodenext --moduleResolution nodenext --strict
   --skipLibCheck --outDir /tmp/feel && node /tmp/feel/tests/physics-feel.js`
   (39 checks, all passing).
2. To enroll it in `npm test`, add `tests/physics-feel.ts` to
   `tsconfig.tests.json` include and chain its output in the `test` script —
   config edit left to you deliberately.
3. Re-run the full suite + build after merging; no `main.ts` wiring needed.
4. A wall-restitution edit landed in `src/sim.ts` mid-task from reconciliation;
   my diff sits cleanly alongside it (separate blocks), but please re-check the
   wall section when merging.
