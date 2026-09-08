// share.ts — deterministic share-URL + share-outcome helpers.
// Pure TypeScript: no DOM, no navigator, no clipboard, no network access.
// All platform effects are injected through ShareDeps so outcomes stay
// truthful and unit-testable without a browser.

import { decodeGhost, encodeGhost, GHOST_URL_BUDGET } from './ghost.js';
import type { GhostData, GhostRec } from './ghost.js';

export const SHARE_GHOST_BUDGET = GHOST_URL_BUDGET;
export const SHARE_MAX_TIME_MS = 3600000;
export const SHARE_DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

export interface ShareParams {
  day: string;
  timeMs: number;
  ghost: string;
}

export interface ParsedShare {
  day: string;
  timeMs: number;
  ghost: GhostData | null;
  ghostRaw: string;
  errors: string[];
}

export type ShareOutcomeKind =
  | 'shared-with-ghost'
  | 'shared-no-ghost'
  | 'copied-with-ghost'
  | 'copied-time-only'
  | 'dismissed'
  | 'copy-failed';

export interface ShareOutcome {
  kind: ShareOutcomeKind;
  message: string;
}

export interface ShareRequest {
  title: string;
  text: string;
  url: string;
  hasGhost: boolean;
  isFinish: boolean;
}

export interface ShareDeps {
  requestNativeShare?: (data: { title: string; text: string; url: string }) => Promise<void>;
  copyText?: (text: string) => Promise<void>;
}

export function isAbortError(err: unknown): boolean {
  return err instanceof DOMException && err.name === 'AbortError';
}

export function isValidDay(day: string): boolean {
  if (!SHARE_DAY_RE.test(day)) return false;
  const [y, m, d] = day.split('-').map(Number);
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}

export function normalizeTimeMs(v: unknown): number {
  const n = typeof v === 'string' && v.trim() !== '' ? Number(v) : (v as number);
  if (typeof n !== 'number' || !isFinite(n) || n < 0 || n > SHARE_MAX_TIME_MS) return 0;
  return Math.floor(n);
}

export function fmt(ms: number): string {
  if (!isFinite(ms) || ms < 0) return '—';
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const c = Math.floor((ms % 1000) / 10);
  return `${m}:${String(s).padStart(2, '0')}.${String(c).padStart(2, '0')}`;
}

export function buildShareText(day: string, ms: number, url: string): string {
  return `🏁 CANYON DAILY ${day} — ${fmt(ms)}\nBeat my run: ${url}`;
}

/**
 * Build a share URL under the ?d=&t=&g= scheme. A ghost payload that fails
 * validation is dropped (never shared corrupt). Never throws.
 */
export function buildShareUrl(origin: string, pathname: string, params: ShareParams): string {
  const day = isValidDay(params.day) ? params.day : '';
  const t = normalizeTimeMs(params.timeMs);
  let g = typeof params.ghost === 'string' ? params.ghost : '';
  if (g && !decodeGhost(g)) g = '';
  const q = `?d=${encodeURIComponent(day)}&t=${t}${g ? `&g=${g}` : ''}`;
  return `${origin}${pathname}${q}`;
}

/** Length in characters of the URL that buildShareUrl would produce. */
export function measureShareUrl(origin: string, pathname: string, params: ShareParams): number {
  return buildShareUrl(origin, pathname, params).length;
}

/**
 * Parse a full URL or bare query string into share parameters. Never throws:
 * malformed input yields defaults plus an entry in `errors`.
 */
export function parseShareUrl(hrefOrSearch: string | null | undefined): ParsedShare {
  const out: ParsedShare = { day: '', timeMs: 0, ghost: null, ghostRaw: '', errors: [] };
  try {
    if (!hrefOrSearch) {
      out.errors.push('empty');
      return out;
    }
    let search = hrefOrSearch;
    const q = hrefOrSearch.indexOf('?');
    if (q >= 0) search = hrefOrSearch.slice(q);
    if (!search.startsWith('?')) search = `?${search}`;
    const params = new URLSearchParams(search);
    const day = params.get('d') || '';
    if (isValidDay(day)) out.day = day;
    else if (day) out.errors.push('bad-day');
    out.timeMs = normalizeTimeMs(params.get('t') || 0);
    const g = params.get('g') || '';
    out.ghostRaw = g;
    if (g) {
      const ghost = decodeGhost(g);
      if (ghost) out.ghost = ghost;
      else out.errors.push('bad-ghost');
    }
    return out;
  } catch {
    out.errors.push('parse-failed');
    return out;
  }
}

/**
 * Re-encode a recording so the resulting share URL fits `maxUrlLen`. Uses the
 * same deterministic stride-doubling as encodeGhost; the payload floor is the
 * 2-sample endpoints encoding. Returns the ghost string and whether the URL fits.
 */
export function fitGhostToUrl(
  rec: GhostRec,
  exactMs: number,
  origin: string,
  pathname: string,
  day: string,
  timeMs: number,
  maxUrlLen = 4000,
): { ghost: string; fits: boolean; urlLen: number } {
  const ghost = encodeGhost(rec, exactMs);
  const urlLen = measureShareUrl(origin, pathname, { day, timeMs, ghost });
  return { ghost, fits: urlLen <= maxUrlLen, urlLen };
}

/** Whether the native share sheet applies: coarse pointer + platform share present. */
export function shouldUseNativeShare(coarsePointer: boolean, hasNativeShare: boolean): boolean {
  return coarsePointer && hasNativeShare;
}

/**
 * Truthful share flow with injected platform effects. Native share is attempted
 * only when `nativeShareAttempt` is true (caller wires coarse-pointer +
 * navigator.share detection). AbortError maps to `dismissed`, never to failure.
 */
export async function shareRun(
  deps: ShareDeps,
  req: ShareRequest,
  nativeShareAttempt: boolean,
): Promise<ShareOutcome> {
  if (nativeShareAttempt && deps.requestNativeShare) {
    try {
      await deps.requestNativeShare({ title: req.title, text: req.text, url: req.url });
      return req.hasGhost
        ? { kind: 'shared-with-ghost', message: 'Shared with ghost — good luck!' }
        : { kind: 'shared-no-ghost', message: 'Shared — no ghost saved yet' };
    } catch (err) {
      if (isAbortError(err)) return { kind: 'dismissed', message: 'Share dismissed' };
    }
  }
  if (deps.copyText) {
    try {
      await deps.copyText(req.text);
      if (req.hasGhost) return { kind: 'copied-with-ghost', message: 'Link + ghost copied — send it!' };
      if (req.isFinish) return { kind: 'copied-time-only', message: 'Time copied — send it!' };
      return { kind: 'copied-time-only', message: 'Time copied — link has no ghost (finish a run first)' };
    } catch {
      return { kind: 'copy-failed', message: 'Copy failed here — copy the URL manually' };
    }
  }
  return { kind: 'copy-failed', message: 'Copy failed here — copy the URL manually' };
}
