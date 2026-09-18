# Handoff — course-retune (recalibrate bot/scripts/references to ACCEL_ROAD 110)

Date: 2026-09-17. Worker files: `tests/informed-bot.ts`, `tests/corner-apex.ts`
(section 10 only), `src/course-reference.ts`. `tests/courses.ts` and
`src/courses.ts` needed NO changes. `src/sim.ts` untouched (110 / 30 / 4.0
verified at the end).

Result: `npm test` 16/16 green, `npx tsc --noEmit` clean.
`corner-apex` 63/5 → **68/0** (section 5 at 8/8, slowest 52.2s — better than
the HEAD baseline 6/8). `courses` 79/7 → **86/0** (daily sample 7/8).

## 0. Baseline attribution (verified, not assumed)

Ran both suites as-is first: reproduced exactly the 12 assigned failures.
Built a faithful all-HEAD overlay in /tmp (read-only `git archive`, compiled
outside the repo) and compared seed-by-seed. Surprise: **most failing seeds
already failed at HEAD** — they are the named-unreachable ones, not
regressions. True regressions from the physics change were exactly two seeds:

- apex §5: HEAD 6/8 (fails 06-01, 07-11) → current 5/8 (06-15 joined). The
  `finished >= 6` gate flipped on ONE seed.
- courses C7: HEAD 4/8 (fails 06-01, 06-02, 06-04, 08-15) → current 3/8
  (07-28 joined). The `completed >= 4` gate flipped on ONE seed.

Grip physics is byte-identical in the physics diff, so the flips are knock-on
trajectory shifts (softer launch → different corner-entry states) plus the
lost clamp-snap rescues, exactly as the physics handoff describes.

## 1. Bot recovery policy (`tests/informed-bot.ts`) — the fix for §5/C7

Two measured failure modes, both root-caused to the frozen-`lastIdx`
pursuit once the car is past clamp reach (step traces in §4):

- (A) Fast open-edge sweeper fly-off: car grips at 121–127 u/s through an
  unguarded ~170–195 sweeper exit (07-11 s~3620, 06-15 s~3644, 07-28 s~3152),
  runs wide, stale pursuit slaloms it across the road (07-11 reaches +121u),
  OOB respawn, re-offense loop (18–22 respawns).
- (B) Slide-out + spin near the road: stale pursuit saturates ±1 at speed,
  car slaloms and spins to a crawl (06-15 s~3022: slip −0.75, 3 u/s), then
  `noProg` respawns it at the doorstep of recovery.

Changes (attack policy untouched; grip-only/conservative path untouched):

1. **Open-edge respect.** Fast sweepers the policy grips flat (minR 160+)
   are only committable with a rail to catch a slide. When the upcoming
   bend's outside is unguarded (queried from the visible rail plan;
   bot-dir→outside mapping measured on 07-28: L reads dh>0/dir −1 with
   outside +1, so outside = −dir), take the slowing drift on the existing
   brake timing (`spd > vth+6`, `dEntry < brakeD`). Guarded sweepers keep the
   proven grip line. Effect: the three fly-off corners are now drifted
   instead of gripped; all other bends byte-identical.
2. **Off-road rejoin.** While the topological window distance
   (`windowDist`, ±10 samples around lastIdx) exceeds halfW + 2.0, grip-only
   short-lead pursuit (10 + spd·0.3) back toward the progress window. Two
   measured subtleties baked in: the lead must be SHORT (a 12+spd·0.7 lead
   gives a shallow intercept that ping-pongs across to −62u, measured 07-28
   s~2859), and the trigger must be topological, never Euclidean. Trigger
   calibration: fastest clean skilled runs peak at 13.25u (benchmark) /
   11.9u (dailies), so halfW + 2.0 never fires on clean pace.
3. **Rejected in testing (documented so nobody retries):** drift-scrubbing
   on straights (a steer-0 drift develops no slide — measured 140.0 u/s flat
   for 4s); Euclidean-nearest rejoin targets and prompt-respawn-on-hopeless
   (the Euclidean nearest jumps hairpin folds and stormed 108 respawns on
   06-15); wrapper-side respawn patience (delayed R on stuck cars flipped
   06-01 from pass to fail — the bot alone with the ORIGINAL gates passes
   8/8 apex / 7/8 daily, so the wrappers are byte-identical to HEAD).

Per-seed outcome (apex §5, cap 120s): 09-07/06-07/07-04/07-28/06-15/07-19/
06-01/07-11 ALL finish, slowest 52.2s (06-15), max 2 respawns. Daily C7:
7/8, only 2026-06-04 unfinished (also unfinished at HEAD).

## 2. Scripted-line recalibration (`tests/corner-apex.ts` §10) — 4 checks

HEAD-vs-current scenario traces at the correction blip (startS+60, 3+3 @
0.4): HEAD acts at slide-age ~30, spd 116, slip 0.29; current acts at age
~31, spd 115, slip 0.25 on a less-developed slide — the same impulse kills
the 09-07 slide (dies 40u early, wall, q 0.00) and swings the 07-28 exit
+4.45. Ran a timing×size matrix (12 combos × 3 corners, full detail in the
work log): symmetric 2+2 @ 0.3 from startS+80 is neutral on all three
corners (exit deltas 0.00/0.21/1.98 vs the <3 band; quality deltas ≤0.01 vs
the 0.05 band), with a flat plateau at startS+70…85. Smaller asymmetric
variants either break the 09-07 slide (walls) or go one-sided. New values:
blip at `e.startS + 80`, `blip = 2` / `back = 2`, steer ±0.3. The `late`
variant, all assertion thresholds, and all intents are unchanged.

## 3. Bundled references (`src/course-reference.ts`) — 6 checks

Regenerated with the project's own deterministic recorder (real sim +
skilled controller + `encodeGhost` at `REFERENCE_ENCODE_BUDGET` with the
packed course identity — no hand-written numbers), round-trip verified:

| course | old time/samples/maxErr | new time/samples/maxErr | payload |
|---|---|---|---|
| practice | 8932 ms / 68 / — (stale: freshly generated skilled run is 9075) | **9075 ms / 70 / 0.324** | 2447 chars < 8192 |
| benchmark | 15404 ms / 117 / — (fresh run is 15488) | **15488 ms / 118 / 0.338** | 4078 chars < 8192 |

Both runs clean (0 walls, 0 respawns); identity day/checksum/gen match the
built geometry; gold targets follow automatically (9801 / 16727).
Provenance comment rewritten (it still cited the pre-speed-dirt 11531/18442
numbers). `FIXED_TARGET_MARGINS`, `DAILY_TARGET_FACTORS`, and `src/courses.ts`
logic untouched.

## 4. Assertion accounting (nothing weakened)

- No threshold, gate, or `ok(...)` condition changed in any file. The §5
  `finished >= 6`, C7 `completed >= ceil(8/2)`, §10 `< 3` / `q −0.05`, and
  all C5 round-trip bounds are byte-identical.
- What changed instead: the bot's driving (rejoin + open-edge respect, both
  active during real gameplay-equivalent simulation, both documented with
  measured triggers), one open-loop script's measured parameters, and two
  data payloads regenerated by the real recorder.
- `tests/courses.ts` harness: zero diff. Fixed-course C6 comparisons
  (conservative still records contacts, never faster) and daily gold
  attainability hold unmodified.

## 5. Evidence notes / open items

- Step-trace scripts used for diagnosis lived in /tmp only; nothing
  scratch was added to the repo.
- Still-unfinished seeds (same as HEAD, named by the checks): apex none
  (8/8 — the two HEAD-unreachable seeds 06-01/07-11 now finish);
  daily 2026-06-04 (unfinished at HEAD too; its s~3325 region needs a
  separate investigation, deliberately out of scope).
- Watch item for the integrator: the bot now drifts open-outside fast
  sweepers it used to grip; clean-pace cost measured ≤0.1s on passing
  dailies, gold margins (daily worst measured/estimate 1.051 vs 1.10;
  practice 9075 vs 9647; benchmark 15488 vs 16636) absorb it.
- Physics constants confirmed untouched at finish: ACCEL_ROAD 110,
  ACCEL_BOOST_MAKEUP 30, WALL_CLAMP_REACH 4.0. Forbidden files untouched;
  no commits made.
