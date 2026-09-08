// drift-control.ts — deterministic drift-rhythm prototype (Cycle 3).
// Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock, no network.
// No input binding changes: intent arrives as { steer (-1..1), handbrake bool }
// per fixed step, so keyboard edges and analog mobile flicks share one path.
//
// Rhythm: while steering, a handbrake TAP (quick press+release) while steering
// enters a persistent slide. Releasing the handbrake does NOT end it. A tap of
// the OPPOSITE steering direction commits the exit: the module scores quality
// from developed slip, exit alignment, speed, slide time, and flick
// decisiveness, then issues a ONE-SHOT forward boost. Early/late/sloppy exits
// earn little or nothing; cooldown + neutral re-arm rules stop left-right spam.
// The integrator (sim.ts) owns all physics: this module only decides WHEN and
// HOW MUCH. Speed caps and realignment forces stay sim-side.
//
// Cycle 6 pendulum: a tap entry also stores deterministic drift energy
// (pendAmp/pendPhase, a decaying oscillator at pendFreq). The module outputs a
// one-step heading impulse (yawKick) plus a per-step pendulum yaw rate
// (pendRate) for sim-side application. Countersteer timing is read against the
// pendulum phase: an in-phase commit critically damps the energy to zero, an
// anti-phase commit amplifies it and arms a chained opposite-direction slide,
// and a poor (low-quality) release carries residual energy into a chain
// window where steering with the swing re-engages the slide without a neutral
// pass. Exit quality scoring is untouched by phase; phase only routes energy.
// Sign convention: outputs are heading deltas/rates in sim space, where
// heading -= steer * yawRate * dt, so a dir=+1 entry kicks heading negative.

export type DriftPhase = 'idle' | 'sliding' | 'cooldown';
export type DriftEvent = 'none' | 'entered' | 'exit' | 'expired' | 'rejected';
export type ExitGrade = 'none' | 'weak' | 'good' | 'perfect';

export interface DriftTuning {
  entrySteer: number;
  entryMinSpeed: number;
  tapMaxS: number;
  sloppyScale: number;
  slideAttack: number;
  slideRelease: number;
  exitOppSteer: number;
  rearmDeadband: number;
  earlyEnd: number;
  optEnd: number;
  lateEnd: number;
  timeoutS: number;
  peakLoDeg: number;
  peakHiDeg: number;
  spinDeg: number;
  alignDeg: number;
  speedLo: number;
  speedHi: number;
  counterLo: number;
  counterHi: number;
  abortSpeed: number;
  cooldownS: number;
  boostTime: number;
  boostAccelMax: number;
  kickRad: number;
  pendFreq: number;
  pendDecay: number;
  pendYaw: number;
  chainWindow: number;
  chainHold: number;
  chainMin: number;
  chainBoost: number;
}

export const DEFAULT_DRIFT_TUNING: DriftTuning = {
  entrySteer: 0.18,
  entryMinSpeed: 25,
  tapMaxS: 0.35,
  sloppyScale: 0.4,
  slideAttack: 3.5,
  slideRelease: 4.0,
  exitOppSteer: 0.35,
  rearmDeadband: 0.12,
  earlyEnd: 0.45,
  optEnd: 1.8,
  lateEnd: 3.2,
  timeoutS: 4.0,
  peakLoDeg: 8,
  peakHiDeg: 28,
  spinDeg: 45,
  alignDeg: 20,
  speedLo: 25,
  speedHi: 70,
  counterLo: 0.2,
  counterHi: 0.7,
  abortSpeed: 15,
  cooldownS: 1.2,
  boostTime: 0.6,
  boostAccelMax: 20,
  kickRad: 0.09,
  pendFreq: 7.0,
  pendDecay: 1.8,
  pendYaw: 1.6,
  chainWindow: 0.8,
  chainHold: 0.35,
  chainMin: 0.25,
  chainBoost: 1.5,
};

/** Grip top speed and the brief controlled overshoot the boost may reach. */
export const GRIP_TOP_SPEED = 80;
export const BOOST_SPEED_CAP = 84;

export interface DriftState {
  phase: DriftPhase;
  entryDir: number;
  slideAge: number;
  peakSlipDeg: number;
  slideBlend: number;
  cooldownT: number;
  boostT: number;
  boostAccel: number;
  lastQuality: number;
  lastGrade: ExitGrade;
  spamCount: number;
  needNeutral: boolean;
  cleanTap: boolean;
  handHeldS: number;
  prevHand: boolean;
  pendAmp: number;
  pendPhase: number;
  chainDir: number;
  chainT: number;
  chainHoldT: number;
}

export interface DriftStepInput {
  dt: number;
  steer: number;
  handbrake: boolean;
  speed: number;
  slipDeg: number;
  grounded: boolean;
}

export interface DriftStepOut {
  phase: DriftPhase;
  slideBlend: number;
  boostAccel: number;
  event: DriftEvent;
  quality: number;
  grade: ExitGrade;
  yawKick: number;
  pendRate: number;
  pendAmp: number;
  chainArmed: boolean;
}

export function createDriftState(): DriftState {
  return {
    phase: 'idle', entryDir: 0, slideAge: 0, peakSlipDeg: 0, slideBlend: 0,
    cooldownT: 0, boostT: 0, boostAccel: 0,
    lastQuality: 0, lastGrade: 'none', spamCount: 0,
    needNeutral: false, cleanTap: true, handHeldS: 0, prevHand: false,
    pendAmp: 0, pendPhase: 0, chainDir: 0, chainT: 0, chainHoldT: 0,
  };
}

export function createDriftOut(): DriftStepOut {
  return { phase: 'idle', slideBlend: 0, boostAccel: 0, event: 'none', quality: 0, grade: 'none', yawKick: 0, pendRate: 0, pendAmp: 0, chainArmed: false };
}

export function resetDrift(s: DriftState): void {
  const fresh = createDriftState();
  s.phase = fresh.phase; s.entryDir = fresh.entryDir; s.slideAge = fresh.slideAge;
  s.peakSlipDeg = fresh.peakSlipDeg; s.slideBlend = fresh.slideBlend;
  s.cooldownT = fresh.cooldownT; s.boostT = fresh.boostT; s.boostAccel = fresh.boostAccel;
  s.lastQuality = fresh.lastQuality; s.lastGrade = fresh.lastGrade;
  s.spamCount = fresh.spamCount; s.needNeutral = fresh.needNeutral;
  s.cleanTap = fresh.cleanTap; s.handHeldS = fresh.handHeldS; s.prevHand = fresh.prevHand;
  s.pendAmp = fresh.pendAmp; s.pendPhase = fresh.pendPhase;
  s.chainDir = fresh.chainDir; s.chainT = fresh.chainT; s.chainHoldT = fresh.chainHoldT;
}

export function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v));
}

function isFiniteNum(v: number): boolean {
  return typeof v === 'number' && isFinite(v);
}

function signOf(v: number): number {
  return v > 0 ? 1 : v < 0 ? -1 : 0;
}

/**
 * Exit quality in [0,1] from developed peak slip, exit alignment, exit speed,
 * slide timing, and countersteer decisiveness. Returns 0 for non-exits:
 * undeveloped slides (<3 deg peak), spins, and timed-out slides.
 */
export function scoreExit(t: DriftTuning, peakSlip: number, exitSlip: number, exitSpeed: number, age: number, counterMag: number): number {
  if (peakSlip < 3 || peakSlip > t.spinDeg || age >= t.timeoutS) return 0;
  if (exitSpeed < t.entryMinSpeed) return 0;
  const slipQ = peakSlip <= t.peakLoDeg
    ? (peakSlip - 3) / (t.peakLoDeg - 3)
    : peakSlip <= t.peakHiDeg ? 1 : 1 - (peakSlip - t.peakHiDeg) / (t.spinDeg - t.peakHiDeg);
  const alignQ = 1 - clamp(exitSlip / t.alignDeg, 0, 1);
  const speedQ = clamp((exitSpeed - t.speedLo) / (t.speedHi - t.speedLo), 0, 1);
  const counterQ = clamp((counterMag - t.counterLo) / (t.counterHi - t.counterLo), 0, 1);
  const base = 0.40 * clamp(slipQ, 0, 1) + 0.30 * alignQ + 0.15 * speedQ + 0.15 * counterQ;
  const gate = age < 0.15 ? 0
    : age < t.earlyEnd ? (age - 0.15) / (t.earlyEnd - 0.15)
    : age <= t.optEnd ? 1
    : age <= t.lateEnd ? 1 - 0.75 * ((age - t.optEnd) / (t.lateEnd - t.optEnd))
    : 0.25 * (1 - (age - t.lateEnd) / (t.timeoutS - t.lateEnd));
  return clamp(base * clamp(gate, 0, 1), 0, 1);
}

export function gradeExit(q: number): ExitGrade {
  if (q >= 0.8) return 'perfect';
  if (q >= 0.55) return 'good';
  if (q > 0.05) return 'weak';
  return 'none';
}

/**
 * Advance the rhythm machine one fixed step. Writes `out` in place.
 * Non-finite input or dt <= 0 holds state with event 'none'. Airborne steps
 * freeze slide/cooldown clocks but still track handbrake edges.
 */
export function updateDrift(s: DriftState, t: DriftTuning, inp: DriftStepInput, out: DriftStepOut): void {
  out.event = 'none'; out.quality = 0; out.grade = 'none';
  out.yawKick = 0; out.pendRate = 0; out.pendAmp = s.pendAmp; out.chainArmed = s.chainT > 0 && s.chainDir !== 0;
  if (!isFiniteNum(inp.dt) || inp.dt <= 0 || !isFiniteNum(inp.steer) ||
      !isFiniteNum(inp.speed) || !isFiniteNum(inp.slipDeg)) {
    out.phase = s.phase; out.slideBlend = s.slideBlend; out.boostAccel = s.boostAccel;
    return;
  }
  const dt = inp.dt > 0.1 ? 0.1 : inp.dt;
  const steer = clamp(inp.steer, -1, 1);
  const hand = inp.handbrake === true;
  const rising = hand && !s.prevHand;
  const falling = !hand && s.prevHand;
  s.prevHand = hand;
  if (falling && s.phase === 'sliding') s.cleanTap = s.handHeldS <= t.tapMaxS;
  if (hand) s.handHeldS += dt; else s.handHeldS = 0;

  if (s.boostT > 0) s.boostT = Math.max(0, s.boostT - dt);
  s.boostAccel = s.boostT > 0 ? s.boostAccel : 0;

  if (!inp.grounded) {
    // Airborne: pendulum, slide, cooldown, and chain clocks all freeze, but
    // handbrake edges are still tracked above so landings re-arm cleanly.
    if (s.phase === 'sliding') out.pendRate = -s.entryDir * s.pendAmp * Math.sin(s.pendPhase) * t.pendYaw;
    out.phase = s.phase; out.slideBlend = s.slideBlend; out.boostAccel = s.boostAccel;
    return;
  }

  if (s.phase === 'cooldown') {
    s.slideBlend = Math.max(0, s.slideBlend - t.slideRelease * dt);
    s.cooldownT -= dt;
    if (s.chainT > 0) s.chainT -= dt;
    if (s.cooldownT <= 0) { s.phase = 'idle'; s.cooldownT = 0; s.chainDir = 0; s.chainT = 0; s.chainHoldT = 0; }
    // Chained re-entry: steering with the residual swing re-engages the
    // opposite slide without a neutral pass — instantly on a tap, or after a
    // short hold (the "kept steering" natural transition). Anything else
    // during cooldown is still spam. One chain per exit: entry consumes it.
    if (s.chainDir !== 0 && s.chainT > 0 && signOf(steer) === s.chainDir && Math.abs(steer) >= t.entrySteer) {
      if (rising) { enterChain(s, t, inp, out); return; }
      s.chainHoldT += dt;
      if (s.chainHoldT >= t.chainHold) { enterChain(s, t, inp, out); return; }
    } else {
      s.chainHoldT = 0;
      if (rising) { s.spamCount++; out.event = 'rejected'; }
    }
    out.chainArmed = s.chainT > 0 && s.chainDir !== 0;
    out.phase = s.phase; out.slideBlend = s.slideBlend; out.boostAccel = s.boostAccel;
    return;
  }

  if (s.phase === 'idle') {
    s.slideBlend = Math.max(0, s.slideBlend - t.slideRelease * dt);
    if (Math.abs(steer) < t.rearmDeadband) s.needNeutral = false;
    if (rising) {
      const dir = signOf(steer);
      if (s.needNeutral || dir === 0 || Math.abs(steer) < t.entrySteer || inp.speed < t.entryMinSpeed) {
        if (!s.needNeutral && s.cooldownT <= 0) { /* silent ignore: not a rhythm attempt */ }
        else { s.spamCount++; out.event = 'rejected'; }
      } else {
        s.phase = 'sliding';
        s.entryDir = dir;
        s.slideAge = 0;
        s.peakSlipDeg = Math.abs(inp.slipDeg);
        s.cleanTap = true;
        // Tap entry stores full pendulum energy and fires the one-step yaw
        // impulse. Mid-slide taps never re-kick (spam vector).
        s.pendAmp = 1;
        s.pendPhase = 0;
        out.yawKick = -dir * t.kickRad;
        out.pendAmp = s.pendAmp;
        out.event = 'entered';
      }
    }
    out.phase = s.phase; out.slideBlend = s.slideBlend; out.boostAccel = s.boostAccel;
    return;
  }

  // sliding: the pendulum oscillator advances and decays here only, so its
  // phase is a pure function of slide time (frame-rate independent).
  s.slideAge += dt;
  s.peakSlipDeg = Math.max(s.peakSlipDeg, Math.abs(inp.slipDeg));
  s.slideBlend = Math.min(1, s.slideBlend + t.slideAttack * dt);
  s.pendPhase += t.pendFreq * dt;
  s.pendAmp *= Math.exp(-t.pendDecay * dt);
  if (hand && s.handHeldS > t.tapMaxS) s.cleanTap = false;
  out.pendRate = -s.entryDir * s.pendAmp * Math.sin(s.pendPhase) * t.pendYaw;
  out.pendAmp = s.pendAmp;

  const commit = signOf(steer) === -s.entryDir && Math.abs(steer) >= t.exitOppSteer;
  if (commit) {
    // Quality scoring is untouched by pendulum phase; phase only routes the
    // residual energy. In-phase commits critically damp to zero; anti-phase
    // commits amplify and arm a chained opposite slide; anything between
    // keeps a fraction. Poor (low-quality) releases carry whatever is left.
    let q = scoreExit(t, s.peakSlipDeg, Math.abs(inp.slipDeg), inp.speed, s.slideAge, Math.abs(steer));
    if (!s.cleanTap) q *= t.sloppyScale;
    const grade = gradeExit(q);
    const align = Math.cos(s.pendPhase);
    let residual = align > 0.3 ? 0 : align < -0.3 ? Math.min(s.pendAmp * t.chainBoost, 1.5) : s.pendAmp * 0.4;
    if (q < 0.3) residual = Math.max(residual, s.pendAmp);
    s.lastQuality = q; s.lastGrade = grade;
    s.phase = 'cooldown'; s.cooldownT = t.cooldownS; s.needNeutral = true;
    s.pendAmp = residual;
    if (residual > t.chainMin) { s.chainDir = -s.entryDir; s.chainT = t.chainWindow; s.chainHoldT = 0; }
    else { s.chainDir = 0; s.chainT = 0; s.chainHoldT = 0; }
    s.slideBlend = Math.max(0, s.slideBlend - t.slideRelease * dt);
    if (q > 0) { s.boostT = t.boostTime; s.boostAccel = q * t.boostAccelMax; }
    else { s.boostT = 0; s.boostAccel = 0; }
    out.event = 'exit'; out.quality = q; out.grade = grade;
    out.pendRate = 0; out.pendAmp = s.pendAmp; out.chainArmed = s.chainDir !== 0;
    out.phase = s.phase; out.slideBlend = s.slideBlend; out.boostAccel = s.boostAccel;
    return;
  }
  if (s.slideAge >= t.timeoutS || inp.speed < t.abortSpeed) {
    s.lastQuality = 0; s.lastGrade = 'none';
    s.boostT = 0; s.boostAccel = 0;
    if (inp.speed < t.abortSpeed) {
      s.phase = 'idle';
      s.chainDir = 0; s.chainT = 0; s.chainHoldT = 0;
    } else {
      s.phase = 'cooldown'; s.cooldownT = t.cooldownS; s.needNeutral = true;
      // Timed-out slides have decayed to ~nothing, but carry the remainder.
      s.pendAmp *= 0.4;
      if (s.pendAmp > t.chainMin) { s.chainDir = -s.entryDir; s.chainT = t.chainWindow; s.chainHoldT = 0; }
      else { s.chainDir = 0; s.chainT = 0; s.chainHoldT = 0; }
    }
    s.slideBlend = Math.max(0, s.slideBlend - t.slideRelease * dt);
    out.event = 'expired';
    out.pendRate = 0; out.pendAmp = s.pendAmp; out.chainArmed = s.chainDir !== 0;
    out.phase = s.phase; out.slideBlend = s.slideBlend; out.boostAccel = s.boostAccel;
    return;
  }
  out.phase = s.phase; out.slideBlend = s.slideBlend; out.boostAccel = s.boostAccel;
}

/**
 * Engage a chained opposite-direction slide inside the chain window. Carries
 * the residual pendulum energy into the new swing; consumes the chain so one
 * exit arms at most one chain. Fresh slide clock, fresh peak tracking.
 */
function enterChain(s: DriftState, t: DriftTuning, inp: DriftStepInput, out: DriftStepOut): void {
  s.phase = 'sliding';
  s.entryDir = s.chainDir;
  s.slideAge = 0;
  s.peakSlipDeg = Math.abs(inp.slipDeg);
  s.cleanTap = true;
  s.pendPhase = 0;
  s.chainDir = 0; s.chainT = 0; s.chainHoldT = 0;
  out.yawKick = -s.entryDir * t.kickRad;
  out.pendRate = 0;
  out.pendAmp = s.pendAmp;
  out.chainArmed = false;
  out.event = 'entered';
  out.phase = s.phase; out.slideBlend = s.slideBlend; out.boostAccel = s.boostAccel;
}
