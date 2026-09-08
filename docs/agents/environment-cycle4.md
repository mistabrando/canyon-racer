# Cycle 4 — Canyon environment (no more box tunnel)

## What changed (owned files only)

- `src/environment.ts`
  - Wall geometry is now a shared **irregular faceted prism**:
    `CylinderGeometry(0.58, 1, 1, 5, 2)` (30 tris) with deterministic vertex
    jitter (`jitterCliff`, mount-time only) + baked 4-step strata ending in a
    **pale caprock rim**. No `BoxGeometry` remains in the environment.
  - New gorge rhythm (`gorgeModeAt`): stations alternate between enclosed
    **cuts** (cliffs flank both sides, 17–34u) and open **vistas** (one
    midground cliff at 48–93u, far side left open). ~36% vistas in coherent
    3-station blocks — the road breathes instead of forming a corridor.
  - Strata palette gains a 5th pale band (`strataColor(1)` ≈ concrete pale);
    cliff tops now echo the pale engineered track against warm rock / cool sky.
  - Stronger per-instance yaw spread (±0.45 rad) for silhouette variety.
  - Sightline contract preserved: every cliff ≥ 17u lateral; corner-inside
    cliffs (cuts AND vistas) pushed out ≥ 26u and capped at 22u height.
  - Triangle estimate now uses the honest prism cost (`WALL_TRIS = 30`).
- `src/visuals.ts` — untouched (guardrails already at the sightline profile).
- `tests/visuals-budget.ts` — 9 new Cycle-4 blocks (tests 17–24), 104 checks
  total passing under plain node.

## Mount / integration / removal (integrator)

- **Mount:** no change. `main.ts` keeps passing the existing `envKit`
  (`Cylinder/Cone/Torus/BufferAttribute` already wired) into
  `mountEnvironment(envKit, scene, {points, tangents, normals, cum, events},
  {mobile, halfW})`, then `env.setQuality(coarse)`. No new kit classes, no
  new materials, still 4 instanced meshes.
- **Mobile:** `setQuality(true)` truncates the far-wall layer and halves
  scrub by count (no reallocation); mesas/arches stay as landmarks.
- **Removal:** delete the `mountEnvironment` block; nothing else references
  `src/environment.ts` exports. Reverting this cycle = `git checkout`
  `src/environment.ts` + `tests/visuals-budget.ts` (API surface unchanged).

## Measured budgets (straight 2252u synthetic, /tmp tsc + node)

- Desktop env: 325 walls / 16 mesas / 3 arches / 372 scrub = **4 draws,
  15,670 tris** (cap: 5 draws / 26,000 tris).
- Mobile env: same walls / 224 scrub = **4 draws, 13,898 tris**; runtime
  `setQuality` additionally drops the far layer (~−2,200 tris).
- Combined visuals + env: **8 draws / 21,470 tris** (integrator envelope:
  ≤ 9 draws / ≤ 40,000 tris).
- Per-frame allocation: none — `update()` is a no-op; all placement and
  jitter run once at mount; `setQuality` only writes `.count`.

## Before / after rationale

- Before: two layers of jitter-free boxes at 19–34u / 70–130u on both sides —
  a uniform brown corridor with repeating silhouettes.
- After: tapered 5-sided prisms with jittered faces, yaw spread, and
  cut/vista alternation give irregular skylines and open overlooks; pale
  caprock + hazed horizon buttes add the cool-sky / warm-rock / pale-concrete
  separation; low scrub and low rails keep corner exits readable.

## Risks / knobs

- Vista share is hash-fixed at ~36%; tune via the `0.36` threshold in
  `gorgeModeAt` (0.25 = more enclosed, 0.45 = more open).
- Cut setback floor 17u assumes `TRACK_HALF_W` 11.5 + runoff; if the road
  widens again, raise the `17` base in `planWalls` before touching `SIGHTLINE`.
- `WALL_TRIS` must match the real geometry if segments change — the test
  `estimate uses prism cost` guards this.
