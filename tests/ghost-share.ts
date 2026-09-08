// Standalone tests for src/ghost.ts + src/share.ts. Runs under plain node.
// Does not import sim.ts, main.ts, or trackgen.ts. Never touches the DOM,
// navigator, clipboard, network, localStorage, dist/, or test-dist/.
declare const Buffer: { from(s: string, enc?: string): { toString(enc: string): string } };
declare const process: { exit(c: number): void };
import {
  GHOST_URL_BUDGET, GHOST_VERSION, TRACK_IDENTITY_GEN,
  checkIdentity, decodeGhost, decodeGhostResult, downsampleGhost, encodeGhost,
  identityNotice, makeExpectedTrack, maxQuantizationError, resolveRival,
  resolveRivalIdentity, rivalLabel, sampleGhost, validTrackIdentity, wrapPi,
} from '../src/ghost.js';
import type { GhostData, GhostRec, TrackIdentity } from '../src/ghost.js';
import {
  buildShareText, buildShareUrl, fitGhostToUrl, isValidDay, measureShareUrl,
  normalizeTimeMs, parseShareUrl, shareRun, shouldUseNativeShare,
} from '../src/share.js';

let pass = 0, fail = 0;
function ok(cond: boolean, name: string, detail = '') {
  if (cond) { pass++; console.log(`ok - ${name}`); }
  else { fail++; console.log(`FAIL - ${name} ${detail}`); }
}

function b64urlEncode(s: string): string {
  return Buffer.from(s).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function makeRec(n: number, dtMs = 120): GhostRec {
  const p: GhostRec['p'] = [];
  const ts: number[] = [];
  for (let i = 0; i < n; i++) {
    p.push([i * 7.3, 6 + Math.sin(i * 0.2) * 2, i * 3.1, i * 0.05]);
    ts.push(i * dtMs);
  }
  return { t: (n - 1) * dtMs, p, ts };
}

// 1. Roundtrip preserves time, endpoints, sample count for small recordings.
{
  const rec = makeRec(20);
  const enc = encodeGhost(rec, rec.t);
  const g = decodeGhost(enc);
  ok(g !== null, 'roundtrip decodes');
  ok(g !== null && g.t === Math.round(rec.t), 'roundtrip preserves exact time');
  ok(g !== null && g.p.length === rec.p.length, 'small rec keeps all samples');
  ok(g !== null && Math.abs(g.p[0][0] - rec.p[0][0]) <= 0.25, 'start x quantized within 0.25u');
  const last = g !== null ? g.p[g.p.length - 1] : [0, 0, 0, 0];
  ok(Math.abs(last[0] - rec.p[rec.p.length - 1][0]) <= 0.25, 'finish x preserved');
  ok(maxQuantizationError() === 0.25, 'quantization error bound is 0.25u');
}

// 2. Deterministic: same input -> identical payload.
{
  const rec = makeRec(60);
  ok(encodeGhost(rec, rec.t) === encodeGhost(rec, rec.t), 'encoding deterministic');
}

// 3. URL budget: long recordings downsample under budget, keep endpoints.
{
  const rec = makeRec(600);
  const enc = encodeGhost(rec, rec.t);
  ok(enc.length < GHOST_URL_BUDGET, 'long rec fits URL budget', `len=${enc.length}`);
  const g = decodeGhost(enc)!;
  ok(g.p.length < rec.p.length, 'long rec downsampled');
  ok(Math.abs(g.p[0][0] - rec.p[0][0]) <= 0.25, 'downsampled start pinned');
  const gl = g.p[g.p.length - 1];
  ok(Math.abs(gl[0] - rec.p[rec.p.length - 1][0]) <= 0.25, 'downsampled finish pinned');
  ok(Math.abs(g.ts[g.ts.length - 1] - g.t) <= 1, 'downsampled finish timestamp matches t');
  const q = downsampleGhost(rec, 4);
  ok(q.p.length === 151, 'stride-4 length pins endpoints', `len=${q.p.length}`);
  ok(q.p.length >= 2, 'downsample keeps at least endpoints');
}

// 4. Quantization steps: 0.5u positions, 0.01rad headings, integer ms.
{
  const rec: GhostRec = { t: 120, p: [[1.26, 2.74, 3.13, 0.12345], [4.99, 5.01, 6.26, -2.3456]], ts: [0.4, 120.4] };
  const g = decodeGhost(encodeGhost(rec, 120))!;
  ok(g.p[0][0] === 1.5 && g.p[0][1] === 2.5 && g.p[0][2] === 3, 'positions quantized to 0.5u', JSON.stringify(g.p[0]));
  ok(g.p[0][3] === 0.12, 'heading quantized to 0.01rad');
  ok(Number.isInteger(g.ts[0]) && Number.isInteger(g.ts[1]), 'timestamps integer ms');
}

// 5. Legacy compatibility: no `v`, and legacy without `ts`.
{
  const rec = makeRec(10);
  const legacyNoTs = b64urlEncode(JSON.stringify({ t: rec.t, p: rec.p }));
  const g1 = decodeGhost(legacyNoTs);
  ok(g1 !== null, 'legacy payload without v/ts decodes');
  ok(g1 !== null && g1.ts.length === g1.p.length, 'legacy timestamps synthesized');
  ok(g1 !== null && g1.ts[1] - g1.ts[0] === 120, 'legacy cadence is 120ms');
  const legacyWithTs = b64urlEncode(JSON.stringify({ t: rec.t, p: rec.p, ts: rec.ts }));
  ok(decodeGhost(legacyWithTs) !== null, 'legacy payload with ts decodes');
  const v1 = b64urlEncode(JSON.stringify({ v: 1, t: rec.t, p: rec.p, ts: rec.ts }));
  ok(decodeGhost(v1) !== null, 'explicit v1 decodes');
  const v2check = decodeGhostResult(encodeGhost(rec, rec.t));
  ok(v2check.ok && (v2check as { ok: true; ghost: GhostData }).ghost !== null, 'v2 self-decodes');
  ok(JSON.parse(Buffer.from(encodeGhost(rec, rec.t).replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')).v === 2, 'trackless encode stays v2 legacy envelope');
  const stamped = { day: '2026-09-07', course: 'abc123', gen: TRACK_IDENTITY_GEN };
  ok(JSON.parse(Buffer.from(encodeGhost(rec, rec.t, 1650, stamped).replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')).v === GHOST_VERSION, 'identity encode stamps current version');
  const badV = b64urlEncode(JSON.stringify({ v: 99, t: rec.t, p: rec.p, ts: rec.ts }));
  ok(decodeGhost(badV) === null, 'unknown version rejected');
  const r = decodeGhostResult(badV);
  ok(!r.ok && (r as { ok: false; error: string }).error === 'bad-version', 'version failure reason reported');
}

// 6. Strict validation: every malformed class -> null, never throws.
{
  const rec = makeRec(5);
  const good = encodeGhost(rec, rec.t);
  const cases: Array<[string, string | null | undefined]> = [
    ['null', null],
    ['undefined', undefined],
    ['empty', ''],
    ['garbage', '!!!not-base64!!!'],
    ['non-json', b64urlEncode('just a string')],
    ['array-json', b64urlEncode('[1,2,3]')],
    ['missing-p', b64urlEncode(JSON.stringify({ t: 100 }))],
    ['single-sample', b64urlEncode(JSON.stringify({ t: 0, p: [[0, 0, 0, 0]], ts: [0] }))],
    ['short-pt', b64urlEncode(JSON.stringify({ t: 120, p: [[0, 0, 0], [1, 1, 1]], ts: [0, 120] }))],
    ['non-finite', b64urlEncode(JSON.stringify({ t: 120, p: [[0, 0, 0, 0], [null, 1, 1, 0]], ts: [0, 120] }))],
    ['oob-coord', b64urlEncode(JSON.stringify({ t: 120, p: [[0, 0, 0, 0], [9000, 0, 0, 0]], ts: [0, 120] }))],
    ['ts-mismatch', b64urlEncode(JSON.stringify({ t: 120, p: rec.p.slice(0, 2), ts: [0] }))],
    ['non-monotonic', b64urlEncode(JSON.stringify({ t: 120, p: rec.p.slice(0, 2), ts: [100, 50] }))],
    ['finish-mismatch', b64urlEncode(JSON.stringify({ t: 5000, p: rec.p.slice(0, 2), ts: [0, 120] }))],
    ['bad-time', b64urlEncode(JSON.stringify({ t: -5, p: rec.p, ts: rec.ts }))],
    ['oversized', `x`.repeat(9000)],
  ];
  for (const [name, raw] of cases) {
    let threw = false;
    let out: GhostData | null = null;
    try {
      out = decodeGhost(raw);
    } catch {
      threw = true;
    }
    ok(!threw && out === null, `rejects ${name}`);
  }
  ok(decodeGhost(good) !== null, 'control: good payload still decodes');
}

// 7. Sampling: clamping at both ends, midpoint interpolation, wrapped heading.
{
  const g: GhostData = { t: 300, p: [[0, 0, 0, 0], [10, 0, 0, 1], [20, 4, 0, 2]], ts: [0, 100, 300] };
  const before = sampleGhost(g, -50);
  ok(before.x === 0 && before.h === 0, 'holds first pose before start');
  const after = sampleGhost(g, 99999);
  ok(after.x === 20 && after.h === 2, 'holds finish pose after end (never loops)');
  const mid = sampleGhost(g, 50);
  ok(Math.abs(mid.x - 5) < 1e-9, 'midpoint interpolates x');
  const wrap: GhostData = { t: 100, p: [[0, 0, 0, Math.PI - 0.1], [0, 0, 0, -Math.PI + 0.1]], ts: [0, 100] };
  const w = sampleGhost(wrap, 50);
  ok(Math.abs(wrapPi(w.h - Math.PI)) < 0.11, 'heading takes short path across ±π', `h=${w.h}`);
  const irregular: GhostData = { t: 350, p: [[0, 0, 0, 0], [30, 0, 0, 0]], ts: [0, 350] };
  const ir = sampleGhost(irregular, 175);
  ok(Math.abs(ir.x - 15) < 1e-9, 'irregular timestamp span interpolates by time fraction');
}

// 8. Rival identity: friend wins, PB fallback, none, labels.
{
  const fr = makeRec(8);
  const friend = decodeGhost(encodeGhost(fr, fr.t))!;
  const pr = makeRec(6);
  const pb = decodeGhost(encodeGhost(pr, pr.t))!;
  const r1 = resolveRival(friend, pb);
  ok(r1 !== null && r1.kind === 'friend' && r1.racingPB === false, 'shared ghost wins as friend');
  const r2 = resolveRival(null, pb);
  ok(r2 !== null && r2.kind === 'pb' && r2.racingPB === true, 'PB fallback races best');
  ok(resolveRival(null, null) === null, 'no ghosts -> no rival');
  ok(rivalLabel(r1, fr.t) === 'Racing a shared ghost', 'friend label');
  ok(rivalLabel(r2, 0) === 'Racing your daily best ghost', 'pb label');
  ok(rivalLabel(null, 5000) === 'Friend time, no ghost', 'time-only label');
  ok(rivalLabel(null, 0) === 'No rival ghost', 'empty label');
}

// 9. Share URL roundtrip preserves day/time/ghost; malformed never throws.
{
  const rec = makeRec(12);
  const g = encodeGhost(rec, rec.t);
  const url = buildShareUrl('https://x.test', '/canyon', { day: '2026-09-07', timeMs: 34123, ghost: g });
  ok(url.includes('?d=2026-09-07&t=34123&g='), 'share URL scheme ?d=&t=&g=');
  const parsed = parseShareUrl(url);
  ok(parsed.day === '2026-09-07' && parsed.timeMs === 34123, 'day/time roundtrip');
  ok(parsed.ghost !== null && parsed.ghost.t === Math.round(rec.t), 'ghost roundtrip');
  ok(parsed.errors.length === 0, 'clean URL has no errors');
  const bad = parseShareUrl('https://x.test/canyon?d=not-a-day&t=abc&g=!!!');
  ok(bad.day === '' && bad.timeMs === 0 && bad.ghost === null, 'malformed fields fall back safely');
  ok(bad.errors.includes('bad-day') && bad.errors.includes('bad-ghost'), 'malformed fields reported');
  ok(parseShareUrl(null).errors.length > 0, 'null input reports error, never throws');
  ok(parseShareUrl('').errors.length > 0, 'empty input reports error');
  const dropped = buildShareUrl('https://x.test', '/c', { day: '2026-09-07', timeMs: 1000, ghost: 'corrupt!!' });
  ok(!dropped.includes('&g='), 'corrupt ghost dropped from share URL');
  ok(isValidDay('2026-09-07') && !isValidDay('2026-13-40') && !isValidDay(' sept 7 '), 'day validation');
  ok(normalizeTimeMs('abc') === 0 && normalizeTimeMs(-5) === 0 && normalizeTimeMs(99999999) === 0, 'time normalization clamps garbage');
  ok(normalizeTimeMs(34123.9) === 34123, 'time floors to integer ms');
  const text = buildShareText('2026-09-07', 61234, url);
  ok(text.includes('2026-09-07') && text.includes(url), 'share text carries day + url');
}

// 10. URL budget measurement + fit helper.
{
  const rec = makeRec(600);
  const g = encodeGhost(rec, rec.t);
  const len = measureShareUrl('https://x.test', '/canyon-racer', { day: '2026-09-07', timeMs: rec.t, ghost: g });
  const base = measureShareUrl('https://x.test', '/canyon-racer', { day: '2026-09-07', timeMs: rec.t, ghost: '' });
  ok(len - base === g.length + '&g='.length, 'ghost chars dominate URL growth 1:1');
  const fit = fitGhostToUrl(rec, rec.t, 'https://x.test', '/canyon-racer', '2026-09-07', rec.t);
  ok(fit.fits && fit.ghost === g, 'encoded ghost fits practical URL limit');
  console.log(`info - ghost payload ${g.length} chars, full URL ${len} chars, base ${base} chars`);
}

// 11. Share outcomes are truthful with injected deps (no DOM).
{
  const req = { title: 'Canyon Daily', text: 't', url: 'u', hasGhost: true, isFinish: true };
  const shared = await shareRun(
    { requestNativeShare: async () => undefined, copyText: async () => { throw new Error('unused'); } },
    req, true,
  );
  ok(shared.kind === 'shared-with-ghost', 'native share with ghost reports shared-with-ghost');
  const sharedBare = await shareRun({ requestNativeShare: async () => undefined }, { ...req, hasGhost: false }, true);
  ok(sharedBare.kind === 'shared-no-ghost', 'native share without ghost is honest');
  const dismissed = await shareRun(
    {
      requestNativeShare: async () => { throw new DOMException('aborted', 'AbortError'); },
      copyText: async () => undefined,
    },
    req, true,
  );
  ok(dismissed.kind === 'dismissed', 'AbortError maps to dismissed, not failure');
  let copied = '';
  const copyOk = await shareRun({ copyText: async (s) => { copied = s; } }, req, false);
  ok(copyOk.kind === 'copied-with-ghost' && copied === 't', 'clipboard fallback copies full text');
  const copyTime = await shareRun({ copyText: async () => undefined }, { ...req, hasGhost: false, isFinish: false }, false);
  ok(copyTime.kind === 'copied-time-only', 'no-ghost copy says time only');
  const copyFail = await shareRun({ copyText: async () => { throw new Error('denied'); } }, req, false);
  ok(copyFail.kind === 'copy-failed', 'clipboard denial reports copy-failed');
  const noTransport = await shareRun({}, req, false);
  ok(noTransport.kind === 'copy-failed', 'missing clipboard reports copy-failed');
  ok(shouldUseNativeShare(true, true) && !shouldUseNativeShare(false, true) && !shouldUseNativeShare(true, false), 'native share gated on coarse pointer + platform share');
}

// ---- Cycle 4: track-identity regression (old same-day PB on new geometry) ----
const DAY = '2026-09-07';
function idGhost(n: number, id: TrackIdentity): { raw: string; ghost: GhostData } {
  const rec = makeRec(n);
  const raw = encodeGhost(rec, rec.t, GHOST_URL_BUDGET, id);
  const ghost = decodeGhost(raw)!;
  return { raw, ghost };
}
const OLD_COURSE = 'deadbeef';
const NEW_COURSE = 'c0ffee11';
const oldId: TrackIdentity = { day: DAY, course: OLD_COURSE, gen: TRACK_IDENTITY_GEN };
const newId: TrackIdentity = { day: DAY, course: NEW_COURSE, gen: TRACK_IDENTITY_GEN };
const expectedNow = makeExpectedTrack(DAY, NEW_COURSE);

// R1. Same day, generator changed: old PB fails closed, stored data intact.
{
  const { raw, ghost } = idGhost(12, oldId);
  ok(ghost.track !== undefined, 'v3 ghost carries identity');
  const d = resolveRivalIdentity({ shared: null, pb: ghost, expected: expectedNow });
  ok(d.rival === null && d.status === 'mismatch', 'stale same-day PB never races');
  ok(d.notice.length > 0, 'mismatch explains itself', d.notice);
  ok(decodeGhost(raw) !== null, 'stale payload still decodes (nothing deleted)');
}

// R2. Correct checksum races, friend still wins over PB.
{
  const fresh = idGhost(12, newId).ghost;
  const pb = idGhost(10, newId).ghost;
  const d = resolveRivalIdentity({ shared: fresh, pb, expected: expectedNow });
  ok(d.status === 'ready' && d.rival !== null && d.rival.kind === 'friend', 'matched friend races');
  ok(d.notice === '', 'clean match stays silent');
  const solo = resolveRivalIdentity({ shared: null, pb, expected: expectedNow });
  ok(solo.status === 'ready' && solo.rival !== null && solo.rival.racingPB, 'matched PB backfills');
  ok(solo.notice === '', 'plain PB load says nothing');
}

// R3. Stale link + fresh PB: PB races with a one-line notice.
{
  const stale = idGhost(12, oldId).ghost;
  const pb = idGhost(10, newId).ghost;
  const d = resolveRivalIdentity({ shared: stale, pb, expected: expectedNow });
  ok(d.status === 'ready' && d.rival !== null && d.rival.kind === 'pb', 'fresh PB backfills stale link');
  ok(d.notice.includes('different course') && d.notice.includes('best instead'), 'notice names cause + fallback', d.notice);
}

// R4. Wrong day, same geometry: geometry proof wins, ghost races.
{
  const other: TrackIdentity = { day: '2026-09-06', course: NEW_COURSE, gen: TRACK_IDENTITY_GEN };
  const d = resolveRivalIdentity({ shared: idGhost(8, other).ghost, pb: null, expected: expectedNow });
  ok(d.status === 'ready' && d.rival !== null, 'same course races across days');
}

// R5. Legacy ghosts (v2/C1-era, no identity) decode but never auto-race.
{
  const rec = makeRec(8);
  const legacy = decodeGhost(encodeGhost(rec, rec.t))!;
  ok(legacy.track === undefined, 'trackless encode stays identity-less');
  ok(checkIdentity(legacy, expectedNow) === 'legacy', 'legacy verdict distinct from mismatch');
  const d = resolveRivalIdentity({ shared: legacy, pb: null, expected: expectedNow });
  ok(d.rival === null && d.status === 'legacy', 'legacy link never auto-races');
  ok(d.notice.includes('predates'), 'legacy message asks for fresh link', d.notice);
}

// R6. Malformed identity fails at decode with reason, never throws.
{
  const badTrack = b64urlEncode(JSON.stringify({ v: 3, t: 120, p: [[0, 0, 0, 0], [1, 1, 1, 0]], ts: [0, 120], track: { day: DAY, course: 123, gen: 1 } }));
  const r = decodeGhostResult(badTrack);
  ok(!r.ok && (r as { ok: false; error: string }).error === 'bad-track', 'malformed track rejected with reason');
  const noTrack = b64urlEncode(JSON.stringify({ v: 3, t: 120, p: [[0, 0, 0, 0], [1, 1, 1, 0]], ts: [0, 120] }));
  ok(!decodeGhostResult(noTrack).ok, 'v3 without track rejected');
  ok(validTrackIdentity({ day: DAY, course: 'ABCDEF', gen: 1 }), 'hex course accepted');
  ok(!validTrackIdentity({ day: DAY, course: 'zzz!', gen: 1 }), 'non-hex course rejected');
  ok(!validTrackIdentity({ day: DAY, course: 'abc', gen: 1.5 }), 'non-integer gen rejected');
  ok(checkIdentity(null, expectedNow) === 'none', 'null ghost verdict none');
  ok(identityNotice('pb', 'match') === '' && identityNotice('friend', 'none') === '', 'match/none stay silent');
}

// R7. Reload round trip: encode -> store -> decode -> resolve -> sample.
{
  const rec = makeRec(30);
  const stored = encodeGhost(rec, rec.t, GHOST_URL_BUDGET, newId); // localStorage write
  const reloaded = decodeGhost(stored)!; // next-day reload read
  const d = resolveRivalIdentity({ shared: null, pb: reloaded, expected: expectedNow });
  ok(d.status === 'ready' && d.rival !== null, 'reloaded PB resolves ready');
  const rg = d.rival!;
  const spawn = sampleGhost(rg.ghost, 0);
  ok(spawn.x === rg.ghost.p[0][0] && spawn.h === rg.ghost.p[0][3], 'spawn pose samples first point');
  const fin = sampleGhost(rg.ghost, 99999999);
  const last = rg.ghost.p[rg.ghost.p.length - 1];
  ok(fin.x === last[0] && fin.h === last[3], 'finish clamps to last pose, never loops');
  const wrap: GhostData = { t: 100, p: [[0, 0, 0, Math.PI - 0.1], [0, 0, 0, -Math.PI + 0.1]], ts: [0, 100], track: { ...newId } };
  ok(Math.abs(wrapPi(sampleGhost(wrap, 50).h - Math.PI)) < 0.11, 'heading wraps short path after resolve');
}

// R8. Share link round trip preserves identity; oversized/malformed stay safe.
{
  const { raw } = idGhost(30, newId);
  const url = buildShareUrl('https://x.test', '/c', { day: DAY, timeMs: 34123, ghost: raw });
  const parsed = parseShareUrl(url);
  ok(parsed.day === DAY && parsed.ghost !== null, 'link parses with ghost');
  ok(parsed.ghost !== null && parsed.ghost.track !== undefined && parsed.ghost.track.course === NEW_COURSE, 'identity survives URL round trip');
  const d = resolveRivalIdentity({ shared: parsed.ghost, pb: null, expected: expectedNow });
  ok(d.status === 'ready', 'shared link resolves ready end to end');
  const evil = parseShareUrl(`https://x.test/c?d=${DAY}&t=1&g=${'x'.repeat(9000)}`);
  ok(evil.ghost === null && evil.errors.includes('bad-ghost'), 'oversized ghost fails safe in URL');
  const evilDay = parseShareUrl('https://x.test/c?d=not-a-day&t=abc&g=!!!');
  ok(evilDay.ghost === null && evilDay.day === '', 'malformed link never throws, never races');
}

// R9. Deterministic downsampling with identity stamped.
{
  const rec = makeRec(600);
  const a = encodeGhost(rec, rec.t, GHOST_URL_BUDGET, newId);
  const b = encodeGhost(rec, rec.t, GHOST_URL_BUDGET, newId);
  ok(a === b, 'v3 downsample deterministic');
  ok(a.length < GHOST_URL_BUDGET, 'v3 fits URL budget', `len=${a.length}`);
  const g = decodeGhost(a)!;
  ok(g.track !== undefined && g.track.course === NEW_COURSE, 'identity survives downsampling');
  ok(Math.abs(g.p[0][0] - rec.p[0][0]) <= 0.25, 'downsampled start pinned');
  const gl = g.p[g.p.length - 1];
  ok(Math.abs(gl[0] - rec.p[rec.p.length - 1][0]) <= 0.25, 'downsampled finish pinned');
}

// R10. Gen bump invalidates even on checksum collision (defense in depth).
{
  const same: TrackIdentity = { day: DAY, course: NEW_COURSE, gen: TRACK_IDENTITY_GEN + 1 };
  ok(checkIdentity(idGhost(8, newId).ghost, makeExpectedTrack(DAY, NEW_COURSE, TRACK_IDENTITY_GEN + 1)) === 'mismatch', 'gen bump fails closed');
  ok(checkIdentity(idGhost(8, same).ghost, expectedNow) === 'mismatch', 'old build ghost rejected by new gen');
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail > 0) process.exit(1);
