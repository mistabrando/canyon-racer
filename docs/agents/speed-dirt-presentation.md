# Speed + dirt presentation — handoff (2026-09-15)

Owner: presentation integrator (DeepSeek Flash, OpenCode). Scope delivered:
`src/main.ts`, `src/render-motion.ts`, `src/environment.ts`, `tests/render-motion.ts`,
`tests/visuals-budget.ts`, this handoff. Shared config, `sim/drift/courses/trackgen/ghost`
untouched. Consumed the shared `src/surface.ts` contract from the physics worker.

## Player-facing changes

### Speed feel (camera + FOV + body)
- Chase camera is lower and closer: `camDist` 11.5 → 8.8, `camHeight` 4.6 → 3.5,
  with the sightline pushed ahead (`lookAhead` 9 → 12, `lookHeight` 1.4 → 1.2) so
  the next corner reads earlier.
- Stronger but bounded speed-FOV: `baseFov` 62 → 60, `speedFov` 14 → 32,
  `driftFov` 5 → 7. Total range stays ≤ 100° (no fisheye/strobe) and saturates at
  the real top speed.
- FOV normalization now uses `SPEED_FULL = max(MAX_GRIP_SPEED, BOOST_SPEED_CAP)`
  exported by `render-motion.ts` (currently 128 with the tuned physics, up from
  the stale 80), so cruise ~105–115 and exit ~120–130 actually reach the top of
  the ramp. Audio engine pitch/load uses the same `SPEED_FULL`, not 80.
- Body: visual-only, bounded exaggeration — extra yaw from the real slide angle
  (`-slip * (0.15 + 0.35*driftMix)`, clamped) plus a one-shot clean-exit surge
  lean/pitch fired from the actual reward event and decayed (`surgeVis`). No new
  shake/strobing; existing wall shudder and drift roll are preserved/bounded.

### Out-of-bounds dirt plain (./surface.ts contract)
- Replaced the finite 2600×2600 floor + decorative mesa with one expansive dirt
  plain sized from the full course bounds with a 1200 u margin
  (`groundPlainBounds` in `environment.ts`) and a floor of
  `GROUND_PLAIN_MIN_SIZE` (8000), placed a hair below `DIRT_PLAIN_Y` (render
  only) so the verge seam cannot z-fight.
- The plain is recentred on the camera each frame in `GROUND_PLAIN_SNAP` (500)
  whole-grid steps. A flat untextured plane is identical under any whole-grid
  shift, so this is invisible, while guaranteeing the nearest plane edge is
  ≥ 3750 u from the camera — well past the 2000 u frustum far plane. Driving
  far onto the dirt therefore never reveals a ground edge. Pure contract
  `groundPlainCovers(cameraFar)` is unit-tested.
- Opening composition fix: `enforceCorridor` now applies the launch-vista
  separation rule against the NEAREST centerline station (not the placing
  station). On the new practice geometry a terrace placed after `OPENING_LEN`
  still sat only 81 u from an opening sample; it is now pushed to
  `OPENING_MIN_LATERAL` (150), so the `practice opening formations separated`
  regression passes without weakening the assertion.
- Added a per-side sloping verge ribbon sampled through
  `groundSurfaceY(roadSampleY, lateral, halfW)`, so the rendered bank is exactly
  the surface the tuned sim drives (smoothstep from the road edge down to the
  flat plain over `DIRT_VERGE_WIDTH`). No hard ground edge or visual void.
- Grounded the blob shadow, skid marks and dirt dust on `groundSurfaceY` under
  the car (via `surfaceYAt`), so nothing floats at the nearest road height when
  off-course; landing dust still uses the car's own grounded position.
- Clear feedback: restrained extra slip dust while off-road at speed and a
  `LOW GRIP — DIRT` HUD cue (urgent STUCK/OFF COURSE prompts still win).

### Fresh-competition PB policy
- Removed the legacy per-day PB/ghost read and write fallbacks from `main.ts`.
  Old `canyon-best-*` / `canyon-ghost-*` keys are left untouched on disk but are
  never read or written, so old-physics results cannot seed the new competition.

### Preserved
- Retry / focus-loss / replay (watch reference) / pause / menus / audio lifecycle
  are unchanged; `startRun` only clears the new `surgeVis` visual.

## Scoped checks (repo-relative, isolated)

```
rm -rf .muse/test-output/speed-dirt-presentation
./node_modules/.bin/tsc src/sim.ts src/drift-control.ts src/trackgen.ts \
  src/barrier-plan.ts src/visuals.ts src/environment.ts src/surface.ts \
  src/render-motion.ts src/loop.ts src/ghost.ts src/share.ts \
  src/retry-control.ts src/courses.ts src/course-reference.ts \
  tests/render-motion.ts tests/visuals-budget.ts \
  --target es2020 --module nodenext --moduleResolution nodenext --strict \
  --skipLibCheck --outDir .muse/test-output/speed-dirt-presentation

node .muse/test-output/speed-dirt-presentation/tests/render-motion.js    # 56 passed, 0 failed
node .muse/test-output/speed-dirt-presentation/tests/visuals-budget.js   # 256 passed, 2 failed
```

Dedicated output dir only; the earlier `.muse/test-output/speed-dirt` path was
shared with the physics worker and a `rm -rf` there removed their files. This
packet now uses `.muse/test-output/speed-dirt-presentation` exclusively.

- `./node_modules/.bin/tsc --noEmit` (app) is clean.
- New camera tests prove `SPEED_FULL === max(MAX_GRIP_SPEED, BOOST_SPEED_CAP)`,
  the tuning uses it, the FOV ramp is stronger yet bounded ≤ 100°, the chase
  camera is lower/closer, and settle/refresh-rate properties still hold.
- New surface/plain tests prove the exact road-height-on-road / flat-end
  smoothstep verge to `DIRT_PLAIN_Y`, flat plain beyond, `groundPlainBounds`
  covering every point with the requested margin, and `groundPlainCovers(2000)`
  so the recentred plain never exposes an edge inside camera far.
- Opening regression fixed: all `visuals-budget` opening assertions pass.

## Limitations / notes
- The remaining 2 `visuals-budget` failures are the course owner's:
  `practice/benchmark reference matches the built geometry` (the recorded
  references still target the previous `trackgen` checksum). Per the follow-up,
  reference-checksum work is left to the course owner.
- `tests/barrier-edge.ts` / `tests/drift-control.ts` currently fail to compile
  against the physics worker's in-progress `sim.ts` (removed `EDGE_SHOULDER`,
  changed speed constants), so the full shared `npm test` was not run; the
  scoped compile above is green.
- No browser was available: the faster framing, dirt bank, dust grounding and
  `LOW GRIP — DIRT` cue are reasoned and unit-tested, not visually verified.
- Verge uses two extra draw calls (one per side); the huge plain is one. No
  procedurally expensive effects were added.
