// visuals.ts — optional instanced TrackMania-Canyon readability layer.
//
// Pure-planning core (no THREE, no DOM, no Math.random at runtime) plus a
// thin THREE binding. All placement is deterministic in arc distance so
// readability holds at any centerline sample spacing.
//
// Budget rules enforced here:
// - Reusable geometry/materials shared across all instances (module cache).
// - No post-processing, no dynamic shadows, no large texture downloads.
// - No per-frame object allocation: placement allocates once at mount;
//   update() only writes into preallocated buffers.
// - Fixed small draw-call delta (<= 5) over the existing scene.
//
// A small constructor kit is injected (mountVisuals(threeKit, ...), with
// statically-referenced THREE classes built by the caller) so this file has
// no runtime dependency on three, bundler tree-shaking of three stays intact,
// and the budget logic stays testable under plain node.

import type * as THREE from 'three';
import { barrierAt } from './barrier-plan.js';
import type { BarrierPlan } from './barrier-plan.js';

// ---------- plain data in / out ----------

export interface Vec3Like { x: number; y: number; z: number }
export interface CornerEventLike {
  startS: number; endS: number; dir: 'L' | 'R'; medR: number;
  // Optional plan fields (present on trackgen CornerEvent). `decreasing` marks
  // the tightening-radius challenge; visuals uses it for the double-chevron
  // tightening indicator. Absent on minimal headless fixtures -> not tight.
  entryR?: number; exitR?: number; decreasing?: boolean;
}
export interface TrackData {
  points: Vec3Like[];
  tangents: Vec3Like[];
  normals: Vec3Like[];
  cum: number[];
  events?: CornerEventLike[];
  crestS?: number[];
}

export interface VisualsOptions {
  halfW?: number;
  guardSpacing?: number;
  tickSpacing?: number;
  chevronAdvance?: number[];
  chevronRepeater?: number;
  dustN?: number;
  mobile?: boolean;
  barriers?: BarrierPlan | null;
}

export interface ResolvedOptions {
  halfW: number;
  guardSpacing: number;
  tickSpacing: number;
  chevronAdvance: number[];
  chevronRepeater: number;
  dustN: number;
  mobile: boolean;
  barriers: BarrierPlan | null;
}

export function resolveOptions(o: VisualsOptions = {}): ResolvedOptions {
  const mobile = o.mobile ?? false;
  return {
    halfW: o.halfW ?? 8,
    guardSpacing: o.guardSpacing ?? (mobile ? 16 : 10),
    tickSpacing: o.tickSpacing ?? (mobile ? 40 : 25),
    chevronAdvance: o.chevronAdvance ?? [70, 50, 30],
    chevronRepeater: o.chevronRepeater ?? 40,
    dustN: o.dustN ?? (mobile ? 80 : 160),
    mobile,
    barriers: o.barriers ?? null,
  };
}

// Rail profile: low enough to see corner exits over from chase-cam height.
// GUARD_TOP_ABOVE_ROAD is the sightline contract tested in visuals-budget.ts.
export const GUARD_TOP_ABOVE_ROAD = 0.85;

// ---------- hard budget caps ----------

export const BUDGET = {
  MAX_GUARDRAILS: 640,
  MAX_CHEVRONS: 128,
  MAX_SIGN_ARROWS: 256,
  MAX_TICKS: 260,
  MAX_DUST: 220,
  MAX_NEW_DRAW_CALLS: 5,
  MAX_NEW_TRIS: 12000,
} as const;

// Directional sign contract. Every chevron board carries a code-native arrow
// symbol pointing at the actual turn: dir 'L' -> driver-left (-normal),
// dir 'R' -> driver-right (+normal). The board sits on the turn's OUTSIDE
// (side), so arrow direction and placement side are independent encodings.
// A tightening-radius corner (decreasing + short radius) renders a double
// chevron so it is distinguishable from an ordinary drift arc even without
// color. Geometry is generated in code from the injected PlaneGeometry kit —
// no textures, no new constructor dependencies.
export const SIGN = {
  BOARD_W: 2.4, BOARD_H: 1.3,
  ARROW_W: 1.15, ARROW_H: 1.0, ARROW_NOTCH: 0.42,
  TIGHT_MED_R: 62,
  SEVERE_MED_R: 130,
  DOUBLE_GAP: 0.5,
  FACE_OFFSET: 0.05,
} as const;

// ---------- arc-distance helpers (pure) ----------

// Nearest sample index at or after arc position s (cum is ascending).
export function indexAtS(cum: number[], s: number): number {
  let lo = 0, hi = cum.length - 1;
  if (s <= cum[0]) return 0;
  if (s >= cum[hi]) return hi;
  while (lo + 1 < hi) {
    const mid = (lo + hi) >> 1;
    if (cum[mid] < s) lo = mid; else hi = mid;
  }
  return hi;
}

// ---------- placement planners (allocate once, at mount) ----------

export interface GuardrailPlacement { idx: number[]; side: number[] }

export function planGuardrails(
  cum: number[],
  o: ResolvedOptions,
  plan: BarrierPlan | null = o.barriers ?? null,
): GuardrailPlacement {
  const idx: number[] = [];
  const side: number[] = [];
  if (cum.length < 2) return { idx, side };
  const total = cum[cum.length - 1];
  if (plan) {
    // Explicit barrier contract: one rail station per guarded side only.
    // Per-side independent spacing cursors; open edges get no stations, so
    // rendered rails and sim collision share one mask by construction.
    for (const sd of [1, -1] as const) {
      let next = o.guardSpacing;
      for (let i = 1; i < cum.length - 1 && next < total - 8; i++) {
        if (cum[i] >= next) {
          if (barrierAt(plan, cum[i], sd)) { idx.push(i); side.push(sd); }
          next = cum[i] + o.guardSpacing;
        }
      }
    }
  } else {
    let next = o.guardSpacing;
    for (let i = 1; i < cum.length - 1 && next < total - 8; i++) {
      if (cum[i] >= next) {
        idx.push(i, i);
        side.push(1, -1);
        next = cum[i] + o.guardSpacing;
      }
    }
  }
  if (idx.length > BUDGET.MAX_GUARDRAILS) {
    let keep = idx.length - (idx.length - BUDGET.MAX_GUARDRAILS);
    keep -= keep % 2;
    idx.length = keep;
    side.length = keep;
  }
  return { idx, side };
}

// Near-road speed ticks: sample stations; the mesh places one tick per edge
// (two instances per station).
export function planSpeedTicks(cum: number[], o: ResolvedOptions): number[] {
  const out: number[] = [];
  if (cum.length < 2) return out;
  const total = cum[cum.length - 1];
  const maxStations = Math.floor(BUDGET.MAX_TICKS / 2);
  let next = o.tickSpacing;
  for (let i = 1; i < cum.length - 1 && next < total - 8; i++) {
    if (cum[i] >= next) {
      out.push(i);
      next = cum[i] + o.tickSpacing;
      if (out.length >= maxStations) break;
    }
  }
  return out;
}

export interface Chevron {
  s: number;
  // Which side of the road the board stands on (outside of the turn): +1 is
  // driver-right under n = (-tz, tx). Placement only; see `dir`.
  side: number;
  // Actual turn direction from the track event ('L' left, 'R' right). This is
  // what the arrow symbol points at and is deliberately independent of `side`.
  dir: 'L' | 'R';
  // Warning tint: medium-radius or tighter.
  severe: boolean;
  // Tightening-radius challenge: decreasing radius below SIGN.TIGHT_MED_R.
  tight: boolean;
}

export function planChevrons(
  cum: number[],
  events: CornerEventLike[],
  o: ResolvedOptions,
): Chevron[] {
  const out: Chevron[] = [];
  if (cum.length < 2) return out;
  const total = cum[cum.length - 1];
  for (const e of events) {
    if (!isFinite(e.startS) || !isFinite(e.endS)) continue;
    // Outside of the corner: +normal side is driver-right under the sim
    // normal convention n = (-tz, tx); a left turn's outside is driver-right.
    const side = e.dir === 'L' ? 1 : -1;
    // Encode the REAL event direction, robustly, as its own axis. A malformed
    // runtime value (anything not 'L') is treated as a right turn rather than
    // silently inheriting placement.
    const dir: 'L' | 'R' = e.dir === 'L' ? 'L' : 'R';
    const severe = e.medR <= SIGN.SEVERE_MED_R;
    const tight = e.decreasing === true && e.medR < SIGN.TIGHT_MED_R;
    for (const back of o.chevronAdvance) {
      const s = e.startS - back;
      if (s > 10 && s < total - 10) out.push({ s, side, dir, severe, tight });
    }
    for (let s = e.startS + 10; s < e.endS - 5; s += o.chevronRepeater) {
      out.push({ s, side, dir, severe, tight });
    }
  }
  out.sort((a, b) => a.s - b.s);
  if (out.length > BUDGET.MAX_CHEVRONS) out.length = BUDGET.MAX_CHEVRONS;
  return out;
}

// Arrow symbol lateral sign in the road-normal convention: +1 points
// driver-right, -1 points driver-left. This is the arrow's actual pointing
// direction and is the opposite of the board's placement side.
export function arrowPointSign(c: Chevron): number {
  return c.dir === 'R' ? 1 : -1;
}

// One to two arrow symbols per board: a single chevron for a normal turn and
// a double chevron (second symbol offset toward the turn) for tightening.
export interface SignArrow { chevron: Chevron; offset: number }

export function planSignArrows(chevs: Chevron[]): SignArrow[] {
  const out: SignArrow[] = [];
  for (const c of chevs) {
    out.push({ chevron: c, offset: 0 });
    if (c.tight) out.push({ chevron: c, offset: arrowPointSign(c) * SIGN.DOUBLE_GAP });
  }
  return out;
}

// ---------- budget estimates (pure, deterministic) ----------

export interface InstanceCounts {
  guardrails: number;
  chevrons: number;
  signArrows: number;
  ticks: number;
  dust: number;
}

export function countInstances(
  cum: number[],
  events: CornerEventLike[],
  o: ResolvedOptions,
): InstanceCounts {
  if (cum.length < 2) return { guardrails: 0, chevrons: 0, signArrows: 0, ticks: 0, dust: 0 };
  const chevrons = planChevrons(cum, events, o);
  return {
    guardrails: planGuardrails(cum, o).idx.length,
    chevrons: chevrons.length,
    signArrows: planSignArrows(chevrons).length,
    ticks: planSpeedTicks(cum, o).length * 2,
    dust: Math.min(o.dustN, BUDGET.MAX_DUST),
  };
}

// New draw calls added by mountVisuals: one InstancedMesh per family
// (guardrails, chevron boards, directional arrows, ticks) plus one Points
// cloud when dust is mounted.
export function estimateDrawCalls(c: InstanceCounts): number {
  let n = 0;
  if (c.guardrails > 0) n++;
  if (c.chevrons > 0) n++;
  if (c.signArrows > 0) n++;
  if (c.ticks > 0) n++;
  if (c.dust > 0) n++;
  return n;
}

// guardrail box = 12 tris, tick quad = 2, board quad = 2, arrow chevron = 2
// (two triangles), dust points = 0.
export function estimateTriangles(c: InstanceCounts): number {
  return c.guardrails * 12 + c.ticks * 2 + c.chevrons * 2 + c.signArrows * 2;
}

export function withinBudget(c: InstanceCounts): boolean {
  return (
    c.guardrails <= BUDGET.MAX_GUARDRAILS &&
    c.chevrons <= BUDGET.MAX_CHEVRONS &&
    c.signArrows <= BUDGET.MAX_SIGN_ARROWS &&
    c.ticks <= BUDGET.MAX_TICKS &&
    c.dust <= BUDGET.MAX_DUST &&
    estimateDrawCalls(c) <= BUDGET.MAX_NEW_DRAW_CALLS &&
    estimateTriangles(c) <= BUDGET.MAX_NEW_TRIS
  );
}

// ---------- drift trail model (pure, zero allocation) ----------
// Skid width/darkness/density + dust response are driven by the actual smoothed
// drift amount and slip angle — not the drifting boolean — so near-threshold
// slides leave thin/faint/sparse marks and committed slides leave wide/dark/
// dense marks with stronger dust. Every function returns a scalar (no object
// allocation); the caller keeps one smoothed `trailSm` number advanced with
// trailSmooth (slew-rate limited, so drift enter/exit never pops).

export const TRAIL = {
  GATE_SPEED: 10,      // no marks below this speed (u/s)
  GATE_MIX: 0.25,      // no marks below this smoothed drift amount (late, subtle onset)
  WIDTH_MIN: 0.16, WIDTH_MAX: 0.45,   // skid quad width (u)
  LEN_MIN: 0.7, LEN_MAX: 1.4,         // skid quad length (u)
  DUST_SPREAD_MIN: 0.8, DUST_SPREAD_MAX: 2.0,
  ATTACK: 5, RELEASE: 2.5,            // smoothing rates (/s)
} as const;

function trailClamp01(v: number): number { return v < 0 ? 0 : v > 1 ? 1 : v; }

// 0..1 trail intensity from smoothed drift amount + slip + speed.
export function trailTarget(
  driftMix: number, slipAbs: number, speed: number,
  grounded: boolean, drifting: boolean,
): number {
  if (!grounded || !drifting || speed < TRAIL.GATE_SPEED || driftMix < TRAIL.GATE_MIX) return 0;
  const base = trailClamp01((driftMix - TRAIL.GATE_MIX) / (1 - TRAIL.GATE_MIX));
  const smooth = base * base * (3 - 2 * base);
  const slipF = trailClamp01(Math.abs(slipAbs) / 0.5);
  return trailClamp01(smooth * (0.35 + 0.65 * slipF));
}

// Slew-rate limited smoothing: fast attack, slower release, no popping.
export function trailSmooth(prev: number, target: number, dt: number): number {
  const rate = target > prev ? TRAIL.ATTACK : TRAIL.RELEASE;
  const d = target - prev;
  const maxD = rate * Math.max(0, dt);
  if (d > maxD) return prev + maxD;
  if (d < -maxD) return prev - maxD;
  return target;
}

export function trailWidth(i: number): number {
  return TRAIL.WIDTH_MIN + (TRAIL.WIDTH_MAX - TRAIL.WIDTH_MIN) * trailClamp01(i);
}
export function trailLength(i: number): number {
  return TRAIL.LEN_MIN + (TRAIL.LEN_MAX - TRAIL.LEN_MIN) * trailClamp01(i);
}
// 0 = faint (near asphalt), 1 = full dark mark. The caller maps this to the
// per-instance color; width/length map to the per-instance scale.
export function trailShade(i: number): number {
  return trailClamp01(0.10 + 0.60 * trailClamp01(i));
}
// Fixed-step ticks between skid spawns: faint slides mark sparsely, committed
// slides mark every tick (denser marks also persist longer visually).
// 0 = spawn nothing this tick.
export function trailSpawnEvery(i: number): number {
  if (i < 0.12) return 0;
  if (i < 0.35) return 3;
  if (i < 0.65) return 2;
  return 1;
}
export function dustBurst(i: number): number {
  if (i < 0.15) return 0;
  if (i < 0.55) return 1;
  return 2;
}
export function dustSpread(i: number): number {
  return TRAIL.DUST_SPREAD_MIN + (TRAIL.DUST_SPREAD_MAX - TRAIL.DUST_SPREAD_MIN) * trailClamp01(i);
}

// ---------- dust ring (preallocated, zero per-frame allocation) ----------

export class DustRing {
  readonly n: number;
  readonly positions: Float32Array;
  readonly life: Float32Array;
  head = 0;
  constructor(n: number) {
    this.n = Math.max(0, Math.min(Math.floor(n), BUDGET.MAX_DUST));
    this.positions = new Float32Array(this.n * 3);
    this.life = new Float32Array(this.n);
    for (let i = 0; i < this.n; i++) this.positions[i * 3 + 1] = -100;
  }
  spawn(x: number, y: number, z: number, spread: number): void {
    if (this.n === 0) return;
    const i = this.head;
    // Deterministic pseudo-spread from slot index (no Math.random).
    const a = ((i * 2654435761) >>> 0) / 4294967296 - 0.5;
    const b = ((i * 40503 + 7) % 100) / 100;
    const c = ((i * 65599 + 13) % 100) / 100 - 0.5;
    this.positions[i * 3] = x + a * spread;
    this.positions[i * 3 + 1] = y + b * 1.2;
    this.positions[i * 3 + 2] = z + c * spread;
    this.life[i] = 1;
    this.head = (i + 1) % this.n;
  }
  update(dt: number): void {
    const decay = dt * 1.4;
    const rise = dt * 2;
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] > 0) {
        this.life[i] -= decay;
        this.positions[i * 3 + 1] += rise;
        if (this.life[i] <= 0) this.positions[i * 3 + 1] = -100;
      }
    }
  }
}

// ---------- THREE binding (mount-time allocation only) ----------

// Minimal constructor kit: the caller passes statically-referenced THREE
// classes (never the whole namespace object) so tree-shaking keeps working.
export interface ThreeKit {
  BoxGeometry: typeof THREE.BoxGeometry;
  PlaneGeometry: typeof THREE.PlaneGeometry;
  MeshLambertMaterial: typeof THREE.MeshLambertMaterial;
  MeshBasicMaterial: typeof THREE.MeshBasicMaterial;
  InstancedMesh: typeof THREE.InstancedMesh;
  Group: typeof THREE.Group;
  Matrix4: typeof THREE.Matrix4;
  Quaternion: typeof THREE.Quaternion;
  Euler: typeof THREE.Euler;
  Vector3: typeof THREE.Vector3;
  Color: typeof THREE.Color;
  DoubleSide: typeof THREE.DoubleSide;
}

export interface VisualsHandle {
  counts: InstanceCounts;
  dust: DustRing;
  setQuality(mobile: boolean): void;
  update(dt: number): void;
  dispose(): void;
}

// Shared geometry/material cache: one set per THREE namespace + quality tier.
interface CacheEntry {
  guardGeo: unknown; boardGeo: unknown; arrowGeo: unknown; tickGeo: unknown;
  guardMat: unknown; boardMat: unknown; arrowMat: unknown; tickMat: unknown;
}
const cache = new WeakMap<object, { desk: CacheEntry; mob: CacheEntry }>();

// Build a right-pointing chevron arrow from the injected PlaneGeometry. A
// 1x1 plane has four vertices in the order [TL, TR, BL, BR] with index pairs
// (0,2,1) and (2,3,1); folding those four corners into the concave-back
// chevron below yields a solid two-triangle directional arrow with no extra
// constructor dependency. Guarded so a minimal/stub kit without a writable
// position attribute simply keeps the plane (no crash headless).
function buildArrowGeo(kit: ThreeKit): unknown {
  const geo = new kit.PlaneGeometry(SIGN.ARROW_W, SIGN.ARROW_H) as THREE.BufferGeometry;
  const attr = typeof geo.getAttribute === 'function'
    ? geo.getAttribute('position') as THREE.BufferAttribute | undefined
    : undefined;
  if (!attr || attr.count < 4 || typeof attr.setX !== 'function') return geo;
  const w = SIGN.ARROW_W, h = SIGN.ARROW_H, notch = SIGN.ARROW_NOTCH;
  // v0 top-left outer, v1 right apex, v2 inner notch, v3 bottom-left outer.
  attr.setX(0, -w / 2); attr.setY(0, h / 2);
  attr.setX(1, w / 2); attr.setY(1, 0);
  attr.setX(2, -w / 2 + notch); attr.setY(2, 0);
  attr.setX(3, -w / 2); attr.setY(3, -h / 2);
  attr.needsUpdate = true;
  if (typeof geo.computeBoundingSphere === 'function') geo.computeBoundingSphere();
  return geo;
}

function entryFor(kit: ThreeKit, mobile: boolean): CacheEntry {
  let tiers = cache.get(kit);
  if (!tiers) {
    const mk = (mob: boolean): CacheEntry => {
      const guardGeo = new kit.BoxGeometry(1, 1, 1);
      const boardGeo = new kit.PlaneGeometry(SIGN.BOARD_W, SIGN.BOARD_H);
      const arrowGeo = buildArrowGeo(kit);
      const tickGeo = new kit.PlaneGeometry(1.4, 0.5);
      tickGeo.rotateX(-Math.PI / 2);
      const guardMat = new kit.MeshLambertMaterial({ color: 0xffffff });
      const boardMat = new kit.MeshBasicMaterial({ color: 0xffffff, side: kit.DoubleSide });
      // Near-black symbol: maximum contrast against the amber/red board.
      const arrowMat = new kit.MeshBasicMaterial({ color: 0x101010, side: kit.DoubleSide });
      const tickMat = new kit.MeshBasicMaterial({
        color: 0xf5efdd, transparent: true, opacity: mob ? 0.55 : 0.8,
      });
      return { guardGeo, boardGeo, arrowGeo, tickGeo, guardMat, boardMat, arrowMat, tickMat };
    };
    tiers = { desk: mk(false), mob: mk(true) };
    cache.set(kit, tiers);
  }
  return mobile ? tiers.mob : tiers.desk;
}

export function mountVisuals(
  kit: ThreeKit,
  scene: THREE.Scene,
  track: TrackData,
  opts: VisualsOptions = {},
): VisualsHandle {
  const o = resolveOptions(opts);
  const events = track.events ?? [];
  const counts: InstanceCounts = countInstances(track.cum, events, o);
  const A = entryFor(kit, o.mobile);
  const group = new kit.Group();
  group.name = 'canyon-visuals';
  scene.add(group);

  // Scratch allocated once: reused by every matrix compose, never per frame.
  const m = new kit.Matrix4();
  const q = new kit.Quaternion();
  const eu = new kit.Euler();
  const v = new kit.Vector3();
  const sv = new kit.Vector3();
  const one = new kit.Vector3(1, 1, 1);
  const col = new kit.Color();

  const yawAt = (i: number): number =>
    Math.atan2(track.tangents[i].x, track.tangents[i].z);

  const disposables: THREE.InstancedMesh[] = [];
  let guardMesh: THREE.InstancedMesh | null = null;
  let boardMesh: THREE.InstancedMesh | null = null;
  let arrowMesh: THREE.InstancedMesh | null = null;
  let tickMesh: THREE.InstancedMesh | null = null;

  const g = planGuardrails(track.cum, o);
  const stationsBySide: number[][] = [[], []];
  for (let k = 0; k < g.idx.length; k++) {
    stationsBySide[g.side[k] > 0 ? 0 : 1].push(g.idx[k]);
  }
  const segs: { ax: number; ay: number; az: number; bx: number; by: number; bz: number; side: number }[] = [];
  for (let w = 0; w < 2; w++) {
    const side = w === 0 ? 1 : -1;
    const st = stationsBySide[w];
    for (let k = 0; k + 1 < st.length; k++) {
      // Span gaps (open edges, crest splits, merged-span joints) never get
      // bridged: a segment only joins stations one spacing apart.
      if (track.cum[st[k + 1]] - track.cum[st[k]] > o.guardSpacing * 1.6) continue;
      const a = track.points[st[k]], na = track.normals[st[k]];
      const b = track.points[st[k + 1]], nb = track.normals[st[k + 1]];
      segs.push({
        ax: a.x + na.x * side * (o.halfW + 2.0),
        ay: a.y, az: a.z + na.z * side * (o.halfW + 2.0),
        bx: b.x + nb.x * side * (o.halfW + 2.0),
        by: b.y, bz: b.z + nb.z * side * (o.halfW + 2.0),
        side,
      });
    }
  }
  if (segs.length > 0) {
    guardMesh = new kit.InstancedMesh(
      A.guardGeo as THREE.BufferGeometry,
      A.guardMat as THREE.Material,
      segs.length,
    );
    for (let k = 0; k < segs.length; k++) {
      const sg = segs[k];
      const dx = sg.bx - sg.ax, dz = sg.bz - sg.az;
      const len = Math.sqrt(dx * dx + dz * dz);
      eu.set(0, Math.atan2(dx, dz), 0);
      q.setFromEuler(eu);
      // Overlap (+1.5u) seals joints on curves; base embedded 0.15u, top at
      // +0.85u so corner exits stay visible over the rail (see GUARD_TOP).
      v.set((sg.ax + sg.bx) / 2, (sg.ay + sg.by) / 2 + 0.35, (sg.az + sg.bz) / 2);
      sv.set(0.55, 1.0, len + 1.5);
      m.compose(v, q, sv);
      guardMesh.setMatrixAt(k, m);
      guardMesh.setColorAt(k, col.set(k % 4 === 3 ? 0xd83a2a : 0xe9e2d2));
    }
    guardMesh.instanceMatrix.needsUpdate = true;
    if (guardMesh.instanceColor) guardMesh.instanceColor.needsUpdate = true;
    group.add(guardMesh);
    disposables.push(guardMesh);
  }

  const chevs = planChevrons(track.cum, events, o);
  if (chevs.length > 0) {
    boardMesh = new kit.InstancedMesh(
      A.boardGeo as THREE.BufferGeometry,
      A.boardMat as THREE.Material,
      chevs.length,
    );
    for (let k = 0; k < chevs.length; k++) {
      // Face oncoming traffic: boards look back down the road (yaw + PI).
      const i = indexAtS(track.cum, chevs[k].s);
      const p = track.points[i];
      const nrm = track.normals[i];
      eu.set(0, yawAt(i) + Math.PI, 0);
      q.setFromEuler(eu);
      v.set(
        p.x + nrm.x * chevs[k].side * (o.halfW + 4.5),
        p.y + 1.5,
        p.z + nrm.z * chevs[k].side * (o.halfW + 4.5),
      );
      sv.set(1, 1, 1);
      m.compose(v, q, sv);
      boardMesh.setMatrixAt(k, m);
      // Deep red for the tightening challenge, warning red for a tight drift
      // arc, amber for everything else.
      const tint = chevs[k].tight ? 0xd11a0f : chevs[k].severe ? 0xd83a2a : 0xf2a53a;
      boardMesh.setColorAt(k, col.set(tint));
    }
    boardMesh.instanceMatrix.needsUpdate = true;
    if (boardMesh.instanceColor) boardMesh.instanceColor.needsUpdate = true;
    group.add(boardMesh);
    disposables.push(boardMesh);

    // Directional symbols, one instanced draw call for all chevrons. The
    // arrow points at the actual event.dir: dir 'R' -> driver-right (+normal),
    // 'L' -> driver-left (-normal), mirrored via a negative local-X scale.
    // Tightening signs add a second symbol offset toward the turn (double
    // chevron). A small offset along the board face hides the coplanar symbol.
    const arrows = planSignArrows(chevs);
    if (arrows.length > 0) {
      arrowMesh = new kit.InstancedMesh(
        A.arrowGeo as THREE.BufferGeometry,
        A.arrowMat as THREE.Material,
        arrows.length,
      );
      for (let k = 0; k < arrows.length; k++) {
        const ar = arrows[k];
        const i = indexAtS(track.cum, ar.chevron.s);
        const p = track.points[i];
        const nrm = track.normals[i];
        const off = ar.chevron.side * (o.halfW + 4.5);
        const tan = track.tangents[i];
        eu.set(0, yawAt(i) + Math.PI, 0);
        q.setFromEuler(eu);
        v.set(
          p.x + nrm.x * (off + ar.offset) - tan.x * SIGN.FACE_OFFSET,
          p.y + 1.5,
          p.z + nrm.z * (off + ar.offset) - tan.z * SIGN.FACE_OFFSET,
        );
        sv.set(arrowPointSign(ar.chevron), 1, 1);
        m.compose(v, q, sv);
        arrowMesh.setMatrixAt(k, m);
      }
      arrowMesh.instanceMatrix.needsUpdate = true;
      group.add(arrowMesh);
      disposables.push(arrowMesh);
    }
  }

  const stations = planSpeedTicks(track.cum, o);
  if (stations.length > 0) {
    tickMesh = new kit.InstancedMesh(
      A.tickGeo as THREE.BufferGeometry,
      A.tickMat as THREE.Material,
      stations.length * 2,
    );
    let k = 0;
    for (const i of stations) {
      const p = track.points[i];
      const nrm = track.normals[i];
      eu.set(0, yawAt(i), 0);
      q.setFromEuler(eu);
      for (const s of [1, -1]) {
        v.set(
          p.x + nrm.x * s * (o.halfW - 1.2),
          p.y + 0.17,
          p.z + nrm.z * s * (o.halfW - 1.2),
        );
        m.compose(v, q, one);
        tickMesh.setMatrixAt(k++, m);
      }
    }
    tickMesh.count = k;
    tickMesh.instanceMatrix.needsUpdate = true;
    group.add(tickMesh);
    disposables.push(tickMesh);
  }

  // Dust logic ring is preallocated here; the integrator copies
  // ring.positions into its Points cloud each frame (or mounts its own).
  const dust = new DustRing(o.dustN);

  return {
    counts,
    dust,
    setQuality(mobile: boolean): void {
      // Mobile degradation: drop the noisiest families first, keep the
      // directional boards + arrows (corner readability) until last.
      // Visibility toggles only.
      if (tickMesh) tickMesh.visible = !mobile;
      if (guardMesh) guardMesh.visible = true;
      if (boardMesh) boardMesh.visible = true;
      if (arrowMesh) arrowMesh.visible = true;
    },
    update(dt: number): void {
      dust.update(dt);
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
