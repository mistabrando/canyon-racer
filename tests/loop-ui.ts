// Headless tests for src/loop.ts (Cycle 4 P0 replay loop helpers).
// Seeded days, synthetic ghosts, no DOM.
declare const process: { exit(c: number): void };
import {
  splitPositions, splitSampleIdx, ghostTimeAt, fmtDelta, gapText,
  clampAcc, ACC_MAX,
} from '../src/loop.js';
import { acceptDailyTrack } from '../src/trackgen.js';
import type { GhostData } from '../src/ghost.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

// Splits derive from grammar, strictly increasing, stable per seed.
{
  const a = acceptDailyTrack('2026-09-07');
  const sp = splitPositions(a.stats.events);
  ok(sp.length === 3, 'three splits from 12-event grammar', sp.join(','));
  ok(sp[0] < sp[1] && sp[1] < sp[2], 'splits strictly increasing');
  ok(sp[0] > 0 && sp[2] < a.stats.length, 'splits inside course');
  const again = splitPositions(acceptDailyTrack('2026-09-07').stats.events);
  ok(again.join(',') === sp.join(','), 'splits deterministic per seed');
  let varied = 0;
  for (let d = 1; d <= 10; d++) {
    const o = splitPositions(acceptDailyTrack(`2026-08-${String(d).padStart(2, '0')}`).stats.events);
    if (o.join(',') !== sp.join(',')) varied++;
  }
  ok(varied > 0, 'splits vary across days');
  ok(splitPositions([]).length === 0, 'no events, no splits');
}

// Split sample mapping hits the cum table exactly on synthetic data.
{
  const cum = [0, 10, 20, 30, 40];
  ok(splitSampleIdx(cum, 21) === 2, 'nearest sample wins');
  ok(splitSampleIdx(cum, 0) === 0, 'start clamps');
  ok(splitSampleIdx(cum, 999) === 4, 'end clamps');
}

// Ghost time lookup: nearest sample, honest timestamps, safe on garbage.
{
  const g: GhostData = {
    t: 30000,
    p: [[0, 6, 0, 0], [0, 6, 100, 0], [0, 6, 200, 0], [0, 6, 300, 0]],
    ts: [0, 10000, 23000, 30000], // 23000 includes a visible respawn-style gap
  };
  ok(ghostTimeAt(g, 0, 95) === 10000, 'nearest sample timestamp');
  ok(ghostTimeAt(g, 0, 205) === 23000, 'gap timestamp preserved, not smoothed');
  ok(ghostTimeAt(null, 0, 0) === -1, 'null ghost fails safe');
  ok(ghostTimeAt({ t: 0, p: [[0, 0, 0, 0]], ts: [0] }, 0, 0) === -1, 'single sample unusable');
  ok(ghostTimeAt({ t: 0, p: [[0, 0, 0, 0], [1, 0, 1, 0]], ts: [0] }, 0, 0) === -1, 'ts/p length mismatch fails safe');
}

// Delta formatting and gap text never fabricate targets.
{
  ok(fmtDelta(-310) === '-0.31', 'ahead formats negative');
  ok(fmtDelta(420) === '+0.42', 'behind formats positive');
  ok(fmtDelta(0) === '+0.00', 'zero delta');
  ok(gapText(-310, 80, 'PB') === '-0.31 · 25m vs PB', 'gap text with target');
  ok(gapText(NaN, 80, 'PB') === '', 'NaN delta shows nothing');
  ok(gapText(100, -5, 'PB') === '', 'negative speed shows nothing');
}

// accBound: overload policy mirrors the main.ts frame loop
// (acc += dt; up to 4 fixed steps; clamp leftover). Sustained sub-15fps must
// keep debt bounded with no spiral; normal rates must never hit the clamp
// and must agree on total steps (no 60/90/120/144Hz jitter).
{
  const STEP = 1 / 60;
  const run = (dt: number, frames: number): { steps: number; accMax: number; clamped: boolean; perFrameMax: number } => {
    let acc = 0, steps = 0, accMax = 0, perFrameMax = 0;
    let clamped = false;
    for (let f = 0; f < frames; f++) {
      acc += dt;
      let n = 0;
      while (acc >= STEP && n < 4) { acc -= STEP; steps++; n++; }
      const before = acc;
      acc = clampAcc(acc);
      if (acc !== before) clamped = true;
      accMax = Math.max(accMax, acc);
      perFrameMax = Math.max(perFrameMax, n);
    }
    return { steps, accMax, clamped, perFrameMax };
  };
  // Sustained dt=0.1 (10fps): debt bounded, full 4 steps every frame, no spiral.
  const over = run(0.1, 600);
  ok(over.accMax <= ACC_MAX + 1e-9, 'accBound debt bounded at 10fps', `max=${over.accMax.toFixed(3)}`);
  ok(over.steps === 2400, 'accBound no step starvation under overload', `steps=${over.steps}`);
  // Normal rates: identical step counts, clamp never fires, no multi-step bursts.
  const r60 = run(1 / 60, 300), r90 = run(1 / 90, 450), r120 = run(1 / 120, 600), r144 = run(1 / 144, 720);
  ok(!r60.clamped && !r90.clamped && !r120.clamped && !r144.clamped, 'accBound clamp silent at normal rates');
  // Float accumulation at 720 frames lands 1 step shy at the window edge;
  // parity within 1 step with no bursts and no clamp is the stable property.
  ok([r60.steps, r90.steps, r120.steps, r144.steps].every((v) => v >= 299 && v <= 300), 'accBound step parity 60/90/120/144', `${r60.steps}/${r90.steps}/${r120.steps}/${r144.steps}`);
  ok(r120.perFrameMax <= 1 && r144.perFrameMax <= 1, 'accBound no burst steps at high refresh');
  // Clamp helper edges.
  ok(clampAcc(0.05) === 0.05, 'clampAcc passes normal debt through');
  ok(clampAcc(0.5) === ACC_MAX, 'clampAcc caps overload debt');
  ok(clampAcc(NaN) === 0 && clampAcc(-1) === 0, 'clampAcc sanitizes garbage');
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
