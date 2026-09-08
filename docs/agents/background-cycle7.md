# Cycle 7 — Background composition (convincing world)

Workstream: Background composition (`01a07eb8-79cf-7292-8f78-438638541ec6`).
Owned files only: `src/environment.ts`, `tests/visuals-budget.ts`,
`docs/agents/background-cycle7.md`. No edits to `main.ts`, sim/trackgen/
barrier workstreams, configs, or `dist`. No deploy, no branded assets.

## Complaint addressed

Background read as "close, flat canyon slabs": one prism geometry for both
depth layers, heights random-walking per slot, unbounded both-sides runs, no
gate/landmark moments. Fixes follow the Cycle-4 art review (`art-direction-
cycle4.md`) inside the existing instancing architecture.

## Changes (`src/environment.ts`, API-compatible)

- **Two archetypes:** near cliffs keep the 5-sided prism (`WALL_TRIS = 30`);
  the far range renders through a new 7-sided tapered-butte mesh
  (`FAR_GEOMETRY_KIND`, `FAR_TRIS = 28`, own jitter seed). Separate
  `InstancedMesh` per archetype — far no longer reads as "near walls pushed
  back". Env draws 4 → 5 (cap is 5).
- **Flat shading:** `FLAT_SHADED = true` on wall/far/mesa/arch Lambert
  materials, so oblique facets catch light differently down the track.
- **Ridgeline phrasing:** cut-wall heights scale per 5-station phrase block
  (`0.72 + phrase*0.65`) — alternating tall/short phrases instead of a height
  random walk. Inside-corner height caps apply after scaling.
- **Corridor breaker:** at most 4 consecutive both-sides cut stations, then a
  forced vista — no both-sides-tall run exceeds ~56u. Pure + deterministic.
- **Gate piers:** two pier pairs flank the road (start straight + mid course),
  rendered through the mesa mesh (no new draw call) and bleached pale via
  `PIER_TINT` (`isGatePier(tint >= 300)`) so they read as engineered concrete
  gates. Corridor-audited like all mesas.
- **Counts:** `EnvCounts` gains `farWalls` (`walls` stays the total, so older
  consumers are unaffected); tri/draw estimates use the near/far split.

## Tests (`tests/visuals-budget.ts`, block 25–30; test 13 mesa count 16→20)

- Archetype split + exact tri math + 5-draw accounting + empty mounts nothing.
- Ridgeline: ≥ 8 phrase blocks, tall/short span ≥ 12u, ≥ 3 extrema,
  deterministic (`ridgeBlockMean` probe).
- Both-sides runs ≤ 4 stations; vista breaks present.
- Repetition scan: no 100u window with > 80% yaw/height-matched walls.
- Gate piers: 4 total, tall/thin/un-hazed, both sides, bleach rule, marker
  boundary.
- Envelope: env ≤ 5 draws / ≤ 26k tris; combined ≤ 10 draws / ≤ 40k tris.

## Measurements (/tmp strict tsc clean; plain node)

- `visuals-budget`: **132/132 green** (synthetic 2252u).
- `trails-bounds`: **41/41 green** — 30 date seeds × desktop/mobile give
  **zero corridor intrusions** over 39,700 placements (worst 0.00u); today
  0.00u over 725. Gate piers + ridgeline + run breaker need no extra pushes.
- Desktop env: 239 near + 74 far / 20 mesas / 3 arches / 372 scrub =
  **5 draws / 15,418 tris**. Mobile plan: 13,642 tris; runtime `setQuality`
  additionally zeroes the far mesh → **≈ 11,570 rendered (~75%)** with all
  landmarks (piers, spires, arches) preserved.
- Combined visuals + env: **9 draws / 21,218 tris**.

## Integration guidance (integrator)

- **Mount:** unchanged. Same `envKit`, same `mountEnvironment` signature;
  `setQuality` semantics extended (mobile now drops the far-butte mesh
  instead of truncating one shared mesh — same call, better savings).
- **Removal/revert:** `git checkout src/environment.ts
  tests/visuals-budget.ts`; delete this handoff. Nothing else references the
  new exports.
- **Do not raise budgets:** headroom remains (~10.5k tris under cap) for the
  barrier workstream's visible rails.

## Known limits / risks

- No spanning gate over the road (would need verified vertical clearance and
  could confuse the barrier workstream's collide-only-what-you-see contract);
  pier pairs give the gate read without the risk.
- No future-track sliver/viaduct and no floor aprons — both live in
  `main.ts` road/ground wiring (integrator-owned), noted for visual QA.
- Mobile renders ~75% of desktop tris, not the review's aspirational ≤ 60%:
  landmarks were prioritized over filler cuts. If more is needed, thin mobile
  scrub to one-third (pure `setQuality` change, no planner impact).
- Art-review screenshot sweep (start-straight, corner exits, side profile,
  palette picker, mobile pair) still needs the integrator's browser QA.
