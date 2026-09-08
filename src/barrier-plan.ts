// barrier-plan.ts — explicit guardrail barrier contract (Cycle 7).
// Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock, no network.
// The universal wall rule (clamp everywhere) is unacceptable: only VISIBLE
// guardrail segments collide. Open edges allow off-course flight/falls; the
// sim owns falling/respawn, this module only decides WHERE barriers exist.
//
// Side convention matches sim normals and visuals chevrons: side +1 is the
// +normal side (driver-right, outside of a left turn), -1 is the opposite.
// Arc positions are centerline meters from the start (same frame as trackgen
// CornerEvent.startS/endS and visuals chevron stations).

export type BarrierSide = 1 | -1;
export type TurnDir = 'L' | 'R';

export interface CornerLike {
  startS: number;
  endS: number;
  dir: TurnDir;
  medR: number;
  decreasing?: boolean;
}

export interface BarrierSpan {
  aS: number;
  bS: number;
  side: BarrierSide;
}

export interface BarrierTuning {
  driftMaxR: number;
  sweeperMaxR: number;
  driftEntryAdvance: number;
  driftExitRunoff: number;
  sweeperEntryAdvance: number;
  sweeperExitRunoff: number;
  decreasingInsideLen: number;
  startOpen: number;
  finishOpen: number;
  crestHalfGap: number;
  mergeGap: number;
  maxSpans: number;
}

export const DEFAULT_BARRIER_TUNING: BarrierTuning = {
  driftMaxR: 130,
  sweeperMaxR: 175,
  driftEntryAdvance: 30,
  driftExitRunoff: 40,
  sweeperEntryAdvance: 18,
  sweeperExitRunoff: 22,
  decreasingInsideLen: 30,
  startOpen: 200,
  finishOpen: 150,
  crestHalfGap: 55,
  mergeGap: 12,
  maxSpans: 64,
};

export interface BarrierPlan {
  spans: BarrierSpan[];
  length: number;
}

function clampNum(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v));
}

function isFiniteNum(v: unknown): v is number {
  return typeof v === 'number' && isFinite(v);
}

/** Outside of a corner under the +normal convention: L -> +1, R -> -1. */
export function outsideOf(dir: TurnDir): BarrierSide {
  return dir === 'L' ? 1 : -1;
}

export function insideOf(dir: TurnDir): BarrierSide {
  return dir === 'L' ? -1 : 1;
}

function validCorner(c: CornerLike): boolean {
  if (typeof c !== 'object' || c === null) return false;
  if (c.dir !== 'L' && c.dir !== 'R') return false;
  if (!isFiniteNum(c.startS) || !isFiniteNum(c.endS)) return false;
  if (!isFiniteNum(c.medR) || c.medR <= 0) return false;
  if (c.endS - c.startS < 30) return false;
  if (c.endS <= 0) return false;
  return true;
}

/**
 * Plan explicit barrier spans for a track of `length` meters. Deterministic:
 * same inputs always yield the same spans in the same order. Never throws:
 * invalid inputs yield an empty plan. The planner allocates once; query
 * functions below allocate nothing.
 */
export function planBarriers(
  length: number,
  events: CornerLike[],
  crestS: number[] = [],
  tuning: BarrierTuning = DEFAULT_BARRIER_TUNING,
): BarrierPlan {
  const t = tuning;
  if (!isFiniteNum(length) || length < 500 || length > 10000) return { spans: [], length: 0 };
  const lo = t.startOpen;
  const hi = length - t.finishOpen;
  if (!(hi > lo + 60)) return { spans: [], length };
  const raw: BarrierSpan[] = [];
  const crests: number[] = [];
  for (const c of crestS) if (isFiniteNum(c) && c > 0 && c < length) crests.push(c);
  crests.sort((a, b) => a - b);
  const push = (a: number, b: number, side: BarrierSide): void => {
    let x = clampNum(a, lo, hi);
    let y = clampNum(b, lo, hi);
    if (!(y - x >= 20)) return;
    for (const c of crests) {
      const g0 = c - t.crestHalfGap, g1 = c + t.crestHalfGap;
      if (y <= g0 || x >= g1) continue;
      const leftLen = g0 - x, rightLen = y - g1;
      if (leftLen >= 20 && rightLen >= 20) {
        raw.push({ aS: x, bS: g0, side });
        x = g1;
      } else if (leftLen >= rightLen) {
        y = Math.min(y, g0);
      } else {
        x = Math.max(x, g1);
      }
      if (!(y - x >= 20)) return;
    }
    raw.push({ aS: x, bS: y, side });
  };
  if (Array.isArray(events)) {
    for (const e of events) {
      if (!validCorner(e)) continue;
      const out = outsideOf(e.dir);
      if (e.medR <= t.driftMaxR) {
        push(e.startS - t.driftEntryAdvance, e.endS + t.driftExitRunoff, out);
        if (e.decreasing === true) {
          const mid = (e.startS + e.endS) / 2;
          push(mid - t.decreasingInsideLen / 2, mid + t.decreasingInsideLen / 2, insideOf(e.dir));
        }
      } else if (e.medR <= t.sweeperMaxR) {
        push(e.startS - t.sweeperEntryAdvance, e.endS + t.sweeperExitRunoff, out);
      }
    }
  }
  raw.sort((a, b) => (a.side - b.side) || (a.aS - b.aS));
  const merged: BarrierSpan[] = [];
  for (const s of raw) {
    const p = merged[merged.length - 1];
    if (p && p.side === s.side && s.aS - p.bS <= t.mergeGap) {
      if (s.bS > p.bS) p.bS = s.bS;
    } else {
      merged.push({ aS: s.aS, bS: s.bS, side: s.side });
    }
  }
  merged.sort((a, b) => (a.aS - b.aS) || (a.side - b.side));
  if (merged.length > t.maxSpans) {
    merged.sort((a, b) => ((b.bS - b.aS) - (a.bS - a.aS)) || (a.aS - b.aS));
    merged.length = t.maxSpans;
    merged.sort((a, b) => (a.aS - b.aS) || (a.side - b.side));
  }
  for (const s of merged) {
    s.aS = Math.round(s.aS * 10) / 10;
    s.bS = Math.round(s.bS * 10) / 10;
  }
  return { spans: merged, length };
}

/** True when a visible barrier guards arc position `s` on `side`. No allocation. */
export function barrierAt(plan: BarrierPlan, s: number, side: BarrierSide): boolean {
  if (!plan || !isFiniteNum(s)) return false;
  if (side !== 1 && side !== -1) return false;
  const spans = plan.spans;
  for (let i = 0; i < spans.length; i++) {
    const sp = spans[i];
    if (sp.side !== side) continue;
    if (s < sp.aS) {
      if (sp.aS > s) {
        let earlier = false;
        for (let j = i + 1; j < spans.length; j++) {
          if (spans[j].side === side && spans[j].aS < sp.aS) { earlier = true; break; }
        }
        if (!earlier) return false;
      }
      continue;
    }
    if (s <= sp.bS) return true;
  }
  return false;
}

/** True when either side is guarded at `s` (convenience for straight checks). */
export function anyBarrierAt(plan: BarrierPlan, s: number): boolean {
  return barrierAt(plan, s, 1) || barrierAt(plan, s, -1);
}

/**
 * Fraction of track meters guarded on at least one side. Pure; allocates
 * nothing beyond a local merged copy of same-side overlaps (bounded by spans).
 */
export function guardedRatio(plan: BarrierPlan): number {
  if (!plan || !(plan.length > 0) || plan.spans.length === 0) return 0;
  let guarded = 0;
  let curA = -Infinity, curB = -Infinity;
  const spans = plan.spans;
  const order: number[] = [];
  for (let i = 0; i < spans.length; i++) order.push(i);
  order.sort((a, b) => spans[a].aS - spans[b].aS);
  for (const k of order) {
    const a = spans[k].aS, b = spans[k].bS;
    if (a > curB) {
      if (curB > curA) guarded += curB - curA;
      curA = a; curB = b;
    } else if (b > curB) {
      curB = b;
    }
  }
  if (curB > curA) guarded += curB - curA;
  return clampNum(guarded / plan.length, 0, 1);
}

/**
 * Structural audit of a plan. Returns machine-readable reasons (empty = ok).
 * Checks bounds, ordering, span shape, and the span cap. Never throws.
 */
export function auditBarriers(plan: BarrierPlan, tuning: BarrierTuning = DEFAULT_BARRIER_TUNING): string[] {
  const bad: string[] = [];
  if (!plan || !Array.isArray(plan.spans)) return ['bad-plan'];
  if (!isFiniteNum(plan.length) || plan.length <= 0) return ['bad-length'];
  if (plan.spans.length > tuning.maxSpans) bad.push('over-cap');
  let prevA = -Infinity;
  let ordered = true;
  for (const s of plan.spans) {
    if (typeof s !== 'object' || s === null) { bad.push('bad-span'); continue; }
    if ((s.side !== 1 && s.side !== -1) || !isFiniteNum(s.aS) || !isFiniteNum(s.bS)) { bad.push('bad-span'); continue; }
    if (!(s.bS > s.aS) || s.aS < 0 || s.bS > plan.length) bad.push('out-of-bounds');
    if (s.aS < prevA) ordered = false;
    prevA = s.aS;
  }
  if (!ordered) bad.push('unordered');
  return bad;
}
