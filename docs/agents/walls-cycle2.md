# Wall feel cycle-2 handoff

Updated: 2026-09-07. Owned files only: `src/sim.ts`,
`tests/physics-feel.ts`, this doc. No changes to `main.ts`, `trackgen.ts`,
`harness.ts`, configs, `dist/`, or `test-dist/`. No deploy. All compiles/runs
used `/tmp` output dirs only; the shared harness was compiled to `/tmp`
read-only for regression checks. Deterministic 1/60 sim preserved; no public
API changes (no exported symbol added, removed, or revalued).

## Result

- `tests/physics-feel.ts`: 63 pass / 6 fail at session start
  (F2x3, W1 glance-speed, W5 grind-ratio, W6 one-event) → **73 pass / 0 fail**.
- Shared `tests/harness.ts` (read-only `/tmp` check): **252/252 before and
  after** — E6 wall/offroad/cut bounds hold.

## Root causes fixed (all wall-attributable, in `simStep` wall block)

1. **Inverted steer-away sign (sim + test).** The scrape-drag vent used
   `steerEff * sg > 0.05`, which vents when steering INTO the contacted wall
   and punishes genuine recovery. Correct is `< -0.05` (away = steer opposite
   the contacted side). The test helper `awaySteer` had the same inversion, so
   W1/W5/W6 recovery drivers steered into the wall while the sim vented them —
   masking the bug. This single inversion explains the W5 paradox
   (grind 30.1 > away 11.4) and the W6 re-touch second impact.
2. **Per-tick cost compounding while pinned.** Glance scrub applied every
   contact step (ground a 60-speed glance to ~0) and `scrapeT` never reset
   off-wall (permanent full ramp). Now: glance applies once per fresh touch,
   sustained light contact pays scrape drag only, `scrapeT` resets off-wall.
3. **Cooldown-only impact gating re-fires on marginal re-touches.** Impacts are
   now edge-triggered (`freshTouch = scrapeT <= 0`): one event per fresh touch
   plus a 0.35 s cooldown; a harder lean-in past 2x the glance band may
   escalate mid-scrape. Sustained grinds emit exactly one event.

Crash feel itself (previous session) is kept verbatim: deflect kills
into-wall normal velocity, 40–62% tangential loss scaled by `vn`, inward
restitution `vn * WALL_RESTITUTION`, severity `vn/25`, `crashT` upset +
wobble, inward `wallNx/wallNz` telemetry. All exported constants unchanged.

## Measured before → after (synthetic flat-track scenarios)

- W1 glance (0.08 rad @ 60): events 0, scrape 68, end-speed 0.5 →
  events **0**, scrape **3**, end **77.8**; penetration 0.000, no teleport.
- W2 medium (0.25 rad @ 70): 1 event, sev 0.69, loss 52.6%, rebound +8.6
  off-wall, 0.57 gap at 0.25 s — unchanged.
- W3 hard (0.5 rad @ 75): 1 event, sev 1.00, loss 59.5%, rebound +17.1,
  1.83 gap at 0.25 s — unchanged.
- W4 sustained grind: avg 31.2, advance 14, exactly 1 event, no per-tick spam
  — unchanged.
- W5 recovery vs grind (same rolling start): away t70 **0.87 s**, avg
  **73.6** vs grind avg **30.1** (was: pinned-start t20 1.87, away 11.4 <
  grind 30.1 — an internally inconsistent comparison that also contradicted
  the shared E6 bound grind-avg > 15; reworked, see below).
- W6 aimed hit + recovery: **2 events → 1 event**, impact flag on 1/120 steps.
- W7/W8/W9: no far-wall crossing, no teleport, deterministic traces, cut
  clamping with zero progress — unchanged, green.

## Test rework (owned file only; physics intent preserved)

- **F2 retired the full-run R45 hairpin comparison.** Proven degenerate: at
  full pace every line takes two ~65+ wall slams and the mandatory crash
  penalty equalizes them (timed 10974 vs grip 10873 — it measured crash
  recovery, not timing; wider-road probes show the pursuit driver + drift is
  unstable there too). Replaced with a driver-free 90° rotation step at pace
  on the wide track: immediate 1.17 s / 83 u < delayed-0.4 s 1.38 / 100 <
  grip 1.55 / 113, all wall-free. Same claim (entry timing decides rotation),
  robust margins, zero wall confound.
- **W1 recovery driver** is now a proportional centre-seeking heading hold
  (`servo`); full-lock-until-on-road over-rotated across the track into the
  far wall at 64 speed (traced). **W6** steers away only while scraping for the
  same reason. **W5** compares rolling rejoin vs full-lock grind from one
  shared start; the perpendicular-pin average was dropped (unfair race +
  E6 contradiction; stuck escape stays covered by E6 in both suites).

## Changed symbols

- `src/sim.ts`: wall-contact block only — added `freshTouch`, edge-triggered
  impact condition, once-per-touch glance, `scrapeT` reset branch, vent sign
  `> 0.05` → `< -0.05`, plus comments. No export touched.
- `tests/physics-feel.ts`: fixed `awaySteer` sign, added `servo` helper,
  rewrote F2 (step-90), W1 (servo recovery), W5 (shared-start asymmetry), W6
  (scrape-gated recovery). 69 → 73 checks.

## Risks / integrator notes (cycle-2 integrator `01a07e3c-f4df-7491-ab8e-4415bf570e28`)

- No `main.ts` change needed: `StepInfo` wall telemetry
  (`wallHit/wallSev/wallNx/wallNz/wallCool`) is API-identical; `wallHit` is now
  strictly one-per-impact so the existing camera-kick edge
  (`wallHit===true`, `wallVn=wallSev*25`) fires once per crash — no spam, no
  wiring change. Severity formula untouched.
- Do not compare wall-grind split times against pre-cycle-2 builds: the vent
  sign fix intentionally moves grind/recovery pace (recovery much faster,
  grinding comparably slow). E6 bounds still pass.
- Mid-scrape escalation (`vn > 2*WALL_GLANCE_VN`) has no dedicated test —
  W4 covers the no-spam side. Suggested follow-up, not blocking.
- No browser/camera QA done here (out of scope); please smoke-test crash
  rebound feel + camera kick on desktop before closing cycle 2.
