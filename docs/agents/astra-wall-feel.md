# Wall severity continuity — worker handoff (2026-09-14)

Owner files: `src/sim.ts`, `tests/physics-feel.ts`.

## Measurement (before fix)

Severity sweep, fixed 60 fwd speed, approach angle varied (headless probe,
same setup as the W2/W3 tests):

- vn ~6.0 (glance): 19.6% retained-speed dip, no crash timer.
- vn ~6.6 (just above threshold): 49.4% loss + full 0.6 s crash timer.

A ~10% change in normal speed caused a ~30 pp jump in instant loss plus a
full recovery penalty. Root cause: the impact branch floored loss at
`WALL_HIT_MIN_LOSS` (0.40) and always set the full `CRASH_UPSET_TIME`.

## Fix (`src/sim.ts`)

- New constants: `WALL_IMPACT_BLEND_VN = 6` (blend band above the glance
  threshold), `WALL_IMPACT_MIN_UPSET = 0.25` (crash-time floor at the edge).
- Impact loss now blends from the glance level (0.12) to the full formula
  via smoothstep over vn 6–12; crash time ramps from 0.15 s to the full
  0.6 s over the same band.
- Untouched: glance branch, event boundary, `wallSev`, rebound
  (`WALL_RESTITUTION`, still proportional), impact cooldown, deep-penetration
  guard, one-event-per-contact, mid-scrape escalation (requires vn > 12, so
  always above the band), and everything at vn >= 12 (bit-identical costs).

After fix: vn 6.0 → 19.6%, vn 6.6 → 20.5% (+0.9 pp, crashT 0.15 s),
monotonic rise to vn 28.8 → 60.3% with full crash time. Hard-crash cost
and recovery are exactly as before.

## Tests (`tests/physics-feel.ts`)

- New `WS` sweep block (9 angles, vn ~4.8–28.8): monotonic loss, slope
  bound < 10 pp per unit vn (old code measured ~50 pp/vn at the cliff),
  threshold crossing < +6 pp, light-impact crashT shortened but nonzero,
  hard hit ≥ 45% loss with full crash time, shallow < 55% of hard cost,
  every above-threshold contact still spends one event.
- No existing assertion was weakened; W2/E6/W3/R1 (vn ≥ 12) exercise
  unchanged code paths by construction.

## Verification

Built with `npx tsc -p tsconfig.tests.json --outDir /tmp/wallfeel/testrun`
(worker-specific dir, no `test-dist` race) and ran every `npm test` binary:

- physics-feel 180/180, harness 276, ghost-share 117, visuals-budget 132,
  render-motion 51, drift-control 91, track-variance 197, loop-ui 28,
  trails-bounds 41, barrier-plan 49, barrier-edge 44, corner-apex 54 —
  0 failures everywhere.

## Limitations

- Headless synthetic-track measurements only; no human playtesting is
  claimed. Feel validation (does a 20% light-impact dip read correctly at
  race speed) needs a hands-on pass.
- The absolute loss figures include the offroad entry cut shared equally by
  all sweep points; relative continuity is what the test pins.
