// barrier-edge.ts — end-to-end: explicit barrier contract + the dirt plain.
// Guarded edges rebound (visible rail spans collide); open edges no longer fall
// into a void — the car is carried onto a wide, drivable dirt verge/plain
// (./surface.ts) and always has supported ground. OOB only arms R RESET far out
// on the plain. Respawn/ghosts/finish/cut contracts hold. Deterministic, node.
declare const process: { exit(c: number): void };
import {
  createSimState, resetRun, simRespawn, simStep, trackFromPoints, wallLimit,
  BACKSTOP_RADIUS, OOB_ARM_MS, OOB_EXTRA_LAT, RESPAWN_PENALTY_MS,
} from '../src/sim.js';
import type { SimState, StepInput, TrackView } from '../src/sim.js';
import { DIRT_PLAIN_Y, DIRT_VERGE_WIDTH, groundSurfaceY } from '../src/surface.js';
import { barrierAt, planBarriers } from '../src/barrier-plan.js';
import type { BarrierPlan } from '../src/barrier-plan.js';
import { planGuardrails, resolveOptions } from '../src/visuals.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

const DT = 1 / 60;
const drive: StepInput = { steer: 0, drift: false };
const HALF = 8;
const LIM = wallLimit(HALF); // 8.225
const PLAIN_LAT = HALF + DIRT_VERGE_WIDTH + 30; // clearly out on the plain

function straight(len = 1200): TrackView {
  const pts: { x: number; y: number; z: number }[] = [];
  for (let z = 0; z <= len; z += 2) pts.push({ x: 0, y: 6, z });
  return trackFromPoints(pts, HALF);
}
// Straight +z track: tangent (0,1), normal (-1,0). Side +1 (lat>0) is -x.
function placeOut(s: SimState, tr: TrackView, z: number, lat: number, vLat: number, vFwd = 40): void {
  const i = Math.round(z / 2);
  s.lastIdx = i;
  s.px = tr.x[i] + tr.nx[i] * lat;
  s.pz = tr.z[i] + tr.nz[i] * lat;
  s.py = groundSurfaceY(tr.y[i], lat, tr.halfW) + 0.2;
  s.vx = tr.nx[i] * vLat + tr.tx[i] * vFwd;
  s.vz = tr.nz[i] * vLat + tr.tz[i] * vFwd;
  s.heading = Math.atan2(s.vx, s.vz); // drive outward, no slide-scrub
  s.vy = 0; s.grounded = true;
  s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading;
}
function latOf(s: SimState, tr: TrackView): number {
  const j = s.lastIdx;
  return (s.px - tr.x[j]) * tr.nx[j] + (s.pz - tr.z[j]) * tr.nz[j];
}
function placeCurveOut(s: SimState, tr: TrackView, idx: number, lat: number, vLat: number, vFwd = 40): void {
  s.lastIdx = idx;
  s.px = tr.x[idx] + tr.nx[idx] * lat;
  s.pz = tr.z[idx] + tr.nz[idx] * lat;
  s.py = groundSurfaceY(tr.y[idx], lat, tr.halfW) + 0.2;
  s.vx = tr.nx[idx] * vLat + tr.tx[idx] * vFwd;
  s.vz = tr.nz[idx] * vLat + tr.tz[idx] * vFwd;
  s.heading = Math.atan2(s.vx, s.vz);
  s.vy = 0; s.grounded = true;
  s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading;
}

// 1. Guarded-edge rebound (side +1).
{
  const tr = straight();
  tr.barrier = { spans: [{ aS: 100, bS: 300, side: 1 }], length: tr.cum[tr.cum.length - 1] };
  const s = createSimState();
  resetRun(s, tr, 0);
  placeOut(s, tr, 200, LIM - 0.5, 30); // 30 u/s into the rail
  const before = Math.hypot(s.vx, s.vz);
  const info = simStep(s, tr, drive, DT);
  ok(info.wallHit === true, 'guarded edge fires wallHit');
  ok((info.wallSev ?? 0) > 0, 'guarded edge severity tagged', `sev=${info.wallSev}`);
  const lat = latOf(s, tr);
  ok(Math.abs(lat) <= LIM + 1e-9, 'guarded edge clamps to rail', `lat=${lat.toFixed(3)}`);
  const after = Math.hypot(s.vx, s.vz);
  const loss = 1 - after / before;
  ok(loss >= 0.35 && loss <= 0.65, 'guarded impact costs speed', `loss=${(loss * 100).toFixed(1)}%`);
  const outV = s.vx * tr.nx[s.lastIdx] + s.vz * tr.nz[s.lastIdx];
  ok(outV < 0, 'guarded edge rebounds inward', `outV=${outV.toFixed(2)}`);
  ok(info.wallHit !== undefined && info.oobMs === 0, 'no OOB on clean rail hit');
  const f0 = info.fSpeed;
  let f1 = f0;
  for (let k = 0; k < 60; k++) f1 = simStep(s, tr, { steer: -1, drift: false }, DT).fSpeed;
  ok(f1 > f0 + 5, 'exit acceleration resumes after rebound', `${f0.toFixed(1)} -> ${f1.toFixed(1)}`);
  console.log(`[measure] guarded entry loss=${(loss * 100).toFixed(1)}% exit ${f0.toFixed(1)} -> ${f1.toFixed(1)}u/s`);
}

// 2. Open edge: no clamp, no wallHit, carried onto the dirt plain (no void).
{
  const tr = straight();
  tr.barrier = { spans: [], length: tr.cum[tr.cum.length - 1] }; // loaded but empty: open everywhere
  const s = createSimState();
  resetRun(s, tr, 0);
  placeOut(s, tr, 200, LIM - 0.5, 30);
  let hit = false, maxLat = 0, airSteps = 0;
  let info = simStep(s, tr, drive, DT);
  for (let k = 0; k < 300 && !info.finished; k++) {
    if (info.wallHit) hit = true;
    if (!s.grounded) airSteps++;
    maxLat = Math.max(maxLat, Math.abs(latOf(s, tr)));
    info = simStep(s, tr, drive, DT);
  }
  ok(!hit, 'open edge never fires wallHit');
  ok(maxLat > LIM + 20, 'open edge leaves the road into the plain', `lat=${maxLat.toFixed(1)}`);
  ok(s.grounded && airSteps === 0, 'dirt plain supports the car (no bottomless fall)', `air=${airSteps}`);
  const lat = latOf(s, tr);
  const surf = groundSurfaceY(tr.y[s.lastIdx], lat, tr.halfW);
  ok(Math.abs(surf - DIRT_PLAIN_Y) < 1e-9, 'far off course rests on the flat plain', `surf=${surf}`);
  ok(Math.abs(s.py - (surf + 0.2)) < 1e-6, 'car sits on the rendered surface', `py=${s.py.toFixed(2)}`);
  console.log(`[measure] open-edge maxLat=${maxLat.toFixed(1)} grounded=${s.grounded} py=${s.py.toFixed(2)}`);
}

// 3. Both sides: guarded +1 collides, open -1 stays on the dirt (then flipped).
{
  for (const flip of [false, true]) {
    const tr = straight();
    const guardedSide = flip ? -1 : 1;
    tr.barrier = { spans: [{ aS: 100, bS: 300, side: guardedSide as 1 | -1 }], length: tr.cum[tr.cum.length - 1] };
    const s = createSimState();
    resetRun(s, tr, 0);
    placeOut(s, tr, 200, guardedSide * (LIM - 0.5), guardedSide * 25);
    let gHit = false;
    for (let k = 0; k < 8 && !gHit; k++) { if (simStep(s, tr, drive, DT).wallHit) gHit = true; }
    ok(gHit, `side ${guardedSide} guarded collides (flip=${flip})`);
    placeOut(s, tr, 200, -guardedSide * (LIM - 0.5), -guardedSide * 25);
    let hit = false;
    let info = simStep(s, tr, drive, DT);
    for (let k = 0; k < 120; k++) {
      if (info.wallHit) hit = true;
      info = simStep(s, tr, drive, DT);
    }
    ok(!hit && s.grounded, `side ${-guardedSide} open stays on dirt (flip=${flip})`);
  }
}

// 4. Curved track: outside of the hairpin guards, inside is open dirt.
{
  const pts: { x: number; y: number; z: number }[] = [];
  let x = 0, z = 0, hd = 0;
  pts.push({ x, y: 6, z });
  for (let k = 0; k < 150; k++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
  const cs = pts.length;
  let d = 0;
  while (d < Math.PI - 1e-9) {
    const dp = Math.min(2 / 45, Math.PI - d);
    hd -= dp; x += Math.sin(hd) * (45 * dp); z += Math.cos(hd) * (45 * dp); d += dp;
    pts.push({ x, y: 6, z });
  }
  for (let k = 0; k < 140; k++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
  const tr = trackFromPoints(pts, HALF);
  const L = tr.cum[tr.cum.length - 1];
  tr.barrier = planBarriers(L, [{ startS: tr.cum[cs], endS: tr.cum[tr.cum.length - 1] - 280, dir: 'R', medR: 45 }], []);
  const mid = Math.floor((cs + pts.length - 140) / 2);
  const sAt = tr.cum[mid];
  ok(barrierAt(tr.barrier, sAt, -1) && !barrierAt(tr.barrier, sAt, 1), 'hairpin outside guarded, inside open', `s=${sAt.toFixed(0)}`);
  const s = createSimState();
  resetRun(s, tr, 0);
  placeCurveOut(s, tr, mid, -(LIM - 0.5), -25);
  let gHit = false;
  for (let k = 0; k < 8 && !gHit; k++) { if (simStep(s, tr, drive, DT).wallHit) gHit = true; }
  ok(gHit, 'curved outside rebounds');
  placeCurveOut(s, tr, mid, LIM - 0.5, 25);
  let hit = false;
  let info = simStep(s, tr, drive, DT);
  for (let k = 0; k < 120; k++) {
    if (info.wallHit) hit = true;
    info = simStep(s, tr, drive, DT);
  }
  ok(!hit && s.grounded, 'curved inside stays on dirt');
}

// 5. Visual/physics mask identity: rails render exactly where sim collides.
{
  const tr = straight(2200);
  const L = tr.cum[tr.cum.length - 1];
  const plan: BarrierPlan = planBarriers(L, [
    { startS: 500, endS: 600, dir: 'L', medR: 43 },
    { startS: 1300, endS: 1450, dir: 'R', medR: 110 },
  ], [950]);
  tr.barrier = plan;
  const o = resolveOptions({ barriers: plan });
  const g = planGuardrails(tr.cum, o);
  ok(g.idx.length > 0, 'span rails placed', `n=${g.idx.length}`);
  let allGuarded = true;
  for (let k = 0; k < g.idx.length; k++) {
    if (!barrierAt(plan, tr.cum[g.idx[k]], g.side[k] as 1 | -1)) { allGuarded = false; break; }
  }
  ok(allGuarded, 'every rendered rail collides (mask identity)');
  let bridged = true;
  for (const sd of [1, -1]) {
    const st: number[] = [];
    for (let k = 0; k < g.idx.length; k++) if (g.side[k] === sd) st.push(g.idx[k]);
    for (let k = 0; k + 1 < st.length; k++) {
      if (tr.cum[st[k + 1]] - tr.cum[st[k]] > o.guardSpacing * 1.6) { bridged = false; break; }
    }
  }
  ok(bridged, 'no rail segment bridges an open gap');
  const legacy = planGuardrails(tr.cum, resolveOptions({}));
  ok(legacy.idx.length > g.idx.length, 'span plan trims rails vs legacy', `${legacy.idx.length} -> ${g.idx.length}`);
  console.log(`[measure] rails legacy=${legacy.idx.length} span=${g.idx.length} spans=${plan.spans.length}`);
}

// 6. Ground is supported at every lateral distance; the verge blends from the
// road edge down to the plain.
{
  const tr = straight();
  tr.barrier = { spans: [], length: tr.cum[tr.cum.length - 1] };
  const s = createSimState();
  resetRun(s, tr, 0);
  placeOut(s, tr, 200, HALF + 2, 0, 40); // on the verge
  const info = simStep(s, tr, drive, DT);
  ok(s.grounded && info.offroad, 'verge is offroad and supported');
  const surf = groundSurfaceY(tr.y[s.lastIdx], latOf(s, tr), HALF);
  ok(surf < tr.y[s.lastIdx] && surf > DIRT_PLAIN_Y, 'verge sits between road and plain', `surf=${surf.toFixed(2)}`);
  ok(Math.abs(s.py - (surf + 0.2)) < 1e-6, 'verge snaps to the blended surface', `py=${s.py.toFixed(2)}`);
  placeOut(s, tr, 200, PLAIN_LAT, 0, 40); // far out on the plain
  simStep(s, tr, drive, DT);
  ok(s.grounded && Math.abs(s.py - (DIRT_PLAIN_Y + 0.2)) < 1e-6, 'plain supports the car at plain height', `py=${s.py.toFixed(2)}`);
}

// 7. Respawn after going OOB on the plain: snapshot + exact 3s gap, OOB cleared.
{
  const tr = straight();
  tr.barrier = { spans: [], length: tr.cum[tr.cum.length - 1] };
  const s = createSimState();
  resetRun(s, tr, 0);
  for (let k = 0; k < 120; k++) simStep(s, tr, drive, DT); // clean running builds snapshot
  placeOut(s, tr, 300, HALF + OOB_EXTRA_LAT + 5, 20, 40);
  let info = simStep(s, tr, drive, DT);
  for (let k = 0; k < 300 && info.oobMs <= OOB_ARM_MS; k++) info = simStep(s, tr, drive, DT);
  ok(info.oobMs > 0, 'OOB latched far out on the plain');
  const nRec = s.rec.p.length;
  const msBefore = s.raceMs;
  simRespawn(s);
  ok(s.grounded && s.oobMs === 0, 'respawn clears OOB, grounded on snapshot');
  ok(Math.abs(s.raceMs - (msBefore + RESPAWN_PENALTY_MS)) < 1e-9, 'respawn adds the exact 3s gap');
  ok(s.rec.p.length === nRec, 'ghost recording untouched by respawn teleport');
  let ordered = true;
  for (let k = 1; k < s.rec.ts.length; k++) if (!(s.rec.ts[k] > s.rec.ts[k - 1])) { ordered = false; break; }
  ok(ordered, 'ghost timestamps strictly increasing through the excursion');
}

// 8. Finish/cut regression: off-course wandering cannot finish; legit runs can.
{
  const tr = straight(400);
  tr.barrier = { spans: [], length: tr.cum[tr.cum.length - 1] };
  const s = createSimState();
  resetRun(s, tr, 0);
  const e = tr.n - 1;
  s.lastIdx = 0;
  s.px = tr.x[e] + 60; s.pz = tr.z[e] + 5; s.py = tr.y[e] + 0.2;
  s.vx = 0; s.vz = 40; s.vy = 0; s.grounded = true;
  s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading;
  let fin = false;
  for (let k = 0; k < 120; k++) { if (simStep(s, tr, drive, DT).finished) { fin = true; break; } }
  ok(!fin && !s.finished, 'off-course wandering cannot finish');
  ok(s.lastIdx < tr.n - 60, 'progress frozen off course', `lastIdx=${s.lastIdx}`);
  const s2 = createSimState();
  resetRun(s2, tr, 0);
  let nFin = 0;
  for (let k = 0; k < 3000 && nFin === 0; k++) { if (simStep(s2, tr, drive, DT).finished) nFin = s2.finishCount; }
  ok(nFin === 1, 'legit open-edge run finishes exactly once');
}

// 9. OOB timing + decay far out on the plain.
{
  const tr = straight();
  tr.barrier = { spans: [], length: tr.cum[tr.cum.length - 1] };
  const s = createSimState();
  resetRun(s, tr, 0);
  placeOut(s, tr, 200, HALF + OOB_EXTRA_LAT + 1, 15, 30);
  let armAt = -1;
  for (let k = 0; k < 400; k++) {
    const info = simStep(s, tr, drive, DT);
    if (info.oobMs > OOB_ARM_MS) { armAt = (k + 1) * DT; break; }
  }
  ok(armAt > 0.3 && armAt < 2.0, 'OOB arms after a short interval on the plain', `armAt=${armAt?.toFixed(2)}s`);
  simRespawn(s);
  const info = simStep(s, tr, drive, DT);
  ok(info.oobMs === 0, 'OOB decays on clean road');
}

// 10. Start-backstop proximity gate: loop-back sections far from the start
// that cross the start plane must not trigger the backstop; genuine start-line
// reversals within metres of the start are still blocked.
{
  const tr = straight(1200);
  tr.barrier = { spans: [], length: tr.cum[tr.cum.length - 1] };
  const s = createSimState();
  resetRun(s, tr, 0);
  s.lastIdx = 300;
  s.px = 300; s.pz = -5; s.py = tr.y[300] + 0.2;
  s.vx = 0; s.vz = -70; s.vy = 0; s.grounded = true;
  s.heading = Math.PI;
  s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading;
  const relFar = (s.px - tr.x[0]) * tr.tx[0] + (s.pz - tr.z[0]) * tr.tz[0];
  ok(relFar < -3, 'far probe is behind the start plane', `rel=${relFar.toFixed(1)}`);
  const info = simStep(s, tr, drive, DT);
  ok(!info.finished, 'far probe takes a normal step');
  ok(s.vz < -60, 'far loop-back keeps backward velocity', `vz=${s.vz.toFixed(1)}`);
  const s2 = createSimState();
  resetRun(s2, tr, 0);
  s2.px = tr.x[0]; s2.pz = tr.z[0] - 5; s2.py = tr.y[0] + 0.2;
  s2.vx = 0; s2.vz = -10; s2.vy = 0; s2.grounded = true;
  s2.heading = Math.PI;
  s2.px0 = s2.px; s2.py0 = s2.py; s2.pz0 = s2.pz; s2.h0 = s2.heading;
  const d2 = Math.hypot(s2.px - tr.x[0], s2.pz - tr.z[0]);
  ok(d2 < BACKSTOP_RADIUS, 'near probe is inside the backstop radius', `d=${d2.toFixed(1)}`);
  simStep(s2, tr, drive, DT);
  const rel2 = (s2.px - tr.x[0]) * tr.tx[0] + (s2.pz - tr.z[0]) * tr.tz[0];
  ok(rel2 >= -3 - 1e-9, 'start-line reversal pushed back', `rel=${rel2.toFixed(2)}`);
  ok(s2.vz >= 0, 'start-line backward speed killed', `vz=${s2.vz.toFixed(1)}`);
}

// 11. Rail span starts are not invisible walls: the clamp guard must be
// evaluated at the car course position, not at lastIdx.
{
  const tr = straight();
  tr.barrier = { spans: [{ aS: 200, bS: 400, side: 1 }], length: tr.cum[tr.cum.length - 1] };
  const s = createSimState();
  resetRun(s, tr, 0);
  placeOut(s, tr, 190, LIM - 0.3, 2, 40);
  let hit = false;
  for (let k = 0; k < 6; k++) { if (simStep(s, tr, drive, DT).wallHit) hit = true; }
  ok(!hit, 'span start is not an early invisible wall');
  placeOut(s, tr, 250, LIM - 0.5, 30);
  let gHit = false;
  for (let k = 0; k < 8 && !gHit; k++) { if (simStep(s, tr, drive, DT).wallHit) gHit = true; }
  ok(gHit, 'span interior still collides');
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
