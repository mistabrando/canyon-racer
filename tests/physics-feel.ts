// Physics-feel acceptance: deliberate drift timing beats continuous drifting,
// over-rotation is possible but recoverable, countersteer/exit grip feel
// skillful, and cuts/walls/offroad mistakes stay costly without trapping.
// Standalone under plain node (no deps): compile sim.ts + this file to /tmp,
// e.g. npx tsc src/sim.ts tests/physics-feel.ts --target es2020 --module
// nodenext --moduleResolution nodenext --strict --skipLibCheck --outDir /tmp/feel
// then node /tmp/feel/tests/physics-feel.js. Never run via shared build dirs.
// All scenarios use synthetic tracks only (immune to daily-generator churn).
declare const process: { exit(c: number): void };
import {
  DT, clamp, wrapPi, trackFromPoints, createSimState, resetRun, simStep,
  TrackView, SimState, StepInput, MAX_GRIP_SPEED, wallLimit,
  RAIL_OFFSET, RAIL_HALF_DEPTH, CAR_RADIUS,
  DRIFT_FATIGUE_GRACE, DRIFT_FATIGUE_GAIN, DRIFT_FATIGUE_MAX,
  REAR_LOOSEN_GAIN, REAR_LOOSEN_MAX, COUNTER_GRIP_BOOST,
  SCRUB_COUNTER_RELIEF, EXIT_BOOST_ACCEL, EXIT_BOOST_TIME, EXIT_SLIP_MAX,
WALL_MARGIN } from '../src/sim.js';
import { acceptDailyTrack, TRACK_HALF_W } from '../src/trackgen.js';
void RAIL_OFFSET; void RAIL_HALF_DEPTH; void CAR_RADIUS; void WALL_MARGIN;

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}${detail ? ' ' + detail : ''}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}
const drive: StepInput = { steer: 0, drift: false };
void DRIFT_FATIGUE_GRACE; void DRIFT_FATIGUE_GAIN; void DRIFT_FATIGUE_MAX;
void REAR_LOOSEN_GAIN; void REAR_LOOSEN_MAX; void COUNTER_GRIP_BOOST;
void SCRUB_COUNTER_RELIEF; void EXIT_BOOST_ACCEL; void EXIT_BOOST_TIME; void EXIT_SLIP_MAX;

function flatTrack(): TrackView {
  const pts: { x: number; y: number; z: number }[] = [];
  for (let z = 0; z <= 1200; z += 2) pts.push({ x: 0, y: 6, z });
  return trackFromPoints(pts, 8);
}
function wideTrack(halfW: number, len = 6000): TrackView {
  const pts: { x: number; y: number; z: number }[] = [];
  for (let z = 0; z <= len; z += 2) pts.push({ x: 0, y: 6, z });
  return trackFromPoints(pts, halfW);
}
function crestTrack(): TrackView {
  const pts: { x: number; y: number; z: number }[] = [];
  for (let z = 0; z <= 800; z += 2) {
    pts.push({ x: 0, y: 6 + 6 * Math.exp(-(((z - 300) / 18) ** 2)), z });
  }
  return trackFromPoints(pts, 8);
}
// Synthetic 180-deg R45 hairpin with a safe exit (never revisits the start
// plane, so the start backstop cannot trigger). Corner stations [cs, ce].
function hairpin180(R = 45): { tr: TrackView; cs: number; ce: number } {
  const pts: { x: number; y: number; z: number }[] = [];
  let x = 0, z = 0, hd = 0;
  pts.push({ x, y: 6, z });
  for (let i = 0; i < 150; i++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
  const cs = pts.length;
  let d = 0;
  const tot = Math.PI;
  while (d < tot - 1e-9) {
    const dp = Math.min(2 / R, tot - d);
    hd -= dp; x += Math.sin(hd) * (R * dp); z += Math.cos(hd) * (R * dp); d += dp;
    pts.push({ x, y: 6, z });
  }
  const ce = pts.length;
  for (let i = 0; i < 140; i++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
  return { tr: trackFromPoints(pts, 8), cs, ce };
}
const settle = (tr: TrackView, s: SimState, secs: number, inp: StepInput) => {
  for (let k = 0; k < secs / DT && !s.finished; k++) simStep(s, tr, inp, DT);
};

// E1. Launch + top speed stay in the verified band.
{
  const tr = wideTrack(8);
  const s = createSimState();
  resetRun(s, tr, 0);
  let t70 = -1, top = 0;
  for (let k = 0; k < 14 / DT && !s.finished; k++) {
    const info = simStep(s, tr, drive, DT);
    if (t70 < 0 && info.spd >= 70) t70 = s.raceMs / 1000;
    top = Math.max(top, info.spd);
  }
  ok(t70 > 0.6 && t70 < 1.0, 'E1 grip reaches 70 in 0.6-1.0s', `t=${t70.toFixed(2)}s`);
  ok(top >= 78 && top <= 82, 'E1 grip top 78-82', `top=${top.toFixed(1)}`);
}

// E2. Controlled drift radius/slip stay in the verified band.
{
  const tr = wideTrack(400);
  const s = createSimState();
  resetRun(s, tr, 0);
  settle(tr, s, 6, drive);
  settle(tr, s, 4, { steer: 1, drift: true });
  let wSum = 0, vSum = 0, slipSum = 0, n = 0;
  for (let k = 0; k < 4 / DT && !s.finished; k++) {
    const info = simStep(s, tr, { steer: 1, drift: true }, DT);
    wSum += Math.abs(info.yawRate); vSum += info.spd; slipSum += Math.abs(info.slip); n++;
  }
  const r = (vSum / n) / (wSum / n), slipDeg = (slipSum / n) * 180 / Math.PI;
  ok(r > 35 && r < 55, 'E2 drift radius 35-55', `r=${r.toFixed(1)}`);
  ok(slipDeg > 12 && slipDeg < 28, 'E2 drift slip 12-28deg', `slip=${slipDeg.toFixed(1)}`);
}

// E3. Drift top speed never a boost.
{
  const tr = wideTrack(400);
  const d = createSimState();
  resetRun(d, tr, 0);
  let driftTop = 0;
  for (let k = 0; k < 10 / DT && !d.finished; k++) {
    const i = simStep(d, tr, { steer: 0.2, drift: true }, DT);
    if (k * DT > 5) driftTop = Math.max(driftTop, i.spd);
  }
  ok(driftTop >= 72 && driftTop <= 76 && driftTop < MAX_GRIP_SPEED, 'E3 drift top 72-76', `top=${driftTop.toFixed(1)}`);
}

// E4. Moderate lock holds grip; forced 45deg still collapses.
{
  const tr = wideTrack(400);
  const g = createSimState();
  resetRun(g, tr, 0);
  settle(tr, g, 8, drive);
  let held = true;
  for (let k = 0; k < 6 / DT && !g.finished; k++) {
    if (simStep(g, tr, { steer: 0.5, drift: false }, DT).drifting) held = false;
  }
  ok(held, 'E4 moderate lock holds grip');
  const mk = () => { const t2 = wideTrack(400); const q = createSimState(); resetRun(q, t2, 0); settle(t2, q, 6, drive); return { t2, q }; };
  const a = mk();
  for (let k = 0; k < 1 / DT; k++) simStep(a.q, a.t2, drive, DT);
  const vA = Math.hypot(a.q.vx, a.q.vz);
  const b = mk();
  for (let k = 0; k < 1 / DT; k++) {
    const sp = Math.hypot(b.q.vx, b.q.vz);
    const h = b.q.heading + Math.PI / 4;
    b.q.vx = Math.sin(h) * sp; b.q.vz = Math.cos(h) * sp;
    simStep(b.q, b.t2, drive, DT);
  }
  const vB = Math.hypot(b.q.vx, b.q.vz);
  ok(vA > 75 && vB < 30, 'E4 forced 45deg collapses', `${vA.toFixed(0)}->${vB.toFixed(0)}`);
}

// E5. Countersteer recovers faster than holding; speed rebuilds.
{
  const mk = () => { const tr = wideTrack(400); const s = createSimState(); resetRun(s, tr, 0); settle(tr, s, 6, drive); settle(tr, s, 3, { steer: 0.6, drift: true }); return { tr, s }; };
  const a = mk(); let tA = -1;
  for (let k = 0; k < 2 / DT; k++) { const i = simStep(a.s, a.tr, { steer: 0.6, drift: false }, DT); if (tA < 0 && Math.abs(i.slip) < 5 * Math.PI / 180) tA = k * DT; }
  const b = mk(); let tB = -1;
  for (let k = 0; k < 2 / DT; k++) { const i = simStep(b.s, b.tr, { steer: -0.6, drift: false }, DT); if (tB < 0 && Math.abs(i.slip) < 5 * Math.PI / 180) tB = k * DT; }
  ok(tA > 0 && tA < 1.5, 'E5 grip recovers after release', `t=${tA.toFixed(2)}s`);
  ok(tB > 0 && tB < tA, 'E5 countersteer stabilizes faster', `${tB.toFixed(2)}s < ${tA.toFixed(2)}s`);
  const c = mk(); const vRel = Math.hypot(c.s.vx, c.s.vz);
  settle(c.tr, c.s, 3, drive);
  ok(Math.hypot(c.s.vx, c.s.vz) > vRel + 5, 'E5 speed rebuilds after release');
}

// E6. Walls punish (bouncy contract): hits cost, leaning rattles at punished
// pace and barely advances, head-on pins die, escape works, no traps.
{
  const tr = flatTrack();
  const hitAt = (ang: number): { loss: number; impact: number; scraping: boolean } => {
    const t2 = flatTrack(); const s = createSimState(); resetRun(s, t2, 0);
    settle(t2, s, 2, drive);
    s.heading += ang;
    const sp = Math.hypot(s.vx, s.vz);
    s.vx = Math.sin(s.heading) * sp; s.vz = Math.cos(s.heading) * sp;
    let pre = sp;
    for (let k = 0; k < 3 / DT && !s.finished; k++) {
      const i = simStep(s, t2, drive, DT);
      if (i.scraping) return { loss: 1 - i.spd / pre, impact: i.impact, scraping: true };
      pre = i.spd;
    }
    return { loss: 0, impact: 0, scraping: false };
  };
  const hit = hitAt(0.35);
  ok(hit.scraping && hit.impact > 0, 'E6 impact exposes impact/scrape state');
  ok(hit.loss >= 0.50 && hit.loss <= 0.70, 'E6 solid wall hit costs 50-70%', `loss=${(hit.loss * 100).toFixed(1)}%`);
  const g = createSimState();
  resetRun(g, tr, 0);
  settle(tr, g, 2, drive);
  g.heading += 0.35;
  const sp = Math.hypot(g.vx, g.vz);
  g.vx = Math.sin(g.heading) * sp; g.vz = Math.cos(g.heading) * sp;
  while (!g.finished) { if (simStep(g, tr, drive, DT).scraping) break; }
  const v0 = Math.hypot(g.vx, g.vz);
  const g0 = g.lastIdx;
  let gSum = 0, gN = 0;
  for (let k = 0; k < 1 / DT && !g.finished; k++) { const r = simStep(g, tr, { steer: 0.6, drift: false }, DT); gSum += r.spd; gN++; }
  const gAvg = gSum / Math.max(gN, 1), gAdv = g.lastIdx - g0;
  ok(gAvg > 15 && gAvg < 55, 'E6 grinding rattles at punished pace', `${v0.toFixed(0)}->avg${gAvg.toFixed(1)}`);
  ok(gAdv < 30, 'E6 grinding barely advances', `adv=${gAdv}`);
  const pin = (): SimState => {
    const q = createSimState();
    resetRun(q, tr, 100);
    q.px = tr.x[100] - 7;
    q.heading = tr.yaw[100] - Math.PI / 2;
    q.vx = Math.sin(q.heading) * 30; q.vz = Math.cos(q.heading) * 30;
    return q;
  };
  let q = pin();
  for (let k = 0; k < 2 / DT; k++) simStep(q, tr, drive, DT);
  ok(Math.hypot(q.vx, q.vz) < 8, 'E6 head-on pin kills momentum', `spd=${Math.hypot(q.vx, q.vz).toFixed(1)}`);
  const lean = createSimState();
  resetRun(lean, tr, 100);
  // Absolute harness-13d mirror: 1.475 deep vs wallLimit(8)=8.225 (measured stuckMs=1800).
  lean.px = tr.x[100] - 9.7; lean.heading = tr.yaw[100] - Math.PI / 2; lean.vx = 0; lean.vz = 0;
  let stuckMax = 0;
  for (let k = 0; k < 2.5 / DT; k++) stuckMax = Math.max(stuckMax, simStep(lean, tr, drive, DT).stuckMs);
  ok(stuckMax > 1500, 'E6 stuck flag when leaning on wall', `stuckMs=${stuckMax.toFixed(0)}`);
  q = pin();
  for (let k = 0; k < 1.5 / DT; k++) simStep(q, tr, drive, DT);
  let t20 = -1;
  for (let k = 0; k < 3 / DT; k++) {
    simStep(q, tr, { steer: 1, drift: false }, DT);
    if (t20 < 0 && Math.hypot(q.vx, q.vz) >= 20) t20 = k * DT;
  }
  const fwd = q.vx * tr.tx[q.lastIdx] + q.vz * tr.tz[q.lastIdx];
  ok(t20 >= 0 && t20 <= 2.5, 'E6 steering away escapes within 2.5s', `t20=${t20 < 0 ? 'never' : t20.toFixed(2)}s`);
  ok(fwd >= 6, 'E6 escape moves forward', `fwd=${fwd.toFixed(1)}`);
  const r2 = createSimState();
  resetRun(r2, tr, 100);
    // Absolute harness-13e mirror: 1.175 deep vs wallLimit(8) (measured avg=26.1 adv=5).
    r2.px = tr.x[100] - 9.4;
  r2.heading = tr.yaw[100];
  r2.vx = Math.sin(r2.heading) * 60; r2.vz = Math.cos(r2.heading) * 60;
  let eSum = 0, eN = 0;
  const e0 = r2.lastIdx;
  for (let k = 0; k < 2 / DT; k++) { const r = simStep(r2, tr, { steer: -1, drift: false }, DT); eSum += r.spd; eN++; }
  const eAvg = eSum / Math.max(eN, 1), eAdv = r2.lastIdx - e0;
  ok(eAvg > 15 && eAvg < 45, 'E6 grinding into wall bounces at punished pace', `avg=${eAvg.toFixed(1)}`);
  ok(eAdv < 20, 'E6 leaning on wall barely advances', `adv=${eAdv}`);
}

// E7. Offroad bites; infield cuts credit nothing.
{
  const tr = flatTrack();
  const s = createSimState(); resetRun(s, tr, 0);
  s.px += tr.nx[0] * (tr.halfW + 3); s.pz += tr.nz[0] * (tr.halfW + 3);
  let offMax = 0;
  for (let k = 0; k < 4 / DT && !s.finished; k++) offMax = Math.max(offMax, simStep(s, tr, drive, DT).spd);
  const c = createSimState(); resetRun(c, tr, 0);
  let roadMax = 0;
  for (let k = 0; k < 4 / DT && !c.finished; k++) roadMax = Math.max(roadMax, simStep(c, tr, drive, DT).spd);
  ok(offMax < 30 && offMax < roadMax * 0.5, 'E7 offroad clearly slower than road', `${offMax.toFixed(0)} vs ${roadMax.toFixed(0)}`);
  const h = hairpin180();
  const cut = createSimState();
  resetRun(cut, h.tr, 100);
  cut.px = h.tr.x[149]; cut.pz = h.tr.z[149]; cut.py = h.tr.y[149] + 0.2;
  const info = simStep(cut, h.tr, drive, DT);
  ok(cut.lastIdx - 100 <= 4, 'E7 cut credits at most margin samples', `adv=${cut.lastIdx - 100}`);
  ok(!info.finished && !cut.finished, 'E7 cut cannot finish');
  for (let k = 0; k < 30; k++) simStep(cut, h.tr, drive, DT);
  ok(cut.lastIdx - 100 <= 4 && !cut.finished, 'E7 parked cutter gains nothing');
}

// F1. Tapped (deliberate) drift beats held (continuous) drift on equal steering.
{
  const dist = (timed: boolean): number => {
    const tr = wideTrack(400); const s = createSimState(); resetRun(s, tr, 0);
    settle(tr, s, 6, drive);
    let d = 0;
    for (let k = 0; k < 6 / DT && !s.finished; k++) {
      const px = s.px, pz = s.pz;
      const drift = timed ? (Math.floor(k / (1 / DT)) % 2 === 0) : true;
      simStep(s, tr, { steer: 0.25, drift }, DT);
      d += Math.hypot(s.px - px, s.pz - pz);
    }
    return d;
  };
  const held = dist(false), tapped = dist(true);
  ok(tapped > held, 'F1 deliberate taps beat continuous drift', `${tapped.toFixed(1)} vs ${held.toFixed(1)} (+${((tapped / held - 1) * 100).toFixed(1)}%)`);
}

// F2. Drift entry timing on a driver-free 90-degree rotation step at pace:
// engaging drift together with full lock rotates the car onto the new heading
// sooner and tighter than delaying it, and far sooner/tighter than grip alone.
// (The old full-run hairpin comparison was retired: at full pace every line
// takes two ~65+ wall slams and the mandatory crash penalty equalizes them,
// so it measured crash recovery rather than entry timing. The wide track here
// keeps every line wall-free, verified below. See docs/agents/walls-cycle2.md.)
{
  const step90 = (delay: number): { t: number; dist: number; vEnd: number; ev: number } => {
    const tr = wideTrack(400);
    const st = createSimState(); resetRun(st, tr, 0);
    settle(tr, st, 6, drive);
    const h0 = st.heading, x0 = st.px, z0 = st.pz;
    let t = -1, dist = 0, vEnd = 0, ev = 0;
    for (let k = 0; k < 8 / DT; k++) {
      const drift = delay >= 0 && k * DT >= delay;
      const info = simStep(st, tr, { steer: 1, drift }, DT);
      if (info.wallHit === true) ev++;
      if (t < 0 && -wrapPi(st.heading - h0) >= Math.PI / 2) {
        t = k * DT; dist = Math.hypot(st.px - x0, st.pz - z0); vEnd = info.spd;
      }
    }
    return { t: t < 0 ? 999 : t, dist, vEnd, ev };
  };
  const imm = step90(0), d04 = step90(0.4), grip = step90(-1);
  console.log(`   [step90 s] imm=${imm.t.toFixed(2)} d04=${d04.t.toFixed(2)} grip=${grip.t.toFixed(2)} dist=${imm.dist.toFixed(0)}/${d04.dist.toFixed(0)}/${grip.dist.toFixed(0)}`);
  ok(imm.ev === 0 && d04.ev === 0 && grip.ev === 0, 'F2 rotation step is wall-free');
  ok(imm.t < d04.t, 'F2 immediate drift rotates sooner than delayed', `${imm.t.toFixed(2)}<${d04.t.toFixed(2)}`);
  ok(d04.t < grip.t, 'F2 delayed drift still beats grip', `${d04.t.toFixed(2)}<${grip.t.toFixed(2)}`);
  ok(imm.dist < d04.dist, 'F2 immediate drift turns tighter than delayed', `${imm.dist.toFixed(0)}<${d04.dist.toFixed(0)}`);
  ok(d04.dist < grip.dist, 'F2 delayed drift turns tighter than grip', `${d04.dist.toFixed(0)}<${grip.dist.toFixed(0)}`);
}

// F3. Clean exits earn exit grip; messy exits earn nothing; speed rebuilds.
{
  const tr = wideTrack(400);
  const s = createSimState(); resetRun(s, tr, 0);
  settle(tr, s, 6, drive);
  settle(tr, s, 1.5, { steer: 0.6, drift: true });
  ok(s.driftHold > 0.25, 'F3 sustained drift clocks hold time', `hold=${s.driftHold.toFixed(2)}s`);
  let steps = 0;
  for (; steps < 2 / DT; steps++) {
    simStep(s, tr, { steer: -0.6, drift: false }, DT);
    if (s.driftAmt <= 0.4) break;
  }
  ok(steps <= 30, 'F3 counter unwinds quickly', `steps=${steps}`);
  ok(s.exitT > 0.5, 'F3 clean exit earns exit grip', `exitT=${s.exitT.toFixed(2)}s`);
  const v0 = Math.hypot(s.vx, s.vz);
  settle(tr, s, 1, drive);
  ok(Math.hypot(s.vx, s.vz) >= 78, 'F3 exit speed rebuilds to pace', `${v0.toFixed(1)}->${Math.hypot(s.vx, s.vz).toFixed(1)}`);
  const m = createSimState(); resetRun(m, tr, 0);
  settle(tr, m, 6, drive);
  settle(tr, m, 1.5, { steer: 1, drift: true });
  const sp = Math.hypot(m.vx, m.vz);
  const hh = m.heading + 0.8;
  m.vx = Math.sin(hh) * sp; m.vz = Math.cos(hh) * sp;
  for (let k = 0; k < 0.5 / DT; k++) simStep(m, tr, { steer: 0, drift: false }, DT);
  ok(m.exitT === 0, 'F3 messy exit earns no exit grip');
}

// F4. Over-rotation is possible (crossed landing spins out) but recoverable.
{
  const tr = crestTrack();
  const run = (airSteer: number): { peak: number; v2s: number } => {
    const s = createSimState();
    resetRun(s, tr, 0);
    let peak = 0;
    for (let k = 0; k < 3000; k++) {
      const info = simStep(s, tr, s.grounded ? drive : { steer: airSteer, drift: false }, DT);
      if (!s.grounded) peak = Math.max(peak, Math.abs(info.slip));
      if (info.landed) {
        let v = info.spd;
        for (let q = 0; q < 120; q++) v = simStep(s, tr, drive, DT).spd;
        return { peak: peak * 180 / Math.PI, v2s: v };
      }
    }
    return { peak: peak * 180 / Math.PI, v2s: -1 };
  };
  const clean = run(0), crossed = run(1);
  ok(clean.v2s >= 75, 'F4 clean landing keeps speed', `v=${clean.v2s.toFixed(1)}`);
  ok(crossed.peak > 30 && crossed.v2s < 40, 'F4 crossed landing spins out', `peak=${crossed.peak.toFixed(0)}deg v=${crossed.v2s.toFixed(1)}`);
  const w = wideTrack(400);
  const s = createSimState(); resetRun(s, w, 0);
  settle(w, s, 6, drive);
  settle(w, s, 2, { steer: 1, drift: true });
  let tB = -1;
  for (let k = 0; k < 2 / DT; k++) {
    const i = simStep(s, w, { steer: -1, drift: false }, DT);
    if (tB < 0 && Math.abs(i.slip) < 5 * Math.PI / 180) tB = k * DT;
  }
  ok(tB > 0 && tB < 1.5, 'F4 deep slide recovers via countersteer', `t=${tB.toFixed(2)}s`);
  settle(w, s, 1, drive);
  ok(Math.hypot(s.vx, s.vz) > 70, 'F4 recovery rebuilds pace', `v=${Math.hypot(s.vx, s.vz).toFixed(1)}`);
}

// F5. Determinism: identical traces across runs, including new feel state.
{
  const trace = (): string => {
    const h = hairpin180();
    const s = createSimState(); resetRun(s, h.tr, 0);
    const out: string[] = [];
    for (let k = 0; k < 900 && !s.finished; k++) {
      const spd = Math.hypot(s.vx, s.vz);
      const L = 12 + spd * 0.5;
      let li = s.lastIdx, acc = 0;
      while (li < h.tr.n - 1 && acc < L) { acc += Math.hypot(h.tr.x[li + 1] - h.tr.x[li], h.tr.z[li + 1] - h.tr.z[li]); li++; }
      const des = Math.atan2(h.tr.x[li] - s.px, h.tr.z[li] - s.pz);
      const st = clamp(-wrapPi(des - s.heading) * 1.4, -1, 1);
      simStep(s, h.tr, { steer: st, drift: s.lastIdx >= h.cs - 45 && s.lastIdx <= h.ce + 6 }, DT);
      out.push([s.px, s.py, s.pz, s.heading, s.vx, s.vz, s.steer, s.driftAmt, s.driftHold, s.exitT, s.raceMs].map((v) => v.toFixed(6)).join(','));
    }
    return out.join('|');
  };
  ok(trace() === trace(), 'F5 hairpin traces identical across runs');
  const flat = (): string => {
    const tr = flatTrack(); const s = createSimState(); resetRun(s, tr, 0);
    const out: string[] = [];
    for (let k = 0; k < 600; k++) {
      const inp = k < 200 ? drive : k < 400 ? { steer: 1, drift: true } : { steer: 0.6, drift: false };
      simStep(s, tr, inp, DT);
      out.push([s.px, s.py, s.pz, s.heading, s.vx, s.vz, s.steer, s.driftAmt, s.driftHold, s.exitT].map((v) => v.toFixed(6)).join(','));
    }
    return out.join('|');
  };
  ok(flat() === flat(), 'F5 drift-heavy traces identical across runs');
}


// W. Cycle-2 wall feel: radius-aware arcade contact on the synthetic flat
// track. Glances deflect and scrape cheaply with no crash event; medium/hard
// hits spend exactly one crash event (severity + inward normal for
// camera/audio) with an outward rebound and a severity-scaled recovery upset;
// sustained scraping is cooldown-throttled and never competitive; the
// progress anti-cut gate still holds.
{
  const tr = flatTrack();
  const LIM = wallLimit(tr.halfW);
  const latOf = (s: SimState): number => {
    const j = s.lastIdx;
    return (s.px - tr.x[j]) * tr.nx[j] + (s.pz - tr.z[j]) * tr.nz[j];
  };
  // Place a car beside the road centre at a lateral offset, aimed into the
  // right wall (lat<0 side) at a given angle/speed. No settle: fresh state.
  const aim = (ang: number, spd: number, lat: number): SimState => {
    const s = createSimState(); resetRun(s, tr, 200);
    s.px = tr.x[200] + tr.nx[200] * lat; s.pz = tr.z[200] + tr.nz[200] * lat;
    s.heading = tr.yaw[200] + ang;
    s.vx = Math.sin(s.heading) * spd; s.vz = Math.cos(s.heading) * spd;
    return s;
  };
  // Steer away from whichever wall is contacted (matches the sim's vent):
  // the wall is on the +lat side when lat>0, and steering away from it means
  // negative steer there (positive steer on the lat<0 side).
  const awaySteer = (s: SimState): number => (latOf(s) >= 0 ? -1 : 1);
  // Gentle centre-seeking heading hold for recovery driving: proportional
  // steer toward track direction plus a small fraction of lateral offset, so
  // the car rejoins and recentres promptly. (A full-lock-until-on-road rule
  // over-rotates: it carved across the whole track into the far wall.)
  const servo = (s: SimState): StepInput => {
    const lat = latOf(s);
    const des = tr.yaw[s.lastIdx] + lat * 0.025;
    return { steer: clamp((s.heading - des) * 2.5, -1, 1), drift: false };
  };

  // W1. Shallow glance (vn ~4.8 < glance threshold): scrapes, no crash event,
  // keeps most speed once steered away, never penetrates or teleports.
  const w1 = (() => {
    const s = aim(0.08, 60, -(LIM + 0.3));
    let events = 0, scrape = 0, maxPen = 0, maxJump = 0, px = s.px, pz = s.pz;
    for (let k = 0; k < 1.2 / DT && !s.finished; k++) {
      const i = simStep(s, tr, servo(s), DT);
      if (i.wallHit === true) events++;
      if (i.scraping) scrape++;
      maxPen = Math.max(maxPen, Math.abs(latOf(s)) - LIM);
      maxJump = Math.max(maxJump, Math.hypot(s.px - px, s.pz - pz)); px = s.px; pz = s.pz;
    }
    return { events, scrape, end: Math.hypot(s.vx, s.vz), maxPen, maxJump };
  })();
  console.log(`   [W1] events=${w1.events} scrape=${w1.scrape} end=${w1.end.toFixed(1)} maxPen=${w1.maxPen.toFixed(3)} maxJump=${w1.maxJump.toFixed(2)}`);
  ok(w1.events === 0, 'W1 glance emits no crash event');
  ok(w1.scrape > 0, 'W1 glance scrapes the wall');
  ok(w1.end >= 45, 'W1 glance keeps most speed', `end=${w1.end.toFixed(1)}`);
  ok(w1.maxPen <= 0.05, 'W1 glance never penetrates', `maxPen=${w1.maxPen.toFixed(3)}`);
  ok(w1.maxJump <= 2.0, 'W1 glance never teleports', `maxJump=${w1.maxJump.toFixed(2)}`);

  // W2/W3. Medium vs hard discrete hits, driving straight: one impact event
  // each, severity + rebound scale with normal speed, speed loss meaningful.
  const hit = (ang: number, spd: number) => {
    const s = aim(ang, spd, 0);
    let first: { pre: number; post: number; sev: number; vnOut: number } | null = null;
    let events = 0, pre = spd;
    for (let k = 0; k < 1.2 / DT && !s.finished; k++) {
      const i = simStep(s, tr, drive, DT);
      if (i.wallHit === true) {
        events++;
        const nx = i.wallNx ?? 0, nz = i.wallNz ?? 0;
        const vnOut = s.vx * nx + s.vz * nz;
        if (!first) first = { pre, post: i.spd, sev: i.wallSev ?? 0, vnOut };
      }
      pre = i.spd;
    }
    return { events, first: first! };
  };
  const w2 = hit(0.25, 70);
  const w3 = hit(0.5, 75);
  // Rebound gap 0.25s after the first event, driving straight.
  const gapAfter = (ang: number, spd: number): number => {
    const s = aim(ang, spd, 0);
    let hitT = -1;
    for (let k = 0; k < 1.2 / DT && !s.finished; k++) {
      // Drive straight into the hit, then steer away: measures rebound plus
      // recovery (holding lock into the wall re-pins by design, see W4).
      const i = simStep(s, tr, hitT < 0 ? drive : { steer: awaySteer(s), drift: false }, DT);
      if (i.wallHit === true && hitT < 0) hitT = k * DT;
      if (hitT >= 0 && k * DT - hitT >= 0.25) return LIM - Math.abs(latOf(s));
    }
    return -99;
  };
  const g2 = gapAfter(0.25, 70), g3 = gapAfter(0.5, 75);
  console.log(`   [W2] events=${w2.events} sev=${w2.first.sev.toFixed(2)} loss=${((1 - w2.first.post / w2.first.pre) * 100).toFixed(1)}% vnOut=${w2.first.vnOut.toFixed(1)} gap25=${g2.toFixed(2)}`);
  console.log(`   [W3] events=${w3.events} sev=${w3.first.sev.toFixed(2)} loss=${((1 - w3.first.post / w3.first.pre) * 100).toFixed(1)}% vnOut=${w3.first.vnOut.toFixed(1)} gap25=${g3.toFixed(2)}`);
  ok(w2.events >= 1, 'W2 medium hit registers an impact');
  ok(w2.first.sev > 0.4 && w2.first.sev < 0.9, 'W2 medium severity mid-band', `sev=${w2.first.sev.toFixed(2)}`);
  ok(w2.first.vnOut > 3, 'W2 rebound velocity points off the wall', `vnOut=${w2.first.vnOut.toFixed(1)}`);
  ok(g2 >= 0.2, 'W2 rebound distance opens by 0.25s', `gap25=${g2.toFixed(2)}`);
  ok(w3.first.sev >= 0.8, 'W3 hard severity high', `sev=${w3.first.sev.toFixed(2)}`);
  ok(w3.first.sev > w2.first.sev, 'W3 severity scales above medium');
  ok(w3.first.vnOut > w2.first.vnOut, 'W3 rebound scales above medium');
  ok(1 - w3.first.post / w3.first.pre >= 0.45, 'W3 hard hit costs real speed');
  ok(g3 >= 0.5, 'W3 rebound distance opens by 0.25s', `gap25=${g3.toFixed(2)}`);

  // W4. Sustained scrape into the wall: punished pace, tiny advance,
  // cooldown-spaced events, no impact spam.
  const w4 = (() => {
    const s = createSimState(); resetRun(s, tr, 100);
    s.px = tr.x[100] - (LIM + 0.15); s.heading = tr.yaw[100]; // lat>0 wall; steer +1 presses INTO it (full scrape drag, no away vent)
    s.vx = Math.sin(s.heading) * 60; s.vz = Math.cos(s.heading) * 60;
    let sum = 0, n = 0, evts = 0, impactSteps = 0, scrape = 0;
    let lastEvt = -99; const gaps: number[] = [];
    const e0 = s.lastIdx;
    for (let k = 0; k < 2 / DT && !s.finished; k++) {
      const r = simStep(s, tr, { steer: 1, drift: false }, DT);
      sum += r.spd; n++;
      if (r.scraping) scrape++;
      if (r.impact > 0) impactSteps++;
      if (r.wallHit === true) { evts++; if (lastEvt > -90) gaps.push(k * DT - lastEvt); lastEvt = k * DT; }
    }
    return { avg: sum / Math.max(n, 1), adv: s.lastIdx - e0, evts, minGap: gaps.length ? Math.min(...gaps) : 99, impactSteps, scrape, n };
  })();
  console.log(`   [W4] avg=${w4.avg.toFixed(1)} adv=${w4.adv} events=${w4.evts} minGap=${w4.minGap.toFixed(2)} impactSteps=${w4.impactSteps}/${w4.n}`);
  ok(w4.avg < 20, 'W4 pressing into the wall kills pace', `avg=${w4.avg.toFixed(1)}`);
  ok(w4.adv < 12, 'W4 hard grind barely advances', `adv=${w4.adv}`);
  ok(w4.minGap >= 0.34, 'W4 repeat impacts cooldown-spaced', `minGap=${w4.minGap.toFixed(2)}`);
  ok(w4.impactSteps <= w4.n * 0.1, 'W4 no per-tick impact spam');

  // W5. Recovery asymmetry from the same rolling grind start: rejoining the
  // road rebuilds to pace and holds it; holding full lock into the wall grinds
  // on slowly. (The old perpendicular-pin average was dropped: a pinned start
  // cannot fairly race a rolling grind, and its bound contradicted the shared
  // E6 requirement that grinding averages above 15. Stuck escape is still
  // covered by E6 here and in the harness.)
  const w5 = (() => {
    const mk = (): SimState => {
      const g = createSimState(); resetRun(g, tr, 100);
      g.px = tr.x[100] - (LIM + 0.15); g.heading = tr.yaw[100];
      g.vx = Math.sin(g.heading) * 60; g.vz = Math.cos(g.heading) * 60;
      return g;
    };
    const a = mk();
    let t70 = -1, awaySum = 0, awayN = 0;
    for (let k = 0; k < 4 / DT; k++) {
      const i = simStep(a, tr, servo(a), DT);
      awaySum += i.spd; awayN++;
      if (t70 < 0 && Math.hypot(a.vx, a.vz) >= 70) t70 = k * DT;
    }
    const g = mk();
    let grindSum = 0, grindN = 0;
    for (let k = 0; k < 4 / DT; k++) { grindSum += simStep(g, tr, { steer: -1, drift: false }, DT).spd; grindN++; }
    return { t70, awayAvg: awaySum / Math.max(awayN, 1), grindAvg: grindSum / Math.max(grindN, 1) };
  })();
  console.log(`   [W5] t70=${w5.t70 < 0 ? 'never' : w5.t70.toFixed(2)} awayAvg=${w5.awayAvg.toFixed(1)} grindAvg=${w5.grindAvg.toFixed(1)}`);
  ok(w5.t70 >= 0 && w5.t70 <= 2.0, 'W5 steering away rebuilds to pace', `t70=${w5.t70 < 0 ? 'never' : w5.t70.toFixed(2)}s`);
  ok(w5.awayAvg >= 55, 'W5 recovery holds pace', `avg=${w5.awayAvg.toFixed(1)}`);
  ok(w5.grindAvg < 40, 'W5 grinding never competitive', `avg=${w5.grindAvg.toFixed(1)}`);
  ok(w5.grindAvg < w5.awayAvg * 0.75, 'W5 grinding into wall stays slow');

  // W6. One crash event per impact: aimed hit, then recover away — exactly one
  // event over 2s, impact nonzero only on the event step.
  const w6 = (() => {
    const s = aim(0.35, 75, 0);
    let evts = 0, impactSteps = 0, n = 0, wasScr = false;
    for (let k = 0; k < 2 / DT && !s.finished; k++) {
      const i = simStep(s, tr, wasScr ? { steer: awaySteer(s), drift: false } : drive, DT);
      n++;
      if (i.wallHit === true) evts++;
      if (i.impact > 0) impactSteps++;
      wasScr = i.scraping === true;
    }
    return { evts, impactSteps, n };
  })();
  console.log(`   [W6] events=${w6.evts} impactSteps=${w6.impactSteps}/${w6.n}`);
  ok(w6.evts === 1, 'W6 exactly one crash event per impact');
  ok(w6.impactSteps <= 2, 'W6 impact flag confined to the event step');

  // W7. No ping-pong: hard grind never reaches the opposite wall, no teleport.
  const w7 = (() => {
    const s = aim(0.5, 75, 0);
    let maxLat = -99, maxJump = 0, px = s.px, pz = s.pz;
    for (let k = 0; k < 2 / DT && !s.finished; k++) {
      simStep(s, tr, { steer: -1, drift: false }, DT);
      maxLat = Math.max(maxLat, latOf(s));
      maxJump = Math.max(maxJump, Math.hypot(s.px - px, s.pz - pz)); px = s.px; pz = s.pz;
    }
    return { maxLat, maxJump };
  })();
  console.log(`   [W7] maxLat=${w7.maxLat.toFixed(2)} maxJump=${w7.maxJump.toFixed(2)}`);
  ok(w7.maxLat <= 2.0, 'W7 bounce never crosses to the far wall');
  ok(w7.maxJump <= 2.0, 'W7 no position teleport');

  // W8. Determinism: wall-heavy trace incl. new feel state + telemetry identical.
  {
    const trace = (): string => {
      const s = aim(0.4, 70, -(LIM + 0.15));
      const out: string[] = [];
      for (let k = 0; k < 600 && !s.finished; k++) {
        const inp = k < 150 ? drive : k < 300 ? { steer: -1, drift: false } : { steer: 1, drift: false };
        const i = simStep(s, tr, inp, DT);
        out.push([s.px, s.py, s.pz, s.heading, s.vx, s.vz, s.wallCool, s.crashT, s.crashAmp,
          i.wallHit === true ? 1 : 0, i.wallSev ?? 0].map((v) => v.toFixed(6)).join(','));
      }
      return out.join('|');
    };
    ok(trace() === trace(), 'W8 wall-heavy traces identical across runs');
  }

  // W9. Anti-cut regression: a cutter parked beyond the wall is clamped to the
  // boundary but gains no progress and cannot finish.
  {
    const h = hairpin180();
    const c = createSimState(); resetRun(c, h.tr, 100);
    c.px = h.tr.x[149]; c.pz = h.tr.z[149]; c.py = h.tr.y[149] + 0.2;
    const info = simStep(c, h.tr, drive, DT);
    ok(c.lastIdx - 100 <= 4, 'W9 cut credits at most margin samples', `adv=${c.lastIdx - 100}`);
    ok(!info.finished && !c.finished, 'W9 cut cannot finish');
    for (let k = 0; k < 30; k++) simStep(c, h.tr, drive, DT);
    ok(c.lastIdx - 100 <= 4 && !c.finished, 'W9 parked cutter gains nothing');
    const d = createSimState(); resetRun(d, tr, 200);
    d.px = tr.x[200] + tr.nx[200] * 14; d.pz = tr.z[200] + tr.nz[200] * 14;
    simStep(d, tr, drive, DT);
    ok(Math.abs(latOf(d)) <= LIM + 0.05, 'W9 deep cutter clamped to boundary');
    ok(d.lastIdx - 200 <= 4, 'W9 clamp grants no progress', `adv=${d.lastIdx - 200}`);
  }
}


// R. Cycle-4 wall runtime regression: exact daily width (halfW=11.5) against
// the visual guardrail placement (src/visuals.ts: rails centered at
// halfW+RAIL_OFFSET with RAIL_HALF_DEPTH half-depth). Contract under test:
// rail inside face RFACE = halfW+RAIL_OFFSET-RAIL_HALF_DEPTH; car CENTER
// contact plane DLIM = wallLimit(halfW) = RFACE-CAR_RADIUS-WALL_MARGIN, so
// the body edge meets the rail face within WALL_MARGIN. No whole-track lap
// comparisons: all scenarios below are controlled synthetic sim states.
{
  const DLIM = wallLimit(TRACK_HALF_W);
  const RFACE = TRACK_HALF_W + RAIL_OFFSET - RAIL_HALF_DEPTH;
  const rtr = wideTrack(TRACK_HALF_W);
  const rlat = (s: SimState): number => {
    const j = s.lastIdx;
    return (s.px - rtr.x[j]) * rtr.nx[j] + (s.pz - rtr.z[j]) * rtr.nz[j];
  };
  const rput = (side: -1 | 1, dist: number, idx = 200): SimState => {
    const s = createSimState(); resetRun(s, rtr, idx);
    s.px = rtr.x[idx] + rtr.nx[idx] * side * dist;
    s.pz = rtr.z[idx] + rtr.nz[idx] * side * dist;
    s.heading = rtr.yaw[idx];
    return s;
  };
  // Velocity with a chosen into-wall normal component vn on top of pace spd.
  const rvel = (s: SimState, side: -1 | 1, spd: number, vn: number, idx = 200): void => {
    const tx = rtr.tx[idx], tz = rtr.tz[idx], nx = rtr.nx[idx], nz = rtr.nz[idx];
    s.vx = tx * spd + nx * side * vn; s.vz = tz * spd + nz * side * vn;
  };
  const rservo = (s: SimState): StepInput => {
    const lat = rlat(s);
    const des = rtr.yaw[s.lastIdx] + lat * 0.025;
    return { steer: clamp((s.heading - des) * 2.5, -1, 1), drift: false };
  };
  const raway = (s: SimState): number => (rlat(s) >= 0 ? -1 : 1);

  // R0. Daily track accepts; contact-plane identity holds at daily width.
  ok(Math.abs(TRACK_HALF_W - 11.5) < 1e-9, 'R0 daily halfW is 11.5', `halfW=${TRACK_HALF_W}`);
  const acc = acceptDailyTrack('2026-09-07');
  const dtr = trackFromPoints(acc.points.map((pt) => ({ x: pt.x, y: pt.y, z: pt.z })), TRACK_HALF_W);
  ok(dtr.n > 100 && acc.stats.events.length >= 8, 'R0 daily track accepts with turn density', `n=${dtr.n} events=${acc.stats.events.length}`);
  ok(Math.abs(DLIM - (RFACE - CAR_RADIUS - WALL_MARGIN)) < 1e-9, 'R0 contact plane identity', `DLIM=${DLIM.toFixed(3)} RFACE=${RFACE.toFixed(3)}`);
  ok(WALL_MARGIN <= 0.35, 'R0 body-edge-to-rail-face gap within visual tolerance', `gap=${WALL_MARGIN}`);
  console.log(`   [R0] DLIM=${DLIM.toFixed(3)} RFACE=${RFACE.toFixed(3)} edgeGap=${(RFACE - (DLIM + CAR_RADIUS)).toFixed(3)}`);

  // R1. Contact plane, both walls: deep spawn clamps exactly, edge kisses
  // the rail face; medium hit rebounds outward once with inward normal.
  for (const side of [-1, 1] as const) {
    const c = rput(side, DLIM + 0.5);
    simStep(c, rtr, drive, DT);
    const err = Math.abs(Math.abs(rlat(c)) - DLIM);
    ok(err <= 0.06, `R1 contact plane ${side < 0 ? 'right' : 'left'} wall`, `err=${err.toFixed(4)}`);
    const edgeGap = RFACE - (Math.abs(rlat(c)) + CAR_RADIUS);
    ok(edgeGap >= -0.06 && edgeGap <= 0.4, `R1 edge kisses rail face ${side < 0 ? 'right' : 'left'}`, `gap=${edgeGap.toFixed(3)}`);
    const h = rput(side, DLIM - 0.5);
    rvel(h, side, 60, 15);
    let evts = 0, vnOut = 0, sev = 0, nx = 0, nz = 0;
    for (let k = 0; k < 1.2 / DT && !h.finished; k++) {
      const i = simStep(h, rtr, drive, DT);
      if (i.wallHit === true) {
        evts++; nx = i.wallNx ?? 0; nz = i.wallNz ?? 0;
        vnOut = h.vx * nx + h.vz * nz; sev = i.wallSev ?? 0;
      }
    }
    const j = h.lastIdx;
    const inw = (nx * -rtr.nx[j] * side + nz * -rtr.nz[j] * side);
    console.log(`   [R1.${side < 0 ? 'R' : 'L'}] evts=${evts} sev=${sev.toFixed(2)} vnOut=${vnOut.toFixed(1)} inw=${inw.toFixed(3)}`);
    ok(evts >= 1, `R1 medium hit registers ${side < 0 ? 'right' : 'left'}`);
    ok(vnOut > 3, `R1 rebound points off the ${side < 0 ? 'right' : 'left'} wall`, `vnOut=${vnOut.toFixed(1)}`);
    ok(inw > 0.99, `R1 contact normal matches visual ${side < 0 ? 'right' : 'left'} side`, `dot=${inw.toFixed(3)}`);
  }

  // R2. Shallow glance at daily width follows the rail: scrape, no event.
  // Heading-angled approach (vn=60*sin(0.08)~4.8): raw lateral velocity with
  // a straight heading is killed by grip before contact, so it never touches.
  for (const side of [-1, 1] as const) {
    const s = rput(side, DLIM - 0.5);
    s.heading = rtr.yaw[200] - side * 0.08;
    s.vx = Math.sin(s.heading) * 60; s.vz = Math.cos(s.heading) * 60;
    let evts = 0, scrape = 0, maxPen = 0;
    for (let k = 0; k < 1.2 / DT && !s.finished; k++) {
      const i = simStep(s, rtr, rservo(s), DT);
      if (i.wallHit === true) evts++;
      if (i.scraping) scrape++;
      maxPen = Math.max(maxPen, Math.abs(rlat(s)) - DLIM);
    }
    const end = Math.hypot(s.vx, s.vz);
    console.log(`   [R2.${side < 0 ? 'R' : 'L'}] evts=${evts} scrape=${scrape} end=${end.toFixed(1)} maxPen=${maxPen.toFixed(3)}`);
    ok(evts === 0, `R2 glance emits no event ${side < 0 ? 'right' : 'left'}`);
    ok(scrape > 0, `R2 glance scrapes ${side < 0 ? 'right' : 'left'}`);
    ok(end >= 45, `R2 glance keeps pace ${side < 0 ? 'right' : 'left'}`, `end=${end.toFixed(1)}`);
    ok(maxPen <= 0.05, `R2 glance never penetrates ${side < 0 ? 'right' : 'left'}`, `maxPen=${maxPen.toFixed(3)}`);
  }

  // R3. Wider late-apex line through an R40 daily-width curve: reaches the
  // exit, at most one impact, no teleport, nominal penetration ~0.
  {
    const R = 40, pts: { x: number; y: number; z: number }[] = [];
    let x = 0, z = 0, hd = 0;
    for (let i = 0; i < 100; i++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
    const cs = pts.length;
    let d = 0;
    while (d < Math.PI / 2 - 1e-9) {
      const dp = Math.min(2 / R, Math.PI / 2 - d);
      hd -= dp; x += Math.sin(hd) * (R * dp); z += Math.cos(hd) * (R * dp); d += dp;
      pts.push({ x, y: 6, z });
    }
    const ce = pts.length;
    for (let i = 0; i < 100; i++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
    const ctr = trackFromPoints(pts, TRACK_HALF_W);
    const CL = wallLimit(TRACK_HALF_W);
    const clat = (s: SimState): number => {
      const j = s.lastIdx;
      return (s.px - ctr.x[j]) * ctr.nx[j] + (s.pz - ctr.z[j]) * ctr.nz[j];
    };
    const s = createSimState(); resetRun(s, ctr, 50);
    s.px = ctr.x[50] + ctr.nx[50] * -(CL - 0.5); s.pz = ctr.z[50] + ctr.nz[50] * -(CL - 0.5);
    s.heading = ctr.yaw[50];
    s.vx = Math.sin(s.heading) * 62; s.vz = Math.cos(s.heading) * 62;
    let evts = 0, maxPen = 0, maxJump = 0, px = s.px, pz = s.pz, lastEvt = -99, minGap = 99;
    for (let k = 0; k < 12 / DT && !s.finished; k++) {
      const lat = clat(s);
      const des = ctr.yaw[s.lastIdx] + lat * 0.02;
      const i = simStep(s, ctr, { steer: clamp((s.heading - des) * 2.0, -1, 1), drift: false }, DT);
      if (i.wallHit === true) {
        evts++;
        if (lastEvt > -90) minGap = Math.min(minGap, k * DT - lastEvt);
        lastEvt = k * DT;
      }
      maxPen = Math.max(maxPen, Math.abs(clat(s)) - CL);
      maxJump = Math.max(maxJump, Math.hypot(s.px - px, s.pz - pz)); px = s.px; pz = s.pz;
      if (s.lastIdx >= ce + 10) break;
    }
    console.log(`   [R3] exit=${s.lastIdx >= ce + 10} evts=${evts} minGap=${minGap.toFixed(2)} maxPen=${maxPen.toFixed(3)} maxJump=${maxJump.toFixed(2)}`);
    ok(s.lastIdx >= ce + 10, 'R3 late-apex line reaches the curve exit', `idx=${s.lastIdx}/${ce + 10}`);
    ok(evts <= 2, 'R3 curve kiss costs at most two impacts', `evts=${evts}`);
    if (evts > 1) ok(minGap >= 0.34, 'R3 repeat kisses cooldown-spaced', `minGap=${minGap.toFixed(2)}`);
    ok(maxJump <= 1.34, 'R3 no teleport on curve', `maxJump=${maxJump.toFixed(2)}`);
    ok(maxPen <= 0.01, 'R3 nominal penetration ~0', `maxPen=${maxPen.toFixed(3)}`);
    // Rail-chord sagitta is visuals-owned: physics rides the true offset
    // curve, straight chord segments sag inside it by R-sqrt(R^2-(L/2)^2).
    const sag = (rr: number, L: number): number => rr - Math.sqrt(rr * rr - (L / 2) * (L / 2));
    console.log(`   [R3] sagitta R40/L10=${sag(40, 10).toFixed(3)} R38/L10=${sag(38, 10).toFixed(3)} R133/L10=${sag(133, 10).toFixed(3)}`);
    ok(sag(38, 10) <= 1.5, 'R3 worst-case chord sagitta bounded', `sag=${sag(38, 10).toFixed(3)}`);
  }

  // R4. Jump landing near the edge at daily width: clamps, no teleport.
  {
    const pts: { x: number; y: number; z: number }[] = [];
    for (let zz = 0; zz <= 800; zz += 2) {
      pts.push({ x: 0, y: 6 + 6 * Math.exp(-(((zz - 300) / 18) ** 2)), z: zz });
    }
    const ktr = trackFromPoints(pts, TRACK_HALF_W);
    const KL = wallLimit(TRACK_HALF_W);
    const klat = (s: SimState): number => {
      const j = s.lastIdx;
      return (s.px - ktr.x[j]) * ktr.nx[j] + (s.pz - ktr.z[j]) * ktr.nz[j];
    };
    const s = createSimState(); resetRun(s, ktr, 100);
    s.px = ktr.x[100] + ktr.nx[100] * -(KL - 1); s.pz = ktr.z[100] + ktr.nz[100] * -(KL - 1);
    s.heading = ktr.yaw[100];
    s.vx = Math.sin(s.heading) * 70; s.vz = Math.cos(s.heading) * 70;
    let evts = 0, maxJump = 0, maxLat = 0, px = s.px, pz = s.pz;
    for (let k = 0; k < 4 / DT && !s.finished; k++) {
      const i = simStep(s, ktr, drive, DT);
      if (i.wallHit === true) evts++;
      maxJump = Math.max(maxJump, Math.hypot(s.px - px, s.pz - pz)); px = s.px; pz = s.pz;
      maxLat = Math.max(maxLat, Math.abs(klat(s)));
    }
    console.log(`   [R4] evts=${evts} maxLat=${maxLat.toFixed(2)} maxJump=${maxJump.toFixed(2)}`);
    ok(maxLat <= KL + 0.05, 'R4 landing near edge stays clamped', `maxLat=${maxLat.toFixed(2)}`);
    ok(maxJump <= 2.0, 'R4 landing never teleports', `maxJump=${maxJump.toFixed(2)}`);
    ok(evts <= 1, 'R4 landing costs at most one impact', `evts=${evts}`);
  }

  // R5. Sustained grind at daily width: punished, cooldown-spaced, recovers.
  {
    const s = rput(-1, DLIM + 0.15);
    rvel(s, -1, 60, 0);
    let sum = 0, n = 0, evts = 0, impactSteps = 0, lastEvt = -99, minGap = 99;
    const e0 = s.lastIdx;
    for (let k = 0; k < 2 / DT && !s.finished; k++) {
      const r = simStep(s, rtr, { steer: -1, drift: false }, DT);
      sum += r.spd; n++;
      if (r.impact > 0) impactSteps++;
      if (r.wallHit === true) {
        evts++;
        if (lastEvt > -90) minGap = Math.min(minGap, k * DT - lastEvt);
        lastEvt = k * DT;
      }
    }
    const avg = sum / Math.max(n, 1), adv = s.lastIdx - e0;
    console.log(`   [R5] avg=${avg.toFixed(1)} adv=${adv} evts=${evts} minGap=${minGap.toFixed(2)} impactSteps=${impactSteps}/${n}`);
    ok(avg < 40, 'R5 wall-riding never competitive', `avg=${avg.toFixed(1)}`);
    ok(adv < 20, 'R5 grind barely advances', `adv=${adv}`);
    ok(evts <= 2, 'R5 no impact spam while grinding', `evts=${evts}`);
    if (evts > 1) ok(minGap >= 0.34, 'R5 repeat impacts cooldown-spaced', `minGap=${minGap.toFixed(2)}`);
    ok(impactSteps <= n * 0.1, 'R5 no per-tick impact spam');
    const a = rput(-1, DLIM + 0.15);
    rvel(a, -1, 60, 0);
    let t60 = -1;
    for (let k = 0; k < 2.5 / DT; k++) {
      simStep(a, rtr, { steer: raway(a), drift: false }, DT);
      if (t60 < 0 && Math.hypot(a.vx, a.vz) >= 60) t60 = k * DT;
    }
    ok(t60 >= 0 && t60 <= 2.5, 'R5 steering away recovers quickly', `t60=${t60 < 0 ? 'never' : t60.toFixed(2)}s`);
    // Anti-trap: the same ground-down car (not a fresh state) rebuilds once
    // the driver stops leaning into the rail.
    let tPinned = -1;
    for (let k = 0; k < 2.5 / DT; k++) {
      simStep(s, rtr, { steer: raway(s), drift: false }, DT);
      if (tPinned < 0 && Math.hypot(s.vx, s.vz) >= 60) tPinned = k * DT;
    }
    console.log(`   [R5] pinnedEnd=${Math.hypot(s.vx, s.vz).toFixed(1)} tPinned60=${tPinned < 0 ? 'never' : tPinned.toFixed(2)}`);
    ok(tPinned >= 0 && tPinned <= 2.5, 'R5 pinned car is recoverable, never trapped', `t=${tPinned < 0 ? 'never' : tPinned.toFixed(2)}s`);
  }

  // R6. Teleport anti-cut: deep spawn clamps but gains no progress/finish.
  {
    const h = hairpin180();
    const c = createSimState(); resetRun(c, h.tr, 100);
    c.px = h.tr.x[149]; c.pz = h.tr.z[149]; c.py = h.tr.y[149] + 0.2;
    const info = simStep(c, h.tr, drive, DT);
    ok(c.lastIdx - 100 <= 4, 'R6 cut credits at most margin samples', `adv=${c.lastIdx - 100}`);
    ok(!info.finished && !c.finished, 'R6 cut cannot finish');
    const t = rput(1, DLIM + 6);
    simStep(t, rtr, drive, DT);
    ok(Math.abs(rlat(t)) <= DLIM + 0.05, 'R6 deep teleport clamps to boundary');
    ok(t.lastIdx - 200 <= 4, 'R6 clamp grants no progress', `adv=${t.lastIdx - 200}`);
  }

  // R7. High-speed hard hits, both walls: one event, severity high, outward
  // rebound gap opens within 0.5s, then stable recovery.
  for (const side of [-1, 1] as const) {
    const s = rput(side, DLIM - 0.5);
    s.heading = rtr.yaw[200] - side * 0.32; // vn=79*sin(0.32)~24.8, aligned so grip scrub cannot eat it pre-contact
    s.vx = Math.sin(s.heading) * 79; s.vz = Math.cos(s.heading) * 79;
    let evts = 0, sev = 0, vnOut = 0, pre = 0, post = 0, hitT = -1, lastEvt = -99, minGap = 99;
    for (let k = 0; k < 1.5 / DT && !s.finished; k++) {
      const i = simStep(s, rtr, drive, DT);
      if (i.wallHit === true) {
        evts++;
        if (hitT < 0) { hitT = k * DT; sev = i.wallSev ?? 0; pre = pre; post = i.spd; }
        if (lastEvt > -90) minGap = Math.min(minGap, k * DT - lastEvt);
        lastEvt = k * DT;
        const nx = i.wallNx ?? 0, nz = i.wallNz ?? 0;
        vnOut = s.vx * nx + s.vz * nz;
      }
      pre = i.spd;
    }
    void pre;
    let gap = -99;
    const g = rput(side, DLIM - 0.5);
    g.heading = rtr.yaw[200] - side * 0.32;
    g.vx = Math.sin(g.heading) * 79; g.vz = Math.cos(g.heading) * 79;
    let gt = -1;
    for (let k = 0; k < 1.5 / DT && !g.finished; k++) {
      const i = simStep(g, rtr, gt < 0 ? drive : { steer: raway(g), drift: false }, DT);
      if (i.wallHit === true && gt < 0) gt = k * DT;
      if (gt >= 0 && k * DT - gt >= 0.5) { gap = DLIM - Math.abs(rlat(g)); break; }
    }
    console.log(`   [R7.${side < 0 ? 'R' : 'L'}] evts=${evts} sev=${sev.toFixed(2)} vnOut=${vnOut.toFixed(1)} gap50=${gap.toFixed(2)}`);
    ok(evts >= 1, `R7 hard hit registers ${side < 0 ? 'right' : 'left'}`);
    ok(sev >= 0.8, `R7 hard severity high ${side < 0 ? 'right' : 'left'}`, `sev=${sev.toFixed(2)}`);
    ok(vnOut > 3, `R7 rebound points outward ${side < 0 ? 'right' : 'left'}`, `vnOut=${vnOut.toFixed(1)}`);
    ok(gap >= 0.5, `R7 rebound gap opens by 0.5s ${side < 0 ? 'right' : 'left'}`, `gap=${gap.toFixed(2)}`);
    if (evts > 1) ok(minGap >= 0.34, `R7 repeat hits cooldown-spaced ${side < 0 ? 'right' : 'left'}`, `minGap=${minGap.toFixed(2)}`);
  }

  // R8. Determinism: daily-width wall trace identical across runs.
  {
    const trace = (): string => {
      const s = rput(-1, DLIM + 0.15);
      rvel(s, -1, 70, 12);
      const out: string[] = [];
      for (let k = 0; k < 300 && !s.finished; k++) {
        const i = simStep(s, rtr, k < 100 ? drive : { steer: raway(s), drift: false }, DT);
        out.push([s.px, s.py, s.pz, s.heading, s.vx, s.vz, s.wallCool,
          i.wallHit === true ? 1 : 0, i.wallSev ?? 0].map((v) => v.toFixed(6)).join(','));
      }
      return out.join('|');
    };
    ok(trace() === trace(), 'R8 daily-width wall traces identical');
  }
}


// D6. Cycle-6 aggressive handbrake/pendulum drift on a wide synthetic track
// (immune to daily-generator churn). A pre-loaded steer + tap breaks the rear
// (sharp bounded yaw impulse + grip cut), stores decaying pendulum energy
// (visible wobble), chains poorly released slides into opposite drifts, and
// pays the one-shot slingshot only for timed countersteer. Wall contact
// suppresses kick/pendulum; scheduling is rate-independent.
{
  const dtr = wideTrack(400);
  // Pre-loaded steer, tap 0.5-0.65s. NOTE: tapping from a centered wheel
  // never enters (steering smoothing keeps entry steer below threshold on
  // the edge) — the tap must land while steering, like a real flick.
  const tapRun = (tap: boolean, secs = 3): { yaw15: number; yaw30: number; yaw60: number; peakSlip: number; t45: number; end: number } => {
    const s = createSimState(); resetRun(s, dtr, 0);
    settle(dtr, s, 6, drive);
    const h0 = s.heading;
    const yaw: Record<string, number> = {};
    let peak = 0, t45 = -1;
    for (let k = 0; k < secs / DT; k++) {
      const t = k * DT;
      const i = simStep(s, dtr, t < 0.5 ? { steer: 0.6, drift: false } : tap && t < 0.65 ? { steer: 0.6, drift: true } : { steer: 0.6, drift: false }, DT);
      peak = Math.max(peak, Math.abs(i.slip));
      for (const m of [0.15, 0.3, 0.6]) if (t >= 0.5 + m && !(m in yaw)) yaw[m] = s.heading - h0;
      if (t45 < 0 && Math.abs(s.heading - h0) >= Math.PI / 4) t45 = t - 0.5;
    }
    return { yaw15: yaw[0.15], yaw30: yaw[0.3], yaw60: yaw[0.6], peakSlip: peak * 180 / Math.PI, t45, end: Math.hypot(s.vx, s.vz) };
  };
  // D6.1. Handbrake yaw/slip impulse: sharper turn-in, bounded, still fast.
  const noTap = tapRun(false), yesTap = tapRun(true);
  console.log(`   [D6.1] notap yaw15=${noTap.yaw15.toFixed(2)} yaw30=${noTap.yaw30.toFixed(2)} peak=${noTap.peakSlip.toFixed(1)} | tap yaw15=${yesTap.yaw15.toFixed(2)} yaw30=${yesTap.yaw30.toFixed(2)} yaw60=${yesTap.yaw60.toFixed(2)} peak=${yesTap.peakSlip.toFixed(1)} end=${yesTap.end.toFixed(1)}`);
  ok(yesTap.yaw15 < -0.35, 'D6 tap turns harder immediately', `yaw15=${yesTap.yaw15.toFixed(2)}`);
  ok(yesTap.yaw15 < noTap.yaw15 - 0.1, 'D6 tap beats steering alone', `${yesTap.yaw15.toFixed(2)} vs ${noTap.yaw15.toFixed(2)}`);
  ok(yesTap.yaw30 < -0.55, 'D6 tap keeps rotating', `yaw30=${yesTap.yaw30.toFixed(2)}`);
  ok(yesTap.peakSlip >= 12, 'D6 tap breaks rear grip (slip)', `peak=${yesTap.peakSlip.toFixed(1)}deg`);
  ok(noTap.peakSlip < 5, 'D6 control: no tap, no slide', `peak=${noTap.peakSlip.toFixed(1)}deg`);
  ok(yesTap.yaw60 > -1.3, 'D6 impulse bounded (no snap-spin)', `yaw60=${yesTap.yaw60.toFixed(2)}`);
  ok(yesTap.end >= 68, 'D6 tap keeps pace', `end=${yesTap.end.toFixed(1)}`);
  // D6.2. Time to 45 degrees of rotation.
  ok(yesTap.t45 >= 0 && yesTap.t45 <= 1.2, 'D6 tap rotates 45deg quickly', `t45=${yesTap.t45 < 0 ? 'never' : yesTap.t45.toFixed(2)}s`);
  ok(noTap.t45 < 0 || yesTap.t45 < noTap.t45, 'D6 tap rotates sooner than grip', `tap=${yesTap.t45.toFixed(2)} ctrl=${noTap.t45 < 0 ? 'never' : noTap.t45.toFixed(2)}`);

  // D6.3. Pendulum wobble: strong early yaw-rate ripple, decayed late, same
  // overall direction (controllable, never a random reversal).
  const wob = (() => {
    const s = createSimState(); resetRun(s, dtr, 0);
    settle(dtr, s, 6, drive);
    const h0 = s.heading;
    const acc: Record<string, number[]> = { early: [], late: [] };
    let amp15 = 0;
    for (let k = 0; k < 2.8 / DT; k++) {
      const t = k * DT;
      const i = simStep(s, dtr, t < 0.5 ? { steer: 0.6, drift: false } : t < 0.65 ? { steer: 0.6, drift: true } : { steer: 0.6, drift: false }, DT);
      if (t >= 0.6 && t < 1.1) acc.early.push(i.yawRate);
      if (t >= 1.8 && t < 2.3) acc.late.push(i.yawRate);
      if (t >= 2.0 && amp15 === 0) amp15 = i.pendAmp ?? 0;
    }
    const p2p = (a: number[]): number => Math.max(...a) - Math.min(...a);
    return { early: p2p(acc.early), late: p2p(acc.late), tot: s.heading - h0, amp15 };
  })();
  console.log(`   [D6.3] yawRate p2p early=${wob.early.toFixed(2)} late=${wob.late.toFixed(2)} totYaw=${wob.tot.toFixed(2)} pendAmp=${wob.amp15.toFixed(3)}`);
  ok(wob.early >= 0.8, 'D6 wobble visible after the tap', `p2p=${wob.early.toFixed(2)}`);
  ok(wob.late <= 0.4, 'D6 wobble decays within ~2s', `p2p=${wob.late.toFixed(2)}`);
  ok(wob.tot < -1.0, 'D6 slide keeps its direction (no reversal)', `tot=${wob.tot.toFixed(2)}`);
  ok(wob.amp15 < 0.15, 'D6 pendulum energy spent', `amp=${wob.amp15.toFixed(3)}`);

  // D6.4. Natural chain: a poorly released slide re-engages opposite without
  // a neutral pass; a clean in-phase exit does not chain while held.
  const sturn = (commitAt: number, secs = 5): { exits: string[]; entries: string[]; dirs: number[] } => {
    const s = createSimState(); resetRun(s, dtr, 0);
    settle(dtr, s, 6, drive);
    const exits: string[] = [], entries: string[] = [], dirs: number[] = [];
    for (let k = 0; k < secs / DT; k++) {
      const t = k * DT;
      const inp = t < 0.5 ? { steer: 0.6, drift: false } : t < 0.65 ? { steer: 0.6, drift: true } : t < commitAt ? { steer: 0.6, drift: false } : { steer: -0.7, drift: false };
      simStep(s, dtr, inp, DT);
      if (s.rhythmOut.event === 'exit') exits.push(`${t.toFixed(2)}:q${(s.rhythmOut.quality ?? 0).toFixed(2)}`);
      if (s.rhythmOut.event === 'entered') { entries.push(t.toFixed(2)); dirs.push(s.rhythm.entryDir); }
    }
    return { exits, entries, dirs };
  };
  const poor = sturn(0.85), clean = sturn(1.4);
  console.log(`   [D6.4] poor exits=${poor.exits.join(',') || 'none'} entries=${poor.entries.join(',') || 'none'} dirs=${poor.dirs.join(',') || 'none'}`);
  console.log(`   [D6.4] clean exits=${clean.exits.join(',') || 'none'} lateEntries=${clean.entries.filter((e) => parseFloat(e) > 1).join(',') || 'none'}`);
  ok(poor.exits.length >= 1, 'D6 poor S-turn commits an exit');
  ok(poor.entries.length >= 2 && poor.dirs[1] === -1, 'D6 poor release chains opposite without neutral', `entries=${poor.entries.join(',')}`);
  ok(parseFloat(poor.entries[1]) <= 2.0, 'D6 chain engages promptly', `t=${poor.entries[1]}`);
  ok(clean.exits.length >= 1, 'D6 clean S-turn commits an exit');
  ok(clean.entries.filter((e) => parseFloat(e) > 1).length === 0, 'D6 clean exit damps, no chain while held');

  // D6.5. Countersteer timing: in-phase damps + pays, anti-phase chains,
  // wrong-direction never exits. Boost peak respects the cap.
  // After the exit: brief neutral settle (wobble probe), then hold the
  // chain direction while the window is still open. Order matters: the
  // window is only 0.8s, so a late seek would miss a live chain.
  const counter = (age: number): { q: number; slipAfter: number; pend: number; chained: boolean; peak: number } => {
    const s = createSimState(); resetRun(s, dtr, 0);
    settle(dtr, s, 6, drive);
    let done = false, q = 0, pend = 0, peak = 0;
    for (let k = 0; k < 4 / DT && !done; k++) {
      const t = k * DT;
      simStep(s, dtr, t < 0.5 ? { steer: 0.6, drift: false } : t < 0.65 ? { steer: 0.6, drift: true } : t < 0.5 + age ? { steer: 0.6, drift: false } : { steer: -0.7, drift: false }, DT);
      if (s.rhythmOut.event === 'exit') { done = true; q = s.rhythmOut.quality ?? 0; pend = s.rhythm.pendAmp; }
      peak = Math.max(peak, Math.hypot(s.vx, s.vz));
    }
    let slipAfter = 0;
    for (let k = 0; k < 0.25 / DT; k++) {
      slipAfter = Math.abs(simStep(s, dtr, { steer: 0, drift: false }, DT).slip);
      peak = Math.max(peak, Math.hypot(s.vx, s.vz));
    }
    let chained = false;
    for (let k = 0; k < 1.5 / DT; k++) {
      simStep(s, dtr, { steer: -0.7, drift: false }, DT);
      peak = Math.max(peak, Math.hypot(s.vx, s.vz));
      if (s.rhythmOut.event === 'entered') { chained = true; break; }
    }
    return { q, slipAfter: slipAfter * 180 / Math.PI, pend, chained, peak };
  };
  const inPh = counter(0.9), antiPh = counter(0.45);
  console.log(`   [D6.5] in-phase q=${inPh.q.toFixed(2)} slipAfter=${inPh.slipAfter.toFixed(1)} pend=${inPh.pend.toFixed(2)} peak=${inPh.peak.toFixed(1)}`);
  console.log(`   [D6.5] anti-phase q=${antiPh.q.toFixed(2)} chained=${antiPh.chained} pend=${antiPh.pend.toFixed(2)}`);
  ok(inPh.q > 0.55, 'D6 timed countersteer earns the slingshot', `q=${inPh.q.toFixed(2)}`);
  ok(inPh.slipAfter < 6, 'D6 timed countersteer realigns velocity/body', `slip=${inPh.slipAfter.toFixed(1)}deg`);
  ok(inPh.pend === 0 && !inPh.chained, 'D6 timed countersteer kills the wobble');
  ok(inPh.peak <= 84.5, 'D6 slingshot respects the top-speed cap', `peak=${inPh.peak.toFixed(1)}`);
  ok(antiPh.chained, 'D6 mistimed countersteer intensifies the next slide');
  ok(antiPh.pend > 0.25, 'D6 mistimed exit leaves energy alive', `pend=${antiPh.pend.toFixed(2)}`);
  const wrong = (() => {
    const s = createSimState(); resetRun(s, dtr, 0);
    settle(dtr, s, 6, drive);
    let exited = false;
    for (let k = 0; k < 3 / DT; k++) {
      const t = k * DT;
      simStep(s, dtr, t < 0.5 ? { steer: 0.6, drift: false } : t < 0.65 ? { steer: 0.6, drift: true } : { steer: 1.0, drift: false }, DT);
      if (s.rhythmOut.event === 'exit') exited = true;
    }
    return { exited, sliding: s.rhythm.phase === 'sliding' };
  })();
  ok(!wrong.exited && wrong.sliding, 'D6 wrong-direction flick never exits');

  // D6.6. Spam resistance: alternating undeveloped flicks never farm a boost.
  const spam = (() => {
    const s = createSimState(); resetRun(s, dtr, 0);
    settle(dtr, s, 6, drive);
    let maxQ = 0, maxBoost = 0, t = 0;
    const stepInp = (inp: StepInput): void => { simStep(s, dtr, inp, DT); t += DT; };
    for (let r = 0; r < 4; r++) {
      const dir = r % 2 === 0 ? 0.6 : -0.6;
      for (let k = 0; k < 12 && s.rhythm.phase !== 'sliding'; k++) stepInp({ steer: dir, drift: k < 6 });
      for (let k = 0; k < 8; k++) stepInp({ steer: dir, drift: false });
      for (let k = 0; k < 30 && s.rhythmOut.event !== 'exit'; k++) stepInp({ steer: -dir, drift: false });
      if (s.rhythmOut.event === 'exit') { maxQ = Math.max(maxQ, s.rhythmOut.quality ?? 0); maxBoost = Math.max(maxBoost, s.rhythmOut.boostAccel ?? 0); }
      for (let k = 0; k < 80; k++) stepInp({ steer: 0, drift: false });
    }
    return { maxQ, maxBoost };
  })();
  console.log(`   [D6.6] spam maxQ=${spam.maxQ.toFixed(3)} maxBoost=${spam.maxBoost.toFixed(1)}`);
  ok(spam.maxQ < 0.45, 'D6 spam never earns a slingshot grade', `q=${spam.maxQ.toFixed(3)}`);
  ok(spam.maxBoost < 9, 'D6 spam boost stays small', spam.maxBoost.toFixed(1));

  // D6.7. Wall-contact suppression: tap in the rail clamps like the no-tap
  // control (no kick applied), module still entered.
  const wallTap = (() => {
    const wtr = flatTrack();
    const run = (tap: boolean): { kick: boolean; entered: boolean; maxPen: number; ev: number; headDiff: number[] } => {
      const s = createSimState(); resetRun(s, wtr, 0);
      settle(wtr, s, 6, drive);
      const idx = s.lastIdx;
      s.px = wtr.x[idx] + wtr.nx[idx] * 9.0; s.pz = wtr.z[idx] + wtr.nz[idx] * 9.0;
      let kick = false, entered = false, maxPen = 0, ev = 0;
      const H: number[] = [];
      for (let k = 0; k < 0.6 / DT; k++) {
        const t = k * DT;
        const i = simStep(s, wtr, t < 0.45 ? { steer: 0.6, drift: tap && t >= 0.3 && t < 0.45 } : { steer: 0, drift: false }, DT);
        if (s.kickT > 0) kick = true;
        if (s.rhythm.phase === 'sliding') entered = true;
        const j = s.lastIdx;
        maxPen = Math.max(maxPen, Math.abs((s.px - wtr.x[j]) * wtr.nx[j] + (s.pz - wtr.z[j]) * wtr.nz[j]) - wallLimit(wtr.halfW));
        if (i.wallHit === true) ev++;
        H.push(s.heading);
      }
      return { kick, entered, maxPen, ev, headDiff: H };
    };
    const a = run(false), b = run(true);
    let mx = 0;
    for (let k = 0; k < a.headDiff.length; k++) mx = Math.max(mx, Math.abs(a.headDiff[k] - b.headDiff[k]));
    return { a, b, mx };
  })();
  console.log(`   [D6.7] tap entered=${wallTap.b.entered} kick=${wallTap.b.kick} maxPen=${wallTap.b.maxPen.toFixed(3)} ev=${wallTap.b.ev} headDiff=${wallTap.mx.toFixed(3)}`);
  ok(wallTap.b.entered, 'D6 module still enters at the wall');
  ok(!wallTap.b.kick, 'D6 kick suppressed in wall contact');
  ok(wallTap.b.maxPen <= 0.05, 'D6 wall clamp intact under tap', `pen=${wallTap.b.maxPen.toFixed(3)}`);
  ok(wallTap.b.ev <= 1, 'D6 no impact spam from tap at wall');
  ok(wallTap.mx < 0.1, 'D6 tap barely disturbs the wall line', `diff=${wallTap.mx.toFixed(3)}`);

  // D6.8. Scheduling equivalence across render rates: same second-scheduled
  // S-turn at 60/90/120/144Hz step rates gives the same rhythm events and a
  // bounded trajectory (the fixed-step accumulator makes render rate moot).
  const sched = (() => {
    const script = (t: number): StepInput => t < 0.5 ? { steer: 0.6, drift: false } : t < 0.65 ? { steer: 0.6, drift: true } : t < 1.4 ? { steer: 0.6, drift: false } : t < 1.55 ? { steer: -0.6, drift: true } : { steer: -0.6, drift: false };
    const run = (dt: number): { ev: string; x: number; z: number; h: number } => {
      const s = createSimState(); resetRun(s, dtr, 0);
      for (let k = 0; k < 6 / DT; k++) simStep(s, dtr, { steer: 0, drift: false }, DT);
      const ev: string[] = [];
      for (let k = 0; k < 3 / dt; k++) {
        simStep(s, dtr, script(k * dt), dt);
        if (s.rhythmOut.event !== 'none') ev.push(s.rhythmOut.event);
      }
      return { ev: ev.join(','), x: s.px, z: s.pz, h: s.heading };
    };
    const ref = run(DT);
    const rows = [60, 90, 120, 144].map((hz) => {
      const r = run(1 / hz);
      return { hz, ev: r.ev, dp: Math.hypot(r.x - ref.x, r.z - ref.z), dh: Math.abs(r.h - ref.h) };
    });
    return { ref, rows };
  })();
  console.log(`   [D6.8] ref ev=${sched.ref.ev} ` + sched.rows.map((r) => `${r.hz}Hz:dp${r.dp.toFixed(2)}/dh${r.dh.toFixed(3)}`).join(' '));
  ok(sched.rows.every((r) => r.ev === sched.ref.ev), 'D6 same rhythm events at all rates');
  ok(sched.rows.every((r) => r.dp < 2.5 && r.dh < 0.05), 'D6 trajectories match across rates');

  // D6.9. Deterministic replay of a full tap-chain-counter script.
  {
    const trace = (): string => {
      const s = createSimState(); resetRun(s, dtr, 0);
      settle(dtr, s, 6, drive);
      const out: string[] = [];
      for (let k = 0; k < 4 / DT; k++) {
        const t = k * DT;
        const i = simStep(s, dtr, t < 0.5 ? { steer: 0.6, drift: false } : t < 0.65 ? { steer: 0.6, drift: true } : t < 0.85 ? { steer: 0.6, drift: false } : t < 1.0 ? { steer: -0.7, drift: false } : t < 1.6 ? { steer: -0.7, drift: false } : t < 1.75 ? { steer: 0.7, drift: false } : { steer: 0, drift: false }, DT);
        out.push([s.px, s.pz, s.heading, s.vx, s.vz, s.rhythm.pendAmp, s.rhythm.pendPhase, i.pendAmp ?? 0, i.wallHit === true ? 1 : 0].map((v) => v.toFixed(6)).join(','));
      }
      return out.join('|');
    };
    ok(trace() === trace(), 'D6 tap-chain-counter replays identically');
  }
}

// Cycle 7 — corner speed rhythm: a handbrake entry costs readable speed and a
// well-timed exit pays a strong, capped, settling slingshot. Synthetic wide
// tracks only (immune to daily-generator churn).
{
  const c7tr = wideTrack(400);
  // C7.1. Entry price is readable within 0.2s but never crash-like.
  const es = createSimState(); resetRun(es, c7tr, 0);
  settle(c7tr, es, 6, drive);
  const ev0 = Math.hypot(es.vx, es.vz);
  let v01 = ev0, v02 = ev0;
  for (let k = 0; k < 1.0 / DT; k++) {
    const i = simStep(es, c7tr, { steer: 0.6, drift: true }, DT);
    if (k + 1 === 6) v01 = i.spd;
    if (k + 1 === 12) v02 = i.spd;
  }
  console.log(`   [C7.1] entry ${ev0.toFixed(1)} -> ${v01.toFixed(2)}@0.1s ${v02.toFixed(2)}@0.2s`);
  ok(v01 <= ev0 - 1.0 && v01 >= ev0 - 5.0, 'C7 handbrake entry dips readably', `${ev0.toFixed(1)}->${v01.toFixed(2)}`);
  ok(v02 < ev0 - 1.5, 'C7 entry loss develops within 0.2s', `${ev0.toFixed(1)}->${v02.toFixed(2)}`);
  ok(es.driftAmt > 0.4, 'C7 entry actually engages the slide', `driftAmt=${es.driftAmt.toFixed(2)}`);
  // Scripted perfect exit: pre-steer, tap, develop, commit opposite.
  const perfectExit = (dt: number): { q: number; boost: number; grade: string; vEx: number; peak: number; at: (tt: number) => number; full: string } => {
    const s = createSimState(); resetRun(s, c7tr, 0);
    settle(c7tr, s, 6, drive);
    const inp = (t: number): StepInput => t < 0.5 ? { steer: 0.6, drift: false } : t < 0.65 ? { steer: 0.6, drift: true } : t < 2.05 ? { steer: 0.6, drift: false } : t < 3.05 ? { steer: -0.7, drift: false } : drive;
    let q = -1, boost = -1, grade = 'none', vEx = 0, peak = 0, tEx = -1;
    const trace: string[] = [];
    const N = Math.round(4.5 / dt);
    for (let k = 0; k < N; k++) {
      const tt = k * dt;
      const i = simStep(s, c7tr, inp(tt), dt);
      if (s.rhythmOut.event === 'exit' && q < 0) { q = s.rhythm.lastQuality; boost = s.rhythm.boostAccel; grade = s.rhythm.lastGrade; vEx = Math.hypot(s.vx, s.vz); tEx = tt; }
      if (q >= 0) { peak = Math.max(peak, i.spd); trace.push([tt.toFixed(3), i.spd.toFixed(3)].join(',')); }
    }
    const at = (tt: number): number => {
      const target = tEx + tt;
      for (const r of trace) { const p = r.split(','); if (parseFloat(p[0]) >= target) return parseFloat(p[1]); }
      return NaN;
    };
    return { q, boost, grade, vEx, peak, at, full: trace.join('|') };
  };
  const px = perfectExit(DT);
  console.log(`   [C7.2] exit q=${px.q.toFixed(3)} boost=${px.boost.toFixed(1)} grade=${px.grade} vEx=${px.vEx.toFixed(1)} peak=${px.peak.toFixed(2)} +0.3=${px.at(0.3).toFixed(1)} +1.5=${px.at(1.5).toFixed(1)} +2.0=${px.at(2.0).toFixed(1)}`);
  ok(px.q >= 0.7 && px.boost >= 12, 'C7 timed exit scores a strong slingshot', `q=${px.q.toFixed(2)} boost=${px.boost.toFixed(1)}`);
  ok(px.peak > 81.5 && px.peak <= 84.5, 'C7 slingshot surges inside the cap', `peak=${px.peak.toFixed(2)}`);
  ok(px.at(0.3) >= 82, 'C7 surge arrives fast', `+0.3s=${px.at(0.3).toFixed(1)}`);
  ok(px.at(1.5) <= 82.0 && px.at(2.0) <= 81.0 && px.at(2.0) >= 79.9, 'C7 overshoot settles toward grip top', `+1.5=${px.at(1.5).toFixed(1)} +2.0=${px.at(2.0).toFixed(1)}`);
  // C7.3. Legacy clean exit still pays and rebuilds quickly.
  const lg = createSimState(); resetRun(lg, c7tr, 0);
  settle(c7tr, lg, 6, drive);
  settle(c7tr, lg, 1.5, { steer: 0.6, drift: true });
  for (let k = 0; k < 2 / DT && lg.driftAmt > 0.4; k++) simStep(lg, c7tr, { steer: -0.6, drift: false }, DT);
  const lv0 = Math.hypot(lg.vx, lg.vz);
  const lgExitT = lg.exitT;
  let lv03 = lv0;
  for (let k = 0; k < 0.3 / DT; k++) lv03 = simStep(lg, c7tr, drive, DT).spd;
  ok(lgExitT >= 0.5, 'C7 clean countersteer exit earns exit grip', `exitT=${lgExitT.toFixed(2)}s`);
  ok(lv03 >= 79.5, 'C7 exit grip rebuilds to pace fast', `${lv0.toFixed(1)}->${lv03.toFixed(1)}`);
  // C7.4. Alternating-tap spam never stacks above the cap.
  const sp = createSimState(); resetRun(sp, c7tr, 0);
  settle(c7tr, sp, 6, drive);
  let spPeak = 0;
  for (let k = 0; k < 8 / DT; k++) {
    const tt = k * DT, cyc = tt % 1.0;
    spPeak = Math.max(spPeak, simStep(sp, c7tr, cyc < 0.15 ? { steer: 0.6, drift: true } : { steer: tt % 2 < 1 ? 0.6 : -0.6, drift: false }, DT).spd);
  }
  ok(spPeak <= 84.5, 'C7 spam never breaches the top-speed cap', `peak=${spPeak.toFixed(2)}`);
  // C7.5. Deterministic replay of the corner-speed script.
  ok(perfectExit(DT).full === px.full, 'C7 corner-speed script replays identically');
  // C7.6. Input-schedule equivalence: same per-second script at 1/60 vs 1/120.
  const px2 = perfectExit(DT / 2);
  ok(px2.q >= 0.7 && Math.abs(px2.q - px.q) < 0.05, 'C7 exit quality matches across rates', `${px.q.toFixed(3)} vs ${px2.q.toFixed(3)}`);
  ok(Math.abs(px2.peak - px.peak) < 0.5, 'C7 surge peak matches across rates', `${px.peak.toFixed(2)} vs ${px2.peak.toFixed(2)}`);
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
