// ghost.ts — deterministic versioned ghost codec + playback sampling.
// Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock, no network.
// Byte-compatible with the legacy sim.ts payloads: legacy links without `v`
// or without `ts` still decode, as do legacy C1 binary payloads (decode-only);
// payloads produced here still decode under the legacy sim.ts decoder
// (unknown fields are ignored there).

export type GhostPt = [number, number, number, number];

export interface GhostRec {
  t: number;
  p: GhostPt[];
  ts: number[];
}

export interface GhostData {
  t: number;
  p: GhostPt[];
  ts: number[];
  track?: TrackIdentity;
}

/** Course binding stamped on every new recording. Geometry proof for racing. */
export interface TrackIdentity {
  day: string;
  course: string;
  gen: number;
}

export const GHOST_VERSION = 3;
export const GHOST_LEGACY_VERSION = 1;
export const GHOST_IDENTITY_VERSION = 3;
/**
 * Identity-aware generation. Bump when trackgen changes anything that moves
 * the road (width, grammar, elevation, sampling, acceptance): same-day PBs
 * recorded under an older gen must fail closed even if a checksum collides.
 * Legacy payloads (v1/v2/C1, no identity) predate all gens.
 */
export const TRACK_IDENTITY_GEN = 1;
export const GHOST_REC_CADENCE_MS = 120;
export const GHOST_MAX_SAMPLES = 4000;
export const GHOST_MIN_SAMPLES = 2;
export const GHOST_COORD_BOUND = 5000;
export const GHOST_MAX_TIME_MS = 3600000;
export const GHOST_FINISH_TOLERANCE_MS = 1;
export const GHOST_MAX_RAW_LEN = 8192;
export const GHOST_URL_BUDGET = 1650;
export const GHOST_POS_QUANTUM = 0.5;
export const GHOST_HEADING_QUANTUM = 0.01;

export type GhostKind = 'pb' | 'friend';

export interface RivalGhost {
  ghost: GhostData;
  kind: GhostKind;
  racingPB: boolean;
}

export interface DecodeFailure {
  ok: false;
  error: string;
}

export type DecodeResult = { ok: true; ghost: GhostData } | DecodeFailure;

export function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v));
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function wrapPi(a: number): number {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

function isFiniteNum(v: unknown): v is number {
  return typeof v === 'number' && isFinite(v);
}

function b64urlEncode(s: string): string {
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64urlDecode(s: string): string {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return atob(s);
}

function quantizePt(s: GhostPt): GhostPt {
  return [
    Math.round(s[0] * 2) / 2,
    Math.round(s[1] * 2) / 2,
    Math.round(s[2] * 2) / 2,
    Math.round(s[3] * 100) / 100,
  ];
}

/** Deterministic stride downsampling that always keeps the exact start and finish samples. */
export function downsampleGhost(rec: GhostRec, step: number): { p: GhostPt[]; ts: number[] } {
  const s = Math.max(1, Math.floor(step));
  const p: GhostPt[] = [];
  const ts: number[] = [];
  for (let i = 0; i < rec.p.length; i += s) {
    p.push(quantizePt(rec.p[i]));
    ts.push(Math.round(rec.ts[i]));
  }
  const last = rec.p.length - 1;
  if (last % s !== 0 && last >= 0) {
    p.push(quantizePt(rec.p[last]));
    ts.push(Math.round(rec.ts[last]));
  }
  return { p, ts };
}

/** Step used for a recording of length n under the doubling schedule (1,2,4,8,16). */
export function downsampleStepForLength(n: number, encodedLen: number): number {
  if (encodedLen < GHOST_URL_BUDGET || n < 40) return 1;
  let step = 1;
  while (step < 16 && encodedLen >= GHOST_URL_BUDGET) step *= 2;
  return Math.min(step, 16);
}

/**
 * Compact versioned ghost payload. Quantizes positions to 0.5u and headings to
 * 0.01rad, rounds timestamps to integer ms, and deterministically downsamples
 * (doubling stride, endpoints pinned) until the payload fits GHOST_URL_BUDGET
 * or the stride caps at 16. Deterministic: same input always yields same output.
 */
export function encodeGhost(rec: GhostRec, exactMs: number, budget: number = GHOST_URL_BUDGET, track?: TrackIdentity): string {
  let step = 1;
  let out = '';
  for (;;) {
    const q = downsampleGhost(rec, step);
    const body: { v: number; t: number; p: GhostPt[]; ts: number[]; track?: TrackIdentity } =
      track
        ? { v: GHOST_IDENTITY_VERSION, t: Math.round(exactMs), p: q.p, ts: q.ts, track: { ...track } }
        : { v: 2, t: Math.round(exactMs), p: q.p, ts: q.ts };
    out = b64urlEncode(JSON.stringify(body));
    if (out.length < budget || rec.p.length < 40 || step >= 16) break;
    step *= 2;
  }
  return out;
}

/** Encoded payload length in characters (URL-safe base64, no padding). */
export function encodedGhostLength(rec: GhostRec, exactMs: number): number {
  return encodeGhost(rec, exactMs).length;
}

/**
 * Maximum absolute per-sample position error introduced by quantization,
 * in world units. Heading error is bounded separately (<= 0.005 rad).
 */
export function maxQuantizationError(): number {
  return GHOST_POS_QUANTUM / 2;
}

// Legacy C1 binary payloads (produced by pre-v2 builds, same 0.5u / 0.01rad
// quantization): positions/headings as int16 deltas, time gaps as uint16
// deltas. Decode-only — new recordings always encode as versioned JSON.
function ghostVarintLen(data: Uint8Array, pos: number): [number, number] | null {
  let v = 0, mul = 1;
  for (let k = 0; k < 5; k++) {
    if (pos >= data.length) return null;
    const b = data[pos++];
    v += (b & 127) * mul;
    if (!(b & 128)) return [v, pos];
    mul *= 128;
  }
  return null;
}
function ghostUnpackC1(bin: string): GhostData | null {
  if (bin.length < 2 || bin.charCodeAt(0) !== 67 || bin.charCodeAt(1) !== 49) return null;
  const data = new Uint8Array(bin.length);
  for (let k = 0; k < bin.length; k++) data[k] = bin.charCodeAt(k) & 255;
  let pos = 2;
  const rt = ghostVarintLen(data, pos);
  if (!rt) return null;
  pos = rt[1];
  const rn = ghostVarintLen(data, pos);
  if (!rn) return null;
  pos = rn[1];
  const exactMs = rt[0], n = rn[0];
  if (exactMs < 0 || exactMs > GHOST_MAX_TIME_MS || n < GHOST_MIN_SAMPLES || n > GHOST_MAX_SAMPLES) return null;
  const get16 = (): number | null => {
    if (pos + 2 > data.length) return null;
    let v = data[pos] + data[pos + 1] * 256;
    pos += 2;
    return v >= 32768 ? v - 65536 : v;
  };
  const pts: GhostPt[] = [];
  const ts: number[] = [];
  let qx = 0, qy = 0, qz = 0, qh = 0, tt = 0;
  for (let k = 0; k < n; k++) {
    const a = get16(), b = get16(), c = get16(), d = get16();
    if (a === null || b === null || c === null || d === null) return null;
    if (k === 0) {
      qx = a; qy = b; qz = c; qh = d;
      tt = 0;
    } else {
      if (pos + 2 > data.length) return null;
      const dt = data[pos] + data[pos + 1] * 256;
      pos += 2;
      qx += a; qy += b; qz += c; qh += d;
      tt += dt;
      if (tt < 0 || tt > GHOST_MAX_TIME_MS) return null;
    }
    const x = qx / 2, y = qy / 2, z = qz / 2;
    if (Math.abs(x) > GHOST_COORD_BOUND || Math.abs(y) > GHOST_COORD_BOUND || Math.abs(z) > GHOST_COORD_BOUND) return null;
    pts.push([x, y, z, qh / 100]);
    ts.push(tt);
  }
  if (pos !== data.length) return null;
  if (Math.abs(ts[n - 1] - exactMs) > GHOST_FINISH_TOLERANCE_MS) return null;
  return { t: exactMs, p: pts, ts };
}

function validatePoints(p: unknown): p is GhostPt[] {
  if (!Array.isArray(p) || p.length < GHOST_MIN_SAMPLES || p.length > GHOST_MAX_SAMPLES) return false;
  for (const s of p) {
    if (!Array.isArray(s) || s.length !== 4) return false;
    for (const v of s) if (!isFiniteNum(v)) return false;
    const pt = s as number[];
    if (Math.abs(pt[0]) > GHOST_COORD_BOUND) return false;
    if (Math.abs(pt[1]) > GHOST_COORD_BOUND) return false;
    if (Math.abs(pt[2]) > GHOST_COORD_BOUND) return false;
  }
  return true;
}

function synthesizeTimestamps(n: number): number[] {
  const ts: number[] = [];
  for (let i = 0; i < n; i++) ts.push(i * GHOST_REC_CADENCE_MS);
  return ts;
}

function validateTimestamps(ts: unknown, n: number): ts is number[] {
  if (!Array.isArray(ts) || ts.length !== n) return false;
  for (const v of ts) if (!isFiniteNum(v) || v < 0 || v > GHOST_MAX_TIME_MS) return false;
  for (let i = 1; i < ts.length; i++) {
    const cur = ts[i] as number;
    const prev = ts[i - 1] as number;
    if (cur < prev) return false;
  }
  return true;
}

/**
 * Strict decode with a machine-readable failure reason. Accepts versioned (v2)
 * payloads and legacy payloads (no `v`, with or without `ts`). Never throws.
 */
export function decodeGhostResult(raw: string | null | undefined): DecodeResult {
  if (!raw) return { ok: false, error: 'empty' };
  if (typeof raw !== 'string') return { ok: false, error: 'not-string' };
  if (raw.length > GHOST_MAX_RAW_LEN) return { ok: false, error: 'too-long' };
  let bin: string;
  try {
    bin = b64urlDecode(raw);
  } catch {
    return { ok: false, error: 'bad-encoding' };
  }
  if (bin.length >= 2 && bin.charCodeAt(0) === 67 && bin.charCodeAt(1) === 49) {
    const c1 = ghostUnpackC1(bin);
    if (!c1) return { ok: false, error: 'bad-encoding' };
    return { ok: true, ghost: c1 };
  }
  let o: unknown;
  try {
    o = JSON.parse(bin);
  } catch {
    return { ok: false, error: 'bad-encoding' };
  }
  if (typeof o !== 'object' || o === null) return { ok: false, error: 'bad-shape' };
  const rec = o as { v?: unknown; t?: unknown; p?: unknown; ts?: unknown; track?: unknown };
  if (rec.v !== undefined && rec.v !== GHOST_VERSION && rec.v !== 2 && rec.v !== GHOST_LEGACY_VERSION) {
    return { ok: false, error: 'bad-version' };
  }
  let track: TrackIdentity | undefined;
  if (rec.v === GHOST_IDENTITY_VERSION) {
    if (!validTrackIdentity(rec.track)) return { ok: false, error: 'bad-track' };
    const tr = rec.track as TrackIdentity;
    track = { day: tr.day, course: tr.course, gen: tr.gen };
  }
  if (!isFiniteNum(rec.t) || rec.t < 0 || rec.t > GHOST_MAX_TIME_MS) {
    return { ok: false, error: 'bad-time' };
  }
  if (!validatePoints(rec.p)) return { ok: false, error: 'bad-points' };
  const p = rec.p as GhostPt[];
  let ts: number[];
  if (rec.ts === undefined) {
    ts = synthesizeTimestamps(p.length);
    if (ts[ts.length - 1] > (rec.t as number) + GHOST_FINISH_TOLERANCE_MS) {
      return { ok: false, error: 'legacy-finish-mismatch' };
    }
  } else {
    if (!validateTimestamps(rec.ts, p.length)) return { ok: false, error: 'bad-timestamps' };
    ts = (rec.ts as number[]).slice();
    if (Math.abs(ts[ts.length - 1] - (rec.t as number)) > GHOST_FINISH_TOLERANCE_MS) {
      return { ok: false, error: 'finish-mismatch' };
    }
  }
  const ghost: GhostData = track
    ? { t: rec.t as number, p, ts, track }
    : { t: rec.t as number, p, ts };
  return { ok: true, ghost };
}

/** Strict shape check for a stamped course identity. Values are compared later. */
export function validTrackIdentity(v: unknown): v is TrackIdentity {
  if (typeof v !== 'object' || v === null) return false;
  const t = v as { day?: unknown; course?: unknown; gen?: unknown };
  if (typeof t.day !== 'string' || t.day.length < 1 || t.day.length > 32) return false;
  if (typeof t.course !== 'string' || !/^[0-9a-fA-F]{1,64}$/.test(t.course)) return false;
  if (typeof t.gen !== 'number' || !isFinite(t.gen)) return false;
  if (Math.floor(t.gen) !== t.gen || t.gen < 0 || t.gen > 2147483647) return false;
  return true;
}

/** Build the identity main must match ghosts against (checksum from trackgen). */
export function makeExpectedTrack(day: string, course: string, gen: number = TRACK_IDENTITY_GEN): TrackIdentity {
  return { day, course, gen };
}

export type IdentityVerdict = 'match' | 'mismatch' | 'legacy' | 'none';

/**
 * Fail-closed course check. 'match' needs equal course checksum AND gen;
 * day is metadata for UX, never geometry proof. Legacy payloads (v1/v2/C1)
 * and identity-less ghosts can decode but never 'match'.
 */
export function checkIdentity(g: GhostData | null | undefined, expected: TrackIdentity): IdentityVerdict {
  if (!g) return 'none';
  if (!g.track || !validTrackIdentity(g.track)) return 'legacy';
  if (g.track.course.toLowerCase() === expected.course.toLowerCase() && g.track.gen === expected.gen) return 'match';
  return 'mismatch';
}

/** User-facing line for a ghost that cannot race. Empty when nothing to say. */
export function identityNotice(kind: GhostKind, verdict: IdentityVerdict): string {
  if (verdict === 'match' || verdict === 'none') return '';
  if (kind === 'friend' && verdict === 'mismatch') return 'Friend link is for a different course.';
  if (kind === 'friend') return 'Friend link predates course checks — ask for a fresh one.';
  if (verdict === 'mismatch') return 'Saved best is for a different course.';
  return 'Saved best predates course checks.';
}

export type RivalStatus = 'ready' | 'mismatch' | 'legacy' | 'none';

/** Fold a per-ghost verdict into a decision status ('match' always races above). */
function statusOfVerdict(v: IdentityVerdict): RivalStatus {
  return v === 'match' || v === 'none' ? 'none' : v;
}

export interface RivalDecision {
  rival: RivalGhost | null;
  status: RivalStatus;
  notice: string;
}

export interface RivalSource {
  shared: GhostData | null;
  pb: GhostData | null;
  expected: TrackIdentity;
}

/**
 * Identity-gated rival selection. Friend links keep precedence, but only a
 * course-matched ghost races; a matched PB backfills when the link is stale.
 * Stale ghosts are reported, never raced, never deleted.
 */
export function resolveRivalIdentity(src: RivalSource): RivalDecision {
  const sharedV = checkIdentity(src.shared, src.expected);
  const pbV = checkIdentity(src.pb, src.expected);
  if (sharedV === 'match' && src.shared && src.shared.p.length > 1) {
    return { rival: { ghost: src.shared, kind: 'friend', racingPB: false }, status: 'ready', notice: '' };
  }
  if (pbV === 'match' && src.pb && src.pb.p.length > 1) {
    const parts: string[] = [];
    if (src.shared) {
      const fn = identityNotice('friend', sharedV);
      if (fn) parts.push(fn);
      parts.push('Racing your best instead.');
    }
    return { rival: { ghost: src.pb, kind: 'pb', racingPB: true }, status: 'ready', notice: parts.join(' ') };
  }
  const parts: string[] = [];
  const fn = identityNotice('friend', sharedV);
  if (fn) parts.push(fn);
  const pn = identityNotice('pb', pbV);
  if (pn) parts.push(pn);
  if (src.shared) return { rival: null, status: statusOfVerdict(sharedV), notice: parts.join(' ') };
  if (src.pb) return { rival: null, status: statusOfVerdict(pbV), notice: parts.join(' ') };
  return { rival: null, status: 'none', notice: '' };
}

/**
 * Strict validation: bad shape, non-numeric values, out-of-range coordinates,
 * length mismatches, unsupported versions, oversized input, or non-monotonic
 * timestamps all decode to null (never throw). Legacy links without `ts` are
 * accepted with an assumed 120ms cadence.
 */
export function decodeGhost(raw: string | null | undefined): GhostData | null {
  const r = decodeGhostResult(raw);
  return r.ok ? r.ghost : null;
}

export interface GhostPose {
  x: number;
  y: number;
  z: number;
  h: number;
}

/**
 * Interpolated playback at race time ms. Holds the first/last pose outside the
 * recorded range (finish pose is held, never looped). Heading takes the short path.
 */
export function sampleGhost(g: GhostData, ms: number): GhostPose {
  const p = g.p;
  const ts = g.ts;
  const first = p[0];
  const last = p[p.length - 1];
  if (ms <= ts[0]) return { x: first[0], y: first[1], z: first[2], h: first[3] };
  const li = ts.length - 1;
  if (ms >= ts[li]) return { x: last[0], y: last[1], z: last[2], h: last[3] };
  let lo = 0;
  let hi = li;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (ts[mid] <= ms) lo = mid;
    else hi = mid;
  }
  const span = ts[hi] - ts[lo] || 1;
  const f = (ms - ts[lo]) / span;
  const a = p[lo];
  const b = p[hi];
  return {
    x: lerp(a[0], b[0], f),
    y: lerp(a[1], b[1], f),
    z: lerp(a[2], b[2], f),
    h: a[3] + wrapPi(b[3] - a[3]) * f,
  };
}

/**
 * Rival selection mirroring game precedence: a shared (friend) ghost from the
 * URL wins; otherwise the stored personal best is raced. Returns null when
 * neither is available.
 */
export function resolveRival(shared: GhostData | null, pb: GhostData | null): RivalGhost | null {
  if (shared && shared.p.length > 1) return { ghost: shared, kind: 'friend', racingPB: false };
  if (pb && pb.p.length > 1) return { ghost: pb, kind: 'pb', racingPB: true };
  return null;
}

/** Human-readable label for the rival banner. */
export function rivalLabel(rival: RivalGhost | null, sharedTimeMs: number): string {
  if (rival && rival.kind === 'friend') return 'Racing a shared ghost';
  if (rival && rival.kind === 'pb') return 'Racing your daily best ghost';
  if (sharedTimeMs > 0) return 'Friend time, no ghost';
  return 'No rival ghost';
}
