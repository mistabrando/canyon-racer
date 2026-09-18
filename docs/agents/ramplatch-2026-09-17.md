# ramplatch — launch ramp as a one-way latched effect (2026-09-17)

Worker task: T1 post-dirt recovery crippled by the speed-dependent ramp; T2 keep
the launch progressive. `ACCEL_ROAD` stays 85, `ACCEL_OFFROAD` 6,
`OFFROAD_DRAG` 1.0, `LAUNCH_RAMP_MIN` 0.15, `LAUNCH_RAMP_END` 80 — no constant
changed.

## Root cause (verified)

The ramp was a pure function of current speed: any low-speed moment — dirt
crawl, crash, spin — read as "just launched" and held road accel at ~15%+.
Returning to the road at the ~6 u/s dirt crawl, the first-step gain was ~18.1
u/s/s instead of 85, and 6->100 took ~1.97s instead of ~1.10s. Dirt followed
the player back onto the road, against the explicit user rule that dirt only
bites while on dirt.

## Latch design (`src/sim.ts` only)

- `SimState.launchRampArmed: boolean` — armed `true` in `createSimState` and
  `resetRun` (only arming site in the run lifecycle).
- While armed, free-driving grip accel scales by the existing speed ramp
  (slides, live boost windows, rail contact still bypass, unchanged).
- One-way disarm in `simStep` when total car speed reaches `LAUNCH_RAMP_END`
  80, checked pre-accel (catches entries already at pace) and post-velocity-
  write (catches the crossing step exactly). Never re-armed mid-run.
- `simRespawn` untouched: it preserves the flag, so a rescue never
  re-cripples acceleration. (A pre-disarm rescue stays armed — still in the
  launch phase, by definition.)
- Off-road accel stays `ACCEL_OFFROAD` 6 + `OFFROAD_DRAG` 1.0 exactly; terminal
  dirt (settle ~6.0) intact. `StepInfo` untouched; all exported names kept.

## Measurements (headless, flat synthetic road)

Launch from countdown (unchanged from feel3 — still progressive):
punch 21.8 u/s/s, t20 0.40s, t40 0.92s, t70 1.40s, t100 1.77s, t140 2.23s,
top 140.0, latch disarmed by end of the pull.

Post-dirt recovery (the fix): cruise to disarm, dirt settle 6.0, back on road
at the crawl, full throttle — first-step gain 85.0 = full `ACCEL_ROAD`,
crawl->100 in 1.10s, settled top 140.0. Control (fresh disarmed pull from the
same crawl): gain 85.0, 1.10s — bit-identical. Armed contrast at the same
speed: 18.1 (matches the ramp formula, proving the latch is the difference).
Dirt penalty strictly conditional: disarmed on-road gain is exactly 85, top
exactly 140, so `ACCEL_OFFROAD`/`OFFROAD_DRAG` leave no residue on asphalt.

Drift radius (E2 protocol): 32.0, slip 24.6deg — identical to feel3, inside
the 24-34 band, no further tightening. Corner entry (100+, slides bypass)
untouched.

## Tests

- ADDED `tests/physics-feel.ts` OT8 (11 asserts, numbers stated inline):
  armed-at-reset, ramp punch 21.8, disarm at 80, respawn preserves disarm,
  dirt settle 6.0, recovery gain 85.0000 == control 85.0000 exactly, armed
  contrast 18.1, crawl->100 1.10s == control, band <1.3s, top 140.0.
- No bands moved: launch/drift/dirt curves are numerically identical to
  feel3 (punch/t40/t100/t140/radius/settle all re-measured equal), so E1,
  E2, OT3/OT4/OT5/OT6, 11a/11c hold as written.
- Full 16-suite `npm test` green (0 failures everywhere), `npx tsc --noEmit`
  clean, `npm run build` succeeds. Scratch probe at repo root deleted.
