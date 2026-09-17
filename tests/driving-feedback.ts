// Headless tests for src/driving-feedback.ts: exit-feedback gating, the
// three-step drift lesson, practice counting, and the km/h convention.
declare const process: { exit(c: number): void };
import {
  exitFeedback, createLesson, advanceLesson, lessonText,
  createPractice, recordPracticeExit, practiceDone, practiceText,
  speedKmh, SUSTAIN_S,
  medalFor, nextTargetText, sectorDeltas, sectorSummaryText,
  recordsPB, appendCourseMode,
} from '../src/driving-feedback.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

// Exit feedback fires only on the real one-shot reward event.
{
  ok(exitFeedback('entered', 'none') === '', 'entered never shows exit feedback');
  ok(exitFeedback('expired', 'none') === '', 'expired never shows exit feedback');
  ok(exitFeedback('exit', 'none') === '' && exitFeedback('exit', 'weak') === '', 'weak/no exit shows nothing');
  ok(exitFeedback('exit', 'good') === 'CLEAN EXIT', 'good exit -> CLEAN EXIT');
  ok(exitFeedback('exit', 'perfect') === 'PERFECT EXIT', 'perfect exit -> PERFECT EXIT');
}

// Lesson advances only on genuine observations, in order.
{
  const s = createLesson();
  ok(s.step === 'steerTap', 'lesson starts at steer + tap');
  advanceLesson(s, { event: 'rejected', phase: 'idle', slideAge: 0, grade: 'none' });
  ok(s.step === 'steerTap', 'rejected entry does not advance');
  advanceLesson(s, { event: 'entered', phase: 'sliding', slideAge: 0, grade: 'none' });
  ok(s.step === 'sustain', 'tap entry advances to sustain');
  advanceLesson(s, { event: 'none', phase: 'sliding', slideAge: SUSTAIN_S - 0.01, grade: 'none' });
  ok(s.step === 'sustain', 'short slide does not satisfy sustain');
  advanceLesson(s, { event: 'none', phase: 'sliding', slideAge: SUSTAIN_S, grade: 'none' });
  ok(s.step === 'counter', 'sustained slide advances to countersteer');
  advanceLesson(s, { event: 'exit', phase: 'cooldown', slideAge: 1.0, grade: 'weak' });
  ok(s.step === 'counter', 'weak exit does not finish the lesson');
  advanceLesson(s, { event: 'exit', phase: 'cooldown', slideAge: 1.1, grade: 'good' });
  ok(s.step === 'complete', 'good exit completes the lesson');
  ok(lessonText('steerTap', false).includes('DRIFT') && lessonText('steerTap', true).includes('DRIFT'), 'first step names the drift input');
  ok(lessonText('steerTap', false) !== lessonText('steerTap', true), 'keyboard and touch wording differ');
  ok(lessonText('complete', false) === '', 'completed lesson shows nothing');
}

// Practice counts only good/perfect exits and completes at the goal.
{
  const p = createPractice(3);
  ok(p.clean === 0 && !practiceDone(p), 'practice starts empty');
  ok(recordPracticeExit(p, 'entered', 'none') === false, 'entry does not count');
  ok(recordPracticeExit(p, 'exit', 'weak') === false, 'weak exit does not count');
  ok(recordPracticeExit(p, 'exit', 'good') === true && p.clean === 1, 'good exit counts');
  ok(recordPracticeExit(p, 'exit', 'perfect') === true && p.clean === 2 && p.perfect === 1, 'perfect exit counts and tracks');
  ok(!practiceDone(p), 'not done before the goal');
  recordPracticeExit(p, 'exit', 'good');
  ok(practiceDone(p), 'done at the goal');
  ok(practiceText(p, false).startsWith('PRACTICE COMPLETE'), 'completion text shown');
  const p2 = createPractice(5);
  recordPracticeExit(p2, 'exit', 'good');
  ok(practiceText(p2, false).includes('1/5'), 'progress text shows the count');
  ok(practiceText(p2, false).includes('retries keep progress'), 'progress text explains retry persistence');
}

// km/h convention: u/s treated as m/s.
{
  ok(speedKmh(0) === 0, 'zero speed');
  ok(speedKmh(10) === 36, '10 u/s -> 36 km/h');
  ok(speedKmh(80) === 288, '80 u/s -> 288 km/h');
  ok(speedKmh(-5) === 0 && speedKmh(NaN) === 0, 'garbage/negative speed clamps to zero');
}

// Medals and next-target copy use only supplied targets.
{
  const t = { goldMs: 10000, silverMs: 12000, bronzeMs: 14000 };
  ok(medalFor(9500, t) === 'gold', 'under gold is gold');
  ok(medalFor(11000, t) === 'silver', 'between gold and silver is silver');
  ok(medalFor(13000, t) === 'bronze', 'between silver and bronze is bronze');
  ok(medalFor(15000, t) === 'none' && medalFor(0, t) === 'none', 'over bronze or invalid has no medal');
  ok(nextTargetText(11000, t).includes('GOLD'), 'silver run chases gold');
  ok(nextTargetText(9500, t).includes('GOLD'), 'gold run references the reference');
  ok(nextTargetText(NaN, t) === '', 'invalid time has no target copy');
}

// Sector deltas compare real split times and never fabricate missing splits.
{
  const d = sectorDeltas([1000, 3000, 6000], [900, 3100, 5900]);
  ok(d.length === 3, 'all sectors compared');
  ok(d[0].deltaMs === 100 && d[1].deltaMs === -200 && d[2].deltaMs === 200, 'sector deltas are per-sector', JSON.stringify(d));
  const missing = sectorDeltas([1000, null, 6000], [900, 3100, 5900]);
  ok(missing.length === 2, 'missing split is skipped, not guessed');
  ok(sectorSummaryText([]) === '', 'no comparison means no summary line');
  const text = sectorSummaryText(d);
  ok(text.includes('S3') && text.includes('cost'), 'summary names the worst sector');
}

// Watching a demonstration can never count as a PB.
{
  ok(recordsPB('race') === true, 'racing records a PB');
  ok(recordsPB('watch') === false, 'watching never records a PB');
}

// Mode-aware share links: daily default, fixed modes carry mode.
{
  ok(appendCourseMode('https://x/y?d=2026-09-15&t=1', 'daily') === 'https://x/y?d=2026-09-15&t=1', 'daily share omits mode');
  ok(appendCourseMode('https://x/y?d=2026-01-01&t=1', 'practice') === 'https://x/y?d=2026-01-01&t=1&mode=practice', 'practice share appends mode');
  ok(appendCourseMode('https://x/y', 'benchmark') === 'https://x/y?mode=benchmark', 'benchmark share starts the query');
}

console.log(`\ndriving-feedback: ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
