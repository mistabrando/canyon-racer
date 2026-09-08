// track-variance.ts — Cycle 3 daily-track width/density/variance suite.
// Headless, deterministic: 60 fixed consecutive date seeds + today for the
// metrics print. Verifies the 23u road, 11-14 event density, class quotas,
// transitions, radius variance, seed diversity, clearance/runoff/flats,
// estimator band, deterministic replay, canonical fallback, and scripted
// completability (simple pursuit autopilot; cut-resistance itself is proven
// sim-side by harness section 13, which this suite does not duplicate).
declare const process: { exit(c: number): void };
import {
  AcceptedTrack, CLEAR_MIN, DRIFT_MAX, DRIFT_MIN, EVENT_MAX,
  EVENT_MIN, FIRST_MAX, FIRST_MIN, GRADE_MAX, LEN_MAX, LEN_MIN, SWEEP_MAX,
  SWEEP_MIN, TRACK_HALF_W, analyzeCenterline, acceptDailyTrack,
  buildCenterline, canonicalGrammar, checksumPoints, estimateCleanTime,
} from '../src/trackgen.js';
import {
  DT, createSimState, resetRun, simRespawn, simStep, trackFromPoints,
} from '../src/sim.js';

let tvPass = 0, tvFail = 0;
function tvOk(cond: boolean, name: string, detail = '') {
  if (cond) { tvPass++; console.log(`ok - ${name}`); }
  else { tvFail++; console.log(`FAIL - ${name} ${detail}`); }
}

function quotas(a: AcceptedTrack): string[] {
  const bad: string[] = [];
  const st = a.stats, ev = st.events;
  if (st.length < LEN_MIN || st.length > LEN_MAX) bad.push(`len=${st.length.toFixed(0)}`);
  if (ev.length < EVENT_MIN || ev.length > EVENT_MAX) bad.push(`nev=${ev.length}`);
  const drift = ev.filter((e) => e.medR >= 45 && e.medR <= 130);
  if (drift.length < DRIFT_MIN || drift.length > DRIFT_MAX) bad.push(`drift=${drift.length}`);
  const sweep = ev.filter((e) => e.medR > 130 && e.medR <= 175);
  if (sweep.length < SWEEP_MIN || sweep.length > SWEEP_MAX) bad.push(`sweep=${sweep.length}`);
  if (!ev.some((e) => e.dir === 'L') || !ev.some((e) => e.dir === 'R')) bad.push('one-sided');
  let transitions = 0;
  for (let k = 1; k < ev.length; k++) {
    if (ev[k].dir !== ev[k - 1].dir && ev[k].startS - ev[k - 1].endS <= 110) transitions++;
  }
  if (transitions < 2) bad.push(`trans=${transitions}`);
  if (!ev.some((e) => e.decreasing)) bad.push('no-decreasing');
  if (ev[0].startS < FIRST_MIN || ev[0].startS > FIRST_MAX) bad.push(`first=${ev[0].startS.toFixed(0)}`);
  if (st.clearance < CLEAR_MIN) bad.push(`clr=${st.clearance.toFixed(0)}`);
  if (st.maxGrade > GRADE_MAX) bad.push(`grade=${st.maxGrade.toFixed(2)}`);
  if (st.crestCount < 1 || st.crestCount > 2) bad.push(`crests=${st.crestCount}`);
  for (const cs of a.crestS) {
    const next = ev.find((e) => e.startS > cs);
    if (!next) {
      if (st.length - (cs + 65) < 60) { bad.push('tail-runoff'); break; }
      continue;
    }
    if (next.startS - (cs + 65) < 60) { bad.push(`runoff=${(next.startS - cs).toFixed(0)}`); break; }
    if (!(next.medR > 130)) { bad.push(`follower=${next.medR.toFixed(0)}`); break; }
  }
  const pts = a.points;
  const ss: number[] = [0];
  for (let m = 1; m < pts.length; m++) ss.push(ss[m - 1] + Math.hypot(pts[m].x - pts[m - 1].x, pts[m].z - pts[m - 1].z));
  const L = ss[ss.length - 1];
  let flatBad = 0, finBad = 0;
  for (let m = 0; m < pts.length; m++) {
    if (ss[m] < 200 && Math.abs(pts[m].y - 6) > 1e-3) flatBad++;
    if (ss[m] > L - 150 && Math.abs(pts[m].y - 7) > 1e-3) finBad++;
  }
  if (flatBad) bad.push('start-flat');
  if (finBad) bad.push('finish-flat');
  // Estimator band: near-optimal envelope pace (see track-cycle3.md for the
  // autopilot/human mapping behind the 35-50s human target).
  if (!(a.estTimeS >= 34 && a.estTimeS <= 47)) bad.push(`est=${a.estTimeS.toFixed(1)}`);
  return bad;
}

// 1. Road width.
{
  tvOk(TRACK_HALF_W >= 11 && TRACK_HALF_W <= 12, 'half width 11-12u', `halfW=${TRACK_HALF_W}`);
  tvOk(TRACK_HALF_W * 2 >= 22 && TRACK_HALF_W * 2 <= 24, 'total width 22-24u');
}

// 2. Sixty consecutive seeds meet every quota without fallback.
const days: string[] = [];
for (let d = 1; d <= 30; d++) days.push(`2026-06-${String(d).padStart(2, '0')}`);
for (let d = 1; d <= 30; d++) days.push(`2026-07-${String(d).padStart(2, '0')}`);
{
  let fallbacks = 0, worstAtt = 0;
  const sums: AcceptedTrack[] = [];
  for (const day of days) {
    const a = acceptDailyTrack(day);
    sums.push(a);
    const bad = quotas(a);
    tvOk(bad.length === 0, `quotas ${day}`, bad.join(',') || `att=${a.attempt}`);
    if (a.fallback) fallbacks++;
    else tvOk(a.attempt < 40, `accepted in-budget ${day}`, `att=${a.attempt}`);
    worstAtt = Math.max(worstAtt, a.attempt);
    const again = acceptDailyTrack(day);
    tvOk(again.checksum === a.checksum, `replay stable ${day}`);
  }
  tvOk(fallbacks <= 2, 'rare fallback', `fb=${fallbacks}/60 worstAtt=${worstAtt}`);
  const uniq = new Set(sums.map((a) => a.checksum));
  tvOk(uniq.size >= 58, 'seed diversity (checksums)', `uniq=${uniq.size}/60`);
  // 3. Radius distribution + sequence variance across seeds.
  const allR: number[] = [];
  for (const a of sums) for (const e of a.stats.events) allR.push(e.medR);
  const mean = allR.reduce((x, v) => x + v, 0) / allR.length;
  const sd = Math.sqrt(allR.reduce((x, v) => x + (v - mean) * (v - mean), 0) / allR.length);
  tvOk(Math.min(...allR) <= 62, 'tight challenge present', `minR=${Math.min(...allR).toFixed(0)}`);
  tvOk(Math.max(...allR) >= 170, 'fast sweepers/kinks present', `maxR=${Math.max(...allR).toFixed(0)}`);
  tvOk(sd >= 22, 'radius spread across classes', `sd=${sd.toFixed(1)}`);
  const dirs = new Set(sums.map((a) => a.stats.events.map((e) => e.dir).join('')));
  tvOk(dirs.size >= 15, 'event order/direction varies', `patterns=${dirs.size}`);
  const elevRange = sums.map((a) => a.stats.elevMax - a.stats.elevMin);
  tvOk(Math.min(...elevRange) >= 4, 'elevation voice everywhere', `minRange=${Math.min(...elevRange).toFixed(1)}`);
  tvOk(sums.every((a) => (a.landmarkS?.length ?? 0) === 3), 'landmark stations exported');
}

// 4. Drift corners have real arc length (three-line choice, no trivial cuts).
{
  let short = 0, total = 0, tight = 0;
  for (const day of days) {
    const a = acceptDailyTrack(day);
    for (const e of a.stats.events) {
      if (e.medR >= 45 && e.medR <= 130) {
        total++;
        // The one decreasing challenge is exempt from the long-arc floor.
        if (e.decreasing && e.medR < 62) { tight++; continue; }
        if (e.endS - e.startS < 140) short++;
      }
    }
  }
  tvOk(total > 300 && short === 0, 'drift arcs fit multiple lines', `n=${total} short=${short}`);
  tvOk(tight >= 55 && tight <= 70, 'one tight challenge per track', `tight=${tight}/60`);
}

// 5. Canonical fallback satisfies the same quotas.
{
  const built = buildCenterline(canonicalGrammar(), 0);
  const st = analyzeCenterline(built.points);
  const a: AcceptedTrack = {
    points: built.points, stats: st, attempt: 40, fallback: true,
    crestS: built.crestS, estTimeS: estimateCleanTime(built.points),
    checksum: checksumPoints(built.points),
  };
  tvOk(quotas(a).length === 0, 'canonical satisfies quotas', quotas(a).join(','));
}

// 6. Scripted completability: pursuit autopilot finishes today + 3 seeds.
function autopilot(day: string): { t: number; finished: boolean } {
  const a = acceptDailyTrack(day);
  const tr = trackFromPoints(a.points, TRACK_HALF_W);
  const s = createSimState();
  resetRun(s, tr, 0);
  let noProg = 0, lastS = 0;
  const cap = Math.floor(90 / DT);
  for (let k = 0; k < cap && !s.finished; k++) {
    const spd = Math.hypot(s.vx, s.vz);
    const L = 12 + spd * 0.5;
    let li = s.lastIdx, acc = 0;
    while (li < tr.n - 1 && acc < L) {
      acc += Math.hypot(tr.x[li + 1] - tr.x[li], tr.z[li + 1] - tr.z[li]);
      li++;
    }
    const dx = tr.x[li] - s.px, dz = tr.z[li] - s.pz;
    let ang = Math.atan2(dx, dz) - s.heading;
    while (ang > Math.PI) ang -= 2 * Math.PI;
    while (ang < -Math.PI) ang += 2 * Math.PI;
    const pursuit = Math.max(-1, Math.min(1, -ang * 2.5));
    let steer = pursuit, drift = false;
    if (spd > 45) {
      let ahead = s.lastIdx, d = 0, minR = Infinity, dir = 0;
      while (ahead < tr.n - 4 && d < 200) {
        d += Math.hypot(tr.x[ahead + 1] - tr.x[ahead], tr.z[ahead + 1] - tr.z[ahead]);
        const h1 = Math.atan2(tr.x[ahead + 1] - tr.x[ahead], tr.z[ahead + 1] - tr.z[ahead]);
        const h2 = Math.atan2(tr.x[ahead + 3] - tr.x[ahead + 2], tr.z[ahead + 3] - tr.z[ahead + 2]);
        let dh = h2 - h1;
        while (dh > Math.PI) dh -= 2 * Math.PI;
        while (dh < -Math.PI) dh += 2 * Math.PI;
        if (Math.abs(dh) > 1e-4) {
          const r = 4 / Math.abs(dh);
          if (r < minR) { minR = r; dir = Math.sign(dh); }
        }
        ahead++;
      }
      const vt = minR === Infinity ? 80 : minR > 140 ? 80 : minR > 75 ? Math.sqrt(48 * minR) : Math.sqrt(95 * minR) * 0.95;
      if (spd > Math.min(74, vt) + 2 && spd > 32) {
        drift = true;
        steer = Math.max(-1, Math.min(1, pursuit * 1.5 + (dir !== 0 ? -dir * 0.4 : 0)));
        if (Math.abs(steer) < 0.2) steer = dir !== 0 ? -dir * 0.3 : 0.3;
      }
    }
    simStep(s, tr, { steer, drift }, DT);
    if (k % 180 === 0) {
      if (s.lastIdx - lastS < 4 && spd < 8) noProg++; else noProg = 0;
      lastS = s.lastIdx;
      if (noProg >= 2) { simRespawn(s); noProg = 0; }
    }
  }
  return { t: s.raceMs / 1000, finished: s.finished };
}
{
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  for (const day of [today, '2026-06-07', '2026-07-04', '2026-07-28']) {
    const r = autopilot(day);
    tvOk(r.finished && r.t < 70, `autopilot completes ${day}`, `${r.t.toFixed(1)}s`);
  }
}

// 7. Metrics print: today + distribution across the 60 seeds.
{
  const lens = days.map((d) => acceptDailyTrack(d).stats.length);
  const ests = days.map((d) => acceptDailyTrack(d).estTimeS);
  const nevs = days.map((d) => acceptDailyTrack(d).stats.events.length);
  const qs = (xs: number[]): string => {
    const q = xs.slice().sort((a, b) => a - b);
    return `min=${q[0].toFixed(1)} med=${q[Math.floor(q.length / 2)].toFixed(1)} max=${q[q.length - 1].toFixed(1)}`;
  };
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const a = acceptDailyTrack(today);
  const ev = a.stats.events;
  console.log(`TODAY ${today} halfW=${TRACK_HALF_W} len=${a.stats.length.toFixed(0)} est=${a.estTimeS.toFixed(1)}s nev=${ev.length} drift=${ev.filter((e) => e.medR >= 45 && e.medR <= 130).length} sweep=${ev.filter((e) => e.medR > 130 && e.medR <= 175).length} clr=${a.stats.clearance.toFixed(0)} att=${a.attempt} fb=${a.fallback}`);
  console.log(`DIST60 len[${qs(lens)}] est[${qs(ests)}] nev=[${Math.min(...nevs)}..${Math.max(...nevs)}]`);
}

console.log(`\n${tvPass} passed, ${tvFail} failed`);
if (tvFail > 0) process.exit(1);
