# Addiction loop — cycle 4 (research, no implementation)

> Read-only research. No implementation or shared-config changes in this cycle.
> Scope: what makes the TrackMania / TrackMania² Canyon time-attack loop compelling,
> what Canyon Racer already has, what is missing, and the minimal loop to add —
> tuned for an anonymous Wordle-style daily racer. Mastery, clarity, voluntary replay.
> No manipulative dark patterns.

## 1. What makes the TrackMania loop compelling (synthesis)

### 1.1 Failure is cheap, retry is instant
The core compulsion is density of attempts: short runs plus a near-zero cost of
failure. TrackMania's design norm is one-input instant respawn/restart from anywhere
— keyboard `R`/`Backspace`-style reset is part of the genre grammar, and modern
TrackMania (2020) exposes instant respawn and instant map restart as first-class
bindings. Reviews single this out: "restarting a race only takes the touch of a
button, so you'll never feel like you've wasted much time" (GameSpot, Canyon review).
Short attempt length × instant retry = dozens of learning iterations per session.

### 1.2 You always race *something*: PB ghost, rivals, medals
- **PB / rival ghosts.** Ghosts turn an abstract timer into a visible opponent.
  TrackMania's replay/ghost documentation treats personal-best, leaderboard, and
  competitor ghosts as the standard way to watch, learn, and compare runs.
- **Medals as fixed targets.** Author / gold / silver / bronze medals give every
  map four skill-indexed goals independent of the live leaderboard, so a mid-pack
  player still has a concrete next target. TrackMania 2020 formalized this further
  with campaign medals plus regional rankings per map.
- **Visible deltas and splits.** Checkpoint splits and a live delta against PB/medal
  pace answer the only question that matters mid-run: "am I up or down, and where?"
  Third-party overlays (e.g. live checkpoint-time widgets) exist precisely because
  the base need — per-segment feedback — is so strong.

### 1.3 Corners are line-optimization puzzles, learned from repetition
Canyon's drift is committed *before* the corner: entry line, timing, slip, exit
alignment. Mastery comes from repeating the same geometry with slightly different
lines, not from grinding stats. Canyon's car was deliberately redesigned around
drifting (GameSpot: "weighty and responsive, powersliding around corners is
incredibly gratifying"), which makes execution differences legible: you can feel
why the ghost pulled away at corner exit.

### 1.4 Milliseconds matter because feedback is readable
The loop only works if time loss is attributable: consistent physics, fixed car,
same track for everyone. Then PB deltas, splits, and ghosts are *fair* comparisons
and improvement is credited to execution. Spectacle (jumps, loops, canyon vistas)
punctuates precision without deciding results.

### 1.5 Daily / community comparison gives a shared puzzle
The modern loop extends time-attack socially without head-to-head racing:
- **Track of the Day / Cup of the Day** (TrackMania 2020): one shared map per day,
  leaderboard during the day, then a knockout cup in the evening. Same track,
  same day, everyone compares.
- **Wordle-style async sharing** (Canyon Racer's bet): one seed per day, shareable
  ghost links, no accounts. The comparison is opt-in and skill-indexed rather
  than ranked-ladder pressure.

### 1.6 Mastery without grind
Nothing in the loop gates progress behind unlocks, currency, or stamina. The only
progression is the player's own line catalog. Retention comes from *voluntary*
"one more run," not from appointments, streak threats, or loot.

## 2. Current-game audit (Canyon Racer, 2026-09-07)

Verified against `src/main.ts`, `src/sim.ts`, `src/share.ts`, `src/ghost.ts`,
`src/trackgen.ts`, `index.html`, `src/style.css`.

### Already present
- Daily procedural sprint (`acceptDailyTrack(day)`), one seed per day.
- Deterministic sim (fixed timestep, exact finish-plane crossing, partial-tick
  `raceMs`), shareable deterministic course + ghost (`?d=&t=&g=`).
- PB ghost persisted per day in `localStorage`; URL ghost (friend) wins over PB
  via `resolveRival`; ghost playback holds finish pose, never loops.
- Basic HUD: big timer, BEST/friend line, track-progress bar, DRIFT/STUCK hints.
- Countdown → run → finish state machine; finish panel with DRIVE/SHARE.
- Wordlestyle share flow (`shareRun` with honest outcomes:
  shared/copied/dismissed/copy-failed; legacy `ts`-less links accepted).
- Cheap mid-run respawn snapshots exist in sim (`simRespawn`, +3000 ms).

### Missing loop pieces (ranked by leverage)
1. **No instant retry.** `R` = respawn snapshot (+3 s), and full restart requires
   clicking DRIVE through menu/panel + 3.1 s countdown. No `Enter`/tap-to-retry
   from the finish panel, no quick-restart key mid-run. This is the single
   biggest loop tax: every failed run pays menu + countdown instead of one input.
2. **No live delta / splits.** HUD shows absolute time and a position progress bar
   only. No checkpoint/split times, no ± delta vs PB or friend ghost, no
   sector coloring. Players cannot tell *where* time is won or lost.
3. **No fixed targets (medals).** Only PB/friend time exists. A first-time player
   with no PB and no friend link has no goal other than "finish."
4. **Ghost is present but mute.** Rival renders, but there is no "ahead/behind"
   readout, no gap in meters/seconds, no start-line stagger context, no toggle.
5. **Finish panel is a dead end.** Shows final/best/friend times + SHARE, but no
   delta breakdown, no "new best by X," no one-press retry, no medal earned line.
6. **No run-over-run learning aids.** No per-run split history, no best-segment
   tracking, no "lost 0.4 s in sector 2" summary.
7. **Daily framing is thin.** `#day` label + `#best` line only. No attempt counter,
   no "day ends in H:MM," no local daily history/streak-free calendar, no
   community comparison beyond manual link exchange.
8. **No countdown skip / rolling start option.** 3.1 s countdown on every attempt
   multiplies the retry tax (deliberate once per session, punishing per retry).

## 3. Prioritized minimal loop (anonymous daily racer)

Principles: one input to retry; always race something; always know if you are up
or down; first session ends with a goal, not a number; nothing punishes stopping.

### P0 — close the retry loop (highest leverage, smallest scope)
- **P0-1. One-input instant restart.** `Enter` / `R`-long-press / tap-DRIVE:
  from `finish` panel and from `run`, restart immediately. Skip menu entirely.
- **P0-2. Skip or shorten countdown on retry.** First run of session: full 3-2-1-GO.
  Retries: short "READY—GO" (~0.6 s) or rolling start at `START_SPEED`. Keep the
  sim's `resetRun` deterministic; only the presentation changes.
- **P0-3. Finish panel retry affordance.** `DRIVE` button becomes `RETRY (Enter)`
  on finish; focus it by default so keyboard/tap both fire instantly.
- **P0-4. Anti-frustration guard.** Never auto-restart; never punish quitting
  mid-run; `R` respawn keeps its +3 s honesty (no hidden time rewriting).

### P0 — always know if you are up or down
- **P0-5. Live delta readout.** One compact element under the timer:
  `+0.42` / `-0.31` vs current target (PB if exists, else friend, else medal —
  priority documented in §4). Color + sign only; no flashing, no sound yet.
- **P0-6. Split points from existing geometry.** Derive 3–4 splits from trackgen
  corner grammar (e.g. after events 3/6/9 + finish). No new track format: store
  split indices alongside the seed. Show `S1 +0.12 / S2 -0.20` transiently.
- **P0-7. Ghost gap.** Distance (m) + time (s) vs rendered rival, sampled from
  the same ghost `ts` already used for playback. "GHOST +12 m" is enough.

### P1 — always race something (targets)
- **P1-1. Daily medals from the seed.** Compute author/gold/silver/bronze bands
  deterministically from track stats (length, est. time, corner count) — e.g.
  `estTimeS` already emitted by `acceptDailyTrack` × fixed factors. Same for
  everyone that day, no server. Show next-medal target in menu and live
  ("GOLD 1:12.40 · +0.8").
- **P1-2. Finish panel verdict.** `NEW BEST by 0.63 · GOLD secured ·_next: AUTHOR +1.9`
  plus mini split table (this run vs best, per split). One glance = next goal.
- **P1-3. First-run onboarding target.** With no PB and no friend link, the menu
  offers the bronze/silver medal as the rival ghost pace ("CHASE SILVER"), so
  run #1 already has an opponent. Implement as a synthetic target pace, not a
  fake ghost car.

### P2 — daily ritual without pressure
- **P2-1. Attempt counter + session summary.** "ATTEMPT 7 · BEST 1:13.02 · GOLD +0.4".
  Local only, no streak threats, no loss framing.
- **P2-2. Share carries the story.** Extend share text: `day · time · medal · splits
  · attempts` (keep URL ghost budget intact; story lives in text, not query).
- **P2-3. Local day history.** Tiny calendar strip of past dailies (best time +
  medal), stored locally. No streaks, no notifications, no FOMO copy.

### Explicit non-goals (anti-dark-pattern line)
No streak counters that threaten loss, no energy/stamina, no loot boxes, no
push/email prompts, no leaderboard anxiety copy ("you dropped to #412"), no
autoplay/restart, no cosmetic upsells, no fake rivals presented as real people,
no hidden time adjustments. Medals are fixed and fair; quitting is always free.

## 4. Concrete UI / state transitions

### States (extends current `menu | countdown | run | finish`)
- `menu` (first visit or explicit): title, medal ladder for today
  (`AUTHOR/GOLD/SILVER/BRONZE` with times), target selector (PB > friend > medal),
  big `DRIVE (Enter)`. Sub-copy stays: controls hint.
- `countdown`: full 3 s only on first run; retries use `quickstart` variant
  (same state, `countdownT` scaled; sim untouched).
- `run` HUD (additive, topbar unchanged):
  - `#time` (existing) + `#delta` pill (new, `+0.42`/`-0.31`, tabular nums).
  - `#split` toast (new, transient 1.2 s on split cross: `S2 −0.20 vs BEST`).
  - `#rival` chip (extends `#best` line: `RIVAL PB −12 m`).
  - `#progress` bar (existing) + split ticks (CSS only, positions from split
    indices — no canvas work).
- `finish` panel (replace current single line):
  - Line 1: `1:12.39 — NEW BEST by 0.63` (or `+0.21 off best`).
  - Line 2: `GOLD secured · next AUTHOR +1.9`.
  - Line 3 (small): `S1 +0.1 S2 −0.4 S3 −0.3` (this run vs best).
  - Buttons: `[RETRY (Enter)] [SHARE]` — retry focused by default.
- Transitions:
  - `menu --DRIVE/Enter/tap--> countdown --GO--> run --finish--> finish
    --RETRY/Enter--> quickstart --GO--> run` (menu never reappears on retry).
  - `run --R--> respawn snapshot` (unchanged, +3 s honest) `; run --Esc--> menu`
    (abandon is free, best untouched).
  - Share sheet unchanged (`shareRun` outcomes), text gains medal/splits.

### Target priority (documented, deterministic)
1. Friend ghost (URL `?g=`), if valid. 2. Else stored daily PB. 3. Else selected
   medal pace. The HUD names the target (`vs FRIEND` / `vs BEST` / `vs GOLD`)
   so comparisons are never ambiguous.

## 5. Metrics (local-first, no tracking infra)

North star: **voluntary replay depth** — attempts per day per player, measured
locally (counts only, no exfiltration).

- Loop health: attempts/day (median), % sessions with ≥3 attempts,
  retry latency (finish→next-GO seconds; goal <1.5 s on retry).
- Learning signal: best-improvement per session (s), split variance narrowing
  across attempts, % players beating their attempt-1 best at least once.
- Target signal: medal conversion (% finishing ≥ bronze; % with a next-medal
  goal set), share rate per finish, share-with-ghost success rate.
- Friction flags: menu dwell before run 2+, countdown abandon rate, R-respawn
  vs full-restart ratio (respawn dominance ⇒ track pain point, not loop win).
- Guardrails: session length distribution (watch for compulsive tails —
  design must not optimize raw time-spent); zero tolerance for dark-pattern
  complaints in feedback.

## 6. Anti-friction requirements

- Finish → next GO in <1.5 s via keyboard, <2 taps on touch.
- Countdown ≤0.8 s on retries; full countdown only on first run or explicit menu.
- Delta legible at speed: ≥16 px tabular numerals, sign + color redundant coding
  (never color alone), no animation that competes with driving.
- Split toasts never overlap the road center; auto-dismiss ≤1.5 s; no modal.
- All targets computable offline from the seed; no network, no account, no fetch
  before first GO. Daily seed + medal table must resolve in <50 ms.
- Ghost/decode failures degrade to time-only comparison (current `decodeGhost`
  fail-closed behavior preserved); HUD names the fallback target.
- Mobile parity: touch retry button ≥52 px, same latency budget as keyboard.

## 7. Acceptance tests (headless-friendly, deterministic)

Conventions: reuse `tests/harness.ts` style — seeded days, synthetic recs,
no DOM required except thin presenter asserts where noted.

1. **Retry latency.** From `finishRun()` to next `run` state: ≤1 step through
   `quickstart` (assert `countdownT` budget ≤0.8 s, `resetRun` called, menu
   never shown). Fail if full 3.1 s countdown fires on retry.
2. **One-input retry.** Synthetic key `Enter` in `finish` triggers restart;
   `R` in `run` triggers respawn snapshot (+3000 ms preserved), `Esc` abandons
   to menu without touching stored best/ghost.
3. **Delta correctness.** Scripted run vs recorded PB: delta sign flips exactly
   at the overtake tick; delta at finish equals `finalMs − bestMs` to the ms.
4. **Split integrity.** Split indices strictly increasing, within `[0, n)`,
   stable across runs for the same seed; split times monotonic; missing PB ⇒
   delta/splits fall back to medal pace and HUD labels it.
5. **Medal determinism.** Same seed ⇒ identical medal table across 100 seeds;
   bands ordered AUTHOR < GOLD < SILVER < BRONZE; all within sane bounds
   (e.g. bronze ≥ est, author ≤ est × 0.92 — tune, then freeze factors).
6. **Ghost-gap honesty.** Gap readout matches `sampleGhost` interpolation within
   quantization bounds (≤0.25 u); downsampled ghosts flagged rival-only, never
   used for timing asserts.
7. **Finish verdict.** New-best, medal-earned, and next-target lines exactly match
   stored best/medal math; split table deltas sum to final delta ±1 tick.
8. **Share story.** `buildShareText` includes medal + attempts; URL still within
   ghost budget; corrupt ghost ⇒ time-only share with truthful outcome kind.
9. **No dark patterns.** Static audit: no streak-threat copy, no countdown that
   blocks quitting, no auto-retry, no network/account gate before first GO.
10. **Perf.** Medal + split derivation <50 ms for 40-seed sweep; HUD updates add
    zero per-step allocations (presenter reuses buffers like `render-motion.ts`).

## 8. Rollout order (minimal, in sequence)
1. Instant retry + quickstart + focused RETRY (P0-1…P0-4). Alone this should lift
   attempts/session; ship and measure before adding chrome.
2. Live delta + splits + ghost gap (P0-5…P0-7). The learning half of the loop.
3. Seed-deterministic medals + finish verdict + chase-medal onboarding (P1).
4. Attempt counter, share story, local history (P2). Ritual without pressure.

## Sources
- TrackMania (2020) details — free-to-play seasons, Track/Cup of the Day,
  medals and rankings, instant respawn/restart bindings:
  https://en.wikipedia.org/wiki/TrackMania_%282020_video_game%29
- Trackmania (2020) official beginner guide — medals, records, rivals as
  progression goals: https://www.trackmania.com/news-771
- Trackmania official news — Track of the Day selects community maps daily:
  https://www.trackmania.com/news-1052
- Trackmania official news — Cup of the Day daily knockout tournament:
  https://www.trackmania.com/news-684
- Trackmania official documentation — records, medals, ghosts, replays:
  https://doc.trackmania.com/
- Trackmania official documentation — replay/ghost system:
  https://doc.trackmania.com/play/watch-replays/
- Nadeo/blog on the reboot — "every player has something to aim for":
  https://www.pcgamesn.com/trackmania-nations-remake-release-date
- GameSpot TrackMania 2: Canyon review — instant restart, drift feel, time-trial
  compulsion: https://www.gamespot.com/reviews/trackmania-2-canyon-review/1900-6335508/
- IGN TrackMania 2: Canyon review — time-trial focus and value:
  https://www.ign.com/articles/2011/09/16/trackmania-2-canyon-review
- PC Gamer on Trackmania's "perfect" remake — one-more-go loop, medals, rivals:
  https://www.pcgamer.com/trackmania-remake-review/
- checkpoint-live / checkpoint-time community overlay — evidence that live
  checkpoint deltas are a core unmet feedback need:
  https://github.com/Badgumby/checkpoint-live
- checkpoint-time widget reference: https://badgumby.github.io/checkpoint-time/
- TrackMania Tool Assisted wiki — checkpoints and splits as first-class data:
  https://tool-assisted.com/
- OpenPlanet checkpoint API — per-checkpoint time events (plugin evidence):
  https://openplanet.dev/api/class/CGameScriptMap scores
- Ubisoft TrackMania 2: Canyon overview: https://www.ubisoft.com/en-us/games/trackmania2-canyon
