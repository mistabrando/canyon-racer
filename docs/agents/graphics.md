# Graphics / Performance worker handoff

## What was built

- `src/visuals.ts` — optional instanced readability layer (new file, sole owner).
- `tests/visuals-budget.ts` — 35 headless budget tests, all passing (new file).
- This handoff (new file). No other files touched; no deploy; no shared build run.

## Module contents (`src/visuals.ts`)

Pure planning core with zero runtime `three` import (`import type` only; the
namespace is injected), plus a thin `mountVisuals(THREE, scene, track, opts)`
binding. Deterministic in arc distance — no `Math.random`, no sample-index
keying, so readability holds at any centerline sampling.

| Family | What | Placement |
|---|---|---|
| Guardrails | Low instanced boxes both edges (`halfW + 2.2`), red every 4th | Every 10u of arc (16u mobile) |
| Chevrons | Single instanced quad mesh, per-instance color: red = drift (`medR ≤ 75`), amber = sweeper | 3 advance boards (70/50/30u before entry) + repeaters every 40u through the corner, all on the corner outside |
| Speed ticks | Instanced flat quads at both road edges (`halfW − 1.2`) | Every 25u of arc (40u mobile) |
| Dust | `DustRing`: preallocated `Float32Array` ring, deterministic pseudo-spread, dead slots parked at y = −100 | Spawn hook called from sim step only |

Geometry/materials are shared via a per-namespace module cache (one box, one
chevron quad, one tick quad, three materials). `dispose()` frees only the
`InstancedMesh` wrappers, never the shared assets.

## Estimated cost (nominal ~2252u daily track, 8 corners)

Desktop: ~450 guardrails, ~40 chevrons, ~180 ticks, 160 dust →
**4 new draw calls** (one `InstancedMesh` per family + dust `Points` when the
integrator mounts it), **~5.9k new triangles** (5400 + 360 + 80).
Mobile preset: ~280 / ~40 / ~112 / 80 → same 4 calls, ~3.7k tris.
Hard caps enforced in `BUDGET`: 640 / 128 / 260 / 220 instances, ≤ 5 new draw
calls, ≤ 12k new tris. `withinBudget()` + `estimateDrawCalls()` /
`estimateTriangles()` are exported for CI-style assertions.

## Integration instructions (for the integrator)

1. Build `TrackData` from existing locals: `{ points: pts, tangents, normals,
   cum, events: daily.stats.events, crestS: daily.crestS }`.
2. Call `mountVisuals(THREE, scene, track, { mobile: coarse })` once after the
   road ribbon is built. Wire `handle.setQuality(coarse)` on quality change.
3. Dust/skid hooks (restrained): in `step()`, alongside the existing
   `puff()`/`skidAt()` calls, call `handle.dust.spawn(x, y, z, spread)` at most
   2/frame while drifting and grounded; copy `handle.dust.positions` into the
   existing dust cloud attribute (or mount a dedicated `Points` — costs 1 draw
   call, already budgeted). Do NOT replace the existing skid ring; this module
   ships no skid mesh on purpose.
4. Call `handle.update(dt)` once per render frame; call `handle.dispose()` on
   teardown. Never call mount per frame — placement allocates once.

## Mobile degradation knobs

`resolveOptions({ mobile: true })` widens guard spacing 10→16u and tick spacing
25→40u and shrinks dust 160→80. At runtime `setQuality(true)` hides only the
tick mesh (speed noise) and keeps guardrails + chevrons (readability); no
reallocation, visibility toggles only. Pixel-ratio/antialias policy is unchanged
and stays owned by `main.ts`.

## Risks / notes

- Chevron "outside" assumes the sim normal convention `n = (−tz, tx)`
  (driver-right = +1). Verified against `trackFromPoints`; if sim normals ever
  flip, boards land on the inside — `planChevrons` side ternary is the one-line
  fix, covered by side-specific tests.
- `main.ts` already renders posts, dashes, skids, and dust. This module adds
  guardrails/chevrons/ticks as net-new families; the integrator should confirm
  the combined scene still reads cleanly (posts at 11u + rails at 10u may look
  busy on mobile — consider hiding ticks when both are on).
- Tests are standalone (`tests/visuals-budget.ts` + temp-dir `tsc`, 35/35
  passing) because `tsconfig.tests.json` is shared-owned and was not edited.
  The integrator may wire the file into the shared test config.
