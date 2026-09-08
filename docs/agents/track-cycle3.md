# Track width / density — Cycle 3 handoff

## What changed (owned files only)

- `src/trackgen.ts`: `TRACK_HALF_W` 8 -> 11.5 (23u total); 12-corner seeded
  grammar (5 drift + 1 decreasing complex + 4 sweepers + 2 kinks) over
  2000-2500u; seeded order/direction/radii/lengths/elevation/landmarks;
  quotas rescaled (`EVENT 11-14`, `DRIFT 5-7`, `SWEEP 3-4`, `>=2`
  S-transitions, `CLEAR_MIN` 40). All exports/signatures preserved;
  `AcceptedTrack` gains optional `landmarkS`; `buildCenterline` behavior
  unchanged (delegates with default elevation/landmarks).
- `tests/track-variance.ts` (new): 196 checks green via isolated `/tmp`
  compile (shared build untouched during parallel work).
- No edits to sim/main/visuals/environment/config/dist; no deploy.

## Metrics

Today (`2026-09-07`): len 2355u, est 31.4s, 12 events (6 drift / 4 sweep /
2 kinks), clearance 204, attempt 1, no fallback.
60-seed distribution (`2026-06-01..2026-07-30`): len min 2310 / med 2411 /
max 2493; est 30.8 / 31.9 / 32.8; events always 12; 0 fallbacks; 60/60 unique
checksums; radius min <=55 / max >=140 / sd >=22; >=15 distinct L/R patterns;
drift arcs all >=40u (three-line choice, no trivial cuts).

## Pace mapping (35-50s human target)

`estTimeS` models near-optimal envelope pace (30.8-32.8s); pursuit autopilot
in the suite finishes the same tracks in 31.5-39.7s. Human runs with
suboptimal lines, mistakes, and cycle-2 crash penalties land above that pace,
which is what the 35-50s band describes. The suite gates est 28-38 and
autopilot completion (<70s); it does not inflate estimator physics to chase
the band. Cut-resistance is enforced sim-side (harness 13a: infield teleport
credits nothing); track-side, drift arcs >=40u and clearance >=40u keep
off-road cuts long and unrewarding under the sim offroad cap.

## Design notes

- Class bands sit inside measured classes with margin (drift grammar 42-68
  vs measured 35-75; kink 150-158 vs 145-165) so sampling noise never
  reclasses an event; min link 50u beats the analyzer's 25u merge gap.
- Decreasing complex uses a true 0.50-0.58 exit ratio plus >=80u entry / >=95u
  exit links (smoothing bleeds ~28u; short links destroyed the measured ratio).
- Crest hosts are floored to >=195u, offset 150u before the host end, and
  restricted to straights feeding sweep/kink followers (full-speed landings).
- Direction assignment alternates with 0.7 probability plus net-angle
  hill-climbing (<=50deg residual) so courses rarely loop back (clearance
  typically 150-235 vs the 40 gate); >=2 S-transitions enforced by
  construction, acceptance loop covers the rest.
- Elevation voice (climb 10-16, roller amp/len/phase) lives inside the climb
  term only: start flat (y=6, s<200) and finish flat (y=7, s>L-150) are exact,
  rollers stay under jump-crest prominence.

## Integrator attention (required)

- `tests/harness.ts` quotas (`len 1300-1800`, `nev 7-9`, `drift 3-4`,
  `sweep 2-3`, `first 120-240`, `est 16-26`, single transition) pin the old
  design and WILL FAIL until mirrored to the new ranges. Canonical-fallback
  test constructs `AcceptedTrack` without `landmarkS` (still compiles:
  the field is optional).
- Downstream lateral assumptions reference `halfW` dynamically in
  main/visuals (guardrail/chevron/tick offsets) and need no change, but
  environment scrub/wall absolute laterals deserve a visual check on the
  wider road. `sim.ts` wall/offroad margins read `tr.halfW` dynamically.
