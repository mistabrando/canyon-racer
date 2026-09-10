# Cycle 9 ghost / reward-loop QA review (read-only)

Status: review only. No implementation, config, `dist/`, or `test-dist/` edits made by this pass
(apart from the pre-existing `npm test` artifacts already in the tree). Probes confined to reading
source/tests plus the earlier `npm test` output stream. No deployment, no Sites calls.

Sources read: `MUSE_ORCHESTRATION.md`, `docs/TRACKMANIA_REFERENCE.md`,
`docs/agents/addiction-loop-cycle4.md`, `docs/agents/ghost-share.md`,
`docs/agents/ghost-regression-cycle4.md`, `src/main.ts`, `src/ghost.ts`, `src/share.ts`,
`src/loop.ts`, `src/sim.ts` (partial), `src/trackgen.ts` (partial), `index.html`, `src/style.css`,
`tests/ghost-share.ts`, `tests/loop-ui.ts`, `tests/harness.ts` (partial).

## 1. Flows reproduced (code-path walkthrough, current behavior)

### 1.1 PB ghost flow (same-day reload)
1. `finishRun()` in `src/main.ts` writes `canyon-ghost-${day}` via
   `encodeGhost(sim.rec, finalMs, GHOST_URL_BUDGET, expectedTrack)` only when the run is a new best.
2. On boot, `decodeGhost(localStorage.getItem(...))` loads it (needs `p.length > 1`).
3. `expectedTrack = makeExpectedTrack(day, daily.checksum)` is built from `acceptDailyTrack(day)`.
4. `resolveRivalIdentity({ shared: parsed.ghost, pb: pbGhost, expected: expectedTrack })` decides.
5. Matched PB (`course` checksum equal, `gen` equal, day ignored) races with `racingPB: true`;
   `ghostCar.visible = !!sharedGhost` is set in `startRun()`; per-frame pose is
   `sampleGhost(sharedGhost, ghostMs)` (binary search on `ts`, clamps both ends, holds finish, never loops).
6. Verdict: matched PB backfills silently (`notice === ''`); stale/legacy PB never races and reports a notice.

Result: correct, fail-closed, honest. Legacy (v1/v2/C1, identity-less) payloads still decode but never auto-race.

### 1.2 Friend ghost flow (share link `?d=&t=&g=`)
1. `parseShareUrl(location.search)` extracts `{ day, timeMs, ghost }` and never throws.
2. Same `resolveRivalIdentity` call: a course-matched friend ghost wins over a matched PB.
3. Stale link + fresh PB: PB races with notice `"<friend reason> Racing your best instead."`.
4. Clean match stays silent; banner path is `rivalLabel(rival, sharedTime)` on the menu panel.
5. Finish/menu share embeds identity: finish share encodes the current recording with `expectedTrack`;
   menu share re-embeds the stored PB string.

Result: precedence + backfill + silence-on-clean-match all verified in `tests/ghost-share.ts` (R2, R3, R7, R8).

### 1.3 Course-identity mismatch
- `checkIdentity` returns `match | mismatch | legacy | none`. Match requires equal hex `course` checksum
  (case-insensitive) AND equal integer `gen`; day is deliberately ignored (R4: same geometry races across days).
- `TRACK_IDENTITY_GEN` bump invalidates same-day PBs even on checksum collision (fail-closed).
- Malformed identity (`bad-track`, v3-without-track, non-hex course, non-integer gen) is rejected at decode
  with a reason string, never thrown.
- User notices are plain sentences (`identityNotice`), logged once to console as `[canyon-debug] rival ...`.
- Stale payloads still decode (nothing is deleted), they just never race.

Result: the strongest part of the loop. Geometry proof works; failure mode is a sentence, not a crash.

### 1.4 Split / delta timing
- Splits: `splitPositions(events)` picks 3 grammar-derived arc positions (~1/4, ~1/2, ~3/4), mapped to sample
  indices once per boot. `runSplits` resets in `startRun()`. Crossing rule is `info.sIdx >= splitIdx[k]`;
  toast shows `S{k} {gap or absolute}` and auto-clears after 1500 ms. Single `splitEl` slot, sequential, no overlap.
- Live delta: `ghostTimeAt(sharedGhost, sim.px, sim.pz)` finds the nearest ghost sample in x/z, compares
  `sim.raceMs - gt`, renders `gapText(d, info.spd, label)` (`-0.31 / +0.42` plus `25m vs PB/FRIEND`).
  Blank whenever no matched ghost races or lookup returns -1. Never fabricates a target.
- Classes `ahead` (green) / `behind` (red) pair color with an explicit sign, so not color-alone.

Result: readable and truthful, but approximate by construction (see F1 below).

### 1.5 Instant retry
- `Enter` on menu starts full countdown; `Enter` on finish calls `startRun(true)`.
- `drivebtn` mirrors this (`startRun(state === 'finish')`); finish panel focuses RETRY.
- `R` / touch `resetbtn` call `doRespawn()`, which is currently a full restart (`startRun(true)`), not the
  `simRespawn` snapshot (+3000 ms) — the snapshot path is kept only for the headless autopilot.
- Countdown budget: first GO 3.1 s (`3-2-1-GO`), retries 0.7 s (`READY-GO`) via `hasRunOnce` session flag.
- `placeAt(0)` + `resetMotion` + `runSplits` reset make retries deterministic.

Result: retry is one input and fast. The missing piece is session-liveness of the rival (see F2).

### 1.6 Finish verdict
- Guard `if (state !== 'run') return` keeps finish atomic; `acc = 0`, motion snapped, `snapView = true`.
- `finalMs = Math.round(sim.raceMs)`; PB write is best-only; ghost write is best-only.
- Title: `NEW BEST!` vs `FINISH!`. Line: `{time} · {by X | first finished run! | +X vs best} · best {BEST}`
  plus optional `· friend {FRIEND}`. RETRY button is focused for keyboard users.

Result: verdict math matches stored best; no tick-after-finish (harness asserts frozen `raceMs`/`rec`).

### 1.7 Sharing
- `buildShareUrl` drops corrupt ghosts, never throws. `buildShareText` is `day + time + url`.
- `shareRun` with injected deps reports truthfully: `shared-with-ghost | shared-no-ghost |
  copied-with-ghost | copied-time-only | dismissed | copy-failed`. `AbortError` maps to `dismissed`.
- Native sheet only when coarse pointer + `navigator.share` present; otherwise clipboard; clipboard-denied
  yields `copy-failed` with a manual-copy message.

Result: truthful outcomes, no dead buttons, no crash path.

### 1.8 Malformed URLs
- `parseShareUrl` error set: `empty | bad-day | bad-ghost | parse-failed`. `decodeGhostResult` reasons:
  `empty | not-string | too-long | bad-encoding | bad-shape | bad-version | bad-time | bad-points |
  bad-timestamps | legacy-finish-mismatch | finish-mismatch | bad-track`.
- Oversized input is rejected before parse (`GHOST_MAX_RAW_LEN = 8192`); unknown future `v` fails closed.
- Bad `?d=` falls back to today's date string; bad `?g=` yields `ghost: null` + `bad-ghost` error.
- Boot path only surfaces the rival notice; a bare `bad-day` with no ghost shows today's menu with no warning.

Result: never crashes, never races garbage. One messaging gap (see F5).

## 2. Is the retry-PB-ghost-improve loop understandable and compelling?

Yes, with one structural break. What works:
- One daily course, one seed, deterministic physics, exact finish ms — comparisons feel fair, so improvement
  credits execution (matches the TrackMania brief and the cycle-4 loop analysis).
- Retry is one keypress with a 0.7 s turnaround; countdown tax on failure is ~gone.
- Live delta + 3 splits + visible rival car answer "am I up or down, and where?" every run.
- Finish verdict names the outcome (`NEW BEST! by X` vs `+X vs best`) and offers RETRY already focused.
- Share links carry the same course plus a valid ghost; outcomes are honest; legacy links degrade gracefully.
- No dark patterns found: no streak-threat copy, no currency/stamina/unlocks, no auto-retry, no countdown
  blocking quit, no account/network gate before first GO, no inflated claims. Session-length pressure is absent
  by design (anonymous daily, local PB only).

What breaks the loop: the rival is frozen at page load (F2). A player who sets a new best and hits RETRY
races the *old* ghost again until they reload. The "beat yourself, immediately rematch" fantasy — the core
of the genre grammar — does not resolve inside a session. Everything else is loop-ready; this one gap makes
the loop feel stale exactly at the emotional peak (right after a new best).

## 3. Ranked bugs / friction (severity, then fix cost)

- F1 (medium, target honesty): delta/split comparison is nearest-position-in-x/z, ignoring y, direction, and
  branch overlap. Off-course excursions, stacked loops/bridges, and downsampled rivals (stride up to 16,
  ~2 s gaps) can flip the sign or attach the wrong ghost timestamp. Effect: occasional "ahead" while visibly
  behind (or vice versa). Mitigation today: blank-on-unusable and honest timestamps bound the damage, but the
  comparison is positional, not time-aligned. Fix direction (not in this pass): gate lookup by track index
  window + heading agreement, or compare against ghost time at the player's current split segment only.
- F2 (high value, medium cost): session rival is boot-pinned. `rival`/`sharedGhost`/`rivalNotice` are computed
  once; `finishRun` writes a new PB + ghost but never re-resolves; `startRun` only toggles visibility from the
  boot value. After a new best, retries race stale data and the menu notice is stale until reload. This is the
  top loop fix: re-resolve from `localStorage` after each PB write and before each `startRun`.
- F3 (medium, design tax): `R` is full-restart-only. Every mistake anywhere costs the whole run; there is no
  cheap mid-run recovery (the `simRespawn` +3000 ms snapshot exists but is player-unreachable). TrackMania
  grammar expects both: instant respawn *and* instant restart. Current choice is unambiguous but maximally
  punishing on a ~34 s daily, which will read as loop tax on hard days. Fix direction: restore `R` as
  snapshot respawn mid-run and keep a separate full-restart binding, or document the one-reset decision.
- F4 (low): share overwrites the verdict line. `sharebtn` writes `outcome.message` into `presult`, destroying
  the finish math until the next finish. A dedicated share-status line (or restoring verdict after copy) keeps
  both truths visible.
- F5 (low): silent day fallback. `?d=garbage` boots today's track with no user-visible warning; combined with
  a mismatched ghost the player sees "different course" without learning the day was rejected. Surface the
  existing `bad-day` parse error in the menu line.
- F6 (low): HUD type sizes under the loop-doc floor. `#delta` 15 px / `#split` 13 px vs the specified
  >= 16 px tabular numerals for at-speed legibility. Sign+color redundancy is already correct; size is the gap.
- F7 (low): menu `presult` concatenation (`best · friend · notice · rivalLabel`) is one long line and can
  overflow narrow mobile widths. Two-line layout (result line + rival/notice line) would hold up better.
- F8 (info): `Enter` during countdown/menu transitions is ignored except on the exact `menu`/`finish` states;
  rapid double-Enter is safe (idempotent reset) but there is no `Esc`-to-menu path from `finish`. Not a bug,
  just a missing affordance worth a decision.

Non-issues explicitly checked and cleared: ghost finish hold (never loops), heading short-path wrap,
monotonic `ts` across respawn gaps, atomic finish ms, URL budget compliance, `GHOST_MAX_RAW_LEN` guard,
unknown-version fail-closed, `AbortError`-as-dismissed, clipboard-denied truthfulness.

## 4. Minimal next loop (smallest change that closes the loop)

1. Session-live rival: after each PB write in `finishRun`, re-read the stored ghost, re-run
   `resolveRivalIdentity` against `expectedTrack`, update `rival`/`sharedGhost`/`rivalNotice`, and let the next
   `startRun` race the new best with no reload. Keep all fail-closed semantics unchanged.
2. Split delta onto the same ghost the car shows (already true) and gate `ghostTimeAt` misses to blank
   (already true); no new signals, no medals, no counters in this slice.
3. Preserve verdict across share (F4) in the same pass so the reward moment survives the share moment.
4. Decide R semantics explicitly (F3): either restore snapshot-respawn or keep restart-only as a documented
   genre decision; do not leave two meanings on one key.

Out of scope for this slice (tracked, not started): medals/targets, attempt counters, history, share-story
upgrades, lookahead/gap-threshold tuning for F1, mobile touch-size audit, any deployment.

## 5. Acceptance tests (deterministic headless + browser)

Headless conventions follow the existing suites: seeded days, synthetic recs, no DOM except thin presenter
asserts, `/tmp` compile output only. Browser checks are manual against `vite preview` of the checked-in build.

Deterministic (headless) gates:
- T1 retry latency: `finishRun` -> next `run` state passes through `startRun(true)` with `cdLen <= 0.8 s`,
  `resetRun` called, menu never shown. Fails if the 3.1 s countdown fires on retry.
- T2 one-input retry: synthetic `Enter` in `finish` restarts; `R` behavior matches the documented semantic
  (restart-only or respawn-per-spec); quitting to menu never touches stored best/ghost.
- T3 session-live rival: write PB, finish faster, assert the next resolved rival is the new ghost with
  `racingPB: true` and no reload in between; stale boot ghost is never raced after the update.
- T4 delta correctness: scripted run vs recorded PB flips sign exactly at the overtake tick; delta at finish
  equals `finalMs - bestMs` to the ms on a time-aligned (non-spatial) oracle.
- T5 split integrity: split indices strictly increasing, within `[0, n)`, stable per seed; split times
  monotonic; missing PB falls back to a labeled time-only display (never a fabricated rival).
- T6 identity gating: same-day old-`gen` PB fails closed with a notice; matched friend wins; stale link +
  fresh PB backfills with the two-clause notice; legacy decodes but never races; malformed identity yields
  `bad-track` without throwing.
- T7 finish verdict: title, margin line, and stored best/ghost match exactly; split deltas sum to final delta
  within one tick; no ticks fire after `finished`.
- T8 share story: finish share URL contains the current ghost and fits budget; corrupt ghost degrades to
  time-only with a truthful outcome kind; `AbortError` maps to `dismissed`.
- T9 malformed URLs: each corrupt query (`bad-day`, `bad-ghost`, oversized `g`, unknown `v`) parses without
  throwing, races nothing, and surfaces (or deliberately suppresses, per spec) exactly one user-facing line.
- T10 no dark patterns (static audit): no streak-threat copy, no auto-retry, no quit-blocking countdown,
  no network/account gate before first GO, no stamina/currency/unlock language.
- T11 perf: medal/split derivation (when medals land) under 50 ms across a 40-seed sweep; HUD path adds no
  per-step allocations.

Browser (manual, desktop + mobile viewports):
- B1: load daily, finish a run, hit RETRY via `Enter`, button, and touch target; next GO in <1.5 s keyboard,
  <2 taps touch; quick countdown reads READY-GO, never 3-2-1.
- B2: with PB set, beat it, RETRY without reload, confirm the rival car is the new best (not the old line).
- B3: open a friend link, confirm ghost car + FRIEND delta; open a stale-day link, confirm the notice +
  PB backfill (or clean time-only fallback with named target).
- B4: open malformed links (bad day, truncated `g`, unknown version); page boots, menu explains, nothing races.
- B5: share from finish and from menu on desktop (clipboard) and mobile (native sheet where available);
  each outcome message matches the truthful-outcome table; verdict remains readable after sharing.
- B6: delta/split legibility at speed on both viewports; sign readable without color; toasts clear in <=1.5 s
  and never cover the road center.

Machine-readable gate list (valid JSON):

```json
{
  "suite": "cycle9-loop-acceptance",
  "noDeploy": true,
  "headless": ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11"],
  "browser": ["B1", "B2", "B3", "B4", "B5", "B6"],
  "stopShip": ["T3", "T6", "T7", "B2", "B4"],
  "budgets": {"retryCountdownS": 0.8, "finishToGoKeyboardS": 1.5, "splitToastS": 1.5, "ghostUrlChars": 1650}
}
```

## 6. QA sign-off

Loop verdict: understandable, fair, and free of dark patterns; compelling except for the session-stale rival
(F2), which is the single highest-leverage fix. Identity/mismatch handling, atomic finish, truthful share
outcomes, and malformed-URL safety are in good shape. Spatial delta approximation (F1) and restart-only `R`
(F3) are the next judgment calls after F2. No deployment performed or requested.
