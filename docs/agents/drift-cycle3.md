# Drift rhythm Cycle 3 handoff — drift-control prototype

Updated: 2026-09-07. Owned files: `src/drift-control.ts`,
`tests/drift-control.ts`. No changes to sim/main/trackgen/configs, `dist/`,
or `test-dist/`. No deployment. Tests: 53 checks, all passing under plain
node via temporary compiled output in `/tmp` only; `tsc --strict` clean.

## What it is

A pure deterministic rhythm state machine (`idle → sliding → cooldown`) that
decides WHEN a drift starts/ends and HOW MUCH the exit slingshot pays. It owns
no physics: speed caps, realignment forces, and velocity changes stay sim-side.
Intent arrives as `{ steer (-1..1), handbrake bool }` per fixed step, so
keyboard edges and analog mobile flicks share one path with no binding changes.

Rhythm: steering + handbrake TAP (rising edge; quick release) enters a slide
that persists after release. An opposite-direction flick (`|steer| >= 0.35`,
opposite sign to entry) commits the exit and fires a ONE-SHOT boost event.
Quality = developed peak slip × exit alignment × exit speed × countersteer
decisiveness × a commitment time-gate. Cooldown (1.2s) + neutral re-arm
(`|steer| < 0.12` pass required) stop left-right spam.

## API (`src/drift-control.ts`)

- `DEFAULT_DRIFT_TUNING: DriftTuning` — entry steer 0.18 / min speed 25 /
  tap window 0.35s / exit flick 0.35 / deadband 0.12 / optimal slide
  0.45–1.8s / timeout 4s / peak slip 8–28 deg (spin >45) / cooldown 1.2s /
  boost 0.6s × up to 20 u/s². `GRIP_TOP_SPEED = 80`, `BOOST_SPEED_CAP = 84`.
- `createDriftState / createDriftOut / resetDrift`
- `updateDrift(s, t, inp: DriftStepInput, out: DriftStepOut)` — void, holds on
  `dt <= 0` / non-finite input; airborne steps freeze slide/cooldown clocks but
  keep tracking handbrake edges. `out: { phase, slideBlend, boostAccel,
  event: none|entered|exit|expired|rejected, quality, grade }`.
- `scoreExit(t, peakSlip, exitSlip, exitSpeed, age, counterMag): number`,
  `gradeExit(q)` — perfect ≥0.8, good ≥0.55, weak >0.05, else none.

Key behaviors (all asserted): tap enters once; slide persists without
handbrake; early (<0.45s) exits gate down to weak via multiplicative
commitment gate; late (>1.8s) decays; timeout expires unrewarded through
cooldown; straight/low-speed/airborne taps ignored; same-side full lock holds;
mirrored directions work; sub-threshold analog (0.1) ignored, 0.2 enters;
long handbrake holds (>0.35s) mark the tap sloppy (reward ×0.4); spins and
crawling exits (<25 u/s) score 0; slow drops (<15 u/s) abort forgivingly to
idle with no cooldown tax; cooldown taps rejected + counted (`spamCount`).

## Slingshot sizing (drag projection: accel 50, `k = 50/80²`, exit at 68 u/s)

| Exit | Boost (u/s² × 0.6s) | Peak | Time >80.5 |
|---|---|---|---|
| Perfect (q≈0.92) | 18.4 | 82.1 | 1.22s |
| Good (q≈0.65) | 13 | 80.0 | 0s |
| Weak (q≈0.2) | 4 | <80 | 0s |

Good exits restore grip-top speed; only near-perfect exits briefly exceed it
(+2.1, ~1.2s) and never reach the 84 sim-side cap. Weak exits are felt as a
clean realignment, not a boost.

## Integration notes (integrator, `sim.ts` only)

1. Enroll `src/drift-control.ts` + `tests/drift-control.ts` in
   `tsconfig.tests.json` and the `npm test` chain (module-scoped, `../src/`
   relative imports, `process.exit` only — matches existing suites).
2. Hold a `DriftState`+`DriftStepOut` on `SimState` (init in `createSimState`,
   reset in `resetRun`/`simRespawn`); call `updateDrift` once per `simStep`
   with `{ dt, steer: s.steer, handbrake: inp.drift, speed, slipDeg:
   slipNow*180/π, grounded: s.grounded }` (all already computed in-step).
3. Feed `slideBlend` into the existing `driftAmt`/counter-grip path or use it
   alongside; on `event === 'exit'` add `out.boostAccel` to the forward accel
   term next to `EXIT_BOOST_ACCEL`, and clamp speed to 84 while `boostT > 0`.
   `expired`/`rejected` need no physics response (telemetry only).
4. Keep the existing `driftHold`/`exitT` boost until A/B proves the replacement;
   the two systems must not stack — gate the old `EXIT_BOOST_ACCEL` off when
   the rhythm module issues a boost.
5. Ghost/replay impact: none (no recording format change); PBs may fall as
   exits pay more — expected, do not "fix" by retuning grip.

## Tuning knobs (if feel is off)

- Slingshot too weak/strong: `boostAccelMax` (20) — re-run sizing table.
- Exits feel ungenerous: widen `optEnd` (1.8) / narrow `alignDeg` (20); for
  stricter timing do the reverse. Early forgiveness lives in `earlyEnd` (0.45).
- Spam still possible: raise `cooldownS` (1.2); accidental lock-outs: lower
  `rearmDeadband` (0.12) or shorten cooldown.
- Mobile flicks misfire: `exitOppSteer` (0.35) is the main lever; keep above
  stick noise (~0.15) and below full-lock commitment.

## Risks

- Commit-on-flick-edge means a mid-drift correction past 0.35 opposite
  ENDS the slide — intended (commitment), but drivers used to wiggling will
  exit accidentally until they learn the tap. The neutral re-arm teaches it.
- `slipDeg` input quality bounds everything: if sim slip is noisy at entry,
  `peakSlipDeg` inherits it — low-pass before passing in if needed.
- Timeout (4s) + cooldown punishes long stylish slides; if track work adds
  sweepers needing >3s drifts, raise `lateEnd`/`timeoutS` together.
