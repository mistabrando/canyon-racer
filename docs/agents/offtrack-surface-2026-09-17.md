# Off-track surface (road-relative dirt) + progressive launch — 2026-09-18

Worker files: `src/surface.ts`, `src/sim.ts`, `src/main.ts` (ground block +
`recenterGround` only), `src/environment.ts` (scrub grounding + one comment),
`src/course-reference.ts` (re-recorded fixtures only), tests
(`physics-feel`, `barrier-edge`, `visuals-budget`, `harness` bands), this handoff.
Sim stays pure/deterministic: no random, no DOM, no wall-clock. No new deps.

## 1. What was wrong (measured)

- Road elevation on sampled dailies: **+5.51 .. +16.93**. `DIRT_PLAIN_Y = -2.5`
  absolute, so every verge was a **8.0–19.4u embankment over 18u lateral**.
- `ACCEL_ROAD = 110` flat: t100 = 0.833s from a 10 u/s start, 0→40 in ~0.27s
  (analytic (40−10)/110). All punch, no progression.

## 2. T1 — road-relative dirt

- `groundSurfaceY` now blends roadY → `offroadLevel(roadY) = roadY −
  DIRT_VERGE_DROP (1.5)` over the unchanged `DIRT_VERGE_WIDTH (18)`, then holds
  that level to **any** lateral distance. Max drop beside the road anywhere on
  all four sampled dailies (stations × 0..150u × both sides): **1.500u**.
- `DIRT_PLAIN_Y` kept as a legacy export (name preserved); physics/render no
  longer target it.
- Render: the verge ribbon is now a per-station apron (`resolveApronWidths` +
  `apronColumns` in `surface.ts`, shared with the tests). Width starts at
  `0.6 × local curve radius` (wide 60u on straights, pinched in hairpins;
  measured min daily radius ~40u) then **shrink-wraps**: any station whose
  strip would reverse lateral ordering or flip winding is narrowed (floor 18 =
  the old verge, never narrower). Columns `[0,3.6,…,18,W]` sample the bank
  densely; the tail past 18u is exactly level in both physics and render.
- Far field: the huge plane keeps its footprint/recentre logic but rides at
  `offroadLevel(track.y[lastIdx]) − 0.05` each frame, so the apron edge always
  meets it within road-grade of the car. Palette: bank still near `0xc98d54` →
  far `0xa05f33`, easing into the plane `0xbe7038` at the edge (no tone step).
- Scrub re-grounded onto `groundSurfaceY` in `mountEnvironment` (it sits
  3.5–6.5u out on the bank and would otherwise hover ≤0.3u). Walls/mesas/arches
  anchor at roadY−8, so the raised dirt only buries their bases deeper — fine.

## 3. T2 — progressive launch

- Plain on-road accel is now `ACCEL_ROAD × ramp(fSpeed)` with
  `ramp = 0.55 + 0.45 × min(max(fSpeed,0)/60, 1)` (`LAUNCH_RAMP_MIN/END`).
  Off-road (`ACCEL_OFFROAD`) and crash-upset paths are untouched.
- Boost windows bypass the ramp (`ramp = 1` iff `rhythmBoost > 0 || exitT > 0`,
  the same condition as `boostMakeup`), so exit/rhythm surge accel is
  **bit-identical**: one-step gain at low speed with `exitT > 0` is exactly
  `(110+30+32)/60`, with rhythm boost exactly `(110+30+rhythmAccel)/60`
  (both asserted to 1e-6 in OT6). `ACCEL_ROAD + ACCEL_BOOST_MAKEUP === 140`
  and all three MAX speeds are unchanged.

## 4. Before / after (headless, deterministic)

| metric | before | after |
|---|---|---|
| drop beside road (4 dailies) | 8.0–19.4u | **≤ 1.500u** (0..150u lateral) |
| t100 / t140 (10 u/s start) | 0.833s / 1.183s | **0.950s / 1.317s** (bands held) |
| 0→40 u/s | ~0.27s | **0.383s** |
| first-step punch at 10 u/s | 110 u/s² | **68.8 u/s²** |
| surface draws / tris (per daily) | 3 / ~30.1–30.5k | **3 / ~45.2–45.8k** (static) |
| visuals+env estimator envelope | 10 draws / 18182 tris | **unchanged** (caps 10 / 40000 hold) |
| skilled practice / benchmark | 9075 / 15488 ms | **9174 / 15672 ms** (re-recorded) |

## 5. Verification (all headless; the /tmp/ui-verify harness cannot see 3D
geometry, so the surface is pinned numerically instead)

- **Tracking**: `visuals-budget` 10b(a) + `barrier-edge` 6b scan every 5th
  station × 9 laterals × both sides on all four dailies: maxDrop 1.500.
- **Physics/render agreement**: ribbon vertex heights ARE `groundSurfaceY`
  calls (exact by construction); 10b(b) bounds the linear inter-vertex
  interpolation vs the physics smoothstep at 0.5u steps: maxDev **0.0355** ≤
  0.05. `barrier-edge` 6b parks cars at +5/+30/+90u: `py == surf + 0.2` exactly.
- **Anti-fold**: 10b(c) rebuilds the ribbon from the shared functions on all
  four dailies. Lateral ordering never reverses (min column gap 0.83–3.60u >
  0, i.e. no pass-through/overlap; degenerate tail quad at the width floor is
  zero-area and skipped explicitly). Winding flips: 11/48/19/9 per daily, max
  flipped area 2.61u² — same discretization-noise class as the SHIPPED
  geometry (old 18u verge: 7–38/daily ≤ 3.12u²; the road ribbon itself flips
  4× on daily-09-16), vs 70+/daily with 40–65u² folds if the shrink-wrap is
  removed (tripwire bounds: flips ≤ 55, area ≤ 3.5, gap > 0.5).
- **Launch**: OT6 pins ramp shape, 0→40 band (0.38s), low-speed gain 68.8,
  and bit-identical boost windows. OT4 t100/t140 bands held without moving.
- Suites: all 16 green (counts: harness 276, physics-feel 235, ghost-share 117,
  visuals-budget 270, render-motion 56, drift-control 108, track-variance 197,
  loop-ui 28, retry-restart 34, trails-bounds 41, barrier-plan 49,
  barrier-edge 49, corner-apex 68, audio 41, driving-feedback 46, courses 86).
  `npx tsc --noEmit` clean, `vite build` succeeds.

## 6. Test bands moved (each with a measured cause comment in situ)

- `harness` moderate grip line `w<0.9,v>80` → `w<1.0,v>70`: the fixed 3–6s
  window samples a wall-kiss collapse transient whose sub-60 recovery now
  passes through the ramp (w 0.85→0.91, v 83→76). Grip-hold unchanged; the
  true >60 equilibrium is untouched (ramp = 1 there). Surface excluded: the car
  never leaves the road in that snippet, where old/new ground are identical.
- `physics-feel` OT1 far/verge pitch `≈0` → `≈atan(0.08)`: road-following dirt
  parallels the 8% slopeTrack grade (the old level read assumed the absolute
  plain). On-road pitch byte-identical.
- `barrier-edge` / `visuals-budget` surface assertions: absolute `-2.5` floor
  → road-relative apron level (the contract change itself).
- `src/course-reference.ts` fixtures re-recorded (same skilled-controller
  pipeline, 0 walls/respawns, geometry checksums unchanged, payloads under the
  8192-char limit, roundtrip ≤ 0.354u < 0.4u): practice 9075→9174,
  benchmark 15488→15672. C5 exact-equality checks are intact, not weakened.

## 7. Deliberately NOT changed

`MAX_GRIP/DRIFT/OFFROAD_SPEED`, `ACCEL_OFFROAD`, `OFFROAD_DRAG`,
`DIRT_LATERAL_GRIP`, `ACCEL_ROAD`/`ACCEL_BOOST_MAKEUP` values + identity,
`clearDirtReward` + dirt no-reward gate, `SNAP_*` gates, finish gate, wall
impact/severity/rebound, `StepInfo` shape, `trackgen`, barrier plan, drift
module, ghost codec, medal margins (they derive from the reference × margin,
so gold auto-follows the retime), `package.json`/`tsconfig`/`dist`. No
commits, no deps. No void, no bottomless fall, no invisible wall: ground
exists at every lateral distance by construction.

## 8. Remaining tradeoffs / notes

- Apron tris rise ~30k → ~46k per daily (static geometry, same 3 draw calls;
  estimator budgets untouched). Widths average ~57u; <2% of stations pinch
  below 30u (hairpin insides).
- The far plane is flat while the road undulates ±5u along its length, so far
  from the car (hundreds of units, typically behind canyon walls) the plane
  can sit slightly off the distant apron edge (grade ≈ 0.003 × distance).
  Near the car the seam is exact by construction (Y-follow).
- Micro winding flips (≤2.61u² slivers, DoubleSide, continuous shared verts —
  no holes, no overlap) remain at/below the shipped baseline; zero-flip is
  unachievable even for the road ribbon on the sampled centrelines.
- Corner-apex scripted lines (80 u/s entries) are unaffected by design
  (ramp = 1 above 60): 68/0 green with no band moves.
