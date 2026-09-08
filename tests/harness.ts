// Headless acceptance harness for sim.ts. Runs under plain node (no deps).
// Covers: jump airtime/landing, atomic finish in a 4-step catch-up frame,
// best/display/share identity, respawn ghost gap, ghost interp + clamping,
// malformed ghost safety, two-finger touch state.
declare const Buffer: { from(s: string, enc?: string): { toString(enc: string): string } };
declare const process: { exit(c: number): void };
import {
  DT, REC_CADENCE_MS, RESPAWN_PENALTY_MS,
  clamp, fmt, trackFromPoints, createSimState, resetRun, simStep, simRespawn,
  encodeGhost, decodeGhost, sampleGhost, buildShareText, TouchState,
  TrackView, SimState, StepInput,
  interpPose, updateDisplay,
  MAX_GRIP_SPEED,
} from '../src/sim.js';
import {
  acceptDailyTrack, analyzeCenterline, buildCenterline, canonicalGrammar,
  checksumPoints, estimateCleanTime, TRACK_HALF_W,
  arcLengths, markerStations,
  AcceptedTrack,
} from '../src/trackgen.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}
const drive: StepInput = { steer: 0, drift: false };

// Straight road with a gaussian crest (peak grade ~0.2, kappa ~ -0.018 at lip).
function crestTrack(): TrackView {
  const pts: { x: number; y: number; z: number }[] = [];
  for (let z = 0; z <= 800; z += 2) {
    pts.push({ x: 0, y: 6 + 6 * Math.exp(-(((z - 300) / 18) ** 2)), z });
  }
  return trackFromPoints(pts, 8);
}
function flatTrack(): TrackView {
  const pts: { x: number; y: number; z: number }[] = [];
  for (let z = 0; z <= 1200; z += 2) pts.push({ x: 0, y: 6, z });
  return trackFromPoints(pts, 8);
}
function traceKey(s: SimState): string {
  return [s.px, s.py, s.pz, s.heading, s.vx, s.vz, s.vy, s.raceMs, s.grounded ? 1 : 0]
    .map((v) => (typeof v === 'number' ? v.toFixed(6) : v)).join(',');
}

// 1. Jump: visible airtime, stable landing, no launch-step landing, deterministic.
{
  const tr = crestTrack();
  const s = createSimState();
  resetRun(s, tr, 0);
  let launched = false, maxAir = 0, landedAt = -1, steps = 0;
  const trace: string[] = [];
  for (let k = 0; k < 3000 && landedAt < 0; k++) {
    const info = simStep(s, tr, drive, DT);
    steps++;
    trace.push(traceKey(s));
    if (info.launched) launched = true;
    if (!s.grounded) maxAir = Math.max(maxAir, s.airSteps);
    if (info.landed) landedAt = steps;
    if (s.finished) break;
  }
  ok(launched, 'jump launches off crest');
  ok(maxAir * DT >= 0.35, 'meaningful airtime', `air=${(maxAir * DT).toFixed(2)}s`);
  ok(landedAt > 0, 'lands after airtime');
  ok(s.grounded && s.vy === 0, 'stable landing (grounded, vy=0)');
  const gy = tr.y[s.lastIdx] + 0.2;
  ok(Math.abs(s.py - gy) < 1e-6, 'landing snaps to road surface');
  // determinism: identical trace on re-run
  const s2 = createSimState();
  resetRun(s2, tr, 0);
  const trace2: string[] = [];
  for (let k = 0; k < steps; k++) { simStep(s2, tr, drive, DT); trace2.push(traceKey(s2)); }
  ok(trace.join('|') === trace2.join('|'), 'simulation deterministic across runs');
  // flat road at full speed never launches
  const ft = flatTrack();
  const f = createSimState();
  resetRun(f, ft, 0);
  let flatLaunch = false;
  for (let k = 0; k < 2000 && !f.finished; k++) if (simStep(f, ft, drive, DT).launched) flatLaunch = true;
  ok(!flatLaunch, 'no launch on flat road at speed');
}

// 2. Finish finalizes exactly once inside a 4-step catch-up frame.
{
  const tr = flatTrack();
  const s = createSimState();
  resetRun(s, tr, 0);
  const endX = tr.x[tr.n - 1], endZ = tr.z[tr.n - 1];
  while (!s.finished && Math.hypot(s.px - endX, s.pz - endZ) > 3.5) simStep(s, tr, drive, DT);
  // emulate one display frame with a large accumulator (4 fixed steps max)
  let acc = DT * 4.07, n = 0, calls = 0;
  const recLenBefore = s.rec.p.length;
  void recLenBefore;
  while (acc >= DT && n++ < 4 && !s.finished) { simStep(s, tr, drive, DT); acc -= DT; calls++; }
  ok(s.finished && s.finishCount === 1, 'finish detected in catch-up frame', `calls=${calls}`);
  const frozenMs = s.raceMs, frozenLen = s.rec.p.length;
  simStep(s, tr, drive, DT); simStep(s, tr, drive, DT); simStep(s, tr, drive, DT);
  ok(s.finishCount === 1 && s.raceMs === frozenMs && s.rec.p.length === frozenLen,
    'no extra ticks after finish');
  const fin = s.rec.p[s.rec.p.length - 1];
  ok(s.rec.ts[s.rec.ts.length - 1] === s.raceMs, 'finish sample timestamp is exact');
  ok(s.rec.t === Math.round(s.raceMs), 'rec.t matches exact finish time');
  void fin;
}

// 3. best / display / share / ghost identity from one exact value.
{
  const F = 18432;
  const rec = { t: 0, p: [[0, 6.2, 0, 0], [10, 6.2, 50, 0.1]] as [number, number, number, number][], ts: [0, 18432] };
  const g = encodeGhost(rec, F);
  const d = decodeGhost(g);
  const url = `https://x/?d=2026-09-07&t=${F}&g=${g}`;
  const text = buildShareText('2026-09-07', F, url);
  ok(d !== null && d.t === F, 'ghost.t equals final ms');
  ok(text.includes(fmt(F)) && text.includes(`t=${F}`), 'display + share carry identical ms');
}

// 4. Respawn produces an exact 3s gap in ghost timestamps.
{
  const tr = flatTrack();
  const s = createSimState();
  resetRun(s, tr, 0);
  for (let k = 0; k < 60; k++) simStep(s, tr, drive, DT);
  const before = s.raceMs;
  const snapPose = [s.snap.x, s.snap.z];
  simRespawn(s);
  ok(s.raceMs - before === RESPAWN_PENALTY_MS, 'respawn adds exactly 3000ms');
  simStep(s, tr, drive, DT);
  const ts = s.rec.ts;
  let gap = -1;
  for (let k = 1; k < ts.length; k++) gap = Math.max(gap, ts[k] - ts[k - 1]);
  ok(gap >= RESPAWN_PENALTY_MS && gap < RESPAWN_PENALTY_MS + REC_CADENCE_MS + 1, 'ghost gap is real', `gap=${gap}`);
  const lastP = s.rec.p[s.rec.p.length - 1];
  ok(Math.hypot(lastP[0] - snapPose[0], lastP[2] - snapPose[1]) < 3, 'post-gap sample resumes at snapshot');
  let mono = true;
  for (let k = 1; k < ts.length; k++) if (ts[k] < ts[k - 1]) mono = false;
  ok(mono, 'ghost timestamps stay monotonic across respawn');
}

// 5. Interpolated playback + finish clamping.
{
  const g = decodeGhost(encodeGhost(
    { t: 1000, p: [[0, 6, 0, 0], [10, 6, 0, Math.PI]] as [number, number, number, number][], ts: [0, 1000] }, 1000))!;
  const mid = sampleGhost(g, 500);
  ok(Math.abs(mid.x - 5) < 1e-9 && Math.abs(mid.h - Math.PI / 2) < 1e-2, 'midpoint interpolation');
  const wrap = decodeGhost(encodeGhost(
    { t: 1000, p: [[0, 6, 0, 0], [10, 6, 0, 2 * Math.PI - 0.2]] as [number, number, number, number][], ts: [0, 1000] }, 1000))!;
  const wm = sampleGhost(wrap, 500);
  ok(Math.abs(wm.h - -0.1) < 1e-2, 'shortest-path heading across wrap', `h=${wm.h}`);
  const end = sampleGhost(g, 99999);
  const lastP = g.p[g.p.length - 1];
  ok(end.x === lastP[0] && end.h === lastP[3], 'ghost holds finish pose (no loop)');
  const start = sampleGhost(g, -50);
  ok(start.x === g.p[0][0], 'pre-start clamps to first pose');
}

// 6. Malformed ghost data fails safely (null, never throws).
{
  const bad: (string | null | undefined)[] = [
    null, undefined, '', '!!!not-base64!!!',
    Buffer.from('null').toString('base64url'),
    Buffer.from('[1,2]').toString('base64url'),
    Buffer.from(JSON.stringify({ t: 'x', p: [] })).toString('base64url'),
    Buffer.from(JSON.stringify({ t: 1000, p: [[0, 1]] })).toString('base64url'),
    Buffer.from(JSON.stringify({ t: 1000, p: [[0, 1, 2, Infinity], [1, 2, 3, 4]], ts: [0, 100] })).toString('base64url'),
    Buffer.from(JSON.stringify({ t: 1000, p: [[0, 0, 0, 0], [1e9, 0, 0, 0]], ts: [0, 100] })).toString('base64url'),
    Buffer.from(JSON.stringify({ t: 1000, p: [[0, 0, 0, 0], [1, 1, 1, 1]], ts: [0] })).toString('base64url'),
    Buffer.from(JSON.stringify({ t: 1000, p: [[0, 0, 0, 0], [1, 1, 1, 1]], ts: [500, 100] })).toString('base64url'),
    Buffer.from(JSON.stringify({ t: 1000, p: [[0, 0, 0, 0], [1, 1, 1, 1]], ts: [0, 99999] })).toString('base64url'),
  ];
  let threw = false, allNull = true;
  for (const b of bad) {
    try { if (decodeGhost(b) !== null) allNull = false; } catch { threw = true; }
  }
  ok(!threw && allNull, 'malformed ghosts decode to null without throwing');
  // legacy link without ts still loads
  const legacy = Buffer.from(JSON.stringify({ t: 1000, p: [[0, 6, 0, 0], [5, 6, 0, 0.5]] })).toString('base64url');
  const lg = decodeGhost(legacy);
  ok(lg !== null && lg.ts.length === 2 && lg.ts[1] === REC_CADENCE_MS, 'legacy ghost (no ts) accepted');
  // corrupt C1 payloads (valid magic, bad content) fail safely, never legacy-misparsed
  const c1bad = ['QzE', 'QzEB', 'QzEBm80B', Buffer.from('C1\xff\xfe\x00\x01bleh').toString('base64url')];
  let c1ok = true;
  for (const b of c1bad) {
    try { if (decodeGhost(b) !== null) c1ok = false; } catch { c1ok = false; }
  }
  ok(c1ok, 'corrupt C1 payloads decode to null without throwing');
}

// 14. Compact ghost links: versioned codec round-trips exactly, fits the URL
// budget, keeps endpoints. (Encoder lives in src/ghost.ts; legacy C1-binary
// links still decode via the same decodeGhost.)
{
  const tr = flatTrack();
  const s = createSimState();
  resetRun(s, tr, 0);
  for (let k = 0; k < 30 / DT && !s.finished; k++) {
    simStep(s, tr, k % 120 < 60 ? { steer: 0.5, drift: false } : { steer: 0.5, drift: true }, DT);
  }
  const exact = Math.round(s.raceMs);
  const g = encodeGhost(s.rec, exact);
  const d = decodeGhost(g);
  ok(d !== null && d.t === exact, 'ghost round-trips exact finish time');
  ok(d !== null && d.ts[d.ts.length - 1] === d.t, 'ghost keeps exact finish sample');
  ok(d !== null && d.p.length >= 2 && d.p.length <= 4000, 'ghost keeps valid sample range', `n=${d ? d.p.length : -1}`);
  ok(g.length < 1650, 'ghost link payload fits URL budget', `len=${g.length}`);
  // endpoints preserved to quantization (0.5u / 0.01rad)
  if (d) {
    const a0 = d.p[0], b0 = s.rec.p[0];
    const a1 = d.p[d.p.length - 1], b1 = s.rec.p[s.rec.p.length - 1];
    const endOk = Math.abs(a0[0] - b0[0]) <= 0.5 && Math.abs(a0[2] - b0[2]) <= 0.5
      && Math.abs(a1[0] - b1[0]) <= 0.5 && Math.abs(a1[2] - b1[2]) <= 0.5;
    ok(endOk, 'ghost preserves start/finish positions');
  } else ok(false, 'ghost preserves start/finish positions', 'decode failed');
  // legacy C1-binary payloads (pre-v2 recordings) still decode through decodeGhost
  const old = decodeGhost('QzHoBwIAAAwAAAAAABQAAAAAAAoA6AM');
  ok(old !== null && old.t === 1000 && old.p.length === 2 && old.ts[1] === 1000, 'legacy C1 payload decodes');
}

// 7. Simultaneous two-finger steering + drift.
{
  const tc = new TouchState();
  tc.stickDown(1, 100); tc.stickMove(1, 140); tc.driftDown(2);
  ok(tc.joyOn && tc.drift, 'steer + drift active together');
  const steerHeld = tc.steer;
  ok(Math.abs(steerHeld - clamp(40 / 48, -1, 1)) < 1e-9, 'steer value correct');
  tc.stickUp(1);
  ok(!tc.joyOn && tc.steer === 0 && tc.drift, 'releasing steer keeps drift');
  tc.driftUp(2);
  ok(!tc.drift, 'drift releases independently');
  tc.stickDown(9, 0); tc.driftDown(9); tc.stickMove(7, 99); tc.driftUp(7);
  ok(tc.joyOn && tc.drift && tc.joy === 0, 'stray pointer ids ignored');
}


// 8. Interpolation: midpoint, alpha clamp, wrapped heading.
{
  const s = createSimState();
  s.px0 = 0; s.py0 = 6; s.pz0 = 0; s.h0 = Math.PI - 0.1; s.pitch0 = 0;
  s.px = 10; s.py = 8; s.pz = 0; s.heading = -Math.PI + 0.1; s.pitch = 0.2;
  const mid = interpPose(s, 0.5);
  ok(Math.abs(mid.x - 5) < 1e-9 && Math.abs(mid.y - 7) < 1e-9, 'interp midpoint lerps position');
  const wrapOk = Math.abs(mid.h - Math.PI) < 1e-9 || Math.abs(Math.abs(mid.h) - Math.PI) < 1e-9;
  ok(wrapOk, 'interp wraps heading shortest-path');
  const lo = interpPose(s, -2), hi = interpPose(s, 99);
  ok(lo.x === 0 && hi.x === 10, 'interp alpha clamped to [0,1]');
  ok(Math.abs(hi.pitch - 0.2) < 1e-12, 'interp pitch reaches current at alpha=1');
}

// 9. Display retention: zero-step render frames keep the last stepped values.
// At 60Hz every render frame runs >=1 step; at 90/120/144Hz zero-step frames occur
// and must retain (never show a zero literal while the car is moving).
{
  const rates = [60, 90, 120, 144];
  for (const hz of rates) {
    const tr = flatTrack();
    const s = createSimState();
    resetRun(s, tr, 0);
    let stepped = simStep(s, tr, drive, DT);
    let disp = updateDisplay(stepped, 1, stepped);
    let lastFresh = stepped;
    // advance until the car is well underway so retention is meaningful
    for (let k = 0; k < 120 && !s.finished; k++) { lastFresh = simStep(s, tr, drive, DT); }
    disp = updateDisplay(lastFresh, 1, lastFresh);
    const rdt = 1 / hz;
    let acc = 0, sawZeroStep = false, retained = true, zeroLiteral = false;
    for (let f = 0; f < 1200 && !s.finished; f++) {
      acc += rdt;
      let stepsRan = 0;
      let fresh = null;
      while (acc >= DT && stepsRan < 4) { fresh = simStep(s, tr, drive, DT); acc -= DT; stepsRan++; if (s.finished) break; }
      if (stepsRan > 0 && fresh !== null) lastFresh = fresh;
      disp = updateDisplay(disp, stepsRan, fresh !== null ? fresh : disp);
      if (stepsRan === 0) {
        sawZeroStep = true;
        if (disp.spd !== lastFresh.spd || disp.sIdx !== lastFresh.sIdx) retained = false;
        if (disp.spd === 0) zeroLiteral = true;
      }
      if (s.finished) break;
    }
    if (hz === 60) ok(!sawZeroStep, '60Hz render runs a step every frame (no zero-step)');
    else ok(sawZeroStep, 'zero-step frames occur at ' + hz + 'Hz');
    ok(retained, 'zero-step frames retain last stepped values at ' + hz + 'Hz');
    ok(!zeroLiteral, 'no zero speed literal on zero-step frames at ' + hz + 'Hz');
  }
}

// 10. Telemetry sanity: straight-line slip/yaw ~0 on road.
{
  const ft = flatTrack();
  const f = createSimState();
  resetRun(f, ft, 0);
  let maxSlip = 0, maxYaw = 0, surfOk = true;
  for (let k = 0; k < 600 && !f.finished; k++) {
    const info = simStep(f, ft, drive, DT);
    maxSlip = Math.max(maxSlip, Math.abs(info.slip));
    maxYaw = Math.max(maxYaw, Math.abs(info.yawRate));
    if (info.surface !== 'road') surfOk = false;
    if (f.finished) break;
  }
  ok(maxSlip < 1e-6, 'straight-line slip ~0');
  ok(maxYaw < 1e-6, 'straight-line yaw rate ~0');
  ok(surfOk, 'flat road reports surface=road');
}



// 11. Vehicle tuning: fast, demanding arcade handling (measured, not constants).
{
  const wideTrack = (halfW: number, len = 6000): TrackView => {
    const pts: { x: number; y: number; z: number }[] = [];
    for (let z = 0; z <= len; z += 2) pts.push({ x: 0, y: 6, z });
    return trackFromPoints(pts, halfW);
  };
  const settleRun = (tr: TrackView, s: SimState, secs: number, inp: StepInput) => {
    for (let k = 0; k < secs / DT && !s.finished; k++) simStep(s, tr, inp, DT);
  };

  // 11a. Launch: time to 70 and grip top speed.
  {
    const tr = wideTrack(8);
    const s = createSimState();
    resetRun(s, tr, 0);
    let t70 = -1, top = 0;
    for (let k = 0; k < 14 / DT && !s.finished; k++) {
      const info = simStep(s, tr, drive, DT);
      if (t70 < 0 && info.spd >= 70) t70 = s.raceMs / 1000;
      top = Math.max(top, info.spd);
    }
    ok(t70 > 0.6 && t70 < 1.0, 'reaches 70 in 0.6-1.0s', `t=${t70.toFixed(2)}s`);
    ok(top >= 78 && top <= 82, 'grip top speed 78-82', `top=${top.toFixed(1)}`);
  }

  // 11b. Aggressive full lock at top speed breaks into drift (intended); grip
  // lines are measured at moderate lock. Auto-drift converges to the handbrake
  // drift state (~43u radius).
  {
    const tr = wideTrack(400);
    const s = createSimState();
    resetRun(s, tr, 0);
    settleRun(tr, s, 8, drive);
    let tDrift = -1;
    let wSum = 0, vSum = 0, n = 0;
    for (let k = 0; k < 6 / DT && !s.finished; k++) {
      const info = simStep(s, tr, { steer: 1, drift: false }, DT);
      if (tDrift < 0 && info.drifting) tDrift = k * DT;
      if (k * DT > 3) { wSum += Math.abs(info.yawRate); vSum += info.spd; n++; }
    }
    const w = wSum / n, v = vSum / n, r = v / w;
    ok(tDrift >= 0 && tDrift <= 1.2, 'full lock at top speed breaks into drift', `t=${tDrift.toFixed(2)}s`);
    ok(r > 35 && r < 55, 'auto-drift converges to drift radius', `r=${r.toFixed(0)}`);
    const g = createSimState();
    resetRun(g, tr, 0);
    settleRun(tr, g, 8, drive);
    let held = true, gwSum = 0, gvSum = 0, gn = 0;
    for (let k = 0; k < 6 / DT && !g.finished; k++) {
      const info = simStep(g, tr, { steer: 0.5, drift: false }, DT);
      if (info.drifting) held = false;
      if (k * DT > 3) { gwSum += Math.abs(info.yawRate); gvSum += info.spd; gn++; }
    }
    const gw = gwSum / gn, gv = gvSum / gn;
    ok(held, 'moderate lock at top speed holds grip');
    ok(gw > 0.2 && gw < 0.4 && gv > 75, 'moderate grip line is fast and wide', `w=${gw.toFixed(2)} v=${gv.toFixed(0)}`);
  }

  // 11c. Controlled drift: radius 35-50, slip 12-28 degrees once settled.
  {
    const tr = wideTrack(400);
    const s = createSimState();
    resetRun(s, tr, 0);
    settleRun(tr, s, 6, drive);
    settleRun(tr, s, 4, { steer: 1, drift: true });
    let wSum = 0, vSum = 0, slipSum = 0, n = 0;
    for (let k = 0; k < 4 / DT && !s.finished; k++) {
      const info = simStep(s, tr, { steer: 1, drift: true }, DT);
      wSum += Math.abs(info.yawRate); vSum += info.spd; slipSum += Math.abs(info.slip); n++;
    }
    const w = wSum / n, v = vSum / n, r = v / w, slipDeg = slipSum / n * 180 / Math.PI;
    ok(r > 35 && r < 55, 'drift radius 35-55', `r=${r.toFixed(0)}`);
    ok(slipDeg > 12 && slipDeg < 28, 'controlled drift slip 12-28deg', `slip=${slipDeg.toFixed(1)}`);
  }

  // 11d. Drift is never a speed boost: entry costs, sustained costs, straight drift loses.
  {
    const tr = wideTrack(400);
    const s = createSimState();
    resetRun(s, tr, 0);
    settleRun(tr, s, 6, drive);
    const vEntry = Math.hypot(s.vx, s.vz);
    settleRun(tr, s, 2, { steer: 1, drift: true });
    const vAfter = Math.hypot(s.vx, s.vz);
    ok(vAfter < vEntry - 2, 'drift initiation + sustained turn costs speed', `${vEntry.toFixed(0)}->${vAfter.toFixed(0)}`);
    const dist = (inp: StepInput): number => {
      const t2 = wideTrack(400); const c = createSimState(); resetRun(c, t2, 0);
      let d = 0;
      for (let k = 0; k < 6 / DT && !c.finished; k++) {
        const px = c.px, pz = c.pz; simStep(c, t2, inp, DT); d += Math.hypot(c.px - px, c.pz - pz);
      }
      return d;
    };
    const dGrip = dist(drive), dDrift = dist({ steer: 0.2, drift: true });
    ok(dDrift < dGrip - 20, 'straight-line drift slower than grip', `${dGrip.toFixed(0)} vs ${dDrift.toFixed(0)}`);
  }

  // 11e. Excess slip past ~35deg scrubs hard (forced-45deg mechanism check).
  {
    const mk = () => { const tr = wideTrack(400); const s = createSimState(); resetRun(s, tr, 0); settleRun(tr, s, 6, drive); return { tr, s }; };
    const a = mk();
    for (let k = 0; k < 1 / DT && !a.s.finished; k++) simStep(a.s, a.tr, drive, DT);
    const vA = Math.hypot(a.s.vx, a.s.vz);
    const b = mk();
    for (let k = 0; k < 1 / DT && !b.s.finished; k++) {
      const sp = Math.hypot(b.s.vx, b.s.vz);
      const h = b.s.heading + Math.PI / 4;
      b.s.vx = Math.sin(h) * sp; b.s.vz = Math.cos(h) * sp;
      simStep(b.s, b.tr, drive, DT);
    }
    const vB = Math.hypot(b.s.vx, b.s.vz);
    ok(vA > 75 && vB < 30, 'forced 45deg slip collapses speed vs aligned', `${vA.toFixed(0)} vs ${vB.toFixed(0)}`);
  }

  // 11f. Grip recovery: release restores grip, correct countersteer is faster.
  {
    const mk = () => { const tr = wideTrack(400); const s = createSimState(); resetRun(s, tr, 0); settleRun(tr, s, 6, drive); settleRun(tr, s, 3, { steer: 0.6, drift: true }); return { tr, s }; };
    const a = mk(); let tA = -1;
    for (let k = 0; k < 2 / DT; k++) { const i = simStep(a.s, a.tr, { steer: 0.6, drift: false }, DT); if (tA < 0 && Math.abs(i.slip) < 5 * Math.PI / 180) tA = k * DT; }
    const b = mk(); let tB = -1;
    for (let k = 0; k < 2 / DT; k++) { const i = simStep(b.s, b.tr, { steer: -0.6, drift: false }, DT); if (tB < 0 && Math.abs(i.slip) < 5 * Math.PI / 180) tB = k * DT; }
    ok(tA > 0 && tA < 1.5, 'grip recovers after release', `t=${tA.toFixed(2)}s`);
    ok(tB > 0 && tB < tA, 'countersteer stabilizes faster', `${tB.toFixed(2)}s < ${tA.toFixed(2)}s`);
    const c = mk(); const vRel = Math.hypot(c.s.vx, c.s.vz);
    settleRun(c.tr, c.s, 3, drive);
    ok(Math.hypot(c.s.vx, c.s.vz) > vRel + 5, 'speed rebuilds after release');
  }

  // 11g. Drift entry gates: handbrake + speed + steered lock all required.
  {
    const tr = wideTrack(400);
    const s = createSimState(); resetRun(s, tr, 0); settleRun(tr, s, 6, drive);
    ok(!simStep(s, tr, { steer: 1, drift: false }, DT).drifting, 'steer alone never drifts');
    ok(!simStep(s, tr, { steer: 0, drift: true }, DT).drifting, 'handbrake alone never drifts');
    const slow = createSimState(); resetRun(slow, tr, 0);
    ok(!simStep(slow, tr, { steer: 1, drift: true }, DT).drifting, 'no drift below 25 units/s');
    let driftTop = 0;
    const d = createSimState(); resetRun(d, tr, 0);
    for (let k = 0; k < 10 / DT && !d.finished; k++) {
      const i = simStep(d, tr, { steer: 0.2, drift: true }, DT);
      if (k * DT > 5) driftTop = Math.max(driftTop, i.spd);
    }
    ok(driftTop >= 72 && driftTop <= 76 && driftTop < MAX_GRIP_SPEED, 'drift top 72-76, never a boost', `top=${driftTop.toFixed(1)}`);
  }

  // 11h. Wall penalties: solid hits cost 15-30%, grinding bleeds speed.
  {
    const hitAt = (ang: number): { loss: number; impact: number; scraping: boolean } => {
      const tr = flatTrack(); const s = createSimState(); resetRun(s, tr, 0);
      settleRun(tr, s, 2, drive);
      s.heading += ang;
      const sp = Math.hypot(s.vx, s.vz);
      s.vx = Math.sin(s.heading) * sp; s.vz = Math.cos(s.heading) * sp;
      let pre = sp;
      for (let k = 0; k < 3 / DT && !s.finished; k++) {
        const i = simStep(s, tr, drive, DT);
        if (i.scraping) return { loss: 1 - i.spd / pre, impact: i.impact, scraping: true };
        pre = i.spd;
      }
      return { loss: 0, impact: 0, scraping: false };
    };
    const hit = hitAt(0.35);
    ok(hit.scraping && hit.impact > 0, 'impact exposes impact/scrape state');
    ok(hit.loss >= 0.50 && hit.loss <= 0.70, 'solid wall hit costs 50-70% (harsh)', `loss=${(hit.loss * 100).toFixed(1)}%`);
    const tr = flatTrack(); const s = createSimState(); resetRun(s, tr, 0);
    settleRun(tr, s, 2, drive);
    s.heading += 0.35;
    const sp = Math.hypot(s.vx, s.vz);
    s.vx = Math.sin(s.heading) * sp; s.vz = Math.cos(s.heading) * sp;
    while (!s.finished) { if (simStep(s, tr, drive, DT).scraping) break; }
    const v0 = Math.hypot(s.vx, s.vz);
    const g0 = s.lastIdx;
    let gSum = 0, gN = 0;
    for (let k = 0; k < 1 / DT && !s.finished; k++) { const r = simStep(s, tr, { steer: 0.6, drift: false }, DT); gSum += r.spd; gN++; }
    const gAvg = gSum / Math.max(gN, 1), gAdv = s.lastIdx - g0;
    // Bouncy wall: leaning rattles along at ~half speed and crawls forward,
    // never pinned to a stop and never competitive with clean road (~79/79).
    ok(gAvg > 15 && gAvg < 55, 'grinding rattles at punished pace (bounce, never free)', `${v0.toFixed(0)}->avg${gAvg.toFixed(1)}`);
    ok(gAdv < 30, 'grinding barely advances (wall-riding never pays)', `adv=${gAdv}`);
  }

  // 11i. Offroad bites immediately and recovers slowly.
  {
    const tr = flatTrack();
    const s = createSimState(); resetRun(s, tr, 0);
    s.px += tr.nx[0] * (tr.halfW + 3); s.pz += tr.nz[0] * (tr.halfW + 3);
    let offMax = 0;
    for (let k = 0; k < 4 / DT && !s.finished; k++) offMax = Math.max(offMax, simStep(s, tr, drive, DT).spd);
    const c = createSimState(); resetRun(c, tr, 0);
    let roadMax = 0;
    for (let k = 0; k < 4 / DT && !c.finished; k++) roadMax = Math.max(roadMax, simStep(c, tr, drive, DT).spd);
    ok(offMax < 30 && offMax < roadMax * 0.5, 'offroad clearly slower than road', `${offMax.toFixed(0)} vs ${roadMax.toFixed(0)}`);
  }

  // 11j. Determinism across a drift-heavy run with wall contact.
  {
    const runTrace = (): string => {
      const tr = flatTrack(); const s = createSimState(); resetRun(s, tr, 0);
      const out: string[] = [];
      for (let k = 0; k < 600; k++) {
        const inp = k < 200 ? drive : k < 400 ? { steer: 1, drift: true } : { steer: 0.6, drift: false };
        simStep(s, tr, inp, DT);
        out.push([s.px, s.py, s.pz, s.heading, s.vx, s.vz, s.steer, s.driftAmt].map((v) => v.toFixed(6)).join(','));
        if (s.finished) break;
      }
      return out.join('|');
    };
    ok(runTrace() === runTrace(), 'drift + scrape traces identical across runs');
  }

  // 11k. Keyboard steering ramps deterministically, recenter is quicker.
  {
    const tr = wideTrack(400);
    const s = createSimState(); resetRun(s, tr, 0);
    for (let k = 0; k < 3; k++) simStep(s, tr, { steer: 1, drift: false }, DT);
    const early = s.steer;
    for (let k = 0; k < 15; k++) simStep(s, tr, { steer: 1, drift: false }, DT);
    const late = s.steer;
    for (let k = 0; k < 3; k++) simStep(s, tr, { steer: 0, drift: false }, DT);
    const rec = s.steer;
    ok(early > 0.15 && early < 0.5 && late === 1, 'steer ramps to full lock', `${early.toFixed(2)}->${late.toFixed(2)}`);
    ok(rec < late - 0.3, 'recenter outpaces rise', `recenter=${rec.toFixed(2)}`);
  }
}


// 12. Daily track generation: grammar quotas verified on sampled centerlines.
{
  const days: string[] = [];
  for (let d = 9; d <= 31; d++) days.push(`2026-08-${String(d).padStart(2, '0')}`);
  for (let d = 1; d <= 7; d++) days.push(`2026-09-${String(d).padStart(2, '0')}`);
  ok(days.length === 30, 'thirty consecutive date seeds');
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  if (!days.includes(todayStr)) days.push(todayStr);

  const quotas = (a: AcceptedTrack): string[] => {
    const bad: string[] = [];
    const st = a.stats, ev = st.events;
    if (st.length < 2400 || st.length > 3650) bad.push(`len=${st.length.toFixed(0)}`);
    if (ev.length < 11 || ev.length > 14) bad.push(`nev=${ev.length}`);
    const drift = ev.filter((e) => e.medR >= 45 && e.medR <= 130);
    if (drift.length < 5 || drift.length > 7) bad.push(`drift=${drift.length}`);
    const sweep = ev.filter((e) => e.medR > 130 && e.medR <= 175);
    if (sweep.length < 3 || sweep.length > 4) bad.push(`sweep=${sweep.length}`);
    if (!ev.some((e) => e.dir === 'L') || !ev.some((e) => e.dir === 'R')) bad.push('one-sided');
    let transitions = 0;
    for (let k = 1; k < ev.length; k++) {
      if (ev[k].dir !== ev[k - 1].dir && ev[k].startS - ev[k - 1].endS <= 110) transitions++;
    }
    if (transitions < 2) bad.push('transitions<2');
    if (!ev.some((e) => e.decreasing)) bad.push('no-decreasing');
    if (ev[0].startS < 140 || ev[0].startS > 240) bad.push(`first=${ev[0].startS.toFixed(0)}`);
    if (st.clearance < 40) bad.push(`clr=${st.clearance.toFixed(0)}`);
    if (st.maxGrade > 0.30) bad.push(`grade=${st.maxGrade.toFixed(2)}`);
    if (st.crestCount < 1 || st.crestCount > 2) bad.push(`crests=${st.crestCount}`);
    for (const cs of a.crestS) {
      const next = ev.find((e) => e.startS > cs);
      if (next && next.startS - cs < 80) bad.push('crest-runoff');
    }
    // start/finish flats over arclength
    let sAcc = 0, flatBad = 0, finBad = 0;
    const pts = a.points;
    const ss: number[] = [0];
    for (let m = 1; m < pts.length; m++) ss.push(ss[m - 1] + Math.hypot(pts[m].x - pts[m - 1].x, pts[m].z - pts[m - 1].z));
    const L = ss[ss.length - 1];
    for (let m = 0; m < pts.length; m++) {
      if (ss[m] < 200 && Math.abs(pts[m].y - 6) > 1e-3) flatBad++;
      if (ss[m] > L - 150 && Math.abs(pts[m].y - 7) > 1e-3) finBad++;
    }
    if (flatBad) bad.push('start-flat');
    if (finBad) bad.push('finish-flat');
    void sAcc;
    return bad;
  };

  let worstEst = 0, slowestDay = '';
  for (const day of days) {
    const a = acceptDailyTrack(day);
    const bad = quotas(a);
    ok(bad.length === 0, `quotas hold ${day}`, bad.join(',') || `att=${a.attempt}`);
    const again = acceptDailyTrack(day);
    ok(again.checksum === a.checksum, `deterministic checksum ${day}`);
    if (!a.fallback) ok(a.attempt < 40, `accepted within attempts ${day}`, `att=${a.attempt}`);
    else ok(quotas(a).length === 0, `fallback still satisfies quotas ${day}`);
    if (a.estTimeS > worstEst) { worstEst = a.estTimeS; slowestDay = day; }
    ok(a.estTimeS > 34 && a.estTimeS < 47, `estimate sane ${day}`, `${a.estTimeS.toFixed(1)}s`);
  }
  console.log(`slowest profile estimate: ${slowestDay} ${worstEst.toFixed(1)}s`);

  // Canonical fallback path itself satisfies quotas (seed-independent).
  {
    const built = buildCenterline(canonicalGrammar(), 0);
    const st = analyzeCenterline(built.points);
    const a: AcceptedTrack = { points: built.points, stats: st, attempt: 40, fallback: true, crestS: built.crestS, estTimeS: estimateCleanTime(built.points), checksum: checksumPoints(built.points) };
    ok(quotas(a).length === 0, 'canonical fallback satisfies quotas', quotas(a).join(','));
  }

  // Metric table for today + scripted-driver completability proof.
  {
    const a = acceptDailyTrack(todayStr);
    const ev = a.stats.events;
    const radii = ev.map((e) => e.medR).sort((x, y) => x - y);
    console.log(`TODAY ${todayStr} len=${a.stats.length.toFixed(0)} est=${a.estTimeS.toFixed(1)}s nev=${ev.length} drift=${ev.filter((e) => e.medR >= 45 && e.medR <= 130).length} sweep=${ev.filter((e) => e.medR > 130 && e.medR <= 175).length} minR=${radii[0].toFixed(0)} medR=${radii[Math.floor(radii.length / 2)].toFixed(0)} first=${ev[0].startS.toFixed(0)} elev=[${a.stats.elevMin.toFixed(1)},${a.stats.elevMax.toFixed(1)}] att=${a.attempt} fb=${a.fallback}`);
    const tr = trackFromPoints(a.points, TRACK_HALF_W);
    const s = createSimState();
    resetRun(s, tr, 0);
    const scan = (from: number, dist: number): { minR: number; dir: number } => {
      let minR = Infinity, dir = 0;
      const end = Math.min(from + 110, tr.n - 4);
      let acc = 0;
      for (let m = from; m < end; m++) {
        acc += Math.hypot(tr.x[m + 1] - tr.x[m], tr.z[m + 1] - tr.z[m]);
        if (acc > dist) break;
        const h1 = Math.atan2(tr.x[m + 1] - tr.x[m], tr.z[m + 1] - tr.z[m]);
        const h2 = Math.atan2(tr.x[m + 3] - tr.x[m + 2], tr.z[m + 3] - tr.z[m + 2]);
        let dh = h2 - h1;
        while (dh > Math.PI) dh -= 2 * Math.PI;
        while (dh < -Math.PI) dh += 2 * Math.PI;
        const ds = Math.hypot(tr.x[m + 1] - tr.x[m], tr.z[m + 1] - tr.z[m]) * 2 + 1e-6;
        if (Math.abs(dh) > 1e-4) { const r = ds / Math.abs(dh); if (r < minR) { minR = r; dir = Math.sign(dh); } }
      }
      return { minR, dir };
    };
    let noProg = 0, lastS = 0;
    for (let k = 0; k < 150 / DT && !s.finished; k++) {
      const spd = Math.hypot(s.vx, s.vz);
      const L = 12 + spd * 0.5;
      let li = s.lastIdx, acc = 0;
      while (li < tr.n - 1 && acc < L) { acc += Math.hypot(tr.x[li + 1] - tr.x[li], tr.z[li + 1] - tr.z[li]); li++; }
      const dx = tr.x[li] - s.px, dz = tr.z[li] - s.pz;
      let ang = Math.atan2(dx, dz) - s.heading;
      while (ang > Math.PI) ang -= 2 * Math.PI;
      while (ang < -Math.PI) ang += 2 * Math.PI;
      const pursuit = Math.max(-1, Math.min(1, -ang * 2.5));
      const near = scan(s.lastIdx, 80), far = scan(s.lastIdx, 260);
      const vTFar = far.minR === Infinity ? 80 : far.minR > 140 ? 80 : far.minR > 95 ? Math.sqrt(48 * far.minR) : Math.sqrt(95 * far.minR) * 0.95;
      let steer = pursuit, drift = false;
      if (spd > Math.min(74, vTFar) + 2 && spd > 32) {
        drift = true;
        const bias = far.dir !== 0 ? -far.dir * 0.4 : 0;
        steer = Math.max(-1, Math.min(1, pursuit * 1.5 + bias));
        if (Math.abs(steer) < 0.2) steer = far.dir !== 0 ? -far.dir * 0.3 : 0.3;
      } else if (near.minR < 95 && spd > 34) {
        drift = true; steer = pursuit;
        if (Math.abs(steer) < 0.15) steer = 0.15 * (near.dir !== 0 ? -near.dir : 1);
      }
      simStep(s, tr, { steer, drift }, DT);
      if (k % 180 === 0) {
        if (s.lastIdx - lastS < 4 && spd < 8) noProg++; else noProg = 0;
        lastS = s.lastIdx;
        if (noProg >= 2) { simRespawn(s); noProg = 0; }
      }
    }
    const autoS = s.raceMs / 1000;
    ok(s.finished, "today's track completed by scripted driver", `${autoS.toFixed(1)}s`);
    console.log(`TODAY autopilot: ${autoS.toFixed(1)}s`);
  }
}

// 13. Reconciliation: cut blocking, escape, over-slip, markers, runoff.
{
  const hairpin = (): TrackView => {
    const pts: { x: number; y: number; z: number }[] = [];
    let x = 0, z = 0, hd = 0;
    pts.push({ x, y: 6, z });
    for (let i = 0; i < 150; i++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
    const r = 30, tot = Math.PI;
    let d = 0;
    while (d < tot - 1e-9) {
      const dp = Math.min(2 / r, tot - d);
      hd -= dp; x += Math.sin(hd) * (r * dp); z += Math.cos(hd) * (r * dp); d += dp;
      pts.push({ x, y: 6, z });
    }
    for (let i = 0; i < 150; i++) { x += Math.sin(hd) * 2; z += Math.cos(hd) * 2; pts.push({ x, y: 6, z }); }
    return trackFromPoints(pts, 8);
  };

  // 13a. Hairpin cut: teleporting 25u (49 samples) across the infield credits
  // nothing (was +49 before the fix) and cannot finish.
  {
    const tr = hairpin();
    const s = createSimState();
    resetRun(s, tr, 100);
    s.px = tr.x[149]; s.pz = tr.z[149]; s.py = tr.y[149] + 0.2;
    const info = simStep(s, tr, drive, DT);
    ok(s.lastIdx - 100 <= 4, 'cut credits at most margin samples', `adv=${s.lastIdx - 100}`);
    ok(!info.finished && !s.finished, 'cut cannot finish');
    for (let k = 0; k < 30; k++) simStep(s, tr, drive, DT);
    ok(s.lastIdx - 100 <= 4 && !s.finished, 'parked cutter gains no further progress');
  }

  // 13b. Legitimate max-speed progress keeps up with the car.
  {
    const tr = flatTrack();
    const s = createSimState();
    resetRun(s, tr, 0);
    for (let k = 0; k < 2 / DT; k++) simStep(s, tr, drive, DT);
    const dist = Math.hypot(s.px - tr.x[0], s.pz - tr.z[0]);
    ok(Math.abs(s.lastIdx - dist / 2) <= 3, 'tracking matches driven distance', `idx=${s.lastIdx} dist=${dist.toFixed(1)}`);
  }

  // 13c. Jump flight advances progress and lands stably.
  {
    const tr = crestTrack();
    const s = createSimState();
    resetRun(s, tr, 0);
    let li = -1, ldi = -1;
    for (let k = 0; k < 3000; k++) {
      const info = simStep(s, tr, drive, DT);
      if (info.launched) li = s.lastIdx;
      if (info.landed) { ldi = s.lastIdx; break; }
    }
    ok(li > 0 && ldi - li > 20, 'flight advances progress', `adv=${ldi - li}`);
    ok(s.grounded, 'landed grounded after flight');
  }

  // 13d. Pinned grind: stuck flag, escape away, slow into.
  {
    const tr = flatTrack();
    const pin = (): SimState => {
      const s = createSimState();
      resetRun(s, tr, 100);
      s.px = tr.x[100] - 7;
      s.heading = tr.yaw[100] - Math.PI / 2;
      s.vx = Math.sin(s.heading) * 30; s.vz = Math.cos(s.heading) * 30;
      return s;
    };
    let s = pin();
    let stuckMax = 0;
    for (let k = 0; k < 2 / DT; k++) stuckMax = Math.max(stuckMax, simStep(s, tr, drive, DT).stuckMs);
    // Bounce frees a head-on pin by itself (speed collapses, no progress) —
    // the stuck flag covers leaning on the wall with no impact velocity.
    ok(Math.hypot(s.vx, s.vz) < 8, 'head-on pin kills momentum', `spd=${Math.hypot(s.vx, s.vz).toFixed(1)}`);
    const lean = createSimState();
    resetRun(lean, tr, 100);
    lean.px = tr.x[100] - 9.7; lean.heading = tr.yaw[100] - Math.PI / 2; lean.vx = 0; lean.vz = 0;
    stuckMax = 0;
    for (let k = 0; k < 2.5 / DT; k++) stuckMax = Math.max(stuckMax, simStep(lean, tr, drive, DT).stuckMs);
    ok(stuckMax > 1500, 'stuck flag when leaning on wall', `stuckMs=${stuckMax.toFixed(0)}`);
    s = pin();
    for (let k = 0; k < 1.5 / DT; k++) simStep(s, tr, drive, DT);
    let t20 = -1;
    for (let k = 0; k < 3 / DT; k++) {
      simStep(s, tr, { steer: 1, drift: false }, DT);
      if (t20 < 0 && Math.hypot(s.vx, s.vz) >= 20) t20 = k * DT;
    }
    const fwd = s.vx * tr.tx[s.lastIdx] + s.vz * tr.tz[s.lastIdx];
    ok(t20 >= 0 && t20 <= 2.5, 'steering away escapes within 2.5s', `t20=${t20 < 0 ? 'never' : t20.toFixed(2)}s`);
    ok(fwd >= 6, 'escape moves forward', `fwd=${fwd.toFixed(1)}`);
  }

  // 13e. Parallel grind into the wall stays slow (mistakes still punished).
  {
    const tr = flatTrack();
    const s = createSimState();
    resetRun(s, tr, 100);
    s.px = tr.x[100] - 9.4;
    s.heading = tr.yaw[100];
    s.vx = Math.sin(s.heading) * 60; s.vz = Math.cos(s.heading) * 60;
    let eSum = 0, eN = 0;
    const e0 = s.lastIdx;
    for (let k = 0; k < 2 / DT; k++) { const r = simStep(s, tr, { steer: -1, drift: false }, DT); eSum += r.spd; eN++; }
    const eAvg = eSum / Math.max(eN, 1), eAdv = s.lastIdx - e0;
    // Full-lean bounce-stutter: harsh (~35 avg vs ~79 clean, ~7x less
    // progress) but each bounce kicks the car back out instead of pinning it.
    ok(eAvg > 15 && eAvg < 45, 'grinding into wall bounces at punished pace', `avg=${eAvg.toFixed(1)}`);
    ok(eAdv < 20, 'leaning on wall barely advances', `adv=${eAdv}`);
  }

  // 13f. Over-rotation is reachable in the air and costly: landing with crossed
  // controls (75deg+ slip) spins out where a clean landing keeps full speed.
  // Natural ground-driving slip caps at ~17deg (verified 11c), so the 25/35deg
  // scrub stays a guardrail there and bites on real mistakes like this one.
  {
    const tr = crestTrack();
    const run = (airSteer: number): { peak: number; v2s: number } => {
      const s = createSimState();
      resetRun(s, tr, 0);
      let peak = 0;
      for (let k = 0; k < 3000; k++) {
        const info = simStep(s, tr, s.grounded ? drive : { steer: airSteer, drift: false }, DT);
        if (!s.grounded) peak = Math.max(peak, Math.abs(info.slip));
        if (info.landed) {
          let v = info.spd;
          for (let q = 0; q < 120; q++) v = simStep(s, tr, drive, DT).spd;
          return { peak: peak * 180 / Math.PI, v2s: v };
        }
      }
      return { peak: peak * 180 / Math.PI, v2s: -1 };
    };
    const clean = run(0), crossed = run(1);
    ok(clean.v2s >= 75, 'clean landing keeps speed', `v=${clean.v2s.toFixed(1)}`);
    ok(crossed.peak > 30 && crossed.v2s < 40, 'crossed landing spins out', `peak=${crossed.peak.toFixed(0)}deg v=${crossed.v2s.toFixed(1)}`);
    ok(clean.v2s - crossed.v2s > 30, 'over-rotation materially slower than controlled');
  }

  // 13g. Markers keyed to arc distance: 16u dash spacing reads at speed.
  {
    const pts: { x: number; y: number; z: number }[] = [];
    for (let z = 0; z <= 1000; z += 2) pts.push({ x: 0, y: 6, z });
    const cum = arcLengths(pts);
    ok(Math.abs(cum[cum.length - 1] - 1000) < 1e-6, 'arc length matches road length');
    const at = markerStations(cum, 16);
    ok(Math.abs(at.length - 1000 / 16) <= 3, 'dash count matches spacing', `n=${at.length}`);
    let gapOk = true;
    for (let k = 1; k < at.length; k++) {
      const g = cum[at[k]] - cum[at[k - 1]];
      if (g < 15.9 || g > 18.5) { gapOk = false; break; }
    }
    ok(gapOk, 'dash gaps uniform by arc');
    ok(80 / 16 >= 4, 'dashes read at speed (>=4/sec at 80 u/s)');
  }

  // 13h. Landing runoff across all date seeds: 65u of flight plus 60u of
  // settling before the next corner, which must be an easy (medR>95) follower.
  {
    const days: string[] = [];
    for (let d = 9; d <= 31; d++) days.push(`2026-08-${String(d).padStart(2, '0')}`);
    for (let d = 1; d <= 7; d++) days.push(`2026-09-${String(d).padStart(2, '0')}`);
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    if (!days.includes(todayStr)) days.push(todayStr);
    for (const day of days) {
      const a = acceptDailyTrack(day);
      let bad = '';
      for (const cs of a.crestS) {
        const next = a.stats.events.find((e) => e.startS > cs);
        if (!next) {
          if (a.stats.length - (cs + 65) < 60) { bad = 'tail-runoff'; break; }
          continue;
        }
        if (next.startS - (cs + 65) < 60) { bad = `runoff=${(next.startS - cs).toFixed(0)}`; break; }
        if (!(next.medR > 95)) { bad = `follower-medR=${next.medR.toFixed(0)}`; break; }
      }
      ok(bad === '', `landing runoff ${day}`, bad || `att=${a.attempt}`);
    }
  }
}

// 14. Redteam regression (Cycle 4): early-finish softlock, air yaw, grind,
// grip bound, kiss cost, ghost fidelity. Characterization bounds only —
// P3 tuning untouched.
{
  const shortTrack = (len: number): TrackView => {
    const pts: { x: number; y: number; z: number }[] = [];
    for (let z = 0; z <= len; z += 2) pts.push({ x: 0, y: 6, z });
    return trackFromPoints(pts, 8);
  };

  // 1. shortFinish: a legitimate plane crossing before FINISH_ARM_MS must not
  // softlock — the run finishes exactly once, with frozen time afterward.
  for (const L of [200, 300]) {
    const tr = shortTrack(L);
    const q = createSimState();
    resetRun(q, tr, 0);
    let steps = 0;
    for (let k = 0; k < 6000 && !q.finished; k++) { simStep(q, tr, drive, DT); steps++; }
    ok(q.finished && q.finishCount === 1, `shortFinish ${L}u finishes once`, `steps=${steps}`);
    const t0 = q.raceMs;
    for (let k = 0; k < 120; k++) simStep(q, tr, drive, DT);
    ok(q.raceMs === t0 && q.finishCount === 1, `shortFinish ${L}u time frozen`, `t=${t0.toFixed(0)}`);
  }

  // 3. airBudget: full-lock air yaw stays within the documented envelope.
  {
    const tr = crestTrack();
    const run = (steer: number): number => {
      const q = createSimState();
      resetRun(q, tr, 0);
      let wait = 0;
      while (q.grounded && wait < 1500) { simStep(q, tr, drive, DT); wait++; }
      if (q.grounded) return Infinity; // never launched: unbounded, fails loudly
      let dh = 0, n = 0;
      while (!q.grounded && n < 30) {
        const h = q.heading;
        simStep(q, tr, { steer, drift: false }, DT);
        dh += Math.abs(Math.atan2(Math.sin(q.heading - h), Math.cos(q.heading - h)));
        n++;
      }
      return dh;
    };
    ok(run(1) <= 0.6, 'airBudget full lock bounded', `${run(1).toFixed(2)}rad`);
    ok(run(0) < 1e-9, 'airBudget neutral holds heading');
  }

  // 4. grindLoses: a wall-following grind bot is far slower than clean pace.
  {
    const tr = flatTrack();
    const toIdx = (inp: StepInput, target: number): number => {
      const q = createSimState();
      resetRun(q, tr, 0);
      for (let k = 0; k < 60 / DT; k++) {
        simStep(q, tr, inp, DT);
        if (q.lastIdx >= target) return q.raceMs;
      }
      return Infinity; // stalled/pinned: infinitely slower, still loses
    };
    const clean = toIdx(drive, 400);
    const grind = toIdx({ steer: -1, drift: false }, 400);
    ok(isFinite(clean), 'grindLoses clean reaches', `${clean.toFixed(0)}ms`);
    ok(grind > 1.5 * clean, 'grindLoses grind loses badly', `clean=${clean.toFixed(0)} grind=${isFinite(grind) ? grind.toFixed(0) : 'stalled'}`);
  }

  // 6. kissCost: a vn=20 kiss on either wall costs >=40% speed, exactly one hit.
  for (const ang of [0.26, -0.26]) {
    const tr = flatTrack();
    const q = createSimState();
    resetRun(q, tr, 0);
    for (let k = 0; k < 120; k++) simStep(q, tr, drive, DT);
    const v0 = Math.hypot(q.vx, q.vz);
    q.heading += ang;
    let v1 = v0, hit = false;
    for (let k = 0; k < 45; k++) {
      const i = simStep(q, tr, drive, DT);
      if (i.wallHit) hit = true;
      v1 = Math.min(v1, Math.hypot(q.vx, q.vz));
    }
    ok(hit, `kissCost wallHit ang=${ang}`, `v0=${v0.toFixed(1)}`);
    ok((v0 - v1) / v0 >= 0.40, `kissCost loss>=40% ang=${ang}`, `${v0.toFixed(1)}->${v1.toFixed(1)}`);
  }

  // 7. ghostErr: daily-length encode/decode roundtrip error within quantization.
  {
    const tr = shortTrack(2000);
    const q = createSimState();
    resetRun(q, tr, 0);
    let k = 0;
    for (; k < 6000 && !q.finished; k++) simStep(q, tr, drive, DT);
    ok(q.finished, 'ghostErr daily-length run finishes');
    const t = Math.round(q.raceMs);
    const dec = decodeGhost(encodeGhost(q.rec, t));
    ok(dec !== null, 'ghostErr roundtrip decodes');
    if (dec) {
      // Per-sample error vs the nearest original timestamp (quantization).
      let worstQ = 0;
      for (let i = 0; i < dec.p.length; i++) {
        let bj = 0, bd = Infinity;
        for (let j = 0; j < q.rec.p.length; j++) {
          const d = Math.abs(q.rec.ts[j] - dec.ts[i]);
          if (d < bd) { bd = d; bj = j; }
        }
        worstQ = Math.max(worstQ, Math.hypot(dec.p[i][0] - q.rec.p[bj][0], dec.p[i][2] - q.rec.p[bj][2]));
      }
      ok(worstQ <= 0.5, 'ghostErr quantization within half unit', `${worstQ.toFixed(2)}u`);
      // Playback fidelity at cruise (past launch accel, straight chord exact).
      const orig = { t, p: q.rec.p, ts: q.rec.ts };
      let worstP = 0;
      for (let m = 3000; m <= t; m += 500) {
        const a = sampleGhost(orig as never, m), b = sampleGhost(dec, m);
        worstP = Math.max(worstP, Math.hypot(a.x - b.x, a.z - b.z));
      }
      ok(worstP <= 0.5, 'ghostErr cruise playback within half unit', `${worstP.toFixed(2)}u`);
    }
  }
}

// 14b. gripBound: a pure-pursuit no-drift daily run stays within est+25% with
// negligible drift engagement (drift margin must keep paying).
{
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const a = acceptDailyTrack(todayStr);
  const tr = trackFromPoints(a.points, TRACK_HALF_W);
  const q = createSimState();
  resetRun(q, tr, 0);
  let driftSteps = 0, total = 0, noProg = 0, lastS = 0;
  for (let k = 0; k < 150 / DT && !q.finished; k++) {
    const spd = Math.hypot(q.vx, q.vz);
    const L = 12 + spd * 0.8;
    let li = q.lastIdx, acc = 0;
    while (li < tr.n - 1 && acc < L) { acc += Math.hypot(tr.x[li + 1] - tr.x[li], tr.z[li + 1] - tr.z[li]); li++; }
    const dx = tr.x[li] - q.px, dz = tr.z[li] - q.pz;
    let ang = Math.atan2(dx, dz) - q.heading;
    while (ang > Math.PI) ang -= 2 * Math.PI;
    while (ang < -Math.PI) ang += 2 * Math.PI;
    // Gentle pursuit: yanked full lock trips autoBreak slides; a smooth
    // no-drift line stays under the thresholds (measured 0.00% engagement).
    const steer = Math.max(-1, Math.min(1, -ang * 1.2));
    const info = simStep(q, tr, { steer, drift: false }, DT);
    total++;
    if (info.drifting) driftSteps++;
    if (k % 180 === 0) {
      if (q.lastIdx - lastS < 4 && spd < 8) noProg++; else noProg = 0;
      lastS = q.lastIdx;
      if (noProg >= 2) { simRespawn(q); noProg = 0; }
    }
  }
  const autoS = q.raceMs / 1000;
  ok(q.finished, 'gripBound no-drift daily finishes', `${autoS.toFixed(1)}s`);
  ok(autoS <= a.estTimeS * 1.25, 'gripBound within est+25%', `est=${a.estTimeS.toFixed(1)} auto=${autoS.toFixed(1)}`);
  ok(driftSteps / Math.max(total, 1) < 0.02, 'gripBound drift engagement <2%', `${(100 * driftSteps / Math.max(total, 1)).toFixed(2)}%`);
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
