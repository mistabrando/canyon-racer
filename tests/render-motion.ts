// Standalone tests for src/render-motion.ts. Synthetic pose streams only:
// no sim.ts, no THREE, no DOM, no wall-clock, no network.
declare const process: { exit(c: number): void };
import {
  DEFAULT_TUNING, cameraHeadingTarget, createMotionState, fovTarget,
  impulseLength, resetMotion, updateMotion, wrapPi,
} from '../src/render-motion.js';
import type { MotionInput, MotionState } from '../src/render-motion.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

const T = DEFAULT_TUNING;

function straightInput(t: number, speed: number, extra?: Partial<MotionInput>): MotionInput {
  return {
    dt: 1 / 60, px: 0, py: 6, pz: speed * t, heading: 0,
    vx: 0, vz: speed, speed, drifting: false,
    tangentX: 0, tangentZ: 1, hasTangent: true,
    landed: false, landV: 0, wallHit: false, wallVn: 0,
    ...extra,
  };
}

function snap(m: MotionState): string {
  return [m.px, m.py, m.pz, m.pvx, m.pvy, m.pvz, m.lx, m.ly, m.lz,
    m.fov, m.fovV, m.camH, m.driftMix, m.impx, m.impy, m.impz].join(',');
}

function trailError(m: MotionState, px: number, py: number, pz: number): number {
  const fx = Math.sin(m.camH), fz = Math.cos(m.camH);
  const ax = px - fx * T.camDist, ay = py + T.camHeight, az = pz - fz * T.camDist;
  return Math.hypot(m.px - ax, m.py - ay, m.pz - az);
}

// 1. Steady-state tracking at 60/90/120/144Hz: near-zero trail lag, bounded deltas.
for (const rate of [60, 90, 120, 144]) {
  const dt = 1 / rate;
  const m = createMotionState();
  let t = 0;
  let maxDelta = 0;
  let prevX = 0, prevY = 0, prevZ = 0;
  let first = true;
  for (let i = 0; i < rate * 6; i++) {
    t += dt;
    updateMotion(m, T, straightInput(t, 80, { dt }));
    if (i > rate * 4) {
      const d = Math.hypot(m.px - prevX, m.py - prevY, m.pz - prevZ);
      if (!first) maxDelta = Math.max(maxDelta, d);
      prevX = m.px; prevY = m.py; prevZ = m.pz; first = false;
    }
  }
  const err = trailError(m, 0, 6, 80 * t);
  ok(err < 0.6, `steady trail @${rate}Hz`, `err=${err.toFixed(3)}u`);
  ok(maxDelta < 80 * dt * 1.6 + 0.1, `bounded frame delta @${rate}Hz`, `max=${maxDelta.toFixed(3)}u`);
}

// 2. Convergence after a 20u teleport: < 0.2u residual within 1.5s @120Hz.
{
  const m = createMotionState();
  updateMotion(m, T, straightInput(0, 60, { dt: 1 / 120 }));
  let t = 0;
  let settled = -1;
  for (let i = 0; i < 120 * 2; i++) {
    t += 1 / 120;
    updateMotion(m, T, straightInput(t, 60, { dt: 1 / 120, px: 20 }));
    if (settled < 0 && trailError(m, 20, 6, 60 * t) < 0.2) settled = t;
  }
  ok(settled > 0 && settled < 1.5, 'teleport converges <1.5s', `settled=${settled.toFixed(2)}s`);
}

// 3. Frame spike: single 100ms dt clamps, stays bounded, reconverges, no NaN.
{
  const m = createMotionState();
  let t = 0;
  for (let i = 0; i < 120 * 3; i++) { t += 1 / 120; updateMotion(m, T, straightInput(t, 80, { dt: 1 / 120 })); }
  const before = { x: m.px, y: m.py, z: m.pz };
  t += 0.1;
  updateMotion(m, T, straightInput(t, 80, { dt: 0.1 }));
  const spikeDelta = Math.hypot(m.px - before.x, m.py - before.y, m.pz - before.z);
  let nan = false;
  for (const v of [m.px, m.py, m.pz, m.lx, m.ly, m.lz, m.fov, m.camH]) if (!isFinite(v)) nan = true;
  ok(!nan, 'spike produces no NaN');
  ok(spikeDelta < 6, 'spike frame bounded', `delta=${spikeDelta.toFixed(2)}u`);
  for (let i = 0; i < 120; i++) { t += 1 / 120; updateMotion(m, T, straightInput(t, 80, { dt: 1 / 120 })); }
  ok(trailError(m, 0, 6, 80 * t) < 0.3, 'reconverges after spike');
}

// 4. Drift whip: heading slews 0.6 rad off velocity; damped look beats naive body lock.
{
  const m = createMotionState();
  const dt = 1 / 60;
  let t = 0;
  let peakDamped = 0, peakNaive = 0;
  let prevLookX = 0, prevNaiveX = 0, started = false;
  let camHAtFull = 0;
  for (let i = 0; i < 60 * 3; i++) {
    t += dt;
    const k = t < 0.5 ? 0 : t < 0.9 ? (t - 0.5) / 0.4 : t < 1.9 ? 1 : t < 2.3 ? 1 - (t - 1.9) / 0.4 : 0;
    const h = 0.6 * k;
    const inp = straightInput(t, 60, { dt, heading: h, drifting: k > 0.05 });
    updateMotion(m, T, inp);
    const naiveX = inp.px + Math.sin(h) * T.lookAhead;
    if (started) {
      peakDamped = Math.max(peakDamped, Math.abs(m.lx - prevLookX) / dt);
      peakNaive = Math.max(peakNaive, Math.abs(naiveX - prevNaiveX) / dt);
    }
    started = true;
    prevLookX = m.lx; prevNaiveX = naiveX;
    if (k === 1 && camHAtFull === 0) camHAtFull = m.camH;
  }
  ok(peakDamped < 0.6 * peakNaive, 'drift look calmer than body lock', `damped=${peakDamped.toFixed(1)} naive=${peakNaive.toFixed(1)} u/s`);
  ok(Math.abs(wrapPi(camHAtFull)) < 0.2, 'camera stays velocity-led at full drift', `camH=${camHAtFull.toFixed(3)}`);
}

// 5. Wall contact: 3u lateral teleport in one step; bounded + settles, no ringing.
{
  const m = createMotionState();
  const dt = 1 / 60;
  let t = 0;
  for (let i = 0; i < 120; i++) { t += dt; updateMotion(m, T, straightInput(t, 60, { dt })); }
  const preX = m.px;
  t += dt;
  updateMotion(m, T, straightInput(t, 60, { dt, px: 3 }));
  const kick = Math.hypot(m.px - preX, m.pz - m.pz);
  ok(kick < 1.2, 'wall kink absorbed per-frame', `kick=${kick.toFixed(2)}u`);
  let maxLate = 0;
  let prev = m.px;
  for (let i = 0; i < 60; i++) {
    t += dt;
    updateMotion(m, T, straightInput(t, 60, { dt, px: 3 }));
    maxLate = Math.max(maxLate, Math.abs(m.px - prev));
    prev = m.px;
  }
  ok(maxLate < 0.6, 'no ringing after wall step', `maxLate=${maxLate.toFixed(3)}u`);
  ok(trailError(m, 3, 6, 60 * t) < 0.25, 'settles after wall step');
}

// 6. Heading wrap: sweep through +pi; camera yaw stays continuous.
{
  const m = createMotionState();
  updateMotion(m, T, straightInput(0, 40, { dt: 1 / 60, heading: 3.0 }));
  let h = 3.0;
  let maxStep = 0;
  let prev = m.camH;
  for (let i = 0; i < 40; i++) {
    h += 0.02;
    updateMotion(m, T, straightInput(i / 60, 40, { dt: 1 / 60, heading: h }));
    maxStep = Math.max(maxStep, Math.abs(wrapPi(m.camH - prev)));
    prev = m.camH;
  }
  ok(maxStep < 0.15, 'no wrap snap in camera yaw', `maxStep=${maxStep.toFixed(3)}`);
  ok(Math.abs(wrapPi(m.camH - wrapPi(h))) < 0.3, 'camera tracks wrapped target');
  ok(Math.abs(cameraHeadingTarget(Math.PI - 0.05, 0, -10, 40, 0, 1, true, 0) - Math.PI) < 0.1, 'heading helper wrap-safe');
}

// 7. Landing impulse: bounded, vertical, decays out within 1.2s.
{
  const m = createMotionState();
  const dt = 1 / 60;
  let t = 0;
  for (let i = 0; i < 60; i++) { t += dt; updateMotion(m, T, straightInput(t, 50, { dt })); }
  t += dt;
  updateMotion(m, T, straightInput(t, 50, { dt, landed: true, landV: -18 }));
  const imp0 = impulseLength(m);
  ok(imp0 > 0.3 && imp0 <= T.maxImpulse + 1e-9, 'landing impulse bounded', `imp=${imp0.toFixed(3)}`);
  for (let i = 0; i < 72; i++) { t += dt; updateMotion(m, T, straightInput(t, 50, { dt })); }
  ok(impulseLength(m) < 0.03, 'impulse decays out', `imp=${impulseLength(m).toFixed(4)}`);
}

// 8. Wall-hit impulse: bounded and opposed to travel.
{
  const m = createMotionState();
  updateMotion(m, T, straightInput(0, 60, { dt: 1 / 60 }));
  updateMotion(m, T, straightInput(1 / 60, 60, { dt: 1 / 60, wallHit: true, wallVn: 25 }));
  ok(impulseLength(m) <= T.maxImpulse + 1e-9, 'wall impulse bounded');
  ok(m.impz < 0, 'wall impulse opposes travel');
}

// 9. Reset snaps exactly; following identical update has zero deltas.
{
  const m = createMotionState();
  resetMotion(m, T, 10, 7, 30, 1.2);
  const fx = Math.sin(1.2), fz = Math.cos(1.2);
  ok(m.px === 10 - fx * T.camDist && m.py === 7 + T.camHeight && m.pz === 30 - fz * T.camDist, 'reset snaps position exactly');
  ok(m.pvx === 0 && m.lvx === 0 && m.fovV === 0 && m.driftMix === 0, 'reset clears velocities + envelope');
  ok(impulseLength(m) === 0, 'reset clears impulse');
  const same: MotionInput = { ...straightInput(0, 0, { dt: 1 / 60 }), px: 10, py: 7, pz: 30, heading: 1.2, vx: 0, vz: 0, speed: 0, tangentX: Math.sin(1.2), tangentZ: Math.cos(1.2) };
  updateMotion(m, T, same);
  const b = snap(m);
  updateMotion(m, T, same);
  ok(snap(m) === b, 'settled pose repeats with zero deltas');
  const fresh = createMotionState();
  ok(fresh.ready === false, 'fresh state not ready');
  updateMotion(m, T, same);
  updateMotion(fresh, T, same);
  ok(fresh.ready === true, 'first update auto-snaps');
}

// 10. Zero-step hold: dt <= 0 leaves state bitwise identical.
{
  const m = createMotionState();
  let t = 0;
  for (let i = 0; i < 30; i++) { t += 1 / 60; updateMotion(m, T, straightInput(t, 60, { dt: 1 / 60 })); }
  const a = snap(m);
  updateMotion(m, T, straightInput(t, 60, { dt: 0 }));
  updateMotion(m, T, straightInput(t, 60, { dt: -0.01 }));
  ok(snap(m) === a, 'zero/negative dt holds state exactly');
}

// 11. Determinism: identical scripts give identical traces.
{
  const run = () => {
    const m = createMotionState();
    let t = 0;
    const trace: string[] = [];
    for (let i = 0; i < 240; i++) {
      t += 1 / 120;
      const h = 0.4 * Math.sin(t * 3);
      updateMotion(m, T, straightInput(t, 70, { dt: 1 / 120, heading: h, drifting: Math.abs(h) > 0.2 }));
      trace.push(snap(m));
    }
    return trace.join('|');
  };
  ok(run() === run(), 'update deterministic across runs');
}

// 12. Non-finite input never corrupts state.
{
  const m = createMotionState();
  let t = 0;
  for (let i = 0; i < 30; i++) { t += 1 / 60; updateMotion(m, T, straightInput(t, 60, { dt: 1 / 60 })); }
  const a = snap(m);
  updateMotion(m, T, straightInput(t, 60, { dt: NaN }));
  updateMotion(m, T, { ...straightInput(t, 60, { dt: 1 / 60 }), px: NaN });
  updateMotion(m, T, { ...straightInput(t, 60, { dt: 1 / 60 }), heading: Infinity });
  const b = snap(m);
  ok(a === b, 'non-finite input holds state');
  for (const v of b.split(',').map(Number)) if (!isFinite(v)) { ok(false, 'no NaN leaks'); break; }
  ok(true, 'state stays finite');
}

// 13. FOV: smooth drift kick, converges to speed + drift target.
{
  const m = createMotionState();
  const dt = 1 / 60;
  let t = 0;
  let maxStep = 0;
  for (let i = 0; i < 120; i++) { t += dt; updateMotion(m, T, straightInput(t, 80, { dt, drifting: true })); }
  for (let i = 0; i < 240; i++) {
    const prev = m.fov;
    t += dt;
    updateMotion(m, T, straightInput(t, 80, { dt, drifting: i > 60 ? false : true }));
    maxStep = Math.max(maxStep, Math.abs(m.fov - prev));
  }
  ok(Math.abs(m.fov - (62 + 14)) < 0.5, 'fov settles to speed target after drift', `fov=${m.fov.toFixed(2)}`);
  ok(maxStep < 0.6, 'no fov step on drift toggle', `maxStep=${maxStep.toFixed(3)}`);
  ok(Math.abs(fovTarget(T, 80, 1) - 81) < 1e-9 && Math.abs(fovTarget(T, 0, 0) - 62) < 1e-9, 'fov target endpoints');
}

// 14. Low-speed tangent stabilization: camera ignores noisy body yaw when crawling.
{
  const m = createMotionState();
  const dt = 1 / 60;
  let t = 0;
  for (let i = 0; i < 120; i++) {
    t += dt;
    updateMotion(m, T, straightInput(t, 2, { dt, heading: 1.0, vx: 0, vz: 2, speed: 2 }));
  }
  ok(Math.abs(wrapPi(m.camH - 0.25)) < 0.05, 'crawl authority ramps with speed', `camH=${m.camH.toFixed(3)}`);
}
{
  const m = createMotionState();
  const dt = 1 / 60;
  let t = 0;
  for (let i = 0; i < 120; i++) {
    t += dt;
    updateMotion(m, T, straightInput(t, 0.3, { dt, heading: 1.0, vx: 0, vz: 0.3, speed: 0.3 }));
  }
  ok(Math.abs(wrapPi(m.camH)) < 0.1, 'near-stop locks tangent', `camH=${m.camH.toFixed(3)}`);
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
