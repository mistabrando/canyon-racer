// environment.ts — cohesive low-poly TrackMania-Canyon-inspired environment.
//
// Irregular faceted cliff silhouettes with baked strata + pale caprock,
// alternating enclosed cuts and open overlooks, mid mesas, hazy horizon
// buttes, spire/arch landmarks, and near-road scrub for motion parallax.
// No box walls, no uniform corridor. All procedural geometry
// (no downloaded textures, no protected assets), one InstancedMesh per family
// with shared strata-baked geometry + materials, deterministic hash-driven
// placement in arc distance (no Math.random, no wall-clock), no shadows, no
// post-processing, no per-frame allocations.
//
// The constructor kit is injected (mountEnvironment(envKit, ...)) and extends
// the visuals ThreeKit with three small static classes, so bundler
// tree-shaking of three stays intact and planning stays testable under node.

import type * as THREE from 'three';
import { indexAtS } from './visuals.js';
import type { CornerEventLike, ThreeKit, TrackData } from './visuals.js';

export interface EnvKit extends ThreeKit {
  CylinderGeometry: typeof THREE.CylinderGeometry;
  ConeGeometry: typeof THREE.ConeGeometry;
  TorusGeometry: typeof THREE.TorusGeometry;
  BufferAttribute: typeof THREE.BufferAttribute;
}

export interface EnvironmentOptions {
  halfW?: number;
  wallStep?: number;
  scrubStep?: number;
  mobile?: boolean;
}

export interface EnvResolved {
  halfW: number;
  wallStep: number;
  scrubStep: number;
  mobile: boolean;
}

export function resolveEnvOptions(o: EnvironmentOptions = {}): EnvResolved {
  const mobile = o.mobile ?? false;
  return {
    halfW: o.halfW ?? 8,
    wallStep: o.wallStep ?? 14,
    // Sparser vegetation than the old 12/20 fence; clustering below keeps
    // cover while removing the repeating-triangle read.
    scrubStep: o.scrubStep ?? (mobile ? 28 : 16),
    mobile,
  };
}

// ---------- hard budgets ----------

export const ENV_BUDGET = {
  MAX_WALLS: 700,
  MAX_MESAS: 40,
  MAX_ARCHES: 4,
  MAX_SCRUB: 420,
  MAX_NEW_DRAW_CALLS: 5,
  MAX_NEW_TRIS: 26000,
} as const;

export interface GroundPlainBounds {
  cx: number; cz: number; size: number; minY: number; maxY: number;
}

// The dirt plain is recentred on the camera in whole grid steps, so a plain of
// at least this size always extends past the camera far plane: the nearest edge
// is >= MIN_SIZE/2 - SNAP/2 from the camera. Camera far is 2000 in main.ts.
export const GROUND_PLAIN_MIN_SIZE = 8000;
export const GROUND_PLAIN_SNAP = 500;
export function groundPlainCovers(cameraFar: number): boolean {
  return GROUND_PLAIN_MIN_SIZE / 2 - GROUND_PLAIN_SNAP / 2 >= cameraFar;
}

/**
 * Expansive dirt-plain footprint from the full course bounds with a generous
 * margin, so the horizon reads as one flat plain instead of a finite floor and
 * no course point sits near a visible ground edge. Square, centered on the
 * course bounding box; the renderer places the plane at the shared
 * `DIRT_PLAIN_Y` height from ./surface.ts.
 */
export function groundPlainBounds(pts: { x: number; y: number; z: number }[], margin = 1200): GroundPlainBounds {
  if (pts.length === 0) return { cx: 0, cz: 0, size: margin * 2, minY: 0, maxY: 0 };
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  for (const p of pts) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.z < minZ) minZ = p.z;
    if (p.z > maxZ) maxZ = p.z;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  const cx = (minX + maxX) / 2;
  const cz = (minZ + maxZ) / 2;
  const span = Math.max(maxX - minX, maxZ - minZ);
  return { cx, cz, size: span + margin * 2, minY, maxY };
}

// Sightline contract: road-edge families stay low and clear of the road so
// corner exits stay visible over/around them from chase-cam height.
export const SIGHTLINE = {
  MIN_WALL_LATERAL: 17,
  INSIDE_LATERAL: 26,
  INSIDE_HEIGHT_CAP: 22,
  MAX_SCRUB_H: 1.6,
  MIN_ARCH_LATERAL: 22,
} as const;

// ---------- deliberate composition ----------

// A phrase lasts GORGE_BLOCK stations (~56u at the 14u wall step). Block 0 is
// always an open vista so the launch approach is never a slab corridor. Runs
// of both-sides confinement are capped at the original GORGE_MAX_CUT_RUN = 4
// (~56u), so every enclosed cut decompresses into an overlook.
export const GORGE_BLOCK = 4;
export const GORGE_MAX_CUT_RUN = 4;

// The first OPENING_LEN metres of road are a composed, deliberately open
// launch vista. Inside it:
//  - near walls collapse to low asymmetric shelves (see planWalls),
//  - every other family (mesas, terraces, spires, piers, arches) is pushed out
//    to at least OPENING_MIN_LATERAL so silhouettes read at a separated depth
//    instead of crowding the chase-camera view corridor,
//  - the far range is pushed to OPENING_FAR_LATERAL and made one-sided,
//  - the landmark sits at OPENING_LANDMARK_LATERAL or beyond as the one clear
//    distant silhouette.
// A short EASEIN_LEN ramp after the opening stays one-sided with capped cliffs
// before full confinement resumes. These rules apply to fixed practice/
// benchmark course geometry as well as the daily generator.
export const OPENING_LEN = 180;
export const EASEIN_LEN = 80;
export const OPENING_MIN_LATERAL = 150;
export const OPENING_LANDMARK_LATERAL = 195;
export const OPENING_FAR_LATERAL = 240;
// Minimum center distance any hazed horizon butte keeps from the course, so a
// compact authored course can never have a ring butte looming over the launch.
export const HORIZON_CLEAR = 300;

// All solid formations are anchored ENV_BASE_DROP below road grade and extend
// downward from there, so no piece hovers above the terrain and unsupported
// tips never cross the racing view.
export const ENV_BASE_DROP = 8;

// Midground terraces sit between the near cliffs and the far buttes; the one
// landmark is the memorable silhouette of the course.
export const TERRACE_TINT_BASE = 220;
export const LANDMARK_TINT = 250;

// Fog-compatible haze target for horizon silhouettes (matches scene fog).
export const HAZE_COLOR = 0xeab183;

// ---------- road/guardrail exclusion envelope (pure) ----------
// Placement used to validate instance *centers* only, but the shared wall
// prism scaled by (w, segLen*0.4) spans up to +-w laterally, long segments
// chord across inside corners, scrub crowns overlap the guardrail line, and
// arch rings lean roadside — so geometry seeped into the course. Every family
// below is pushed out by its own true horizontal extent (rotation-aware), so
// no vertex enters the corridor. Centers move; inner faces stay near, keeping
// the enclosed-cut / open-vista rhythm instead of pushing scenery to nowhere.
export const CORRIDOR = {
  GUARD_OUT: 2.6,   // guardrail outer face ~= halfW + 2.0 + rail half-width + margin
  SHOULDER: 2.0,    // car clearance beyond the rails
  SCRUB_OUT: 3.1,   // scrub crown must clear the guardrail outer face + margin
  CURVE_EXTRA: 3.0, // chord-cut margin for walls inside a corner (L~29u, R>=35)
  JITTER: 0.6,      // faceted-vertex jitter bound
  PUSHBACK: 14,     // extra setback: cliffs stay off the road so the track reads first
} as const;

// Centerline distance that must stay clear of solid geometry.
export function corridorNeed(halfW: number): number {
  return halfW + CORRIDOR.GUARD_OUT + CORRIDOR.SHOULDER;
}

// Lateral support of a yawed footprint (true upper bound over vertices):
// |cos|*hx + |sin|*hz + jitter. Conservative over the mesh, tight enough to
// keep near walls near (the long axis runs along the road, not across it).
export function footprintExtent(hx: number, hz: number, yawOff: number): number {
  const c = Math.abs(Math.cos(yawOff)), s = Math.abs(Math.sin(yawOff));
  return c * hx + s * hz + CORRIDOR.JITTER;
}

// Per-family extents. These mirror the mount scales exactly:
// - wall prism: unit-radius 5-gon scaled (w, h, segLen*0.4), yaw ~= road yaw.
//   The support is ellipse-like: sqrt((w*cos)^2 + (seg*cos)^2) + jitter, which
//   upper-bounds every faceted vertex for the small deterministic yaw offsets.
// - mesa: unit-radius 8-gon scaled (w, h, d); circular bound via max scale.
// - arch: torus outer radius 1.28 scaled by r; circular bound.
// - scrub: cone radius 0.9 scaled by w; circular bound.
export function wallExtent(w: number, segLen: number, yawOff: number): number {
  const a = w * Math.abs(Math.cos(yawOff));
  const b = segLen * 0.4 * Math.abs(Math.sin(yawOff));
  return Math.sqrt(a * a + b * b) + CORRIDOR.JITTER;
}
export function mesaExtent(w: number, d: number): number {
  return Math.max(w, d) * 1.0 + CORRIDOR.JITTER;
}
export function archExtent(r: number): number {
  return r * 1.28 + CORRIDOR.JITTER;
}
// Arch vertical half-extent (mount scales y by r*1.2; outer local radius 1.28).
export function archHalfHeight(r: number): number {
  return r * 1.28 * 1.2;
}
// Ring center height for a half-buried arch: the lower arc is sunk below road
// grade so the ring reads as a grounded arch, never a floating hoop.
export function archCenterY(roadY: number, r: number): number {
  return roadY - ENV_BASE_DROP + r * 0.5;
}
// Opening composition rule shared by every formation family: inside the launch
// vista (s < OPENING_LEN) push the body out to at least `minLateral` so the
// forward chase-camera view stays open; outside it, keep the planned lateral.
export function openingLateral(minLateral: number, s: number, base: number): number {
  return s < OPENING_LEN ? Math.max(base, minLateral) : base;
}
// Far-range version: hard push to OPENING_FAR_LATERAL through the launch, then
// a linear ramp back to the planned lateral over the next ~220u so the far
// buttes separate the vista instead of forming an early wall on both sides.
export function farOpeningLateral(s: number, base: number): number {
  if (s < OPENING_LEN) return Math.max(base, OPENING_FAR_LATERAL);
  const t = Math.min(1, (s - OPENING_LEN) / 220);
  return base + (1 - t) * 110;
}
export function scrubExtent(w: number): number {
  return 0.9 * w + 0.3;
}

// ---------- deterministic hash (pure, no seed state) ----------

export function hash01(n: number): number {
  let h = Math.imul(n | 0, 2654435761);
  h ^= h >>> 15;
  h = Math.imul(h, 2246822519);
  h ^= h >>> 13;
  return (h >>> 0) / 4294967296;
}

// ---------- strata palette (pure) ----------

// Five-band canyon strata, t = normalized height 0 (base) .. 1 (caprock).
// The pale caprock rim echoes pale concrete track structures and separates
// warm rock from the cool sky; bakeStrata quantizes to 4 steps so cliff tops
// land on the pale cap.
export function strataColor(t: number): [number, number, number] {
  const bands: [number, number, number][] = [
    [0.40, 0.19, 0.10],
    [0.60, 0.30, 0.15],
    [0.75, 0.43, 0.23],
    [0.87, 0.59, 0.37],
    [0.84, 0.79, 0.70],
  ];
  const x = Math.min(0.999, Math.max(0, t)) * (bands.length - 1);
  const k = Math.floor(x);
  const f = x - k;
  const a = bands[k], b = bands[k + 1];
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
}

// ---------- placement planners (allocate once, at mount) ----------

export interface WallSeg {
  idx: number; side: number; lateral: number;
  h: number; w: number; segLen: number; tint: number; yaw: number;
}

function insideOf(e: CornerEventLike): number {
  return e.dir === 'L' ? -1 : 1;
}

function cornerAt(events: CornerEventLike[], s: number): CornerEventLike | null {
  for (const e of events) {
    if (s >= e.startS - 20 && s <= e.endS) return e;
  }
  return null;
}

export interface WallPlan { near: WallSeg[]; far: WallSeg[] }

// Wall geometry identity: shared irregular faceted prism (5-sided tapered
// cylinder with deterministic vertex jitter), never a box. WALL_TRIS is the
// exact triangle count of CylinderGeometry(0.58, 1, 1, 5, 2):
// side 5*2*2 = 20 + top cap 5 + bottom cap 5 = 30.
export const WALL_GEOMETRY_KIND = 'irregular-faceted-prism' as const;
export const WALL_TRIS = 30;
// Far-range archetype: a 7-sided tapered butte (CylinderGeometry(0.7, 1, 1,
// 7, 1): side 7*2 = 14 + top cap 7 + bottom cap 7 = 28). More facets and a
// stronger taper than the near prism, so depth reads as distinct mesa/butte
// silhouettes instead of "near walls pushed back".
export const FAR_GEOMETRY_KIND = 'tapered-butte' as const;
export const FAR_TRIS = 28;
// Facet contract: Lambert materials for rock families use flatShading so
// oblique faces catch light differently down the track.
export const FLAT_SHADED = true;
// Gate-pier marker: planMesas entries with tint >= PIER_TINT_MIN are pier
// pairs flanking the road; mount renders them bleached pale (instance-color
// multiplier above any rock tint) so they read as engineered concrete gates.
export const PIER_TINT_MIN = 300;
export const PIER_TINT: [number, number, number] = [1.25, 1.18, 1.08];
export function isGatePier(tint: number): boolean {
  return tint >= PIER_TINT_MIN;
}

// Gorge rhythm: deliberate phrases alternate enclosed cuts (walls flank both
// sides) with open overlooks (one midground cliff, the other side left open to
// the horizon). Block 0 is an open launch vista; later phrases alternate with
// deterministic repeats so stretches feel composed rather than metronomic.
export type GorgeMode = 'cut' | 'vista';
export function gorgeModeAt(station: number): GorgeMode {
  const block = Math.floor(station / GORGE_BLOCK);
  if (block === 0) return 'vista';
  const wave = block % 2; // 1 => cut, 0 => vista
  const repeat = hash01(block * 131 + 7) < 0.35;
  const cut = repeat ? wave === 1 : wave === 0;
  return cut ? 'cut' : 'vista';
}

// Mean cut-wall height per 5-station ridgeline block (pure probe for the
// alternation test; vista-only blocks report null and are skipped).
export function ridgeBlockMean(walls: WallSeg[], stationOf: (w: WallSeg) => number): (number | null)[] {
  const buckets = new Map<number, number[]>();
  for (const w of walls) {
    if (w.lateral >= 48) continue; // vista midground cliff, not ridgeline
    const b = Math.floor(stationOf(w) / 5);
    const arr = buckets.get(b);
    if (arr) arr.push(w.h); else buckets.set(b, [w.h]);
  }
  const keys = [...buckets.keys()].sort((a, b) => a - b);
  return keys.map((k) => {
    const arr = buckets.get(k) as number[];
    return arr.reduce((x, y) => x + y, 0) / arr.length;
  });
}

export function planWalls(
  cum: number[],
  events: CornerEventLike[],
  o: EnvResolved,
): WallPlan {
  const near: WallSeg[] = [];
  const far: WallSeg[] = [];
  if (cum.length < 2) return { near, far };
  const total = cum[cum.length - 1];
  let n = 0;
  let si = 0;
  let run = 0; // consecutive both-sides cut stations (corridor breaker below)
  let next = o.wallStep;
  for (let i = 1; i < cum.length - 1 && next < total - 10; i++) {
    if (cum[i] < next) continue;
    next = cum[i] + o.wallStep;
    const s = cum[i];
    const corner = cornerAt(events, s);
    const opening = s < OPENING_LEN;
    const easein = !opening && s < OPENING_LEN + EASEIN_LEN;
    let mode = (opening || easein) ? 'vista' : gorgeModeAt(si);
    // Corridor breaker: never flank both sides for more than GORGE_MAX_CUT_RUN
    // consecutive stations (~56u), so every confinement opens out.
    if (!opening && !easein && mode === 'cut' && run >= GORGE_MAX_CUT_RUN) mode = 'vista';
    si++;
    run = mode === 'vista' ? 0 : run + 1;
    if (opening) {
      // Composed launch vista: only sparse, low asymmetric shelves frame the
      // road. No tall cliff is placed inside the forward chase-camera corridor,
      // so the opening reads open while still having a near edge.
      if (si % 2 === 0) {
        n++;
        const side = hash01(si * 29 + 1) < 0.5 ? -1 : 1;
        const h = 1.5 + hash01(n * 2 + 2) * 3.0;
        const w = 10 + hash01(n * 2 + 3) * 10;
        const segLen = o.wallStep * 1.6;
        const yaw = (hash01(n * 3 + 5) - 0.5) * 0.9;
        const lateral = Math.max(
          22 + hash01(n * 2 + 1) * 16,
          corridorNeed(o.halfW) + wallExtent(w, segLen, yaw),
        );
        near.push({ idx: i, side, lateral, h, w, segLen, tint: n, yaw });
      }
    } else if (easein) {
      // One-sided, set-back midground cliff with capped height: the sky stays
      // open through the approach while the track still gains an edge.
      n++;
      const side = hash01(si * 29 + 1) < 0.5 ? -1 : 1;
      let h = 10 + hash01(n * 2 + 2) * 12;
      if (corner && side === insideOf(corner)) h = Math.min(h, SIGHTLINE.INSIDE_HEIGHT_CAP);
      const w = 12 + hash01(n * 2 + 3) * 16;
      const segLen = o.wallStep * 2.0;
      const yaw = (hash01(n * 3 + 5) - 0.5) * 0.9;
      const inside = corner !== null && side === insideOf(corner);
      const lateral = Math.max(
        74 + hash01(n * 2 + 1) * 50,
        corridorNeed(o.halfW) + wallExtent(w, segLen, yaw) + (inside ? CORRIDOR.CURVE_EXTRA : 0),
      );
      near.push({ idx: i, side, lateral, h, w, segLen, tint: n, yaw });
    } else if (mode === 'vista') {
      // Open overlook: one broad, set-back midground cliff on one side, the
      // other side open to the far range/horizon. This is the "release" that
      // gives the track its breathing vistas.
      n++;
      const side = hash01(si * 29 + 1) < 0.5 ? -1 : 1;
      let h = 16 + hash01(n * 2 + 2) * 26;
      if (corner && side === insideOf(corner)) h = Math.min(h, SIGHTLINE.INSIDE_HEIGHT_CAP);
      const w = 12 + hash01(n * 2 + 3) * 18;
      const segLen = o.wallStep * 2.4;
      const yaw = (hash01(n * 3 + 5) - 0.5) * 0.9;
      const inside = corner !== null && side === insideOf(corner);
      // Exclusion envelope: no vertex inside the road/guardrail corridor.
      const lateral = Math.max(
        58 + hash01(n * 2 + 1) * 80,
        corridorNeed(o.halfW) + wallExtent(w, segLen, yaw) + (inside ? CORRIDOR.CURVE_EXTRA : 0),
      );
      near.push({ idx: i, side, lateral, h, w, segLen, tint: n, yaw });
    } else {
      // Confined cut: asymmetric shoulders (one tall wall, one low ledge)
      // break the "plain slab" read, and each phrase gets a coherent tall/short
      // bias so the skyline alternates in phrases (see ridgeBlockMean).
      const phrase = hash01(Math.floor(si / GORGE_BLOCK) * 57 + 3);
      const phraseScale = 0.72 + phrase * 0.65;
      for (const side of [1, -1]) {
        n++;
        const shoulder = hash01(n * 5 + 11) < 0.5 ? 1.25 : 0.75;
        let h = (15 + hash01(n * 2 + 2) * 15) * phraseScale * shoulder;
        const inside = corner !== null && side === insideOf(corner);
        if (inside) h = Math.min(h, SIGHTLINE.INSIDE_HEIGHT_CAP);
        const w = 6 + hash01(n * 2 + 3) * 8;
        const segLen = o.wallStep * 1.6;
        const yaw = (hash01(n * 3 + 5) - 0.5) * 0.9;
        // Exclusion envelope replaces the old center-only lateral floors.
        const lateral = Math.max(
          17 + hash01(n * 2 + 1) * 17,
          inside ? SIGHTLINE.INSIDE_LATERAL : SIGHTLINE.MIN_WALL_LATERAL,
          corridorNeed(o.halfW) + wallExtent(w, segLen, yaw) + (inside ? CORRIDOR.CURVE_EXTRA : 0),
        ) + CORRIDOR.PUSHBACK;
        near.push({ idx: i, side, lateral, h, w, segLen, tint: n, yaw });
      }
    }
  }
  // Far range: ONE butte per station on an alternating side, so it can never
  // form a symmetric far corridor on both sides of the road. Inside the launch
  // vista it is pushed to OPENING_FAR_LATERAL, then ramps back over ~220u, and
  // its height ramps up with distance so the opening stays airy.
  let m = 0;
  let farNext = 70;
  for (let i = 1; i < cum.length - 1 && farNext < total - 10; i++) {
    if (cum[i] < farNext) continue;
    farNext = cum[i] + 90;
    m++;
    const side = hash01(m * 37 + 5) < 0.5 ? -1 : 1;
    const w = 30 + hash01(1299709 + m) * 40;
    const segLen = 90;
    const yaw = (hash01((5000 + m) * 3 + 5) - 0.5) * 0.9;
    const corner = cornerAt(events, cum[i]);
    const inside = corner !== null && side === insideOf(corner);
    const base = Math.max(
      90 + hash01(7919 + m * 2) * 70,
      corridorNeed(o.halfW) + wallExtent(w, segLen, yaw) + (inside ? CORRIDOR.CURVE_EXTRA : 0),
    );
    const approach = Math.min(1, Math.max(0, (cum[i] - OPENING_LEN) / 220));
    far.push({
      idx: i,
      side,
      lateral: farOpeningLateral(cum[i], base),
      h: (30 + hash01(104729 + m * 2) * 50) * (0.55 + 0.45 * approach),
      w,
      segLen,
      tint: 5000 + m,
      yaw,
    });
  }
  if (near.length + far.length > ENV_BUDGET.MAX_WALLS) {
    near.length = Math.max(0, ENV_BUDGET.MAX_WALLS - far.length);
  }
  return { near, far };
}

// Mesa depth from tint: mirrors the mount scale exactly (single source so the
// exclusion math can never diverge from what is rendered).
export function mesaDepth(tint: number, w: number): number {
  return w * (0.7 + hash01(tint * 13 + 4) * 0.5);
}

export interface Mesa { x: number; y: number; z: number; w: number; h: number; haze: number; tint: number }

export function planMesas(track: TrackData, halfW = 8): Mesa[] {
  const out: Mesa[] = [];
  const n = track.points.length;
  if (n < 2) return out;
  const at = (f: number): number => indexAtS(track.cum, track.cum[n - 1] * f);
  const midF = [0.12, 0.25, 0.4, 0.55, 0.7, 0.85];
  midF.forEach((f, k) => {
    const i = at(f);
    const p = track.points[i];
    const nrm = track.normals[i];
    const side = k % 2 ? -1 : 1;
    const w = 40 + hash01(77 + k * 13) * 50;
    // Exclusion envelope: mid mesas are wide (radius ~= w), so small-hash
    // laterals would otherwise land on the course. Opening vista push-out.
    const lateral = openingLateral(OPENING_MIN_LATERAL, track.cum[i], Math.max(
      90 + hash01(31 + k * 7) * 120,
      corridorNeed(halfW) + mesaExtent(w, mesaDepth(k, w)),
    ));
    out.push({
      x: p.x + nrm.x * side * lateral,
      y: p.y - ENV_BASE_DROP,
      z: p.z + nrm.z * side * lateral,
      w,
      h: 50 + hash01(101 + k * 17) * 40,
      haze: 0,
      tint: k,
    });
  });
  // Horizon buttes ring the course bounding-box center (fog-hazed).
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity, minY = Infinity;
  for (const p of track.points) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.z < minZ) minZ = p.z;
    if (p.z > maxZ) maxZ = p.z;
    if (p.y < minY) minY = p.y;
  }
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
  // Course radius: the horizon ring must clear the whole course, not just its
  // bounding-box center, so compact fixed courses don't get a near butte.
  let spanR = 0;
  for (const p of track.points) spanR = Math.max(spanR, Math.hypot(p.x - cx, p.z - cz));
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2 + hash01(1001 + k) * 0.5;
    const r = Math.max(420, spanR + HORIZON_CLEAR) + hash01(2002 + k * 3) * 200;
    out.push({
      x: cx + Math.cos(a) * r,
      y: minY - 20 - hash01(3003 + k) * 20,
      z: cz + Math.sin(a) * r,
      w: 120 + hash01(4004 + k * 5) * 110,
      h: 90 + hash01(5005 + k * 7) * 70,
      haze: 0.55,
      tint: 100 + k,
    });
  }
  // Spire landmarks near the two long-setup fractions.
  [0.33, 0.66].forEach((f, k) => {
    const i = at(f);
    const p = track.points[i];
    const nrm = track.normals[i];
    const side = k === 0 ? 1 : -1;
    const w = 6 + hash01(7007 + k) * 3;
    const lateral = openingLateral(OPENING_MIN_LATERAL, track.cum[i], Math.max(
      55 + hash01(6006 + k) * 20,
      corridorNeed(halfW) + mesaExtent(w, mesaDepth(200 + k, w)),
    ));
    out.push({
      x: p.x + nrm.x * side * lateral,
      y: p.y - ENV_BASE_DROP,
      z: p.z + nrm.z * side * lateral,
      w,
      h: 70 + hash01(8008 + k) * 25,
      haze: 0,
      tint: 200 + k,
    });
  });
  // Gate piers: two pale pier pairs flanking the road (after the opening
  // vista + mid course). Rendered through the mesa instanced mesh (no new
  // draw call); mount bleaches them via PIER_TINT so they read as engineered
  // concrete gates, not rock. Narrow, so the corridor math keeps them close.
  [0.12, 0.5].forEach((f, k) => {
    const i = at(f);
    const p = track.points[i];
    const nrm = track.normals[i];
    for (const side of [1, -1]) {
      const tint = PIER_TINT_MIN + k * 2 + (side < 0 ? 1 : 0);
      const w = 3 + hash01(6100 + tint) * 1.5;
      const lateral = openingLateral(OPENING_MIN_LATERAL, track.cum[i], Math.max(
        corridorNeed(halfW) + mesaExtent(w, mesaDepth(tint, w)) + 1.5,
        SIGHTLINE.MIN_WALL_LATERAL,
      ));
      out.push({
        x: p.x + nrm.x * side * lateral,
        y: p.y - ENV_BASE_DROP,
        z: p.z + nrm.z * side * lateral,
        w,
        h: 30 + hash01(6200 + tint) * 12,
        haze: 0,
        tint,
      });
    }
  });
  // Midground terrace layer: deliberate shelf buttes between the road and the
  // far range so open vistas read as layered depth instead of empty ground.
  // Placed on alternating sides at fixed fractions, base-anchored below grade.
  [0.06, 0.18, 0.31, 0.45, 0.58, 0.72, 0.88].forEach((f, k) => {
    const i = at(f);
    const p = track.points[i];
    const nrm = track.normals[i];
    const side = k % 2 ? -1 : 1;
    const w = 16 + hash01(14000 + k * 17) * 20;
    const lateral = openingLateral(OPENING_MIN_LATERAL, track.cum[i], Math.max(
      52 + hash01(14200 + k * 23) * 70,
      corridorNeed(halfW) + mesaExtent(w, mesaDepth(TERRACE_TINT_BASE + k, w)) + 4,
    ));
    out.push({
      x: p.x + nrm.x * side * lateral,
      y: p.y - ENV_BASE_DROP,
      z: p.z + nrm.z * side * lateral,
      w,
      h: 14 + hash01(14100 + k * 19) * 18,
      haze: 0,
      tint: TERRACE_TINT_BASE + k,
    });
  });
  // One memorable landmark per course: a single broad, tall flat-topped butte
  // (its pale caprock is baked into the shared strata geometry) set well beyond
  // the opening shelves so it reads as a clearly separated distant silhouette.
  // No stacked cap: nothing unsupported appears near the horizon.
  {
    const i = at(0.08);
    const p = track.points[i];
    const nrm = track.normals[i];
    const side = 1;
    const w = 42 + hash01(15000 + n) * 14;
    const h = 50 + hash01(15001 + n) * 18;
    const lateral = Math.max(
      OPENING_LANDMARK_LATERAL + hash01(15002 + n) * 60,
      corridorNeed(halfW) + mesaExtent(w, mesaDepth(LANDMARK_TINT, w)) + 8,
    );
    out.push({
      x: p.x + nrm.x * side * lateral,
      y: p.y - ENV_BASE_DROP,
      z: p.z + nrm.z * side * lateral,
      w, h, haze: 0, tint: LANDMARK_TINT,
    });
  }
  if (out.length > ENV_BUDGET.MAX_MESAS) out.length = ENV_BUDGET.MAX_MESAS;
  return out;
}

export interface Arch { idx: number; side: number; lateral: number; r: number }

export function planArches(cum: number[], o: EnvResolved): Arch[] {
  const out: Arch[] = [];
  if (cum.length < 2) return out;
  const total = cum[cum.length - 1];
  [0.3, 0.55, 0.8].forEach((f, k) => {
    const s = total * f;
    if (s < 30 || s > total - 30) return;
    const r = 8 + hash01(9111 + k * 13) * 4;
    // Roadside arches never span the road, so the ring must clear the
    // corridor like every other family (spanning would need verified
    // vertical clearance instead — not used).
    const lateral = openingLateral(OPENING_MIN_LATERAL, s, Math.max(
      24 + hash01(9009 + k * 11) * 8,
      SIGHTLINE.MIN_ARCH_LATERAL,
      corridorNeed(o.halfW) + archExtent(r),
    ) + CORRIDOR.PUSHBACK);
    out.push({ idx: indexAtS(cum, s), side: k % 2 ? -1 : 1, lateral, r });
  });
  if (out.length > ENV_BUDGET.MAX_ARCHES) out.length = ENV_BUDGET.MAX_ARCHES;
  return out;
}

export interface Scrub { idx: number; side: number; lateral: number; w: number; h: number; tint: number }

export function planScrub(cum: number[], o: EnvResolved): Scrub[] {
  const out: Scrub[] = [];
  if (cum.length < 2) return out;
  const total = cum[cum.length - 1];
  let n = 0;
  let next = o.scrubStep;
  for (let i = 1; i < cum.length - 1 && next < total - 8; i++) {
    if (cum[i] < next) continue;
    next = cum[i] + o.scrubStep;
    for (const side of [1, -1]) {
      n++;
      // Sparse clusters: deterministic open gaps break the repeating-fence
      // read, and every plant varies in width/height so no two shrubs match.
      const roll = hash01(11011 + n * 7 + (side > 0 ? 0 : 91));
      if (roll < 0.25) continue;
      const cluster = roll > 0.72 ? 2 : 1;
      for (let c = 0; c < cluster; c++) {
        const m = n * 5 + c * 131;
        const w = 0.7 + hash01(12004 + m) * 1.7;
        // Cluster mate sits a little further out (never inward, never over the
        // rail): keeps the raw clearance contract.
        const outward = c === 0 ? 0 : 0.9;
        out.push({
          idx: i,
          side,
          lateral: Math.max(
            o.halfW + 3.5 + hash01(11003 + m) * 3.0 + outward,
            o.halfW + CORRIDOR.SCRUB_OUT + scrubExtent(w),
          ),
          w,
          h: Math.min(0.35 + hash01(13005 + m) * 1.25, SIGHTLINE.MAX_SCRUB_H),
          tint: m,
        });
      }
    }
  }
  if (out.length > ENV_BUDGET.MAX_SCRUB) out.length = ENV_BUDGET.MAX_SCRUB;
  return out;
}

// ---------- corridor enforcement + audit (pure, deterministic) ----------
// Own-station lateral floors are not enough: on bends, a wide far cliff or a
// mesa can sit near a DIFFERENT part of the track than the station that
// placed it. enforceCorridor therefore verifies every body against ALL
// centerline samples (min XZ distance minus its rotation-aware extent) and
// pushes violators outward along their placement normal — mesas directly away
// from the nearest sample. Bodies that still violate after 8 pushes are
// dropped (fixed order, fixed passes: fully deterministic). Mount, counts,
// and audit all consume the resolved sets, so what renders is what is
// verified.

export interface ResolvedEnv {
  walls: WallPlan; mesas: Mesa[]; arches: Arch[]; scrub: Scrub[];
}

function minDistXZ(
  track: TrackData, x: number, z: number,
  outNearest: { x: number; y: number; z: number; i: number },
): number {
  let best = Infinity, bx = x, by = 0, bz = z, bi = -1;
  const pts = track.points;
  for (let k = 0; k < pts.length; k++) {
    const dx = x - pts[k].x, dz = z - pts[k].z;
    const d = Math.sqrt(dx * dx + dz * dz);
    if (d < best) { best = d; bx = pts[k].x; by = pts[k].y; bz = pts[k].z; bi = k; }
  }
  outNearest.x = bx; outNearest.y = by; outNearest.z = bz; outNearest.i = bi;
  return best;
}

const RESOLVE_PASSES = 8;

export function enforceCorridor(
  track: TrackData,
  walls: WallPlan,
  mesas: Mesa[],
  arches: Arch[],
  scrub: Scrub[],
  halfW: number,
): ResolvedEnv {
  const need = corridorNeed(halfW);
  const scrubNeed = halfW + CORRIDOR.SCRUB_OUT;
  const nearPt = { x: 0, y: 0, z: 0, i: -1 };
  const posOf = (idx: number, side: number, lateral: number): { x: number; z: number } => {
    const p = track.points[idx], nrm = track.normals[idx];
    return { x: p.x + nrm.x * side * lateral, z: p.z + nrm.z * side * lateral };
  };
  // Walls: uniform curve margin covers inside bends at ANY station, not just
  // the placing one (3u over-conservative on straights is invisible).
  const wallReq = (wl: WallSeg): number =>
    need + wallExtent(wl.w, wl.segLen, wl.yaw) + CORRIDOR.CURVE_EXTRA;
  const keptNear: WallSeg[] = [];
  const keptFar: WallSeg[] = [];
  for (const layer of [walls.near, walls.far]) {
    const kept = layer === walls.near ? keptNear : keptFar;
    for (const wl0 of layer) {
      let wl = wl0;
      let okBody = false;
      for (let pass = 0; pass < RESOLVE_PASSES; pass++) {
        const pos = posOf(wl.idx, wl.side, wl.lateral);
        const md = minDistXZ(track, pos.x, pos.z, nearPt);
        if (md >= wallReq(wl)) { okBody = true; break; }
        const push = wallReq(wl) - md + 0.5;
        wl = { ...wl, lateral: wl.lateral + push };
      }
      if (okBody) kept.push(wl);
    }
  }
  const keptMesas: Mesa[] = [];
  for (const b0 of mesas) {
    if (b0.haze > 0) {
      // Horizon ring: keep every butte CENTER at a stable, separated depth from
      // the whole course (not just its bbox center) so compact fixed courses
      // never get a giant butte looming over the launch. No re-anchoring: the
      // ring base stays below ground by construction.
      let hx = b0.x, hz = b0.z;
      for (let pass = 0; pass < RESOLVE_PASSES; pass++) {
        const md = minDistXZ(track, hx, hz, nearPt);
        if (md >= HORIZON_CLEAR) break;
        const push = HORIZON_CLEAR - md + 1;
        let dx = hx - nearPt.x, dz = hz - nearPt.z;
        const len = Math.sqrt(dx * dx + dz * dz);
        if (len < 1e-6) { dx = 1; dz = 0; } else { dx /= len; dz /= len; }
        hx += dx * push; hz += dz * push;
      }
      keptMesas.push({ ...b0, x: hx, z: hz });
      continue;
    }
    let bx = b0.x, bz = b0.z;
    const ext = mesaExtent(b0.w, mesaDepth(b0.tint, b0.w));
    let okBody = false;
    for (let pass = 0; pass < RESOLVE_PASSES; pass++) {
      const md = minDistXZ(track, bx, bz, nearPt);
      // The launch vista rule keys off the NEAREST centerline station, not the
      // placing station: on a course that curves back near the start, a body
      // placed after OPENING_LEN can still crowd the opening. Require the
      // opening separation against whichever sample is actually nearest.
      const opening = track.cum && nearPt.i >= 0 && track.cum[nearPt.i] < OPENING_LEN;
      const req = opening ? Math.max(need + ext, OPENING_MIN_LATERAL) : need + ext;
      if (md >= req) { okBody = true; break; }
      const push = req - md + 0.5;
      let dx = bx - nearPt.x, dz = bz - nearPt.z;
      const len = Math.sqrt(dx * dx + dz * dz);
      if (len < 1e-6) { dx = 1; dz = 0; } else { dx /= len; dz /= len; }
      bx += dx * push; bz += dz * push;
    }
    if (okBody) {
      // Re-anchor to the ground under the FINAL (possibly pushed) position so
      // a body pushed onto lower grade can never hover.
      const y = Math.min(b0.y, nearPt.y - ENV_BASE_DROP);
      keptMesas.push({ ...b0, x: bx, y, z: bz });
    }
  }
  const keptArches: Arch[] = [];
  for (const a0 of arches) {
    let a = a0;
    const req = need + archExtent(a.r);
    let okBody = false;
    for (let pass = 0; pass < RESOLVE_PASSES; pass++) {
      const pos = posOf(a.idx, a.side, a.lateral);
      const md = minDistXZ(track, pos.x, pos.z, nearPt);
      if (md >= req) { okBody = true; break; }
      a = { ...a, lateral: a.lateral + (req - md) + 0.5 };
    }
    if (okBody) keptArches.push(a);
  }
  const keptScrub: Scrub[] = [];
  for (const q0 of scrub) {
    let q = q0;
    const req = scrubNeed + scrubExtent(q.w);
    let okBody = false;
    for (let pass = 0; pass < RESOLVE_PASSES; pass++) {
      const pos = posOf(q.idx, q.side, q.lateral);
      const md = minDistXZ(track, pos.x, pos.z, nearPt);
      if (md >= req) { okBody = true; break; }
      q = { ...q, lateral: q.lateral + (req - md) + 0.5 };
    }
    if (okBody) keptScrub.push(q);
  }
  return { walls: { near: keptNear, far: keptFar }, mesas: keptMesas, arches: keptArches, scrub: keptScrub };
}

// Verifies the true invariant on the resolved sets: min XZ distance to ANY
// centerline sample, minus rotation-aware extent, clears the corridor.
// Returns the minimum clearance (>= -CORRIDOR_EPS passes) plus violations.
export interface CorridorViolation {
  kind: string; idx: number; side: number;
  lateral: number; extent: number; clearance: number;
}
export interface CorridorAudit { min: number; bad: CorridorViolation[]; checked: number }
// Planner and audit share the same extent math but evaluate it in a different
// summation order, so boundary placements can read -1ulp. Tolerance is pure
// float hygiene (1e-9 u), not a corridor shave.
export const CORRIDOR_EPS = 1e-9;
export function auditCorridor(
  track: TrackData,
  events: CornerEventLike[],
  o: EnvResolved,
): CorridorAudit {
  const bad: CorridorViolation[] = [];
  let min = Infinity;
  let checked = 0;
  const need = corridorNeed(o.halfW);
  const scrubNeed = o.halfW + CORRIDOR.SCRUB_OUT;
  const nearPt = { x: 0, y: 0, z: 0, i: -1 };
  const r = enforceCorridor(
    track,
    planWalls(track.cum, events, o),
    planMesas(track, o.halfW),
    planArches(track.cum, o),
    planScrub(track.cum, o),
    o.halfW,
  );
  const check = (
    kind: string, idx: number, side: number,
    x: number, z: number, extent: number, req: number,
  ): void => {
    checked++;
    const md = minDistXZ(track, x, z, nearPt);
    const clearance = md - req;
    if (clearance < min) min = clearance;
    if (clearance < -CORRIDOR_EPS) {
      bad.push({ kind, idx, side, lateral: md, extent, clearance });
    }
  };
  for (const wl of [...r.walls.near, ...r.walls.far]) {
    const p = track.points[wl.idx], nrm = track.normals[wl.idx];
    check('wall', wl.idx, wl.side,
      p.x + nrm.x * wl.side * wl.lateral, p.z + nrm.z * wl.side * wl.lateral,
      wallExtent(wl.w, wl.segLen, wl.yaw),
      need + wallExtent(wl.w, wl.segLen, wl.yaw) + CORRIDOR.CURVE_EXTRA);
  }
  for (const b of r.mesas) {
    if (b.haze > 0) continue;
    check('mesa', -1, 0, b.x, b.z,
      mesaExtent(b.w, mesaDepth(b.tint, b.w)), need + mesaExtent(b.w, mesaDepth(b.tint, b.w)));
  }
  for (const a of r.arches) {
    const p = track.points[a.idx], nrm = track.normals[a.idx];
    check('arch', a.idx, a.side,
      p.x + nrm.x * a.side * a.lateral, p.z + nrm.z * a.side * a.lateral,
      archExtent(a.r), need + archExtent(a.r));
  }
  for (const q of r.scrub) {
    const p = track.points[q.idx], nrm = track.normals[q.idx];
    check('scrub', q.idx, q.side,
      p.x + nrm.x * q.side * q.lateral, p.z + nrm.z * q.side * q.lateral,
      scrubExtent(q.w), scrubNeed + scrubExtent(q.w));
  }
  if (!isFinite(min)) min = 0;
  return { min, bad, checked };
}

// ---------- budget estimates (pure, deterministic) ----------

export interface EnvCounts {
  walls: number; farWalls: number; mesas: number; arches: number; scrub: number;
}

export function countEnvInstances(
  track: TrackData,
  events: CornerEventLike[],
  o: EnvResolved,
): EnvCounts {
  if (track.cum.length < 2) return { walls: 0, farWalls: 0, mesas: 0, arches: 0, scrub: 0 };
  const r = enforceCorridor(
    track,
    planWalls(track.cum, events, o),
    planMesas(track, o.halfW),
    planArches(track.cum, o),
    planScrub(track.cum, o),
    o.halfW,
  );
  return {
    walls: r.walls.near.length + r.walls.far.length,
    farWalls: r.walls.far.length,
    mesas: r.mesas.length,
    arches: r.arches.length,
    scrub: r.scrub.length,
  };
}

// near prism (5,2) = 30, far butte (7,1) = 28, mesa cyl(8,3) = 64,
// arch torus(6,12) = 144, scrub cone(6) = 12. Near and far walls render
// through separate instanced meshes (distinct archetype silhouettes).
export function estimateEnvDrawCalls(c: EnvCounts): number {
  let draws = 0;
  if (c.walls - c.farWalls > 0) draws++;
  if (c.farWalls > 0) draws++;
  if (c.mesas > 0) draws++;
  if (c.arches > 0) draws++;
  if (c.scrub > 0) draws++;
  return draws;
}

export function estimateEnvTriangles(c: EnvCounts): number {
  return (c.walls - c.farWalls) * WALL_TRIS + c.farWalls * FAR_TRIS
    + c.mesas * 64 + c.arches * 144 + c.scrub * 12;
}

export function envWithinBudget(c: EnvCounts): boolean {
  return (
    c.walls <= ENV_BUDGET.MAX_WALLS &&
    c.mesas <= ENV_BUDGET.MAX_MESAS &&
    c.arches <= ENV_BUDGET.MAX_ARCHES &&
    c.scrub <= ENV_BUDGET.MAX_SCRUB &&
    estimateEnvDrawCalls(c) <= ENV_BUDGET.MAX_NEW_DRAW_CALLS &&
    estimateEnvTriangles(c) <= ENV_BUDGET.MAX_NEW_TRIS
  );
}

// ---------- THREE binding (mount-time allocation only) ----------

export interface EnvironmentHandle {
  counts: EnvCounts;
  setQuality(mobile: boolean): void;
  update(dt: number): void;
  dispose(): void;
}

interface EnvCache {
  wallGeo: unknown; farGeo: unknown; mesaGeo: unknown; archGeo: unknown; scrubGeo: unknown;
  wallMat: unknown; farMat: unknown; mesaMat: unknown; archMat: unknown; scrubMat: unknown;
}
const envCache = new WeakMap<object, EnvCache>();

// Deterministic vertex jitter: breaks the primitive's perfect silhouette
// into irregular faceted cliff faces. Runs once at mount; seed-selected so
// every instance shares the same faceted base (per-instance variety comes
// from yaw/scale/tint at placement). Pure over the vertex index.
function jitterCliff(geo: THREE.BufferGeometry, seed: number): void {
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const lift = 0.5 + Math.abs(pos.getY(i));
    pos.setX(i, pos.getX(i) + (hash01(seed + i * 3 + 1) - 0.5) * 0.24 * lift);
    pos.setZ(i, pos.getZ(i) + (hash01(seed + i * 3 + 2) - 0.5) * 0.24 * lift);
    pos.setY(i, pos.getY(i) + (hash01(seed + i * 3 + 3) - 0.5) * 0.10);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

function bakeStrata(
  kit: EnvKit,
  geo: THREE.BufferGeometry,
  bands: number,
): void {
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  geo.computeBoundingBox();
  const box = geo.boundingBox;
  const minY = box ? box.min.y : 0;
  const range = box && box.max.y - box.min.y > 1e-6 ? box.max.y - box.min.y : 1;
  for (let i = 0; i < pos.count; i++) {
    const t = Math.min(0.999, Math.max(0, (pos.getY(i) - minY) / range));
    const c = strataColor(Math.floor(t * bands) / (bands - 1));
    colors[i * 3] = c[0];
    colors[i * 3 + 1] = c[1];
    colors[i * 3 + 2] = c[2];
  }
  geo.setAttribute('color', new kit.BufferAttribute(colors, 3));
}

function envEntry(kit: EnvKit): EnvCache {
  let e = envCache.get(kit);
  if (!e) {
    const wallGeo = new kit.CylinderGeometry(0.58, 1, 1, 5, 2);
    wallGeo.translate(0, 0.5, 0);
    jitterCliff(wallGeo as unknown as THREE.BufferGeometry, 211);
    bakeStrata(kit, wallGeo as unknown as THREE.BufferGeometry, 4);
    const farGeo = new kit.CylinderGeometry(0.7, 1, 1, 7, 1);
    farGeo.translate(0, 0.5, 0);
    jitterCliff(farGeo as unknown as THREE.BufferGeometry, 412);
    bakeStrata(kit, farGeo as unknown as THREE.BufferGeometry, 4);
    const mesaGeo = new kit.CylinderGeometry(0.72, 1, 1, 8, 3);
    mesaGeo.translate(0, 0.5, 0);
    jitterCliff(mesaGeo as unknown as THREE.BufferGeometry, 977);
    bakeStrata(kit, mesaGeo as unknown as THREE.BufferGeometry, 4);
    const archGeo = new kit.TorusGeometry(1, 0.28, 6, 12);
    const scrubGeo = new kit.ConeGeometry(0.9, 1, 6);
    scrubGeo.translate(0, 0.5, 0);
    e = {
      wallGeo,
      farGeo,
      mesaGeo,
      archGeo,
      scrubGeo,
      wallMat: new kit.MeshLambertMaterial({ vertexColors: true, flatShading: FLAT_SHADED }),
      farMat: new kit.MeshLambertMaterial({ vertexColors: true, flatShading: FLAT_SHADED }),
      mesaMat: new kit.MeshLambertMaterial({ vertexColors: true, flatShading: FLAT_SHADED }),
      archMat: new kit.MeshLambertMaterial({ color: 0xc47a45, flatShading: FLAT_SHADED }),
      scrubMat: new kit.MeshLambertMaterial({ color: 0xffffff }),
    };
    envCache.set(kit, e);
  }
  return e;
}

export function mountEnvironment(
  kit: EnvKit,
  scene: THREE.Scene,
  track: TrackData,
  opts: EnvironmentOptions = {},
): EnvironmentHandle {
  const o = resolveEnvOptions(opts);
  const events = track.events ?? [];
  const counts = countEnvInstances(track, events, o);
  const A = envEntry(kit);
  const group = new kit.Group();
  group.name = 'canyon-environment';
  scene.add(group);

  const m = new kit.Matrix4();
  const q = new kit.Quaternion();
  const eu = new kit.Euler();
  const v = new kit.Vector3();
  const sv = new kit.Vector3();
  const col = new kit.Color();
  const haze = new kit.Color(HAZE_COLOR);

  const yawAt = (i: number): number =>
    Math.atan2(track.tangents[i].x, track.tangents[i].z);

  const disposables: THREE.InstancedMesh[] = [];
  let farMesh: THREE.InstancedMesh | null = null;
  let scrubMesh: THREE.InstancedMesh | null = null;
  let farFullCount = 0;
  let scrubFullCount = 0;
  let scrubMobileCount = 0;

  const placeWall = (
    inst: THREE.InstancedMesh, w: WallSeg, k: number,
  ): void => {
    const p = track.points[w.idx];
    const nrm = track.normals[w.idx];
    eu.set(0, yawAt(w.idx) + w.yaw, 0);
    q.setFromEuler(eu);
    v.set(
      p.x + nrm.x * w.side * w.lateral,
      p.y - 10,
      p.z + nrm.z * w.side * w.lateral,
    );
    sv.set(w.w, w.h, w.segLen * 0.4);
    m.compose(v, q, sv);
    inst.setMatrixAt(k, m);
    const t = 0.85 + hash01(w.tint * 7 + 1) * 0.3;
    inst.setColorAt(k, col.setRGB(t, t * 0.98, t * 0.95));
  };

  const resolved = enforceCorridor(
    track,
    planWalls(track.cum, events, o),
    planMesas(track, o.halfW),
    planArches(track.cum, o),
    planScrub(track.cum, o),
    o.halfW,
  );
  const walls = resolved.walls;
  if (walls.near.length > 0) {
    const wallMesh = new kit.InstancedMesh(
      A.wallGeo as THREE.BufferGeometry,
      A.wallMat as THREE.Material,
      walls.near.length,
    );
    for (let k = 0; k < walls.near.length; k++) placeWall(wallMesh, walls.near[k], k);
    wallMesh.instanceMatrix.needsUpdate = true;
    if (wallMesh.instanceColor) wallMesh.instanceColor.needsUpdate = true;
    group.add(wallMesh);
    disposables.push(wallMesh);
  }
  // Far range renders through the tapered-butte archetype (own geometry and
  // draw call); mobile drops it entirely via count (no reallocation).
  farFullCount = walls.far.length;
  if (walls.far.length > 0) {
    farMesh = new kit.InstancedMesh(
      A.farGeo as THREE.BufferGeometry,
      A.farMat as THREE.Material,
      walls.far.length,
    );
    for (let k = 0; k < walls.far.length; k++) placeWall(farMesh, walls.far[k], k);
    farMesh.instanceMatrix.needsUpdate = true;
    if (farMesh.instanceColor) farMesh.instanceColor.needsUpdate = true;
    group.add(farMesh);
    disposables.push(farMesh);
  }

  const mesas = resolved.mesas;
  if (mesas.length > 0) {
    const inst = new kit.InstancedMesh(
      A.mesaGeo as THREE.BufferGeometry,
      A.mesaMat as THREE.Material,
      mesas.length,
    );
    for (let k = 0; k < mesas.length; k++) {
      const b = mesas[k];
      eu.set(0, hash01(b.tint * 11 + 2) * Math.PI, 0);
      q.setFromEuler(eu);
      v.set(b.x, b.y, b.z);
      sv.set(b.w, b.h, mesaDepth(b.tint, b.w));
      m.compose(v, q, sv);
      inst.setMatrixAt(k, m);
      if (isGatePier(b.tint)) {
        col.setRGB(PIER_TINT[0], PIER_TINT[1], PIER_TINT[2]);
      } else {
        const t = 0.85 + hash01(b.tint * 17 + 6) * 0.3;
        col.setRGB(t, t * 0.98, t * 0.95);
      }
      if (b.haze > 0) col.lerp(haze, b.haze);
      inst.setColorAt(k, col);
    }
    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    group.add(inst);
    disposables.push(inst);
  }

  const arches = resolved.arches;
  if (arches.length > 0) {
    const inst = new kit.InstancedMesh(
      A.archGeo as THREE.BufferGeometry,
      A.archMat as THREE.Material,
      arches.length,
    );
    for (let k = 0; k < arches.length; k++) {
      const a = arches[k];
      const p = track.points[a.idx];
      const nrm = track.normals[a.idx];
      eu.set(0, yawAt(a.idx), 0);
      q.setFromEuler(eu);
      v.set(
        p.x + nrm.x * a.side * a.lateral,
        archCenterY(p.y, a.r),
        p.z + nrm.z * a.side * a.lateral,
      );
      sv.set(a.r, a.r * 1.2, a.r);
      m.compose(v, q, sv);
      inst.setMatrixAt(k, m);
    }
    inst.instanceMatrix.needsUpdate = true;
    group.add(inst);
    disposables.push(inst);
  }

  const scrub = resolved.scrub;
  scrubFullCount = scrub.length;
  scrubMobileCount = Math.floor(scrub.length / 2);
  if (scrub.length > 0) {
    scrubMesh = new kit.InstancedMesh(
      A.scrubGeo as THREE.BufferGeometry,
      A.scrubMat as THREE.Material,
      scrub.length,
    );
    for (let k = 0; k < scrub.length; k++) {
      const s = scrub[k];
      const p = track.points[s.idx];
      const nrm = track.normals[s.idx];
      eu.set(0, hash01(s.tint * 19 + 8) * Math.PI * 2, 0);
      q.setFromEuler(eu);
      v.set(
        p.x + nrm.x * s.side * s.lateral,
        p.y - 0.1,
        p.z + nrm.z * s.side * s.lateral,
      );
      sv.set(s.w, s.h, s.w);
      m.compose(v, q, sv);
      scrubMesh.setMatrixAt(k, m);
      scrubMesh.setColorAt(
        k,
        col.setHSL(
          0.13 + hash01(s.tint * 23 + 9) * 0.06,
          0.3 + hash01(s.tint * 29 + 3) * 0.2,
          0.24 + hash01(s.tint * 31 + 7) * 0.1,
        ),
      );
    }
    scrubMesh.instanceMatrix.needsUpdate = true;
    if (scrubMesh.instanceColor) scrubMesh.instanceColor.needsUpdate = true;
    group.add(scrubMesh);
    disposables.push(scrubMesh);
  }

  return {
    counts,
    setQuality(mobile: boolean): void {
      // Mobile degradation: drop the far-butte layer entirely and halve the
      // scrub via count truncation (no reallocation); near cliffs, mesas
      // (incl. gate piers), and arches stay as landmarks.
      if (farMesh) farMesh.count = mobile ? 0 : farFullCount;
      if (scrubMesh) scrubMesh.count = mobile ? scrubMobileCount : scrubFullCount;
    },
    update(_dt: number): void {
      // Static environment: no per-frame work by design.
    },
    dispose(): void {
      for (const d of disposables) {
        group.remove(d);
        d.dispose();
      }
      scene.remove(group);
    },
  };
}
