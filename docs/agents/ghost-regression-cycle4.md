# Ghost runtime regression + loop — Cycle 4 handoff

Updated: 2026-09-07. Owned files: `src/ghost.ts`, `src/share.ts`,
`tests/ghost-share.ts`, this doc. No changes to
main/sim/trackgen/config, `dist/`, or `test-dist/`. No deploy, no Sites.
Tests: 117 checks passing via `/tmp` compile only; `tsc --strict` clean.

## Reproduction (exact current format)

Reload flow: `encodeGhost(rec, exactMs, budget, track)` → store string under
`canyon-ghost-${day}` → reload `decodeGhost(stored)` → build
`expected = makeExpectedTrack(day, checksumPoints(points))` →
`resolveRivalIdentity({ shared, pb: reloaded, expected })` →
`sampleGhost(rival.ghost, raceMs)` per frame.

Share flow: `buildShareUrl(origin, pathname, { day, timeMs, ghost })` →
open link → `parseShareUrl(location.search)` → same `resolveRivalIdentity`
with `shared = parsed.ghost` → `sampleGhost` per frame.

Sampling contract (unchanged): binary search on `ts`, clamp both ends
(spawn holds first pose, finish holds last pose, never loops), heading takes
the short path via `wrapPi`. PB-vs-friend: matched friend wins; matched PB
backfills a stale link with a notice; nothing else races.

## Root cause

The daily generator changed (`TRACK_HALF_W` 8 → 11.5, 12-event grammar,
new elevation/acceptance) while `localStorage` kept old same-day PB ghosts
under the same `canyon-ghost-${day}` key. The v2 codec validated coordinates
but carried no course binding, so an old ghost replayed off-track on today's
new geometry — reported as "ghost broken". Same failure applies to shared
links recorded before the change.

## Identity contract (fail closed, implemented in `src/ghost.ts`)

- `TrackIdentity { day, course, gen }`: `course` = `checksumPoints(points)`
  hex from `src/trackgen.ts:475`; `gen = TRACK_IDENTITY_GEN (= 1)`, bumped
  on any geometry-affecting trackgen change; `day` is UX metadata only.
- `GHOST_VERSION = 3`. `encodeGhost(rec, exactMs, budget?, track?)`: with
  `track` → v3 (requires valid identity at decode, `bad-track` otherwise);
  without → v2 envelope (keeps current `main.ts` call sites compiling).
- `validTrackIdentity`, `makeExpectedTrack(day, course, gen?)`,
  `checkIdentity(g, expected)` → `match | mismatch | legacy | none`.
  Match = lowercase hex course equal AND gen equal. Day is never geometry
  proof: same course across days races; same day with changed course fails.
- `identityNotice(kind, verdict)` user strings (empty on match/none).
- `resolveRivalIdentity({ shared, pb, expected })` →
  `{ rival, status: ready | mismatch | legacy | none, notice }`.
  Only `match` races. Stale ghosts are reported, never raced, never deleted.
- Legacy v1/v2/C1 (no `track`) still decode but verdict `legacy` and never
  auto-race. `share.ts` scheme `?d=&t=&g=` unchanged; identity rides inside
  `g` and round-trips through URLs.

## API

- `encodeGhost(rec, exactMs, budget = GHOST_URL_BUDGET, track?)`
- `decodeGhost / decodeGhostResult` (+ `bad-track` reason on v3)
- `sampleGhost`, `downsampleGhost`, `encodedGhostLength`,
  `maxQuantizationError`
- `validTrackIdentity`, `makeExpectedTrack`, `checkIdentity`,
  `identityNotice`, `resolveRivalIdentity`, `RivalDecision / RivalSource`
- Legacy `resolveRival / rivalLabel` kept for the pre-integration `main.ts`
- `share.ts`: `buildShareUrl`, `measureShareUrl`, `parseShareUrl`,
  `fitGhostToUrl`, `shareRun`, `shouldUseNativeShare` — all unchanged

## Integration steps (integrator, `main.ts` only)

1. Import: add `makeExpectedTrack`, `resolveRivalIdentity` from `./ghost`;
   keep `decodeGhost/sampleGhost/rivalLabel` and all `./share` imports.
2. After `acceptDailyTrack(day)`, build
   `expected = makeExpectedTrack(day, track.checksum)` once per load.
3. Decode stored PB and URL ghost as today, then replace `resolveRival`
   with `resolveRivalIdentity({ shared: parsed.ghost, pb: pbGhost, expected })`.
   `decision.rival` drives `ghostCar.visible`/pose; `decision.notice`
   renders in the existing result/banner line next to `rivalLabel(...)`.
4. On `finishRun` PB write, stamp:
   `encodeGhost(sim.rec, finalMs, GHOST_URL_BUDGET, expected)`. Same for the
   share-button finish path so new links carry identity.
5. Never delete `canyon-ghost-*` / `canyon-best-*` on mismatch/legacy —
   fail closed in memory only; the next stamped PB overwrites naturally.
6. Discipline: bump `TRACK_IDENTITY_GEN` in `src/ghost.ts` whenever trackgen
   moves the road (width, grammar, elevation, sampling, acceptance).
7. Re-run `npm test` + build + browser QA per orchestration checklist.

## UX messages

| Case | Banner/notice |
|---|---|
| Ready (friend or PB) | `rivalLabel(...)` as today, no notice |
| Stale link + matched PB | `"<friend notice> Racing your best instead."` |
| Saved best, different course | `Saved best is for a different course.` |
| Saved best, pre-identity | `Saved best predates course checks.` |
| Friend link, different course | `Friend link is for a different course.` |
| Friend link, pre-identity | `Friend link predates course checks — ask for a fresh one.` |

## Thresholds / behavior table

| Check | Rule |
|---|---|
| Same day + changed generator | `mismatch`, never races, stored data intact |
| Correct checksum (+ any day) | `match`, races (`ready`) |
| Wrong-day ghost, same course | races (day is not geometry proof) |
| Reload (store → decode → resolve → sample) | `ready`; spawn = first pose, finish clamped |
| Shared link round trip | identity survives `buildShareUrl`/`parseShareUrl`, resolves `ready` |
| Legacy v1/v2/C1, no identity | decodes, verdict `legacy`, never auto-races |
| Malformed v3 / bad identity | `bad-track`, never throws |
| Oversized URL (`g` > 8192 raw) | `bad-ghost`, never races |
| Downsampling | deterministic stride-doubling (cap 16), endpoints pinned, ≤ 0.25u start/finish error, v3 600-sample payload < 1650 budget |
| Gen bump with same checksum | `mismatch` (defense in depth) |

## Risks / notes

- Until `main.ts` stamps `expected`, new recordings stay v2/`legacy` and
  will not auto-race after integration — wire step 4 in the same pass as
  step 3 to avoid a "no rival" window.
- `course` must be the exact `checksumPoints` hex of the accepted daily
  points; any normalization (rounding, reordering) breaks matching — pass
  the string through untouched and compare case-insensitively.
- Downsampled ghosts remain rivals only, never timing proof.
- `GHOST_MAX_RAW_LEN` (8192) still guards query strings before decode.
- One owned-file assertion predates this cycle: trackless `encodeGhost`
  stamps v2, not `GHOST_VERSION` — intentional until the integrator passes
  identity everywhere.
