# Driving Redteam — Cycle 4 (read-only adversarial QA)

Scope: current integrated `src/sim.ts` + `drift-control.ts` + `trackgen.ts` +
`render-motion.ts` ghost/interp paths, via headless probes against `test-dist`
(no edits to implementation/config/dist; probes in `/tmp/redteam*.mjs`).
Daily under test: `2026-09-07` (`att=1 fb=false len=2355 ev=12 checksum=3003e63 est=31.4s`).
Dailies deterministic (`acceptDailyTrack` same-day checksum stable) and distinct per day.

## Ranked findings

### P1 — Early finish crossing before the 5s arm is permanently missed (real bug)
- Repro (synthetic flat 300u track, drive straight, `DT=1/60`): plane crossed at
  step 249 (`t=4.15s`, arm `FINISH_ARM_MS=5000` fails) → `prevFinD` latches `>0`
  → car sails past the end (`pz=3967`, `lastIdx=150/150`) and **never finishes**
  in 3000 further steps (`raceMs=50.0s`).
- Mechanism (`sim.ts` finish block): the `prevFinD<=0 && curD>0` edge is consumed
  by the unarmed crossing; nothing re-arms it afterward. Turning around in the
  void cannot recover (motion gate freezes `lastIdx` far from track). Only
  `R` respawn recovers (snap is pre-finish, restores the `<=0 → >0` edge).
- Daily-safe today (regulation length puts crossing well past 5s; jump flight
  ~65–97u can't overshoot the finish straight), but any short/test track or
  future faster envelope hits a silent softlock.
- Acceptance: flat 300u, drive straight from `resetRun` → `finished=true`,
  `finishCount=1`, `raceMs` frozen afterward. Suggested fix shape (integrator
  choice): only advance `prevFinD` past the plane when armed, or clamp progress
  at the end straight so the edge can't be consumed early.

### P2 — Unbounded frame-accumulator latency on sustained low FPS (main.ts)
- `acc += dt` with a 4-step cap and **no clamp**: below ~15fps each rendered
  frame leaves ~33ms unconsumed (`0.1s` frame → `stepsRan=4`, leftover `0.0333s`),
  and `acc` grows without bound → permanent slow-motion plus ever-growing input
  latency (classic spiral-of-death guard missing).
- Sim itself is dt-stable (`1/240`–`0.1` finish within 6ms over 19s), so this is
  purely the loop wrapper.
- Acceptance: sustained `dt=0.1` frames → `acc` bounded (e.g. clamp to `100ms`
  after stepping); sim time tracks wall time minus bounded lag.

### P3 tuning notes (measured, no exploit found)
- **Air yaw is full-rate**: `steer=1` in air → `-21.0°/0.33s` (`1.1 rad/s`,
  intentional per code comment, momentum kept); `steer=0` → `0.0°`. Over the
  measured `1.22s` crest flight that's up to ~77° of re-aim. Self-penalizing
  (landing misalignment kills `fSpeed` via scrub), but generous; consider a
  per-jump yaw budget or `1.1 → ~0.5`.
- **Jump float**: reference crest launches to `1.22s` air (design floor `0.42s`
  via `LAUNCH_VY_MIN`); landing stable (`grounded`, `vy=0`, snaps to surface).
  Within constants, on the floaty side at full speed.
- **No-drift daily is viable but slower**: pure-pursuit grip run finishes in
  `36.45s` vs `est=31.4s` (`+16%`) with drift engaged only `4/2188` steps
  (`0.2%`, `breakT=0`). Drift is worth ~5s/day — healthy margin; do NOT buff
  grip yaw without re-checking this bound (pursuit must stay `>est + ~10%`).
- **Ghost fidelity**: encode/decode roundtrip max pos error `0.33u` (quant
  `0.25u` + linear interp, budget `1650` chars typ. downsamples `80→41` pts);
  post-finish sample holds (never loops); malformed input → `null` (safe).

## Verified solid (no bug)
- **Walls, both sides**: `maxOver=0.0000u` incl. perpendicular `vn=80` slam;
  `vn=20` kiss → impact `80→27.3` (`−66%`, sev `0.73`), normals inward,
  rebound slides along wall; cooldown gates spam (`10` hits / `6600` grind
  steps); scrape drag + crash upset stall sustained grinders (wall-follow grind
  bot goes backward/stalls vs clean finishing).
- **Cuts**: `+80x` teleport across hairpin → `lastIdx` frozen (`145→145`),
  `finished=false`; finish tail-gate blocks low-`lastIdx` teleports at the line.
- **Degenerate strategies all lose**: weave perma-drift `143.4s` vs `25.4s`
  clean (`5.6×`); rhythm tap-spam farms only weak exits (`Q≤0.41`) while
  destroying the line (no finish in `150s`); proper technique scores `Q=0.94`
  perfect (`boost 18.8`). Tap-entry needs pre-established steer (sim smoothing
  eats same-step steer+tap — correct anti-accident behavior, silent ignore).
- **Offroad**: entry cut `0.92` (`80→72.9`), cap holds `25.3` (`MAX 26`).
- **Respawn**: exact `+3000ms`, works mid-air (grounded, `vy=0`, clean snap),
  no-op after finish. **Finish-once**: `finishCount` exact, `raceMs` frozen.
- **Determinism**: input replay bit-exact; `interpPose` bounded; zero-step
  frames retain display state.

## Surgical acceptance tests (for the integrator, headless via test-dist)
1. `shortFinish`: flat 300u, `{steer:0}` → finishes, `finishCount==1`.
2. `accBound`: `main.ts` clamps `acc` post-step (assert on source or harness).
3. `airBudget`: full-lock air `0.5s` → `|Δheading| ≤ cap` (whatever is chosen).
4. `grindLoses`: wall-follow grind bot lap `> 1.5×` clean same track.
5. `gripBound`: pursuit no-drift daily within `est..est+25%`, drift-engagement `<2%`.
6. `kissCost`: `vn=20` contact → speed loss `≥40%`, `wallHit=true`, both sides.
7. `ghostErr`: roundtrip max pos error `≤0.5u` on daily-length recording.

Method note: constant-steer probes circle (expected — curvature integrates), so
all "never finishes" results above were re-verified with pursuit/servo drivers
before ranking; only the P1 survives as a true bug.
