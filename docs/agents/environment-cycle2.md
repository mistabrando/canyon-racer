# Environment / Performance — Cycle 2 handoff

## What changed (owned files only)

- `src/environment.ts` (new): cohesive low-poly canyon environment module.
- `src/visuals.ts`: guardrails lowered to a sightline-safe profile
  (continuous rails were 2.6u tall, top at +2.3 — now 1.0u, top at +0.85 via
  exported `GUARD_TOP_ABOVE_ROAD`). No API/signature changes.
- `tests/visuals-budget.ts`: 35 -> 69 checks, all passing (isolated `/tmp`
  `tsc` + `node`; shared build untouched during parallel work).
- No edits to main/sim/render/config/dist; no deploy.

## Integration API (for the integrator)

```ts
import { mountEnvironment } from './environment';
import type { EnvKit } from './environment';

// 1. Extend the existing threeKit with four small static classes:
const envKit: EnvKit = { ...threeKit,
  CylinderGeometry: THREE.CylinderGeometry, ConeGeometry: THREE.ConeGeometry,
  TorusGeometry: THREE.TorusGeometry, BufferAttribute: THREE.BufferAttribute };

// 2. Mount once after the road ribbon (replaces the wall/mesa box block and
//    the rock scatter if desired — see rationale):
const env = mountEnvironment(envKit, scene, {
  points: pts, tangents, normals, cum,
  events: daily.stats.events, crestS: daily.crestS,
}, { mobile: coarse, halfW: HALF_W });
env.setQuality(coarse); // far-wall layer + half scrub truncated on mobile
// env.update(dt) is a no-op (static scenery); call for loop symmetry.
// env.dispose() frees InstancedMesh wrappers, never the shared cache.
```

`mountEnvironment` returns `{ counts, setQuality, update, dispose }`.
Placement is deterministic (integer-hash driven, arc-distance keyed) and
allocates once at mount; per-frame allocation is zero by construction.

## Measured cost (2252u synthetic daily-length track)

`visuals={448 rails, 40 chevrons, 172 ticks, 160 dust}`
`env={394 walls, 16 mesas, 3 arches, 372 scrub}` ->
**8 combined new draw calls, ~16.4k combined new tris**
(env alone: 4 draws, ~10.7k tris; caps: 5 draws / 26k tris per module).
Mobile: scrub 372->224, far-wall layer hidden via `count` truncation,
ticks hidden (visuals) — landmarks and chevrons preserved.

## Before / after visual rationale

- Before: identical white boxes marched both road edges every 6 samples with
  `Math.random` scale/color jitter, identical boxes doubled as mid mesas, and
  2.6u rail walls sealed the road in — repetitive, flat-shaded, sightlines
  blocked on corner exits.
- After: two wall depth layers (near 19–34u, far 70–130u) with baked 4-band
  strata vertex colors and warm near-white per-instance tint variation;
  inside-corner walls are pushed to >= 26u lateral and capped at 22u height so
  exits stay visible; mid mesas + 8 fog-hazed horizon buttes (`0xeab183`,
  matching scene fog) give depth; 2 spires + 3 torus arches act as corner
  landmarks; olive scrub cones hug the road edge (11.5–16u) for near-field
  motion parallax; rails at +0.85 preserve the road-edge hierarchy
  (curb -> rail -> scrub -> wall) without obstructing the chase-cam view.
- Everything is procedural; no downloaded textures, no protected logos/assets.

## Risks / notes

- `main.ts` still mounts its own wall-box block, rocks, and ground patches.
  Net scene cost depends on what the integrator removes; recommendation: delete
  the wall/mesa box block and rock scatter (fully superseded), keep ground
  plane + patches + dashes + gantries.
- New `three` classes required in the kit: `CylinderGeometry`,
  `ConeGeometry`, `TorusGeometry`, `BufferAttribute` — all small; keep them
  statically referenced (same pattern as `threeKit`) to protect tree-shaking.
- Chevron side convention unchanged (`+normal` = driver-right); arch torus
  plane is yaw-aligned to face oncoming drivers.
