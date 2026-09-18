# Off-track diagnosis (headless probe) — 2026-09-17

**These are headless measurements, not human playtests.** A deterministic probe
(`.muse/offtrack-probe.mjs`, fixed seed tracks, fixed `dt = 1/60`, no wall-clock,
no `Math.random` in the sim path) drives the real `simStep()` off the road and
records required (`v_post * dt`) vs actual displacement every step, so any
clamp/push is provable rather than asserted. Raw per-step logs:
`.muse/logs/offtrack/*-steps.jsonl` + `summary.json`. Run with
`node .muse/offtrack-probe.mjs` (after `npx tsc -p tsconfig.tests.json`).

**Source state measured.** HEAD `db15510` plus the physics worker's uncommitted
`src/sim.ts` diff (do not edit `src/` — another worker owns it). Two epochs:
(1) pre-`WALL_CLAMP_REACH` build — contains the off-road pitch fix but not the
far-outside skip; (2) post-`WALL_CLAMP_REACH` rebuild (current, `WALL_CLAMP_REACH = 4.0`
at `src/sim.ts:95`). Epoch-1 numbers are quoted where the fix changed behavior;
everything else is epoch-2 (current).

**Bottom line.** There is no teleport and no respawn off-track — the only
teleport in the codebase is manual-R `simRespawn()` (`src/sim.ts:359`). What
reads as "the game reset me" is the **guardrail clamp + impact system firing
while the car is already off the road**: single-step lateral position snaps of
1.3–1.6 u (66 u before the in-flight `WALL_CLAMP_REACH` fix), up to −60% speed
in one step, then scrape-grind pinning at the rail that drags the car to ~2 u/s.
Dirt itself is clean: 0 clamp steps over 4549 open-plain steps.

## Ranked causes of "weird physics when I fall off the track"

### 1. Rail-clamp yank + full-severity impact while off-road (the "reset")

When the car's arc position drifts into a barrier-plan rail span while it is
already metres off the road, the wall clamp engages with the full accumulated
penetration and yanks the car back to `LIM` in one step, and the
deep-penetration guard converts that penetration into a crash.

Epoch-1 smoking gun, daily-2026-09-17-seed daily-2026-09-16 (i0=941),
roam step 311: prior step `(1092.3, 576.9)`, lat −77.99, speed 34.29, free
motion; this step `(1038.9, 616.2)`, lat −11.725 (= `LIM`), speed 16.13,
`wallHit` severity 0.82, **required-vs-actual mismatch 66.10 u**. A 66-unit
lateral snap plus halved speed in 1/60 s. The only post-integration position
writes in `simStep` are the wall clamp (`src/sim.ts:716`,
`s.px -= tr.nx[j] * sg * push; s.pz -= tr.nz[j] * sg * push;`), the start
backstop (`:799`, gated within 40 u of start — not this case), and the finish
lerp (`:854-856`, fractional — not this case), so the yank is provably the
clamp at `:713-716` (`if (Math.abs(lat2) > LIM && guarded ...)` with
`push = Math.abs(lat2) - LIM` at `:714`), with severity manufactured by the
deep-penetration guard at `:729`
(`const effVn = freshTouch && vn <= WALL_GLANCE_VN ? Math.max(vn, push * 12) : vn;`)
plus restitution shove at `:745-746` and loss. Same run: repeat snaps of
1.94/1.29/1.20 u at severity 1.0 during the pinned spin (steps 780/860/1024).

Epoch-2 (current, `farOutside` skip at `src/sim.ts:713-716` gated by
`WALL_CLAMP_REACH` at `:95`): the 66 u class is gone — daily-2026-09-16 now
maxes at mismatch 1.48 u. **Residual:** 1.3–1.6 u snaps at severity 1.0 still
fire whenever the car is within 4 u of the rail line: daily-2026-09-15 step 79
(67.66 → 32.38 u/s, push 1.30 u, sev 1.0), step 430 (39.04 u/s, push 1.60 u,
sev 1.0); daily-2026-09-17 steps 579/639 (push 1.31/0.99 u, sev 1.0).
A 1.5 u snap + ~50% instant speed cut at the road edge is still a strong
"reset" candidate, and it happens exactly where centrifugal force puts a
leaving car: rails guard corner outsides.

### 2. Rail recapture pins the car at LIM and grinds it to a crawl (the "held")

After any contact, the clamp holds lateral distance at `LIM = wallLimit(halfW)`
(`src/sim.ts:693`, = 11.5 + 2.0 − 0.275 − 1.2 − 0.3 = **11.725**, confirmed in
logs to 3 decimals) while scrape drag (`WALL_SCRAPE_DRAG`) bleeds speed every
step. Daily-2026-09-16: exit impact 126.52 → 52.24 u/s, then pinned at lat
11.72 grinding 52 → 6.4 u/s within ~0.5 s, roam ends at 3.38 u/s still pinned
(262/262 scrape steps). Daily-2026-09-15 roam ends at 0.08 u/s pinned at
−11.73. Straight-railed slide phase: 235 of 300 steps scraping, per-step pushes
on 235 steps (mean 0.010 u, max 1.29 u), speed 64.9 → 2.7. So near a guarded
span the car does **not** get out onto the plain at all — it is held at the
rail and slowed to walking pace. Steering away unpins fast (escape 0.45–1.92 s
in probe), but a player holding lock into the rail feels stuck.

### 3. Dirt collapses speed but never touches yaw (the "spin around" half)

Off-road caps and drags (`MAX_OFFROAD_SPEED = 44` at `:24`, `ACCEL_OFFROAD = 16`
at `:21`, `OFFROAD_DRAG = 0.5` at `:56`, `DIRT_LATERAL_GRIP = 4.0` at `:25`,
cap selection at `:560`, drag at `:606`): straight-open exit at 128.21 u/s →
46.58 within ~1 s, 34.53 at +1 s, settling to **~32, not 44**
(16/0.5 equilibrium; 44 is a ceiling, never a cruise). Time to ≤45 u/s:
0.02–0.15 s on all tracks. The 8% edge-step cut (`:553`,
`if (offroad && !s.wasOffroad) fSpeed *= 0.92;`) is negligible next to drag.

Spin behavior: full lock each way rotates the car a full 360° in 3 s
(−365.6°/+350.4° on straight-open; repeatable to 0.1°), mean yaw over the last
spin second still 2.24–2.28 rad/s — **yaw does not decay**. Speed does:
32 → 9.9 u/s during one 3 s spin (scrub + drag), settling at a ~10 u/s
full-lock donut (slip ≈ −28°, net translation ~1 u/s). So the user's read is
half-right: the car *does* spin freely and is never yaw-stuck; what dies is
translation. "Just let the user spin around" is already true for rotation —
the stuck feeling is all speed, all drag/scrub, no clamp (0 clamp steps in
spin on open plain).

### 4. OOB is prompt-only (verified harmless)

`oobMs` arms past `halfW + OOB_EXTRA_LAT` (`:124`, `:786`) and decays back
(`OOB_DECAY`). Straight-open: armed 1.03 s after exit, peaked at 73700 ms, and
the position trace is pure velocity integration throughout (max mismatch 0.0
over 4549 steps). No depth test, no backstop wall, no teleport — consistent
with the code comments.

### 5. Return to road: fast once pointed, but pointing is the whole game

With a gentle capped homing controller (documented in the probe; full-lock
homing just donuts — see below): straight-open 339.8 u out → back on road in
**14.05 s / 316.5 u**; daily-2026-09-17 from 66 u out → 3.28 s / 55.4 u;
daily-2026-09-15 from 42.7 → 1.92 s / 31 u; daily-2026-09-16 from 63.6 →
4.02 s / 54.4 u. Recovery is practical, at dirt equilibrium ~25–32 u/s.

Controller caveat worth reporting: bang-bang full-lock steering off-road
orbits uselessly (carved a 1700 u arc away from home in testing; a ±π branch
cut in naive pursuit parks the car in an endless 9.8 u/s donut). A human does
what the probe's final controller does — small corrections — but the coupling
is unforgiving: nose authority (~2.3 rad/s even at 10 u/s) far exceeds what
the dirt velocity vector will follow (`DIRT_LATERAL_GRIP = 4.0`), so hard
steering mostly rotates the car in place.

## Explicitly NOT reproduced

- **No teleport/respawn.** Only `simRespawn()` (`:359-377`) moves the car
  discontinuously, and the probe never calls it. OOB never teleports.
- **No void/fall.** Ground exists everywhere (`groundSurfaceY`,
  `src/surface.ts:11,14`; sim `:643-658`); the car never drops below the
  surface in any log.
- **No pitch artifact on current source.** The physics worker's in-flight
  ground-sampled off-road pitch (`:663-677`) reads level on the plain:
  max |pitch − true| = 0.0 over 840 plain rows on straight-open/grade-open.
  Residuals ≤0.06 appear only at the verge outer edge (|lat| ≈ 29.5–30.4) and
  track the probe's own ground-truth sampling across the blend, not sim error.
  (One 0.1194 residual on grade-open in an interim run sat in the same verge
  band.) The pre-fix road-grade pitch the task describes is already fixed in
  the measured source.
- **No yaw freeze.** Yaw never decays while steering is held, on any track.

## Numbers at a glance (current source)

| track | exit (u/s, pre→post) | clamp push / sev | plain roam end | spin 3 s+3 s | return |
|---|---|---|---|---|---|
| straight-open | 126.52→128.21 (clean) | 0 steps, max 0.0 | 31.95 u/s @ lat 319 | −365.7°/+350.4°, →9.9 | 14.05 s, 316.5 u |
| grade-open | 126.52→128.21 (clean) | 0 steps, max 0.0 | 31.95 u/s @ lat 319 | same | 14.05 s, 316.5 u |
| daily-09-15 | 122.94→49.61 (rail) | 140 steps, max 1.60, sev ≤1.0 | 0.08 u/s pinned −11.73 | −325°/+349° pinned | 1.92 s, 31 u |
| daily-09-16 | 126.52→52.24 (rail) | 262 steps, max 1.48, sev ≤1.0 | 3.38 u/s pinned 11.73 | −310°/+323° pinned | 4.02 s, 54.4 u |
| daily-09-17 | 113.13→112.99 (clean gap exit!) | 4 steps, max 1.31, sev ≤1.0 | 15.22 u/s @ lat 8.9 (drove back) | −310°/+344° | 3.28 s, 55.4 u |
| straight-railed | n/a (rails everywhere) | 367 steps, max 1.62, 25 hits | pinned ±11.725, grind 140→~3 | n/a (ping-pong) | unpin 0.45 s |

Railed grind detail: 8 impacts at max severity 1.0, max slip 89.6°,
ping-pong across the road on restitution 0.5 (`:90`).

## Notes for the physics worker (evidence only, no fix proposed)

- The pre-`WALL_CLAMP_REACH` 66.10 u yank (daily-2026-09-16 roam step 311:
  lat −77.99 → −11.725, 34.29 → 16.13 u/s, sev 0.82) is the single most
  reset-like event measured; the reach gate removes that class (verified:
  no post-fix event above 1.62 u). The remaining 1.3–1.6 u in-reach snaps at
  severity 1.0 are the next place to look.
- `trackFromPoints` bakes `barrier: null` (`:182`), i.e. legacy/test tracks
  collide everywhere — any test driving off-road on such a track measures the
  rail system, not dirt. The probe's open regime uses `{spans: [], length}`;
  daily tracks use the real `planBarriers` spans like `main.ts`.
- Probe controllers are scripted (pursuit cruise, full-lock depart/spin,
  latched capped homing) and were iterated during this work (including a
  steering-sign fix: the sim needs negative-feedback `steer = −k·err` since
  `heading -= steer·yawRate·dt`). Controller code is in the probe, never in
  `src/`. No file under `src/` or `tests/` was modified by this worker.
