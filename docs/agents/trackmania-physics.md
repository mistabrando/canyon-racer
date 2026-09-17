# Trackmania physics — FROZEN

Owner: orchestrator (workers returned empty; done directly). Owned files:
`src/sim.ts`, `src/drift-control.ts`, `tests/physics-feel.ts`,
`tests/drift-control.ts`, `tests/barrier-edge.ts`, `tests/harness.ts`
(physics bands only). Not touched: trackgen/courses/reference/ghost,
main/render/environment/audio/UI.

**Road tuning is frozen.** Course worker may regenerate references now.

## Frozen constants

`src/sim.ts`:
- `START_SPEED 10`, `ACCEL_ROAD 140`, `ACCEL_OFFROAD 9`
- `MAX_GRIP_SPEED 140` (cruise), `MAX_DRIFT_SPEED 112`, `MAX_OFFROAD_SPEED 44`
- `DIRT_LATERAL_GRIP 1.5`, `OFFROAD_DRAG 0.9` (dirt unchanged: slidey, punishing)
- Yaw: `highCut = spd<=30 ? 1 : max(0.30 + 0.08*clamp((spd-100)/40,0,1), 1-(spd-30)/95)`;
  `yawRate = lerp(2.3*highCut, 1.9, driftAmt) * gripRamp`.
  Below 100 u/s the pre-Trackmania grip curve is bit-identical; the floor ramps
  0.30 -> 0.38 by 140 so grip radius at cruise is ~160 (140/(2.3*0.38)).
  Corners under ~130u cannot be held on grip; drift full-lock radius ~59u
  (112/1.9) so r45+ hairpins are drift-holdable below the drift cap.
- `OOB_EXTRA_LAT 45`, `OOB_ARM_MS 900` unchanged. Dirt plain contract verified:
  ground everywhere at any lateral distance (no void, no fall), dirt earns no
  drift rewards, finish requires on-road, R RESET arms only far out.

`src/drift-control.ts`: `GRIP_TOP_SPEED 140`, `BOOST_SPEED_CAP 162`
(boostTime 0.7, boostAccelMax 24 unchanged).

## Measured behavior (deterministic probes, `.omo/probe-f2.mjs`, `.omo/probe-c7.mjs`)

| metric | value |
| --- | --- |
| cruise top / 0-100 time | 140 u/s / ~0.7s (504 km/h on HUD) |
| sustained full-lock drift | radius ~57-59u, slip ~25deg, settles ~99-112 u/s |
| clean exit (q 0.817 perfect) | vEx 113.7, surge peak 162.0, +0.3s 152, +1.5s 144, settles 140 |
| immediate vs delayed 90deg rotation | 0.93s vs 0.90s (near-parity: delayed banks 0.4s grip pre-rotation), immediate tighter (109u vs 114u arc); delayed still beats grip (1.28s, 163u) |
| wall grind equilibrium | ~67 u/s (~48% of cruise), advances ~32 samples/s |
| cross-rate trajectory divergence | worst 2.95u over ~400u (events identical) |

## Test-band changes (all with measured evidence in comments)

- `physics-feel`: E6 grind bands now cruise-relative (`MAX_GRIP_SPEED*0.55`,
  advance `*0.55/2`); F2 time asserts near-parity (+0.1s) keeping strict
  tighter-line + beats-grip; teleport bounds 2.0/2.2 -> 3.0 (2.33u/step at
  140); W6 counts fresh touches (evts<=touches, impactSteps===evts); D6.8
  dp bound 2.5 -> 3.2 (cruise-ratio scaled); C7 fixture wideTrack 400 -> 520
  (scripted path reaches 400.2u lateral at new speeds).
- `drift-control`: sizing pin 112/128 -> 140/162.
- `harness`: 11b auto-drift radius 35-55 -> 48-68 (measured 57); 11i grind
  mirrors of E6.

Passing: physics-feel 214/0, drift-control 108/0, barrier-edge 45/0,
harness 276/0, plus ghost-share/barrier-plan/retry-restart/render-motion/
loop-ui/trails-bounds/audio/driving-feedback/visuals-budget green.
Expected red (course pass owns): corner-apex, courses, track-variance
(geometry/estimator/references still on the 112/90 envelope).

## Notes for the course pass

- Estimator: `EST_CRUISE 140`, `EST_DRIFT_CAP 112`, `EST_SURGE 162`;
  grip lateral accel ~= 140^2/160 = 122; drift-band aLat ~= 112^2/59 ~= 212
  (re-derive against the estimator code, don't blindly take these).
- Crest flight at ~140 with vy<=13 covers ~140u: raise `CREST_RUNWAY`
  (~205) and `HOST_MIN_LEN` (~245), re-validate runoff gates.
- Identity: bump `TRACK_IDENTITY_GEN` 2->3 + `COURSE_REFERENCE_VERSION` 2->3
  (pace + geometry both change); re-record practice/benchmark references.
- Hairpin physics budget: r45-65 hairpins need v<=r*1.9 (86-124 u/s) —
  braking zones before them must support 140 -> ~100.
