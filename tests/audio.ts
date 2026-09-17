// Headless tests for src/audio.ts using a mock AudioContext.
// Verifies the audio contract: lazy single graph, persisted mute, visibility
// suspend/resume, continuous state mapping, and a bounded no-duplicate voice
// pool across retries.
declare const process: { exit(c: number): void };
import {
  AudioEngine, createAudioEngine, AUDIO_MUTE_KEY, MASTER_GAIN,
} from '../src/audio.js';
import type {
  AudioContextLike, AudioParamLike, AudioNodeLike, GainNodeLike,
  OscillatorNodeLike, BiquadFilterNodeLike, BufferSourceNodeLike, AudioBufferLike,
} from '../src/audio.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

// ---------- minimal mock WebAudio ----------
class FakeParam implements AudioParamLike {
  value = 0;
  calls: { m: string; v: number }[] = [];
  setValueAtTime(v: number) { this.value = v; this.calls.push({ m: 'set', v }); }
  linearRampToValueAtTime(v: number) { this.value = v; this.calls.push({ m: 'lin', v }); }
  setTargetAtTime(v: number) { this.value = v; this.calls.push({ m: 'target', v }); }
  cancelScheduledValues() { this.calls.push({ m: 'cancel', v: 0 }); }
}
class FakeNode implements AudioNodeLike {
  connected: FakeNode[] = [];
  connect(d: AudioNodeLike) { this.connected.push(d as FakeNode); }
  disconnect() { /* noop */ }
}
class FakeGain extends FakeNode implements GainNodeLike { gain = new FakeParam(); }
class FakeOsc extends FakeNode implements OscillatorNodeLike {
  type = 'sine'; frequency = new FakeParam();
  startCalls: number[] = []; stopCalls: number[] = [];
  onended: (() => void) | null = null;
  private started = false; private stopped = false;
  // Real Web Audio sources are single-use: start()/stop() throw on a second
  // call. Enforcing it here is what catches a restarted pooled voice.
  start(t = 0) {
    if (this.started) throw new Error('InvalidStateError: cannot call start more than once');
    this.started = true; this.startCalls.push(t);
  }
  stop(t = 0) {
    if (this.stopped) throw new Error('InvalidStateError: cannot call stop more than once');
    this.stopped = true; this.stopCalls.push(t); this.onended?.();
  }
}
class FakeFilter extends FakeNode implements BiquadFilterNodeLike {
  type = 'lowpass'; frequency = new FakeParam(); Q = new FakeParam();
}
class FakeSource extends FakeNode implements BufferSourceNodeLike {
  buffer: AudioBufferLike | null = null; loop = false;
  startCalls: number[] = []; stopCalls: number[] = [];
  onended: (() => void) | null = null;
  private started = false; private stopped = false;
  start(t = 0) {
    if (this.started) throw new Error('InvalidStateError: cannot call start more than once');
    this.started = true; this.startCalls.push(t);
  }
  stop(t = 0) {
    if (this.stopped) throw new Error('InvalidStateError: cannot call stop more than once');
    this.stopped = true; this.stopCalls.push(t); this.onended?.();
  }
}
class FakeBuffer implements AudioBufferLike {
  data: Float32Array;
  constructor(n: number) { this.data = new Float32Array(n); }
  getChannelData() { return this.data; }
}
class MockAudioContext implements AudioContextLike {
  currentTime = 0; state = 'running'; sampleRate = 48000;
  destination = new FakeNode();
  gains: FakeGain[] = []; oscs: FakeOsc[] = []; filters: FakeFilter[] = []; sources: FakeSource[] = [];
  resumeCalls = 0; suspendCalls = 0;
  createGain() { const g = new FakeGain(); this.gains.push(g); return g; }
  createOscillator() { const o = new FakeOsc(); this.oscs.push(o); return o; }
  createBiquadFilter() { const f = new FakeFilter(); this.filters.push(f); return f; }
  createBufferSource() { const s = new FakeSource(); this.sources.push(s); return s; }
  createBuffer(_c: number, len: number) { return new FakeBuffer(len); }
  async resume() { this.resumeCalls++; this.state = 'running'; }
  async suspend() { this.suspendCalls++; this.state = 'suspended'; }
}
class FakeStorage {
  map = new Map<string, string>();
  getItem(k: string): string | null { return this.map.has(k) ? this.map.get(k)! : null; }
  setItem(k: string, v: string) { this.map.set(k, v); }
}

function makeEngine(storage?: FakeStorage): { ctx: MockAudioContext; engine: AudioEngine; storage: FakeStorage } {
  const ctx = new MockAudioContext();
  const st = storage ?? new FakeStorage();
  const engine = createAudioEngine({ createContext: () => ctx, storage: st });
  return { ctx, engine, storage: st };
}

// Lazy graph: nothing exists until a gesture.
{
  const { ctx, engine } = makeEngine();
  ok(!engine.ready, 'engine not ready before a user gesture');
  engine.update(0.016, { speed: 40, maxSpeed: 80, load: 0, slip: 0, drifting: false, grounded: true });
  ok(engine.oneShot('land') === false, 'one-shot is gated before start()');
  ok(ctx.oscs.length === 0 && ctx.gains.length === 0, 'no audio nodes created before start()');
  engine.start();
  ok(engine.ready, 'start() builds the graph');
  const oscs = ctx.oscs.length, gains = ctx.gains.length, sources = ctx.sources.length;
  engine.start();
  ok(ctx.oscs.length === oscs && ctx.gains.length === gains && ctx.sources.length === sources, 'start() is idempotent (no duplicate graph)');
  // 2 continuous oscillators + 4 pooled voices; 1 looping noise source.
  ok(oscs === 6, 'bounded oscillator count (2 continuous + 4 voice pool)', `${oscs}`);
  ok(sources === 1, 'single looping noise source', `${sources}`);
}

// Mute is persisted and applied at the master gain.
{
  const storage = new FakeStorage();
  const { ctx, engine } = makeEngine(storage);
  engine.start();
  ok(engine.isMuted() === false, 'unmuted by default');
  engine.setMuted(true);
  ok(storage.getItem(AUDIO_MUTE_KEY) === '1', 'mute persisted');
  ok(ctx.gains[0].gain.value === 0, 'master gain muted', `${ctx.gains[0].gain.value}`);
  // A fresh engine sharing storage starts muted.
  const { engine: e2 } = makeEngine(storage);
  e2.start();
  ok(e2.isMuted() === true, 'mute state restored from storage');
  engine.setMuted(false);
  ok(storage.getItem(AUDIO_MUTE_KEY) === '0', 'unmute persisted');
  ok(ctx.gains[0].gain.value === MASTER_GAIN, 'master gain restored', `${ctx.gains[0].gain.value}`);
}

// Starting muted never resumes the context; unmuting must resume it.
{
  const storage = new FakeStorage();
  storage.setItem(AUDIO_MUTE_KEY, '1');
  const { ctx, engine } = makeEngine(storage);
  engine.start();
  ok(ctx.resumeCalls === 0, 'a muted start does not resume the context');
  ctx.state = 'suspended';
  const before = ctx.resumeCalls;
  engine.setMuted(false);
  ok(ctx.resumeCalls === before + 1 && !engine.isMuted(), 'unmuting resumes a suspended context');
}

// Visibility loss suspends sound and one-shots; resume restores.
{
  const { ctx, engine } = makeEngine();
  engine.start();
  engine.suspend();
  ok(ctx.suspendCalls === 1 && engine.isSuspended(), 'suspend() suspends the context');
  ok(engine.oneShot('crash') === false, 'one-shots gated while suspended');
  const freqBefore = ctx.oscs[0].frequency.value;
  engine.update(0.016, { speed: 70, maxSpeed: 80, load: 0, slip: 0.9, drifting: true, grounded: true });
  ok(ctx.oscs[0].frequency.value === freqBefore, 'continuous update paused while suspended');
  const resumesBefore = ctx.resumeCalls;
  engine.resume();
  ok(ctx.resumeCalls === resumesBefore + 1 && !engine.isSuspended(), 'resume() restores the context');
  ok(engine.oneShot('crash') === true, 'one-shots work after resume');
}

// Continuous engine pitch rises with speed; slip only sounds while drifting.
{
  const { ctx, engine } = makeEngine();
  engine.start();
  engine.update(0.016, { speed: 10, maxSpeed: 80, load: 0, slip: 0, drifting: false, grounded: true });
  const lowHz = ctx.oscs[0].frequency.value;
  engine.update(0.016, { speed: 78, maxSpeed: 80, load: 0, slip: 0, drifting: false, grounded: true });
  const highHz = ctx.oscs[0].frequency.value;
  ok(highHz > lowHz, 'engine pitch rises with speed', `${lowHz} -> ${highHz}`);
  const slipGain = ctx.gains[3]; // master, engine, sub, slip
  engine.update(0.016, { speed: 60, maxSpeed: 80, load: 0, slip: 0.8, drifting: true, grounded: true });
  const driftSlip = slipGain.gain.value;
  engine.update(0.016, { speed: 60, maxSpeed: 80, load: 0, slip: 0, drifting: false, grounded: true });
  ok(driftSlip > 0 && slipGain.gain.value === 0, 'slip noise tracks actual drifting', `${driftSlip}`);
}

// Bounded voice pool: never grows past the pool, reset() clears it (retry).
{
  const { engine } = makeEngine();
  engine.start();
  for (let i = 0; i < 10; i++) engine.oneShot('land', 0.9);
  ok(engine.activeVoiceCount() <= 4, 'voice pool never exceeds its bound', `${engine.activeVoiceCount()}`);
  ok(engine.activeVoiceCount() > 0, 'one-shots do use the pool');
  engine.reset();
  ok(engine.activeVoiceCount() === 0, 'reset() silences every active voice (no leak into a retry)');
  engine.oneShot('cleanExit');
  ok(engine.activeVoiceCount() === 1, 'pool retriggers after reset without restarting nodes');
}

// Regression (real browser InvalidStateError): repeated collisions/landings/
// clean exits and retry cycles must never restart a single-use source node, and
// simultaneous voices must stay within the fixed pool.
{
  const { ctx, engine } = makeEngine();
  engine.start();
  let threw = false;
  try {
    for (let i = 0; i < 24; i++) {
      const kind = i % 3 === 0 ? 'crash' : i % 3 === 1 ? 'land' : 'cleanExit';
      engine.oneShot(kind, 0.9);
      if (i < 8) ok(engine.activeVoiceCount() <= 4, `simultaneous voices bounded at step ${i}`, `${engine.activeVoiceCount()}`);
    }
  } catch { threw = true; }
  ok(!threw, 'repeated one-shots never restart a source node');
  ok(ctx.oscs.every((o) => o.startCalls.length === 1), 'every oscillator started exactly once for its lifetime');
  ok(ctx.sources.every((s) => s.startCalls.length === 1), 'noise source started exactly once');
  engine.reset();
  ok(engine.activeVoiceCount() === 0, 'reset silences every voice before a retry');
  let retryThrew = false;
  try {
    for (let r = 0; r < 5; r++) {
      engine.oneShot('crash', 0.8);
      engine.oneShot('land', 0.6);
      engine.oneShot('cleanExit', 0.5);
      engine.reset();
    }
  } catch { retryThrew = true; }
  ok(!retryThrew, 'retry cycles (start/reset) never restart a node');
  ok(ctx.oscs.every((o) => o.startCalls.length === 1), 'lifecycle is still start-once after retry cycles');
}

// One-shot envelopes differ by event kind.
{
  const { ctx, engine } = makeEngine();
  engine.start();
  engine.oneShot('land');
  const land = ctx.oscs[2].frequency.calls.filter((c) => c.m === 'lin').map((c) => c.v);
  const { ctx: ctx2, engine: e2 } = makeEngine();
  e2.start();
  e2.oneShot('cleanExit');
  const clean = ctx2.oscs[2].frequency.calls.filter((c) => c.m === 'lin').map((c) => c.v);
  ok(land.length > 0 && clean.length > 0 && land[land.length - 1] < clean[clean.length - 1],
    'land and clean-exit use distinct pitch sweeps', `${land} vs ${clean}`);
}

console.log(`\naudio: ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
