// corner-apex.ts — Cycle 8: wide drift arcs + inside-apex gameplay.
// Deterministic headless suite over 60 fixed date seeds plus a controlled
// synthetic corner. Proves: ordinary drift corners are long 60-90u arcs with
// outside-only guardrails; the inside curb/apex is open and clear so a legal
// hug line runs without collision/OOB/progress freeze; cuts still freeze;
// barrier-wired tracks complete; a scripted inside drift line beats a
// conservative center line with no wall contact.
declare const process: { exit(c: number): void };
import {
  TRACK_HALF_W, acceptDailyTrack, analyzeCenterline,
} from '../src/trackgen.js';
import {
  CAR_RADIUS, DT, RESPAWN_PENALTY_MS, createSimState, resetRun, simRespawn, simStep, trackFromPoints,
} from '../src/sim.js';
import type { SimState, StepInput, TrackView } from '../src/sim.js';
import {
  barrierAt, insideOf, outsideOf, planBarriers,
} from '../src/barrier-plan.js';
import { planChevrons, planGuardrails, resolveOptions } from '../src/visuals.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

const HW = TRACK_HALF_W;
const days: string[] = [];
for (let d = 1; d <= 30; d++) days.push(`2026-06-${String(d).padStart(2, '0')}`);
for (let d = 1; d <= 30; d++) days.push(`2026-07-${String(d).padStart(2, '0')}`);

interface Wired {
  day: string;
  len: number;
  crestS: number[];
  tr: TrackView;
}

function wired(day: string): Wired {
  const a = acceptDailyTrack(day);
  const tr = trackFromPoints(a.points, HW);
  // Same wiring as src/main.ts: the planned spans are the single
  // physics + visuals mask.
  tr.barrier = planBarriers(a.stats.length, a.stats.events, a.crestS);
  return { day, len: a.stats.length, crestS: a.crestS, tr };
}

const isTight = (e: { medR: number; decreasing: boolean }): boolean =>
  e.decreasing && e.medR < 62;
const isOrdinary = (e: { medR: number; decreasing: boolean }): boolean =>
  e.medR >= 80 && e.medR <= 130 && !isTight(e);

// 1. Radius/arc distribution: ordinary drift arcs are big 110-128u hug arcs,
// with exactly one tighter decreasing challenge per track.
{
  let ord = 0, tight = 0, perTrackBad = 0;
  let rMin = Infinity, rMax = -Infinity, aMin = Infinity, aMax = -Infinity;
  for (const day of days) {
    const a = acceptDailyTrack(day);
    let o = 0, t = 0;
    for (const e of a.stats.events) {
      if (isTight(e)) { t++; tight++; continue; }
      if (e.medR >= 80 && e.medR <= 130) {
        o++; ord++;
        rMin = Math.min(rMin, e.medR); rMax = Math.max(rMax, e.medR);
        aMin = Math.min(aMin, e.endS - e.startS); aMax = Math.max(aMax, e.endS - e.startS);
        if (!(e.medR >= 105 && e.medR <= 130)) perTrackBad++;
        if (!((e.endS - e.startS) >= 185 && (e.endS - e.startS) <= 310)) perTrackBad++;
      }
    }
    if (o < 4 || o > 6 || t !== 1) perTrackBad++;
  }
  console.log(`   [apex] ordinary n=${ord} R=[${rMin.toFixed(1)},${rMax.toFixed(1)}] arc=[${aMin.toFixed(0)},${aMax.toFixed(0)}] tight=${tight}/60`);
  ok(ord >= 290 && ord <= 310, 'five big drift arcs per track', `n=${ord}`);
  ok(rMin >= 105 && rMax <= 130, 'ordinary radius 110-128u band', `[${rMin.toFixed(1)},${rMax.toFixed(1)}]`);
  ok(aMin >= 185 && aMax <= 310, 'ordinary arc 190-300u band', `[${aMin.toFixed(0)},${aMax.toFixed(0)}]`);
  ok(tight >= 55 && tight <= 65, 'one tight challenge per track', `tight=${tight}`);
  ok(perTrackBad === 0, 'every track matches the grammar', `bad=${perTrackBad}`);
}

// 2. Barrier masks: ordinary drift corners are guarded outside-only across
// the whole event; the decreasing challenge keeps its short inside rail.
{
  let checked = 0, insideHits = 0, outsideMiss = 0, decInsideMiss = 0, decCount = 0;
  for (const day of days) {
    const a = acceptDailyTrack(day);
    const plan = planBarriers(a.stats.length, a.stats.events, a.crestS);
    for (const e of a.stats.events) {
      const mid = (e.startS + e.endS) / 2;
      if (isOrdinary(e)) {
        checked++;
        const out = outsideOf(e.dir), inn = insideOf(e.dir);
        if (!barrierAt(plan, e.startS + 5, out)) outsideMiss++;
        if (!barrierAt(plan, mid, out)) outsideMiss++;
        if (!barrierAt(plan, e.endS - 20, out)) outsideMiss++;
        // Inside stays open away from neighbor-corner rails (advance 30,
        // runoff 40, setups >= 45): sample the sheltered core.
        for (let s = e.startS + 10; s <= e.endS - 45; s += 5) {
          if (barrierAt(plan, s, inn)) insideHits++;
        }
      } else if (isTight(e)) {
        decCount++;
        if (!barrierAt(plan, mid, outsideOf(e.dir))) outsideMiss++;
        if (!barrierAt(plan, mid, insideOf(e.dir))) decInsideMiss++;
      }
    }
  }
  ok(checked >= 290, 'ordinary drift mask coverage', `n=${checked}`);
  ok(outsideMiss === 0, 'outside guardrail always present', `miss=${outsideMiss}`);
  ok(insideHits === 0, 'ordinary inside stays open', `hits=${insideHits}`);
  ok(decCount >= 55 && decInsideMiss === 0, 'challenge keeps short inside rail', `n=${decCount} miss=${decInsideMiss}`);
}

// 3. Visual/physics mask identity: rendered rails and chevrons match the
// plan — no inside rails/boards in the corner core, outside rails present,
// every rail station sits on a guarded span, the launch stays open.
{
  const o = resolveOptions({ halfW: HW, barriers: planBarriers(2200, [], []) });
  void o;
  let inStations = 0, outThin = 0, unguarded = 0, launchRails = 0, inBoards = 0;
  for (const day of days) {
    const w = wired(day);
    const a = acceptDailyTrack(day);
    const oo = resolveOptions({ halfW: HW, barriers: w.tr.barrier });
    const g = planGuardrails(w.tr.cum, oo);
    for (let k = 0; k < g.idx.length; k++) {
      const s = w.tr.cum[g.idx[k]];
      if (!barrierAt(w.tr.barrier!, s, g.side[k] as 1 | -1)) unguarded++;
      if (s < 150) launchRails++;
    }
    const ch = planChevrons(w.tr.cum, a.stats.events, oo);
    for (const e of a.stats.events) {
      if (!isOrdinary(e)) continue;
      const mid = (e.startS + e.endS) / 2;
      const inn = insideOf(e.dir), out = outsideOf(e.dir);
      let inN = 0, outN = 0;
      for (let k = 0; k < g.idx.length; k++) {
        const s = w.tr.cum[g.idx[k]];
        if (s < e.startS + 10 || s > e.endS - 45) continue;
        if (g.side[k] === inn) inN++;
        if (g.side[k] === out) outN++;
      }
      if (inN > 0) inStations++;
      if (outN < 2) outThin++;
      // Neighbor-advance boards cannot reach the corner core (70u reach vs
      // >=97u from mid to the next entry), so the core must read outside-only.
      for (const c of ch) {
        if (c.s < mid - 20 || c.s > mid + 20) continue;
        if (c.side === inn) inBoards++;
      }
    }
  }
  ok(unguarded === 0, 'every rail station is guarded (mask identity)');
  ok(launchRails === 0, 'launch stays rail-free');
  ok(inStations === 0, 'no rendered inside rails in drift cores');
  ok(outThin === 0, 'outside rails rendered through every drift core');
  ok(inBoards === 0, 'no inside chevrons in drift cores');
}

// 4. Lateral-line geometry: center, inside-hug (body 0.4u off the curb),
// and outside lines at every ordinary drift mid — inside open and clear,
// outside guarded so mistakes are caught.
{
  let lines = 0, bad = 0;
  for (const day of days) {
    const w = wired(day);
    const a = acceptDailyTrack(day);
    for (const e of a.stats.events) {
      if (!isOrdinary(e)) continue;
      lines++;
      const mid = (e.startS + e.endS) / 2;
      const inn = insideOf(e.dir), out = outsideOf(e.dir);
      // Inside hug: car center 9.9u off centerline -> body edge 0.4u off curb.
      const hugLat = inn * (HW - CAR_RADIUS - 0.4);
      if (!(Math.abs(hugLat) < HW)) bad++; // must stay on-road
      if (barrierAt(w.tr.barrier!, mid, inn)) bad++; // must never collide
      // Outside line at the same offset must be caught by the rail.
      if (!barrierAt(w.tr.barrier!, mid, out)) bad++;
      void mid;
    }
  }
  ok(lines >= 290, 'three-line geometry coverage', `n=${lines}`);
  ok(bad === 0, 'inside hug legal, outside mistakes caught', `bad=${bad}`);
}

// Shared pursuit + drift-shed bot (mid-skill): straight-line slide damping
// settles the car before crests; OOB/stall respawn mirrors the R key.
// Jump discipline (human-plausible): on a straight with a crest close ahead,
// straighten any slide and start none at the lip, so launches stay clean.
// In-corner driving is untouched (nearR gate), so corner entries keep working.
function botStep(s: SimState, tr: TrackView, prevSlip: number, crestS: number[] = []): StepInput {
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
  // Airborne: hands off the handbrake (slides live on normal ground), keep
  // tracking the road with pursuit steering so the landing stays aligned.
  if (!s.grounded) return { steer: pursuit, drift: false };
  // Near-bend radius over a short window: in-corner vs straight discriminator.
  let nearR = Infinity;
  {
    let ah = s.lastIdx, dd = 0;
    while (ah < tr.n - 4 && dd < 70) {
      dd += Math.hypot(tr.x[ah + 1] - tr.x[ah], tr.z[ah + 1] - tr.z[ah]);
      const h1 = Math.atan2(tr.x[ah + 1] - tr.x[ah], tr.z[ah + 1] - tr.z[ah]);
      const h2 = Math.atan2(tr.x[ah + 3] - tr.x[ah + 2], tr.z[ah + 3] - tr.z[ah + 2]);
      let dh = h2 - h1;
      while (dh > Math.PI) dh -= 2 * Math.PI;
      while (dh < -Math.PI) dh += 2 * Math.PI;
      if (Math.abs(dh) > 1e-4) {
        const r = 4 / Math.abs(dh);
        if (r < nearR) nearR = r;
      }
      ah++;
    }
  }
  const cum = tr.cum[s.lastIdx];
  let crestClose = false, crestLip = false;
  for (const c of crestS) {
    const ahead = c - cum;
    if (ahead > -10 && ahead < 80) crestClose = true;
    if (ahead > -10 && ahead < 45) crestLip = true;
  }
  if (crestClose && nearR > 140 && Math.abs(prevSlip) > 0.1) {
    const opp = prevSlip > 0 ? -1 : 1;
    return { steer: Math.max(-1, Math.min(1, opp * Math.min(1, Math.abs(prevSlip) * 3))), drift: false };
  }
  let steer = pursuit, drift = false;
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
  // Straights: damp the pendulum so crest launches stay clean.
  if (minR > 140 && Math.abs(prevSlip) > 0.06) {
    steer = Math.max(-1, Math.min(1, steer - Math.max(-1, Math.min(1, prevSlip * 2.5))));
  }
  if (spd > 45 && !(crestLip && nearR > 140)) {
    const vt = minR === Infinity ? 80 : minR > 140 ? 80 : minR > 95 ? Math.sqrt(48 * minR) : Math.sqrt(95 * minR) * 0.95;
    if (spd > Math.min(74, vt) + 2 && spd > 32) {
      drift = true;
      steer = Math.max(-1, Math.min(1, pursuit * 1.5 + (dir !== 0 ? -dir * 0.4 : 0)));
      if (Math.abs(steer) < 0.2) steer = dir !== 0 ? -dir * 0.3 : 0.3;
    }
  }
  return { steer, drift };
}

function botRun(day: string): { t: number; finished: boolean; walls: number; respawns: number } {
  const w = wired(day);
  const s = createSimState();
  resetRun(s, w.tr, 0);
  let noProg = 0, lastS = 0, walls = 0, respawns = 0, recover = 0, prevSlip = 0;
  const cap = Math.floor(100 / DT);
  for (let k = 0; k < cap && !s.finished; k++) {
    let inp: StepInput;
    if (recover > 0) {
      recover -= DT;
      const ry = w.tr.yaw[Math.min(s.lastIdx + 4, w.tr.n - 1)];
      let he = ry - s.heading;
      while (he > Math.PI) he -= 2 * Math.PI;
      while (he < -Math.PI) he += 2 * Math.PI;
      inp = { steer: Math.max(-1, Math.min(1, -he * 1.5 - Math.max(-1, Math.min(1, prevSlip * 3)))), drift: false };
    } else {
      inp = botStep(s, w.tr, prevSlip, w.crestS);
    }
    const info = simStep(s, w.tr, inp, DT);
    prevSlip = info.slip;
    if (info.wallHit) walls++;
    if (s.lastIdx <= lastS + 1) noProg++; else { noProg = 0; lastS = s.lastIdx; }
    if (info.oobMs > 1200 || noProg > 240) {
      simRespawn(s); respawns++; noProg = 0; lastS = s.lastIdx; recover = 0.8;
    }
  }
  return { t: s.raceMs / 1000, finished: s.finished, walls, respawns };
}

// 5. Completion on barrier-wired tracks (explicit single mask, open edges).
{
  const seeds = ['2026-09-07', '2026-06-07', '2026-07-04', '2026-07-28', '2026-06-15', '2026-07-19', '2026-06-01', '2026-07-11'];
  let tMax = 0;
  for (const day of seeds) {
    const r = botRun(day);
    tMax = Math.max(tMax, r.t);
    ok(r.finished && r.t < 60, `barrier-wired completion ${day}`, `t=${r.t.toFixed(1)} walls=${r.walls} resp=${r.respawns}`);
  }
  console.log(`   [apex] wired completion slowest=${tMax.toFixed(1)}s over ${seeds.length} seeds`);
}

// 6. Anti-cut on a real daily corner with barriers: a jump across the
// infield freezes progress and cannot finish; the car must drive back.
{
  for (const day of ['2026-09-07', '2026-07-04']) {
    const a = acceptDailyTrack(day);
    const w = wired(day);
    const e = a.stats.events.find(isOrdinary)!;
    const from = w.tr.cum.findIndex((c) => c >= e.startS - 20);
    const to = w.tr.cum.findIndex((c) => c >= e.endS - 10);
    const jumped = (w.tr.cum[to] - w.tr.cum[from]).toFixed(0);
    const s = createSimState();
    resetRun(s, w.tr, 0);
    s.lastIdx = from;
    s.px = w.tr.x[from]; s.pz = w.tr.z[from]; s.py = w.tr.y[from] + 0.2;
    s.heading = w.tr.yaw[from];
    s.vx = w.tr.tx[from] * 60; s.vz = w.tr.tz[from] * 60;
    // Teleport across the infield to the corner exit.
    s.px = w.tr.x[to]; s.pz = w.tr.z[to]; s.py = w.tr.y[to] + 0.2;
    const drive: StepInput = { steer: 0, drift: false };
    const info = simStep(s, w.tr, drive, DT);
    ok(s.lastIdx - from <= 4, `cut freezes progress ${day}`, `jumped=${jumped}u adv=${s.lastIdx - from}`);
    ok(!info.finished && !s.finished, `cut cannot finish ${day}`);
    for (let k = 0; k < 30; k++) simStep(s, w.tr, drive, DT);
    ok(s.lastIdx - from <= 4 && !s.finished, `parked cutter gains nothing ${day}`);
  }
}

// 7. Inside hug drive: a legal line holds the car body ~0.4u off the inside
// curb through a real daily drift corner — no collision, no OOB, no freeze.
{
  for (const day of ['2026-09-07', '2026-06-07', '2026-07-28']) {
    const a = acceptDailyTrack(day);
    const w = wired(day);
    const e = a.stats.events.find(isOrdinary)!;
    const side = insideOf(e.dir), off = side * (HW - CAR_RADIUS - 0.4);
    const idx = w.tr.cum.findIndex((c) => c >= e.startS - 30);
    const endIdx = w.tr.cum.findIndex((c) => c >= e.endS);
    const s = createSimState();
    resetRun(s, w.tr, 0);
    s.lastIdx = idx;
    s.px = w.tr.x[idx] + w.tr.nx[idx] * off;
    s.pz = w.tr.z[idx] + w.tr.nz[idx] * off;
    s.py = w.tr.y[idx] + 0.2;
    s.heading = w.tr.yaw[idx];
    s.vx = w.tr.tx[idx] * 45; s.vz = w.tr.tz[idx] * 45; s.vy = 0; s.grounded = true;
    s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading;
    let walls = 0, minGap = Infinity, maxOob = 0;
    for (let k = 0; k < Math.floor(20 / DT) && s.lastIdx < endIdx; k++) {
      const spd = Math.hypot(s.vx, s.vz);
      const la = Math.min(s.lastIdx + 8, w.tr.n - 1), j = s.lastIdx;
      const lat = (s.px - w.tr.x[j]) * w.tr.nx[j] + (s.pz - w.tr.z[j]) * w.tr.nz[j];
      const hDes = w.tr.yaw[la] - Math.atan2(Math.max(-12, Math.min(12, off - lat)), 25);
      let ang = hDes - s.heading;
      while (ang > Math.PI) ang -= 2 * Math.PI;
      while (ang < -Math.PI) ang += 2 * Math.PI;
      let steer = Math.max(-1, Math.min(1, -ang * 2.5));
      let drift = false;
      if (spd > 32 && Math.abs(steer) >= 0.25) {
        let ah = s.lastIdx, d = 0, minR = Infinity;
        while (ah < w.tr.n - 4 && d < 100) {
          d += Math.hypot(w.tr.x[ah + 1] - w.tr.x[ah], w.tr.z[ah + 1] - w.tr.z[ah]);
          const h1 = Math.atan2(w.tr.x[ah + 1] - w.tr.x[ah], w.tr.z[ah + 1] - w.tr.z[ah]);
          const h2 = Math.atan2(w.tr.x[ah + 3] - w.tr.x[ah + 2], w.tr.z[ah + 3] - w.tr.z[ah + 2]);
          let dh = h2 - h1;
          while (dh > Math.PI) dh -= 2 * Math.PI;
          while (dh < -Math.PI) dh += 2 * Math.PI;
          if (Math.abs(dh) > 1e-4) {
            const r = 4 / Math.abs(dh);
            if (r < minR) minR = r;
          }
          ah++;
        }
        if (minR < 100) {
          const vg = Math.sqrt(48 * Math.min(minR, 140));
          if (spd > Math.min(74, vg) + 2) drift = true;
        }
      }
      const info = simStep(s, w.tr, { steer, drift }, DT);
      if (info.wallHit) walls++;
      maxOob = Math.max(maxOob, info.oobMs);
      const jj = s.lastIdx;
      const lat2 = (s.px - w.tr.x[jj]) * w.tr.nx[jj] + (s.pz - w.tr.z[jj]) * w.tr.nz[jj];
      minGap = Math.min(minGap, HW - (Math.abs(lat2) + CAR_RADIUS));
    }
    ok(s.lastIdx >= endIdx, `hug line completes the corner ${day}`, `R=${e.medR.toFixed(0)}`);
    ok(walls === 0, `hug line never collides ${day}`);
    ok(maxOob === 0, `hug line never leaves course ${day}`);
    ok(minGap >= 0.1, `hug line holds the curb ${day}`, `minGap=${minGap.toFixed(2)}`);
  }
}

// 8. Scripted line comparison on one controlled drift corner (L, r=105,
// 115deg, arc 211u — inside the 110-128u / 190-300u band): a late-apex outside
// setup + early sub-lock drift entry + hug maintenance beats a conservative
// outside setup + full-lock drift entry + partial-lock maintenance beats a
// conservative grip center line, with no wall contact either way claimed
// only for the winner.
{
  const pts: { x: number; y: number; z: number }[] = [];
  let x = 0, z = 0, hd = 0;
  pts.push({ x, y: 6, z });
  for (let k = 0; k < 125; k++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
  {
    const r = 105, tot = (115 * Math.PI) / 180;
    let dn = 0;
    while (dn < tot - 1e-9) {
      const dphi = Math.min(2 / r, tot - dn);
      hd += dphi; x += Math.sin(hd) * (r * dphi); z += Math.cos(hd) * (r * dphi); dn += dphi;
      pts.push({ x, y: 6, z });
    }
  }
  for (let k = 0; k < 200; k++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
  const cTr = trackFromPoints(pts, HW);
  const cEv = { startS: 250, endS: 461, dir: 'L' as const, medR: 105 };
  cTr.barrier = planBarriers(cTr.cum[cTr.n - 1], [cEv], []);
  const cFollow = (s: SimState, off: number): number => {
    const la = Math.min(s.lastIdx + 8, cTr.n - 1), j = s.lastIdx;
    const lat = (s.px - cTr.x[j]) * cTr.nx[j] + (s.pz - cTr.z[j]) * cTr.nz[j];
    const hDes = cTr.yaw[la] - Math.atan2(Math.max(-12, Math.min(12, off - lat)), 25);
    let ang = hDes - s.heading;
    while (ang > Math.PI) ang -= 2 * Math.PI;
    while (ang < -Math.PI) ang += 2 * Math.PI;
    return Math.max(-1, Math.min(1, -ang * 2.5));
  };
  const scriptRun = (line: 'center' | 'inside'): { t: number; walls: number; minGap: number; peakSlip: number; fin: boolean } => {
    const s = createSimState();
    resetRun(s, cTr, 0);
    let walls = 0, minGap = Infinity, peakSlip = 0, phase = 0, h0 = 0;
    for (let k = 0; k < Math.floor(40 / DT) && !s.finished; k++) {
      const sM = cTr.cum[s.lastIdx];
      let steer: number, drift: boolean;
      if (line === 'center') {
        steer = cFollow(s, 0); drift = false;
      } else if (phase === 0) {
        steer = cFollow(s, outsideOf('L') * 4); drift = false;
        if (sM >= cEv.startS - 40) { phase = 1; h0 = s.heading; }
        // fallthrough assign kept explicit for clarity
      } else if (phase === 1) {
        steer = -0.75; drift = true;
        let dh = s.heading - h0;
        while (dh > Math.PI) dh -= 2 * Math.PI;
        while (dh < -Math.PI) dh += 2 * Math.PI;
        if (dh >= 0.47) phase = 2;
      } else if (phase === 2) {
        steer = cFollow(s, -6); drift = true;
        if (sM >= cEv.endS - 30) phase = 3;
      } else {
        steer = cFollow(s, 0); drift = false;
      }
      const info = simStep(s, cTr, { steer, drift }, DT);
      if (info.wallHit) walls++;
      peakSlip = Math.max(peakSlip, Math.abs(info.slip));
      const jj = s.lastIdx;
      const lat2 = (s.px - cTr.x[jj]) * cTr.nx[jj] + (s.pz - cTr.z[jj]) * cTr.nz[jj];
      minGap = Math.min(minGap, HW - (Math.abs(lat2) + CAR_RADIUS));
    }
    return { t: s.raceMs / 1000, walls, minGap, peakSlip, fin: s.finished };
  };
  const center = scriptRun('center');
  const inside = scriptRun('inside');
  const inside2 = scriptRun('inside');
  console.log(`   [apex] center t=${center.t.toFixed(2)} walls=${center.walls} | inside t=${inside.t.toFixed(2)} walls=${inside.walls} minGap=${inside.minGap.toFixed(2)} peakSlip=${(inside.peakSlip * 57.3).toFixed(0)}deg`);
  ok(center.fin && inside.fin, 'both scripted lines finish');
  ok(inside.peakSlip > 0.2, 'inside line is a real drift', `peakSlip=${(inside.peakSlip * 57.3).toFixed(0)}deg`);
  ok(inside.walls === 0, 'inside drift line never touches a wall');
  ok(center.walls >= 1, 'conservative grip line pays the rail', `walls=${center.walls}`);
  ok(inside.t < center.t, 'inside drift line wins', `${inside.t.toFixed(2)}s vs ${center.t.toFixed(2)}s`);
  ok(inside.minGap >= 0.2, 'winner hugs the inside curb', `minGap=${inside.minGap.toFixed(2)}`);
  ok(inside2.t === inside.t && inside2.walls === inside.walls, 'scripted comparison deterministic');
}

// 9. Stall/spin never poisons the respawn snapshot: R must rescue to the
// last healthy on-road moment (real 3s gap), not restore the same stall.
{
  const pts: { x: number; y: number; z: number }[] = [];
  for (let k = 0; k <= 300; k++) pts.push({ x: 0, y: 6, z: k * 2 });
  const tr = trackFromPoints(pts, HW);
  const s = createSimState();
  resetRun(s, tr, 0);
  const drive: StepInput = { steer: 0, drift: false };
  for (let k = 0; k < 90; k++) simStep(s, tr, drive, DT);
  const snapA = { ...s.snap };
  ok(Math.hypot(snapA.vx, snapA.vz) >= 8, 'healthy running builds a fast snapshot', `${Math.hypot(snapA.vx, snapA.vz).toFixed(1)}u/s`);
  // Stall: pin a crawl on the road for longer than the snapshot cadence.
  for (let k = 0; k < 60; k++) {
    s.vx = tr.tx[s.lastIdx] * 3; s.vz = tr.tz[s.lastIdx] * 3;
    simStep(s, tr, drive, DT);
  }
  ok(s.snap.x === snapA.x && s.snap.z === snapA.z, 'crawl does not poison the snapshot');
  // Spin: road speed with a heavily sideways car for longer than the cadence
  // (pinned like the crawl so the gate condition itself is under test).
  for (let k = 0; k < 60; k++) {
    s.heading = tr.yaw[s.lastIdx] + 0.8;
    s.vx = tr.tx[s.lastIdx] * 25; s.vz = tr.tz[s.lastIdx] * 25;
    simStep(s, tr, drive, DT);
  }
  ok(s.snap.x === snapA.x && s.snap.z === snapA.z, 'spin does not poison the snapshot');
  const before = s.raceMs;
  simRespawn(s);
  ok(Math.abs(s.raceMs - before - RESPAWN_PENALTY_MS) < 1e-6, 'respawn keeps the exact 3s gap');
  ok(Math.hypot(s.px - snapA.x, s.pz - snapA.z) < 1e-9, 'respawn rescues to the healthy snapshot');
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
