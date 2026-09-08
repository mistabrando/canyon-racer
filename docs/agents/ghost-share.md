# Ghost/Share worker handoff

Updated: 2026-09-07. Owned files: `src/ghost.ts`, `src/share.ts`,
`tests/ghost-share.ts`. No changes to `sim.ts`, `main.ts`, `trackgen.ts`,
`harness.ts`, configs, `dist/`, or `test-dist/`. No deployment.

## What was built

- `src/ghost.ts` — deterministic versioned ghost codec + playback + rival identity.
  Pure TS, no DOM/network. Byte-compatible with the legacy `sim.ts` payloads
  in both directions (verified: new→old, old→new, legacy no-`ts` → both).
- `src/share.ts` — share-URL build/parse under the existing `?d=&t=&g=` scheme,
  URL budget helpers, and truthful share-outcome flow with injected platform
  effects (`ShareDeps`) so results are unit-testable without a browser.
- `tests/ghost-share.ts` — 78 standalone asserts, all passing under plain node
  via temporary compiled output in `/tmp` only.

## API signatures

Ghost (`src/ghost.ts`):

- `encodeGhost(rec: GhostRec, exactMs: number, budget = 1650): string`
- `decodeGhost(raw): GhostData | null` — strict, never throws; accepts v2,
  v1/v0-legacy (no `v`), and legacy without `ts` (120 ms cadence assumed).
- `decodeGhostResult(raw): { ok: true; ghost } | { ok: false; error }` with
  reasons: `empty | not-string | too-long | bad-encoding | bad-shape |
  bad-version | bad-time | bad-points | bad-timestamps | legacy-finish-mismatch
  | finish-mismatch`.
- `sampleGhost(g, ms): GhostPose` — binary search on `ts`, clamps both ends
  (finish held, never looped), short-path heading via `wrapPi`.
- `downsampleGhost(rec, step)`, `downsampleStepForLength(n, len)`,
  `encodedGhostLength(rec, exactMs)`, `maxQuantizationError()` (= 0.25u).
- `resolveRival(shared, pb): RivalGhost | null` — URL ghost wins (`friend`),
  else stored PB (`pb`, `racingPB: true`); `rivalLabel(rival, sharedTimeMs)`.
- Constants: `GHOST_VERSION = 2`, `GHOST_URL_BUDGET = 1650`,
  `GHOST_MAX_SAMPLES = 4000`, `GHOST_COORD_BOUND = 5000`,
  `GHOST_MAX_TIME_MS = 3600000`, `GHOST_MAX_RAW_LEN = 8192`.

Share (`src/share.ts`):

- `buildShareUrl(origin, pathname, { day, timeMs, ghost }): string` — drops
  corrupt ghosts, never throws. `measureShareUrl(...)` for budgeting.
- `parseShareUrl(hrefOrSearch): ParsedShare` (`{ day, timeMs, ghost,
  ghostRaw, errors }`) — never throws; reports `bad-day | bad-ghost |
  empty | parse-failed`.
- `fitGhostToUrl(rec, exactMs, origin, pathname, day, timeMs, maxUrlLen)` —
  `{ ghost, fits, urlLen }`.
- `buildShareText(day, ms, url)`, `fmt(ms)` — same output as `sim.ts`.
- `shouldUseNativeShare(coarsePointer, hasNativeShare)`.
- `shareRun(deps, req, nativeShareAttempt): Promise<ShareOutcome>` — kinds:
  `shared-with-ghost | shared-no-ghost | copied-with-ghost |
  copied-time-only | dismissed | copy-failed`. `AbortError` → `dismissed`;
  messages match the current game copy exactly.

## Measurements (synthetic 120 ms-cadence recordings)

| Samples | Payload chars | Decoded samples | Full URL chars |
|---|---|---|---|
| 20 | 616 | 20 | — |
| 100 | 1591 | 51 | — |
| 283 (~34 s daily) | 1236 | 37 | — |
| 600 | 1360 | 39 | 1411 (base 48) |

- Quantization error ≤ 0.25u position, ≤ 0.005 rad heading (exact bound).
- Playback deviation after downsampling (283-sample daily-like rec):
  max 0.75u vs original polyline — smooth for a rival car, not for timing.
- Ghost chars add to URL length 1:1 plus the 3-char `&g=` separator.

## Migration steps (for integrator, in `main.ts` only)

1. Replace `decodeGhost/encodeGhost/sampleGhost/buildShareText` imports from
   `./sim` with `./ghost` + `./share` (signatures are drop-in compatible).
2. Replace the inline `?d=&t=&g=` URL building in the share-button handler
   with `buildShareUrl(location.origin, location.pathname, { day, timeMs,
   ghost })`; replace query parsing with `parseShareUrl(location.search)`.
3. Replace the inline rival selection with `resolveRival(sharedGhost,
   pbGhost)` and banner text with `rivalLabel(...)`.
4. Replace the inline `navigator.share` / `clipboard.writeText` flow with
   `shareRun({ requestNativeShare: (d) => navigator.share(d), copyText: (s)
   => navigator.clipboard.writeText(s) }, req, shouldUseNativeShare(coarse,
   typeof navigator.share === 'function'))` and render `outcome.message`.
5. Keep `sim.ts` ghost functions until all callers migrate, then delete them
   (or keep as thin re-exports for one release). Legacy links keep working:
   the new decoder accepts unversioned and `ts`-less payloads.
6. Re-run full suite + build + browser QA per the orchestration checklist.

## Risks / notes

- Downsampled ghosts (stride up to 16, ~2 s gaps on long runs) are valid
  rivals but not frame-accurate; never use them for timing or validation.
- `GHOST_MAX_RAW_LEN` (8192) rejects abusive query strings before b64/JSON
  parsing; raise only if legitimate payloads approach it (current max ~1.6k).
- Unknown future `v` values fail closed (`bad-version`); bump
  `GHOST_VERSION` handling deliberately, never silently.
- `shareRun` without injected `copyText` reports `copy-failed` truthfully
  instead of throwing — callers must always wire real deps in production.
- Tests import `../src/ghost.js` / `../src/share.js` (nodenext style, matching
  the existing harness) and compile to `/tmp` only; `tsconfig.tests.json`
  is untouched so `npm test` is unaffected.
