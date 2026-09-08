# Jitter Cycle 2 handoff — render-motion

Updated: 2026-09-07. Owned files: `src/render-motion.ts`,
`tests/render-motion.ts`. No changes to main/sim/visuals/environment/configs,
`dist/`, or `test-dist/`. No deployment. Tests: 39 checks, all passing under
plain node via temporary compiled output in `/tmp` only.

## Diagnosis — residual jitter sources in current `main.ts` / `sim.ts`

Fixed-step pose interpolation (`interpPose`, `alpha = acc/DT`) is sound. The
remaining jitter is downstream of it, in per-render-frame camera/transform code:

1. Camera yaw locked to body heading (`main.ts` chase-cam block: `fx/sin(rp.h)`
   drives both the `want` anchor and the `lookAt` target). During drift,
   yaw-rate spikes whip the camera anchor AND the aim point — the primary
   residual shake. Fix: lagged camera yaw, velocity-led with drift hold-back.
2. FOV target steps `+5` instantly on drift enter/exit (`targetFov` ternary);
   only the output is smoothed, so FOV velocity jumps. Fix: smooth the drift
   envelope itself (`driftMix`), then damp FOV.
3. `new THREE.Vector3` allocated every frame for `want` — GC churn →
   frame-time spikes on mobile. Fix: module holds all state; zero allocations
   in `updateMotion` (flat-number `MotionState`, module-scratch pair only).
4. 4-step cap with retained `acc` debt: after a spike, `alpha` distorts and
   catch-up runs slow-mo while the camera keeps converging — relative lurch.
   Fix: clamp render dt (`maxDt: 0.05`), hold on `dt <= 0`, explicit snap API.
5. `track.y[info.sIdx]` quantized ground height for the blob shadow: pops on
   index jumps and `lastIdx` corrections. Out of scope for this module (mesh
   side), but the camera no longer reads it — it follows `rp.y` only.
6. Wall-clamp kinks in the sim pose feed straight into the camera (only
   landings had an impulse, `impact`). Fix: bounded decaying lateral impulse
   on `wallHit`, opposed to travel, clamped to `maxImpulse: 1.2`.
7. Lean `car.rotation.z = -steer * ...` steps with raw input; wheel spin uses
   retained info (fine). Mesh side — integrator should smooth lean with
   `driftMix` from this module instead of the raw ternary.
8. Ghost sampling (`sampleGhost` at interpolated `ghostMs`) is already smooth
   and holds the finish — not a jitter source. Left untouched.
9. Subtle: semi-implicit Euler advances position with the *new* velocity, so a
   naive `2v/λ` feedforward OVERcompensates by exactly `v·dt` — the camera
   leads the car by one render frame (1.33u @60Hz/80u/s, 0.56u @144Hz), i.e.
   refresh-rate-dependent framing. Fix: compensate `(2/λ − dt)·v`, verified to
   0.0000u trail error at 60/90/120/144Hz.

## API (`src/render-motion.ts`, pure TS, no THREE/DOM/random/network)

- `DEFAULT_TUNING: MotionTuning` — lambdas pos 7 / look 10 / yaw 5 / fov 5 /
  drift-envelope 6; geometry matches the current game (dist 11.5, height 4.6,
  look 9/1.4, fov 62+14+5 @60u/s); `feedforward: 1`, `maxImpulse: 1.2`,
  `impulseDecay: 5`, `maxDt: 0.05`.
- `createMotionState(): MotionState` — flat numbers, preallocated.
- `resetMotion(m, t, px, py, pz, heading)` — exact snap (run start, respawn,
  teleport, finish); clears velocities, envelope, impulse. Next identical
  update yields bitwise-identical state.
- `updateMotion(m, t, inp: MotionInput)` — returns void, allocates nothing.
  Holds on `dt <= 0` / non-finite input / unready (auto-snaps first call).
- `cameraHeadingTarget(bodyH, vx, vz, speed, tangentX/Z, hasTangent,
  driftMix)` — velocity-led above 8u/s, tangent-stabilized at crawl (slip
  authority ramps with `speed/8`), 75% slip hold-back at full drift.
- `fovTarget(t, speed, driftMix)`, `cameraOutput(m, out)`,
  `impulseLength(m)`, `wrapPi`, `clamp` helpers.

## Measured thresholds (synthetic 120ms-pose streams, all asserted in tests)

| Case | Result |
|---|---|
| Steady 80u/s trail error, 60/90/120/144Hz | 0.0000u all rates |
| Max camera frame delta, steady | exactly `v·dt` (1.333/0.889/0.667/0.556u, no overshoot) |
| 20u teleport → <0.2u / <0.05u @120Hz | 0.99s / 1.23s |
| 100ms spike @120Hz | no NaN, single-frame <6u, reconverges <0.3u |
| Drift 0.6 rad slew: damped vs body-locked look rate | 2.9 vs 13.5 u/s (0.21×); cam yaw within 0.2 rad of velocity |
| 3u wall kink @60Hz | <1.2u/frame, settles <0.25u, no ringing |
| Heading sweep through ±π | max yaw step <0.15 rad, tracks wrapped target |
| Landing (landV −18) | impulse 0.677 ≤ 1.2, <0.002 after 1.2s |
| FOV drift toggle @60Hz | max step <0.6, settles 76.0 ±0.5 |
| Zero/negative dt, NaN input | state bitwise identical, stays finite |
| Determinism | identical traces across runs |

## Integration steps (integrator, `main.ts` only)

1. Enroll the suite: add `src/render-motion.ts` + `tests/render-motion.ts` to
   `tsconfig.tests.json`, chain `node test-dist/tests/render-motion.js`.
2. Add `const motion = createMotionState()` + `import { ... } from
   './render-motion'`; delete per-frame `new THREE.Vector3`.
3. In `startRun`/`placeAt`/`finishRun`: call `resetMotion(motion, TUNE, sim.px,
   sim.py, sim.pz, sim.heading)` (replaces manual `camPos` set + `snapView`
   for the camera; keep `snapView` for the car pose if desired).
4. Per run/finish frame: build `MotionInput` from `rp` (pose), `sim.vx/vz`,
   `info.spd/drifting`, track tangent at `info.sIdx`, `fresh.landed/landV`,
   wall-hit flag (`info.impact > 0` + inward normal → set `wallVn =
   info.impact * 25`); call `updateMotion`, then `camera.position.set` via
   `cameraOutput`, `camera.lookAt(m.lx, m.ly, m.lz)`, `camera.fov = m.fov`.
5. Delete the old `camPos.lerp` / `impact` / `targetFov` lines; keep
   `updateProjectionMatrix` (call only when `fov` changes by >1e-3 to save
   matrix work — optional).
6. Optional: drive car lean and tail-light color from `motion.driftMix`
   instead of the raw `info.drifting` ternary to remove lean pops.
7. Re-run full suite + build + desktop/mobile QA per orchestration checklist.
   Watch: countdown→run transition (reset covers it), finish snap, and menu
   orbit (leave orbit code as-is; reset on DRIVE).

## Risks / notes

- Sustained-turn camera lag (`yawRate/headLambda`, e.g. 0.2 rad in a 1 rad/s
  sweeper) is intentional stability trade-off, not a bug; raise `headLambda`
  if turn-in feels vague, lower if drift whip returns.
- `maxDt` clamp means >50ms spikes briefly slow the camera rather than jump
  it; sim debt behavior is unchanged (sim team's call).
- Tests import `../src/render-motion.js` (nodenext, matching other suites) and
  declare only `process.exit`; no global collisions. Suite is a module.
