// Standalone tests for src/drift-control.ts. Scripted intent streams only:
// no sim.ts, no THREE, no DOM, no wall-clock, no network.
declare const process: { exit(c: number): void };
import {
  BOOST_SPEED_CAP, DEFAULT_DRIFT_TUNING, GRIP_TOP_SPEED,
  createDriftOut, createDriftState, gradeExit, resetDrift, scoreExit, updateDrift,
} from '../src/drift-control.js';
import type { DriftState, DriftStepOut } from '../src/drift-control.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

const T = DEFAULT_DRIFT_TUNING;
const DT = 1 / 60;

function step(s: DriftState, o: DriftStepOut, p: Partial<{ dt: number; steer: number; hand: boolean; speed: number; slip: number; grounded: boolean }> = {}): void {
  updateDrift(s, T, {
    dt: p.dt ?? DT,
    steer: p.steer ?? 0.6,
    handbrake: p.hand ?? false,
    speed: p.speed ?? 60,
    slipDeg: p.slip ?? 12,
    grounded: p.grounded ?? true,
  }, o);
}

// Develop a slide: tap in, hold steer, ramp slip to peak over 0.5s.
function enterSlide(s: DriftState, o: DriftStepOut, dir = 1): string[] {
  const ev: string[] = [];
  for (let i = 0; i < 9; i++) { step(s, o, { steer: 0.6 * dir, hand: true, slip: 5 }); if (o.event !== 'none') ev.push(o.event); }
  step(s, o, { steer: 0.6 * dir, hand: false, slip: 6 });
  if (o.event !== 'none') ev.push(o.event);
  for (let i = 0; i < 30; i++) { step(s, o, { steer: 0.6 * dir, slip: 6 + (20 - 6) * (i / 30) }); if (o.event !== 'none') ev.push(o.event); }
  return ev;
}

// 1. Entry tap initiates a persistent slide.
{
  const s = createDriftState(), o = createDriftOut();
  const ev = enterSlide(s, o);
  ok(ev[0] === 'entered' && ev.length === 1, 'tap enters slide once', ev.join(','));
  ok(s.phase === 'sliding', 'phase sliding after tap');
  ok(s.slideBlend > 0.9, 'slide blend ramps in', s.slideBlend.toFixed(2));
}

// 2. Releasing handbrake alone does not end the slide.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  for (let i = 0; i < 60; i++) step(s, o, { slip: 20 });
  ok(s.phase === 'sliding' && o.event === 'none', 'slide persists without handbrake');
  ok(o.boostAccel === 0, 'no boost while sliding');
}

// 3. Optimal countersteer exit: one-shot perfect reward.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  for (let i = 0; i < 21; i++) step(s, o, { slip: 20 }); // age ~1.0s
  step(s, o, { steer: -0.8, slip: 4, speed: 62 });
  ok(o.event === 'exit', 'countersteer commits exit');
  ok(o.grade === 'perfect', `optimal exit grades perfect (q=${o.quality.toFixed(3)})`);
  const boost = o.boostAccel;
  ok(boost > 15 && boost <= T.boostAccelMax, 'one-shot boost sized', boost.toFixed(1));
  let exits = 0;
  for (let i = 0; i < 90; i++) { step(s, o, { steer: -0.8, slip: 2 }); if (o.event === 'exit') exits++; }
  ok(exits === 0, 'no repeat exit events');
  ok(s.boostT === 0 && o.boostAccel === 0, 'boost expires after 0.6s + cooldown');
}

// 4. Early exit earns little: flick ~0.2s after tap-in.
{
  const s = createDriftState(), o = createDriftOut();
  for (let i = 0; i < 6; i++) step(s, o, { steer: 0.6, hand: true, slip: 5 });
  step(s, o, { steer: 0.6, hand: false, slip: 6 });
  for (let i = 0; i < 5; i++) step(s, o, { steer: 0.6, slip: 12 });
  ok(s.phase === 'sliding' && s.slideAge < 0.3, `control: early flick at age ${s.slideAge.toFixed(2)}s`);
  step(s, o, { steer: -0.8, slip: 10, speed: 60 });
  ok(o.event === 'exit' && (o.grade === 'weak' || o.grade === 'none'), `early exit weak/none (q=${o.quality.toFixed(3)})`);
  ok(o.boostAccel < 8, 'early boost small', o.boostAccel.toFixed(1));
}

// 5. Late exit is diminished.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  for (let i = 0; i < 141; i++) step(s, o, { slip: 20 }); // age ~3.0s
  step(s, o, { steer: -0.8, slip: 5, speed: 58 });
  ok(o.event === 'exit' && o.grade !== 'perfect' && o.grade !== 'good', `late exit diminished (${o.grade}, q=${o.quality.toFixed(3)})`);
}

// 6. Timeout expires with no reward.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  let expired = false;
  for (let i = 0; i < 240; i++) { step(s, o, { slip: 18 }); if (o.event === 'expired') expired = true; }
  ok(expired, 'long slide expires');
  ok(s.lastQuality === 0 && o.boostAccel === 0, 'expiry pays nothing');
  ok(s.phase === 'cooldown', 'expiry routes through cooldown');
}

// 7. Straight handbrake tap: no entry, no boost, no events.
{
  const s = createDriftState(), o = createDriftOut();
  let saw = false;
  for (let i = 0; i < 9; i++) { step(s, o, { steer: 0, hand: true, slip: 1 }); if (o.event !== 'none') saw = true; }
  for (let i = 0; i < 30; i++) { step(s, o, { steer: 0, slip: 1 }); if (o.event !== 'none' || o.boostAccel !== 0) saw = true; }
  ok(!saw && s.phase === 'idle', 'straight tap ignored completely');
}

// 8. Low-speed tap ignored.
{
  const s = createDriftState(), o = createDriftOut();
  for (let i = 0; i < 9; i++) step(s, o, { steer: 0.6, hand: true, speed: 20, slip: 3 });
  step(s, o, { steer: 0.6, speed: 20, slip: 3 });
  ok(s.phase === 'idle' && o.event === 'none', 'entry needs speed >= 25');
}

// 9. Cooldown spam rejected; single reward stands.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  for (let i = 0; i < 21; i++) step(s, o, { slip: 20 });
  step(s, o, { steer: -0.8, slip: 4, speed: 62 });
  const firstQ = o.quality;
  ok(firstQ > 0.8, 'control: first exit rewarded');
  let entered = 0;
  for (let r = 0; r < 3; r++) {
    for (let i = 0; i < 5; i++) step(s, o, { steer: 0.6, hand: true, slip: 8 });
    step(s, o, { steer: 0.6, hand: false, slip: 8 });
    if (o.event === 'entered') entered++;
  }
  ok(entered === 0, 'cooldown blocks re-entry');
  ok(s.spamCount >= 3, 'spam attempts counted', `spam=${s.spamCount}`);
}

// 10. Re-arm: neutral pass required after exit.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  for (let i = 0; i < 21; i++) step(s, o, { slip: 20 });
  step(s, o, { steer: -0.8, slip: 4, speed: 62 });
  for (let i = 0; i < 80; i++) step(s, o, { steer: 0.6, slip: 3 }); // cooldown passes, wheel held
  ok(s.phase === 'idle', 'cooldown drains to idle');
  for (let i = 0; i < 5; i++) step(s, o, { steer: 0.6, hand: true, slip: 6 });
  step(s, o, { steer: 0.6, hand: false, slip: 6 });
  ok(s.phase === 'idle' && o.event !== 'entered', 'held lock cannot re-enter without neutral');
  for (let i = 0; i < 6; i++) step(s, o, { steer: 0, slip: 1 });
  for (let i = 0; i < 5; i++) step(s, o, { steer: -0.6, hand: true, slip: 6 });
  step(s, o, { steer: -0.6, hand: false, slip: 6 });
  ok(s.phase === 'sliding', 'neutral pass re-arms entry (either direction)');
}

// 11. Same-side flick never exits; opposite commits.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o, 1);
  for (let i = 0; i < 21; i++) step(s, o, { slip: 20 });
  step(s, o, { steer: 1.0, slip: 22 });
  ok(s.phase === 'sliding', 'same-side full lock holds slide');
  step(s, o, { steer: -0.5, slip: 5, speed: 60 });
  ok(o.event === 'exit', 'opposite flick commits');
}

// 12. Mirrored directions.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o, -1);
  ok(s.entryDir === -1, 'right entry records direction');
  for (let i = 0; i < 21; i++) step(s, o, { steer: -0.6, slip: 20 });
  step(s, o, { steer: -0.5, slip: 20 });
  ok(s.phase === 'sliding', 'same-side (right) holds');
  step(s, o, { steer: 0.8, slip: 4, speed: 62 });
  ok(o.event === 'exit' && o.quality > 0.8, 'mirrored exit rewarded');
}

// 13. Analog thresholds.
{
  const a = createDriftState(), o = createDriftOut();
  for (let i = 0; i < 5; i++) step(a, o, { steer: 0.1, hand: true, slip: 2 });
  step(a, o, { steer: 0.1, hand: false, slip: 2 });
  ok(a.phase === 'idle', 'sub-threshold steer (0.1) no entry');
  for (let i = 0; i < 5; i++) step(a, o, { steer: 0.2, hand: true, slip: 4 });
  step(a, o, { steer: 0.2, hand: false, slip: 4 });
  ok(a.phase === 'sliding', 'analog steer (0.2) enters');
  for (let i = 0; i < 21; i++) step(a, o, { steer: 0.2, slip: 14 });
  step(a, o, { steer: -0.3, slip: 10, speed: 60 });
  ok(a.phase === 'sliding', 'weak opposite (0.3) does not commit');
  step(a, o, { steer: -0.5, slip: 5, speed: 60 });
  ok(o.event === 'exit', 'decisive opposite (0.5) commits');
}

// 14. Airborne: no entry, frozen clock.
{
  const s = createDriftState(), o = createDriftOut();
  for (let i = 0; i < 5; i++) step(s, o, { steer: 0.6, hand: true, slip: 5, grounded: false });
  ok(s.phase === 'idle', 'no entry while airborne');
  for (let i = 0; i < 3; i++) step(s, o, { steer: 0.6, slip: 2 }); // release: re-arm edge
  enterSlide(s, o);
  ok(s.phase === 'sliding', 'control: slide engaged for freeze test');
  for (let i = 0; i < 21; i++) step(s, o, { slip: 20 });
  const age = s.slideAge;
  for (let i = 0; i < 30; i++) step(s, o, { slip: 20, grounded: false });
  ok(Math.abs(s.slideAge - age) < 1e-9 && s.phase === 'sliding', 'airtime freezes slide clock');
}

// 15. Sloppy long hold caps the reward.
{
  const s = createDriftState(), o = createDriftOut();
  for (let i = 0; i < 40; i++) step(s, o, { steer: 0.6, hand: true, slip: 8 });
  step(s, o, { steer: 0.6, hand: false, slip: 10 });
  for (let i = 0; i < 21; i++) step(s, o, { slip: 20 });
  step(s, o, { steer: -0.8, slip: 4, speed: 62 });
  ok(o.event === 'exit' && o.quality < 0.45, `held handbrake caps reward (q=${o.quality.toFixed(3)})`);
}

// 16. Spin pays nothing but still exits.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  for (let i = 0; i < 21; i++) step(s, o, { slip: 50 });
  step(s, o, { steer: -0.8, slip: 50, speed: 55 });
  ok(o.event === 'exit' && o.grade === 'none' && o.boostAccel === 0, 'spin exits unrewarded');
}

// 17. Slow abort returns to idle without cooldown tax.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  for (let i = 0; i < 10; i++) step(s, o, { slip: 18 });
  step(s, o, { speed: 10, slip: 5 });
  ok(s.phase === 'idle' && o.event === 'expired', 'slow abort forgiving');
}

// 18. Slingshot sizing: strong but capped, brief, and weak exits stay small.
{
  const k = 50 / (GRIP_TOP_SPEED * GRIP_TOP_SPEED);
  function project(v0: number, boost: number): { peak: number; over80: number; over805: number } {
    let v = v0, peak = v0, over = 0;
    const bt = Math.round(0.6 / DT);
    for (let i = 0; i < 600; i++) {
      const a = i < bt ? 50 + boost : 50;
      v += (a - k * v * v) * DT;
      peak = Math.max(peak, v);
      if (v > 80) over += DT;
    }
    let over805 = 0;
    v = v0;
    for (let i = 0; i < 600; i++) {
      const a = i < bt ? 50 + boost : 50;
      v += (a - k * v * v) * DT;
      if (v > 80.5) over805 += DT;
    }
    return { peak, over80: over, over805 };
  }
  const strong = project(68, T.boostAccelMax * 0.92);
  console.log(`info - perfect-exit projection: peak=${strong.peak.toFixed(1)} over80=${strong.over80.toFixed(2)}s`);
  ok(strong.peak >= 79 && strong.peak <= 83, 'perfect exit peaks inside cap', strong.peak.toFixed(1));
  ok(strong.over805 < 2.0, 'margin above 80.5 is brief', strong.over805.toFixed(2));
  const weak = project(68, T.boostAccelMax * 0.2);
  ok(weak.peak < 80.5, 'weak exit stays small', weak.peak.toFixed(1));
  ok(T.boostTime === 0.6 && GRIP_TOP_SPEED === 80 && BOOST_SPEED_CAP === 84, 'sizing constants pinned');
}

// 19. Scoring unit boundaries.
{
  ok(scoreExit(T, 20, 4, 62, 1.0, 0.8) >= 0.8, 'optimal scores perfect');
  ok(scoreExit(T, 2, 2, 60, 1.0, 0.8) === 0, 'undeveloped scores zero');
  ok(scoreExit(T, 50, 10, 60, 1.0, 0.8) === 0, 'spin scores zero');
  ok(scoreExit(T, 20, 4, 62, 4.0, 0.8) === 0, 'timeout scores zero');
  ok(scoreExit(T, 20, 4, 10, 1.0, 0.8) === 0, 'crawling exit scores zero');
  ok(gradeExit(0.85) === 'perfect' && gradeExit(0.6) === 'good' && gradeExit(0.2) === 'weak' && gradeExit(0.02) === 'none', 'grade bands');
}

// 20. Determinism + reset.
{
  function script(): string {
    const s = createDriftState(), o = createDriftOut();
    const trace: string[] = [];
    enterSlide(s, o);
    for (let i = 0; i < 21; i++) { step(s, o, { slip: 20 }); trace.push(`${s.phase}|${o.event}|${o.quality.toFixed(4)}`); }
    step(s, o, { steer: -0.8, slip: 4, speed: 62 });
    trace.push(`${s.phase}|${o.event}|${o.quality.toFixed(4)}`);
    return trace.join(';');
  }
  ok(script() === script(), 'identical scripts give identical traces');
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  resetDrift(s);
  ok(s.phase === 'idle' && s.slideBlend === 0 && s.spamCount === 0 && s.boostAccel === 0, 'reset clears all');
  step(s, o, { dt: NaN });
  ok(s.phase === 'idle', 'non-finite dt holds');
}


// 21. Tap entry fires a bounded one-step yaw impulse and seeds the pendulum.
{
  const s = createDriftState(), o = createDriftOut();
  step(s, o, { steer: 0.6, hand: true, slip: 5 });
  ok(o.event === 'entered', 'kick: tap enters');
  ok(Math.abs(o.yawKick) > 0.05 && Math.abs(o.yawKick) <= 0.12, 'kick bounded sharp', o.yawKick.toFixed(3));
  ok(o.yawKick < 0, 'kick rotates with entry direction (heading -= steer)');
  ok(o.pendAmp === 1, 'pendulum seeded at full energy');
  ok(o.pendRate === 0, 'pendulum rate starts at zero (smooth onset)');
  const m = createDriftState(), om = createDriftOut();
  step(m, om, { steer: -0.6, hand: true, slip: 5 });
  ok(om.event === 'entered' && om.yawKick > 0.05 && om.yawKick <= 0.12, 'mirrored kick flips sign', om.yawKick.toFixed(3));
  // Mid-slide taps never re-kick.
  let rekick = false;
  for (let i = 0; i < 30; i++) { step(s, o, { steer: 0.6, hand: i % 10 < 3, slip: 15 }); if (o.yawKick !== 0) rekick = true; }
  ok(!rekick, 'no re-kick mid-slide');
}

// 22. Pendulum oscillates and decays over ~1-2s (pure function of slide time).
{
  const s = createDriftState(), o = createDriftOut();
  step(s, o, { steer: 0.6, hand: true, slip: 5 });
  step(s, o, { steer: 0.6, hand: false, slip: 6 });
  const amps: Record<string, number> = {};
  let flips = 0, prev = 0;
  for (let i = 0; i < 120; i++) {
    step(s, o, { steer: 0.6, slip: 15 });
    const age = (i + 3) * DT;
    for (const m of [0.5, 1.0, 1.5, 2.0]) if (age >= m && !(m in amps)) amps[m] = o.pendAmp;
    if (i > 0 && Math.sign(o.pendRate) !== Math.sign(prev)) flips++;
    prev = o.pendRate;
  }
  console.log(`info - pendulum amps: ${[0.5, 1, 1.5, 2].map((m) => amps[m].toFixed(3)).join('/')} flips=${flips}`);
  ok(amps[0.5] > 0.3 && amps[0.5] < 0.55, 'energy strong at 0.5s', amps[0.5].toFixed(3));
  ok(amps[1.0] > 0.1 && amps[1.0] < 0.25, 'energy fading at 1.0s', amps[1.0].toFixed(3));
  ok(amps[2.0] < 0.05, 'energy spent by 2.0s', amps[2.0].toFixed(3));
  ok(flips >= 2, 'wobble oscillates (sign flips)', `${flips}`);
  ok(s.phase === 'sliding', 'slide persists through the wobble');
}

// 23. In-phase countersteer critically damps: energy to zero, no chain.
{
  const s = createDriftState(), o = createDriftOut();
  step(s, o, { steer: 0.6, hand: true, slip: 5 });
  step(s, o, { steer: 0.6, hand: false, slip: 6 });
  for (let i = 0; i < 52; i++) step(s, o, { steer: 0.6, slip: 18 }); // age ~0.9s, phase ~2PI
  step(s, o, { steer: -0.8, slip: 4, speed: 62 });
  ok(o.event === 'exit' && o.quality > 0.8, `in-phase exit still rewarded (q=${o.quality.toFixed(3)})`);
  ok(o.pendAmp === 0 && o.pendRate === 0, 'wobble critically damped');
  ok(!o.chainArmed && s.chainDir === 0, 'no chain after clean damping');
}

// 24. Anti-phase countersteer amplifies and arms a chained opposite slide.
{
  const s = createDriftState(), o = createDriftOut();
  step(s, o, { steer: 0.6, hand: true, slip: 5 });
  step(s, o, { steer: 0.6, hand: false, slip: 6 });
  for (let i = 0; i < 25; i++) step(s, o, { steer: 0.6, slip: 18 }); // age ~0.45s, phase ~PI
  const preAmp = o.pendAmp;
  step(s, o, { steer: -0.8, slip: 8, speed: 60 });
  ok(o.event === 'exit', 'anti-phase commit still exits');
  ok(o.pendAmp >= preAmp, `residual amplified (${preAmp.toFixed(2)}->${o.pendAmp.toFixed(2)})`);
  ok(o.chainArmed && s.chainDir === -1, 'opposite chain armed');
  // Tap into the chained direction: instant entry, no neutral pass needed.
  step(s, o, { steer: -0.6, hand: true, slip: 10 });
  ok(o.event === 'entered' && s.entryDir === -1, 'chain tap engages opposite slide');
  ok(s.needNeutral === true, 'neutral rule still pending after chain');
  ok(o.pendAmp > 0.4, 'residual energy carried into the chain', o.pendAmp.toFixed(2));
}

// 25. Held swing auto-engages the chain; expiry of the window restores rules.
{
  const s = createDriftState(), o = createDriftOut();
  step(s, o, { steer: 0.6, hand: true, slip: 5 });
  step(s, o, { steer: 0.6, hand: false, slip: 6 });
  for (let i = 0; i < 25; i++) step(s, o, { steer: 0.6, slip: 18 });
  step(s, o, { steer: -0.8, slip: 8, speed: 60 });
  ok(o.chainArmed, 'control: chain armed');
  let enteredAt = -1;
  for (let i = 0; i < 40; i++) {
    step(s, o, { steer: -0.6, slip: 10 });
    if (o.event === 'entered' && enteredAt < 0) enteredAt = i * DT;
  }
  ok(enteredAt >= 0.3 && enteredAt <= 0.45, 'held swing auto-enters after hold time', enteredAt.toFixed(2));
  // Fresh poor exit, then let the window lapse: chain-direction tap rejected.
  const a = createDriftState(), oa = createDriftOut();
  step(a, oa, { steer: 0.6, hand: true, slip: 5 });
  step(a, oa, { steer: 0.6, hand: false, slip: 6 });
  for (let i = 0; i < 11; i++) step(a, oa, { steer: 0.6, slip: 12 });
  step(a, oa, { steer: -0.8, slip: 8, speed: 55 });
  ok(oa.event === 'exit' && oa.quality < 0.3, `control: poor release (q=${oa.quality.toFixed(3)})`);
  ok(oa.chainArmed, 'poor release arms chain while energy lives');
  for (let i = 0; i < 60; i++) step(a, oa, { steer: 0, slip: 2 }); // window + cooldown lapse
  step(a, oa, { steer: -0.6, hand: true, slip: 6 });
  ok(oa.event !== 'entered', 'lapsed chain needs neutral again');
}

// 26. Left-right spam cannot farm boost; neutral/cooldown still enforced.
{
  const s = createDriftState(), o = createDriftOut();
  let maxQ = 0, maxBoost = 0, rejections = 0;
  let dir = 1;
  for (let r = 0; r < 4; r++) {
    for (let i = 0; i < 5; i++) step(s, o, { steer: 0.6 * dir, hand: true, slip: 6 });
    step(s, o, { steer: 0.6 * dir, hand: false, slip: 6 });
    for (let i = 0; i < 8; i++) step(s, o, { steer: 0.6 * dir, slip: 6 });
    step(s, o, { steer: -0.6 * dir, slip: 6, speed: 60 });
    if (o.event === 'exit') { maxQ = Math.max(maxQ, o.quality); maxBoost = Math.max(maxBoost, o.boostAccel); }
    for (let i = 0; i < 4; i++) step(s, o, { steer: 0, slip: 1 });
    dir = -dir as 1 | -1;
  }
  console.log(`info - spam farm: maxQ=${maxQ.toFixed(3)} maxBoost=${maxBoost.toFixed(1)}`);
  ok(maxQ < 0.45, 'spam exits never reach a slingshot grade', maxQ.toFixed(3));
  ok(maxBoost < 9, 'spam boost stays small', maxBoost.toFixed(1));
  const b = createDriftState(), ob = createDriftOut();
  enterSlide(b, ob);
  for (let i = 0; i < 21; i++) step(b, ob, { slip: 20 });
  step(b, ob, { steer: -0.8, slip: 4, speed: 62 });
  step(b, ob, { steer: 0.6, hand: true, slip: 8 });
  ok(ob.event === 'rejected', 'no-neutral tap during cooldown rejected');
}

// 27. Same-side flicks never commit and preserve the decay trajectory.
{
  const s = createDriftState(), o = createDriftOut();
  step(s, o, { steer: 0.6, hand: true, slip: 5 });
  step(s, o, { steer: 0.6, hand: false, slip: 6 });
  let clean = true;
  for (let i = 0; i < 60; i++) {
    step(s, o, { steer: 1.0, slip: 18 });
    if (o.event !== 'none' || o.yawKick !== 0) clean = false;
  }
  const expect = Math.exp(-T.pendDecay * 61 * DT); // release step + 60 holds decay; entry step seeds
  ok(clean && s.phase === 'sliding', 'same-side full lock holds without events');
  ok(Math.abs(o.pendAmp - expect) < 1e-9, 'decay exact in slide time', `${o.pendAmp.toFixed(6)} vs ${expect.toFixed(6)}`);
}

// 28. Input-schedule equivalence: 1/60 vs 1/120 second-scheduled streams.
{
  function schedRun(dt: number): { ev: string; amp: number; phase: number } {
    const s = createDriftState(), o = createDriftOut();
    const ev: string[] = [];
    const N = Math.round(2 / dt);
    for (let k = 0; k < N; k++) {
      const t = k * dt;
      const hand = t >= 0.1 && t < 0.25;
      const steer = t < 1.0 ? 0.6 : -0.7;
      updateDrift(s, T, { dt, steer, handbrake: hand, speed: 60, slipDeg: 15, grounded: true }, o);
      if (o.event !== 'none') ev.push(o.event);
    }
    return { ev: ev.join(','), amp: s.pendAmp, phase: s.pendPhase };
  }
  const a = schedRun(1 / 60), b = schedRun(1 / 120);
  ok(a.ev === b.ev && a.ev.length > 0, 'same event sequence across rates', `${a.ev} vs ${b.ev}`);
  ok(Math.abs(a.amp - b.amp) < 1e-9 && Math.abs(a.phase - b.phase) < 1e-6, 'energy state matches', `${a.amp.toFixed(6)}/${a.phase.toFixed(4)}`);
}

// 29. Airborne freezes pendulum and chain clocks.
{
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  for (let i = 0; i < 21; i++) step(s, o, { slip: 18 });
  const amp = s.pendAmp, ph = s.pendPhase;
  for (let i = 0; i < 30; i++) step(s, o, { slip: 18, grounded: false });
  ok(s.pendAmp === amp && s.pendPhase === ph, 'airtime freezes pendulum bitwise');
  step(s, o, { steer: -0.8, slip: 8, speed: 60 });
  const cT = s.chainT;
  for (let i = 0; i < 10; i++) step(s, o, { steer: 0.6, slip: 8, grounded: false });
  ok(s.chainT === cT, 'airtime freezes chain window');
}

// 30. Chained script determinism + full reset.
{
  function script(): string {
    const s = createDriftState(), o = createDriftOut();
    const out: string[] = [];
    step(s, o, { steer: 0.6, hand: true, slip: 5 });
    step(s, o, { steer: 0.6, hand: false, slip: 6 });
    for (let i = 0; i < 25; i++) { step(s, o, { steer: 0.6, slip: 18 }); out.push(o.pendAmp.toFixed(6)); }
    step(s, o, { steer: -0.8, slip: 8, speed: 60 });
    out.push(`${o.event}|${o.quality.toFixed(4)}|${s.chainDir}`);
    step(s, o, { steer: -0.6, hand: true, slip: 10 });
    out.push(`${o.event}|${s.phase}|${s.entryDir}`);
    return out.join(';');
  }
  const one = script();
  ok(one === script(), 'chained script replays identically');
  ok(one.includes('exit|') && one.includes('entered|sliding|-1'), 'script covers exit+chain', one.slice(-40));
  const s = createDriftState(), o = createDriftOut();
  enterSlide(s, o);
  resetDrift(s);
  ok(s.pendAmp === 0 && s.pendPhase === 0 && s.chainDir === 0 && s.chainT === 0 && s.chainHoldT === 0, 'reset clears pendulum/chain');
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
