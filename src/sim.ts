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
export const LAUNCH_VY_MAX = 6.5; // caps airtime at ~0.5s so flight stays ~70u
export const FINISH_ARM_MS = 5000;
export const STICK_RANGE_PX = 48;
export const START_SPEED = 10;
// Trackmania pass: the road is very fast (cruise ~140), a committed drift
// is distinctly slower but fluent (~112), and a timed clean exit surges to
// ~162 before settling back to cruise. Grip-only cannot hold the ordinary
// drift corners at cruise, so corners demand a real slide.
export const ACCEL_ROAD = 85; // softened decisively (2026-09-18 sink2: 110 -> 85 with a deeper ramp): the standing start pulls noticeably slower again (t100 ~1.32s vs 0.95s); cruise (MAX_GRIP_SPEED) unchanged
// Boost-window makeup: one-shot exit/rhythm slingshots add back the
// pre-softening punch while their window is live, so timed-exit surge
// dynamics are unchanged and only plain launch/drive accel is gentler.
export const ACCEL_BOOST_MAKEUP = 55; // raised 30 -> 55 so ACCEL_ROAD + MAKEUP stays 140: live boost windows keep bit-identical totals (exit 172, rhythm 180)
// Launch ramp: plain on-road accel is speed-dependent so the standing start
// punches less hard, rising to the full ACCEL_ROAD value by LAUNCH_RAMP_END.
// Live boost windows (rhythm/exit slingshot) bypass the ramp, so timed-exit
// surge dynamics stay bit-identical and only the launch ramp changes.
export const LAUNCH_RAMP_MIN = 0.15; // deepened 0.35 -> 0.15 and extended END 60 -> 80 (2026-09-18 feel3, third slow-launch report): ramp-only change, ACCEL_ROAD stays 85; first-step punch ~21.8 u/s/s vs ~39, t100 lands ~1.8s
export const LAUNCH_RAMP_END = 80;
export const ACCEL_OFFROAD = 6; // dirt is terminal (2026-09-18 feel3 requirement change): full-throttle equilibrium is ACCEL_OFFROAD/OFFROAD_DRAG = 6 u/s crawl, so a 120 u/s entry decays to <=8 within ~4s and stays there; yaw stays free, recovery stays manual R
export const MAX_GRIP_SPEED = 140;
export const MAX_DRIFT_SPEED = 112;
export const MAX_OFFROAD_SPEED = 44; // dirt plain is slow; momentum still carries
export const DIRT_LATERAL_GRIP = 4.0; // dirt: low lateral traction; slidey but steerable
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
export const OFFROAD_DRAG = 1.0; // dirt drag dominates drive (2026-09-18 feel3 requirement change): no sustainable off-road cruise; see ACCEL_OFFROAD
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
// Reach gate for the rail clamp on open-edge (barrier-plan) tracks: a car
// already far outside the rail line drove out through an opening (or landed
// there), so yanking it back to LIM in one step is a multi-unit teleport that
// reads as a reset. Only correct penetrations within one step of travel at
// boost pace (~2.7u) plus curve-frame slack may clamp; anything deeper stays
// free on the plain and drives back through an opening. Legacy null-barrier
// tracks (closed-circuit tests) keep collide-everywhere exactly.
export const WALL_CLAMP_REACH = 4.0;
export const WALL_GLANCE_VN = 6;
export const WALL_GLANCE_GAIN = 0.02;
export const WALL_GLANCE_MAX = 0.15;
export const WALL_IMPACT_BLEND_VN = 6;
export const WALL_IMPACT_MIN_UPSET = 0.25;
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
export const SNAP_MIN_SPD = 25; // crawls and scrub-locked spins (which equilibrate well under this at cruise 140) must not poison the respawn snapshot
export const SNAP_MAX_SLIP = 0.35; // ~20deg: restoring into a bigger slide at cruise 140 is unrecoverable, so only near-settled moments anchor
// Safe-rescue validation (September 15 opening rail): a recovery anchor must
// sit clear of the rails, point roughly along the road, not drift outward into
// imminent contact, and hold no active scrape/crash. The old gate accepted
// offroad near-rail poses angled at the guardrail, so R restored the same
// near-impact pose. A short bounded history backs repeat rescues off the newest
// anchor when no fresh clean moment has been recorded.
export const SNAP_RAIL_CLEAR = 1.0; // min clearance from the road edge to the anchor
export const SNAP_MAX_HEAD_ERR = 0.4; // max |heading - road yaw| (rad, ~23deg)
export const SNAP_MAX_OUT_V = 2.0; // max outward (toward nearest rail) lateral velocity
export const SNAP_MIN_AHEAD = 4; // samples of road that must remain ahead of the anchor
export const SNAP_HISTORY = 6; // bounded count of live recovery candidates
// A rescue must not re-arm candidates by immediately re-recording the pose it
// just restored (that would reset the repeat-rescue backoff and loop). After a
// rescue, the car must drive this many course samples forward before a new
// clean moment is accepted as an anchor.
export const SNAP_RESUME_AHEAD = 4;
export const FINISH_TAIL = 60;
// Off-course contract (speed-dirt pass): the out-of-bounds area is a wide,
// drivable dirt plain (see ./surface.ts), not a void. Ground exists everywhere,
// so there is no bottomless fall and no invisible backstop wall; OOB only arms
// R RESET once the car has wandered far out onto the plain, and it can always
// drive back. Respawn stays the only teleport (deterministic snapshot + 3s gap).
export const OOB_EXTRA_LAT = 45; // beyond halfW: how far out OOB arms R RESET
export const OOB_ARM_MS = 900;
export const OOB_DECAY = 2;
export const BACKSTOP_RADIUS = 40;

import { barrierAt } from './barrier-plan.js';
import type { BarrierPlan } from './barrier-plan.js';
import { groundSurfaceY } from './surface.js';

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
  spd: number; drifting: boolean; sIdx: number; gIdx: number; pitch: number;
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
  lastIdx: number; groundIdx: number; raceMs: number; pitch: number;
  finished: boolean; finishCount: number; prevFinD: number;
  px0: number; py0: number; pz0: number; h0: number; pitch0: number; prevRaceMs: number;
  approach: number[];
  rec: GhostRec; recLastMs: number;
  snap: Snap; snapTimer: number;
  snaps: Snap[]; rescueStreak: number; rescueIdx: number;
  steer: number; driftAmt: number; wasOffroad: boolean; scrapeLowMs: number; breakT: number; wallCool: number; crashT: number; crashAmp: number; scrapeT: number; kickT: number; oobMs: number;
  driftHold: number; exitT: number;
  rhythm: DriftState; rhythmOut: DriftStepOut; rhythmExitLatch: number;
  justLaunched: boolean; airSteps: number;
}

export function createSimState(): SimState {
  return {
    heading: 0, px: 0, py: 0, pz: 0, vx: 0, vz: 0, vy: 0, grounded: true,
    lastIdx: 0, groundIdx: 0, raceMs: 0, pitch: 0,
    finished: false, finishCount: 0, prevFinD: 0,
    px0: 0, py0: 0, pz0: 0, h0: 0, pitch0: 0, prevRaceMs: 0,
    approach: [],
    rec: { t: 0, p: [], ts: [] }, recLastMs: 0,
    snap: { i: 0, x: 0, y: 0, z: 0, h: 0, vx: 0, vz: 0 }, snapTimer: 0,
    snaps: [], rescueStreak: 0, rescueIdx: -1,
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

// Gate-free ground station: the centreline sample nearest the car in plan, with
// no forward window and no motion gate. Progress tracking (lastIdx) deliberately
// freezes while the car is far off-road, so it is the wrong station for ground
// height: the rendered apron at the car's true position sits at the TRUE
// neighbour's road height, and the far plane follows the car. Keying physics to
// the frozen progress sample sank the car whenever the road height changed
// between the two (measured -21.1u driving parallel on an 8% grade, -1.7..-2.5u
// on dailies; see docs/agents/offtrack-sink2-2026-09-17.md). Grounding, landing
// and off-road pitch all use this station; progress, walls, launch, rewards,
// snapshots and the finish gate stay on the gated lastIdx, untouched.
export function nearestGroundIdx(tr: TrackView, x: number, z: number): number {
  let bi = 0, bd = Infinity;
  for (let i = 0; i < tr.n; i++) {
    const dx = tr.x[i] - x, dz = tr.z[i] - z;
    const d = dx * dx + dz * dz;
    if (d < bd) { bd = d; bi = i; }
  }
  return bi;
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
  s.lastIdx = i0; s.groundIdx = i0;
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
  s.snaps = [s.snap];
  s.rescueStreak = 0;
  s.rescueIdx = -1;
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
  // Safe-rescue selection: prefer the newest validated anchor, but back off the
  // bounded history on repeated rescues with no fresh clean moment in between,
  // so R can never loop the player back onto the same bad snapshot. Index 0 is
  // the pinned run-start anchor (never shifted out), so a fallback always
  // exists. When backing off, drop the higher-progress entries that are now
  // future/invalid so a later rescue can never jump forward into pre-rollback
  // history (no shortcut progress).
  const n = s.snaps.length;
  const back = n > 1 ? Math.min(s.rescueStreak, n - 1) : 0;
  const pick = n - 1 - back;
  const anchor = n > 0 ? s.snaps[pick] : s.snap;
  if (n > 0 && pick < n - 1) {
    s.snaps.length = pick + 1;
    s.snap = anchor;
  }
  s.lastIdx = anchor.i; s.groundIdx = anchor.i;
  s.px = anchor.x; s.py = anchor.y; s.pz = anchor.z;
  s.heading = anchor.h; s.vx = anchor.vx; s.vz = anchor.vz; s.vy = 0; s.grounded = true;
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
  s.rescueIdx = anchor.i;
  s.rescueStreak++;
  s.raceMs += RESPAWN_PENALTY_MS;
}

const LOOK = 8;
const APPROACH_N = 12;

// Dirt cancels all drift rewards: the slingshot charge, the legacy exit-grip
// boost, and the exit latch. Called when the car is off the asphalt (including
// a step that crosses the edge) so a dirt-earned (or dirt-carried) charge can
// never be cashed back on the road.
function clearDirtReward(s: SimState): void {
  s.exitT = 0;
  s.rhythm.boostT = 0;
  s.rhythm.boostAccel = 0;
  s.rhythmExitLatch = 0;
  s.rhythmOut.boostAccel = 0;
  if (s.rhythmOut.event === 'exit') { s.rhythmOut.event = 'none'; s.rhythmOut.quality = 0; s.rhythmOut.grade = 'none'; }
}

export function simStep(s: SimState, tr: TrackView, inp: StepInput, dt: number): StepInfo {
  const noop: StepInfo = {
    spd: Math.hypot(s.vx, s.vz), drifting: false, sIdx: s.lastIdx, gIdx: s.groundIdx,
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

  // Surface at the start of the step, plus a one-step projection, so a car that
  // leaves the asphalt within THIS step is treated as off-road for rewards.
  // Uses the previous tracked sample (the step's own trackFollow runs later).
  const iOn = s.lastIdx;
  const latOn = (s.px - tr.x[iOn]) * tr.nx[iOn] + (s.pz - tr.z[iOn]) * tr.nz[iOn];
  const latOnNext = latOn + (s.vx * tr.nx[iOn] + s.vz * tr.nz[iOn]) * dt;
  const onRoad = Math.abs(latOn) <= tr.halfW && Math.abs(latOnNext) <= tr.halfW;
  // Leaving (or already off) the asphalt cancels drift rewards before they can
  // be spent this step.
  if (!onRoad) clearDirtReward(s);

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
    slipDeg: slipRel * 180 / Math.PI, grounded: s.grounded, onRoad,
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
    if (prevAmt > 0.4 && s.driftAmt <= 0.4 && s.grounded && onRoad
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

  let spd = Math.hypot(s.vx, s.vz);
  const drifting = s.driftAmt > 0.4;
  let launched = false, landed = false, landV = 0;
  let impact = 0, scraping = false;
  if (s.grounded) {
    // At top speed the car cannot rotate enough on grip alone — hairpins demand drift.
    // Full-lock grip yaw at 80 units/s is ~0.61 rad/s (radius ~131): fast sweepers only.
    const gripRamp = Math.min(Math.max(spd, 8) / 10, 1); // floor: pinned car can still rotate to escape
    // Grip radius at cruise is ~160u, so the ordinary 110-130u drift corners
    // cannot be held on grip alone; the 130-175u sweepers can. Drift yaw is
    // stronger so the slide is decisive and countersteer reads clearly.
    // The floor ramps 0.30 -> 0.38 between 100 and 140 u/s: below 100 the
    // pre-Trackmania grip curve is untouched, at the 140 cruise the floor
    // holds radius ~160 (140 / (2.3 * 0.38)).
    const highCut = spd <= 30 ? 1 : Math.max(0.30 + 0.08 * clamp((spd - 100) / 40, 0, 1), 1 - (spd - 30) / 95);
    const yawRate = lerp(2.3 * highCut, 1.9, s.driftAmt) * gripRamp;
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
    const maxSp = offroad ? MAX_OFFROAD_SPEED
      : rhythmBoost > 0 ? BOOST_SPEED_CAP
      : drifting ? MAX_DRIFT_SPEED : MAX_GRIP_SPEED;
    // Crash upset: a wall impact stuns forward drive briefly, scaled by the
    // stored impact severity. High-speed wall hits cost recovery time on top
    // of the instant loss, so wall-leaning lines lose more than clean ones.
    const upset = s.crashT > 0 ? Math.min(Math.abs(s.crashAmp) / CRASH_WOBBLE, 1) : 0;
    const exitBoost = rhythmBoost > 0 ? 0 : (s.exitT > 0 ? EXIT_BOOST_ACCEL : 0);
    const boostMakeup = !offroad && (rhythmBoost > 0 || s.exitT > 0) ? ACCEL_BOOST_MAKEUP : 0;
    const boostLive = rhythmBoost > 0 || s.exitT > 0;
    // The ramp is a free-driving launch device only: grip driving off the line.
    // A committed slide bypasses it like a live boost window, so sustained
    // drift pace stays at the full ACCEL_ROAD (feel3: otherwise the deeper
    // 0.15/80 ramp would starve the sub-80 drift equilibrium and collapse the
    // drift radius 28.7 -> ~14, tightening corners further — the wrong
    // direction after 43 -> 29). Rail contact bypasses it too: the wall suite
    // (13d/E6 pin, lean-settle, escape, R5 recovery) pins the low-speed press
    // against the rail, and the weaker free-driving press lets the post-impact
    // slide persist into a wall-to-wall rattle that never settles into the
    // scraping latch (measured with the ramp applied in contact: pin residual
    // 3.5 -> 8.7..15.6, stuck latch 1050 -> 0, escape fwd 6.3 -> 1.0..4.0,
    // R5 pinned recovery never tags 60). Against the rail the engine pushes at
    // full force while scrape drag (unchanged, drag-dominated: grind pace is
    // press-insensitive, 13e/R5-grind bands hold under every variant) still
    // punishes grinding, so contact behavior is preserved and only free-road
    // launch slows. One known side effect, flagged for the wall owner: a dead
    // lean now settles faster and the stuck latch reads ~1867 vs ~1050, i.e.
    // past the 1500 STUCK-prompt threshold sink2 tuned out — prompting on a
    // genuine 1.9 s dead lean is arguably correct, but it is a UX change.
    const wallPress = s.scrapeT > 0 || s.crashT > 0 || s.wallCool > 0;
    const launchRamp = !offroad && !boostLive && !drifting && !wallPress
      ? LAUNCH_RAMP_MIN + (1 - LAUNCH_RAMP_MIN) * Math.min(Math.max(fSpeed, 0) / LAUNCH_RAMP_END, 1)
      : 1;
    const accel = (offroad ? ACCEL_OFFROAD : ACCEL_ROAD * launchRamp + boostMakeup + exitBoost + rhythmBoost) * (1 - CRASH_ACCEL_CUT * upset);
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
    // Dirt has very low lateral traction: the slide persists and recovery is
    // slow (momentum/slip carry), with no countersteer or loosen assist.
    const gripBase = offroad ? DIRT_LATERAL_GRIP : lerp(9.0, 4.8, s.driftAmt);
    const grip = (gripBase
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
    // Only on the road — a car on the flat dirt must never launch off the
    // nearest road sample's curvature.
    s.approach.push(gradeHere);
    if (s.approach.length > APPROACH_N) s.approach.shift();
    const vH = Math.hypot(s.vx, s.vz);
    if (!offroad && vH > LAUNCH_MIN_SPEED && -kappaV * vH * vH > LAUNCH_FOLLOW) {
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
  // Ground exists everywhere: the road, the dirt verge, and the endless dirt
  // plain (see ./surface.ts). The car always has a surface under it — no void,
  // no bottomless fall, no invisible backstop wall. Only a road crest launches
  // it into real airtime, and it lands back on whatever surface is below.
  const g = nearestGroundIdx(tr, s.px, s.pz);
  s.groundIdx = g;
  const latN = (s.px - tr.x[g]) * tr.nx[g] + (s.pz - tr.z[g]) * tr.nz[g];
  const groundY = groundSurfaceY(tr.y[g], latN, tr.halfW) + 0.2;
  // A step that ends off the asphalt also drops any drift reward (covers an
  // edge crossing the start-of-step projection missed).
  if (Math.abs(latN) > tr.halfW) clearDirtReward(s);
  if (s.grounded) {
    s.py = groundY;
    if (Math.abs(latN) > tr.halfW) {
      // Off-road pitch follows the surface under the car, not the road grade
      // at the progress sample: sample groundSurfaceY ahead/behind along the
      // heading around the GROUND station (which the renderer built the ribbon
      // from) so the verge banks the nose down its slope and the flat plain
      // past it reads level. On-road pitch is untouched above.
      const i1g = Math.min(g + 1, tr.n - 1), i0g = Math.max(g - 1, 0);
      const gradeG = (tr.y[i1g] - tr.y[i0g]) / distXZ(tr, i0g, i1g);
      const hxP = Math.sin(s.heading), hzP = Math.cos(s.heading);
      const PD = 1.5;
      const daF = (hxP * tr.tx[g] + hzP * tr.tz[g]) * PD;
      const dlF = (hxP * tr.nx[g] + hzP * tr.nz[g]) * PD;
      const gF = groundSurfaceY(tr.y[g] + gradeG * daF, latN + dlF, tr.halfW);
      const gR = groundSurfaceY(tr.y[g] - gradeG * daF, latN - dlF, tr.halfW);
      s.pitch = Math.atan(clamp((gF - gR) / (2 * PD), -0.5, 0.5));
    } else {
      s.pitch = Math.atan(clamp(gradeHere, -0.5, 0.5));
    }
  } else {
    s.py += s.vy * dt;
    s.airSteps++;
    // Land while descending through the surface; the plain means a landing is
    // always available, but the launch step itself never lands.
    if (!s.justLaunched && s.vy <= 0 && s.py <= groundY) {
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
  // clean impact event (severity-ramped tangential loss + a gentle separation
  // nudge) followed by a short cooldown where further contact only slides: no
  // per-tick bounce stutter, no teleport, no impact spam. Just above the
  // glance threshold the loss blends up from the glance level and the crash
  // upset is shortened; full loss and full upset apply past the blend band,
  // so hard crashes cost exactly as before. Steering away vents
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
  // Car-frame query: the clamp acts at the car's own course position (j is
  // the nearest sample to the CENTER, which lags wall contact on curves), so
  // a rail span that starts just ahead never collides early as an invisible
  // wall. Project the car onto j's frame for s, clamp into the plan window.
  const rx = s.px - tr.x[j], rz = s.pz - tr.z[j];
  const sCar = tr.cum ? clamp(tr.cum[j] + rx * tr.tx[j] + rz * tr.tz[j], 0, tr.barrier ? tr.barrier.length : tr.cum[tr.cum.length - 1]) : 0;
  const guarded = tr.barrier && tr.cum ? barrierAt(tr.barrier, sCar, bSide) : true;
  // Far-outside skip (plan tracks only): beyond WALL_CLAMP_REACH past LIM the
  // car is fenced OUT, not rubbing the rail — leave position and velocity
  // alone so momentum and steering stay free on the plain.
  const farOutside = tr.barrier != null && Math.abs(lat2) - LIM > WALL_CLAMP_REACH;
  if (Math.abs(lat2) > LIM && guarded && !farOutside) {
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
        // Severity continuity: just above the glance threshold the loss
        // blends up from the glance level and the crash upset is shortened,
        // so a touch barely harder than a glance costs barely more. Past the
        // blend band the full formula and full upset apply unchanged, so
        // medium and hard crashes keep their exact historical cost. Rebound,
        // cooldown, severity and the one-event contract are untouched.
        const fullLoss = clamp(WALL_HIT_MIN_LOSS + effVn * WALL_HIT_VN_GAIN, 0, WALL_HIT_MAX_LOSS);
        const blendT = clamp((effVn - WALL_GLANCE_VN) / WALL_IMPACT_BLEND_VN, 0, 1);
        const blendS = blendT * blendT * (3 - 2 * blendT);
        const glanceLoss = clamp(WALL_GLANCE_VN * WALL_GLANCE_GAIN, 0, WALL_GLANCE_MAX);
        const loss = lerp(glanceLoss, fullLoss, blendS);
        s.vx *= (1 - loss); s.vz *= (1 - loss);
        s.vx -= tr.nx[j] * sg * effVn * WALL_RESTITUTION;
        s.vz -= tr.nz[j] * sg * effVn * WALL_RESTITUTION;
        wallSev = clamp(effVn / 25, 0, 1);
        impact = wallSev;
        wallHit = true;
        s.wallCool = WALL_IMPACT_COOLDOWN;
        s.crashT = CRASH_UPSET_TIME * (WALL_IMPACT_MIN_UPSET + (1 - WALL_IMPACT_MIN_UPSET) * blendS);
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
  // Out-of-bounds: the plain is drivable, so OOB only arms R RESET once the
  // car has wandered far out laterally, and decays when it comes back. There
  // is no depth test: ground exists everywhere, so nothing falls into a void.
  {
    const latJ = (s.px - tr.x[j]) * tr.nx[j] + (s.pz - tr.z[j]) * tr.nz[j];
    if (Math.abs(latJ) > tr.halfW + OOB_EXTRA_LAT) s.oobMs += dt * 1000;
    else s.oobMs = Math.max(0, s.oobMs - OOB_DECAY * dt * 1000);
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
  // healthy moment snapshots immediately. Safety gate: the anchor must also
  // sit clear of the rails, point roughly along the road (not outward into the
  // guardrail), carry no outward drift and no active scrape/crash, and have
  // road ahead to regain control. The old gate accepted offroad near-rail
  // poses angled at the opening guardrail, so R restored a near-impact pose.
  s.snapTimer += dt;
  const snapSpd = Math.hypot(s.vx, s.vz);
  const snapHx = Math.sin(s.heading), snapHz = Math.cos(s.heading);
  const snapSlip = Math.abs(Math.atan2(s.vx * snapHz - s.vz * snapHx, Math.abs(s.vx * snapHx + s.vz * snapHz) + 1e-6));
  const snapLat = (s.px - tr.x[sIdx]) * tr.nx[sIdx] + (s.pz - tr.z[sIdx]) * tr.nz[sIdx];
  const snapSide = snapLat >= 0 ? 1 : -1;
  const snapOutV = (s.vx * tr.nx[sIdx] + s.vz * tr.nz[sIdx]) * snapSide;
  const snapHeadErr = Math.abs(wrapPi(s.heading - tr.yaw[sIdx]));
  const snapSafe = s.grounded
    && tr.halfW - Math.abs(snapLat) >= SNAP_RAIL_CLEAR
    && snapSpd >= SNAP_MIN_SPD
    && snapSlip <= SNAP_MAX_SLIP
    && snapHeadErr <= SNAP_MAX_HEAD_ERR
    && snapOutV <= SNAP_MAX_OUT_V
    && s.scrapeT <= 0 && s.crashT <= 0
    && sIdx <= tr.n - 1 - SNAP_MIN_AHEAD;
  if (s.snapTimer > 0.75 && snapSafe && (s.rescueStreak <= 0 || sIdx >= s.rescueIdx + SNAP_RESUME_AHEAD)) {
    s.snapTimer = 0;
    const cand = { i: sIdx, x: s.px, y: s.py, z: s.pz, h: s.heading, vx: s.vx, vz: s.vz };
    s.snap = cand;
    s.snaps.push(cand);
    // Keep the pinned run-start anchor at index 0 and bound the live candidate
    // tail, so a rescue always has a base anchor without unbounded growth.
    while (s.snaps.length > SNAP_HISTORY + 1) s.snaps.splice(1, 1);
    s.rescueStreak = 0;
  }

  // exact finish crossing (plane through final sample, normal = final tangent).
  // On-road only: dirt beside the finish straight cannot cross the plane for a
  // time (the shortcut/motion gates already block cuts; this closes the
  // parallel-plain case).
  let finished = false;
  {
    const e = tr.n - 1;
    const latFin = (s.px - tr.x[j]) * tr.nx[j] + (s.pz - tr.z[j]) * tr.nz[j];
    const onRoadFin = Math.abs(latFin) <= tr.halfW;
    const curD = (s.px - tr.x[e]) * tr.tx[e] + (s.pz - tr.z[e]) * tr.tz[e];
    if (onRoadFin && s.prevFinD <= 0 && curD > 0 && s.prevRaceMs + dt * 1000 > FINISH_ARM_MS && s.lastIdx >= tr.n - FINISH_TAIL) {
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
    spd, drifting, sIdx, gIdx: s.groundIdx, pitch: s.pitch, launched, landed, finished,
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

