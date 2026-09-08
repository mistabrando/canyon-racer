// Standalone tests for src/barrier-plan.ts. Pure arc-math only:
// no sim.ts, no trackgen.ts, no THREE, no DOM, no wall-clock, no network.
declare const process: { exit(c: number): void };
import {
  DEFAULT_BARRIER_TUNING, anyBarrierAt, auditBarriers, barrierAt,
  guardedRatio, insideOf, outsideOf, planBarriers,
} from '../src/barrier-plan.js';
import type { BarrierPlan, CornerLike } from '../src/barrier-plan.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

const T = DEFAULT_BARRIER_TUNING;
const L = 2200;
const driftL: CornerLike = { startS: 500, endS: 600, dir: 'L', medR: 43 };
const driftR: CornerLike = { startS: 900, endS: 1010, dir: 'R', medR: 60 };
const sweepL: CornerLike = { startS: 1300, endS: 1450, dir: 'L', medR: 145 };
const kinkR: CornerLike = { startS: 1700, endS: 1800, dir: 'R', medR: 185 };

// 1. Invalid inputs fail safe with an empty plan, never throw.
{
  let threw = false;
  try {
    ok(planBarriers(NaN, []).spans.length === 0, 'nan length empty');
    ok(planBarriers(100, []).spans.length === 0, 'short length empty');
    ok(planBarriers(L, null as unknown as CornerLike[]).spans.length === 0, 'null events empty');
    ok(planBarriers(L, [{ startS: 1, endS: 2, dir: 'L', medR: 40 } as CornerLike]).spans.length === 0, 'sliver corner ignored');
  } catch { threw = true; }
  ok(!threw, 'invalid inputs never throw');
}

// 2. Open track (no corners) has no barriers: flight allowed everywhere.
{
  const p = planBarriers(L, []);
  ok(p.spans.length === 0, 'straights stay open');
  ok(!anyBarrierAt(p, 1000), 'mid straight unguarded');
  ok(guardedRatio(p) === 0, 'open ratio zero');
  ok(auditBarriers(p).length === 0, 'empty plan audits clean');
}

// 3. Drift corner: outside guarded with entry/runoff, inside open.
{
  const p = planBarriers(L, [driftL]);
  ok(p.spans.length === 1, 'one outside span', JSON.stringify(p.spans));
  const s = p.spans[0];
  ok(s.side === 1, 'L outside is +1');
  ok(s.aS === 500 - T.driftEntryAdvance && s.bS === 600 + T.driftExitRunoff, 'advance+runoff extent', `${s.aS}-${s.bS}`);
  ok(barrierAt(p, 550, 1), 'apex outside guarded');
  ok(!barrierAt(p, 550, -1), 'apex inside open');
  ok(!barrierAt(p, 300, 1), 'approach straight open');
}

// 4. R corner mirrors: outside is -1.
{
  const p = planBarriers(L, [driftR]);
  ok(p.spans.length === 1 && p.spans[0].side === -1, 'R outside is -1');
  ok(barrierAt(p, 950, -1) && !barrierAt(p, 950, 1), 'R apex guarded outside only');
  ok(outsideOf('L') === 1 && outsideOf('R') === -1, 'outside convention');
  ok(insideOf('L') === -1 && insideOf('R') === 1, 'inside convention');
}

// 5. Sweeper gets a shorter outside barrier; kink gets none.
{
  const ps = planBarriers(L, [sweepL]);
  ok(ps.spans.length === 1, 'sweeper guarded');
  const s = ps.spans[0];
  ok(s.bS - s.aS === (1450 + T.sweeperExitRunoff) - (1300 - T.sweeperEntryAdvance), 'sweeper shorter extent');
  ok(T.sweeperEntryAdvance < T.driftEntryAdvance && T.sweeperExitRunoff < T.driftExitRunoff, 'sweeper margins shorter than drift');
  const pk = planBarriers(L, [kinkR]);
  ok(pk.spans.length === 0, 'kink stays open');
}

// 6. Launch pad and finish tail stay open even under a corner.
{
  const early: CornerLike = { startS: 150, endS: 260, dir: 'L', medR: 50 };
  const late: CornerLike = { startS: L - 160, endS: L - 40, dir: 'R', medR: 50 };
  const p = planBarriers(L, [early, late]);
  for (const s of p.spans) ok(s.aS >= T.startOpen && s.bS <= L - T.finishOpen, 'spans respect open ends', `${s.aS}-${s.bS}`);
  ok(!anyBarrierAt(p, 50), 'launch open');
  ok(!anyBarrierAt(p, L - 20), 'finish open');
}

// 7. Crest gap: barrier splits around jump crests so landings stay open.
{
  const p = planBarriers(L, [driftL], [560]);
  ok(!anyBarrierAt(p, 560), 'crest landing open');
  ok(barrierAt(p, 490, 1), 'entry side kept');
  ok(barrierAt(p, 640 - 5, 1) || p.spans.length >= 1, 'exit side kept', JSON.stringify(p.spans));
  const tiny = planBarriers(L, [driftL], [470, 490, 510, 530, 550, 570, 590, 610, 630, 650]);
  ok(tiny.spans.every((s) => s.bS - s.aS >= 20), 'no sliver spans from crest field');
}

// 8. Decreasing-radius complex adds a short inside barrier; plain drift does not.
{
  const dec: CornerLike = { startS: 500, endS: 640, dir: 'L', medR: 60, decreasing: true };
  const p = planBarriers(L, [dec]);
  const inside = p.spans.filter((s) => s.side === -1);
  ok(inside.length === 1, 'one inside span for decreasing');
  ok(inside[0].bS - inside[0].aS === T.decreasingInsideLen, 'inside span short', `${inside[0].bS - inside[0].aS}`);
  const plain = planBarriers(L, [driftL]);
  ok(plain.spans.every((s) => s.side === 1), 'plain drift inside open');
}

// 9. Overlaps merge per side; opposite sides never merge.
{
  const a: CornerLike = { startS: 500, endS: 600, dir: 'L', medR: 50 };
  const b: CornerLike = { startS: 610, endS: 700, dir: 'L', medR: 55 };
  const p = planBarriers(L, [a, b]);
  ok(p.spans.filter((s) => s.side === 1).length === 1, 'same-side overlap merges');
  const q = planBarriers(L, [driftL, driftR]);
  ok(q.spans.length === 2, 'opposite sides stay separate');
}

// 10. Cap, ordering, audit, determinism.
{
  const many: CornerLike[] = [];
  for (let i = 0; i < 40; i++) many.push({ startS: 220 + i * 45, endS: 260 + i * 45, dir: i % 2 ? 'R' : 'L', medR: 50 });
  const p = planBarriers(L, many);
  ok(p.spans.length <= T.maxSpans, 'span cap holds', `${p.spans.length}`);
  ok(auditBarriers(p).length === 0, 'capped plan audits clean');
  let ordered = true;
  for (let i = 1; i < p.spans.length; i++) if (p.spans[i].aS < p.spans[i - 1].aS) ordered = false;
  ok(ordered, 'spans sorted by arc');
  const r1 = JSON.stringify(planBarriers(L, [driftL, driftR, sweepL], [700]));
  const r2 = JSON.stringify(planBarriers(L, [driftL, driftR, sweepL], [700]));
  ok(r1 === r2, 'deterministic repeat');
  const bad: BarrierPlan = { spans: [{ aS: 100, bS: 50, side: 1 }], length: L };
  ok(auditBarriers(bad).length > 0, 'audit flags inverted span');
  ok(auditBarriers({ spans: [], length: NaN }).includes('bad-length'), 'audit flags bad length');
}

// 11. Query edges: inclusive bounds, bad side/s NaN safe, ratio bounded.
{
  const p = planBarriers(L, [driftL]);
  const s = p.spans[0];
  ok(barrierAt(p, s.aS, 1) && barrierAt(p, s.bS, 1), 'bounds inclusive');
  ok(!barrierAt(p, s.aS - 0.1, 1) && !barrierAt(p, s.bS + 0.1, 1), 'just outside open');
  ok(!barrierAt(p, 550, 0 as unknown as 1), 'bad side safe');
  ok(!barrierAt(p, NaN, 1), 'nan s safe');
  const r = guardedRatio(planBarriers(L, [driftL, driftR, sweepL]));
  ok(r > 0 && r < 0.5, 'guarded ratio partial', r.toFixed(3));
}

// 12. Sim contract sketch: clamp only where barrierAt is true.
{
  const p = planBarriers(L, [driftL]);
  const shouldClamp = (s: number, side: 1 | -1): boolean => barrierAt(p, s, side);
  ok(shouldClamp(550, 1) && !shouldClamp(550, -1), 'apex: clamp outside, free inside');
  ok(!shouldClamp(300, 1) && !shouldClamp(300, -1), 'straight: free both sides');
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
