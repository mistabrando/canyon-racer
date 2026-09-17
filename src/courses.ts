// courses.ts — course modes and course identity for Canyon Racer.
//
// Three modes share one contract:
//   daily      — the existing seeded `acceptDailyTrack(day)` sprint.
//   practice   — a short fixed authored loop: one broad teachable drift plus a
//                generous easy exit, no blind stunt.
//   benchmark  — a fixed authored sprint: broad drift, readable reversal,
//                controlled crest/landing, a tightening challenge, fast finish.
//
// Fixed courses are built from the exported trackgen builders (grammar ->
// centerline -> analyzer -> checksum); `src/trackgen.ts` is unchanged. Targets
// are either calibrated against measured full runs (daily: the estimate timed
// by the documented factors) or derived from a recorded clean reference run
// (fixed modes). No bots run in the browser and nothing here fabricates a pace.
//
// Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock.

import {
  CREST_AMP, acceptDailyTrack, analyzeCenterline, buildCenterlineSeeded, checksumPoints,
  defaultElevation, estimateCleanTime,
} from './trackgen.js';
import type { AcceptedTrack, Seg } from './trackgen.js';
import { decodeGhost } from './ghost.js';
import type { GhostData } from './ghost.js';
import {
  COURSE_IDENTITY_GEN, COURSE_REFERENCE_VERSION, DAILY_TARGET_FACTORS,
  FIXED_IDENTITY_DAYS, FIXED_TARGET_MARGINS, REFERENCE_ENCODED,
} from './course-reference.js';

export type CourseMode = 'daily' | 'practice' | 'benchmark';

export interface CourseTargets {
  bronzeMs: number;
  silverMs: number;
  goldMs: number;
}

export interface CourseInfo {
  mode: CourseMode;
  title: string;
  description: string;
  identityDay: string;
  storageKey: string;
  track: AcceptedTrack;
  targets: CourseTargets;
  reference: GhostData | null;
}

export const COURSE_STORAGE_VERSION = 1;

// speed-dirt authoring: committed drift/tight corners separated by long power
// straights, with linked L/R reversals. Fast sweepers are the minority so the
// course is never a gentle cruise; every committed corner must be slid for a
// fast clean pass. See docs/agents/speed-dirt-courses.md.

// Practice: short, flat and simple Drift Practice — a teaching section needs no
// jumps. A committed 84u right drift teaches tap-and-counter, a long 170u power
// straight lets the car surge, then a linked 90u left drift teaches the
// reversal, and a gentle 150u right sweeper is the easy finish. Built with
// crestAmp 0 so the road stays flat (no launch/landing to learn around).
const PRACTICE_SEGS: Seg[] = [
  { kind: 'straight', len: 180 },
  { kind: 'corner', corner: { dir: 'R', r0: 84, r1: 84, angleDeg: 105 } },
  { kind: 'straight', len: 170 },
  { kind: 'corner', corner: { dir: 'L', r0: 90, r1: 90, angleDeg: 108 } },
  { kind: 'straight', len: 160 },
  { kind: 'corner', corner: { dir: 'R', r0: 150, r1: 150, angleDeg: 40 } },
  { kind: 'straight', len: 150 },
];

// Benchmark: authored sprint with exactly ONE controlled crest, placed mid the
// single 260u host straight so a ~110u flight plus settling runway lands well
// before the next (easy) sweeper. Committed left drift, linked reversal into a
// committed right drift, the long crest straight, an easy left sweeper, a
// tightening decreasing-radius right challenge, a long power exit, a gentle
// left sweeper, and a fast finish. Net turn is small, so it never self-crosses.
const BENCHMARK_SEGS: Seg[] = [
  { kind: 'straight', len: 190 },
  { kind: 'corner', corner: { dir: 'L', r0: 96, r1: 96, angleDeg: 112 } },
  { kind: 'straight', len: 130 },
  { kind: 'corner', corner: { dir: 'R', r0: 92, r1: 92, angleDeg: 116 } },
  { kind: 'straight', len: 260 },
  { kind: 'corner', corner: { dir: 'L', r0: 150, r1: 150, angleDeg: 42 } },
  { kind: 'straight', len: 110 },
  { kind: 'corner', corner: { dir: 'R', r0: 68, r1: 38, angleDeg: 100 } },
  { kind: 'straight', len: 220 },
  { kind: 'corner', corner: { dir: 'L', r0: 160, r1: 160, angleDeg: 38 } },
  { kind: 'straight', len: 200 },
];

const FIXED_SEGS: Record<'practice' | 'benchmark', Seg[]> = {
  practice: PRACTICE_SEGS,
  benchmark: BENCHMARK_SEGS,
};

// Practice is a flat teaching section (no crest). Benchmark uses exactly one
// controlled crest (hostCount 1) so the flight has a long straight to land on.
const FIXED_CREST: Record<'practice' | 'benchmark', { amp: number; hosts: number }> = {
  practice: { amp: 0, hosts: 2 },
  benchmark: { amp: CREST_AMP, hosts: 1 },
};

/**
 * Parse a mode from a URL search string. Recognizes `m`/`mode`/`course` with
 * `daily`, `practice`, or `benchmark` (case-insensitive). Anything else,
 * including a missing value, falls back to `daily`.
 */
export function parseCourseMode(search: string): CourseMode {
  const q = (search || '').replace(/^\?/, '');
  for (const part of q.split('&')) {
    if (!part) continue;
    const eq = part.indexOf('=');
    const rawKey = eq < 0 ? part : part.slice(0, eq);
    const rawVal = eq < 0 ? '' : part.slice(eq + 1);
    let key = rawKey;
    let val = rawVal;
    try { key = decodeURIComponent(rawKey); val = decodeURIComponent(rawVal); } catch { /* keep raw */ }
    if (key !== 'm' && key !== 'mode' && key !== 'course') continue;
    const mode = val.trim().toLowerCase();
    if (mode === 'practice' || mode === 'benchmark') return mode;
    if (mode === 'daily') return 'daily';
  }
  return 'daily';
}

/**
 * Course-isolated storage key. Daily includes the identity day so a shared
 * fallback geometry checksum cannot merge two dates' PBs; fixed modes are
 * date-independent (same key for the same geometry). Exported for tests/tools;
 * the game consumes `CourseInfo.storageKey`.
 */
export function courseStorageKey(mode: CourseMode, identityDay: string, checksum: string): string {
  const version = `v${COURSE_REFERENCE_VERSION}.${COURSE_STORAGE_VERSION}`;
  // Daily keys also bind the date: two days whose fallback geometry shares a
  // checksum must still keep separate scalar PBs (ghost identity day differs).
  // Fixed courses are genuinely date-independent and keep one key per geometry.
  return mode === 'daily'
    ? `canyon-course-${mode}-${checksum}-${identityDay}-${version}`
    : `canyon-course-${mode}-${checksum}-${version}`;
}

function fixedTrack(mode: 'practice' | 'benchmark', segs: Seg[]): AcceptedTrack {
  const c = FIXED_CREST[mode];
  const built = buildCenterlineSeeded(segs, 0, defaultElevation(), [0.3, 0.55, 0.8], c.amp, c.hosts);
  const stats = analyzeCenterline(built.points);
  return {
    points: built.points,
    stats,
    attempt: 0,
    fallback: false,
    crestS: built.crestS,
    estTimeS: estimateCleanTime(built.points),
    checksum: checksumPoints(built.points),
    landmarkS: built.landmarkS,
  };
}

function fixedTargets(refMs: number): CourseTargets {
  return {
    bronzeMs: Math.round(refMs * FIXED_TARGET_MARGINS.bronze),
    silverMs: Math.round(refMs * FIXED_TARGET_MARGINS.silver),
    goldMs: Math.round(refMs * FIXED_TARGET_MARGINS.gold),
  };
}

function dailyTargets(estTimeS: number): CourseTargets {
  const ms = estTimeS * 1000;
  return {
    bronzeMs: Math.round(ms * DAILY_TARGET_FACTORS.bronze),
    silverMs: Math.round(ms * DAILY_TARGET_FACTORS.silver),
    goldMs: Math.round(ms * DAILY_TARGET_FACTORS.gold),
  };
}

function describe(mode: CourseMode, day: string): { title: string; description: string } {
  if (mode === 'practice') {
    return {
      title: 'Drift Practice',
      description: 'Short committed drifts with long power straights. Steer, tap the handbrake, then countersteer to surge out clean.',
    };
  }
  if (mode === 'benchmark') {
    return {
      title: 'Benchmark Sprint',
      description: 'Fast sprint: committed drifts, linked reversal, a crest landing, a tightening challenge, and long power exits.',
    };
  }
  return {
    title: 'Canyon Daily',
    description: `Seeded sprint for ${day} — the same course for everyone.`,
  };
}

const cache = new Map<string, CourseInfo>();

/**
 * Resolve a course for a mode/day. Deterministic and cached. Daily uses the
 * existing seeded generator; fixed modes build their authored centerline from
 * the shared trackgen builders. No simulation or bot runs happen here.
 */
export function resolveCourse(mode: CourseMode, day: string): CourseInfo {
  // Fixed modes ignore the requested day: cache on mode alone so repeated
  // calls stay cheap and the same object is returned.
  const key = mode === 'daily' ? `daily|${day}` : mode;
  const hit = cache.get(key);
  if (hit) return hit;

  const info = buildCourse(mode, day);
  cache.set(key, info);
  return info;
}

function buildCourse(mode: CourseMode, day: string): CourseInfo {
  if (mode === 'daily') {
    const track = acceptDailyTrack(day);
    const { title, description } = describe(mode, day);
    return {
      mode,
      title,
      description,
      identityDay: day,
      storageKey: courseStorageKey(mode, day, track.checksum),
      track,
      targets: dailyTargets(track.estTimeS),
      reference: null,
    };
  }

  const track = fixedTrack(mode, FIXED_SEGS[mode]);
  const identityDay = FIXED_IDENTITY_DAYS[mode];
  const decode = decodeGhost(REFERENCE_ENCODED[mode]);
  // Fail closed: a reference that does not decode, or that carries the wrong
  // geometry identity, is dropped rather than presented as a paced rival.
  const reference = decode
    && decode.track
    && decode.track.course.toLowerCase() === track.checksum.toLowerCase()
    && decode.track.gen === COURSE_IDENTITY_GEN
    ? decode
    : null;
  const refMs = reference ? reference.t : Math.round(track.estTimeS * 1000);
  const { title, description } = describe(mode, day);
  return {
    mode,
    title,
    description,
    identityDay,
    storageKey: courseStorageKey(mode, identityDay, track.checksum),
    track,
    targets: fixedTargets(refMs),
    reference,
  };
}

/** Test/debug helper: clear the memoized courses (not used by the game loop). */
export function clearCourseCache(): void {
  cache.clear();
}
