// Headless tests for the P0 retry/controls contract (integrator-owned).
// No DOM: exercises src/retry-control.ts plus the sim reset/respawn paths
// that main.ts startRun/doRespawn route through.
declare const process: { exit(c: number): void };
import {
  countdownLen, FULL_COUNTDOWN_S, QUICK_COUNTDOWN_S, clearTouch,
  RESCUE_PENALTY_S, rescueKey, retryKey, recoveryHint,
  stuckPrompt, offCoursePrompt, rescuePenaltyToast,
  retryDisplayReset, neutralRunInfo,
} from '../src/retry-control.js';
import {
  TouchState, createSimState, resetRun, simRespawn,
  trackFromPoints, RESPAWN_PENALTY_MS,
} from '../src/sim.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

// Deliberate first start, quick retries only afterwards.
{
  ok(countdownLen(false, false) === FULL_COUNTDOWN_S, 'first menu start is deliberate');
  ok(countdownLen(true, false) === FULL_COUNTDOWN_S, 'quick flag cannot shortcut the first start');
  ok(countdownLen(true, true) === QUICK_COUNTDOWN_S, 'retry uses the quick countdown');
  ok(countdownLen(false, true) === FULL_COUNTDOWN_S, 'non-quick start stays deliberate');
}

// Focus-loss clearing: held stick + drift released, next press works.
{
  const tc = new TouchState();
  tc.stickDown(7, 200);
  tc.stickMove(7, 248);
  tc.driftDown(9);
  ok(tc.steer === 1 && tc.drift === true, 'held inputs registered', `${tc.steer} ${tc.drift}`);
  clearTouch(tc);
  ok(tc.steer === 0 && tc.drift === false && tc.joyOn === false, 'blur/hide clears stick and drift');
  tc.stickDown(7, 300);
  tc.stickMove(7, 324);
  ok(tc.joyOn === true && tc.steer > 0, 'next press works after clear', `${tc.steer}`);
  clearTouch(tc);
  ok(tc.steer === 0 && tc.drift === false, 'clear is safe on idle state');
}

// Full retry: complete reset of time, recording and crash/wall state.
{
  const pts = [];
  for (let i = 0; i < 40; i++) pts.push({ x: 0, y: 0, z: i * 4 });
  const tr = trackFromPoints(pts, 7);
  const s = createSimState();
  resetRun(s, tr, 0);
  ok(s.raceMs === 0 && s.rec.t === 0, 'fresh run starts at t=0');
  ok(s.rec.p.length === 1 && s.rec.ts.length === 1 && s.rec.ts[0] === 0, 'fresh recording holds one t=0 sample');
  ok(s.finished === false, 'fresh run is unfinished');
  // Simulate a mid-run state, then retry: everything resets together.
  s.raceMs = 45250; s.crashT = 0.5; s.wallCool = 0.2;
  s.rec.p.push([1, 0, 40, 0]); s.rec.ts.push(45250); s.rec.t = 45250;
  resetRun(s, tr, 0);
  ok(s.raceMs === 0 && s.crashT === 0 && s.wallCool === 0, 'retry resets time and crash/wall state');
  ok(s.rec.t === 0 && s.rec.p.length === 1 && s.rec.ts[0] === 0, 'retry restarts the recording with valid ghost timestamps');
}

// R rescue keeps its exact 3-second penalty and stays a no-op when finished.
{
  const pts = [];
  for (let i = 0; i < 40; i++) pts.push({ x: 0, y: 0, z: i * 4 });
  const tr = trackFromPoints(pts, 7);
  const s = createSimState();
  resetRun(s, tr, 0);
  s.raceMs = 12000;
  simRespawn(s);
  ok(s.raceMs === 12000 + RESPAWN_PENALTY_MS, 'rescue adds exactly the 3s penalty', `${s.raceMs}`);
  ok(RESPAWN_PENALTY_MS === 3000, 'penalty constant is exactly 3000ms');
  s.finished = true;
  const frozen = s.raceMs;
  simRespawn(s);
  ok(s.raceMs === frozen, 'rescue is a no-op once finished (finish retries instead)');
}

// Retry display reset: every stale run value is blank/zero at the transition,
// so the countdown branch cannot show the previous run's timer or progress.
{
  const r = retryDisplayReset();
  ok(r.time === '0:00.00', 'retry timer resets to 0:00.00', r.time);
  ok(r.progressPct === 0, 'retry progress resets to zero', `${r.progressPct}`);
  ok(r.delta === '' && r.split === '' && r.debug === '', 'retry clears delta, split and telemetry');
  const r2 = retryDisplayReset();
  ok(r !== r2, 'each reset is a fresh object (no shared mutable state)');
  r2.time = 'X';
  ok(retryDisplayReset().time === '0:00.00', 'mutating one reset cannot leak into the next');
}

// Neutral retained step-info: no stale sIdx/stuck/oob/surface survives a retry,
// and the object is fresh so reassignment never aliases a previous run.
{
  const n = neutralRunInfo();
  ok(n.sIdx === 0 && n.stuckMs === 0 && n.oobMs === 0, 'neutral info zeroes index and stuck/oob clocks');
  ok(n.surface === 'road' && n.offroad === false, 'neutral info starts on the road');
  ok(n.drifting === false && n.scraping === false && n.finished === false, 'neutral info clears run flags');
  const n2 = neutralRunInfo();
  ok(n !== n2, 'each neutral info is a fresh object');
  n.sIdx = 999; n.stuckMs = 5000;
  ok(neutralRunInfo().sIdx === 0 && neutralRunInfo().stuckMs === 0, 'mutating one neutral info cannot leak');
}

// Truthful recovery copy: desktop names keys, touch names controls, and the
// displayed charge always equals the sim's real penalty.
{
  ok(RESCUE_PENALTY_S * 1000 === RESPAWN_PENALTY_MS, 'displayed rescue charge equals the sim penalty');
  ok(rescueKey(false) === 'R RESCUE' && rescueKey(true) === 'RESCUE', 'rescue action names keyboard vs touch');
  ok(retryKey(false) === 'ENTER RETRY' && retryKey(true) === 'RETRY', 'retry action names keyboard vs touch');
  ok(recoveryHint(false).includes('R RESCUE (+3s)') && recoveryHint(false).includes('ENTER RETRY'), 'desktop hint is R RESCUE (+3s) + ENTER RETRY', recoveryHint(false));
  ok(recoveryHint(true).includes('RESCUE (+3s)') && recoveryHint(true).includes('RETRY'), 'touch hint uses touch labels', recoveryHint(true));
  ok(stuckPrompt(false).startsWith('STUCK') && stuckPrompt(false).includes('(+3s)'), 'stuck prompt keeps the STUCK prefix and charge', stuckPrompt(false));
  ok(offCoursePrompt(false).startsWith('OFF COURSE') && offCoursePrompt(true).includes('RESCUE'), 'off-course prompt keeps prefix and rescue state', offCoursePrompt(true));
  ok(rescuePenaltyToast().includes('+3s'), 'rescue toast surfaces the actual charge', rescuePenaltyToast());
}

console.log(`\nretry-restart: ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
