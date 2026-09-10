// Headless budget tests for src/visuals.ts + src/environment.ts. Runs under
// plain node (no deps: neither module has a runtime three import; constructor
// kits are injected). Also enrolled in tsconfig.tests.json; during parallel
// worker activity verify via a /tmp compile instead of the shared build.
declare const process: { exit(c: number): void };
import {
  BUDGET, DustRing, GUARD_TOP_ABOVE_ROAD, countInstances, estimateDrawCalls,
  estimateTriangles, indexAtS, planChevrons, planGuardrails, planSpeedTicks,
  resolveOptions, withinBudget,
} from '../src/visuals.js';
import type { CornerEventLike, TrackData, Vec3Like } from '../src/visuals.js';

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

// 1. Nominal daily-length track fits the budget on desktop + mobile.
{
  const t = straightTrack(2252);
  const ev = demoEvents();
  const c = countInstances(t.cum, ev, resolveOptions({}));
  ok(withinBudget(c), 'desktop counts within budget', JSON.stringify(c));
  ok(estimateDrawCalls(c) <= 4, 'at most 4 new draw calls', `draws=${estimateDrawCalls(c)}`);
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
  const rCorner = ch.filter((c) => c.s > 400 && c.s < 560);
  ok(rCorner.every((c) => c.side === -1), 'R-corner boards on outside (-1)');
  ok(rCorner.some((c) => c.severe), 'drift corner flagged severe');
  const sweeper = ch.filter((c) => c.s < 200);
  ok(sweeper.every((c) => !c.severe), 'sweeper flagged non-severe');
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
  ok(c.guardrails <= BUDGET.MAX_GUARDRAILS, 'guardrails capped', `n=${c.guardrails}`);
  ok(c.ticks <= BUDGET.MAX_TICKS, 'ticks capped', `n=${c.ticks}`);
  ok(c.dust <= BUDGET.MAX_DUST, 'dust capped', `n=${c.dust}`);
  ok(withinBudget(c), 'capped counts within budget');
  ok(!withinBudget({ ...c, guardrails: 9999 }), 'over-budget detected');
}

// 5. Degenerate input yields zero-cost visuals.
{
  const o = resolveOptions({});
  const c = countInstances([0], [], o);
  ok(c.guardrails === 0 && c.chevrons === 0 && c.ticks === 0, 'empty track, no instances');
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



// ---------- Cycle 2: environment + sightlines ----------

import {
  ENV_BUDGET, FAR_GEOMETRY_KIND, FAR_TRIS, FLAT_SHADED, HAZE_COLOR, PIER_TINT, SIGHTLINE,
  WALL_GEOMETRY_KIND, WALL_TRIS,
  countEnvInstances, estimateEnvDrawCalls, estimateEnvTriangles,
  envWithinBudget, gorgeModeAt, isGatePier, hash01, planArches, planMesas, planScrub, planWalls,
  resolveEnvOptions, ridgeBlockMean, strataColor,
} from '../src/environment.js';

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
  ok(total > 300 && total <= ENV_BUDGET.MAX_WALLS, 'wall volume in budget', `n=${total}`);
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
  ok(mesas.length === 20, 'mid + horizon + spire + gate-pier set', `n=${mesas.length}`);
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
  ok(draws <= 9, 'combined new draw calls bounded', `draws=${draws}`);
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
  ok(ratio >= 0.2 && ratio <= 0.5, 'open-vista share breathes, never a corridor', `vista=${ratio.toFixed(2)}`);
  ok(modes.includes('cut'), 'enclosed cuts still exist');
  ok(gorgeModeAt(7) === gorgeModeAt(7) && gorgeModeAt(199) === gorgeModeAt(199), 'gorge rhythm deterministic');
  // Block granularity: mode is constant within a 3-station block.
  let blocky = true;
  for (let b = 0; b < 60; b++) {
    const m = gorgeModeAt(b * 3);
    if (gorgeModeAt(b * 3 + 1) !== m || gorgeModeAt(b * 3 + 2) !== m) { blocky = false; break; }
  }
  ok(blocky, 'vista/cut alternate in coherent stretches');
  // Vista cliffs sit in the midground; cuts hug the road.
  const t = straightTrack(2252);
  const w = planWalls(t.cum, demoEvents(), resolveEnvOptions({}));
  const vistaWalls = w.near.filter((s) => s.lateral >= 48);
  const cutWalls = w.near.filter((s) => s.lateral < 48);
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
  ok(draws <= 9 && tris <= 40000, 'combined envelope holds', `draws=${draws} tris=${tris}`);
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
  ok(worst <= 4, 'both-sides runs bounded (~56u max)', `worst=${worst} stations`);
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

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
