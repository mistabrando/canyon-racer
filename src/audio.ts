// audio.ts — compact, bounded driving-audio engine (integrator-owned).
// Pure-ish: all platform effects arrive through injected deps, so headless
// tests drive it with a mock AudioContext. The browser supplies a real one.
//
// Contract:
//  - Nothing is created before a user gesture calls start(); start() builds
//    exactly one synth/noise graph (2 oscillators + 1 looping noise source +
//    a fixed one-shot voice pool).
//  - Continuous layers track real sim state: engine pitch/level from speed and
//    load, tire-slip noise from actual slide amount.
//  - One-shots (land / crash / clean exit) reuse the bounded voice pool, so a
//    retry cannot accumulate voices: reset() stops every active voice.
//  - Mute is persisted through injected storage and applied at the master gain.
//  - suspend()/resume() mirror visibility loss without tearing the graph down.

export type OneShotKind = 'land' | 'crash' | 'cleanExit';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface AudioParamLike {
  value: number;
  setValueAtTime(v: number, t: number): void;
  linearRampToValueAtTime(v: number, t: number): void;
  setTargetAtTime?(v: number, t: number, c: number): void;
  cancelScheduledValues?(t: number): void;
}
export interface AudioNodeLike {
  connect(dest: AudioNodeLike): void;
  disconnect?(): void;
}
export interface GainNodeLike extends AudioNodeLike { gain: AudioParamLike }
export interface OscillatorNodeLike extends AudioNodeLike {
  type: string;
  frequency: AudioParamLike;
  detune?: AudioParamLike;
  start(t?: number): void;
  stop(t?: number): void;
  onended?: (() => void) | null;
}
export interface BiquadFilterNodeLike extends AudioNodeLike {
  type: string;
  frequency: AudioParamLike;
  Q: AudioParamLike;
}
export interface AudioBufferLike { getChannelData(channel: number): Float32Array }
export interface BufferSourceNodeLike extends AudioNodeLike {
  buffer: AudioBufferLike | null;
  loop: boolean;
  start(t?: number): void;
  stop(t?: number): void;
  onended?: (() => void) | null;
}
export interface AudioContextLike {
  currentTime: number;
  state: string;
  sampleRate: number;
  destination: AudioNodeLike;
  createGain(): GainNodeLike;
  createOscillator(): OscillatorNodeLike;
  createBiquadFilter(): BiquadFilterNodeLike;
  createBufferSource(): BufferSourceNodeLike;
  createBuffer(channels: number, length: number, sampleRate: number): AudioBufferLike;
  resume(): Promise<void>;
  suspend(): Promise<void>;
}

export const AUDIO_MUTE_KEY = 'canyon-audio-muted';
export const MASTER_GAIN = 0.6;
const ENGINE_BASE_HZ = 55;
const ENGINE_MAX_HZ = 480;
const VOICE_POOL = 4;

export interface AudioDeps {
  createContext: () => AudioContextLike;
  storage?: StorageLike | null;
}

export interface EngineState {
  speed: number;      // world units/s
  maxSpeed: number;   // reference top speed for pitch mapping
  load: number;       // 0..1 extra engine load (accel/offroad)
  slip: number;       // 0..1 slide/tire-slip amount
  drifting: boolean;
  grounded: boolean;
}

interface Voice {
  osc: OscillatorNodeLike;
  gain: GainNodeLike;
  active: boolean;
  endsAt: number;
}

function setParam(p: AudioParamLike, v: number, t: number, ramp: number): void {
  if (p.setTargetAtTime) {
    p.setTargetAtTime(v, t, ramp);
  } else if (p.linearRampToValueAtTime) {
    p.linearRampToValueAtTime(v, t + ramp);
  } else {
    p.value = v;
  }
}

function readMuted(storage: StorageLike | null | undefined): boolean {
  if (!storage) return false;
  try { return storage.getItem(AUDIO_MUTE_KEY) === '1'; } catch { return false; }
}

export class AudioEngine {
  private ctx: AudioContextLike | null = null;
  private master: GainNodeLike | null = null;
  private engineOsc: OscillatorNodeLike | null = null;
  private engineGain: GainNodeLike | null = null;
  private subOsc: OscillatorNodeLike | null = null;
  private subGain: GainNodeLike | null = null;
  private noise: BufferSourceNodeLike | null = null;
  private slipGain: GainNodeLike | null = null;
  private voices: Voice[] = [];
  private muted: boolean;
  private suspended = false;

  constructor(private deps: AudioDeps) {
    this.muted = readMuted(deps.storage);
  }

  get ready(): boolean { return this.ctx !== null; }
  isMuted(): boolean { return this.muted; }
  isSuspended(): boolean { return this.suspended; }

  /** Build the single bounded graph after a user gesture. Idempotent. */
  start(): void {
    if (this.ctx) return;
    const ctx = this.deps.createContext();
    this.ctx = ctx;
    const t = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.value = this.muted ? 0 : MASTER_GAIN;
    master.connect(ctx.destination);
    this.master = master;

    // Engine: a saw carrier plus a sub-octave sine for body.
    const engineOsc = ctx.createOscillator();
    engineOsc.type = 'sawtooth';
    engineOsc.frequency.value = ENGINE_BASE_HZ;
    const engineGain = ctx.createGain();
    engineGain.gain.value = 0;
    engineOsc.connect(engineGain);
    engineGain.connect(master);
    engineOsc.start(t);
    this.engineOsc = engineOsc;
    this.engineGain = engineGain;

    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.value = ENGINE_BASE_HZ * 0.5;
    const subGain = ctx.createGain();
    subGain.gain.value = 0;
    subOsc.connect(subGain);
    subGain.connect(master);
    subOsc.start(t);
    this.subOsc = subOsc;
    this.subGain = subGain;

    // Sustained tire slip: one looping noise buffer through a band-pass.
    const noise = ctx.createBufferSource();
    const len = Math.max(1, Math.floor(ctx.sampleRate * 0.5));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buf;
    noise.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.7;
    const slipGain = ctx.createGain();
    slipGain.gain.value = 0;
    noise.connect(filter);
    filter.connect(slipGain);
    slipGain.connect(master);
    noise.start(t);
    this.noise = noise;
    this.slipGain = slipGain;

    // Fixed one-shot voice pool (bounded: cannot grow across retries).
    // Oscillator/source nodes are single-use in Web Audio: calling start() a
    // second time throws InvalidStateError. Each voice oscillator therefore
    // starts exactly once here and is gated purely by its gain envelope, so a
    // voice can be retriggered any number of times without restarting a node.
    for (let i = 0; i < VOICE_POOL; i++) {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = 220;
      const gain = ctx.createGain();
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(master);
      osc.start(t);
      this.voices.push({ osc, gain, active: false, endsAt: 0 });
    }
    if (this.muted) return;
    void ctx.resume();
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    try { this.deps.storage?.setItem(AUDIO_MUTE_KEY, muted ? '1' : '0'); } catch { /* quota */ }
    if (this.ctx && this.master) setParam(this.master.gain, muted ? 0 : MASTER_GAIN, this.ctx.currentTime, 0.02);
    // A context created while muted was never resumed; unmuting must start it
    // from the same gesture or the graph stays silent.
    if (!muted && this.ctx && !this.suspended && this.ctx.state === 'suspended') void this.ctx.resume();
  }

  toggleMuted(): boolean {
    this.setMuted(!this.muted);
    return this.muted;
  }

  /** Visibility loss: keep the graph but stop scheduling/sounding. */
  suspend(): void {
    if (!this.ctx || this.suspended) return;
    this.suspended = true;
    void this.ctx.suspend();
  }

  resume(): void {
    if (!this.ctx || !this.suspended) return;
    this.suspended = false;
    void this.ctx.resume();
  }

  activeVoiceCount(): number {
    const t = this.ctx ? this.ctx.currentTime : 0;
    let n = 0;
    for (const v of this.voices) if (v.active && v.endsAt > t) n++;
    return n;
  }

  /** Continuous layer update. Zero allocation; safe before start(). */
  update(dt: number, s: EngineState): void {
    if (!this.ctx || !this.engineOsc || !this.engineGain || !this.subOsc || !this.subGain || !this.slipGain) return;
    if (!(dt > 0) || this.suspended) return;
    const t = this.ctx.currentTime;
    const max = Math.max(1, s.maxSpeed);
    const spd = Math.max(0, Math.min(s.speed, max));
    const rev = Math.pow(spd / max, 0.7);
    const load = Math.max(0, Math.min(s.load, 1));
    const hz = ENGINE_BASE_HZ + (ENGINE_MAX_HZ - ENGINE_BASE_HZ) * rev + load * 40;
    setParam(this.engineOsc.frequency, hz, t, 0.05);
    setParam(this.subOsc.frequency, hz * 0.5, t, 0.05);
    const throttle = (0.05 + 0.16 * rev + 0.10 * load) * (s.grounded ? 1 : 0.35);
    setParam(this.engineGain.gain, throttle, t, 0.08);
    setParam(this.subGain.gain, throttle * 0.5, t, 0.08);
    const slip = s.drifting ? Math.max(0, Math.min(s.slip, 1)) : 0;
    setParam(this.slipGain.gain, slip * 0.22, t, 0.05);
  }

  /** One-shot voice from the bounded pool. Returns false when gated/silent. */
  oneShot(kind: OneShotKind, intensity = 0.6): boolean {
    if (!this.ctx || this.muted || this.suspended || this.voices.length === 0) return false;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    let voice = this.voices.find((v) => !v.active || t >= v.endsAt);
    if (!voice) {
      // Steal the voice that ends soonest so the pool never grows.
      voice = this.voices.reduce((a, b) => (a.endsAt <= b.endsAt ? a : b));
    }
    const amp = Math.max(0.05, Math.min(intensity, 1));
    let f0 = 220, f1 = 140, dur = 0.25;
    if (kind === 'land') { f0 = 190; f1 = 70; dur = 0.22; }
    else if (kind === 'crash') { f0 = 130; f1 = 38; dur = 0.4; }
    else { f0 = 620; f1 = 1050; dur = 0.18; }
    voice.osc.type = kind === 'crash' ? 'square' : 'triangle';
    // Retrigger the already-running oscillator purely through envelopes. No
    // start()/stop() here: those are one-shot operations for the node lifetime.
    voice.osc.frequency.cancelScheduledValues?.(t);
    voice.osc.frequency.setValueAtTime(f0, t);
    voice.osc.frequency.linearRampToValueAtTime(f1, t + dur);
    voice.gain.gain.cancelScheduledValues?.(t);
    voice.gain.gain.setValueAtTime(0, t);
    voice.gain.gain.linearRampToValueAtTime(amp * 0.8, t + 0.012);
    voice.gain.gain.linearRampToValueAtTime(0, t + dur);
    voice.active = true;
    voice.endsAt = t + dur + 0.02;
    return true;
  }

  /** Full retry: silence continuous layers and stop every pooled voice. */
  reset(): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    // Silence the always-running voices by envelope only; the oscillator nodes
    // persist for the next retrigger (they cannot be restarted if stopped).
    for (const v of this.voices) {
      v.gain.gain.cancelScheduledValues?.(t);
      v.gain.gain.value = 0;
      v.active = false;
      v.endsAt = 0;
    }
    if (this.engineGain) this.engineGain.gain.value = 0;
    if (this.subGain) this.subGain.gain.value = 0;
    if (this.slipGain) this.slipGain.gain.value = 0;
  }
}

export function createAudioEngine(deps: AudioDeps): AudioEngine {
  return new AudioEngine(deps);
}
