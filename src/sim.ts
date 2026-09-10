// sim.ts — deterministic race simulation + ghost logic.
// Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock.
// The game (main.ts) wraps this with rendering/input; tests drive it headless.

export const DT = 1 / 60;
export const REC_CADENCE_MS = 120;
export const RESPAWN_PENALTY_MS = 3000;
export const GRAV = 26;
export const LAUNCH_FOLLOW = 11; // v^2 * convex-curvature threshold for leaving the road
export const LAUNCH_MIN_SPEED = 20;
export const LAUNCH_VY_MIN = 5.5; // guarantees clearly visible airtime (>= ~0.42s)
export const LAUNCH_VY_MAX = 13;
export const FINISH_ARM_MS = 5000;
export const STICK_RANGE_PX = 48;
export const START_SPEED = 10;
export const ACCEL_ROAD = 75;
export const ACCEL_OFFROAD = 14;
export const MAX_GRIP_SPEED = 80;
export const MAX_DRIFT_SPEED = 74;
export const MAX_OFFROAD_SPEED = 26;
export const DRIFT_MIN_SPEED = 25;
export const DRIFT_MIN_STEER = 0.18;
export const STEER_RISE = 6;
export const STEER_FALL = 9;
export const DRIFT_ATTACK = 3.5;
export const DRIFT_RELEASE = 2.5;
export const DRIFT_RECOVER_FAST = 4.5;
// Cycle-6 handbrake kick: a tap entry breaks rear grip for KICK_WINDOW
// seconds (lateral grip scaled by KICK_GRIP_KEEP) while the one-step yaw
// impulse from drift-control rotates the car. Pendulum yaw bias arrives via
// rhythmOut.pendRate. All three are suppressed in wall contact
// (|lat| > halfW+0.2) so verified wall behavior is untouched.
export const KICK_WINDOW = 0.12;
export const KICK_GRIP_KEEP = 0.35;
// Cycle 7 corner-speed rhythm: the one-shot engagement cut is the readable
// entry price of a handbrake turn (HUD/speed dip on entry). Deliberate taps
// still beat held slides via the strengthened exit boosts below (see F1).
export const DRIFT_ENTRY_CUT = 0.94;
export const DRIFT_FATIGUE_GRACE = 1.0;
export const DRIFT_FATIGUE_GAIN = 0.10;
export const DRIFT_FATIGUE_MAX = 0.30;
export const REAR_LOOSEN_GAIN = 0.4;
export const REAR_LOOSEN_MAX = 0.8;
export const COUNTER_GRIP_BOOST = 5.0;
export const SCRUB_COUNTER_RELIEF = 0.5;
// Cycle 7: legacy clean-exit grip punches harder so a settled exit is felt
// as acceleration, not just drag relief. Still gated by driftHold/align/slip.
export const EXIT_BOOST_ACCEL = 32;
export const EXIT_BOOST_TIME = 0.7;
export const EXIT_SLIP_MAX = 0.35;
export const OFFROAD_DRAG = 0.55;
export const DRIFT_DRAG = 0.35;
export const SCRUB_GAIN = 9.0;
export const SCRUB_MIN_SLIP = 0.61;
export const SCRUB_MILD_GAIN = 2.0;
export const SCRUB_MILD_START = 0.44;
export const WALL_SCRAPE_DRAG = 4.0;
export const WALL_SCRAPE_DRAG_AWAY = 0.3;
export const WALL_SCRAPE_RAMP = 0.25;
export const WALL_HIT_MIN_LOSS = 0.40;
export const WALL_HIT_VN_GAIN = 0.007;
export const WALL_HIT_MAX_LOSS = 0.62;
export const CAR_RADIUS = 1.2;
// Guardrail contact contract (mirrors src/visuals.ts rail placement, which
// this module may not import): rail boxes are centered at
// halfW + RAIL_OFFSET with RAIL_HALF_DEPTH of half-depth, so the rail inside
// face sits at halfW + RAIL_OFFSET - RAIL_HALF_DEPTH. The physics contact
// plane (car CENTER clamp) is RAIL_FACE - CAR_RADIUS - WALL_MARGIN, i.e. the
// body edge kisses the rail inside face within WALL_MARGIN. WALL_MARGIN was
// redefined in wall cycle 4 (was slack outside the road edge); RAIL_TOL-grade
// values (~0.3) also cover rail-chord sagitta on sweepers, so the car never
// visibly penetrates the rail before the collider responds.
export const RAIL_OFFSET = 2.0;
export const RAIL_HALF_DEPTH = 0.275;
export const WALL_MARGIN = 0.3;
export function wallLimit(halfW: number): number {
  return halfW + RAIL_OFFSET - RAIL_HALF_DEPTH - CAR_RADIUS - WALL_MARGIN;
}
export const WALL_GLANCE_VN = 6;
export const WALL_GLANCE_GAIN = 0.02;
export const WALL_GLANCE_MAX = 0.15;
export const WALL_IMPACT_COOLDOWN = 0.35;
export const WALL_RESTITUTION = 0.5;
export const CRASH_UPSET_TIME = 0.6;
export const CRASH_ACCEL_CUT = 0.6;
export const CRASH_WOBBLE = 2.5;
export const BREAK_SPD = 55;
export const BREAK_STEER = 0.85;
export const BREAK_SLIP = 0.18;
export const BREAK_ATTACK = 2.2;
export const WOBBLE_GAIN = 0.9;
export const STUCK_SPD = 5;
export const SNAP_MIN_SPD = 8; // slower: stall/crawl must not poison the respawn snapshot
export const SNAP_MAX_SLIP = 0.6; // more sideways (~34deg): spin must not poison the snapshot
export const FINISH_TAIL = 60;
// Open-edge contract (Cycle 7): only VISIBLE rails collide (see tr.barrier).
// Road + SHOULDER past the edge is supported runoff (snaps to road height
// with offroad drag); beyond that the car departs into real ballistic fall
// instead of snapping. OOB fires after a short sustained interval so the
// main loop can show R RESET; respawn itself stays manual and deterministic.
export const EDGE_SHOULDER = 3.5;
export const BACKSTOP_RADIUS = 40;
export const OOB_EXTRA_LAT = 15;
export const OOB_FALL_DEPTH = 10;
export const OOB_ARM_MS = 900;

import { barrierAt } from './barrier-plan.js';
import type { BarrierPlan } from './barrier-plan.js';

export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export { fmt, buildShareText } from './share.js';
export function hashSeed(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function wrapPi(a: number): number {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

// ---------- track ----------
export interface TrackView {
  n: number;
  x: number[]; y: number[]; z: number[];
  tx: number[]; tz: number[]; // horizontal unit tangents
  nx: number[]; nz: number[]; // horizontal unit normals (left of travel)
  yaw: number[];
  halfW: number;
  cum: number[]; // centerline arc meters per sample (barrier query frame)
  barrier: BarrierPlan | null; // null = legacy: rails everywhere (tests)
}
// Single code path for tangent/normal computation (game + tests share it).
export function trackFromPoints(pts: { x: number; y: number; z: number }[], halfW: number): TrackView {
  const n = pts.length;
  const x = pts.map((p) => p.x), y = pts.map((p) => p.y), z = pts.map((p) => p.z);
  const tx: number[] = [], tz: number[] = [], nx: number[] = [], nz: number[] = [], yaw: number[] = [];
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(i - 1, 0)], b = pts[Math.min(i + 1, n - 1)];
    let dx = b.x - a.x, dz = b.z - a.z;
    const len = Math.hypot(dx, dz);
    if (len < 1e-9) { dx = 1; dz = 0; }
    else { dx /= len; dz /= len; }
    tx.push(dx); tz.push(dz);
    nx.push(-dz); nz.push(dx);
    yaw.push(Math.atan2(dx, dz));
  }
  const cum: number[] = [0];
  for (let i = 1; i < n; i++) cum.push(cum[i - 1] + Math.hypot(x[i] - x[i - 1], z[i] - z[i - 1]));
  return { n, x, y, z, tx, tz, nx, nz, yaw, halfW, cum, barrier: null };
}

// ---------- ghosts (single implementation lives in ./ghost.ts) ----------
// Sim-local recordings (SimState.rec) use these shared types; the versioned
// codec also decodes legacy JSON and C1-binary links, so old share URLs and
// stored PBs keep loading.
export type { GhostPt, GhostRec, GhostData as Ghost } from './ghost.js';
export {
  decodeGhost, decodeGhostResult, downsampleGhost, encodeGhost,
  maxQuantizationError, sampleGhost,
  GHOST_URL_BUDGET,
} from './ghost.js';
import type { GhostPt, GhostRec } from './ghost.js';
import {
  BOOST_SPEED_CAP, DEFAULT_DRIFT_TUNING,
  createDriftOut, createDriftState, resetDrift, updateDrift,
} from './drift-control.js';
import type { DriftPhase, DriftStepOut, DriftState } from './drift-control.js';

// ---------- touch controls (DOM-free; main.ts wires pointer events to this) ----------
export class TouchState {
  stickId = -1;
  stickX0 = 0;
  joy = 0;
  joyOn = false;
  drift = false;
  driftId = -1;
  stickDown(id: number, clientX: number) {
    if (this.stickId !== -1) return;
    this.stickId = id; this.stickX0 = clientX; this.joyOn = true; this.joy = 0;
  }
  stickMove(id: number, clientX: number) {
    if (id !== this.stickId) return;
    this.joy = clamp((clientX - this.stickX0) / STICK_RANGE_PX, -1, 1);
  }
  stickUp(id: number) {
    if (id !== this.stickId) return;
    this.stickId = -1; this.joyOn = false; this.joy = 0;
  }
  driftDown(id: number) {
    if (this.driftId !== -1) return;
    this.driftId = id; this.drift = true;
  }
  driftUp(id: number) {
    if (id !== this.driftId) return;
    this.driftId = -1; this.drift = false;
  }
  get steer(): number {
    return this.joyOn ? this.joy : 0;
  }
}

// ---------- simulation ----------
export interface StepInput { steer: number; drift: boolean }
export interface StepInfo {
  spd: number; drifting: boolean; sIdx: number; pitch: number;
  launched: boolean; landed: boolean; finished: boolean;
  fSpeed: number; lSpeed: number; slip: number; yawRate: number;
  offroad: boolean; surface: 'road' | 'offroad' | 'air'; landV: number;
  impact: number; scraping: boolean; stuckMs: number;
  wallHit?: boolean; wallSev?: number; wallNx?: number; wallNz?: number; wallCool?: number;
  oobMs: number;
  driftPhase?: DriftPhase; rhythmBoost?: number; exitQuality?: number;
  pendAmp?: number; kickT?: number; chainArmed?: boolean;
}
export interface Snap { i: number; x: number; y: number; z: number; h: number; vx: number; vz: number }
export interface SimState {
  heading: number; px: number; py: number; pz: number;
  vx: number; vz: number; vy: number; grounded: boolean;
  lastIdx: number; raceMs: number; pitch: number;
  finished: boolean; finishCount: number; prevFinD: number;
  px0: number; py0: number; pz0: number; h0: number; pitch0: number; prevRaceMs: number;
  approach: number[];
  rec: GhostRec; recLastMs: number;
  snap: Snap; snapTimer: number;
  steer: number; driftAmt: number; wasOffroad: boolean; scrapeLowMs: number; breakT: number; wallCool: number; crashT: number; crashAmp: number; scrapeT: number; kickT: number; oobMs: number;
  driftHold: number; exitT: number;
  rhythm: DriftState; rhythmOut: DriftStepOut; rhythmExitLatch: number;
  justLaunched: boolean; airSteps: number;
}

export function createSimState(): SimState {
  return {
    heading: 0, px: 0, py: 0, pz: 0, vx: 0, vz: 0, vy: 0, grounded: true,
    lastIdx: 0, raceMs: 0, pitch: 0,
    finished: false, finishCount: 0, prevFinD: 0,
    px0: 0, py0: 0, pz0: 0, h0: 0, pitch0: 0, prevRaceMs: 0,
    approach: [],
    rec: { t: 0, p: [], ts: [] }, recLastMs: 0,
    snap: { i: 0, x: 0, y: 0, z: 0, h: 0, vx: 0, vz: 0 }, snapTimer: 0,
    steer: 0, driftAmt: 0, wasOffroad: false, scrapeLowMs: 0, breakT: 0, wallCool: 0, crashT: 0, crashAmp: 0, scrapeT: 0, kickT: 0, oobMs: 0,
    driftHold: 0, exitT: 0,
    rhythm: createDriftState(), rhythmOut: createDriftOut(), rhythmExitLatch: 0,
    justLaunched: false, airSteps: 0,
  };
}

function finDist(s: SimState, tr: TrackView): number {
  const e = tr.n - 1;
  return (s.px - tr.x[e]) * tr.tx[e] + (s.pz - tr.z[e]) * tr.tz[e];
}

function nearestIdx(s: SimState, tr: TrackView, maxFwd = 100): number {
  let bi = s.lastIdx, bd = Infinity;
  for (let k = -100; k <= maxFwd; k++) {
    const i = clamp(s.lastIdx + k, 0, tr.n - 1);
    const dx = tr.x[i] - s.px, dz = tr.z[i] - s.pz;
    const d = dx * dx + dz * dz;
    if (d < bd) { bd = d; bi = i; }
  }
  return bi;
}

function fwdLimit(s: SimState, tr: TrackView, dt: number): number {
  // Plausible forward progress per tracked lookup: distance travelled plus
  // margin, capped at ~2 samples (≈4u at DS=2) so hairpin cuts can't credit
  // course. Both lookups in a step are capped; legitimate motion needs <1.
  const a = clamp(s.lastIdx, 0, tr.n - 1), b = clamp(s.lastIdx + 1, 0, tr.n - 1);
  const ds = a === b ? 2 : Math.max(distXZ(tr, a, b), 0.5);
  const spd = Math.hypot(s.vx, s.vz);
  return Math.min(2, 1 + Math.ceil((spd * dt) / ds));
}

// Progress-aware tracking: forward-limited window plus a motion gate, so only
// distance the car actually drove can advance lastIdx. A teleport/cut leaves
// the car many units from the window edge and freezes progress (and finish)
// instead of crediting it; legitimate driving, drifts, and jumps stay within
// the gate every step. Backward recovery is never gated.
function trackFollow(s: SimState, tr: TrackView, dt: number): number {
  const j = nearestIdx(s, tr, fwdLimit(s, tr, dt));
  if (j > s.lastIdx) {
    // Margin (12u) clears wall-grind lines (car rests ~9.6u out at LIM) and
    // per-step flight divergence, but freezes true cuts (25u+ teleports).
    const d = Math.hypot(tr.x[j] - s.px, tr.z[j] - s.pz);
    if (d > Math.hypot(s.vx, s.vz) * dt + 12) return s.lastIdx;
  }
  return j;
}

function distXZ(tr: TrackView, a: number, b: number): number {
  return Math.hypot(tr.x[b] - tr.x[a], tr.z[b] - tr.z[a]) || 1e-6;
}

// Full run reset with an exact start sample at t=0.
export function resetRun(s: SimState, tr: TrackView, i0: number) {
  s.lastIdx = i0;
  s.px = tr.x[i0]; s.pz = tr.z[i0]; s.py = tr.y[i0] + 0.2;
  s.heading = tr.yaw[i0];
  s.vx = tr.tx[i0] * START_SPEED; s.vz = tr.tz[i0] * START_SPEED; s.vy = 0; s.grounded = true;
  s.steer = 0; s.driftAmt = 0; s.wasOffroad = false;
  s.raceMs = 0;
  s.finished = false; s.finishCount = 0;
  s.prevFinD = finDist(s, tr);
  s.approach = [];
  s.rec = { t: 0, p: [[s.px, s.py, s.pz, s.heading]], ts: [0] };
  s.recLastMs = 0;
  s.snap = { i: i0, x: s.px, y: s.py, z: s.pz, h: s.heading, vx: s.vx, vz: s.vz };
  s.snapTimer = 0;
  s.scrapeLowMs = 0;
  s.breakT = 0;
  s.wallCool = 0;
  s.crashT = 0; s.crashAmp = 0; s.scrapeT = 0; s.kickT = 0;
  s.driftHold = 0; s.exitT = 0;
  resetDrift(s.rhythm); s.rhythmOut = createDriftOut(); s.rhythmExitLatch = 0;
  s.justLaunched = false; s.airSteps = 0; s.oobMs = 0;
  const g0 = (tr.y[Math.min(i0 + 1, tr.n - 1)] - tr.y[Math.max(i0 - 1, 0)]) / distXZ(tr, Math.max(i0 - 1, 0), Math.min(i0 + 1, tr.n - 1));
  s.pitch = Math.atan(clamp(g0, -0.5, 0.5));
  s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading; s.pitch0 = s.pitch;
}

// Respawn from snapshot with a real 3s timing gap (visible in ghost timestamps).
export function simRespawn(s: SimState) {
  if (s.finished) return;
  s.lastIdx = s.snap.i;
  s.px = s.snap.x; s.py = s.snap.y; s.pz = s.snap.z;
  s.heading = s.snap.h; s.vx = s.snap.vx; s.vz = s.snap.vz; s.vy = 0; s.grounded = true;
  s.driftAmt = 0; s.wasOffroad = false;
  s.justLaunched = false;
  s.scrapeLowMs = 0;
  s.breakT = 0;
  s.wallCool = 0;
  s.crashT = 0; s.crashAmp = 0; s.scrapeT = 0; s.kickT = 0;
  s.driftHold = 0; s.exitT = 0;
  resetDrift(s.rhythm); s.rhythmOut = createDriftOut(); s.rhythmExitLatch = 0;
  s.oobMs = 0;
  s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading; s.pitch0 = s.pitch;
  s.raceMs += RESPAWN_PENALTY_MS;
}

const LOOK = 8;
const APPROACH_N = 12;

export function simStep(s: SimState, tr: TrackView, inp: StepInput, dt: number): StepInfo {
  const noop: StepInfo = {
    spd: Math.hypot(s.vx, s.vz), drifting: false, sIdx: s.lastIdx,
    pitch: s.pitch, launched: false, landed: false, finished: true,
    fSpeed: 0, lSpeed: 0, slip: 0, yawRate: 0,
    offroad: false, surface: s.grounded ? 'road' : 'air', landV: 0,
    impact: 0, scraping: false, stuckMs: s.scrapeLowMs,
    wallHit: false, wallSev: 0, wallNx: 0, wallNz: 0, wallCool: s.wallCool,
    oobMs: s.oobMs,
  };
  if (s.finished) return noop; // finalize exactly once: no simulation past finish
  s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading; s.pitch0 = s.pitch;
  s.prevRaceMs = s.raceMs;
  let rhythmBoost = 0; // one-shot rhythm slingshot accel (gates legacy exit boost)

  const steer = clamp(inp.steer, -1, 1);
  // Deterministic steering smoothing: quick rise to full lock, quicker recenter.
  // Keyboard steps ramp in ~0.17s; analog stick input tracks through near-directly.
  const sRate = Math.abs(steer) > Math.abs(s.steer) ? STEER_RISE : STEER_FALL;
  s.steer += clamp(steer - s.steer, -sRate * dt, sRate * dt);
  const steerEff = s.steer;
  // Progressive drift breakaway: handbrake + speed + steered lock required to enter.
  // Aggressive grip turns break away on their own: yanked full lock at high
  // speed overloads the rear once slip passes ~10deg, sliding into a real
  // drift (same state as handbrake) with a deterministic wobble while loose.
  const spdNow = Math.hypot(s.vx, s.vz);
  const hxB = Math.sin(s.heading), hzB = Math.cos(s.heading);
  const slipNow = Math.atan2(s.vx * hzB - s.vz * hxB, Math.abs(s.vx * hxB + s.vz * hzB) + 1e-6);
  const breakHeld = !inp.drift && s.grounded && spdNow >= BREAK_SPD && Math.abs(steerEff) >= BREAK_STEER;
  if (breakHeld) s.breakT += dt; else s.breakT = 0;
  // Sustained yanked lock winds up over ~0.45s (wobbling throughout); a large
  // existing slide (|slip| >= ~10deg, e.g. from a flick) trips it instantly.
  const autoBreak = breakHeld && (s.breakT > 0.45 || Math.abs(slipNow) >= BREAK_SLIP);
  const wantDrift = (inp.drift && s.grounded && spdNow >= DRIFT_MIN_SPEED && Math.abs(steerEff) >= DRIFT_MIN_STEER)
    || autoBreak;
  const prevAmt = s.driftAmt;
  // Countersteer sensing (shared by recovery, lateral bite, and scrub relief):
  // lock opposing the slide counts proportionally; centered wheel is neutral.
  const hx0 = Math.sin(s.heading), hz0 = Math.cos(s.heading);
  const slipRel = Math.atan2(s.vx * hz0 - s.vz * hx0, Math.abs(s.vx * hx0 + s.vz * hz0) + 1e-6);
  const oppose = steerEff * slipRel < -0.02 ? clamp(-steerEff * slipRel / 0.12, 0.35, 1) : 0;
  // Drift-rhythm signature (./drift-control.ts): a handbrake TAP while steering
  // enters a persistent slide; a correctly timed opposite-steer flick commits the
  // exit and fires one quality-scaled slingshot. The module owns WHEN/HOW MUCH;
  // all physics (caps, forces, velocity changes) stays here.
  updateDrift(s.rhythm, DEFAULT_DRIFT_TUNING, {
    dt, steer: steerEff, handbrake: inp.drift, speed: spdNow,
    slipDeg: slipRel * 180 / Math.PI, grounded: s.grounded,
  }, s.rhythmOut);
  if (s.rhythmOut.event === 'exit') s.rhythmExitLatch = 1.0;
  else if (s.rhythmExitLatch > 0) s.rhythmExitLatch = Math.max(0, s.rhythmExitLatch - dt);
  // Slides live on normal ground: an airborne car keeps its momentum but not
  // its slide — driftAmt decays through the normal release path while aloft.
  const rhythmSlide = s.grounded && s.rhythmOut.phase === 'sliding';
  if (rhythmSlide) s.driftAmt = Math.max(s.driftAmt, s.rhythmOut.slideBlend);
  // Cycle-6 kick arming: a tap entry (including chain entry) opens the brief
  // rear-grip-break window. The impulse itself lands in the grounded block
  // where the wall zone is known, so wall contact suppresses it entirely.
  const kickFired = s.rhythmOut.event === 'entered';
  const kickImpulse = s.rhythmOut.yawKick;
  const pendRateOut = s.rhythmOut.pendRate;
  const wantDriftAll = wantDrift || rhythmSlide;
  if (wantDriftAll) {
    s.driftAmt = Math.min(1, s.driftAmt + (autoBreak ? BREAK_ATTACK : DRIFT_ATTACK) * dt);
  } else if (s.driftAmt > 0) {
    // Skillful recovery: active countersteer unwinds the drift proportionally
    // faster; a centered wheel still unwinds quickly but without the bite below.
    const recoverMix = Math.max(oppose, Math.abs(steerEff) < 0.25 ? 0.6 : 0);
    s.driftAmt = Math.max(0, s.driftAmt - lerp(DRIFT_RELEASE, DRIFT_RECOVER_FAST, recoverMix) * dt);
    // Clean-exit reward: a real drift unwound with the slide settled earns a
    // brief exit-grip boost, so deliberate drift timing beats holding the slide.
    if (prevAmt > 0.4 && s.driftAmt <= 0.4 && s.grounded
      && Math.abs(slipRel) < EXIT_SLIP_MAX && s.driftHold > 0.25 && s.rhythmExitLatch <= 0) {
      s.exitT = EXIT_BOOST_TIME;
    }
  }
  // Sustained-slide clock (drives fatigue/loosening below); cleared on full grip.
  if (s.driftAmt > 0.5) s.driftHold += dt; else if (s.driftAmt <= 0) s.driftHold = 0;
  if (s.exitT > 0) s.exitT = Math.max(0, s.exitT - dt);
  const i = trackFollow(s, tr, dt);
  s.lastIdx = i;
  const iA = Math.min(i + LOOK, tr.n - 1), iB = Math.max(i - LOOK, 0);
  const i1 = Math.min(i + 1, tr.n - 1), i0b = Math.max(i - 1, 0);
  const gradeHere = (tr.y[i1] - tr.y[i0b]) / distXZ(tr, i0b, i1);
  const gradeAhead = (tr.y[iA] - tr.y[i]) / distXZ(tr, i, iA);
  const gradeBehind = (tr.y[i] - tr.y[iB]) / distXZ(tr, iB, i);
  const kappaV = (gradeAhead - gradeBehind) / (distXZ(tr, i, iA) + distXZ(tr, iB, i));
  const relX = s.px - tr.x[i], relZ = s.pz - tr.z[i];
  const lat = relX * tr.nx[i] + relZ * tr.nz[i];
  const offroad = Math.abs(lat) > tr.halfW;
  const groundY = tr.y[i] + 0.2;

  let spd = Math.hypot(s.vx, s.vz);
  const drifting = s.driftAmt > 0.4;
  let launched = false, landed = false, landV = 0;
  let impact = 0, scraping = false;
  if (s.grounded) {
    // At top speed the car cannot rotate enough on grip alone — hairpins demand drift.
    // Full-lock grip yaw at 80 units/s is ~0.61 rad/s (radius ~131): fast sweepers only.
    const gripRamp = Math.min(Math.max(spd, 8) / 10, 1); // floor: pinned car can still rotate to escape
    const highCut = spd <= 30 ? 1 : Math.max(0.24, 1 - (spd - 30) / 68);
    const yawRate = lerp(2.3 * highCut, 1.5, s.driftAmt) * gripRamp;
    s.heading -= steerEff * yawRate * dt;
    // Wall zone is the contact band just outside the road edge (the car
    // rests at halfW+0.225 while scraping), so kick/pendulum energy never
    // fights the verified wall contact. Deliberately tighter than the loosen
    // approach zone (halfW+1.0) below, which is left untouched.
    const kickZone = Math.abs(lat) > tr.halfW + 0.2;
    if (kickFired && !kickZone) {
      s.kickT = KICK_WINDOW;
      s.heading += kickImpulse;
    }
    if (!kickZone) s.heading += pendRateOut * dt;
    if (s.kickT > 0) s.kickT = Math.max(0, s.kickT - dt);
    if (s.crashT > 0) {
      s.heading += s.crashAmp * Math.sin(s.crashT * 25) * dt;
      s.crashT = Math.max(0, s.crashT - dt);
      if (s.crashT <= 0) s.crashAmp = 0;
    }
    if (breakHeld && s.driftAmt < 1) {
      const wob = s.breakT > 0.45 ? 0.35 : 0.1 + Math.min(s.breakT, 0.45) * 0.55;
      s.heading += Math.sin(s.raceMs * 0.045) * WOBBLE_GAIN * wob * dt;
    }
    const hx = Math.sin(s.heading), hz = Math.cos(s.heading);
    let fSpeed = s.vx * hx + s.vz * hz;
    let lSpeed = s.vx * hz - s.vz * hx;
    // Leaving the road bites immediately (entry cut on the rising edge).
    if (offroad && !s.wasOffroad) fSpeed *= 0.92;
    s.wasOffroad = offroad;
    // Cycle 7: read the live one-shot BEFORE the cap so a timed rhythm exit
    // lifts the top-speed cap to BOOST_SPEED_CAP for its boost window. (It was
    // previously read after, so the slingshot accel fought the drift cap and
    // the surge never materialized.)
    rhythmBoost = s.rhythm.boostT > 0 ? s.rhythm.boostAccel : 0;
    const maxSp = rhythmBoost > 0 ? BOOST_SPEED_CAP : offroad ? MAX_OFFROAD_SPEED : drifting ? MAX_DRIFT_SPEED : MAX_GRIP_SPEED;
    // Crash upset: a wall impact stuns forward drive briefly, scaled by the
    // stored impact severity. High-speed wall hits cost recovery time on top
    // of the instant loss, so wall-leaning lines lose more than clean ones.
    const upset = s.crashT > 0 ? Math.min(Math.abs(s.crashAmp) / CRASH_WOBBLE, 1) : 0;
    const exitBoost = rhythmBoost > 0 ? 0 : (s.exitT > 0 ? EXIT_BOOST_ACCEL : 0);
    const accel = (offroad ? ACCEL_OFFROAD : ACCEL_ROAD + exitBoost + rhythmBoost) * (1 - CRASH_ACCEL_CUT * upset);
    if (fSpeed < maxSp) fSpeed = Math.min(maxSp, fSpeed + accel * dt);
    // Cycle 7: boost overshoot bleeds back toward grip top once every boost
    // has expired, so the slingshot is a surge (not a permanent +4 cruise).
    // Pure exponential settle (~1s), deterministic and frame-rate independent.
    if (rhythmBoost <= 0 && s.exitT <= 0 && !offroad && fSpeed > MAX_GRIP_SPEED)
      fSpeed = MAX_GRIP_SPEED + (fSpeed - MAX_GRIP_SPEED) * Math.exp(-2.0 * dt);
    // Drift initiation costs speed once per engagement; sustained drift keeps costing.
    if (prevAmt < 0.15 && s.driftAmt >= 0.15) fSpeed *= DRIFT_ENTRY_CUT;
    // Held slides loosen the rear progressively (over-rotation stays possible);
    // active countersteer bites back laterally (recovery stays skillful).
    // Both are suppressed near the wall so verified wall behavior is untouched.
    const nearWall = Math.abs(lat) > tr.halfW + 1.0;
    const loosen = !nearWall && s.driftAmt > 0.5
      ? Math.min(Math.max(s.driftHold - DRIFT_FATIGUE_GRACE, 0) * REAR_LOOSEN_GAIN, REAR_LOOSEN_MAX) : 0;
    const grip = (lerp(offroad ? 5.5 : 9.0, 4.8, s.driftAmt)
      + (offroad || nearWall ? 0 : (COUNTER_GRIP_BOOST * oppose - loosen) * s.driftAmt))
      * (s.kickT > 0 && !nearWall ? KICK_GRIP_KEEP : 1);
    lSpeed *= Math.exp(-grip * dt);
    const slipPre = Math.atan2(lSpeed, Math.abs(fSpeed) + 1e-6);
    // Progressive over-slip penalty: mild scrub from ~25 deg, strong past ~35 deg.
    // Clean drift (~17 deg) is untouched; over-rotated full-lock drifts pay more.
    const slipAbs = Math.abs(slipPre);
    let scrub = 0;
    if (slipAbs > SCRUB_MILD_START) scrub += SCRUB_MILD_GAIN * (slipAbs - SCRUB_MILD_START);
    if (slipAbs > SCRUB_MIN_SLIP) scrub += SCRUB_GAIN * (slipAbs - SCRUB_MIN_SLIP);
    // Countersteering relieves part of the over-slip scrub (recoverable), except
    // offroad and at the wall where mistakes stay fully costly.
    if (scrub > 0) fSpeed *= Math.exp(-scrub * (offroad || nearWall ? 1 : 1 - SCRUB_COUNTER_RELIEF * oppose) * dt);
    if (s.driftAmt > 0.5) {
      // Sustained-drift fatigue: holding the slide keeps costing, so timed
      // bursts beat continuous drifting. Capped small; top-speed bands hold.
      const fat = Math.min(Math.max(s.driftHold - DRIFT_FATIGUE_GRACE, 0) * DRIFT_FATIGUE_GAIN, DRIFT_FATIGUE_MAX);
      fSpeed *= Math.exp(-(DRIFT_DRAG + fat) * dt);
    }
    if (offroad) fSpeed *= Math.exp(-OFFROAD_DRAG * dt);
    s.vx = hx * fSpeed + hz * lSpeed;
    s.vz = hz * fSpeed - hx * lSpeed;
    // Cycle 7: while the one-shot slingshot is live, cap TOTAL speed (not
    // just forward) at BOOST_SPEED_CAP, so a big lateral slide stacked on the
    // surge cannot punch through the top-speed envelope. One-shot, capped,
    // and deterministic like the rest of the boost.
    if (rhythmBoost > 0) {
      const sp = Math.hypot(s.vx, s.vz);
      if (sp > BOOST_SPEED_CAP) { const k = BOOST_SPEED_CAP / sp; s.vx *= k; s.vz *= k; }
    }
    spd = Math.hypot(s.vx, s.vz);
    // Crest launch: vertical launch velocity derived from approach pitch.
    s.approach.push(gradeHere);
    if (s.approach.length > APPROACH_N) s.approach.shift();
    const vH = Math.hypot(s.vx, s.vz);
    if (vH > LAUNCH_MIN_SPEED && -kappaV * vH * vH > LAUNCH_FOLLOW) {
      let ap = 0.08;
      for (const g of s.approach) if (g > ap) ap = g;
      s.vy = clamp(vH * ap, LAUNCH_VY_MIN, LAUNCH_VY_MAX);
      s.grounded = false;
      s.justLaunched = true;
      s.airSteps = 0;
      launched = true;
    }
  } else {
    s.heading -= steer * 1.1 * dt; // air control (orientation only, momentum kept)
    s.vy -= GRAV * dt;
  }

  s.px += s.vx * dt; s.pz += s.vz * dt;
  // Supported road + shoulder snaps to the sampled road height; past the
  // shoulder on an open edge the car departs into real ballistic fall.
  const latN = (s.px - tr.x[i]) * tr.nx[i] + (s.pz - tr.z[i]) * tr.nz[i];
  const supported = Math.abs(latN) <= tr.halfW + EDGE_SHOULDER;
  if (s.grounded) {
    if (supported) {
      s.py = groundY;
      s.pitch = Math.atan(clamp(gradeHere, -0.5, 0.5));
    } else {
      s.grounded = false; s.vy = 0; s.airSteps = 0; s.justLaunched = false;
      s.pitch = clamp(Math.atan2(s.vy, Math.max(Math.hypot(s.vx, s.vz), 1)), -0.6, 0.6);
    }
  } else {
    s.py += s.vy * dt;
    s.airSteps++;
    // Land only while descending through the current road surface —
    // never on the launch step (justLaunched), never while rising, and
    // never off the supported road/shoulder (no floor: falling off an
    // open edge keeps falling until the driver resets).
    if (supported && !s.justLaunched && s.vy <= 0 && s.py <= groundY) {
      landV = s.vy;
      s.py = groundY; s.grounded = true; s.vy = 0; landed = true;
      // Touchdown bleeds the frozen in-air slide at the module's own release
      // rate, so landing never snaps back to a full slide: a held handbrake
      // rebuilds it in ~0.3s, a released one stays released.
      if (s.airSteps > 1) {
        s.rhythm.slideBlend = Math.max(0, s.rhythm.slideBlend - DEFAULT_DRIFT_TUNING.slideRelease * s.airSteps * dt);
      }
    }
    s.pitch = clamp(Math.atan2(s.vy, Math.max(Math.hypot(s.vx, s.vz), 1)), -0.6, 0.6);
  }
  s.justLaunched = false;

  // walls: forward-limited tracking + cut pull-back, then clamp to road + margin
  // Progress-aware tracking (same cap as above): a cut across an infield
  // cannot credit progress — lastIdx freezes near the last legitimate region
  // until the car physically drives back within range. The wall clamp below
  // keeps pushing the cutter toward the road; the finish gate blocks finishes.
  const j = trackFollow(s, tr, dt);
  s.lastIdx = j;
  const ox = s.px - tr.x[j], oz = s.pz - tr.z[j];
  const lat2 = ox * tr.nx[j] + oz * tr.nz[j];
  // Radius-aware arcade contact: the car CENTER clamps to wallLimit(halfW),
  // i.e. the body edge (CAR_RADIUS) meets the guardrail inside face
  // (halfW + RAIL_OFFSET - RAIL_HALF_DEPTH) within WALL_MARGIN — the car can
  // no longer visibly enter the rail before the collider responds.
  // wallNx/wallNz report the inward (road-pointing)
  // contact normal while touching. Contact deflects the slide along the wall.
  // Glancing touches scrub a little speed and scrape. Harder hits spend one
  // clean impact event (45-65% tangential loss + a gentle separation nudge)
  // followed by a short cooldown where further contact only slides: no
  // per-tick bounce stutter, no teleport, no impact spam. Steering away vents
  // scrape drag for quick recovery; leaning in stays slow.
  const LIM = wallLimit(tr.halfW);
  s.wallCool = Math.max(0, s.wallCool - dt);
  let wallHit = false, wallSev = 0, wallNx = 0, wallNz = 0;
  // Edge-triggered contact: scrapeT is zero only on the first step of a
  // fresh touch (it accumulates while touching and resets off-wall below),
  // so sustained grinding cannot retrigger impact/glance costs per tick.
  const freshTouch = s.scrapeT <= 0;
  const bSide: 1 | -1 = lat2 >= 0 ? 1 : -1;
  // Explicit barrier contract: only a VISIBLE rail collides. A null plan
  // (every headless legacy track) keeps collide-everywhere; a loaded plan
  // guards exactly its spans. Open edges skip clamp and impact entirely so
  // the car leaves the road — the departure above owns the fall, offroad
  // drag and OOB below own the cost. No wallHit fires without a rail.
  const guarded = tr.barrier && tr.cum ? barrierAt(tr.barrier, tr.cum[j] ?? 0, bSide) : true;
  if (Math.abs(lat2) > LIM && guarded) {
    const push = Math.abs(lat2) - LIM;
    const sg = Math.sign(lat2);
    s.px -= tr.nx[j] * sg * push; s.pz -= tr.nz[j] * sg * push;
    wallNx = -tr.nx[j] * sg; wallNz = -tr.nz[j] * sg;
    const outV = s.vx * tr.nx[j] + s.vz * tr.nz[j];
    const vn = outV * sg;
    if (vn > 0) {
      // Deflect: kill the into-wall normal velocity so the car slides along
      // the boundary instead of sticking or pinning.
      s.vx -= tr.nx[j] * outV; s.vz -= tr.nz[j] * outV;
      // Deep-penetration guard: a fresh touch that arrives more than half a
      // unit deep in one step (near-parallel slide-in at speed, spawn past the
      // rail) spends an impact even when the normal velocity reads as a
      // glance, with the penetration standing in for impact speed. Pure
      // teleports therefore cost speed instead of granting a free rail slide.
      const effVn = freshTouch && vn <= WALL_GLANCE_VN ? Math.max(vn, push * 12) : vn;
      if (effVn > WALL_GLANCE_VN && s.wallCool <= 0 && (freshTouch || vn > 2 * WALL_GLANCE_VN)) {
        // One clean impact event per fresh touch (a harder lean-in past
        // twice the glance band may escalate mid-scrape), then cooldown.
        const loss = clamp(WALL_HIT_MIN_LOSS + effVn * WALL_HIT_VN_GAIN, 0, WALL_HIT_MAX_LOSS);
        s.vx *= (1 - loss); s.vz *= (1 - loss);
        s.vx -= tr.nx[j] * sg * effVn * WALL_RESTITUTION;
        s.vz -= tr.nz[j] * sg * effVn * WALL_RESTITUTION;
        wallSev = clamp(effVn / 25, 0, 1);
        impact = wallSev;
        wallHit = true;
        s.wallCool = WALL_IMPACT_COOLDOWN;
        s.crashT = CRASH_UPSET_TIME;
        s.crashAmp = sg * CRASH_WOBBLE * wallSev;
      } else if (vn <= WALL_GLANCE_VN && freshTouch) {
        // Glancing touch: light proportional scrub once per touch, no bounce,
        // no cooldown. Sustained light contact pays scrape drag only.
        const glance = clamp(vn * WALL_GLANCE_GAIN, 0, WALL_GLANCE_MAX);
        s.vx *= (1 - glance); s.vz *= (1 - glance);
        wallSev = clamp(vn / 25, 0, 1);
      } else {
        // Inside impact cooldown: slide only, no fresh loss/bounce/spam.
        wallSev = clamp(vn / 25, 0, 1);
      }
    }
    // Continuous scraping drag: wall-riding is never competitive.
    // Steering fully away from the contacted wall vents scrape drag so a
    // pinned grind can escape; grinding into it stays slow. Drag ramps in
    // over WALL_SCRAPE_RAMP of continuous contact, so a brief kiss deflects
    // cheaply while a sustained grind pays full price.
    s.scrapeT += dt;
    const ramp = clamp(s.scrapeT / WALL_SCRAPE_RAMP, 0, 1);
    // Away = steering opposite the contacted side (sg): for a car on the
    // right wall (sg<0) that means positive steer, and vice versa.
    const away = steerEff * sg < -0.05;
    const sd = Math.exp(-(away ? WALL_SCRAPE_DRAG_AWAY : WALL_SCRAPE_DRAG) * ramp * dt);
    s.vx *= sd; s.vz *= sd;
    scraping = true;
    spd = Math.hypot(s.vx, s.vz);
  } else {
    s.scrapeT = 0;
  }
  // Out-of-bounds: far laterally off course, or fallen well below the road
  // after an open-edge departure. Sustained ~0.9s before the UI offers R
  // RESET; driving back in range decays it. Manual respawn stays the only
  // teleport (deterministic snapshot + 3s ghost gap, untouched).
  {
    const latJ = (s.px - tr.x[j]) * tr.nx[j] + (s.pz - tr.z[j]) * tr.nz[j];
    const deep = tr.y[j] + 0.2 - s.py > OOB_FALL_DEPTH;
    if (Math.abs(latJ) > tr.halfW + OOB_EXTRA_LAT || deep) s.oobMs += dt * 1000;
    else s.oobMs = Math.max(0, s.oobMs - 2 * dt * 1000);
  }
  // start backstop: don't drive off behind the start line. Gated on
  // proximity to the start sample: a half-plane test alone misfires on
  // loop-back track sections hundreds of units away that happen to cross
  // the start plane (they read as "behind the start" and eat all backward
  // velocity). Genuine start-line reversals happen within metres of the
  // start; the car auto-accelerates forward and has no reverse.
  {
    const rbx = s.px - tr.x[0], rbz = s.pz - tr.z[0];
    const rel = rbx * tr.tx[0] + rbz * tr.tz[0];
    if (rel < -3 && rbx * rbx + rbz * rbz < BACKSTOP_RADIUS * BACKSTOP_RADIUS) {
      s.px -= tr.tx[0] * (rel + 3); s.pz -= tr.tz[0] * (rel + 3);
      const bv = s.vx * tr.tx[0] + s.vz * tr.tz[0];
      if (bv < 0) { s.vx -= tr.tx[0] * bv; s.vz -= tr.tz[0] * bv; }
    }
  }
  const sIdx = s.lastIdx;
  // snapshot clean on-road moments for respawn. A stall or spin must not
  // poison the snapshot: refresh only while moving with the car roughly
  // aligned, so R always rescues to a drivable moment instead of restoring
  // the same stall forever. Timer keeps running while gated out, so the next
  // healthy moment snapshots immediately.
  s.snapTimer += dt;
  const snapSpd = Math.hypot(s.vx, s.vz);
  const snapHx = Math.sin(s.heading), snapHz = Math.cos(s.heading);
  const snapSlip = Math.abs(Math.atan2(s.vx * snapHz - s.vz * snapHx, Math.abs(s.vx * snapHx + s.vz * snapHz) + 1e-6));
  if (s.snapTimer > 0.75 && s.grounded && Math.abs(lat) <= tr.halfW + 0.5 && snapSpd >= SNAP_MIN_SPD && snapSlip <= SNAP_MAX_SLIP) {
    s.snapTimer = 0;
    s.snap = { i: sIdx, x: s.px, y: s.py, z: s.pz, h: s.heading, vx: s.vx, vz: s.vz };
  }

  // exact finish crossing (plane through final sample, normal = final tangent)
  let finished = false;
  {
    const e = tr.n - 1;
    const curD = (s.px - tr.x[e]) * tr.tx[e] + (s.pz - tr.z[e]) * tr.tz[e];
    if (s.prevFinD <= 0 && curD > 0 && s.prevRaceMs + dt * 1000 > FINISH_ARM_MS && s.lastIdx >= tr.n - FINISH_TAIL) {
      const f = clamp(-s.prevFinD / (curD - s.prevFinD || 1e-9), 0, 1);
      s.raceMs = s.prevRaceMs + f * dt * 1000;
      s.px = s.px0 + (s.px - s.px0) * f;
      s.py = s.py0 + (s.py - s.py0) * f;
      s.pz = s.pz0 + (s.pz - s.pz0) * f;
      s.heading = s.h0 + wrapPi(s.heading - s.h0) * f;
      s.rec.p.push([s.px, s.py, s.pz, s.heading]);
      s.rec.ts.push(s.raceMs);
      s.rec.t = Math.round(s.raceMs);
      s.finished = true;
      s.finishCount++;
      s.px0 = s.px; s.py0 = s.py; s.pz0 = s.pz; s.h0 = s.heading; s.pitch0 = s.pitch;
      finished = true;
    } else {
      s.raceMs = s.prevRaceMs + dt * 1000;
    }
    // An unarmed early crossing must not consume the finish edge: while the car
    // sits beyond the plane but cannot validly finish yet, hold the latched
    // non-positive distance so the edge re-fires once arming (and the tail-gate)
    // hold. Cuts/teleports stay blocked by the motion gate (lastIdx freeze)
    // plus the FINISH_TAIL requirement, both untouched above.
    s.prevFinD = (s.prevFinD <= 0 && curD > 0) ? s.prevFinD : curD;
  }

  if (!s.finished) {
    if (s.raceMs - s.recLastMs >= REC_CADENCE_MS - 1e-6) {
      s.recLastMs = s.raceMs;
      s.rec.p.push([s.px, s.py, s.pz, s.heading]);
      s.rec.ts.push(s.raceMs);
    }
  }
  spd = Math.hypot(s.vx, s.vz);
  if (scraping && spd < STUCK_SPD) s.scrapeLowMs += dt * 1000;
  else s.scrapeLowMs = 0;
  const ehx = Math.sin(s.heading), ehz = Math.cos(s.heading);
  const fSpeed = s.vx * ehx + s.vz * ehz;
  const lSpeed = s.vx * ehz - s.vz * ehx;
  return {
    spd, drifting, sIdx, pitch: s.pitch, launched, landed, finished,
    fSpeed, lSpeed,
    slip: Math.atan2(lSpeed, Math.abs(fSpeed) + 1e-6),
    yawRate: wrapPi(s.heading - s.h0) / dt,
    offroad, surface: !s.grounded ? 'air' : offroad ? 'offroad' : 'road', landV,
    impact, scraping, stuckMs: s.scrapeLowMs,
    wallHit, wallSev, wallNx, wallNz, wallCool: s.wallCool,
    driftPhase: s.rhythmOut.phase, rhythmBoost, exitQuality: s.rhythm.lastQuality,
    pendAmp: s.rhythm.pendAmp, kickT: s.kickT, chainArmed: s.rhythm.chainT > 0 && s.rhythm.chainDir !== 0,
    oobMs: s.oobMs,
  };
}

// Render interpolation between the previous and current sim poses.
// alpha=0 -> previous step pose, alpha=1 -> current pose (also the snap behavior
// for teleports: callers pass 1 on start/respawn/finish frames).
export interface RenderPose { x: number; y: number; z: number; h: number; pitch: number }
export function interpPose(s: SimState, alpha: number): RenderPose {
  const a = clamp(alpha, 0, 1);
  return {
    x: lerp(s.px0, s.px, a),
    y: lerp(s.py0, s.py, a),
    z: lerp(s.pz0, s.pz, a),
    h: s.h0 + wrapPi(s.heading - s.h0) * a,
    pitch: lerp(s.pitch0, s.pitch, a),
  };
}

// Display-state retention: render frames that run zero fixed steps keep showing
// the latest stepped values instead of falling back to zero.
export function updateDisplay(prev: StepInfo, stepsRan: number, latest: StepInfo): StepInfo {
  return stepsRan > 0 ? latest : prev;
}

