# Cycle 9 integration summary (sole-writer input)

Date: 2026-09-08. Baseline on disk: 1231/1231 green (big hug arcs), build +
both typechecks clean. All four Cycle 9 reviews read-only, all Muse, no
implementation edits. Sources: `docs/agents/cycle9-driving.md`,
`docs/agents/cycle9-loop.md`, `docs/agents/cycle9-art.md`, `docs/agents/pages-cycle9.md`.

## Cross-report findings (deduplicated, ranked)

### P0 — R does not rescue; the run lifecycle is broken in two reports
- Driving F1: live `doRespawn` (`src/main.ts:610`) full-restarts via
  `startRun(true)`; tested `simRespawn` (snapshot + exact +3000ms) is
  headless-only. One open-edge fall = ~40s run discarded; the
  `OFF COURSE — R RESET` prompt promises a rescue that never comes.
- Loop F3: same root, loop framing — no cheap mid-run recovery, maximally
  punishing on a ~34s daily; TrackMania grammar expects respawn *and* restart.
- Decision: wire `doRespawn` to `simRespawn` (+ minimal settle, keep +3000ms
  + ghost-gap semantics), keep a separate full-restart binding.
  Do not ship any other slice with two meanings on one key.
- Acceptance: fall off open edge → R → resume at snapshot, `raceMs` delta
  exactly +3000, ghost gap in [3000, 3000+120+1], no return to start.

### P0 — Session rival is boot-pinned (loop F2, top loop fix)
- `rival`/`sharedGhost`/`rivalNotice` resolve once at boot; new bests never
  re-resolve, so post-PB retries race the old ghost until reload.
- Fix: after each PB write in `finishRun`, re-read stored ghost, re-run
  `resolveRivalIdentity`, update rival state; next `startRun` races the new
  best. Fail-closed semantics unchanged. (Loop T3/B2 gate it.)

### P1 — Poor exits chain better than good ones (driving F2, inverted incentive)
- `drift-control.ts:321`: `q < 0.3` still arms chains with full `pendAmp`
  (measured 0.81) + free 0.09 rad `yawKick`; mid-quality exits damp to 0.11.
- Fix: gate chain arming on quality (`q >= 0.3` arms, residual scaled by `q`);
  suppress `yawKick` after poor exits.
- Acceptance: `age<0.15` exit → `chainArmed=false`; good anti-phase exit
  (`q>0.55`) still arms.

### P1 — Countersteer decisiveness underpriced (driving F4)
- Counter weight 0.15 buys only +0.15 quality over a lazy flick at optimal age.
- Fix: weight 0.15 → ~0.25 renormalized and/or widen band (`counterLo`
  0.2 → 0.35); perfect grade unattainable with lazy counter.
- Acceptance: counter 0.15 vs 0.7 differs by >= 0.25 in `q`.

### P2 — Entry feel: silent flick fail + late entry cut (driving F3 + F5)
- Simultaneous steer+tap flick dies silently (`steerEff ~0.1 < 0.18`, no
  `rejected` event); entry cut lands ~3 steps post-tap, not on the tap step.
- Fix: evaluate rhythm entry on raw (or max(raw, smoothed)) steer + emit
  `rejected` for HUD; apply one-shot cut on the `entered` event same step
  (keep threshold path for autoBreak).
- Acceptance: `pre=0` flick enters `sliding`; tap step at speed → `fSpeed ×
  0.94` same step; spam guards unchanged.

### P2 — Delta honesty (loop F1) + share preserves verdict (loop F4)
- Delta/split lookup is nearest-x/z, ignoring y/direction/branching; can flip
  sign on excursions or stacked geometry. Direction: gate by track-index
  window + heading, or compare within current split segment only.
- `sharebtn` overwrites the verdict line in `presult`; give share its own
  status line so the reward moment survives sharing.

### P2 — Scene pass (art, zero-net, cheapest order)
1. Shoulder/edge cue for open corners (reads as intent, not unfinished).
2. Ground aprons near road (patches excluded within 40u today).
3. Spanning start gate (drive *through* it; current gates flank only).
4. Second near-wall variant (break "same rock" read).
5. Pull tall-phrase walls closer (pushback +6u over-polite; loom then release).
6. Gate chevron accents.
- Hard caps: env ≤5 draws/26k tris, furniture ≤5/12k, combined new ≤10/30k;
  mobile same calls, tris ≤65% desktop, keep far layer at reduced count (depth
  over filler). 9-frame screenshot sweep (1280×720 chase cam) gates it —
  preview was down at review time, so the sweep is still owed by whoever
  integrates.

### P3 — Loop polish (F5–F8): surface `bad-day`, split two-line menu,
  `#delta`/`#split` to ≥16px tabular, `Esc`-to-menu decision. Cheap, batch.

### Verified solid (no action)
Grip/drift sweeper ordering (R160 grip wins, R105 drift wins), boost-spam and
hold-spam punishment, grind-to-stall, dt-stability + low-FPS clamp, ghost
identity fail-closed + precedence/backfill, atomic finish, truthful share
outcomes, malformed-URL safety, no dark patterns. No brake input by design
(auto-gas) — noted as the binding constraint on future entry tuning.

## Pages status (corrected)
- Prepared: `vite.config.ts` (`base: '/canyon-racer/'`), official Pages
  workflow, README-PAGES, artifact statically verified, no secrets in tree.
- The handoff lists three blockers, but blocker 1 is stale: `gh auth status`
  re-checked 2026-09-08 ~09:15 — logged in as `mistabrando` with
  `repo` + `workflow` scopes. Remaining: re-verify preview bind + commit from
  an unsandboxed shell, then create/reuse `mistabrando/canyon-racer`, push,
  enable Actions-Pages, verify live URL. No publish without explicit user go.

## Suggested integration order
1. P0 respawn + P0 live rival (same lifecycle slice; loop T2/T3/B2 gate).
2. P1 chain gating + P1 counter weight (same drift-control slice).
3. P2 entry feel + delta/share fixes.
4. P2 scene pass + 9-frame sweep.
5. P3 polish batch. Full suite + build + both typechecks after each slice.

## Stop-ship gates (union)
Loop `T3` (live rival), `T6` (identity), `T7` (verdict), `B2` (rematch),
`B4` (malformed links) + driving F1 acceptance (R rescue, +3000 exact) +
art screenshot sweep 9/9. No deploy without explicit user approval.
