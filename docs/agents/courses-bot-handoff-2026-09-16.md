# Canyon Racer — Speed/Tight-Corner Work: Final Trace (2026-09-16)

## Status: IMPROVED BUILD IS LIVE
`https://mistabrando.github.io/canyon-racer/` — published to `gh-pages`
(commit `e975291`, bundle `assets/index-De_MHjfa.js`).

Verified in a real browser (Playwright, live URL):
- menu/hud/modes/targets render; canvas 2400x1524; only a harmless favicon 404
- DRIVE works: **196 km/h** on road (= `MAX_GRIP_SPEED` 140 u/s)
- off-road: car sits on the dirt plain at **115 km/h**, no void, "OFF COURSE — R RESCUE"
  prompt — i.e. the requested "controllable dirt instead of falling off" holds
- screenshots: `.omo/shots/live-pages-{initial,driving,stuck}.png`

## The four requested changes — where they landed
1. **OOB = controllable dirt (no fall off)** — `src/sim.ts` off-road model:
   `ACCEL_OFFROAD 9 -> 16`, `OFFROAD_DRAG 0.9 -> 0.5`, `DIRT_LATERAL_GRIP 1.5 -> 4.0`.
   HEAD's dirt equilibrium was ~25 u/s; my first pass accidentally dropped it to
   ~10 u/s (unsteerable crawl, contradicted the ask). Now slidey but steerable.
2. **Higher top speed** — `MAX_GRIP_SPEED 112 -> 140`, `MAX_DRIFT_SPEED 90 -> 112`,
   boost cap -> 162; estimator `EST_CRUISE/DRIFT_CAP/SURGE = 140/112/162` with
   `aLat 122` grip / `212` drift.
3. **Tight U-turns / 90s** — `src/trackgen.ts` deck is
   **1 hairpin (r72-86, 150-170deg) + 2 tight 90s (r62-78, 85-110deg) +
   5 committed drift arcs (r90-120) + 1 dec + 2 sweepers + 1 kink**.
   (An earlier pass used 2 hairpins + 3 tight = five sub-90u corners; that was
   rail-grazing on every daily at 140 u/s, so it was relaxed. Rationale is in the
   deck comment.)
4. **Mobile text-select / pinch-zoom** — `src/style.css` (done earlier: user-select,
   touch-action, tap-highlight, text-size-adjust).

## The key physics bug fixed (root cause of the practice/benchmark crashes)
`src/sim.ts`: `LAUNCH_VY_MAX 13 -> 6.5`.
`vy = clamp(vH * ap, LAUNCH_VY_MIN, LAUNCH_VY_MAX)` with `ap >= 0.08`, so launch vy
scaled with speed and saturated at 13 -> **~1.0s airtime / 140-170u flight** at 140 u/s.
Crests therefore landed *inside* the following corner, crossed-up into the rail
(traced: practice crest s=714, R150 starts s=842, launch s=732, land s=902 on the rail).
Capping vy bounds airtime to ~0.46s / ~70-116u. This single change took practice and
benchmark from 1-4 walls to **0 walls / 0 respawns**.

## Contract fixes (were stale for the new envelope)
- `tests/harness.ts` hard-coded `len > 3650` while `LEN_MAX` was 3850 -> now imports
  `LEN_MIN/LEN_MAX`.
- est gate was `34..47s` (calibrated to HEAD's estimator, which capped speed at 80 u/s).
  New estimator models the 140 u/s car, so est is ~29-31s. Band is now the shared
  `EST_MIN_S/EST_MAX_S = 26/38` (documented at the constant). The 35-50s *human* band
  is preserved via the gold/silver/bronze multipliers.
- `gripBound` no-drift band `est+25% -> est+40%`, pursuit gain `1.2 -> 1.5`
  (measured: gain 1.2 worst 1.475x est; 1.5 worst 1.287x with 1.09% drift, over 42 days).

## References re-recorded (game correctness)
`src/course-reference.ts`: practice **8932ms** (68 samples), benchmark **15404ms**
(117 samples), identity `gen 2` / days `2026-01-01` / `2026-01-02`.
Recorder: `.omo/record-ref.mjs` (replicates `runCourse` exactly; verifies decode,
sample count, interp <= 0.4u before writing).
The benchmark reference was previously missing entirely; the practice one was stale
(11531ms/88 samples), so the game had silently been falling back to est-derived
targets and had no paced rival for the fixed courses.

## Test status (full `npm test`)
Green: harness 276/0, track-variance 197/0, physics-feel, drift-control,
barrier-edge, retry-restart, ghost-share, visuals-budget, render-motion, loop-ui,
trails-bounds, barrier-plan, audio, driving-feedback.

RED (2 suites). Both share ONE root cause: the informed controller cannot hold the
tightest generated corners cleanly at the 140 u/s envelope. The grammar-encoded
assertions have been brought up to the new deck; what remains is controller quality.
1. `tests/courses.ts` — **84 passed, 1 failed**: "majority of daily sample completes
   cleanly" = 0/8 (needs >= 4/8 with 0 walls AND 0 respawns). The bot finishes most
   dailies within gold but grazes a rail 1-2 times per run, always at the **exit of a
   tight corner** (traced: L66/L71/R67/R70 exits, 48-88 u/s, slip only 2-8deg — running
   wide, not sliding).
   - Rail-guard sign is correct: flipping it is dramatically worse (22 walls + respawns).
   - Gains/thresholds sweeps (gain, threshold, slip-boost, drift timing) did not reach
     0 walls; the flipped-sign test proves the guard helps but cannot close the gap.
   - Speed alone is not the cause: reverting to 112/90 still left 1 wall/day.
2. `tests/corner-apex.ts` — **63 passed, 12 failed** (was 56/19). Fixed this session:
   - section 1 bands retargeted to the real deck: 5 committed arcs/track
     (`ord === 300`), radius [88,130] (measured 89.0-121.4), arc [150,290]
     (measured 160-277), exactly 1 decreasing challenge per track, perTrackBad 0.
   - `isOrdinary` widened to medR 88-130 (the committed arcs are r90-120, so the old
     100 floor dropped some and made the per-track count vary 1-5).
   - sections 5/10 now drive `tests/informed-bot.ts` (the courses bot, code-moved out of
     courses.ts) instead of its own separately-tuned 112/90 bot.
   Remaining 12 = 2 `barrier-wired completion` (seeds 2026-06-01, 2026-07-11 never
   finish even at a 240s cap: 37/43 respawns) + 10 reward-line assertions
   (3 days x {no line touches a wall, exactly one reward per line, late exit earns less}
   + 1 small-corrections).
   - Barrier-wired: the car runs far off-road (lat 25-130u) at a sweeper and loops.
     Recovery steering is NOT the bottleneck: both the heading-align and a
     pursuit-toward-road rescue produced byte-identical results, because the outcome is
     set by the bot's own line policy after the 3s rescue window.
   - Reward lines: `exitQuality` is ALWAYS 0, and the cause is now pinned. Instrumented
     against `s.rhythm` directly: the module's OWN slip signal `peakSlipDeg` is only
     **0.4deg** at entry (vs 6.6deg velocity-vs-heading), the slide never develops past
     `scoreExit`'s 3deg gate, and it terminates by **RESET to `idle`** (`slideAge` 0.00s,
     `peakSlipDeg` 0.0, `lastQuality` 0.000) — not by a scored commit. Why it resets: the
     scripted line leaves the road, `worstLat` = **58-75u against halfW 11.5** (measured at
     entry speeds 96/108/118/126/132). A slide only lives on normal ground, so departing
     the road wipes it; that also explains the `walls=1` per line. Harder yanks
     (steer 0.9) do not help. Fixing this means replacing the crude `follow()` line in
     section 10 with a real controller — the same fix as the other two failures.

## Best-known bot config (`tests/informed-bot.ts`, shared)
crash-memory tiers (112/95/80), catch-first at |slip|>0.6, engaged gate, true
grip-hold bisection, rNow hysteresis, `dEntry` (bend ONSET) for proximity/chain/
brake (NOT `dMin`, which points 100u+ past the entry), raw-flick link branch,
in-bend `commitNear` floor (0.45/0.30), and a rail guard
`railT = clamp((|lat|/halfW - 0.6)/0.4, 0, 1)`, `steer -= sign(lat)*railT*0.3`
(normals are left-of-travel, so this sign is correct).

## Regeneration recipes
- bot extract for probes: slice the `makeBot` body out of **`tests/informed-bot.ts`**
  (it moved there), strip the TS annotations (`: number`/`: SimState`/`: TrackView`/
  `: StepInput`/`number[]` and any `(bot as unknown as {...})` casts), then
  `node --check`. `.omo/bot-extract.mjs` must be regenerated after EVERY bot edit and
  must contain no `globalThis.__PG/__RT/__SB` debug knobs before recording references.
- references: `node .omo/record-ref.mjs` then `npx tsc -p tsconfig.tests.json`
  (compile AFTER writing, or the test reads the stale `test-dist`).
- deploy: `npm run build`, then the README-PAGES.md worktree flow. A rebuild must
  reproduce `assets/index-De_MHjfa.js`; it does as of this commit, so the live site
  matches the working tree.

## Experiments tried and REJECTED (do not repeat)
All measured with the shared bot; "baseline" = practice 0 walls/0 resp, benchmark 0/0,
wiredFail 2/8, daily 4/8 finish 0/8 clean.

| experiment | result |
|---|---|
| rail-guard gain sweep (0.2-0.7) x threshold (0.3-0.6) | any threshold < 0.6 breaks benchmark (w=2); dailies stay dirty |
| slip-boosted rail guard (guard scales with \|slip\|) | benchmark w=2 at every setting |
| flipped rail-guard sign | catastrophic (22 walls + respawns) — confirms the current sign |
| crest runway contract 125u -> 180u (+ host-floor alignment) | acceptance fine (0 fallbacks) but **daily completion got worse** (3/8 finish); reverting was correct |
| `CREST_RUNWAY` 205 -> 185 (I mis-read it as the requirement) | shortens the runway; 3/8 finish |
| grip-curve/cap retune of the apex bot (cap 90 -> 112, margin 8-30, gain 3.0-5.2) | never better than 2 stuck seeds |
| recovery steering: heading-align -> pursuit-toward-road | byte-identical results: the rescue is not the bottleneck (outcome is set by the line policy after the 3s window) |
| lateral-seeking term in the rescue (LG 0-1.6) | no effect (the heading term saturates and clips it away) |
| section-10 script: entry speed 80/112/132/140 | all q=0.000 (the slide is uncommitted, see above) |
| section-10 script: time-based commit at 0.12/0.2/0.28s | still reward 0, walls rise to 2 |
| **adaptive look-ahead** (`L = min(12+0.7*spd, rPeek*K+B)`), K/B swept | **net regression**: benchmark w=1 at every K/B; wiredFail 2 -> 4-6; only K=0.6/B=20 nudged daily finish to 5/8 |
| reverting the speed caps to 112/90 (diagnostic) | daily walls drop to 1/day but still 0/8 clean, and the fixed courses break (practice resp 25) |

Conclusion: no local tuning of the current policy closes the gap. The bottleneck is the
controller's line-holding at 140 u/s through sub-90u corners; fixing it needs a real
racing-line controller (apex-seek + curvature-adaptive speed), not constants.

## Next steps (priority order)
1. `tests/corner-apex.ts` section 10: rewrite the scripted drift timing (commit the
   countersteer while the module is still `sliding`, i.e. within ~0.3s of the tap)
   so a scored exit actually fires.
2. `tests/corner-apex.ts` section 5 + `tests/courses.ts` daily sample: give the
   controller a real racing line (apex-seek on entry/exit) so the tightest generated
   corners are holdable at 140 u/s. This is the single fix behind both red suites.
   Alternatives if a better controller is out of scope: ease the deck's tightest
   radii, or accept the assertion as a documented known limit of the test controller.
3. `.omo/probe-*.mjs` are scratch diagnostics; safe to delete.

