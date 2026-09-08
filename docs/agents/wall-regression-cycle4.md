# Wall regression — cycle 4 handoff

## Contract (single source of truth)

Visual guardrails (`src/visuals.ts` rail segments) are centered at lateral
`halfW + RAIL_OFFSET` with box half-depth `RAIL_HALF_DEPTH`. Physics contact
plane for the car CENTER (`src/sim.ts`):

- `RFACE = halfW + RAIL_OFFSET - RAIL_HALF_DEPTH` (rail inside face)
- `DLIM = wallLimit(halfW) = RFACE - CAR_RADIUS - WALL_MARGIN` (center clamp)
- Body edge meets the rail face within `WALL_MARGIN`.

Daily width: `halfW = TRACK_HALF_W = 11.5`, so `DLIM = 11.725`,
`RFACE = 13.225`, edge gap `0.300`. Contact normal `wallNx/wallNz` is the
inward (road-pointing) normal; verified `dot == 1.000` on both walls.
Steering sign: `away = steerEff * sg < -0.05` (steer opposite the contacted
side vents scrape drag). No `sim.ts` changes were needed this session; the
LIM + deep-penetration guard from the earlier cycle-4 pass stands as-is.

## Root causes found (measured, not assumed)

1. Old `LIM = halfW + 1.6` let the car center travel 1.075u past the rail
   inside face before any response (visible penetration / pass-through).
   Fixed by the `wallLimit()` contract above (prior pass, kept).
2. Shared-harness absolute pins (`-9.4`, `-9.7` at halfW 8) are now 1.2–1.5u
   deep spawns. They take the deep-penetration guard impact on step 1 and
   still pass every bound verbatim (13e: avg 26.1, adv 5; 13d: stuckMs 1800).
   Owned E6 pins were reverted to the same absolute values so the mirror is
   exact; do not "fix" them to LIM-relative (that path measures something
   else and diverges from the harness).
3. Apparent anomalies while calibrating were test-protocol artifacts, not
   sim bugs: raw lateral velocity (straight heading) is killed by grip before
   contact (use heading-angled approaches); holding straight into the wall
   after a hit correctly re-pins (steer away to measure rebound+recovery);
   a curve kiss that leaves and re-touches is genuinely two edge-triggered
   events (assert cooldown spacing, not count 1).

## Measurements (final /tmp build, deterministic across runs)

- R1 contact both walls: clamp err 0.0000, edge gap 0.300, 1 event,
  sev 0.41, vnOut 5.0, normal dot 1.000.
- R2 glance both walls: 0 events, scrape 2, end 80.0, pen 0.000.
- R3 R40 late-apex: exit reached, 2 events spaced 1.10s, pen 0.000,
  maxJump 1.34; chord sagitta R40 0.314 / R38 0.330 / R133 0.094
  (visuals-owned residual; physics rides the true offset curve).
- R4 crest landing: maxLat 10.72 (<= DLIM+0.05), 0 events, jump 1.33.
- R5 into-wall grind: avg 8.5, adv 7, 0 events; pinned car rebuilds to 60
  in 0.83s (never trapped); fresh-start away recovery 0.38s.
- R6 teleport/anti-cut: clamps to DLIM+0.05, adv <= 4, no finish.
- R7 hard hits both walls: 1 event, sev 0.92, vnOut 11.4, gap 3.59 at 0.5s.
- W-block (halfW 8): W1 glance end 80.0 pen 0.000; W2 sev 0.72 gap 0.72;
  W3 sev 1.00 gap 1.22; W4 into-grind avg 8.5 adv 7; W5 away 76.5 vs
  lean 21.1, t70 0.53s; W6 exactly 1 event; W7 no cross/teleport.
- Harness protocols replicated verbatim: 11h loss 0.582 (0.50-0.70),
  11h grind 40.9/18, 13d stuckMs 1800 / pin 0.6 / escape 1.63s,
  13e avg 26.1 adv 5. All inside harness bounds.
- Owned suite: 123/123 pass; full output byte-identical across runs.

## Changed symbols

- `src/sim.ts`: untouched this session (owns the earlier `RAIL_OFFSET`,
  `RAIL_HALF_DEPTH`, `wallLimit()`, redefined `WALL_MARGIN = 0.3`,
  deep-penetration guard — all kept).
- `tests/physics-feel.ts`: E6 pins reverted to absolute harness mirrors
  with comments; W4 now a true into-wall grind (steer +1, avg<20/adv<12);
  W2/W3/R7 gaps steer away post-hit; R2/R7 heading-angled approaches;
  R3 allows <= 2 cooldown-spaced kisses; new R0-R8 daily-width block
  (accept check, both-wall contact/rebound/normals, glance, R40 late-apex,
  crest landing, grind+spam, teleport anti-cut, high-speed hits,
  determinism). `wallLimit`, `RAIL_*`, `CAR_RADIUS`, `WALL_MARGIN`,
  `acceptDailyTrack`, `TRACK_HALF_W` imports added.
- This file: `docs/agents/wall-regression-cycle4.md` (new).

## Risks / notes for integrator

- Do not edit the harness pins (`-9.4`/`-9.7`) to match the new LIM without
  also moving its bounds: they currently pass via the guard path, and
  changing them alters what 13d/13e measure.
- 13d-lean margin is 1800 vs bound 1500 (deterministic, stable, but the
  thinnest margin in the wall set).
- Full-lock into-wall grind decays to a near halt (spd ~0-3) while rotating;
  recovery is quick (<= 0.9s), so this is punishment, not a trap — but do
  not strengthen scrape drag without re-checking E6/W5 recovery times.
- Rail-chord sagitta (up to ~0.33u at R38/L10) is visuals-owned; physics
  intentionally stays on the true offset curve.
- Compile/run used `/tmp/wallc4` only; no shared builds, no dist, no deploy.
