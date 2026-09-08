// loop.ts — pure P0 replay-loop helpers (Cycle 4, addiction-loop P0 only).
// Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock, no network.
// main.ts owns all presentation; tests drive this headless.

import type { GhostData } from './ghost.js';
import type { CornerEvent } from './trackgen.js';

/** Split arc positions from corner grammar: after events ~1/4, ~1/2, ~3/4. */
export function splitPositions(events: CornerEvent[]): number[] {
  if (events.length === 0) return [];
  const picks = [0.25, 0.5, 0.75];
  const out: number[] = [];
  for (const f of picks) {
    const k = Math.min(events.length - 1, Math.max(0, Math.floor(events.length * f)));
    const s = events[k].endS;
    if (out.length === 0 || s > out[out.length - 1] + 1) out.push(s);
  }
  return out;
}

/** Map an arc position to the nearest centerline sample index via cum table. */
export function splitSampleIdx(cum: number[], sPos: number): number {
  let best = 0, bd = Infinity;
  for (let i = 0; i < cum.length; i++) {
    const d = Math.abs(cum[i] - sPos);
    if (d < bd) { bd = d; best = i; }
  }
  return best;
}

/**
 * Ghost timestamp at the sample nearest (x,z). Zero allocation; linear scan
 * over the downsampled rival (~a few hundred points). Respawn gaps in ts are
 * preserved as-is — callers compare against the same honest timestamps.
 * Returns -1 when the ghost is unusable.
 */
export function ghostTimeAt(g: GhostData | null, x: number, z: number): number {
  if (!g || g.p.length < 2 || g.ts.length !== g.p.length) return -1;
  let bi = 0, bd = Infinity;
  for (let i = 0; i < g.p.length; i++) {
    const dx = g.p[i][0] - x, dz = g.p[i][2] - z;
    const d = dx * dx + dz * dz;
    if (d < bd) { bd = d; bi = i; }
  }
  const t = g.ts[bi];
  return typeof t === 'number' && isFinite(t) && t >= 0 ? t : -1;
}

/** Compact signed delta in seconds: -0.31 (ahead) / +0.42 (behind). */
export function fmtDelta(ms: number): string {
  const s = ms / 1000;
  const sign = s < 0 ? '-' : '+';
  const a = Math.abs(s);
  return `${sign}${a.toFixed(2)}`;
}

/**
 * Live gap readout: time delta plus distance equivalent at current speed.
 * Empty string when no valid comparison exists (never fabricate a target).
 */
export function gapText(deltaMs: number, speed: number, target: string): string {
  if (!isFinite(deltaMs) || !isFinite(speed) || speed < 0) return '';
  const m = Math.round(Math.abs(deltaMs) / 1000 * speed);
  return `${fmtDelta(deltaMs)} · ${m}m vs ${target}`;
}

/**
 * Overload policy for the render accumulator (P2 redteam). The frame loop
 * consumes at most 4 fixed steps per render frame; without a clamp, sustained
 * sub-15fps leaves ~33ms/frame unconsumed and debt grows without bound
 * (slow-motion + ever-growing input latency). Clamping leftover debt to 100ms
 * after stepping bounds the lag with a constant (not growing) slowdown factor.
 * Normal rates never reach the clamp (60Hz peaks under ~2 steps), so
 * deterministic behavior at 60/90/120/144Hz is unchanged.
 */
export const ACC_MAX = 0.1;
export function clampAcc(acc: number): number {
  if (!isFinite(acc) || acc < 0) return 0;
  return acc > ACC_MAX ? ACC_MAX : acc;
}
