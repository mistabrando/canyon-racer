// trails-bounds.ts — Cycle 5: drift-trail scaling + environment exclusion.
// Headless, deterministic, plain node. Covers:
//  - trail intensity at 0/low/medium/high drift (from smoothed drift amount +
//    slip angle, not the boolean), monotonic width/opacity/density/dust,
//  - smooth enter/exit transitions (slew-rate bounded, no popping),
//  - preallocated-ring identity (no per-frame allocation, buffer stable),
//  - rotated/scaled mesh bounds (yaw swaps axes, bigger scale pushes out),
//  - corridor audit across desktop/mobile quality and 30 date seeds + today,
//  - today's visible-intrusion regression (min clearance >= 0).
declare const process: { exit(c: number): void };
import {
  DustRing, TRAIL, trailTarget, trailSmooth, trailWidth, trailLength,
  trailShade, trailSpawnEvery, dustBurst, dustSpread,
} from '../src/visuals.js';
import type { TrackData } from '../src/visuals.js';
import {
  CORRIDOR, corridorNeed, footprintExtent, wallExtent, mesaExtent,
  archExtent, scrubExtent, mesaDepth, auditCorridor,
  planWalls, planMesas, planArches, planScrub,
  resolveEnvOptions, countEnvInstances, envWithinBudget,
} from '../src/environment.js';
import { acceptDailyTrack, arcLengths, TRACK_HALF_W } from '../src/trackgen.js';
import { trackFromPoints } from '../src/sim.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

// ---------- trail intensity ----------
const DEG = Math.PI / 180;
{
  ok(trailTarget(0, 0, 0, true, false) === 0, 'trail zero at rest');
  ok(trailTarget(0.9, 25 * DEG, 70, false, true) === 0, 'trail zero airborne');
  ok(trailTarget(0.9, 25 * DEG, 5, true, true) === 0, 'trail zero at crawl speed');
  ok(trailTarget(0.1, 20 * DEG, 60, true, true) === 0, 'trail zero below mix gate');
  const low = trailTarget(0.45, 10 * DEG, 30, true, true);
  const med = trailTarget(0.75, 17 * DEG, 60, true, true);
  const high = trailTarget(1, 28 * DEG, 75, true, true);
  ok(low > 0 && low < 0.3, 'low drift faint', `low=${low.toFixed(3)}`);
  ok(med >= 0.3 && med < 0.75, 'medium drift mid', `med=${med.toFixed(3)}`);
  ok(high >= 0.75, 'committed drift strong', `high=${high.toFixed(3)}`);
  ok(low < med && med < high, 'intensity monotonic in drift amount');
  // Same mix, more slip => stronger marks (slip angle matters, not boolean).
  const a = trailTarget(0.8, 8 * DEG, 60, true, true);
  const b = trailTarget(0.8, 24 * DEG, 60, true, true);
  ok(b > a + 0.1, 'slip angle scales intensity', `a=${a.toFixed(3)} b=${b.toFixed(3)}`);
}

// ---------- width / shade / cadence / dust monotonicity ----------
{
  ok(trailWidth(0) < trailWidth(0.5) && trailWidth(0.5) < trailWidth(1), 'width grows with intensity');
  ok(trailWidth(0) >= 0.16 - 1e-9 && trailWidth(1) <= 0.45 + 1e-9, 'width in range (subtle)', `w=${trailWidth(0)}..${trailWidth(1)}`);
  ok(trailLength(0) < trailLength(1), 'length grows with intensity');
  ok(trailShade(0) < trailShade(0.5) && trailShade(0.5) < trailShade(1), 'shade darkens with intensity');
  ok(trailSpawnEvery(0) === 0, 'no spawn at zero');
  ok(trailSpawnEvery(0.2) === 3 && trailSpawnEvery(0.5) === 2 && trailSpawnEvery(0.9) === 1, 'spawn cadence densifies');
  ok(dustBurst(0) === 0 && dustBurst(0.2) === 1 && dustBurst(0.5) === 1 && dustBurst(0.9) === 2, 'dust burst scales (capped)');
  ok(dustSpread(0.9) > dustSpread(0.2), 'dust spread scales');
}

// ---------- smooth transitions (no popping) ----------
{
  let v = 0;
  v = trailSmooth(v, 1, 1 / 60);
  ok(v > 0 && v <= TRAIL.ATTACK / 60 + 1e-9, 'attack slew-bounded', `v=${v}`);
  const full = trailSmooth(0, 1, 10);
  ok(full === 1, 'long dt converges exactly');
  const step1 = trailSmooth(0.8, 0, 1 / 60);
  ok(0.8 - step1 <= TRAIL.RELEASE / 60 + 1e-9 && step1 < 0.8, 'release slew-bounded');
  // Enter/exit over a full second stays continuous (max step <= attack*dt).
  let p = 0, worst = 0;
  for (let k = 0; k < 60; k++) { const n2 = trailSmooth(p, 1, 1 / 60); worst = Math.max(worst, n2 - p); p = n2; }
  ok(worst <= TRAIL.ATTACK / 60 + 1e-9, 'no pops on enter', `worst=${worst.toFixed(4)}`);
}

// ---------- buffer identity / no allocation ----------
{
  const ring = new DustRing(160);
  const ref = ring.positions;
  const n0 = ring.n;
  for (let k = 0; k < 500; k++) ring.spawn(k, 6, k * 2, dustSpread(0.9));
  ring.update(1 / 60);
  ok(ring.positions === ref && ring.n === n0, 'dust ring buffer stable across 500 spawns');
  ok(typeof trailWidth(0.5) === 'number' && typeof dustBurst(0.5) === 'number', 'trail fns return scalars');
}

// ---------- extent math: rotation and scale ----------
{
  // Zero yaw: lateral extent is the x half-scale (+jitter), long axis along road.
  ok(Math.abs(wallExtent(10, 30, 0) - (10 + CORRIDOR.JITTER)) < 1e-9, 'wall extent at yaw 0');
  // 90-degree yaw swaps axes: lateral extent becomes the segment half-length.
  ok(Math.abs(wallExtent(10, 30, Math.PI / 2) - (12 + CORRIDOR.JITTER)) < 1e-9, 'wall extent at yaw 90deg');
  // footprintExtent matches the box model on both axes.
  ok(Math.abs(footprintExtent(7, 6, 0) - 7.6) < 1e-9, 'footprint yaw 0');
  ok(Math.abs(footprintExtent(7, 6, Math.PI / 2) - 6.6) < 1e-9, 'footprint yaw 90deg');
  // Bigger scale always pushes further out.
  ok(wallExtent(24, 36, 0.4) > wallExtent(10, 30, 0.4), 'wider wall larger extent');
  ok(mesaExtent(90, 100) > mesaExtent(40, 44), 'bigger mesa larger extent');
  ok(archExtent(12) > archExtent(8), 'bigger arch larger extent');
  ok(scrubExtent(2.6) > scrubExtent(1), 'bigger scrub larger extent');
  // mesaDepth is deterministic and feeds both mount and audit.
  ok(mesaDepth(3, 50) === mesaDepth(3, 50), 'mesaDepth deterministic');
  // Corridor need tracks the widened road.
  ok(Math.abs(corridorNeed(11.5) - (11.5 + CORRIDOR.GUARD_OUT + CORRIDOR.SHOULDER)) < 1e-9, 'corridor need formula');
}

// ---------- corridor audit across seeds, qualities, today ----------
function trackDataOf(day: string): { t: TrackData; events: { startS: number; endS: number; dir: 'L' | 'R'; medR: number }[] } {
  const daily = acceptDailyTrack(day);
  const tv = trackFromPoints(daily.points, TRACK_HALF_W);
  const t: TrackData = {
    points: daily.points.map((p) => ({ x: p.x, y: p.y, z: p.z })),
    tangents: tv.tx.map((x, k) => ({ x, y: 0, z: tv.tz[k] })),
    normals: tv.nx.map((x, k) => ({ x, y: 0, z: tv.nz[k] })),
    cum: arcLengths(daily.points),
    events: daily.stats.events,
  };
  return { t, events: daily.stats.events as { startS: number; endS: number; dir: 'L' | 'R'; medR: number }[] };
}
{
  const days: string[] = [];
  for (let d = 1; d <= 15; d++) days.push(`2026-06-${String(d).padStart(2, '0')}`);
  for (let d = 1; d <= 15; d++) days.push(`2026-07-${String(d).padStart(2, '0')}`);
  let worst = Infinity, worstDay = '', totalBad = 0, checked = 0;
  for (const day of days) {
    const { t, events } = trackDataOf(day);
    for (const mobile of [false, true]) {
      const o = resolveEnvOptions({ mobile, halfW: TRACK_HALF_W });
      const a = auditCorridor(t, events, o);
      checked += a.checked;
      if (a.min < worst) { worst = a.min; worstDay = `${day}${mobile ? '/mob' : ''}`; }
      totalBad += a.bad.length;
      if (a.bad.length > 0) console.log(`intrusion ${day} mobile=${mobile}`, JSON.stringify(a.bad.slice(0, 3)));
    }
  }
  ok(totalBad === 0, '30 seeds x desktop/mobile: zero corridor intrusions', `bad=${totalBad} checked=${checked}`);
  console.log(`[measure] corridor worst=${worst.toFixed(2)}u at ${worstDay} over ${checked} placements`);
  ok(worst < 12, 'scenery still near the course (not pushed to nowhere)', `worst=${worst.toFixed(2)}`);
}
{
  // Today's visible-intrusion regression.
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const { t, events } = trackDataOf(today);
  const a = auditCorridor(t, events, resolveEnvOptions({ halfW: TRACK_HALF_W }));
  ok(a.bad.length === 0, `today (${today}): no corridor intrusion`, JSON.stringify(a.bad.slice(0, 2)));
  console.log(`[measure] today corridor min=${a.min.toFixed(2)}u checked=${a.checked}`);
}
{
  // Planners still satisfy budgets and stay deterministic after enforcement.
  const { t, events } = trackDataOf('2026-09-07');
  const o = resolveEnvOptions({ halfW: TRACK_HALF_W });
  const c = countEnvInstances(t, events, o);
  ok(envWithinBudget(c), 'env within budget after enforcement', JSON.stringify(c));
  const w1 = planWalls(t.cum, events, o);
  const w2 = planWalls(t.cum, events, o);
  ok(JSON.stringify(w1) === JSON.stringify(w2), 'wall plan deterministic');
  const m1 = planMesas(t, TRACK_HALF_W);
  ok(m1.length > 0 && m1.every((b) => isFinite(b.x) && isFinite(b.z)), 'mesas placed');
  const ar = planArches(t.cum, o);
  ok(ar.every((a) => a.lateral - archExtent(a.r) >= corridorNeed(TRACK_HALF_W) - 1e-9), 'arches clear corridor');
  const sc = planScrub(t.cum, o);
  ok(sc.every((q) => q.lateral - scrubExtent(q.w) >= TRACK_HALF_W + CORRIDOR.SCRUB_OUT - 1e-9), 'scrub clears rails');
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
