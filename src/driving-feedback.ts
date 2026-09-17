// driving-feedback.ts — pure drift-teaching + exit-feedback decisions.
// No DOM/THREE/audio: main.ts renders what these helpers decide, tests pin the
// gating so feedback can only fire on a real one-shot drift reward event.
import type { DriftEvent, DriftPhase, ExitGrade } from './drift-control.js';
import { fmt } from './share.js';

// ---------- restrained exit feedback ----------
// Only the actual one-shot 'exit' event with a good/perfect grade earns copy;
// weak/none exits and every non-exit event stay silent (no spam).
export function exitFeedback(event: DriftEvent, grade: ExitGrade): string {
  if (event !== 'exit') return '';
  if (grade === 'perfect') return 'PERFECT EXIT';
  if (grade === 'good') return 'CLEAN EXIT';
  return '';
}

// ---------- first-time drift lesson ----------
// Three steps, each advanced by a genuine sim/drift event, never by a timer:
//   steerTap -> a slide actually entered with a handbrake tap
//   sustain  -> the slide actually lasted SUSTAIN_S
//   counter  -> a real good/perfect exit fired
//   complete -> lesson finished (persist "seen" so it is optional next time)
export type LessonStep = 'steerTap' | 'sustain' | 'counter' | 'complete';
export const SUSTAIN_S = 0.6;

export interface LessonState { step: LessonStep }

export function createLesson(): LessonState {
  return { step: 'steerTap' };
}

export interface DriftObservation {
  event: DriftEvent;
  phase: DriftPhase;
  slideAge: number;
  grade: ExitGrade;
}

/** Advance the lesson one step on a real observation. Returns the new step. */
export function advanceLesson(s: LessonState, o: DriftObservation): LessonStep {
  if (s.step === 'steerTap') {
    if (o.event === 'entered') s.step = 'sustain';
  } else if (s.step === 'sustain') {
    if (o.phase === 'sliding' && o.slideAge >= SUSTAIN_S) s.step = 'counter';
  } else if (s.step === 'counter') {
    if (o.event === 'exit' && (o.grade === 'good' || o.grade === 'perfect')) s.step = 'complete';
  }
  return s.step;
}

/** Compact instruction for the current lesson step, keyboard vs touch. */
export function lessonText(step: LessonStep, touch: boolean): string {
  const drift = touch ? 'DRIFT' : 'DRIFT (↓ / space)';
  const steer = touch ? 'steer with the stick' : 'hold ← / →';
  switch (step) {
    case 'steerTap': return `1/3 ${steer}, tap ${drift}`;
    case 'sustain': return `2/3 hold the slide — countersteer when settled`;
    case 'counter': return `3/3 flick opposite to exit with a slingshot`;
    default: return '';
  }
}

// ---------- practice objective ----------
// Stepwise practice progress counted from actual good/perfect exits only.
export interface PracticeState {
  clean: number;
  perfect: number;
  goal: number;
}

export function createPractice(goal = 5): PracticeState {
  return { clean: 0, perfect: 0, goal: Math.max(1, Math.floor(goal)) };
}

/** Record an exit observation. Returns true only when it counted. */
export function recordPracticeExit(p: PracticeState, event: DriftEvent, grade: ExitGrade): boolean {
  if (event !== 'exit' || (grade !== 'good' && grade !== 'perfect')) return false;
  p.clean++;
  if (grade === 'perfect') p.perfect++;
  return true;
}

export function practiceDone(p: PracticeState): boolean {
  return p.clean >= p.goal;
}

export function practiceText(p: PracticeState, touch: boolean): string {
  const n = Math.min(p.clean, p.goal);
  if (practiceDone(p)) return `PRACTICE COMPLETE · ${p.perfect} perfect · progress saved`;
  const next = touch ? 'slide + countersteer exit' : 'tap DRIFT + countersteer';
  // The goal spans several turns, so state the retry-continuation explicitly.
  return `PRACTICE ${n}/${p.goal} · retries keep progress · ${next}`;
}

// ---------- km/h readout ----------
// World units are treated as metres; u/s * 3.6 = km/h (documented convention).
export function speedKmh(unitsPerSecond: number): number {
  if (!isFinite(unitsPerSecond) || unitsPerSecond < 0) return 0;
  return Math.round(unitsPerSecond * 3.6);
}

// ---------- medals, targets and sectors ----------
// Structurally identical to courses.ts CourseTargets so callers can pass
// course.targets without importing the course module here.
export interface MedalTargets { bronzeMs: number; silverMs: number; goldMs: number }
export type Medal = 'gold' | 'silver' | 'bronze' | 'none';

export function medalFor(ms: number, t: MedalTargets): Medal {
  if (!isFinite(ms) || ms <= 0) return 'none';
  if (ms <= t.goldMs) return 'gold';
  if (ms <= t.silverMs) return 'silver';
  if (ms <= t.bronzeMs) return 'bronze';
  return 'none';
}

/** Restrained "what to chase next" line. Never invents a target. */
export function nextTargetText(ms: number, t: MedalTargets): string {
  if (!isFinite(ms) || ms <= 0) return '';
  if (ms <= t.goldMs) return 'GOLD — now chase the reference';
  if (ms <= t.silverMs) return `next GOLD by ${fmt(t.goldMs - ms)}`;
  if (ms <= t.bronzeMs) return `next SILVER by ${fmt(t.silverMs - ms)}`;
  return `next BRONZE by ${fmt(t.bronzeMs - ms)}`;
}

export interface SectorDelta { index: number; deltaMs: number }

/**
 * Per-sector time difference against a valid ghost. Sector 0 starts at the
 * start line; each later sector runs from the previous split. Missing splits
 * are skipped (never guessed). Positive delta = slower than the ghost.
 */
export function sectorDeltas(splits: (number | null)[], ghostSplits: (number | null)[]): SectorDelta[] {
  const out: SectorDelta[] = [];
  let prevRun = 0, prevGhost = 0;
  const n = Math.min(splits.length, ghostSplits.length);
  for (let i = 0; i < n; i++) {
    const r = splits[i], g = ghostSplits[i];
    if (r === null || g === null || !isFinite(r) || !isFinite(g)) continue;
    out.push({ index: i, deltaMs: (r - prevRun) - (g - prevGhost) });
    prevRun = r; prevGhost = g;
  }
  return out;
}

/** Compact loss/gain line for the finish panel. Empty when nothing valid. */
export function sectorSummaryText(deltas: SectorDelta[]): string {
  if (deltas.length === 0) return '';
  let best = deltas[0], worst = deltas[0];
  for (const d of deltas) {
    if (d.deltaMs < best.deltaMs) best = d;
    if (d.deltaMs > worst.deltaMs) worst = d;
  }
  const parts: string[] = [];
  if (worst.deltaMs > 40) parts.push(`S${worst.index + 1} cost ${fmt(worst.deltaMs)}`);
  if (best.deltaMs < -40) parts.push(`S${best.index + 1} gained ${fmt(-best.deltaMs)}`);
  return parts.join(' · ');
}

// ---------- run kind (watch demo must never record a PB) ----------
export type RunKind = 'race' | 'watch';
export function recordsPB(kind: RunKind): boolean {
  return kind === 'race';
}

// ---------- mode-aware share links ----------
// Daily is the default and needs no mode param; fixed modes append `mode=`.
export function appendCourseMode(url: string, mode: 'daily' | 'practice' | 'benchmark'): string {
  if (mode === 'daily') return url;
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}mode=${mode}`;
}
