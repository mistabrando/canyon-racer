# Speed-dirt physics — FINAL STABLE

Owner: physics worker (DeepSeek Flash). Owned files: `src/sim.ts`,
`src/drift-control.ts`, new `src/surface.ts`, physics tests
(`tests/physics-feel.ts`, `tests/drift-control.ts`, `tests/barrier-edge.ts`,
`tests/harness.ts`). Not edited: `main.ts`, trackgen/courses/reference/ghost,
render/environment, shared configs.

**Road tuning is frozen.** Course worker may regenerate references now.

## Surface API (`src/surface.ts`, new — shared with the render worker)

```ts
export const DIRT_PLAIN_Y = -2.5;
export const DIRT_VERGE_WIDTH = 18;
export function groundSurfaceY(roadY: number, lateral: number, halfW: number): number;
```

- On the road (`|lateral| <= halfW`) returns exactly `roadY` (track sample).
- Across the verge (`halfW .. halfW+18`) smoothstep-blends from `roadY` to
  `DIRT_PLAIN_Y`; beyond that it is the flat plain at `DIRT_PLAIN_Y` for any
  lateral distance — **no void, no bottomless fall, no invisible backstop**.
- Sim adds the +0.2 car clearance itself.

## Final physics constants

`src/sim.ts`:
- `START_SPEED 10`, `ACCEL_ROAD 105`, `ACCEL_OFFROAD 9`
- `MAX_GRIP_SPEED 112` (cruise), `MAX_DRIFT_SPEED 90`, `MAX_OFFROAD_SPEED 44`
- `DIRT_LATERAL_GRIP 1.5` (road lateral grip stays 9 -> 4.8 with drift)
- `OFFROAD_DRAG 0.9`
- Yaw: `highCut = spd <= 30 ? 1 : max(0.30, 1-(spd-30)/95)`;
  `yawRate = lerp(2.3*highCut, 1.9, driftAmt) * gripRamp` — grip radius at
  cruise ~160u (can't hold the 110-130u drift corners), committed drift yaw
  clearly stronger.
- `OOB_EXTRA_LAT 45` (`halfW+45` arms R RESET far out on the plain),
  `OOB_ARM_MS 900`, `OOB_DECAY 2`, `BACKSTOP_RADIUS 40`.
  Removed `EDGE_SHOULDER` and `OOB_FALL_DEPTH` (no falling off the world).

`src/drift-control.ts`:
- `GRIP_TOP_SPEED 112`, `BOOST_SPEED_CAP 128`
- `boostTime 0.7`, `boostAccelMax 24`, `kickRad 0.11`, `pendYaw 1.8`
- `DriftStepInput.onRoad: boolean` (new).

## Measured behavior (deterministic, synthetic tracks)

| metric | value |
| --- | --- |
| cruise top / time to 100 | 112 u/s / ~0.87s |
| sustained drift (steer 1) | radius ~39.5u, slip ~24.6deg, avg ~75 u/s |
| drift top (steer 0.2) | ~89.4 u/s (just under the 90 cap) |
| clean exit | q~0.82, exit ~91 u/s, surge peak 128 u/s, settles to 112 |
| grip-only on a 120u corner | scrapes the outside rail (cannot cruise) |
| drift on the same corner | clean, 0 contacts |
| surface edge / verge-mid / plain | roadY / ~1.75 / -2.5 (roadY 6) |

## Dirt no-reward gate (the missed requirement, now enforced)

Dirt keeps the slippery feel (low lateral grip, momentum/slip persists, reduced
forward traction) but earns **nothing**:

- `DriftStepInput.onRoad` is computed at step start **and projected one step
  ahead**, so a car that leaves the asphalt within the same step is treated as
  off-road.
- `updateDrift` off-road branch: cancels `boostT`/`boostAccel`, clears
  `lastQuality`/`lastGrade`, aborts the slide (`phase='idle'`), clears
  exit/chain latches and pendulum. No entry, no graded exit.
- `sim.ts` also calls `clearDirtReward()` when `!onRoad` (before the accel
  read) and again after integration when the step ends off-road; the legacy
  clean-exit `exitT` earn is guarded by `onRoad`.
- A stored road charge carried into dirt is wiped; a dirt charge cannot be
  cashed on return.
- Road crest launch is gated `!offroad` (a car on flat dirt never launches off
  the nearest road sample's curvature); road crest airtime is unchanged.
- Finish requires on-road (`|lat| <= halfW`) at the plane; dirt beside the
  finish cannot cross for a time. Cuts remain blocked by the existing
  trackFollow motion gate + `FINISH_TAIL`.

## Tests (isolated `.muse/test-output/speed-dirt`)

```
./node_modules/.bin/tsc -p tsconfig.tests.json --outDir .muse/test-output/speed-dirt
node .muse/test-output/speed-dirt/tests/<name>.js
```

Passing (own physics/drift/barrier/recovery checks):

```
physics-feel 214/0   drift-control 108/0   barrier-edge 45/0
harness 276/0        retry-restart 34/0    barrier-plan 49/0
```

New regressions added: `SD1` pre-existing boost canceled on dirt (+ stored
charge wiped), `SD2` repeated dirt taps/counters never enter or grade an exit,
`SD3` returning to road cannot cash a dirt charge, `SD4` no crest launch on
flat dirt and dirt beside the finish cannot finish; `drift-control` test 34
covers the module-level off-road cancel. Updated old expectations with evidence
(cruise/drift/exit bands, `E1/E3`, `W2` spawns at the contact plane so impact
speed is angle-controlled, `R3` teleport bound scales with step length,
`barrier-edge` now asserts supported dirt instead of falling, `barrier-edge`
`SR0` hazard is now an off-road restore).

## Limitations / notes

- `corner-apex` is red **because the track worker is concurrently rewriting
  `src/trackgen.ts`** (committed-drift grammar, 72u corners) and `src/ghost.ts`.
  Its geometry/bot/scripted-line failures are that worker's in-progress changes,
  not this physics; I updated only its speed thresholds (`MAX_GRIP_SPEED`/
  `MAX_DRIFT_SPEED`) and the mid-skill completion time cap (60s -> 180s) with
  evidence. Not chased further per the review.
- Course/reference replay times change with the faster car; the
  track/course worker must regenerate the bundled references (and daily
  calibration) against this physics. `courses`/`course-reference`/`ghost` were
  not touched here.
- The dirt plain is a constant `-2.5`; bank height and the rendered ribbon come
  from `groundSurfaceY`, so the render worker must import the same module.
