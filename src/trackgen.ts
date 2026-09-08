// trackgen.ts — deterministic daily sprint construction + verification.
// Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock.
// A 12-corner grammar (long drift arcs, fast sweepers, kinks, one
// decreasing-radius challenge) lays out explicit corner events by arc
// integration, so sampled centerline radii match the spec by construction;
// analyzeCenterline() then verifies the sampled geometry before a track is
// accepted. Road is 23 units wide (TRACK_HALF_W 11.5): room for
// inside/late-apex/outside drift lines, with self-clearance and runoff gates
// keeping shortcut cuts unrewarding (enforced with sim offroad/progression).

import { clamp, hashSeed, lerp, mulberry32 } from './sim.js';

export interface Pt3 { x: number; y: number; z: number }
export type TurnDir = 'L' | 'R';
export interface CornerSpec { dir: TurnDir; r0: number; r1: number; angleDeg: number }
export type Seg =
  | { kind: 'straight'; len: number }
  | { kind: 'corner'; corner: CornerSpec };

export const TRACK_HALF_W = 11.5; // 23u total: inside/late-apex/outside drift lines
export const DS = 2; // centerline sample spacing
export const LEN_MIN = 2400, LEN_MAX = 3650;
export const FIRST_MIN = 140, FIRST_MAX = 240;
export const CLEAR_MIN = 40; // widened with the road: 2*halfW (23) + margin
export const GRADE_MAX = 0.30;
export const MAX_ATTEMPTS = 40;
// Measured-event quotas for the 12-corner grammar (drift 45-130u: five big
// 110-128u hug arcs plus one 48-60u decreasing challenge; sweeper 130-175u;
// kink 175u+ by median radius).
export const EVENT_MIN = 11, EVENT_MAX = 14;
export const DRIFT_MIN = 5, DRIFT_MAX = 7;
export const SWEEP_MIN = 3, SWEEP_MAX = 4;

// Canonical grammar: 12 corner events over ~2480 units — 5 drift hairpins,
// 1 decreasing-radius complex (counts as drift), 4 fast sweepers, 3 kinks —
// with S-transitions throughout, a balanced L/R angle sum (good clearance),
// long setup straights and two crest-host straights. Satisfies the measured
// quotas by construction; also the bounded fallback when no seed is accepted.
// Canonical grammar: 12 corner events over ~3350 units — 5 big drift hug
// arcs (112-120u, 115-125deg, ~225-255u of arc), 1 decreasing-radius
// challenge (66->38u), 4 fast sweepers (140-160u), 2 kinks (175-185u) — with
// S-transitions throughout, a balanced L/R angle sum (good clearance), setup
// straights, and two crest hosts (>=190u) feeding easy sweep/kink followers.
// Satisfies the measured quotas by construction; also the bounded fallback
// when no seed is accepted.
export function canonicalGrammar(): Seg[] {
  const C = (dir: TurnDir, r0: number, r1: number, angleDeg: number): Seg =>
    ({ kind: 'corner', corner: { dir, r0, r1, angleDeg } });
  const S = (len: number): Seg => ({ kind: 'straight', len });
  return [
    S(175),
    C('R', 145, 145, 45),
    S(50),
    C('L', 116, 116, 120),
    S(45),
    C('R', 118, 118, 125),
    S(50),
    C('L', 150, 150, 48),
    S(55),
    C('R', 66, 38, 92),
    S(190),
    C('L', 155, 155, 45),
    S(50),
    C('R', 112, 112, 115),
    S(185),
    C('L', 188, 188, 28),
    S(50),
    C('R', 120, 120, 120),
    S(55),
    C('L', 140, 140, 50),
    S(50),
    C('R', 186, 186, 30),
    S(55),
    C('L', 118, 118, 118),
    S(150),
  ];
}

// Corner archetype deck for seeded daily grammars: 5 big drift hug-arcs +
// 1 decreasing challenge + 4 sweepers + 2 kinks = 12 events. Ordinary drift
// arcs run 110-128u over 100-135deg, i.e. ~190-300u of centerline arc — long
// sustained slides with room to hug the inside curb. Entered above grip pace
// they still demand drift (full-lock grip radius at top speed is ~133u, and
// the hug line runs a tighter radius than centerline). Bands sit inside the
// measured classes (drift 45-130, sweep 130-175, kink 175+) with margin so
// sampling noise cannot push an event across a class boundary.
interface CornerArch {
  cls: 'drift' | 'dec' | 'sweep' | 'kink';
  rMin: number; rMax: number; aMin: number; aMax: number;
}
const DECK: CornerArch[] = [
  { cls: 'drift', rMin: 110, rMax: 128, aMin: 100, aMax: 135 },
  { cls: 'drift', rMin: 110, rMax: 128, aMin: 100, aMax: 135 },
  { cls: 'drift', rMin: 110, rMax: 128, aMin: 100, aMax: 135 },
  { cls: 'drift', rMin: 110, rMax: 128, aMin: 100, aMax: 135 },
  { cls: 'drift', rMin: 110, rMax: 128, aMin: 100, aMax: 135 },
  { cls: 'dec', rMin: 62, rMax: 70, aMin: 85, aMax: 100 },
  { cls: 'sweep', rMin: 132, rMax: 168, aMin: 35, aMax: 55 },
  { cls: 'sweep', rMin: 132, rMax: 168, aMin: 35, aMax: 55 },
  { cls: 'sweep', rMin: 132, rMax: 168, aMin: 35, aMax: 55 },
  { cls: 'sweep', rMin: 132, rMax: 168, aMin: 35, aMax: 55 },
  { cls: 'kink', rMin: 180, rMax: 198, aMin: 24, aMax: 34 },
  { cls: 'kink', rMin: 180, rMax: 198, aMin: 24, aMax: 34 },
];

// Setup straight before a corner of the given class: long enough to brake
// and pick a line, short enough (<=110 with the transition rule) to keep
// S-transitions alive. Crest hosts are floored separately.
function setupLen(cls: CornerArch['cls'], rng: () => number): number {
  if (cls === 'sweep') return 50 + rng() * 12;
  if (cls === 'kink') return 45 + rng() * 12;
  if (cls === 'drift') return 55 + rng() * 12;
  return 45 + rng() * 12;
}

// Per-(day, attempt) deterministic grammar: shuffled archetype order (easy
// sweeper opens, fast corner closes, complex kept mid-pack), seeded
// directions with alternation bias plus net-angle balancing (keeps the course
// from looping back, which protects self-clearance), radii/angles/lengths
// uniform in class bands, seeded elevation handled in buildCenterlineSeeded.
export function grammarForAttempt(day: string, attempt: number): Seg[] {
  const base = canonicalGrammar();
  if (attempt >= MAX_ATTEMPTS) return base; // bounded fallback: canonical, unjittered
  const rng = mulberry32(hashSeed(`canyon-${day}#${attempt}`));
  const pick = <T>(arr: T[]): T => arr[Math.floor(rng() * arr.length)];
  // Order: slot 0 opens on a sweeper, slot 11 closes on sweep/kink,
  // the decreasing complex sits mid-pack (slots 2..9).
  const sweeps = DECK.map((a, k) => (a.cls === 'sweep' ? k : -1)).filter((k) => k >= 0);
  const closers = DECK.map((a, k) => (a.cls === 'sweep' || a.cls === 'kink' ? k : -1)).filter((k) => k >= 0);
  const decIdx = DECK.findIndex((a) => a.cls === 'dec');
  const rest = DECK.map((_, k) => k);
  const take = (pool: number[], choices: number[]): number => {
    const c = pick(choices);
    pool.splice(pool.indexOf(c), 1);
    return c;
  };
  const order: number[] = new Array<number>(12).fill(-1);
  order[0] = take(rest, sweeps);
  order[11] = take(rest, closers.filter((k) => rest.includes(k)));
  const decSlot = 2 + Math.floor(rng() * 8);
  order[decSlot] = decIdx;
  rest.splice(rest.indexOf(decIdx), 1);
  // Shuffle the remainder over the leftover slots.
  const open = order.map((v, k) => (v < 0 ? k : -1)).filter((k) => k >= 0);
  for (let k = open.length - 1; k >= 0; k--) {
    order[open[k]] = rest.splice(Math.floor(rng() * rest.length), 1)[0];
  }
  // Directions: alternation bias (S-transitions) with occasional repeats
  // (compound sequences), then net-angle balancing for clearance.
  const archOf = (slot: number): CornerArch => DECK[order[slot]];
  const midAngle = (slot: number): number => {
    const a = archOf(slot);
    return ((a.aMin + a.aMax) / 2) * Math.PI / 180;
  };
  const dirs: TurnDir[] = [];
  dirs.push(rng() < 0.5 ? 'L' : 'R');
  for (let k = 1; k < 12; k++) {
    dirs.push(rng() < 0.7 ? (dirs[k - 1] === 'L' ? 'R' : 'L') : dirs[k - 1]);
  }
  const netAngle = (): number => {
    let net = 0;
    for (let k = 0; k < 12; k++) net += (dirs[k] === 'L' ? 1 : -1) * midAngle(k);
    return net;
  };
  for (let t = 0; t < 24 && Math.abs(netAngle()) > 50 * Math.PI / 180; t++) {
    const k = 1 + Math.floor(rng() * 10);
    const before = Math.abs(netAngle());
    dirs[k] = dirs[k] === 'L' ? 'R' : 'L';
    if (Math.abs(netAngle()) >= before) dirs[k] = dirs[k] === 'L' ? 'R' : 'L';
  }
  if (!dirs.includes('L')) dirs[5] = 'L';
  if (!dirs.includes('R')) dirs[6] = 'R';
  const segs: Seg[] = [];
  segs.push({ kind: 'straight', len: 155 + rng() * 20 });
  const midIdx: number[] = [];
  for (let k = 0; k < 12; k++) {
    const a = archOf(k);
    const r0 = a.rMin + rng() * (a.rMax - a.rMin);
    const ang = a.aMin + rng() * (a.aMax - a.aMin);
    const corner: CornerSpec = a.cls === 'dec'
      ? { dir: dirs[k], r0, r1: Math.max(30, r0 * (0.5 + rng() * 0.08)), angleDeg: ang }
      : { dir: dirs[k], r0, r1: Math.max(30, r0 + (rng() * 8 - 4)), angleDeg: ang };
    segs.push({ kind: 'corner', corner });
    if (k < 11) {
      midIdx.push(segs.length);
      segs.push({ kind: 'straight', len: setupLen(archOf(k + 1).cls, rng) });
    }
  }
  segs.push({ kind: 'straight', len: 150 + rng() * 20 });
  // Decreasing complex gets clean links: entry >= 80 keeps the entry-third
  // measurement uncontaminated, exit >= 95 doubles as runoff for the slow
  // exit (smoothing bleeds curvature ~28u into short links).
  // Reversal setup: a drift/dec corner after an opposite-direction corner
  // needs room to cross to the new outside line and initiate cleanly — a
  // 50u link at 75u/s is 0.7s for the switch plus the tap, which spins
  // pursuit-line drivers at the second entry. Floor those links to 85-95
  // (still <= 110, so S-transitions keep counting).
  const decPos = order.indexOf(decIdx);
  const linkBefore = decPos === 0 ? 0 : midIdx[decPos - 1];
  const linkAfter = decPos === 11 ? segs.length - 1 : midIdx[decPos];
  const needs: [number, number][] = [[linkBefore, 80], [linkAfter, 95]];
  for (let h = 0; h < 11; h++) {
    const nxt = archOf(h + 1);
    if (nxt.cls !== 'drift' && nxt.cls !== 'dec') continue;
    if (dirs[h + 1] === dirs[h]) continue; // compound flows need no switch room
    needs.push([midIdx[h], 85]);
  }
  for (const [li, need] of needs) {
    const st = segs[li];
    if (st.kind === 'straight' && st.len < need) st.len = need + rng() * 10;
  }
  // Two seeded mid-pack crest hosts floored to >=195 (landing + runoff room).
  // Hosts must feed an easy follower: only straights leading into a
  // sweeper/kink corner qualify (landing at full speed). Launches must also
  // start from a settled line: prefer straights after sweeper/kink exits, so
  // the car never jumps 40u after a big drift exit still carrying slide.
  const easyHost = midIdx.filter((_, h) => {
    const next = archOf(h + 1).cls;
    return next === 'sweep' || next === 'kink';
  });
  const settledHost = easyHost.filter((li) => {
    const prev = archOf(midIdx.indexOf(li)).cls;
    return prev === 'sweep' || prev === 'kink';
  });
  const pool = settledHost.length >= 2 ? settledHost
    : easyHost.length >= 2 ? easyHost : midIdx;
  const h1 = pool[Math.floor(rng() * pool.length)];
  let h2 = pool[Math.floor(rng() * pool.length)];
  while (h2 === h1) h2 = pool[Math.floor(rng() * pool.length)];
  for (const li of [h1, h2]) {
    const sg = segs[li];
    if (sg.kind === 'straight' && sg.len < 180) sg.len = 180 + rng() * 15;
  }
  // Guarantee at least two S-transitions: count flips across short links
  // from the assembled segments, flipping same-direction junctions only
  // while short (the acceptance loop covers any clearance fallout).
  const dirOf = (j: number): TurnDir =>
    (segs[1 + j * 2] as { kind: 'corner'; corner: CornerSpec }).corner.dir;
  const gapOf = (j: number): number =>
    (segs[2 + j * 2] as { kind: 'straight'; len: number }).len;
  let trans = 0;
  for (let j = 0; j < 11; j++) {
    if (dirOf(j) !== dirOf(j + 1) && gapOf(j) <= 110) trans++;
  }
  for (let j = 0; j < 11 && trans < 2; j++) {
    if (dirOf(j) === dirOf(j + 1) && gapOf(j) <= 110) {
      const c = segs[1 + (j + 1) * 2] as { kind: 'corner'; corner: CornerSpec };
      c.corner.dir = c.corner.dir === 'L' ? 'R' : 'L';
      trans++;
    }
  }
  return segs;
}

export interface BuiltTrack {
  points: Pt3[]; s: number[]; crestS: number[];
  straightRanges: { a: number; b: number }[];
  landmarkS: number[]; // seeded arc positions for scenery landmarks
}

// Seeded elevation voice: flat launch pad + finish are invariant (exact y=6
// for s<200, exact y=7 for s>L-150); climb height, roller amplitude/length/
// phase vary per day. Rollers live inside the climb term only, so they can
// never leak into the start/finish flats or forge false jump crests.
export interface ElevationParams {
  climbTop: number; rollerAmp: number; rollerLen: number; rollerPhase: number;
}
export function defaultElevation(): ElevationParams {
  return { climbTop: 14, rollerAmp: 0.8, rollerLen: 260, rollerPhase: 0 };
}
export function elevationForAttempt(day: string, attempt: number): ElevationParams {
  const rng = mulberry32(hashSeed(`canyon-elev-${day}#${attempt}`));
  return {
    climbTop: 10 + rng() * 6,
    rollerAmp: 0.4 + rng() * 0.4,
    rollerLen: 240 + rng() * 80,
    rollerPhase: rng() * Math.PI * 2,
  };
}
export function landmarkFracsForAttempt(day: string, attempt: number): number[] {
  const rng = mulberry32(hashSeed(`canyon-mark-${day}#${attempt}`));
  return [0.26 + rng() * 0.08, 0.5 + rng() * 0.1, 0.74 + rng() * 0.08];
}

// Integrate the grammar into a dense centerline; elevation is analytic
// (flat launch pad, rolling climb, descent, flat finish, gaussian jump crests
// placed early on the two long host straights with 100+ units of runoff).
export function buildCenterline(segs: Seg[], crestPick: number): BuiltTrack {
  return buildCenterlineSeeded(segs, crestPick, defaultElevation(), [0.3, 0.55, 0.8]);
}

export function buildCenterlineSeeded(
  segs: Seg[],
  crestPick: number,
  elev: ElevationParams,
  landmarkFracs: number[],
): BuiltTrack {
  type Raw = { x: number; z: number; s: number };
  const raw: Raw[] = [{ x: 0, z: 0, s: 0 }];
  let x = 0, z = 0, hd = 0, s = 0;
  const straightRanges: { a: number; b: number }[] = [];
  for (const seg of segs) {
    if (seg.kind === 'straight') {
      straightRanges.push({ a: s, b: s + seg.len });
      let left = seg.len;
      while (left > 1e-9) {
        const step = Math.min(DS, left);
        x += Math.sin(hd) * step; z += Math.cos(hd) * step; s += step; left -= step;
        raw.push({ x, z, s });
      }
    } else {
      const { dir, r0, r1, angleDeg } = seg.corner;
      const sign = dir === 'L' ? 1 : -1;
      const total = (angleDeg * Math.PI) / 180;
      let done = 0;
      while (done < total - 1e-9) {
        const r = r0 + (r1 - r0) * (done / total);
        const dphi = Math.min(DS / r, total - done);
        const step = r * dphi;
        hd += sign * dphi;
        x += Math.sin(hd) * step; z += Math.cos(hd) * step; s += step; done += dphi;
        raw.push({ x, z, s });
      }
    }
  }
  const L = s;
  // Crest hosts: two longest middle straights (never first/last).
  const mids = straightRanges.slice(1, -1)
    .map((r, k) => ({ r, len: r.b - r.a, k }))
    .sort((a, b) => b.len - a.len);
  const hosts = [mids[0].r, mids[1].r];
  // Place each crest ~150 units before its host straight ends so flight
  // (60-70u) plus 60u of settling runoff fit before the next corner entry,
  // with margin for the analyzer's smoothing bleed (~28u) at corner entries.
  // Hosts are floored to >=195u in grammarForAttempt, so this stays >=40u
  // past the host start.
  const crestS = hosts.map((h) => Math.min(h.b - 150 - (crestPick % 3) * 5, h.b - 150)).map((cs, k) => Math.max(cs, hosts[k].a + 40));
  const sstep = (a: number, b: number, x: number): number => {
    const u = clamp((x - a) / (b - a), 0, 1);
    return u * u * (3 - 2 * u);
  };
  const yAt = (ss: number): number => {
    const D1 = L - 350;
    const climb = 6 + (clamp(ss, 250, D1) - 250) / Math.max(D1 - 250, 1) * (elev.climbTop - 6)
      + Math.sin(((clamp(ss, 250, D1) - 250) / elev.rollerLen) * Math.PI * 2 + elev.rollerPhase) * elev.rollerAmp;
    const desc = 14 - (clamp(ss, D1, L - 150) - D1) / 200 * 7;
    let y = lerp(6, climb, sstep(210, 290, ss));
    y = lerp(y, desc, sstep(D1 - 60, D1 + 60, ss));
    y = lerp(y, 7, sstep(L - 260, L - 140, ss));
    for (const cs of crestS) {
      const d = (ss - cs) / 18;
      y += 4.5 * Math.exp(-d * d);
    }
    return y;
  };
  const points = raw.map((p) => ({ x: p.x, y: yAt(p.s), z: p.z }));
  return {
    points, s: raw.map((p) => p.s), crestS, straightRanges,
    landmarkS: landmarkFracs.map((f) => f * L),
  };
}

// Arc-distance helpers for speed-readable flow markers (never raw sample index).
export function arcLengths(points: Pt3[]): number[] {
  const s: number[] = [0];
  for (let i = 1; i < points.length; i++) {
    s.push(s[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].z - points[i - 1].z));
  }
  return s;
}

// Sample indices spaced ~`spacing` arc units apart (first/last excluded).
export function markerStations(s: number[], spacing: number): number[] {
  const out: number[] = [];
  let next = s[0] + spacing;
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] >= next) { out.push(i); next = s[i] + spacing; }
  }
  return out;
}

export interface CornerEvent {
  startS: number; endS: number; dir: TurnDir;
  medR: number; entryR: number; exitR: number; decreasing: boolean;
}
export interface TrackStats {
  length: number; n: number;
  events: CornerEvent[];
  clearance: number; maxGrade: number; elevMin: number; elevMax: number;
  crestCount: number;
}

// Independent verification of the sampled centerline: smooth curvature,
// segment contiguous corner events (never sample noise), measure radii.
export function analyzeCenterline(points: Pt3[]): TrackStats {
  const n = points.length;
  const s: number[] = [0];
  for (let i = 1; i < n; i++) {
    s.push(s[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].z - points[i - 1].z));
  }
  const length = s[n - 1];
  const head: number[] = [];
  for (let i = 0; i < n; i++) {
    const a = points[Math.max(i - 2, 0)], b = points[Math.min(i + 2, n - 1)];
    head.push(Math.atan2(b.x - a.x, b.z - a.z));
  }
  const unw: number[] = [head[0]];
  for (let i = 1; i < n; i++) {
    let d = head[i] - unw[i - 1];
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    unw.push(unw[i - 1] + d);
  }
  const W = 7;
  const sm: number[] = [];
  for (let i = 0; i < n; i++) {
    let acc = 0, cnt = 0;
    for (let k = -W; k <= W; k++) {
      const j = i + k;
      if (j >= 0 && j < n) { acc += unw[j]; cnt++; }
    }
    sm.push(acc / cnt);
  }
  const radius: number[] = new Array(n).fill(Infinity);
  for (let i = 1; i < n - 1; i++) {
    const ds = s[i + 1] - s[i - 1];
    const dh = Math.abs(sm[i + 1] - sm[i - 1]);
    if (dh > 1e-6 && ds > 1e-9) radius[i] = ds / dh;
  }
  // Segment runs under R=200 with >=30 units of arc; merge gaps <25 units.
  // The floor covers kink bends (~180u); straights still read near-infinite.
  const events: CornerEvent[] = [];
  let i = 0;
  const inRun = (k: number) => radius[k] < 200;
  while (i < n) {
    if (!inRun(i)) { i++; continue; }
    let j = i;
    while (j < n && inRun(j)) j++;
    let k = j;
    while (k < n && !inRun(k) && (k < j || s[k] - s[j - 1] < 25)) k++;
    if (k < n && inRun(k) && s[k] - s[j - 1] < 25) { j = k; while (j < n && inRun(j)) j++; }
    if (s[j - 1] - s[i] >= 30) {
      const seq = radius.slice(i, j).filter((v) => isFinite(v));
      const srt = seq.slice().sort((a, b) => a - b);
      const med = srt.length ? srt[Math.floor(srt.length / 2)] : Infinity;
      const trim = Math.min(8, Math.floor(seq.length / 4));
      const core = seq.slice(trim, seq.length - trim);
      const medOf = (arr: number[]): number => {
        const q = arr.slice().sort((a, b) => a - b);
        return q.length ? q[Math.floor(q.length / 2)] : med;
      };
      const third = Math.max(1, Math.floor(core.length / 3));
      const entryR = medOf(core.slice(0, third));
      const exitR = medOf(core.slice(-third));
      let turn = 0;
      for (let m = i; m < j - 1; m++) turn += unw[m + 1] - unw[m];
      events.push({
        startS: s[i], endS: s[j - 1], dir: turn >= 0 ? 'L' : 'R',
        medR: med, entryR, exitR, decreasing: exitR < 0.8 * entryR,
      });
    }
    i = j;
  }
  let clearance = Infinity;
  for (let a = 0; a < n; a += 2) {
    for (let b = a + 150; b < n; b += 2) {
      const d = Math.hypot(points[a].x - points[b].x, points[a].z - points[b].z);
      if (d < clearance) clearance = d;
    }
  }
  let maxGrade = 0, elevMin = Infinity, elevMax = -Infinity;
  for (let m = 0; m < n; m++) {
    elevMin = Math.min(elevMin, points[m].y);
    elevMax = Math.max(elevMax, points[m].y);
    if (m > 0) {
      const ds = s[m] - s[m - 1];
      if (ds > 1e-9) maxGrade = Math.max(maxGrade, Math.abs((points[m].y - points[m - 1].y) / ds));
    }
  }
  // Jump crests: local maxima with prominence >= 3 (rolling sine is ~1.6).
  let crestCount = 0;
  for (let m = 2; m < n - 2; m++) {
    const y = points[m].y;
    if (y <= points[m - 1].y || y <= points[m + 1].y) continue;
    if (y <= points[m - 2].y || y <= points[m + 2].y) continue;
    let floor = Infinity;
    for (let k = -60; k <= 60; k++) {
      const j = m + k;
      if (j >= 0 && j < n) floor = Math.min(floor, points[j].y);
    }
    if (y - floor < 2.5) continue;
    // Jump crests are narrow (gaussian FWHM ~42u); broad rollers/apexes excluded.
    const half = (y + floor) / 2;
    let w0 = m, w1 = m;
    while (w0 > 0 && points[w0 - 1].y > half) w0--;
    while (w1 < n - 1 && points[w1 + 1].y > half) w1++;
    if (s[w1] - s[w0] <= 70) crestCount++;
  }
  return { length, n, events, clearance, maxGrade, elevMin, elevMax, crestCount };
}

export interface AcceptedTrack {
  points: Pt3[]; stats: TrackStats; attempt: number; fallback: boolean; crestS: number[];
  estTimeS: number; checksum: string;
  landmarkS?: number[]; // optional: older harness literals omit it
}

export function checksumPoints(points: Pt3[]): string {
  let h = 2166136261 >>> 0;
  const mix = (v: number) => {
    const q = Math.round(v * 1000);
    h ^= q & 0xffff; h = Math.imul(h, 16777619);
    h ^= (q >>> 16) & 0xffff; h = Math.imul(h, 16777619);
  };
  for (const p of points) { mix(p.x); mix(p.y); mix(p.z); }
  return (h >>> 0).toString(16);
}

// Rough clean-lap estimate from the measured envelope: lateral-accel-capped
// speed profile (48 grip / 95 drift, drift cap applied through r<=130) with
// 50 accel / 70 decel passes.
export function estimateCleanTime(points: Pt3[]): number {
  const n = points.length;
  const s: number[] = [0];
  for (let m = 1; m < n; m++) s.push(s[m - 1] + Math.hypot(points[m].x - points[m - 1].x, points[m].z - points[m - 1].z));
  const head: number[] = [];
  for (let m = 0; m < n; m++) {
    const a = points[Math.max(m - 3, 0)], b = points[Math.min(m + 3, n - 1)];
    head.push(Math.atan2(b.x - a.x, b.z - a.z));
  }
  const vt: number[] = [];
  for (let m = 0; m < n; m++) {
    const a = Math.max(m - 3, 0), b = Math.min(m + 3, n - 1);
    let dh = Math.abs(head[b] - head[a]);
    while (dh > Math.PI) dh = 2 * Math.PI - dh;
    const ds = Math.max(s[b] - s[a], 1e-6);
    const r = ds / Math.max(dh, 1e-6);
    const aLat = r <= 130 ? 95 : 48;
    vt.push(Math.min(80, Math.sqrt(aLat * Math.min(r, 1e6))));
  }
  const v = vt.slice();
  v[0] = Math.min(v[0], 10);
  for (let m = 1; m < n; m++) {
    const ds = Math.max(s[m] - s[m - 1], 1e-6);
    v[m] = Math.min(vt[m], Math.sqrt(v[m - 1] * v[m - 1] + 2 * 75 * ds));
  }
  for (let m = n - 2; m >= 0; m--) {
    const ds = Math.max(s[m + 1] - s[m], 1e-6);
    v[m] = Math.min(v[m], Math.sqrt(v[m + 1] * v[m + 1] + 2 * 70 * ds));
  }
  let t = 0;
  for (let m = 1; m < n; m++) {
    const ds = s[m] - s[m - 1];
    t += (2 * ds) / Math.max(v[m] + v[m - 1], 1e-6);
  }
  return t;
}

function statsPass(stats: TrackStats, built: BuiltTrack): boolean {
  if (stats.length < LEN_MIN || stats.length > LEN_MAX) return false;
  const ev = stats.events;
  if (ev.length < EVENT_MIN || ev.length > EVENT_MAX) return false;
  const drift = ev.filter((e) => e.medR >= 45 && e.medR <= 130);
  if (drift.length < DRIFT_MIN || drift.length > DRIFT_MAX) return false;
  const sweep = ev.filter((e) => e.medR > 130 && e.medR <= 175);
  if (sweep.length < SWEEP_MIN || sweep.length > SWEEP_MAX) return false;
  if (!ev.some((e) => e.dir === 'L') || !ev.some((e) => e.dir === 'R')) return false;
  // Signature drift rhythm needs repeated S-transitions, not just one.
  let transitions = 0;
  for (let k = 1; k < ev.length; k++) {
    if (ev[k].dir !== ev[k - 1].dir && ev[k].startS - ev[k - 1].endS <= 110) transitions++;
  }
  if (transitions < 2) return false;
  if (!ev.some((e) => e.decreasing)) return false;
  if (ev[0].startS < FIRST_MIN || ev[0].startS > FIRST_MAX) return false;
  if (stats.clearance < CLEAR_MIN) return false;
  if (stats.maxGrade > GRADE_MAX) return false;
  if (stats.crestCount < 1 || stats.crestCount > 2) return false;
  // Every crest needs landing runoff: flight consumes ~65u, then 60u of
  // settling before the next corner entry, which must be an easy follower
  // (median radius > 75) since the driver lands at full speed.
  for (const cs of built.crestS) {
    const next = ev.find((e) => e.startS > cs);
    if (!next) {
      // Crest in the final stretch: the finish straight itself is the runoff.
      if (stats.length - (cs + 65) < 60) return false;
      continue;
    }
    if (next.startS - (cs + 65) < 60) return false;
    if (!(next.medR > 130)) return false;
  }
  return true;
}

export function acceptDailyTrack(day: string): AcceptedTrack {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const built = buildCenterlineSeeded(
      grammarForAttempt(day, attempt), attempt,
      elevationForAttempt(day, attempt), landmarkFracsForAttempt(day, attempt),
    );
    const stats = analyzeCenterline(built.points);
    if (statsPass(stats, built)) {
      return {
        points: built.points, stats, attempt, fallback: false, crestS: built.crestS,
        estTimeS: estimateCleanTime(built.points), checksum: checksumPoints(built.points),
        landmarkS: built.landmarkS,
      };
    }
  }
  const built = buildCenterline(grammarForAttempt(day, MAX_ATTEMPTS), 0);
  const stats = analyzeCenterline(built.points);
  return {
    points: built.points, stats, attempt: MAX_ATTEMPTS, fallback: true, crestS: built.crestS,
    estTimeS: estimateCleanTime(built.points), checksum: checksumPoints(built.points),
    landmarkS: built.landmarkS,
  };
}
