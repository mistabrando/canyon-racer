// render-motion.ts — deterministic chase-camera + FOV smoothing state.
// Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock, no network.
// The game copies MotionState fields into the camera each frame; tests drive it
// headless with synthetic pose streams.
//
// Why this exists: the chase camera used to aim with the raw interpolated body
// heading, so every drift yaw-rate spike whipped both the camera anchor and the
// look target. FOV targets stepped on drift enter/exit, a Vector3 was allocated
// per frame, and teleports/landings had no unified handling. This module keeps
// a wrap-safe lagged camera yaw blended from body heading + velocity direction
// + track tangent, critically-damped position/look/FOV channels with velocity
// feedforward (steady-state lag cancel), bounded decaying impulses for landing
// and wall contact, and explicit snap handling for resets and teleports.
// updateMotion allocates nothing: all state lives in MotionState. Feedforward
// cancels the spring lag including the integrator's one-frame lead, so framing
// does not depend on refresh rate.

export interface MotionTuning {
  posLambda: number;
  lookLambda: number;
  headLambda: number;
  fovLambda: number;
  driftLambda: number;
  feedforward: number;
  maxImpulse: number;
  impulseDecay: number;
  camDist: number;
  camHeight: number;
  lookAhead: number;
  lookHeight: number;
  baseFov: number;
  speedFov: number;
  driftFov: number;
  fullSpeed: number;
  maxDt: number;
}

export const DEFAULT_TUNING: MotionTuning = {
  posLambda: 7,
  lookLambda: 10,
  headLambda: 5,
  fovLambda: 5,
  driftLambda: 6,
  feedforward: 1,
  maxImpulse: 1.2,
  impulseDecay: 5,
  camDist: 11.5,
  camHeight: 4.6,
  lookAhead: 9,
  lookHeight: 1.4,
  baseFov: 62,
  speedFov: 14,
  driftFov: 5,
  fullSpeed: 60,
  maxDt: 0.05,
};

export interface MotionState {
  px: number; py: number; pz: number;
  pvx: number; pvy: number; pvz: number;
  lx: number; ly: number; lz: number;
  lvx: number; lvy: number; lvz: number;
  fov: number; fovV: number;
  camH: number;
  driftMix: number;
  impx: number; impy: number; impz: number;
  ready: boolean;
}

export interface MotionInput {
  dt: number;
  px: number; py: number; pz: number;
  heading: number;
  vx: number; vz: number;
  speed: number;
  drifting: boolean;
  tangentX: number; tangentZ: number;
  hasTangent: boolean;
  landed: boolean; landV: number;
  wallHit: boolean; wallVn: number;
}

export function createMotionState(): MotionState {
  return {
    px: 0, py: 0, pz: 0, pvx: 0, pvy: 0, pvz: 0,
    lx: 0, ly: 0, lz: 0, lvx: 0, lvy: 0, lvz: 0,
    fov: DEFAULT_TUNING.baseFov, fovV: 0,
    camH: 0, driftMix: 0,
    impx: 0, impy: 0, impz: 0,
    ready: false,
  };
}

export function wrapPi(a: number): number {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

export function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v));
}

function isFiniteNum(v: number): boolean {
  return typeof v === 'number' && isFinite(v);
}

function springChannel(p: number, v: number, target: number, lambda: number, dt: number, out: number[]): void {
  const k = lambda * lambda;
  const c = 2 * lambda;
  const nv = v + ((target - p) * k - v * c) * dt;
  out[0] = p + nv * dt;
  out[1] = nv;
}

/**
 * Snap every channel to the anchor behind (px,py,pz) facing heading.
 * Call on run start, respawn, teleport, and finish so no stale velocity
 * leaks into the next shot. After reset the next update with an identical
 * pose produces zero deltas.
 */
export function resetMotion(m: MotionState, t: MotionTuning, px: number, py: number, pz: number, heading: number): void {
  const fx = Math.sin(heading);
  const fz = Math.cos(heading);
  m.px = px - fx * t.camDist; m.py = py + t.camHeight; m.pz = pz - fz * t.camDist;
  m.pvx = 0; m.pvy = 0; m.pvz = 0;
  m.lx = px + fx * t.lookAhead; m.ly = py + t.lookHeight; m.lz = pz + fz * t.lookAhead;
  m.lvx = 0; m.lvy = 0; m.lvz = 0;
  m.fov = t.baseFov; m.fovV = 0;
  m.camH = wrapPi(heading);
  m.driftMix = 0;
  m.impx = 0; m.impy = 0; m.impz = 0;
  m.ready = true;
}

/** Camera yaw target: velocity-led, body-aware, tangent-stabilized at low speed. */
export function cameraHeadingTarget(
  bodyH: number, vx: number, vz: number, speed: number,
  tangentX: number, tangentZ: number, hasTangent: boolean, driftMix: number,
): number {
  let base = bodyH;
  if (speed > 8) {
    base = Math.atan2(vx, vz);
  } else if (hasTangent && (tangentX !== 0 || tangentZ !== 0)) {
    base = Math.atan2(tangentX, tangentZ);
  }
  const slip = wrapPi(bodyH - base);
  const authority = clamp(speed / 8, 0, 1);
  const hold = (1 - 0.75 * clamp(driftMix, 0, 1)) * authority;
  return base + slip * hold;
}

/** FOV target from speed plus the smoothed drift envelope (no step changes). */
export function fovTarget(t: MotionTuning, speed: number, driftMix: number): number {
  return t.baseFov + clamp(speed / t.fullSpeed, 0, 1) * t.speedFov + clamp(driftMix, 0, 1) * t.driftFov;
}

const _sv: number[] = [0, 0];

/**
 * Advance camera state toward the interpolated car pose. Writes fields of `m`
 * in place and returns nothing. Holds state on dt <= 0 or non-finite input.
 * Auto-snaps on first use. Bounded for arbitrary dt (clamped to maxDt) and
 * arbitrary pose jumps (spring + impulse clamps, never NaN).
 */
export function updateMotion(m: MotionState, t: MotionTuning, inp: MotionInput): void {
  const dtRaw = inp.dt;
  if (!isFiniteNum(dtRaw) || dtRaw <= 0) return;
  if (!isFiniteNum(inp.px) || !isFiniteNum(inp.py) || !isFiniteNum(inp.pz)) return;
  if (!isFiniteNum(inp.heading) || !isFiniteNum(inp.vx) || !isFiniteNum(inp.vz)) return;
  if (!m.ready) {
    resetMotion(m, t, inp.px, inp.py, inp.pz, inp.heading);
    return;
  }
  const dt = dtRaw > t.maxDt ? t.maxDt : dtRaw;
  const speed = clamp(inp.speed, 0, 200);
  const driftGoal = inp.drifting ? 1 : 0;
  m.driftMix += (driftGoal - m.driftMix) * (1 - Math.exp(-t.driftLambda * dt));
  m.driftMix = clamp(m.driftMix, 0, 1);

  const wantH = cameraHeadingTarget(
    inp.heading, inp.vx, inp.vz, speed,
    inp.tangentX, inp.tangentZ, inp.hasTangent, m.driftMix,
  );
  m.camH += wrapPi(wantH - m.camH) * (1 - Math.exp(-t.headLambda * dt));
  m.camH = wrapPi(m.camH);

  const fx = Math.sin(m.camH);
  const fz = Math.cos(m.camH);
  // Exact ramp tracking: the continuous-time lag of a critically-damped
  // channel is 2v/lambda, but semi-implicit Euler advances position with the
  // new velocity, landing one frame ahead (+v*dt). Compensating (2/lambda -
  // dt)*v cancels both, so steady-state framing is identical at 60-144Hz.
  // Clamped at zero so spikes never invert the lead.
  const il = Math.max(t.feedforward * (2 / t.posLambda) - dt, 0);
  const tx = inp.px - fx * t.camDist + inp.vx * il;
  const ty = inp.py + t.camHeight;
  const tz = inp.pz - fz * t.camDist + inp.vz * il;

  springChannel(m.px, m.pvx, tx, t.posLambda, dt, _sv); m.px = _sv[0]; m.pvx = _sv[1];
  springChannel(m.py, m.pvy, ty, t.posLambda, dt, _sv); m.py = _sv[0]; m.pvy = _sv[1];
  springChannel(m.pz, m.pvz, tz, t.posLambda, dt, _sv); m.pz = _sv[0]; m.pvz = _sv[1];

  const ilLook = Math.max(t.feedforward * (2 / t.lookLambda) - dt, 0);
  const gx = inp.px + fx * t.lookAhead + inp.vx * ilLook;
  const gy = inp.py + t.lookHeight;
  const gz = inp.pz + fz * t.lookAhead + inp.vz * ilLook;
  springChannel(m.lx, m.lvx, gx, t.lookLambda, dt, _sv); m.lx = _sv[0]; m.lvx = _sv[1];
  springChannel(m.ly, m.lvy, gy, t.lookLambda, dt, _sv); m.ly = _sv[0]; m.lvy = _sv[1];
  springChannel(m.lz, m.lvz, gz, t.lookLambda, dt, _sv); m.lz = _sv[0]; m.lvz = _sv[1];

  springChannel(m.fov, m.fovV, fovTarget(t, speed, m.driftMix), t.fovLambda, dt, _sv);
  m.fov = _sv[0]; m.fovV = _sv[1];

  if (inp.landed && isFiniteNum(inp.landV) && inp.landV < 0) {
    m.impy -= clamp(-inp.landV / 22, 0, 1) * 0.9;
  }
  if (inp.wallHit && isFiniteNum(inp.wallVn) && inp.wallVn > 0) {
    const push = clamp(inp.wallVn / 25, 0, 1) * 0.8;
    const ilen = Math.hypot(inp.vx, inp.vz);
    if (ilen > 1e-6) {
      m.impx -= (inp.vx / ilen) * push;
      m.impz -= (inp.vz / ilen) * push;
    }
  }
  const impLen = Math.hypot(m.impx, m.impy, m.impz);
  if (impLen > t.maxImpulse && impLen > 0) {
    const s = t.maxImpulse / impLen;
    m.impx *= s; m.impy *= s; m.impz *= s;
  }
  const decay = Math.exp(-t.impulseDecay * dt);
  m.impx *= decay; m.impy *= decay; m.impz *= decay;
}

/** Camera world position including the decaying impulse offset. */
export function cameraOutput(m: MotionState, out: { x: number; y: number; z: number }): void {
  out.x = m.px + m.impx;
  out.y = m.py + m.impy;
  out.z = m.pz + m.impz;
}

/** Impulse magnitude, for telemetry and tests. */
export function impulseLength(m: MotionState): number {
  return Math.hypot(m.impx, m.impy, m.impz);
}
