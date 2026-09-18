# Physics handoff — off-track freedom + acceleration tuning (2026-09-17)

Worker files: `src/sim.ts`, `tests/physics-feel.ts` (+2 bands in `tests/harness.ts`), this handoff.
Sim stays pure/deterministic: no random, no DOM, no wall-clock. Two additive exports only.

## 1. Root cause of the "reset" feeling (no teleport exists)

Verified: `simRespawn()` is the only teleport and `OOB` only arms the prompt.
The reset feeling is the **rail clamp**: on a fully-railed barrier plan a car
60u out on the plain was yanked **60 -> 8.2 (LIM) in one step** with scrape
drag + velocity deflection (`wallHit=false, scraping=true`). A 52-unit lateral
snap reads exactly like a reset. This also secretly rescued bots/scripted lines
that left the road (see section 5).

## 2. Changes (`src/sim.ts`, 4 edits)

- `ACCEL_ROAD = 140 -> 110` (~21% softer launch; `MAX_GRIP_SPEED = 140` untouched).
- New `ACCEL_BOOST_MAKEUP = 30`: added back only while a boost window is live
  (`rhythmBoost > 0 || s.exitT > 0`, never off-road), so one-shot exit/rhythm
  surge dynamics are bit-identical and only plain launch/drive accel is gentler.
  Identity pinned: `ACCEL_ROAD + ACCEL_BOOST_MAKEUP === 140` (OT4).
- Off-road pitch follows the surface: when grounded and `|latN| > halfW`,
  pitch is sampled from `groundSurfaceY()` ahead/behind along the heading
  (verge banks the nose down its slope, flat plain reads level). On-road pitch
  is byte-identical (`atan(clamp(gradeHere, ...))`). Pitch is output-only; it
  never feeds back into dynamics.
- Rail-clamp reach gate (plan tracks only): `farOutside = barrier != null &&
  |lat2| - LIM > WALL_CLAMP_REACH (4.0)` skips clamp/impact entirely, so a car
  fenced OUT stays free with untouched momentum. Reach covers one step of
  travel at boost pace (~2.7u) + curve-frame slack; genuine rail hits (push
  < 1u, R7-style vn 24.8 -> 0.4u/step) still collide. Legacy null-barrier
  tracks keep collide-everywhere exactly (W9/R6 preserved and re-pinned in OT2).

## 3. Before / after (deterministic synthetic tracks)

| metric | before | after |
|---|---|---|
| time-to-100 / time-to-140 / top | 0.650s / 0.933s / 140.0 | **0.833s / 1.183s / 140.0** |
| pitch 60u out, 8% road grade | 0.0798 (road tilt on flat dirt) | **0.0000** (verge-mid 0.0400, on-road exact) |
| guarded-plan clamp, 60u out | snap 60 -> 8.2 + scrape in 1 step | **stays 60.0, no wall events** |
| legacy null-barrier clamp, 60u out | 60 -> 8.2 | unchanged (contract) |
| drive back from 60u (steer-to-road) | 3.12s, min 17.7 u/s | 3.10s, min 17.7 u/s |
| 45deg dirt slide at 60 u/s, steer 0 | min ~30, settles ~31 | min 30.5, settles ~31-32 (16/0.5 equilibrium; cap 44 intact) |
| trackFollow 300u out | lastIdx frozen, pos moves 69.9u/2s | unchanged: freeze is progress-only, never strands |
| C7 exit surge | peak in cap, +0.3s >= 148 | identical (all C7 green via makeup) |
| harness auto-drift r / grip-line v | 59-ish / >85 | **45.4 (w=1.900 unchanged) / 83.4 (w=0.846 unchanged)** |

## 4. Tests

- `tests/physics-feel.ts`: 214 -> **231/0** (new OT1-OT5 block, 17 checks:
  surface pitch, no-snap + legacy clamp, drive-back + freeze-is-progress-only,
  accel band + makeup identity, spin freedom).
- `tests/harness.ts`: 2 bands moved with cause comments (auto-drift radius
  `48-68 -> 38-60`; grip-line speed `>85 -> >80`). Yaw/width/drift-state
  numbers are unchanged; only accel equilibria moved. **276/0**.
- `npx tsc --noEmit` clean.

## 5. Deliberately NOT changed

`MAX_OFFROAD_SPEED` (44), `ACCEL_OFFROAD` (16), `OFFROAD_DRAG` (0.5),
`DIRT_LATERAL_GRIP` (4.0) — measured recoverable, spin free, never stops;
legacy clamp path; `trackFollow` gate; `OOB_*`/`BACKSTOP_RADIUS`; wall
impact/severity/rebound/cooldown values; `SNAP_*` gates; `clearDirtReward` +
dirt no-reward contract; finish gate; `StepInfo` shape; drift-control module.
Forbidden files untouched (`main.ts`, `visuals.ts`, `drift-control.ts`,
configs, `dist/`, `test-dist/`). No commits, no deps.

## 6. Downstream suites: explicit attribution (my change caused these)

In-chain: 13/16 green. `corner-apex` 63/5 and (ran individually) `courses`
79/7 fail; `audio` 41/0 and `driving-feedback` 46/0 pass. Baselines verified
green by swapping `src/sim.ts` to HEAD (corner-apex 68/0, courses 85/0).
Variant matrix on corner-apex (full/accel-only/clamp-only @118 compounding):

- Section-10 scripted lines (`09-07` wall graze at cum 587 + lost reward;
  `07-28` exit-speed spread 4.45 > 3): caused by the **accel cut**. The
  open-loop scripts are calibrated to centimeter precision on old equilibria
  (entry is fixed at 80 u/s; positions at the timed blip/exit shift). Present
  at both 110 and 118, absent at 140 — no in-range value avoids it.
- Bot completion (`barrier-wired` 6/8 -> 5/8; `courses` daily 3/8 + stale
  references): the bot/policy relied on the old snap-back as a free rescue
  (e.g. `07-11` leaves through an open edge at cum ~3609 and its
  lastIdx-frozen pursuit can't rejoin), and bundled ghost references were
  recorded at old pace (the speed-dirt handoff already flags that the
  course worker must regenerate references against new physics).
- A road-seeking recovery experiment did NOT fix the bot (it respawns on-road
  and re-offends under policy control), so this needs policy/script
  re-tuning + reference regen — the track/course worker + integrator domain,
  not a band tweak. Left red deliberately; not weakened here.

## 7. Open feel questions (subjective, for playtest)

- Is 110 (t100 0.83s) the right point, or keep more punch nearer 118?
  (118 was trialled: identical downstream breakage, so it buys nothing.)
- A rail now fences both ways: rejoining needs an opening. Intended?
- Dirt cruise sits ~32 (accel/drag equilibrium) under the 44 cap — advertise
  44 or accept 32?
- Verge pitch while crossing at an angle has a small step vs road pitch;
  kept because the surface sample is more truthful — flag if it reads wrong.
