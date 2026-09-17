// courses.ts tests — packets 7 + target-data (8). Deterministic, headless,
// no DOM. Proves: mode parsing/fallback, daily identity, fixed authored-course
// geometry and determinism, course-isolated storage keys, recorded reference
// integrity (real clean simulated run, geometry-bound identity), and that both
// a conservative and a skilled controller finish the new modes with measured
// splits/contacts and attainable, ordered targets.
//
// Compile explicitly (not in tsconfig.tests.json):
//   ./node_modules/.bin/tsc src/sim.ts src/barrier-plan.ts src/share.ts \
//     src/ghost.ts src/drift-control.ts src/trackgen.ts src/courses.ts \
//     src/course-reference.ts tests/courses.ts --target es2020 --module nodenext \
//     --moduleResolution nodenext --strict --skipLibCheck \
//     --outDir .muse/test-output/courses
declare const process: { exit(c: number): void };
import {
  resolveCourse, parseCourseMode, clearCourseCache, COURSE_STORAGE_VERSION, courseStorageKey,
} from '../src/courses.js';
import type { CourseInfo, CourseMode } from '../src/courses.js';
import { TRACK_HALF_W, acceptDailyTrack } from '../src/trackgen.js';
import { planBarriers } from '../src/barrier-plan.js';
import {
  trackFromPoints, createSimState, resetRun, simStep, simRespawn, DT, clamp,
} from '../src/sim.js';
import type { SimState, StepInput, TrackView } from '../src/sim.js';
import {
  checkIdentity, decodeGhost, makeExpectedTrack, sampleGhost, TRACK_IDENTITY_GEN, GHOST_MAX_RAW_LEN,
} from '../src/ghost.js';
import type { GhostRec } from '../src/ghost.js';
import { makeBot } from './informed-bot.js';
import { DAILY_TARGET_FACTORS, FIXED_TARGET_MARGINS, REFERENCE_TIMES_MS, REFERENCE_ENCODED } from '../src/course-reference.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}${detail ? ' ' + detail : ''}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

// ---------------------------------------------------------------------------
// Informed controllers (headless bots). Same steering policy for both; the
// `handbrake` flag is the only difference, so grip-only vs timed-drift is a
// fair comparison (no deliberate handicap). Policy: bounded pure pursuit to a
// speed-scaled look-ahead, bounded counter-slip damping, and a curvature
// feedforward decision to engage the handbrake only while the current speed
// exceeds the grip capability of the upcoming bend. Tuned to the frozen
// Trackmania physics (cruise 140, drift 112). No teleporting or track
// knowledge. Crash memory (respawn counting + per-region traps with escalating
// caution, sane-gated recovery) models a skilled driver backing off after
// mistakes; it only activates after rescues, so clean-run pace is unaffected.
// ---------------------------------------------------------------------------

const skilled = makeBot(true);
const conservative = makeBot(false);

interface RunResult {
  t: number; finished: boolean; walls: number; respawns: number;
  splits: number[]; maxOob: number; rec: GhostRec;
}
function wire(info: CourseInfo): TrackView {
  const tr = trackFromPoints(info.track.points, TRACK_HALF_W);
  tr.barrier = planBarriers(info.track.stats.length, info.track.stats.events, info.track.crestS);
  return tr;
}
// Event end sample indices for split capture.
function splitIdxs(tr: TrackView, info: CourseInfo): number[] {
  return info.track.stats.events.map((e) => {
    let i = 0;
    while (i < tr.n - 1 && tr.cum[i] < e.endS) i++;
    return i;
  });
}
function runCourse(info: CourseInfo, step: ReturnType<typeof makeBot>, capS = 120): RunResult {
  const reset = (step as unknown as { reset?: () => void }).reset;
  if (reset) reset();
  const tr = wire(info);
  const ends = splitIdxs(tr, info);
  const s = createSimState();
  resetRun(s, tr, 0);
  let walls = 0, respawns = 0, noProg = 0, lastS = 0, prevSlip = 0, recover = 0, maxOob = 0;
  const splits: number[] = [];
  let next = 0;
  const cap = Math.floor(capS / DT);
  const note = (step as unknown as { noteRespawn?: (sIdx: number, tr: TrackView) => void }).noteRespawn;
  for (let k = 0; k < cap && !s.finished; k++) {
    let inp: StepInput;
    // Sane-gated recovery: grip-only toward the road until on-road, roughly
    // aligned and moving (velocity-align first while deeply sideways), or 3s
    // timeout — never hand a slide to the attack policy.
    const liR = Math.max(0, Math.min(s.lastIdx, tr.n - 1));
    const latR = Math.abs((s.px - tr.x[liR]) * tr.nx[liR] + (s.pz - tr.z[liR]) * tr.nz[liR]);
    const sane = s.grounded && latR <= tr.halfW && Math.abs(prevSlip) < 0.2 && Math.hypot(s.vx, s.vz) > 40;
    if (recover > 0 && !sane) {
      recover -= DT;
      if (Math.abs(prevSlip) > 0.15) {
        const vang = Math.atan2(s.vx, s.vz);
        let ve = vang - s.heading;
        while (ve > Math.PI) ve -= 2 * Math.PI;
        while (ve < -Math.PI) ve += 2 * Math.PI;
        inp = { steer: clamp(-ve * 3, -1, 1), drift: false };
      } else {
        const ry = tr.yaw[Math.min(s.lastIdx + 4, tr.n - 1)];
        let he = ry - s.heading;
        while (he > Math.PI) he -= 2 * Math.PI;
        while (he < -Math.PI) he += 2 * Math.PI;
        inp = { steer: clamp(-he * 1.5 - clamp(prevSlip * 3, -1, 1), -1, 1), drift: false };
      }
    } else {
      recover = 0;
      inp = step(s, tr, prevSlip);
    }
    const infoStep = simStep(s, tr, inp, DT);
    prevSlip = infoStep.slip;
    if (infoStep.wallHit) walls++;
    maxOob = Math.max(maxOob, infoStep.oobMs);
    if (s.lastIdx <= lastS + 1) noProg++; else { noProg = 0; lastS = s.lastIdx; }
    if (infoStep.oobMs > 1500 || noProg > 300) {
      simRespawn(s); respawns++; noProg = 0; lastS = s.lastIdx; recover = 3.0;
      if (note) note(s.lastIdx, tr);
    }
    while (next < ends.length && s.lastIdx >= ends[next]) { splits.push(s.raceMs / 1000); next++; }
  }
  return { t: s.raceMs / 1000, finished: s.finished, walls, respawns, splits, maxOob, rec: s.rec };
}

const DAY = '2026-09-15';
const ISO = /^\d{4}-\d{2}-\d{2}$/;

// C1. Mode parsing: recognition + safe fallback on anything malformed.
{
  const eq = (search: string, mode: CourseMode) => ok(parseCourseMode(search) === mode, `parse "${search}" -> ${mode}`);
  eq('', 'daily'); eq('?', 'daily'); eq('?d=2026-09-15', 'daily'); eq('?m=bogus', 'daily');
  eq('?m=daily', 'daily'); eq('?m=practice', 'practice'); eq('?mode=benchmark', 'benchmark');
  eq('?course=PRACTICE', 'practice'); eq('?m=Benchmark&d=2026-09-15', 'benchmark');
  eq('?d=2026-09-15&m=practice', 'practice'); eq('?m=%70ractice', 'practice');
  eq('?m=%E0%A4%A', 'daily'); // malformed escape must not throw
}

// C2. Daily still calls the existing generator; identity + ordered targets.
{
  clearCourseCache();
  const info = resolveCourse('daily', DAY);
  const gen = acceptDailyTrack(DAY);
  ok(info.mode === 'daily' && info.identityDay === DAY, 'daily identity day preserved');
  ok(info.reference === null, 'daily has no recorded reference');
  ok(info.track.checksum === gen.checksum, 'daily track is the existing generator output');
  ok(info.targets.goldMs > 0 && info.targets.goldMs < info.targets.silverMs && info.targets.silverMs < info.targets.bronzeMs,
    'daily targets ordered gold < silver < bronze',
    `${info.targets.goldMs}/${info.targets.silverMs}/${info.targets.bronzeMs}`);
  const expGold = Math.round(gen.estTimeS * 1000 * DAILY_TARGET_FACTORS.gold);
  ok(info.targets.goldMs === expGold, 'daily gold is estimate x documented factor');
  ok(info.storageKey.includes('daily') && info.storageKey.includes(gen.checksum) && info.storageKey.includes(String(COURSE_STORAGE_VERSION)),
    'daily storage key carries mode + checksum + version', info.storageKey);
}

// C3. Fixed-course determinism, day independence, and day-valid identity.
{
  clearCourseCache();
  const p1 = resolveCourse('practice', DAY);
  const b1 = resolveCourse('benchmark', DAY);
  const p2 = resolveCourse('practice', '2026-07-04');
  const b2 = resolveCourse('benchmark', '2026-06-01');
  ok(p1 === resolveCourse('practice', DAY), 'fixed course is memoized for repeated calls');
  ok(p1.track.checksum === p2.track.checksum && b1.track.checksum === b2.track.checksum,
    'fixed geometry is independent of the requested day');
  ok(p1.identityDay === '2026-01-01' && b1.identityDay === '2026-01-02', 'fixed identity days are the fixed dates');
  ok(ISO.test(p1.identityDay) && ISO.test(b1.identityDay) && !isNaN(Date.parse(p1.identityDay)),
    'fixed identity days are valid ISO dates');
  ok(p1.storageKey !== b1.storageKey && p1.storageKey !== resolveCourse('daily', DAY).storageKey,
    'storage keys are course-isolated');
}

// C4. Authored geometry: practice teaches one broad drift; benchmark has a
// broad drift, a readable reversal, a controlled crest/landing, a tightening
// challenge and a fast finish. Clearance and crest runoff hold.
{
  clearCourseCache();
  const p = resolveCourse('practice', DAY);
  const b = resolveCourse('benchmark', DAY);
  const driftOf = (info: CourseInfo) => info.track.stats.events.filter((e) => e.medR >= 45 && e.medR <= 130);
  // speed-dirt practice teaches two linked committed drifts (R then L) plus a
  // gentle finish sweeper, all separated by long power straights.
  ok(driftOf(p).length === 2, 'practice has two committed drifts', `n=${driftOf(p).length}`);
  ok(driftOf(p).every((e) => e.medR < 100), 'practice drifts are committed (sub-100u)',
    driftOf(p).map((e) => e.medR.toFixed(0)).join(','));
  ok(p.track.stats.events.length >= 2, 'practice has an exit section beyond the drifts');
  ok(p.track.stats.length < 1400, 'practice is short', `len=${p.track.stats.length.toFixed(0)}`);
  // Power exits: every committed drift is followed by a real straight.
  let shortExit = 0;
  for (const e of driftOf(p)) {
    const next = p.track.stats.events.find((x) => x.startS > e.startS);
    const exit = (next ? next.startS : p.track.stats.length) - e.endS;
    if (exit < 110) shortExit++;
  }
  ok(shortExit === 0, 'practice power exits are long enough to surge', `short=${shortExit}`);

  const ev = b.track.stats.events;
  ok(ev.some((e) => e.dir === 'L') && ev.some((e) => e.dir === 'R'), 'benchmark has left and right corners');
  let reversal = false;
  for (let k = 1; k < ev.length; k++) if (ev[k].dir !== ev[k - 1].dir && ev[k].startS - ev[k - 1].endS <= 130) reversal = true;
  ok(reversal, 'benchmark has a readable reversal before its tightening challenge');
  ok(ev.some((e) => e.decreasing), 'benchmark has a tightening (decreasing-radius) challenge');
  const broad = ev.filter((e) => e.medR >= 80 && e.medR <= 130 && !e.decreasing);
  ok(broad.length >= 2, 'benchmark has two broad committed drift arcs', `n=${broad.length}`);
  ok(b.track.stats.crestCount >= 1, 'benchmark has at least one controlled crest', `crest=${b.track.stats.crestCount}`);
  // Crest runway: every crest is followed by an easy (R>130) corner or the
  // finish straight, so nobody lands blind into a hard turn.
  let badRunway = 0;
  for (const cs of b.track.crestS) {
    const next = ev.find((e) => e.startS > cs);
    if (!next) { if (b.track.stats.length - (cs + 65) < 55) badRunway++; continue; }
    if (next.startS - (cs + 65) < 55 || !(next.medR > 130)) badRunway++;
  }
  ok(badRunway === 0, 'every benchmark crest has easy landing runoff', `bad=${badRunway}`);
  ok(p.track.stats.clearance >= 40 && b.track.stats.clearance >= 40, 'authored courses do not self-cross',
    `clear ${p.track.stats.clearance.toFixed(0)}/${b.track.stats.clearance.toFixed(0)}`);
}

// C5. Reference integrity on the frozen speed-dirt physics: decodes, carries the
// matching geometry identity, is a finish at the road end, and a rerun of the
// informed controller reproduces exactly the recorded time. Nothing fabricated.
{
  clearCourseCache();
  for (const mode of ['practice', 'benchmark'] as const) {
    const info = resolveCourse(mode, DAY);
    const g = info.reference;
    ok(!!g, `${mode} reference decodes`);
    if (!g) continue;
    const verdict = checkIdentity(g, makeExpectedTrack(info.identityDay, info.track.checksum, TRACK_IDENTITY_GEN));
    ok(verdict === 'match', `${mode} reference identity matches the built geometry`, verdict);
    ok(g.t === REFERENCE_TIMES_MS[mode], `${mode} reference time matches recorded value`, `${g.t}`);
    let mono = true;
    for (let k = 1; k < g.ts.length; k++) if (g.ts[k] < g.ts[k - 1]) mono = false;
    ok(mono && g.ts[g.ts.length - 1] === g.t, `${mode} reference timestamps are monotonic and finish-exact`);
    const end = sampleGhost(g, g.t);
    const tr = wire(info);
    const last = tr.n - 1;
    const dEnd = Math.hypot(end.x - tr.x[last], end.z - tr.z[last]);
    ok(dEnd < 8, `${mode} reference finishes at the road end`, `d=${dEnd.toFixed(2)}`);
    // Replay the identical controller on the resolved track.
    const skills = runCourse(info, skilled);
    ok(skills.finished && skills.walls === 0 && skills.respawns === 0,
      `${mode} skilled run is clean`, `fin=${skills.finished} walls=${skills.walls} resp=${skills.respawns}`);
    ok(Math.round(skills.t * 1000) === g.t, `${mode} reference is exactly the skilled run`,
      `${Math.round(skills.t * 1000)} vs ${g.t}`);
    ok(g.t < info.targets.goldMs, `${mode} reference beats gold`, `ref=${g.t} gold=${info.targets.goldMs}`);
    // Local full-fidelity demo: every 120ms sample kept, within quantization.
    ok(REFERENCE_ENCODED[mode].length < GHOST_MAX_RAW_LEN,
      `${mode} full payload stays within the codec decode limit`, `len=${REFERENCE_ENCODED[mode].length}`);
    ok(g.p.length === skills.rec.p.length,
      `${mode} reference keeps every recorded sample`, `${g.p.length}/${skills.rec.p.length}`);
    let maxErr = 0;
    for (let k = 0; k < skills.rec.ts.length; k++) {
      const p = sampleGhost(g, skills.rec.ts[k]);
      const rp = skills.rec.p[k];
      maxErr = Math.max(maxErr, Math.hypot(p.x - rp[0], p.z - rp[2]));
    }
    ok(maxErr <= 0.4, `${mode} reference interpolation stays within quantization`, `maxErr=${maxErr.toFixed(3)}`);
  }
}

// C6. Fair grip-vs-drift comparison with the identical steering policy: the only
// difference is the handbrake. The clean informed line is contact-free and
// clears gold; the grip-only policy either loses time or fails outright, and is
// never claimed slower unless it actually is.
{
  clearCourseCache();
  for (const mode of ['practice', 'benchmark'] as const) {
    const info = resolveCourse(mode, DAY);
    const a = runCourse(info, skilled);
    const b = runCourse(info, conservative);
    ok(a.finished, `${mode} informed timed-drift line finishes`, `fin=${a.finished}`);
    ok(a.walls === 0 && a.respawns === 0, `${mode} informed line is contact-free`,
      `walls=${a.walls} resp=${a.respawns}`);
    // Honest comparison: grip-only is worse (more contacts) and never faster.
    ok(b.walls > 0, `${mode} grip-only line records honest contacts`, `walls=${b.walls}`);
    ok(!b.finished || b.t > a.t, `${mode} grip-only line is not faster than timed drift`,
      `grip=${b.t.toFixed(2)} fin=${b.finished} vs drift=${a.t.toFixed(2)}`);
    ok(a.t * 1000 <= info.targets.goldMs, `${mode} gold attainable by the clean timed-drift line`,
      `skilled=${(a.t * 1000).toFixed(0)}<=${info.targets.goldMs}`);
    const need = info.track.stats.events.length;
    const sorted = a.splits.length >= need && a.splits.every((v, i) => i === 0 || v >= a.splits[i - 1]);
    ok(sorted, `${mode} splits cover every event in order`, `splits=${a.splits.map((v) => v.toFixed(1)).join(',')}`);
  }
}

// C7. Practical daily sample validation: the informed controller completes a
// representative fixed sample cleanly (no respawns, no contacts) on a majority
// of seeds, and the measured clean pace sits inside the documented calibration
// band under gold. Seeds that the single deterministic policy cannot yet drive
// cleanly are reported, not hidden.
{
  clearCourseCache();
  const seeds = [
    '2026-06-01', '2026-06-02', '2026-06-03', '2026-06-04',
    '2026-06-07', '2026-07-04', '2026-07-28', '2026-08-15',
  ];
  let worstRatio = 0, measured = 0, clean = 0;
  const failed: string[] = [];
  for (const day of seeds) {
    const info = resolveCourse('daily', day);
    const r = runCourse(info, skilled, 90);
    if (!r.finished || r.respawns !== 0 || r.walls !== 0) { failed.push(day); continue; }
    clean++;
    const ratio = (r.t * 1000) / (info.track.estTimeS * 1000);
    worstRatio = Math.max(worstRatio, ratio);
    measured = Math.max(measured, r.t * 1000);
    ok(r.t * 1000 <= info.targets.goldMs, `daily gold attainable ${day}`, `${(r.t * 1000).toFixed(0)}<=${info.targets.goldMs}`);
  }
  ok(clean >= Math.ceil(seeds.length / 2), 'majority of daily sample completes cleanly',
    `clean=${clean}/${seeds.length} failed=[${failed.join(',')}]`);
  ok(worstRatio <= DAILY_TARGET_FACTORS.gold,
    'measured clean daily pace stays under the gold factor', `worst=${worstRatio.toFixed(3)} <= ${DAILY_TARGET_FACTORS.gold}`);
  console.log(`   [courses] daily sample clean=${clean}/${seeds.length} failed=[${failed.join(',')}] worst measured/estimate=${worstRatio.toFixed(3)} goldFactor=${DAILY_TARGET_FACTORS.gold} slowest=${measured.toFixed(0)}ms`);
}

// C8. Fixed target derivation from the real references, ordering, and
// cross-course identity separation.
{
  clearCourseCache();
  const b = resolveCourse('benchmark', DAY);
  const p = resolveCourse('practice', DAY);
  ok(!!b.reference && !!p.reference, 'fixed references are present');
  ok(b.targets.goldMs === Math.round(b.reference!.t * FIXED_TARGET_MARGINS.gold),
    'benchmark gold = reference x documented margin');
  ok(p.targets.goldMs === Math.round(p.reference!.t * FIXED_TARGET_MARGINS.gold),
    'practice gold = reference x documented margin');
  ok(b.targets.goldMs < b.targets.silverMs && b.targets.silverMs < b.targets.bronzeMs,
    'benchmark targets stay ordered');
  const cross = checkIdentity(p.reference, makeExpectedTrack(b.identityDay, b.track.checksum, TRACK_IDENTITY_GEN));
  ok(cross === 'mismatch', 'practice reference is rejected for the benchmark course', cross);
  const d1 = resolveCourse('daily', '2026-06-01');
  const d2 = resolveCourse('daily', '2026-07-04');
  ok(d1.track.checksum !== d2.track.checksum && d1.storageKey !== d2.storageKey,
    'different daily geometry yields different storage keys');
}

// C8b. Daily storage keys bind the identity day, so two dates whose fallback
// geometry shares a checksum can never merge scalar PBs; fixed-mode keys stay
// date-independent (one key per geometry).
{
  const same = 'deadbeef';
  const a = courseStorageKey('daily', '2026-01-01', same);
  const b = courseStorageKey('daily', '2026-01-02', same);
  ok(a !== b, 'daily keys separate dates with an identical geometry checksum', `${a} vs ${b}`);
  ok(a.includes('2026-01-01') && b.includes('2026-01-02') && a.includes(same),
    'daily key carries mode + checksum + identity day + version', a);
  const f1 = courseStorageKey('practice', '2026-01-01', same);
  const f2 = courseStorageKey('practice', '2099-12-31', same);
  const g1 = courseStorageKey('benchmark', '2026-01-02', same);
  ok(f1 === f2 && g1 === courseStorageKey('benchmark', '2000-01-01', same),
    'fixed-mode keys ignore the requested date', `${f1} vs ${f2}`);
  ok(f1 !== g1, 'fixed-mode keys still separate courses');
  clearCourseCache();
  const resolved = resolveCourse('daily', DAY);
  ok(resolved.storageKey.includes(DAY), 'resolved daily key carries the requested date', resolved.storageKey);
}

// C9. Determinism of the whole resolved contract.
{
  clearCourseCache();
  const a = JSON.stringify(resolveCourse('benchmark', DAY));
  clearCourseCache();
  const b = JSON.stringify(resolveCourse('benchmark', DAY));
  ok(a === b, 'resolved benchmark contract is byte-identical across cache clears');
  clearCourseCache();
  const d1 = JSON.stringify(resolveCourse('daily', DAY));
  clearCourseCache();
  const d2 = JSON.stringify(resolveCourse('daily', DAY));
  ok(d1 === d2, 'resolved daily contract is deterministic');
  ok((JSON.parse(d1) as CourseInfo).reference === null, 'daily reference stays null');
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
