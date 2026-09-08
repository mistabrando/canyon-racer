# Barriers Cycle 7 handoff — explicit guardrail contract/plan

Updated: 2026-09-08. Owned files: `src/barrier-plan.ts`,
`tests/barrier-plan.ts`. No changes to sim/main/trackgen/visuals/
environment/configs, `dist/`, or `test-dist/`. No deploy, no Sites.
Tests: 49 checks, all passing under plain node via `/tmp` compile only;
`tsc --strict` clean.

## Contract

Only VISIBLE guardrail segments collide. Open edges allow off-course
flight/falls; falling/respawn stay sim-side. This module decides WHERE
barriers exist as arc spans; it never moves the car.

- Frame: centerline meters `s` from track start (same frame as
  `trackgen` `CornerEvent.startS/endS` and `visuals` chevron stations).
- Side: `+1` = +normal side (driver-right, outside of `L`), `-1` =
  opposite. Matches `sim.ts` normal convention `n = (-tz, tx)` and
  `planChevrons` (`L -> +1`).
- Rule: outside of drift corners (`medR <= 75`) guarded with entry
  advance + exit runoff; outside of sweepers (`<= 145`) guarded with
  shorter margins; kinks (`> 145`) open; straights open; launch
  (`s < 200`) and finish tail (`s > L - 150`) always open; crest
  landings (`±55` around caller-passed `crestS`) split barriers open;
  decreasing-radius complexes add one short inside span.
- Output spans are merged per side, sorted by arc, capped at 64
  (longest kept), clamped to the open window, quantized to 0.1u.

## API (`src/barrier-plan.ts`)

- `DEFAULT_BARRIER_TUNING` — drift 75 / sweeper 145; drift +30/+40,
  sweeper +18/+22; decreasing inside 30; start 200 / finish 150;
  crest gap 55; merge gap 12; cap 64.
- `planBarriers(length, events: CornerLike[], crestS = [], tuning?)`
  → `BarrierPlan { spans: BarrierSpan[]; length }`. Never throws;
  invalid input → empty plan.
- `barrierAt(plan, s, side): boolean` — allocation-free point query.
- `anyBarrierAt(plan, s): boolean`, `guardedRatio(plan): number`,
  `auditBarriers(plan, tuning?): string[]`
  (`bad-plan | bad-length | bad-span | out-of-bounds | unordered | over-cap`).
- `outsideOf(dir) / insideOf(dir)`.

## Measurements (synthetic, L = 2200)

| Case | Result |
|---|---|
| Open track | 0 spans, ratio 0 |
| 1 drift corner (100u arc) | 1 span, 170u (advance+runoff) |
| Drift + drift + sweeper | ratio ~0.24 |
| 40-corner stress | capped at 64, audits clean |
| Crest on apex | landing open, entry/exit kept, no slivers < 20u |

## Integration steps (integrator only)

1. Build once per daily load: `planBarriers(track.length,
   stats.events, track.crestS)` and hold on the track view. Enroll
   `src/barrier-plan.ts` + `tests/barrier-plan.ts` in
   `tsconfig.tests.json` / `npm test` (worker does not touch configs).
2. `src/sim.ts` wall block: gate the `|lat2| > LIM` clamp + `wallHit`
   event on `barrierAt(plan, sAtContact, sideOf(lat2))`. When open,
   skip clamp/impact entirely so the car leaves the road (existing
   offroad/fall/respawn paths take over). Keep `wallLimit(halfW)` as
   the contact plane where a barrier exists.
3. `src/visuals.ts` rails: render guardrail instances exactly on
   `plan.spans` (sample `cum` stations inside spans) so collision and
   visuals never diverge. `planGuardrails` uniform spacing must go.
4. `src/main.ts`: pass the plan to sim + visuals; show no new HUD
   (open edges read from missing rails + chevrons).
5. Re-run full suite + build + browser QA per orchestration checklist.

## Risks / notes

- Sim currently clamps everywhere; until step 2 lands, the plan is
  advisory only — visuals must not switch to span rendering before
  sim gates on the same spans (mismatch = invisible walls or
  visible rails that don't collide).
- `crestS` must be the accepted track's actual crest stations; stale
  or omitted crests leave rails across jump landings.
- `stats.events` short-corner cutoff is 30u arc; corners below that
  never get barriers by construction (open by rule, not by bug).
- Query is linear in spans (≤ 64); fine per fixed step, no allocation.
- Tests import `../src/barrier-plan.js` (nodenext, matching harness)
  and compile to `/tmp` only.
