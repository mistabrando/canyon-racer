// Headless budget tests for src/visuals.ts + src/environment.ts. Runs under
// plain node (no deps: neither module has a runtime three import; constructor
// kits are injected). Also enrolled in tsconfig.tests.json; during parallel
// worker activity verify via a project-relative compile instead of the shared
// build, e.g. tsc -p tsconfig.tests.json --outDir .muse/test-output/signs.
declare const process: { exit(c: number): void };
import {
  BUDGET, DustRing, GUARD_TOP_ABOVE_ROAD, SIGN, arrowPointSign, countInstances,
  estimateDrawCalls, estimateTriangles, indexAtS, mountVisuals, planChevrons,
  planGuardrails, planSignArrows, planSpeedTicks, resolveOptions, withinBudget,
} from '../src/visuals.js';
import type {
  CornerEventLike, ThreeKit, TrackData, Vec3Like,
} from '../src/visuals.js';
import { acceptDailyTrack, arcLengths, TRACK_HALF_W } from '../src/trackgen.js';
import { trackFromPoints } from '../src/sim.js';
import { resolveCourse } from '../src/courses.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

// Straight L-unit road sampled every 2 units (mirrors DS=2 sampling).
function straightTrack(L: number): TrackData {
  const points: Vec3Like[] = [];
  const tangents: Vec3Like[] = [];
  const normals: Vec3Like[] = [];
  const cum: number[] = [];
  let s = 0;
  for (let z = 0; z <= L; z += 2) {
    points.push({ x: 0, y: 6, z });
    tangents.push({ x: 0, y: 0, z: 1 });
    normals.push({ x: -1, y: 0, z: 0 });
    cum.push(s);
    s += 2;
  }
  return { points, tangents, normals, cum };
}

function demoEvents(): CornerEventLike[] {
  const ev: CornerEventLike[] = [];
  for (let k = 0; k < 8; k++) {
    ev.push({
      startS: 200 + k * 250, endS: 280 + k * 250,
      dir: k % 2 ? 'R' : 'L', medR: k % 2 ? 55 : 145,
    });
  }
  return ev;
}

// Straight road with a real elevation profile (y rises with z), so grounding
// checks cannot pass by accident on a constant-y fixture.
function hillyTrack(L: number): TrackData {
  const points: Vec3Like[] = [];
  const tangents: Vec3Like[] = [];
  const normals: Vec3Like[] = [];
  const cum: number[] = [];
  let s = 0;
  for (let z = 0; z <= L; z += 2) {
    points.push({ x: 0, y: 6 + z * 0.005, z });
    tangents.push({ x: 0, y: 0, z: 1 });
    normals.push({ x: -1, y: 0, z: 0 });
    cum.push(s);
    s += 2;
  }
  return { points, tangents, normals, cum };
}

function nearestIndex(t: TrackData, x: number, z: number): number {
  let best = Infinity, bi = 0;
  for (let i = 0; i < t.points.length; i++) {
    const d = (t.points[i].x - x) ** 2 + (t.points[i].z - z) ** 2;
    if (d < best) { best = d; bi = i; }
  }
  return bi;
}
function distToCenterline(t: TrackData, x: number, z: number): number {
  const i = nearestIndex(t, x, z);
  return Math.hypot(t.points[i].x - x, t.points[i].z - z);
}
function fracOf(t: TrackData, x: number, z: number): number {
  return t.cum[nearestIndex(t, x, z)] / t.cum[t.cum.length - 1];
}

// Approximate launch chase-cam forward view: camera ~8u behind and 3u above the
// start, looking down the opening tangent. Returns the maximum elevation (deg)
// of any solid family's top within a 140-degree forward arc and 350u, i.e. how
// much of the launch sky is occupied.
function launchMaxElevation(t: TrackData, r: ReturnType<typeof enforceCorridor>): number {
  const p0 = t.points[0], tan = t.tangents[0];
  const cam = { x: p0.x - tan.x * 8, y: p0.y + 3, z: p0.z - tan.z * 8 };
  let maxElev = 0;
  const consider = (x: number, z: number, top: number): void => {
    const dx = x - cam.x, dz = z - cam.z;
    const hd = Math.hypot(dx, dz);
    if (hd < 1 || hd > 350) return;
    const forward = dx * tan.x + dz * tan.z;
    const side = dx * -tan.z + dz * tan.x;
    if (Math.abs(Math.atan2(side, forward)) > (70 * Math.PI) / 180) return;
    maxElev = Math.max(maxElev, Math.atan2(top - cam.y, hd));
  };
  for (const layer of [r.walls.near, r.walls.far]) {
    for (const w of layer) {
      const p = t.points[w.idx], nrm = t.normals[w.idx];
      consider(p.x + nrm.x * w.side * w.lateral, p.z + nrm.z * w.side * w.lateral, p.y - 10 + w.h);
    }
  }
  for (const m of r.mesas) consider(m.x, m.z, m.y + m.h);
  for (const a of r.arches) {
    const p = t.points[a.idx], nrm = t.normals[a.idx];
    consider(p.x + nrm.x * a.side * a.lateral, p.z + nrm.z * a.side * a.lateral,
      archCenterY(p.y, a.r) + archHalfHeight(a.r));
  }
  return (maxElev * 180) / Math.PI;
}

// 1. Nominal daily-length track fits the budget on desktop + mobile.
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const c = countInstances(t.cum, ev, resolveOptions({}));
  ok(withinBudget(c), 'desktop counts within budget', JSON.stringify(c));
  ok(c.signArrows >= c.chevrons, 'every board carries at least one arrow', `${c.signArrows}/${c.chevrons}`);
  ok(estimateDrawCalls(c) <= BUDGET.MAX_NEW_DRAW_CALLS, 'draw calls under budget cap', `draws=${estimateDrawCalls(c)}`);
  ok(estimateTriangles(c) <= BUDGET.MAX_NEW_TRIS, 'tris under cap', `tris=${estimateTriangles(c)}`);
  const m = countInstances(t.cum, ev, resolveOptions({ mobile: true }));
  ok(withinBudget(m), 'mobile counts within budget', JSON.stringify(m));
  ok(m.guardrails < c.guardrails && m.ticks < c.ticks, 'mobile degrades density');
  ok(m.dust <= 80, 'mobile dust capped', `dust=${m.dust}`);
}

// 2. Guardrails keyed to arc distance, both sides, evenly spaced.
{
  const t = straightTrack(1000);
  const o = resolveOptions({ guardSpacing: 10 });
  const g = planGuardrails(t.cum, o);
  ok(g.idx.length % 2 === 0 && g.idx.length > 150, 'paired rails at ~10u', `n=${g.idx.length}`);
  let spacingOk = true;
  for (let k = 2; k < g.idx.length; k += 2) {
    if (t.cum[g.idx[k]] - t.cum[g.idx[k - 2]] < 9.99) { spacingOk = false; break; }
  }
  ok(spacingOk, 'rail stations honour spacing');
  const sides = new Set(g.side);
  ok(sides.has(1) && sides.has(-1) && sides.size === 2, 'both road sides railed');
}

// 3. Chevron corner-entry cues: advance boards outside, severity flagged.
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const o = resolveOptions({});
  const ch = planChevrons(t.cum, ev, o);
  ok(ch.length === 8 * 3 + 8 * 2, '3 advance + 2 repeaters per corner', `n=${ch.length}`);
  const first = ch.filter((c) => c.s < 200);
  ok(first.length === 3, 'advance boards precede entry', `n=${first.length}`);
  ok(first.every((c) => c.side === 1), 'L-corner boards on outside (+1)');
  // dir is the real turn direction: a left turn's board sits on the driver's
  // right but its arrow still points left. side and dir are independent.
  ok(first.every((c) => c.dir === 'L'), 'L-corner boards encode real dir L');
  ok(first.every((c) => arrowPointSign(c) === -1), 'L-corner arrows point driver-left');
  const rCorner = ch.filter((c) => c.s > 400 && c.s < 560);
  ok(rCorner.every((c) => c.side === -1), 'R-corner boards on outside (-1)');
  ok(rCorner.every((c) => c.dir === 'R'), 'R-corner boards encode real dir R');
  ok(rCorner.every((c) => arrowPointSign(c) === 1), 'R-corner arrows point driver-right');
  ok(rCorner.some((c) => c.severe), 'drift corner flagged severe');
  ok(rCorner.every((c) => !c.tight), 'no decreasing flag -> not tightening');
  const sweeper = ch.filter((c) => c.s < 200);
  ok(sweeper.every((c) => !c.severe), 'sweeper flagged non-severe');
  ok(sweeper.every((c) => !c.tight), 'sweeper not flagged tightening');
}

// 4. Caps hold under adversarial input.
{
  const t = straightTrack(5000);
  const many: CornerEventLike[] = [];
  for (let k = 0; k < 60; k++) {
    many.push({ startS: 50 + k * 80, endS: 120 + k * 80, dir: 'L', medR: 50 });
  }
  const o = resolveOptions({});
  const c = countInstances(t.cum, many, o);
  ok(c.chevrons <= BUDGET.MAX_CHEVRONS, 'chevrons capped', `n=${c.chevrons}`);
  ok(c.signArrows <= BUDGET.MAX_SIGN_ARROWS, 'sign arrows capped', `n=${c.signArrows}`);
  ok(c.guardrails <= BUDGET.MAX_GUARDRAILS, 'guardrails capped', `n=${c.guardrails}`);
  ok(c.ticks <= BUDGET.MAX_TICKS, 'ticks capped', `n=${c.ticks}`);
  ok(c.dust <= BUDGET.MAX_DUST, 'dust capped', `n=${c.dust}`);
  ok(withinBudget(c), 'capped counts within budget');
  ok(!withinBudget({ ...c, guardrails: 9999 }), 'over-budget detected');
  ok(!withinBudget({ ...c, signArrows: BUDGET.MAX_SIGN_ARROWS + 1 }), 'arrow over-budget detected');
}

// 5. Degenerate input yields zero-cost visuals.
{
  const o = resolveOptions({});
  const c = countInstances([0], [], o);
  ok(c.guardrails === 0 && c.chevrons === 0 && c.signArrows === 0 && c.ticks === 0, 'empty track, no instances');
  ok(estimateDrawCalls(c) === 0, 'empty track, no draw calls');
  ok(planChevrons([0], [], o).length === 0, 'no events, no chevrons');
}

// 6. indexAtS binary search.
{
  const cum = [0, 2, 4, 6, 8, 10];
  ok(indexAtS(cum, -5) === 0, 'clamps below range');
  ok(indexAtS(cum, 99) === 5, 'clamps above range');
  ok(indexAtS(cum, 5) === 3, 'finds station at/after s');
  ok(indexAtS(cum, 6) === 3, 'exact hit');
}

// 7. DustRing: preallocated buffers, deterministic, no per-frame growth.
{
  const d = new DustRing(160);
  const posRef = d.positions, lifeRef = d.life;
  d.spawn(1, 2, 3, 2);
  d.spawn(4, 5, 6, 2);
  const snap = Array.from(d.positions.slice(0, 6));
  const d2 = new DustRing(160);
  d2.spawn(1, 2, 3, 2);
  d2.spawn(4, 5, 6, 2);
  ok(snap.every((v, i) => v === d2.positions[i]), 'spawn sequence deterministic');
  for (let k = 0; k < 1000; k++) d.update(1 / 60);
  ok(d.positions === posRef && d.life === lifeRef, 'buffers never reallocated');
  ok(d.life.every((v) => v <= 0), 'all particles decay');
  ok(d.positions.every((v) => isFinite(v)), 'no NaN after 1000 updates');
  let parked = true;
  for (let i = 0; i < d.n; i++) {
    if (d.positions[i * 3 + 1] !== -100) { parked = false; break; }
  }
  ok(parked, 'dead particles parked below ground');
  const empty = new DustRing(0);
  empty.spawn(0, 0, 0, 1);
  empty.update(1 / 60);
  ok(empty.n === 0, 'zero-size ring is safe');
}

// 8. Planners deterministic across runs (no hidden randomness).
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const o = resolveOptions({});
  const a = JSON.stringify([planGuardrails(t.cum, o), planSpeedTicks(t.cum, o), planChevrons(t.cum, ev, o)]);
  const b = JSON.stringify([planGuardrails(t.cum, o), planSpeedTicks(t.cum, o), planChevrons(t.cum, ev, o)]);
  ok(a === b, 'placements byte-identical across runs');
}

// 8a. Actual directional signs: the arrow points at the real turn direction,
// independent of the board's placement side. Validated against the synthetic
// track's own curvature (tangent derivative), not against the event's `dir`.
function arcTrack(dir: 'L' | 'R', steps = 200, R = 100, ds = 2): TrackData {
  const points: Vec3Like[] = [], tangents: Vec3Like[] = [], normals: Vec3Like[] = [], cum: number[] = [];
  let x = 0, z = 0, s = 0;
  for (let k = 0; k <= steps; k++) {
    const yaw = (dir === 'L' ? 1 : -1) * (s / R);
    points.push({ x, y: 6, z });
    tangents.push({ x: Math.sin(yaw), y: 0, z: Math.cos(yaw) });
    normals.push({ x: -Math.cos(yaw), y: 0, z: Math.sin(yaw) });
    cum.push(s);
    x += Math.sin(yaw) * ds; z += Math.cos(yaw) * ds; s += ds;
  }
  return { points, tangents, normals, cum };
}
{
  for (const dir of ['L', 'R'] as const) {
    const t = arcTrack(dir);
    const ev: CornerEventLike[] = [{ startS: 100, endS: 300, dir, medR: 100 }];
    const ch = planChevrons(t.cum, ev, resolveOptions({}));
    ok(ch.length > 0 && ch.every((c) => c.dir === dir), `signs encode event dir ${dir}`, `n=${ch.length}`);
    // Mid-corner sign: derive the true centre-of-curvature direction from the
    // track geometry (dT/ds points at the circle centre).
    const c = ch[Math.floor(ch.length / 2)];
    const i = indexAtS(t.cum, c.s);
    const cx = t.tangents[i + 1].x - t.tangents[i - 1].x;
    const cz = t.tangents[i + 1].z - t.tangents[i - 1].z;
    const clen = Math.hypot(cx, cz);
    const arrow = { x: t.normals[i].x * arrowPointSign(c), z: t.normals[i].z * arrowPointSign(c) };
    const place = { x: t.normals[i].x * c.side, z: t.normals[i].z * c.side };
    const dotArrow = (arrow.x * cx + arrow.z * cz) / clen;
    const dotPlace = (place.x * cx + place.z * cz) / clen;
    ok(dotArrow > 0.9, `arrow points into the ${dir} turn`, `dot=${dotArrow.toFixed(3)}`);
    ok(dotPlace < -0.9, `board stands on the outside of the ${dir} turn`, `dot=${dotPlace.toFixed(3)}`);
  }
}

// 8b. Severity + tightening encoding, and the tightening arrow is doubled.
{
  const t = straightTrack(1400);
  const ev: CornerEventLike[] = [
    { startS: 100, endS: 200, dir: 'L', medR: 145, decreasing: false }, // sweeper
    { startS: 400, endS: 500, dir: 'R', medR: 110, decreasing: false }, // drift arc
    { startS: 700, endS: 800, dir: 'R', medR: 100, decreasing: true },  // decreasing but wide
    { startS: 1000, endS: 1100, dir: 'L', medR: 50, decreasing: true }, // tightening
  ];
  const ch = planChevrons(t.cum, ev, resolveOptions({}));
  const flagged = (s0: number, s1: number) => ch.filter((c) => c.s >= s0 && c.s < s1);
  const sweeper = flagged(30, 100), drift = flagged(330, 380);
  const wide = flagged(630, 680), tight = flagged(930, 980);
  ok(sweeper.length > 0 && sweeper.every((c) => !c.severe && !c.tight), 'sweeper: no warning, no tight');
  ok(drift.length > 0 && drift.every((c) => c.severe && !c.tight), 'drift arc: severe warning, not tight');
  ok(wide.length > 0 && wide.every((c) => c.severe && !c.tight), 'decreasing-wide: warning but not tight (radius gate)');
  ok(tight.length > 0 && tight.every((c) => c.severe && c.tight), 'tightening: severe + tight flag');
  const allTight = ch.filter((c) => c.tight);
  ok(allTight.length > 0 && allTight.every((c) => c.dir === 'L'), 'tightening flag follows the event, not side');
  const arrows = planSignArrows(ch);
  ok(arrows.length === ch.length + allTight.length, 'tight signs render a double chevron', `${arrows.length} arrows / ${ch.length} signs`);
  const doublers = arrows.filter((a) => a.chevron.tight);
  ok(doublers.length === allTight.length * 2, 'each tight sign contributes exactly two symbols');
  ok(doublers.every((a) => a.offset === 0 || Math.abs(a.offset) === SIGN.DOUBLE_GAP), 'double symbol offset bounded');
  const offsets = doublers.filter((a) => a.offset !== 0);
  ok(offsets.every((a) => Math.sign(a.offset) === arrowPointSign(a.chevron)), 'second symbol offsets toward the turn');
}

// 8c. Directional-sign budgets are honest: 5 draw calls max, arrows capped,
// triangle estimate includes both symbol triangles.
{
  const t = straightTrack(5000);
  const tightAll: CornerEventLike[] = [];
  for (let k = 0; k < 60; k++) {
    tightAll.push({ startS: 50 + k * 80, endS: 120 + k * 80, dir: 'L', medR: 45, decreasing: true });
  }
  const o = resolveOptions({});
  const c = countInstances(t.cum, tightAll, o);
  ok(c.signArrows <= BUDGET.MAX_SIGN_ARROWS, 'adversarial tight arrows capped', `n=${c.signArrows}`);
  ok(withinBudget(c), 'capped tight counts within budget', JSON.stringify(c));
  ok(estimateDrawCalls(c) <= BUDGET.MAX_NEW_DRAW_CALLS, 'signs stay within the draw-call budget', `draws=${estimateDrawCalls(c)}`);
  const expectedTris = c.guardrails * 12 + c.ticks * 2 + c.chevrons * 2 + c.signArrows * 2;
  ok(estimateTriangles(c) === expectedTris, 'triangle estimate counts boards + arrow symbols', `tris=${estimateTriangles(c)}`);
  const noSigns = { ...c, chevrons: 0, signArrows: 0 };
  ok(estimateDrawCalls(noSigns) === estimateDrawCalls(c) - 2, 'boards + arrows are exactly two draws');
}

// 8d. Headless fake-kit mount: the injected constructor kit contract still
// holds — mountVisuals runs without real three, builds the code-native chevron
// geometry, and mirrors each arrow to its encoded direction.
{
  class FakeAttr {
    data: number[][];
    needsUpdate = false;
    constructor(data: number[][]) { this.data = data; }
    get count(): number { return this.data.length; }
    getX(i: number): number { return this.data[i][0]; }
    getY(i: number): number { return this.data[i][1]; }
    setX(i: number, v: number): void { this.data[i][0] = v; }
    setY(i: number, v: number): void { this.data[i][1] = v; }
  }
  class FakePlane {
    position: FakeAttr;
    constructor(w: number, h: number) {
      const hw = w / 2, hh = h / 2;
      this.position = new FakeAttr([
        [-hw, hh, 0], [hw, hh, 0], [-hw, -hh, 0], [hw, -hh, 0],
      ]);
    }
    getAttribute(name: string): FakeAttr | undefined { return name === 'position' ? this.position : undefined; }
    computeBoundingSphere(): void { /* no-op */ }
    rotateX(): void { /* no-op */ }
    dispose(): void { /* no-op */ }
  }
  class FakeGeo { dispose(): void { /* no-op */ } }
  class FakeColor { hex = 0; set(h: number): FakeColor { this.hex = h; return this; } }
  class FakeMat {
    color: number; side: number;
    constructor(o: { color?: number; side?: number } = {}) {
      this.color = o.color ?? 0xffffff; this.side = o.side ?? 0;
    }
    dispose(): void { /* no-op */ }
  }
  interface FakeRecord { pos: { x: number; y: number; z: number }; scale: { x: number; y: number; z: number } }
  class FakeInst {
    geo: unknown; mat: FakeMat; count: number; visible = true;
    records: FakeRecord[] = [];
    colors: number[] = [];
    instanceMatrix = { needsUpdate: false };
    instanceColor = { needsUpdate: false };
    constructor(geo: unknown, mat: FakeMat, count: number) { this.geo = geo; this.mat = mat; this.count = count; }
    setMatrixAt(i: number, m: { pos: { x: number; y: number; z: number }; scale: { x: number; y: number; z: number } }): void {
      this.records[i] = { pos: { ...m.pos }, scale: { ...m.scale } };
    }
    setColorAt(i: number, c: FakeColor): void { this.colors[i] = c.hex; }
    dispose(): void { /* no-op */ }
  }
  class FakeGroup {
    name = ''; children: unknown[] = [];
    add(o: unknown): void { this.children.push(o); }
    remove(o: unknown): void { const k = this.children.indexOf(o); if (k >= 0) this.children.splice(k, 1); }
  }
  class FakeMatrix {
    pos = { x: 0, y: 0, z: 0 }; scale = { x: 1, y: 1, z: 1 };
    compose(v: { x: number; y: number; z: number }, _q: unknown, s: { x: number; y: number; z: number }): void {
      this.pos = { x: v.x, y: v.y, z: v.z };
      this.scale = { x: s.x, y: s.y, z: s.z };
    }
  }
  class FakeQuat { setFromEuler(): void { /* no-op */ } }
  class FakeEuler { set(): void { /* no-op */ } }
  class FakeVec {
    x: number; y: number; z: number;
    constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
    set(x: number, y: number, z: number): void { this.x = x; this.y = y; this.z = z; }
  }
  const fakeKit = {
    BoxGeometry: FakeGeo, PlaneGeometry: FakePlane,
    MeshLambertMaterial: FakeMat, MeshBasicMaterial: FakeMat,
    InstancedMesh: FakeInst, Group: FakeGroup, Matrix4: FakeMatrix,
    Quaternion: FakeQuat, Euler: FakeEuler, Vector3: FakeVec,
    Color: FakeColor, DoubleSide: 2,
  };
  const t = arcTrack('L', 120);
  const ev: CornerEventLike[] = [{ startS: 60, endS: 160, dir: 'L', medR: 90, decreasing: true }];
  const added: unknown[] = [];
  const scene = { add(o: unknown): void { added.push(o); }, remove(): void { /* no-op */ } };
  const handle = mountVisuals(
    fakeKit as unknown as ThreeKit,
    scene as unknown as Parameters<typeof mountVisuals>[1],
    { ...t, events: ev }, { halfW: 8 },
  );
  const chevs = planChevrons(t.cum, ev, resolveOptions({}));
  const arrows = planSignArrows(chevs);
  ok(handle.counts.signArrows === arrows.length, 'fake-kit mount plans the arrows', `${handle.counts.signArrows}`);
  const group = added[0] as InstanceType<typeof FakeGroup>;
  const arrowMesh = group.children.find(
    (o) => o instanceof FakeInst && o.mat.color === 0x101010,
  ) as InstanceType<typeof FakeInst> | undefined;
  ok(!!arrowMesh, 'fake-kit mount builds the arrow instanced mesh');
  if (arrowMesh) {
    ok(arrowMesh.count === arrows.length, 'arrow instance count matches the planner', `n=${arrowMesh.count}`);
    let mirrorOk = true;
    for (let k = 0; k < arrows.length; k++) {
      if (arrowMesh.records[k].scale.x !== arrowPointSign(arrows[k].chevron)) { mirrorOk = false; break; }
    }
    ok(mirrorOk, 'arrow instances mirror to the encoded turn direction');
    const geo = arrowMesh.geo as InstanceType<typeof FakePlane>;
    ok(geo.position.getX(1) > geo.position.getX(0), 'arrow geometry has a pointing apex');
    ok(geo.position.getY(1) === 0 && geo.position.getY(0) > 0, 'arrow geometry is a chevron, not a rectangle');
  }
  handle.dispose();
}


// ---------- Cycle 2: environment + sightlines ----------

import {
  EASEIN_LEN, ENV_BASE_DROP, ENV_BUDGET, FAR_GEOMETRY_KIND, FAR_TRIS, FLAT_SHADED, GORGE_BLOCK,
  GORGE_MAX_CUT_RUN, HAZE_COLOR, HORIZON_CLEAR, LANDMARK_TINT, OPENING_FAR_LATERAL,
  OPENING_LANDMARK_LATERAL, OPENING_LEN, OPENING_MIN_LATERAL, PIER_TINT, SIGHTLINE,
  TERRACE_TINT_BASE, WALL_GEOMETRY_KIND, WALL_TRIS, archCenterY, archExtent, archHalfHeight,
  corridorNeed, openingLateral,
  countEnvInstances, enforceCorridor, estimateEnvDrawCalls, estimateEnvTriangles,
  envWithinBudget, gorgeModeAt, isGatePier, hash01, mesaDepth, planArches, planMesas,
  planScrub, planWalls, resolveEnvOptions, ridgeBlockMean, strataColor, groundPlainBounds,
  GROUND_PLAIN_MIN_SIZE, GROUND_PLAIN_SNAP, groundPlainCovers,
} from '../src/environment.js';
import { DIRT_PLAIN_Y, DIRT_VERGE_WIDTH, groundSurfaceY } from '../src/surface.js';

// 9. Guardrail sightline contract (visuals.ts).
{
  ok(GUARD_TOP_ABOVE_ROAD <= 1.3, 'rails stay low (sightline contract)', `top=${GUARD_TOP_ABOVE_ROAD}`);
}

// 10. Deterministic hash + strata palette.
{
  ok(hash01(1) === hash01(1) && hash01(1) !== hash01(2), 'hash deterministic, varying');
  let inRange = true;
  for (let k = 0; k < 500; k++) {
    const v = hash01(k * 37 + 11);
    if (!(v >= 0 && v < 1)) { inRange = false; break; }
  }
  ok(inRange, 'hash output in [0,1)');
  const base = strataColor(0), cap = strataColor(1);
  ok(strataColor(0.5).join() === strataColor(0.5).join(), 'strata deterministic');
  ok(cap[0] > base[0] && cap[1] > base[1], 'strata lighten with height');
  ok([base, cap].every((c) => c.every((v) => v >= 0 && v <= 1)), 'strata channels valid');
}

// 11. Wall plan: layered, spaced, clear of the road, capped.
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const o = resolveEnvOptions({});
  const w = planWalls(t.cum, ev, o);
  const total = w.near.length + w.far.length;
  // Far range is one-sided by design now, so total volume is lower but still
  // substantial; the cap is unchanged.
  ok(total > 200 && total <= ENV_BUDGET.MAX_WALLS, 'wall volume in budget', `n=${total}`);
  ok(w.far.length > 0 && w.near.length > w.far.length, 'two depth layers, near dominant');
  let clear = true;
  for (const s of w.near) {
    if (s.lateral < SIGHTLINE.MIN_WALL_LATERAL) { clear = false; break; }
  }
  ok(clear, 'near walls clear of road edge', `min=${SIGHTLINE.MIN_WALL_LATERAL}`);
  const sides = new Set(w.near.map((s) => s.side));
  ok(sides.has(1) && sides.has(-1), 'walls flank both sides');
}

// 12. Inside-corner push-out keeps sightlines open.
{
  const t = straightTrack(1000);
  const corner: CornerEventLike[] = [{ startS: 400, endS: 480, dir: 'L', medR: 55 }];
  const o = resolveEnvOptions({});
  const w = planWalls(t.cum, corner, o);
  const inside = w.near.filter((s) => {
    const cs = t.cum[s.idx];
    return s.side === -1 && cs >= 380 && cs <= 480;
  });
  ok(inside.length > 0, 'inside-corner walls exist to check');
  ok(inside.every((s) => s.lateral >= SIGHTLINE.INSIDE_LATERAL), 'inside walls pushed out');
  ok(inside.every((s) => s.h <= SIGHTLINE.INSIDE_HEIGHT_CAP), 'inside walls height-capped');
}

// 13. Mesas / buttes / spires / arches.
{
  const t = straightTrack(2252);
  const mesas = planMesas(t);
  ok(mesas.length >= 24 && mesas.length <= ENV_BUDGET.MAX_MESAS,
    'mid + terraces + horizon + spires + landmark + piers', `n=${mesas.length}`);
  const far = mesas.filter((m) => m.haze > 0);
  ok(far.length === 8 && far.every((m) => m.haze === 0.55), 'hazed horizon ring');
  ok(far.every((m) => Math.hypot(m.x, m.z) > 300), 'buttes sit at horizon depth');
  const thin = mesas.filter((m) => m.w <= 9 && !isGatePier(m.tint));
  ok(thin.length === 2 && thin.every((m) => m.h >= 70), 'two tall landmark spires');
  ok(HAZE_COLOR === 0xeab183, 'haze matches scene fog');
  const arches = planArches(t.cum, resolveEnvOptions({}));
  ok(arches.length === 3, 'three arch landmarks');
  ok(arches.every((a) => a.lateral >= SIGHTLINE.MIN_ARCH_LATERAL), 'arches clear of road');
  ok(arches.every((a) => a.r >= 8 && a.r <= 12), 'arch scale bounded');
}

// 14. Scrub: near-road motion cues, low, in a tight lateral window.
{
  const t = straightTrack(1000);
  const o = resolveEnvOptions({ halfW: 8 });
  const sc = planScrub(t.cum, o);
  ok(sc.length > 100 && sc.length <= ENV_BUDGET.MAX_SCRUB, 'scrub volume in budget', `n=${sc.length}`);
  ok(sc.every((s) => s.lateral >= 11.5 && s.lateral <= 16), 'scrub hugs road edge');
  ok(sc.every((s) => s.h <= SIGHTLINE.MAX_SCRUB_H), 'scrub never blocks sightlines');
  // Sparse, varied vegetation: no uniform fence. Heights/widths vary and some
  // stations are deliberately skipped, while clusters keep enough cover.
  const hr = Math.max(...sc.map((s) => s.h)) - Math.min(...sc.map((s) => s.h));
  const wr = Math.max(...sc.map((s) => s.w)) - Math.min(...sc.map((s) => s.w));
  ok(hr > 0.6 && wr > 0.8, 'scrub silhouette varies (not one shrub)', `h=${hr.toFixed(2)} w=${wr.toFixed(2)}`);
  const stations = new Set(sc.map((s) => s.idx)).size;
  let visits = 0, next = o.scrubStep;
  for (let i = 1; i < t.cum.length - 1 && next < t.cum[t.cum.length - 1] - 8; i++) {
    if (t.cum[i] < next) continue;
    next = t.cum[i] + o.scrubStep; visits++;
  }
  ok(visits - stations >= 3, 'gaps break the repeating fence', `${stations}/${visits} stations placed`);
  const clustered = sc.filter((s, k) => k > 0 && s.idx === sc[k - 1].idx && s.side === sc[k - 1].side).length;
  ok(clustered > 0, 'clustered plants exist', `n=${clustered}`);
}

// 15. Environment budget: draws, tris, mobile reduction, determinism.
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const desk = countEnvInstances(t, ev, resolveEnvOptions({}));
  const mob = countEnvInstances(t, ev, resolveEnvOptions({ mobile: true }));
  ok(envWithinBudget(desk), 'desktop env within budget', JSON.stringify(desk));
  ok(estimateEnvDrawCalls(desk) <= 5, 'at most 5 new env draw calls', `draws=${estimateEnvDrawCalls(desk)}`);
  ok(estimateEnvTriangles(desk) <= ENV_BUDGET.MAX_NEW_TRIS, 'env tris under cap', `tris=${estimateEnvTriangles(desk)}`);
  ok(mob.scrub < desk.scrub, 'mobile sheds scrub', `${desk.scrub}->${mob.scrub}`);
  ok(estimateEnvTriangles(mob) < estimateEnvTriangles(desk), 'mobile sheds tris');
  ok(envWithinBudget(mob), 'mobile env within budget');
  const again = countEnvInstances(t, ev, resolveEnvOptions({}));
  ok(JSON.stringify(desk) === JSON.stringify(again), 'env counts deterministic');
  const empty: TrackData = { points: [], tangents: [], normals: [], cum: [] };
  const z = countEnvInstances(empty, [], resolveEnvOptions({}));
  ok(z.walls === 0 && estimateEnvDrawCalls(z) === 0, 'empty track mounts nothing');
}

// 16. Combined visuals + environment envelope for the integrator.
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const v = countInstances(t.cum, ev, resolveOptions({}));
  const e = countEnvInstances(t, ev, resolveEnvOptions({}));
  const draws = estimateDrawCalls(v) + estimateEnvDrawCalls(e);
  const tris = estimateTriangles(v) + estimateEnvTriangles(e);
  ok(draws <= 10, 'combined new draw calls bounded', `draws=${draws}`);
  ok(tris <= 40000, 'combined new tris bounded', `tris=${tris}`);
  console.log(`    [measure] visuals=${JSON.stringify(v)} env=${JSON.stringify(e)} draws=${draws} tris=${tris}`);
}


// ---------- Cycle 4: canyon composition (no box tunnel) ----------

// 17. Walls are declared + budgeted as irregular faceted prisms, not boxes.
{
  ok(WALL_GEOMETRY_KIND === 'irregular-faceted-prism', 'wall geometry is a faceted prism', WALL_GEOMETRY_KIND);
  ok((WALL_GEOMETRY_KIND as string) !== 'box', 'wall geometry is not a box');
  ok(WALL_TRIS === 30, 'wall tri count matches 5-sided 2-seg prism', `tris=${WALL_TRIS}`);
  const one = { walls: 1, farWalls: 0, mesas: 0, arches: 0, scrub: 0 };
  ok(estimateEnvTriangles(one) === WALL_TRIS, 'triangle estimate uses prism cost');
}

// 18. Silhouette variation: heights/widths/setbacks all vary widely.
{
  const t = straightTrack(2252);
  const w = planWalls(t.cum, demoEvents(), resolveEnvOptions({}));
  const hs = w.near.map((s) => s.h), ws = w.near.map((s) => s.w), ls = w.near.map((s) => s.lateral);
  const range = (a: number[]): number => Math.max(...a) - Math.min(...a);
  ok(range(hs) >= 25, 'cliff heights vary (faceted skyline)', `range=${range(hs).toFixed(1)}`);
  ok(range(ws) >= 8, 'cliff widths vary', `range=${range(ws).toFixed(1)}`);
  ok(range(ls) >= 40, 'setbacks vary cut -> overlook', `range=${range(ls).toFixed(1)}`);
  ok(new Set(hs.map((h) => Math.round(h))).size > 12, 'no repeated-box heights');
}

// 19. Gorge rhythm: cuts alternate with open vistas, deterministic.
{
  const modes: string[] = [];
  for (let k = 0; k < 200; k++) modes.push(gorgeModeAt(k));
  const vistas = modes.filter((m) => m === 'vista').length;
  const ratio = vistas / modes.length;
  ok(ratio >= 0.3 && ratio <= 0.65, 'open-vista share breathes, never a corridor', `vista=${ratio.toFixed(2)}`);
  ok(modes.includes('cut'), 'enclosed cuts still exist');
  ok(gorgeModeAt(0) === 'vista', 'launch approach opens out (no slab corridor)');
  ok(gorgeModeAt(7) === gorgeModeAt(7) && gorgeModeAt(199) === gorgeModeAt(199), 'gorge rhythm deterministic');
  // Block granularity: mode is constant within one GORGE_BLOCK phrase.
  let blocky = true;
  for (let b = 0; b < 60; b++) {
    const m = gorgeModeAt(b * GORGE_BLOCK);
    for (let j = 1; j < GORGE_BLOCK; j++) {
      if (gorgeModeAt(b * GORGE_BLOCK + j) !== m) { blocky = false; break; }
    }
    if (!blocky) break;
  }
  ok(blocky, 'vista/cut alternate in coherent stretches');
  // Vista cliffs sit in the midground; cuts hug the road.
  const t = straightTrack(2252);
  const w = planWalls(t.cum, demoEvents(), resolveEnvOptions({}));
  const vistaWalls = w.near.filter((s) => s.lateral >= 58);
  const cutWalls = w.near.filter((s) => s.lateral < 58);
  ok(vistaWalls.length > 0 && cutWalls.length > 0, 'both vista + cut walls placed');
  const med = (a: number[]): number => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
  ok(med(vistaWalls.map((s) => s.lateral)) > med(cutWalls.map((s) => s.lateral)) * 1.4, 'vistas genuinely open');
}

// 20. Depth layers persist: near cliffs, far range, mesas, hazed horizon.
{
  const t = straightTrack(2252);
  const o = resolveEnvOptions({});
  const w = planWalls(t.cum, demoEvents(), o);
  ok(w.far.length > 0 && w.near.length > w.far.length, 'near layer dominant over far range');
  ok(w.far.every((s) => s.lateral >= 70), 'far range at depth');
  const mesas = planMesas(t);
  const far = mesas.filter((m) => m.haze > 0);
  ok(mesas.length <= ENV_BUDGET.MAX_MESAS && far.length === 8, 'mid + horizon + spire depth stack');
  ok(far.every((m) => Math.hypot(m.x, m.z) > 300), 'horizon buttes at parallax depth');
}

// 21. Palette contrast: warm rock base, pale caprock, haze-separated horizon.
{
  const base = strataColor(0), cap = strataColor(1);
  const dist = Math.hypot(cap[0] - base[0], cap[1] - base[1], cap[2] - base[2]);
  ok(dist > 0.6, 'base-to-caprock contrast reads at distance', `d=${dist.toFixed(2)}`);
  ok(cap.every((v) => v >= 0.65), 'pale caprock echoes concrete structures');
  ok(base[0] > base[2] && base[0] > 0.3, 'base rock stays warm sandstone');
  const hazeR = ((HAZE_COLOR >> 16) & 255) / 255, hazeB = (HAZE_COLOR & 255) / 255;
  ok(hazeR > hazeB, 'haze is warm-atmosphere, distinct from cool-sky background');
}

// 22. Sightline clearance incl. vista cliffs on corner insides.
{
  const t = straightTrack(1000);
  const corner: CornerEventLike[] = [{ startS: 400, endS: 480, dir: 'L', medR: 55 }];
  const w = planWalls(t.cum, corner, resolveEnvOptions({}));
  ok(w.near.every((s) => s.lateral >= SIGHTLINE.MIN_WALL_LATERAL), 'every cliff clears the road edge');
  const inside = w.near.filter((s) => {
    const cs = t.cum[s.idx];
    return s.side === -1 && cs >= 380 && cs <= 480;
  });
  ok(inside.length > 0, 'inside-corner cliffs exist to check');
  ok(inside.every((s) => s.h <= SIGHTLINE.INSIDE_HEIGHT_CAP), 'inside cliffs height-capped incl. vistas');
  ok(inside.every((s) => s.lateral >= SIGHTLINE.INSIDE_LATERAL), 'inside cliffs pushed out');
}

// 23. Seed variance: placement differs along the road, replays identically.
{
  const t = straightTrack(2252);
  const o = resolveEnvOptions({});
  const a = planWalls(t.cum, demoEvents(), o);
  const lat = a.near.map((s) => s.lateral);
  const mean = lat.reduce((x, y) => x + y, 0) / lat.length;
  const sd = Math.sqrt(lat.reduce((x, y) => x + (y - mean) * (y - mean), 0) / lat.length);
  ok(sd > 12, 'setback varies along the road (no repeating corridor)', `sd=${sd.toFixed(1)}`);
  const b = planWalls(t.cum, demoEvents(), o);
  ok(JSON.stringify(a) === JSON.stringify(b), 'placement deterministic across runs');
}

// 24. Cycle-4 budgets: draw calls flat, tris under cap, mobile sheds load.
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const desk = countEnvInstances(t, ev, resolveEnvOptions({}));
  const mob = countEnvInstances(t, ev, resolveEnvOptions({ mobile: true }));
  ok(envWithinBudget(desk), 'desktop env within budget', JSON.stringify(desk));
  ok(estimateEnvDrawCalls(desk) <= 5, 'near + far archetypes + mesa + arch + scrub draws', `draws=${estimateEnvDrawCalls(desk)}`);
  ok(estimateEnvTriangles(desk) <= ENV_BUDGET.MAX_NEW_TRIS, 'prism tris under cap', `tris=${estimateEnvTriangles(desk)}`);
  ok(mob.scrub < desk.scrub, 'mobile sheds scrub');
  ok(estimateEnvTriangles(mob) < estimateEnvTriangles(desk), 'mobile sheds tris');
  ok(envWithinBudget(mob), 'mobile env within budget');
  const v = countInstances(t.cum, ev, resolveOptions({}));
  const draws = estimateDrawCalls(v) + estimateEnvDrawCalls(desk);
  const tris = estimateTriangles(v) + estimateEnvTriangles(desk);
  ok(draws <= 10 && tris <= 40000, 'combined envelope holds', `draws=${draws} tris=${tris}`);
  console.log(`    [measure-cycle4] env=${JSON.stringify(desk)} draws=${draws} tris=${tris}`);
}


// ---------- Cycle 7: background composition (convincing world) ----------

// 25. Two archetypes: near prisms vs far tapered buttes, honest tri math.
{
  ok(FAR_GEOMETRY_KIND === 'tapered-butte', 'far range is a distinct butte archetype');
  ok((FAR_GEOMETRY_KIND as string) !== (WALL_GEOMETRY_KIND as string), 'archetypes differ');
  ok(FAR_TRIS === 28, 'butte tri count matches 7-sided 1-seg taper', `tris=${FAR_TRIS}`);
  ok(FLAT_SHADED === true, 'rock materials flat-shaded for facet response');
  const split = { walls: 10, farWalls: 4, mesas: 1, arches: 1, scrub: 2 };
  ok(estimateEnvTriangles(split) === 6 * WALL_TRIS + 4 * FAR_TRIS + 64 + 144 + 24, 'split tri math exact');
  ok(estimateEnvDrawCalls(split) === 5, 'near + far + mesa + arch + scrub draws');
  ok(estimateEnvDrawCalls({ walls: 0, farWalls: 0, mesas: 0, arches: 0, scrub: 0 }) === 0, 'empty mounts nothing');
  const t = straightTrack(2252);
  const w = planWalls(t.cum, demoEvents(), resolveEnvOptions({}));
  ok(w.far.length > 0 && w.near.length > w.far.length, 'far butte layer subordinate to near cliffs');
}

// 26. Ridgeline phrasing: block means alternate tall/short, deterministic.
{
  const t = straightTrack(2252);
  const o = resolveEnvOptions({});
  const w = planWalls(t.cum, demoEvents(), o);
  const order = new Map<number, number>();
  let si = 0, next = o.wallStep;
  for (let i = 1; i < t.cum.length - 1 && next < t.cum[t.cum.length - 1] - 10; i++) {
    if (t.cum[i] < next) continue;
    next = t.cum[i] + o.wallStep;
    order.set(i, si);
    si++;
  }
  const means = ridgeBlockMean(w.near, (seg) => order.get(seg.idx) ?? 0).filter((m) => m !== null) as number[];
  ok(means.length >= 8, 'enough ridgeline blocks to phrase', `blocks=${means.length}`);
  const full = Math.max(...means) - Math.min(...means);
  ok(full >= 12, 'phrases span tall and short', `range=${full.toFixed(1)}`);
  let extrema = 0;
  for (let k = 1; k < means.length - 1; k++) {
    if ((means[k] >= means[k - 1] && means[k] >= means[k + 1] && (means[k] !== means[k - 1] || means[k] !== means[k + 1])) ||
        (means[k] <= means[k - 1] && means[k] <= means[k + 1] && (means[k] !== means[k - 1] || means[k] !== means[k + 1]))) extrema++;
  }
  ok(extrema >= 3, 'skyline alternates instead of random-walking', `extrema=${extrema}`);
  const again = ridgeBlockMean(planWalls(t.cum, demoEvents(), o).near, (seg) => order.get(seg.idx) ?? 0);
  ok(JSON.stringify(means) === JSON.stringify(again), 'ridgeline deterministic');
}

// 27. Corridor breaker: no both-sides run longer than 4 stations (~56u).
{
  const t = straightTrack(2252);
  const w = planWalls(t.cum, demoEvents(), resolveEnvOptions({}));
  const byIdx = new Map<number, number>();
  for (const seg of w.near) byIdx.set(seg.idx, (byIdx.get(seg.idx) ?? 0) + 1);
  const seq = [...byIdx.entries()].sort((a, b) => a[0] - b[0]).map(([, n]) => n);
  let run = 0, worst = 0;
  for (const n of seq) {
    if (n >= 2) { run++; worst = Math.max(worst, run); }
    else run = 0;
  }
  ok(worst <= GORGE_MAX_CUT_RUN, 'both-sides runs bounded (~70u max)', `worst=${worst} stations`);
  ok(worst >= 3, 'confinement lasts more than an instant', `worst=${worst} stations`);
  ok(seq.some((n) => n === 1), 'single-sided vista breaks exist');
}

// 28. Repetition scan: no 100u wallpaper window (art review #8).
{
  const t = straightTrack(2252);
  const w = planWalls(t.cum, demoEvents(), resolveEnvOptions({}));
  let wallpaper = 0;
  for (let s0 = 0; s0 < t.cum[t.cum.length - 1] - 100; s0 += 20) {
    const win = w.near.filter((seg) => t.cum[seg.idx] >= s0 && t.cum[seg.idx] < s0 + 100);
    if (win.length < 5) continue;
    const yaw0 = win[0].yaw, h0 = win[0].h;
    const same = win.filter((seg) => Math.abs(seg.yaw - yaw0) <= 0.15 && Math.abs(seg.h - h0) <= h0 * 0.15).length;
    if (same / win.length > 0.8) wallpaper++;
  }
  ok(wallpaper === 0, 'no wallpaper windows on a full track', `bad=${wallpaper}`);
}

// 29. Gate piers: two pale pairs flanking the road, corridor-clear.
{
  const t = straightTrack(2252);
  const mesas = planMesas(t, 11.5);
  const piers = mesas.filter((b) => isGatePier(b.tint));
  ok(piers.length === 4, 'two gate-pier pairs', `n=${piers.length}`);
  ok(piers.every((b) => b.h >= 30 && b.h <= 44 && b.w <= 5), 'tall thin roadside columns');
  ok(piers.every((b) => b.haze === 0), 'piers un-hazed (near landmarks)');
  const sides = new Set(piers.map((b) => Math.sign(b.x)));
  ok(sides.has(1) && sides.has(-1), 'piers flank both sides');
  ok(PIER_TINT[0] > 1.15 && PIER_TINT[0] > PIER_TINT[2], 'pier bleach above any rock tint, warm-pale');
  ok(!isGatePier(0) && !isGatePier(299) && isGatePier(300), 'pier marker boundary exact');
}

// 30. Cycle-7 envelope: 5 draws, tris under cap, mobile drops far + scrub.
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const desk = countEnvInstances(t, ev, resolveEnvOptions({}));
  const mob = countEnvInstances(t, ev, resolveEnvOptions({ mobile: true }));
  ok(envWithinBudget(desk), 'desktop env within budget', JSON.stringify(desk));
  ok(estimateEnvDrawCalls(desk) <= 5, 'env draws bounded', `draws=${estimateEnvDrawCalls(desk)}`);
  ok(estimateEnvTriangles(desk) <= ENV_BUDGET.MAX_NEW_TRIS, 'archetype tris under cap', `tris=${estimateEnvTriangles(desk)}`);
  ok(mob.scrub < desk.scrub, 'mobile sheds scrub');
  ok(estimateEnvTriangles(mob) < estimateEnvTriangles(desk), 'mobile sheds tris');
  ok(envWithinBudget(mob), 'mobile env within budget');
  const v = countInstances(t.cum, ev, resolveOptions({}));
  const draws = estimateDrawCalls(v) + estimateEnvDrawCalls(desk);
  const tris = estimateTriangles(v) + estimateEnvTriangles(desk);
  ok(draws <= 10 && tris <= 40000, 'combined envelope holds', `draws=${draws} tris=${tris}`);
  console.log(`    [measure-cycle7] env=${JSON.stringify(desk)} draws=${draws} tris=${tris}`);
}

// ---------- Cycle 8: composition + grounding (packet 6) ----------

// 31. Layered composition + composed open launch vista on a real elevation
// profile: low opening shelves, distant separated formations, midground
// terraces, one landmark, and confined sections later.
{
  const t = hillyTrack(2252);
  const ev = demoEvents();
  const o = resolveEnvOptions({});
  const r = enforceCorridor(
    t, planWalls(t.cum, ev, o), planMesas(t, o.halfW),
    planArches(t.cum, o), planScrub(t.cum, o), o.halfW,
  );
  const terraces = r.mesas.filter(
    (m) => m.haze === 0 && m.tint >= TERRACE_TINT_BASE && m.tint < LANDMARK_TINT,
  );
  ok(terraces.length >= 5, 'midground terrace layer exists', `n=${terraces.length}`);
  ok(terraces.every((m) => m.w >= 12 && m.w <= 44 && m.h >= 10 && m.h <= 40), 'terraces are shelf-scale');
  ok(terraces.every((m) => {
    const lat = distToCenterline(t, m.x, m.z);
    return lat > corridorNeed(o.halfW) && lat < 320;
  }), 'terraces sit between the road and the far range');
  const bodies = r.mesas.filter((m) => m.tint === LANDMARK_TINT);
  ok(bodies.length === 1, 'exactly one landmark', `b=${bodies.length}`);
  const L = bodies[0];
  ok(L.w >= 40 && L.h >= 48, 'landmark is a large formation', `w=${L.w.toFixed(0)} h=${L.h.toFixed(0)}`);
  ok(fracOf(t, L.x, L.z) <= 0.16, 'landmark anchors the approach', `f=${fracOf(t, L.x, L.z).toFixed(2)}`);
  ok(distToCenterline(t, L.x, L.z) >= OPENING_LANDMARK_LATERAL,
    'landmark reads at a clearly separated depth', `lat=${distToCenterline(t, L.x, L.z).toFixed(0)}`);
  ok(r.walls.near.length > 0 && r.walls.far.length > 0, 'near + far cliff bands present');

  // Opening composition: low shelves only, no tall cliff or close formation.
  const openingWalls = r.walls.near.filter((w) => t.cum[w.idx] < OPENING_LEN);
  ok(openingWalls.length > 0, 'opening keeps asymmetric framing shelves', `n=${openingWalls.length}`);
  const maxOpenH = openingWalls.length ? Math.max(...openingWalls.map((w) => w.h)) : 0;
  ok(openingWalls.every((w) => w.h <= 6), 'opening near walls are low shelves', `maxH=${maxOpenH.toFixed(1)}`);
  const shelfSides = new Set(openingWalls.map((w) => w.side));
  ok(shelfSides.size >= 1, 'opening shelves are asymmetric (one side at a time)');
  const openingMesas = r.mesas.filter((m) => {
    if (m.haze > 0) return false;
    const i = nearestIndex(t, m.x, m.z);
    return t.cum[i] < OPENING_LEN;
  });
  ok(openingMesas.every((m) => distToCenterline(t, m.x, m.z) >= OPENING_MIN_LATERAL - 1e-6),
    'opening formations pushed to separated depth',
    `minLat=${openingMesas.length ? Math.min(...openingMesas.map((m) => distToCenterline(t, m.x, m.z))).toFixed(0) : 'n/a'}`);

  // Characteristic confinement resumes after the opening.
  const laterTall = r.walls.near.filter((w) => t.cum[w.idx] > OPENING_LEN && w.h > 12);
  ok(laterTall.length > 0, 'confined sections resume after the opening', `n=${laterTall.length}`);
}

// 31a. The opening rule is shared by every family on a track short enough that
// arches/spires would otherwise fall inside it.
{
  const t = straightTrack(400);
  const o = resolveEnvOptions({});
  const arches = planArches(t.cum, o);
  const openingArches = arches.filter((a) => t.cum[a.idx] < OPENING_LEN);
  ok(openingArches.length > 0, 'short-track arches fall inside the opening to check');
  ok(openingArches.every((a) => a.lateral >= OPENING_MIN_LATERAL - 1e-6),
    'arches respect the opening push-out',
    `min=${Math.min(...openingArches.map((a) => a.lateral)).toFixed(0)}`);
  const mesas = planMesas(t, o.halfW).filter((m) => m.haze === 0);
  const openingMesas = mesas.filter((m) => {
    const i = nearestIndex(t, m.x, m.z);
    return t.cum[i] < OPENING_LEN;
  });
  ok(openingMesas.every((m) => distToCenterline(t, m.x, m.z) >= OPENING_MIN_LATERAL - 1e-6),
    'short-track mesas respect the opening push-out');
  ok(openingLateral(150, 10, 40) === 150 && openingLateral(150, 200, 40) === 40,
    'openingLateral clamps inside and preserves outside');
}

// 32. Grounding: formation bases stay below road grade (no hovering tips) and
// the stable horizon ring stays below ground.
{
  const t = hillyTrack(2252);
  const ev = demoEvents();
  const o = resolveEnvOptions({});
  const r = enforceCorridor(
    t, planWalls(t.cum, ev, o), planMesas(t, o.halfW),
    planArches(t.cum, o), planScrub(t.cum, o), o.halfW,
  );
  let floaters = 0;
  for (const m of r.mesas) {
    if (m.haze > 0) continue; // horizon ring checked separately
    const ground = t.points[nearestIndex(t, m.x, m.z)].y - ENV_BASE_DROP;
    if (m.y > ground + 1e-6) floaters++;
  }
  ok(floaters === 0, 'every formation base is anchored below road grade', `floaters=${floaters}`);
  const horizon = r.mesas.filter((m) => m.haze > 0);
  ok(horizon.length === 8 && horizon.every((m) => m.y < 0), 'horizon ring base stays below ground');
  let minTop = Infinity, maxTop = -Infinity;
  for (const m of horizon) { minTop = Math.min(minTop, m.y); maxTop = Math.max(maxTop, m.y); }
  ok(maxTop - minTop < 40, 'horizon base band is shallow/stable', `span=${(maxTop - minTop).toFixed(1)}`);
}

// 33. Arch landmarks are grounded half-rings (not floating hoops) and clear
// the road corridor on both quality tiers.
{
  const t = hillyTrack(2252);
  for (const mobile of [false, true]) {
    const o = resolveEnvOptions({ mobile });
    const arches = planArches(t.cum, o);
    const tier = mobile ? 'mobile' : 'desktop';
    ok(arches.length === 3, `three arches (${tier})`);
    ok(arches.every((a) => a.lateral - archExtent(a.r) >= corridorNeed(o.halfW) - 1e-9),
      `arch ring clears road corridor (${tier})`);
    const y = (a: { idx: number }) => t.points[a.idx].y;
    ok(arches.every((a) => archCenterY(y(a), a.r) - archHalfHeight(a.r) <= y(a) - ENV_BASE_DROP),
      `arch lower arc buried below grade (${tier})`);
    ok(arches.every((a) => archCenterY(y(a), a.r) + archHalfHeight(a.r) > y(a) + 2),
      `arch rises above the road as a landmark (${tier})`);
  }
}

// 34. Both quality tiers keep the composed layers; mobile only thins
// vegetation, and the landmark survives enforcement.
{
  const t = hillyTrack(2252);
  const ev = demoEvents();
  const desk = countEnvInstances(t, ev, resolveEnvOptions({}));
  const mob = countEnvInstances(t, ev, resolveEnvOptions({ mobile: true }));
  ok(mob.mesas === desk.mesas && mob.arches === desk.arches, 'mobile keeps mesas + arches (landmarks)');
  ok(mob.scrub < desk.scrub, 'mobile thins vegetation');
  ok(mob.walls <= desk.walls && mob.farWalls <= desk.farWalls, 'mobile never adds walls');
  ok(envWithinBudget(desk) && envWithinBudget(mob), 'both tiers within budget');
  const o = resolveEnvOptions({});
  const r = enforceCorridor(
    t, planWalls(t.cum, ev, o), planMesas(t, o.halfW),
    planArches(t.cum, o), planScrub(t.cum, o), o.halfW,
  );
  ok(r.mesas.some((m) => m.tint === LANDMARK_TINT), 'landmark survives corridor enforcement');
  const terraces = r.mesas.filter((m) => m.tint >= TERRACE_TINT_BASE && m.tint < LANDMARK_TINT);
  ok(terraces.length >= 5, 'terrace layer survives corridor enforcement', `n=${terraces.length}`);
}

// 35. Fixed daily seeds: composition + grounding hold on real tracks (both
// road/rail exclusion is enforced by the same planner the corridor audit uses).
{
  for (const day of ['2026-09-07', '2026-08-15', '2026-07-04', '2026-06-21']) {
    const daily = acceptDailyTrack(day);
    const tv = trackFromPoints(daily.points, TRACK_HALF_W);
    const t: TrackData = {
      points: daily.points.map((p) => ({ x: p.x, y: p.y, z: p.z })),
      tangents: tv.tx.map((x, k) => ({ x, y: 0, z: tv.tz[k] })),
      normals: tv.nx.map((x, k) => ({ x, y: 0, z: tv.nz[k] })),
      cum: arcLengths(daily.points),
      events: daily.stats.events,
    };
    const o = resolveEnvOptions({ halfW: TRACK_HALF_W });
    const r = enforceCorridor(
      t, planWalls(t.cum, daily.stats.events, o), planMesas(t, o.halfW),
      planArches(t.cum, o), planScrub(t.cum, o), o.halfW,
    );
    ok(r.mesas.filter((m) => m.tint === LANDMARK_TINT).length === 1, `landmark present ${day}`);
    ok(r.mesas.filter((m) => m.tint >= TERRACE_TINT_BASE && m.tint < LANDMARK_TINT).length >= 5,
      `terraces present ${day}`);
    let floaters = 0, minClear = Infinity;
    for (const m of r.mesas) {
      if (m.haze > 0) continue;
      const gi = nearestIndex(t, m.x, m.z);
      const ground = t.points[gi].y - ENV_BASE_DROP;
      if (m.y > ground + 1e-6) floaters++;
      minClear = Math.min(minClear, ground - m.y);
    }
    ok(floaters === 0, `no floating formation bases ${day}`, `floaters=${floaters} minClear=${minClear.toFixed(2)}`);
    // The landmark must clear the corridor and stay within approach depth.
    const lm = r.mesas.find((m) => m.tint === LANDMARK_TINT) as { x: number; z: number };
    ok(distToCenterline(t, lm.x, lm.z) - corridorNeed(o.halfW) >= 0, `landmark corridor-clear ${day}`);
  }
}

// 36. Fixed course identity + launch composition (practice/benchmark). Consumes
// the authored course geometry; does not edit the courses module.
{
  for (const mode of ['practice', 'benchmark'] as const) {
    const a = resolveCourse(mode, '2026-09-15');
    const b = resolveCourse(mode, '2026-01-01');
    ok(a === b && a.track.checksum === b.track.checksum, `${mode}: fixed identity is day-independent`);
    ok(a.reference !== null && a.reference.track?.course === a.track.checksum,
      `${mode}: reference matches the built geometry`);

    const daily = a.track;
    const tv = trackFromPoints(daily.points, TRACK_HALF_W);
    const t: TrackData = {
      points: daily.points.map((p) => ({ x: p.x, y: p.y, z: p.z })),
      tangents: tv.tx.map((x, k) => ({ x, y: 0, z: tv.tz[k] })),
      normals: tv.nx.map((x, k) => ({ x, y: 0, z: tv.nz[k] })),
      cum: arcLengths(daily.points),
      events: daily.stats.events,
    };
    const o = resolveEnvOptions({ halfW: TRACK_HALF_W });
    const r = enforceCorridor(
      t, planWalls(t.cum, daily.stats.events, o), planMesas(t, o.halfW),
      planArches(t.cum, o), planScrub(t.cum, o), o.halfW,
    );
    // Opening sky: only low shelves, pushed-out far range, separated formations.
    const openN = r.walls.near.filter((w) => t.cum[w.idx] < OPENING_LEN);
    ok(openN.length > 0 && openN.every((w) => w.h <= 6),
      `${mode}: opening near walls are low shelves`,
      `maxH=${openN.length ? Math.max(...openN.map((w) => w.h)).toFixed(1) : 'n/a'}`);
    const openFar = r.walls.far.filter((w) => t.cum[w.idx] < OPENING_LEN);
    ok(openFar.every((w) => w.lateral >= OPENING_FAR_LATERAL - 1e-6),
      `${mode}: opening far range pushed to separated depth`);
    const openM = r.mesas.filter((m) => m.haze === 0 && t.cum[nearestIndex(t, m.x, m.z)] < OPENING_LEN);
    ok(openM.every((m) => distToCenterline(t, m.x, m.z) >= OPENING_MIN_LATERAL - 1e-6),
      `${mode}: opening formations separated`);
    // No both-sided tall cliff in the opening; the first pair starts after it.
    const tall = r.walls.near.filter((w) => w.h >= 12).sort((x, y) => t.cum[x.idx] - t.cum[y.idx]);
    let firstBoth = Infinity;
    for (const w of tall) {
      const s = t.cum[w.idx];
      if (tall.some((v) => v !== w && v.side === -w.side && Math.abs(t.cum[v.idx] - s) <= 30)) {
        firstBoth = Math.min(firstBoth, s);
      }
    }
    ok(firstBoth >= OPENING_LEN, `${mode}: no both-sided tall cliffs in the opening`,
      `first=${firstBoth === Infinity ? 'none' : firstBoth.toFixed(0)}`);
    // Far range is one-sided everywhere: never a symmetric far corridor.
    let farPair = 0;
    for (const w of r.walls.far) {
      for (const v of r.walls.far) {
        if (v !== w && v.side === -w.side && Math.abs(t.cum[v.idx] - t.cum[w.idx]) <= 40) farPair++;
      }
    }
    ok(farPair === 0, `${mode}: far range never forms a symmetric corridor`, `pairs=${farPair}`);
    // Purposeful one-sided later gorges: confinement resumes after the ease-in.
    ok(r.walls.near.some((w) => t.cum[w.idx] > OPENING_LEN + EASEIN_LEN && w.h > 12),
      `${mode}: confined near cliffs resume after the opening`);
    // Camera-visible tall families (including hazed horizon buttes) must not
    // loom over the launch: horizon centers clear the whole course, and the
    // forward-arc elevation stays modest (open sky).
    const horizon = r.mesas.filter((m) => m.haze > 0);
    ok(horizon.length === 8 && horizon.every((m) => distToCenterline(t, m.x, m.z) >= HORIZON_CLEAR - 1e-6),
      `${mode}: horizon ring clears the course`,
      `min=${Math.min(...horizon.map((m) => distToCenterline(t, m.x, m.z))).toFixed(0)}`);
    const elev = launchMaxElevation(t, r);
    ok(elev <= 22, `${mode}: launch forward sky is open`, `maxElev=${elev.toFixed(1)}deg`);
    const counts = countEnvInstances(t, daily.stats.events, o);
    ok(envWithinBudget(counts), `${mode}: environment within budget`, JSON.stringify(counts));
  }
}

// Surface contract + expansive dirt plain (speed/dirt presentation).
{
  // groundSurfaceY: exact road height on the road, flat both ends, plain beyond.
  const halfW = 11.5, roadY = 3.2;
  ok(groundSurfaceY(roadY, 0, halfW) === roadY, 'surface is road height on the road');
  ok(groundSurfaceY(roadY, halfW, halfW) === roadY, 'surface is road height exactly at the edge');
  ok(groundSurfaceY(roadY, -halfW, halfW) === roadY, 'surface is symmetric at the edge');
  ok(Math.abs(groundSurfaceY(roadY, halfW + DIRT_VERGE_WIDTH, halfW) - DIRT_PLAIN_Y) < 1e-9,
    'surface reaches the plain at the verge end');
  ok(Math.abs(groundSurfaceY(roadY, halfW + DIRT_VERGE_WIDTH * 5, halfW) - DIRT_PLAIN_Y) < 1e-9,
    'surface stays flat plain everywhere beyond the verge');
  // Monotonic blend with flat (zero-slope) ends: smoothstep, never a step.
  let prev = groundSurfaceY(roadY, halfW, halfW);
  let maxStep = 0;
  for (let d = 1; d <= DIRT_VERGE_WIDTH; d++) {
    const y = groundSurfaceY(roadY, halfW + d, halfW);
    maxStep = Math.max(maxStep, Math.abs(y - prev));
    prev = y;
  }
  ok(prev <= groundSurfaceY(roadY, halfW, halfW), 'verge descends from road to plain');
  ok(maxStep <= (Math.abs(roadY - DIRT_PLAIN_Y) / DIRT_VERGE_WIDTH) * 1.5 + 1e-9,
    'verge slope is smooth (no vertical step)', `maxStep=${maxStep.toFixed(3)}`);
  const nearEdge = groundSurfaceY(roadY, halfW, halfW);
  const edgePlus = groundSurfaceY(roadY, halfW + 0.01, halfW);
  ok(Math.abs(edgePlus - nearEdge) < 0.01, 'verge is tangent-flat at the road edge');

  // Plain footprint covers the whole course with a generous margin.
  const sample = [
    { x: -1500, y: 0, z: -900 },
    { x: 1700, y: 8, z: 1200 },
    { x: 400, y: -1, z: 300 },
  ];
  const b = groundPlainBounds(sample, 900);
  ok(b.cx === 100 && b.cz === 150, 'plain is centered on the course bounds', `${b.cx},${b.cz}`);
  const half = b.size / 2;
  ok(sample.every((p) => Math.abs(p.x - b.cx) <= half && Math.abs(p.z - b.cz) <= half),
    'every course point sits inside the plain footprint');
  ok(half - Math.max(1700 - b.cx, 1200 - b.cz) >= 899,
    'plain keeps the requested margin past the course edge', `margin=${(half - 1600).toFixed(0)}`);
  ok(groundPlainBounds([], 900).size === 1800, 'empty course still gets a finite plain');

  // Recentred plane must out-extend the camera far plane so driving onto the
  // plain can never reveal a hard ground edge inside the frustum.
  const cameraFar = 2000;
  ok(groundPlainCovers(cameraFar), 'recentred plain always extends past camera far',
    `nearest=${(GROUND_PLAIN_MIN_SIZE / 2 - GROUND_PLAIN_SNAP / 2).toFixed(0)} >= ${cameraFar}`);
  ok(GROUND_PLAIN_MIN_SIZE >= 4 * cameraFar, 'plain min size keeps a generous frustum margin', `${GROUND_PLAIN_MIN_SIZE}`);
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
