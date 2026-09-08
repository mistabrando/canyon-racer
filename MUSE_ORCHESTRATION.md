# Canyon Racer — Muse orchestration

Updated: 2026-09-07

## Rules

- One owner per file during parallel work.
- Workers do not edit `src/main.ts`, `package.json`, shared configs, `dist/`, or `test-dist/`.
- Workers do not deploy or call Sites.
- Workers write a short handoff under `docs/agents/`.
- The integrator alone edits shared wiring and runs the final build/browser QA.

## Baseline

- 241 tests passing.
- Handling: 70 units/s in 1.20s; grip top 80; drift top 74; grip radius 133; controlled drift radius 43.
- Daily 2026-09-07: 2252 units, 8 corners, 4 drift corners, 3 sweepers, scripted run about 34s.
- High-refresh interpolation and persistent render telemetry are implemented.

## Parallel workers

| Workstream | Task ID | Owned files | Status |
|---|---|---|---|
| Physics feel | `01a07eb8-75cf-7403-b999-56b2c1c16161` | `src/sim.ts`, `tests/physics-feel.ts`, `docs/agents/physics.md` | complete: 39 checks, integrated |
| Ghost/share | `01a07eb8-7750-74b0-8689-037f58439527` | `src/ghost.ts`, `src/share.ts`, `tests/ghost-share.ts`, `docs/agents/ghost-share.md` | complete: 78 checks, integrated |
| Graphics/performance | `01a07eb8-79cf-7292-8f78-438638541ec6` | `src/visuals.ts`, `tests/visuals-budget.ts`, `docs/agents/graphics.md` | complete: 35 checks, integrated |

## Integration queue

1. [x] Review worker handoffs and diffs.
2. [x] Integrate ghost/share modules into `src/main.ts`.
3. [x] Integrate instanced visual additions without post-processing or dynamic shadows.
4. [x] Reconcile physics constants and telemetry.
5. [x] Run all tests, build, typecheck, desktop browser smoke test, and performance budget checks.
6. [ ] Complete hands-on mobile touch/share-sheet QA.
7. [x] Update this file and `HANDOFF.md` with final results.

## Acceptance

- Driving remains deterministic and meaningfully rewards deliberate drift timing.
- PB/friend ghosts are smooth, distinguishable, versioned, validated, and shareable within safe URL size.
- Share success/failure is truthful; malformed links never crash.
- Visual speed/readability improves without exceeding the existing draw-call/per-frame allocation budget materially.
- No high-refresh jitter regression.
- No deployment without explicit user approval.

## Cycle 2 — walls, environment, residual jitter

User feedback: walls feel bad, environment quality is poor, and gameplay still appears jittery.

Wall requirement: impacts must feel like crashes. Medium/hard contact must produce a clear
outward rebound plus speed loss and one severity-tagged crash event; shallow contact may glance.
Sustained scraping must not spam impacts, trap the car, or enable bounce/wall-riding exploits.

| Workstream | Task ID | Owned files | Status |
|---|---|---|---|
| Wall collision/feel | `01a07eb8-75cf-7403-b999-56b2c1c16161` | `src/sim.ts`, `tests/physics-feel.ts`, `docs/agents/walls-cycle2.md` | complete: 73 checks |
| Environment/performance | `01a07eb8-79cf-7292-8f78-438638541ec6` | `src/environment.ts`, `src/visuals.ts`, `tests/visuals-budget.ts`, `docs/agents/environment-cycle2.md` | complete: 69 checks, integrated (phase A) |
| Jitter/render diagnostics | `01a07eb8-7750-74b0-8689-037f58439527` | `src/render-motion.ts`, `tests/render-motion.ts`, `docs/agents/jitter-cycle2.md` | complete: 39 checks, integrated (phase A) |

Cycle 2 integration is owned by `01a07e3c-f4df-7491-ab8e-4415bf570e28` after all workers finish.

## Cycle 3 — signature drift rhythm and line choice

User requirements:

- Drift initiation remains a deliberate handbrake/tap action while steering.
- The slide should persist into a controllable state.
- A correctly timed opposite-steer tap ends the drift and creates a clear forward slingshot sensation.
- Exit reward fires once per drift, depends on alignment/slip/timing, and cannot be spammed.
- Increase total track width from 16 units to roughly 22–24 units.
- Increase meaningful turn density and daily variance while preserving multiple viable drift paths.

| Workstream | Task ID | Owned files | Status |
|---|---|---|---|
| Drift rhythm prototype | `01a07eb8-7750-74b0-8689-037f58439527` | `src/drift-control.ts`, `tests/drift-control.ts`, `docs/agents/drift-cycle3.md` | complete: 53 checks |
| Track width/density | `01a07eb8-79cf-7292-8f78-438638541ec6` | `src/trackgen.ts`, `tests/track-variance.ts`, `docs/agents/track-cycle3.md` | complete: 196 checks |

Cycle 3 integration remains owned by `01a07e3c-f4df-7491-ab8e-4415bf570e28` after wall work is stable.

## Cycle 4 — regression recovery and Canyon reference

User reports the integrated ghost and wall collision are broken, and the background remains poor.
Regression fixes take priority over new features. Reference: `docs/TRACKMANIA_REFERENCE.md`.

| Workstream | Task ID | Owned files | Status |
|---|---|---|---|
| Wall runtime regression | `01a07eb8-75cf-7403-b999-56b2c1c16161` | `src/sim.ts`, `tests/physics-feel.ts`, `docs/agents/wall-regression-cycle4.md` | complete: 32 runtime checks |
| Ghost runtime regression/loop | `01a07eb8-7750-74b0-8689-037f58439527` | `src/ghost.ts`, `src/share.ts`, `tests/ghost-share.ts`, `docs/agents/ghost-regression-cycle4.md` | complete: 117 checks |
| Canyon environment reference | `01a07eb8-79cf-7292-8f78-438638541ec6` | `src/environment.ts`, `src/visuals.ts`, `tests/visuals-budget.ts`, `docs/agents/environment-cycle4.md` | complete: 104 checks |

Cycle 4 integration is owned by `01a07e3c-f4df-7491-ab8e-4415bf570e28` after all three workers finish.

Cycle 4 status: integrated. Ghosts are course-bound and stale same-day PBs fail closed;
faceted canyon/vista environment is live; instant retry, live delta/splits, early-finish
recovery, and bounded low-FPS accumulator behavior are implemented.

Root verification: 931 checks, production build, and typecheck pass. Live desktop browser
smoke test loaded the stale-ghost notice correctly, started a run, rendered the faceted
canyon environment, and produced no console warnings/errors.

## Cycle 5 — drift trails and environment intrusion

Owner: `01a07e3c-f4df-7491-ab8e-4415bf570e28`

- Scale tire/skid trail width, opacity, persistence, and dust response from actual drift amount/slip.
- Enforce a geometry-level road/guardrail exclusion zone for all background instances.
- Test rotated/scaled mesh bounds, not only instance centers, across desktop/mobile quality and date seeds.
- Preserve draw-call/allocation budgets and all gameplay behavior.

## Cycle 6 — aggressive handbrake and pendulum drift

Owner: `01a07eb8-75cf-7403-b999-56b2c1c16161`

- Handbrake tap must break rear grip faster and rotate the car harder.
- Drift energy persists after initiation as a deterministic, decaying pendulum/wobble.
- An uncontrolled exit should naturally set up an opposite-direction drift.
- Correctly timed countersteer damps the pendulum and earns the clean slingshot exit.
- Preserve wall, progress, ghost, finish, and determinism contracts.

## Cycle 7 — corner speed rhythm, explicit barriers, background composition

User feedback:

- Handbrake must create readable speed loss on corner entry.
- A well-timed exit must produce a stronger, perceptible acceleration/slingshot.
- Invisible universal wall rules are unacceptable.
- Only visible guardrail segments collide; open edges allow off-course flight/falls.
- Background still reads as close, flat canyon slabs rather than a convincing world.

| Workstream | Task ID | Owned files | Status |
|---|---|---|---|
| Corner speed dynamics | `01a07eb8-75cf-7403-b999-56b2c1c16161` | `src/sim.ts`, `src/drift-control.ts`, physics/drift tests, `docs/agents/corner-speed-cycle7.md` | complete: 171 checks, integrated |
| Barrier contract/plan | `01a07eb8-7750-74b0-8689-037f58439527` | `src/barrier-plan.ts`, `tests/barrier-plan.ts`, `docs/agents/barriers-cycle7.md` | complete: 49 checks, integrated |
| Background composition | `01a07eb8-79cf-7292-8f78-438638541ec6` | `src/environment.ts`, `src/visuals.ts`, visual tests, `docs/agents/background-cycle7.md` | complete: 132 checks, integrated |

Cycle 7 integrator: `01a07e3c-f4df-7491-ab8e-4415bf570e28` after workers finish.

## Cycle 8 — wide drift arcs and inside-apex mastery

Owner: `01a07e3c-f4df-7491-ab8e-4415bf570e28`

- Replace cramped drift corners with longer, wider-radius arcs that support sustained high-speed slides.
- Preserve drift necessity by keeping required radii below the measured high-speed grip envelope.
- Ordinary drift corners guard the outside only; the inside curb/apex must remain free of barriers.
- A skilled line can keep the car body within roughly 0.25–0.6 units of the inside curb without hidden collision.
- Maintain multiple entry/apex/exit lines, deterministic daily variance, and anti-cut progress validation.

## Cycle 9 — fresh Muse CLI round + Pages

Baseline: 1226 checks green; Cycle 8 and later grounded-drift/scenery passes are complete on disk.
The former app task UI may appear stale, so this round uses independent Muse CLI runs whose prompts,
reports, and logs are stored in the project.

| Workstream | Output | Status |
|---|---|---|
| Driving feel/red-team | `docs/agents/cycle9-driving.md` | blocked: Meta network |
| Art/background review | `docs/agents/cycle9-art.md` | blocked: Meta network |
| Ghost/reward-loop QA | `docs/agents/cycle9-loop.md` | blocked: Meta network |
| GitHub Pages preparation/publish | `docs/agents/pages-cycle9.md` | prepared; auth/network blocked |

One integrator runs only after the three review reports finish. Pages owns only deployment files.

Cycle 9 launch status: blocked by managed outbound-network policy before Muse could respond.
Prompts and failed-run logs are preserved under `.muse/`; retry when Meta API access returns.
Pages is prepared and committed locally at `920a1dc`; remote publish is blocked by the same
network policy plus an invalid GitHub CLI token for `mistabrando`.

Cycle 6 result: complete. Handbrake yaw/slip impulse, 1–2s deterministic pendulum,
natural opposite-slide chaining, and timed countersteer damping/slingshot are implemented.
Independent full validation: 1045 checks green; production build and typecheck pass.
Worker handoff: `docs/agents/drift-cycle6.md`.

## Cycle 5 result (done, sole writer `01a07e3c-f4df-7491-ab8e-4415bf570e28`)

- Trail scaling live in `src/visuals.ts` (pure model) + `src/main.ts` (wiring).
- Exclusion envelope + `enforceCorridor()` + `auditCorridor()` in
  `src/environment.ts`; mount/count/audit consume resolved sets.
- `tests/trails-bounds.ts` (41) enrolled in tsconfig + npm test.
- 972 checks green (all suites), `npm run build` + `npx tsc --noEmit` +
  `tsc -p tsconfig.tests.json` clean. Bundle 545358 bytes. Preview 200:4173.
- Measurements: trail low/med/high 0.17/0.59/0.99; width 0.28-0.78u;
  corridor min 0.00u over 40236 placements (30 seeds x desk/mob); today 0.00u;
  env tris ~16.1-16.6k; drops 0-5 far walls/track.
- Remaining: hands-on visual QA (trail feel, cliff faces); no deploy.

## Cycle 7 result (done, sole integrator `01a07e3c-f4df-7491-ab8e-4415bf570e28`)

- `src/barrier-plan.ts` enrolled as the single source: sim gates wall
  clamp + wallHit on `barrierAt` (null plan = legacy collide-everywhere, so
  all pre-existing wall tests hold verbatim); visuals renders rails exactly
  on plan spans with span-boundary segment breaks. Corner-speed (entry cut
  0.94, boost-cap lift to 84, overshoot bleed) and background (far-butte
  archetype, ridgeline phrasing, run breaker, gate piers) preserved as landed.
- Open edges: road + 3.5u shoulder supported; past it the car departs into
  real ballistic fall (no road-height snap, no floor, no auto-teleport).
  OOB arms ~0.9s (lateral > halfW+15 or fallen > 10u); main shows
  OFF COURSE — R RESET; simRespawn (snapshot + exact 3s) is the only reset.
- New `tests/barrier-edge.ts` (36) + enrolled `tests/barrier-plan.ts` (49).
- 1171 checks green (all 11 suites), build + both typechecks clean.
- Measured: guarded entry loss 56.1% @vn30, rebound inward, exit 3.4→45u/s
  in 1s; open fall 23.4u deep at OOB arm; today 10 spans, guarded ratio 0.53,
  rails 438→127, plan audit clean; env ~16k tris, visuals 2k tris / 4 draws.
- Bundle 552152 bytes (+6.8KB). Preview 200:4173, serves fresh dist.
- Remaining: hands-on browser QA (rail/end visual match at speed, OOB feel,
  mobile); no deploy.

### Cycle 4 read-only reviewers

| Review | Task ID | Output | Status |
|---|---|---|---|
| Mastery/replay loop | `01a07f3d-e82e-7a51-8a63-045646bcfdad` | `docs/agents/addiction-loop-cycle4.md` | complete |
| Adversarial driving QA | `01a07f3d-ea0f-7991-bcd3-1ab87ccd6c7a` | `docs/agents/driving-redteam-cycle4.md` | complete |
| Canyon art direction | `01a07f3d-ec5e-7373-aa45-4fbc5bbaf3db` | `docs/agents/art-direction-cycle4.md` | complete |

These reviewers do not edit implementation files. Their findings gate Cycle 4 integration.

## Integration results (2026-09-07, integrator)

- `npm test`: 252 + 39 + 78 + 35 = 404 checks, all green, single flow
  (`tsconfig.tests.json` enrolls all worker suites; `test` script chains the
  four runners). No global-symbol collisions (all suites are modules).
- `npm run build` clean, `npx tsc --noEmit` (both configs) clean.
- Bundle: `dist/assets/index-*.js` 513378 -> 519708 bytes (+6.3KB, +1.2%).
  NOTE: an intermediate revision hit 730116 bytes — passing the whole THREE
  namespace into `mountVisuals` defeated tree-shaking (full three bundled:
  Skeleton/Audio/KeyframeTrack present). Fixed by injecting a `ThreeKit` of
  statically-referenced classes (`src/visuals.ts` + `threeKit` in `main.ts`);
  worker budget tests untouched (they never call `mountVisuals`).
- Ghost/share: `main.ts` imports codec from `./ghost`, URL/outcome flow from
  `./share` (`parseShareUrl`, `resolveRival`/`rivalLabel`, `buildShareUrl`,
  `shareRun` + `shouldUseNativeShare`). `src/sim.ts` codec deleted; sim
  re-exports types + `encodeGhost`/`decodeGhost`/`sampleGhost` (+helpers) from
  `./ghost.js` and `fmt`/`buildShareText` from `./share.js`, so the headless
  harness is unchanged apart from test 14. `src/ghost.ts` gained a decode-only
  C1-binary path (moved from sim.ts) so pre-v2 PBs/links still load; new
  recordings encode as v2 JSON. Harness 14 updated: payload budget 800 -> 1650
  chars (measured 954 on a 30 s recording), C1 names -> versioned, plus a
  hardcoded C1-payload decode assertion. Legacy JSON/ts-less links unaffected.
- Ghost URL measurements: worker table (20 samples -> 616 chars, 283-sample
  daily-like rec -> 1236 chars, full URL 1411); integrator probe on a 451-sample
  scripted run: 990-char payload, 1041-char full URL. Oversized/corrupt input
  fails safe (`decodeGhostResult` reasons, `GHOST_MAX_RAW_LEN` guard,
  `buildShareUrl` drops bad ghosts, `shareRun` truthful outcomes incl.
  clipboard-denied `copy-failed`).
- Graphics: `mountVisuals` once with daily points/tangents/normals/cum +
  `stats.events`/`crestS`; old edge-post block deleted (guardrails supersede);
  center dashes kept; ticks hidden on mobile via `setQuality(coarse)`. Dust
  ring drives the existing Points cloud (deterministic spread; the gameplay
  `Math.random` puffs are gone). Measured today: desktop 316 guards / 37
  chevrons / 122 ticks / 160 dust = 4 draw calls, 4110 tris; mobile 198 / 37 /
  78 / 80 = 4 draws, 2606 tris; both `withinBudget`.
- Physics: worker API preserved verbatim (`driftHold`/`exitT` on SimState, all
  exported constants); no `main.ts` sim wiring changes needed. Debug HUD (F)
  gains `hold`/`exit` telemetry. Worker before->after numbers stand (grip
  t70 0.80 s / top 80.0, drift top 73.4, drift r 44.5 @ 20.0 deg, counter
  recovery faster than hold, forced-45 deg guardrail 80->13, offroad cap 24);
  full shared harness re-verified 252/252 on the merged tree.
- Smoke: `npm run preview -- --port 4173` serves 200 with the new bundle
  referenced. Root orchestration performed a live desktop browser smoke test after
  integration: page loaded, run started, new guardrails/markers rendered, and no
  console warnings/errors appeared. Mobile touch/share-sheet QA remains. No deploy,
  no Sites calls.

## Cycle 2 phase-A integration (2026-09-07, integrator; sim.ts untouched)

- Environment: `main.ts` extends `threeKit` to `envKit` (+Cylinder/Cone/Torus/
  BufferAttribute, statically referenced) and mounts `mountEnvironment` once
  with daily points/tangents/normals/cum + events/crestS; `env.setQuality(coarse)`.
  Deleted the superseded repetitive blocks: wall/mesa instanced-box block
  (~2.5KB) and rock scatter (~1.2KB). Kept: ground plane + patches, road,
  curbs, dashes, strips, gantries, cacti. Rails already at the sightline
  profile (`GUARD_TOP_ABOVE_ROAD`) from the env worker — untouched.
- Render-motion: `camPos.lerp`/`impact`/drift-stepped `targetFov` lines and the
  per-frame `new THREE.Vector3` are gone. `motion` state created once;
  `resetMotion` in `placeAt` (covers boot/start/respawn) + `finishRun`;
  `startRun` frames the countdown shot from the snapped pose. Per run frame,
  `MotionInput` is built from `rp` + `sim.vx/vz` + `info.spd/drifting` +
  track tangent at `info.sIdx` + `fresh.landed/landV` +
  `wallHit=fresh.wallHit===true`, `wallVn=(fresh.wallSev??0)*25` (read-only
  use of the wall worker's severity fields; no sim edits). Camera/FOV/look
  come from `cameraOutput`; `updateProjectionMatrix` only on >1e-3 FOV change.
  Car lean + tail light ride `motion.driftMix` (no enter/exit pops). F-key HUD
  gains `ch`/`imp` telemetry. Menu orbit and countdown paths unchanged.
- Suites: `tsconfig.tests.json` + `npm test` enroll `src/environment.ts`,
  `src/render-motion.ts`, `tests/render-motion.ts` (module-scoped, no
  collisions). Results: harness 252, ghost-share 78, visuals-budget 69,
  render-motion 39 — all green. `tests/physics-feel.ts` (wall-owned, NOT
  touched this turn): 66 pass, 3 fail (`W1` glance, `W5` grind, `W6`
  one-event) against the wall worker's in-progress `sim.ts`; left for the
  wall workstream — `npm test` chain stops there until they land.
- Build: `npm run build` clean, `npx tsc --noEmit` clean (both configs).
  Bundle 521610 -> 529083 bytes (+7.5KB, +1.4%; tree-shaking intact).
- Budgets (today): visuals 316/37/122/160 = 4 draws, 4110 tris;
  env 278/16/3/264 = 4 draws, 7960 tris; combined 8 draws / 12070 tris
  desktop, 8 / 9294 mobile — all within module caps.
- Smoke: preview on 4173 serves 200. No browser automation here — desktop/
  mobile visual QA (wall strata look, arch placement, camera lag feel in
  sweepers, drift-whip reduction) remains for the user. No deploy, no Sites.

## 2026-09-07 — final Cycle 2+3 integration (walls + drift + track; 760/760 green)

- Root verification: reran all 760 checks, production build, and typecheck successfully.
- Live desktop browser smoke: integrated environment and wider road rendered, run started,
  and no console warnings/errors appeared. Hands-on drift timing and crash-force feel remain
  subjective playtest gates for the next feedback loop.

Sole-writer pass (`01a07e3c-f4df-7491-ab8e-4415bf570e28`); all workers idle.

- `src/sim.ts`: wall block untouched (edge-triggered impacts, deflect +
  40-62% loss + restitution, vent-away sign, STUCK/R preserved). Integrated
  `src/drift-control.ts` exactly per handoff: `DriftState`+`DriftStepOut` held
  on `SimState` (reset in `resetRun`/`simRespawn`), `updateDrift` called once
  per `simStep` with smoothed steer/handbrake/speed/slip/grounded. Tap while
  steering enters a slide that persists after release (`wantDrift |= sliding`,
  `driftAmt >= slideBlend`); opposite flick commits the exit and fires ONE
  quality-scaled slingshot (`BOOST cap 84`). Legacy `EXIT_BOOST_ACCEL` is
  gated off while the rhythm boost is live AND for 1.0s after any
  rhythm-committed exit (`rhythmExitLatch`) — no stacking, weak exits stay
  weak. New optional `StepInfo` telemetry: `driftPhase/rhythmBoost/exitQuality`.
- Graceful coexistence (measured, not assumed): held-handbrake scenarios never
  enter the rhythm module (entry needs the tap rising edge while already
  steered), so all 73 physics-feel checks pass UNCHANGED — grip/drift tops,
  recovery, wall, determinism envelopes hold.
- `src/main.ts`: one-shot crash shudder on the sim `wallHit` edge
  (`wallKick`, severity-scaled, `exp(-5dt)` decay, render-only) — visible
  rebound reaction with no spam/ping-pong by construction. F-HUD shows rhythm
  `phase/q/rb` next to `hold/exit`. Phase-A env + render-motion wiring intact.
- Track: accepted `TRACK_HALF_W=11.5` (23u) + 12-event grammar as generated.
  `tests/harness.ts` quotas mirrored to the new documented ranges (len
  2000-2500, nev 11-14, drift 5-7, sweep 3-4, >=2 transitions, first 140-240,
  clearance >=40, est 28-38); crest-runoff/flats/decreasing untouched.
  Guardrail/chevron/tick/scrub laterals are all `halfW`-relative — no changes
  needed; sightline cap `GUARD_TOP_ABOVE_ROAD` unchanged.
- Config: `tsconfig.tests.json` + `npm test` enroll `drift-control` (53) and
  `track-variance` (196); all suites module-scoped, no collisions.
- Validation: `npm test` 252+73+78+69+39+53+196 = 760 green; `npm run build`
  clean (bundle 537214 bytes, +8.1KB vs phase A); `tsc --noEmit` clean (both
  configs); preview serves 200 (user's 4173 server left running).
- Measured integration probe (headless sim): tap@0.35 -> sliding persists at
  74 u/s after release; flick -> `good` q=0.68, boost 13.6 u/s^2, peak 80.2
  (< 84 cap), legacy exitT=0.00. Matches the worker sizing table.
- Today 2026-09-07: len 2355, est 31.4s, 12 events (6 drift/4 sweep), clr 204,
  attempt 1, no fallback. No deploy, no Sites calls.

## 2026-09-07 — Cycle 4 phase A integration (ghost identity + P0 loop + env verify; 904/904)

Constraints honored: no edits to `src/sim.ts` or `tests/physics-feel.ts`
(wall worker's files; wall suite green at 123/123 on their landed work).

- Ghost identity (`src/main.ts` only, per ghost-regression handoff): imports
  `makeExpectedTrack`/`resolveRivalIdentity`; builds `expected` from
  `daily.checksum` once per load; stored PB + URL ghost resolve through
  identity — only course-matched ghosts race. Old same-day PBs from earlier
  generator geometry render nothing; storage (`canyon-ghost-*`,
  `canyon-best-*`) is never deleted; the stale notice shows in the menu
  banner next to `rivalLabel`. PB writes and finish-share links now stamp v3
  identity (`encodeGhost(rec, ms, GHOST_URL_BUDGET, expected)`); legacy
  v1/v2/C1 still decode, verdict `legacy`, never auto-race. Shared links with
  mismatched identity fail closed with the handoff's UX strings.
- P0 replay loop (no sim changes): `Enter` retries instantly from finish;
  `R`/reset-button restarts instantly from run; retries use a 0.7s READY-GO
  countdown (first GO keeps full 3-2-1); finish DRIVE becomes focused
  `RETRY (Enter)`. Live delta+gap (`-0.31 · 25m vs PB/FRIEND`, sign+color)
  sampled from the racing ghost at the player's position; 3 grammar-derived
  splits (S1/S2/S3) with transient 1.5s toasts; blank — never fabricated —
  with no matched ghost. Finish card shows `NEW BEST by X` / `+X vs best`.
  Pure helpers live in new `src/loop.ts` (splits, `ghostTimeAt`,
  `fmtDelta`/`gapText`); anonymous, no auto-retry, no streak copy.
- Environment/art-direction: Cycle-4 worker file verified on disk and already
  mounted — faceted 5-sided prisms (`WALL_TRIS=30`), cut/vista gorge rhythm,
  pale caprock 5th strata band, ±0.45 yaw spread, zero `BoxGeometry`; mount
  signature unchanged (`envKit` + `setQuality`). Guardrails already at the
  sightline profile per handoff; `visuals.ts` untouched. Combined envelope per
  worker measurement: 8 draws / ~21.5k tris desktop (cap 9 / 40k).
- Tests: new `tests/loop-ui.ts` (20 checks: split derivation/stability,
  nearest-sample lookup with gap honesty, safe-null handling, delta format)
  enrolled in `tsconfig.tests.json` + `npm test`. Full flow: 252 + 123 + 117
  + 104 + 39 + 53 + 196 + 20 = 904 green. Build clean (bundle 541681 bytes,
  +4.5KB); both typechecks clean; preview serves 200.
- Left for later: hands-on browser QA (delta readability at speed, notice
  copy, mobile touch retry), P1 medals / P2 ritual (not started), wall-worker
  follow-ups if any. No deploy, no Sites calls.

## 2026-09-07 — Final redteam regression pass (P1 + P2; 931/931 green)

- P1 early-finish softlock (`src/sim.ts` finish block only — the single
  authorized sim change this turn): an unarmed plane crossing no longer
  consumes the finish edge. `prevFinD` now holds its latched non-positive
  value while the car sits beyond the plane (`prevFinD<=0 && curD>0`), so the
  edge re-fires once `FINISH_ARM_MS` and `FINISH_TAIL` hold; the car finishes
  exactly once with honest now-time. Motion-gate + tail-gate cut/teleport
  blocks untouched. Verified: 200u track crosses at ~2.9s unarmed, finishes
  once at arm with frozen time (old code softlocked here).
- P2 accumulator spiral (`src/main.ts` + `src/loop.ts`): leftover debt clamped
  to 100ms after the 4-step catch-up (`clampAcc`, pure + unit-tested). Policy:
  sustained sub-15fps degrades to a constant (non-growing) slowdown with full
  4 steps/frame and bounded input latency; 60/90/120/144Hz never reach the
  clamp (verified silent), step parity within float rounding, no multi-step
  bursts at high refresh — no jitter regression.
- Seven redteam acceptance tests added (19 checks): `shortFinish` (200/300u
  finish-once + frozen time), `accBound` (`tests/loop-ui.ts`: bounded 10fps
  debt, no starvation, rate parity, clamp edges), `airBudget` (full-lock
  0.5s air yaw <= 0.6 rad as a lock-in characterization — no P3 tuning
  change), `grindLoses` (wall-grind bot > 1.5x clean), `gripBound` (gentle
  no-drift pursuit within est+25% at 0.00% drift engagement), `kissCost`
  (vn=20 both walls: hit + >=40% loss), `ghostErr` (daily-length roundtrip:
  quant + cruise playback <= 0.5u). Test-design note: ghost end-to-end error
  on sparse downsampled recordings is interp-dominated, so the test asserts
  the redteam's actual quantities (nearest-sample quant + cruise playback).
- Preserved: Cycle-4 identity/retry/env work, wall + drift behavior (P3 notes
  explicitly not implemented). Full flow: 271 + 123 + 117 + 104 + 39 + 53 +
  196 + 28 = 931 green. Build clean (bundle 541784 bytes, +103B); both
  typechecks clean; preview serves 200. No deploy, no Sites calls.

## 2026-09-08 — Cycle 8 wide drift arcs + inside-apex hug (1221/1221 green)

Road stays 23u (TRACK_HALF_W 11.5, no width change). Cramped 42-68u drift
hairpins replaced with long arcs: ordinary drift spec r 62-88u over
100-140deg (~112-215u of arc), one 62-70u decreasing challenge (~48-60u
measured) per track. Sweepers moved to 105-140u (no class overlap), kinks
150-158u. Grammar still 12 events (5 drift + 1 dec + 4 sweep + 2 kink),
setup straights + 2 crest hosts + S-transitions + elevation/jumps preserved;
length band widened 2000-2500 -> 2000-2700 (longer corners need room), est
band 28-38 -> 28-40 (human target 35-50s intact: bot runs 34.5-37.6s).
- `src/trackgen.ts`: new DECK bands + canonical grammar (2587u, hosts m5/m7
  feeding sweep/kink), setup/launch/tail trims, estimator drift cap r<=95,
  statsPass drift 45-95 / sweep 95-150 / crest follower >95.
- `src/barrier-plan.ts`: driftMaxR 75->95, sweeperMaxR 145->150 (ordinary
  drifts get outside-only rails with drift margins; dec keeps its short
  inside rail; kinks open). Sim/visuals consume the same plan — no mask change.
- `src/visuals.ts`: chevron severe threshold 75->95 (one line).
- `tests/track-variance.ts` + `tests/harness.ts` (s12/s13h + scripted bot
  thresholds): same new bands; no physics/sim/visual changes anywhere else.
- New `tests/corner-apex.ts` (49 checks, enrolled in tsconfig + npm test):
  60-seed radius/arc distribution (300 ordinary: R 61.1-89.2, arc 114-210;
  tight exactly 60/60); outside-present/inside-absent barrier masks incl dec
  inside rail; rail/chevron/visual-physics mask identity (launch rail-free);
  three-line geometry (hug at body-0.4u-from-curb legal, outside caught);
  real-track anti-cut freeze (jump ~120u credits <=4 samples, no finish);
  3-seed hug drives (reach corner end, 0 walls, oob 0, minGap >=0.1);
  8-seed barrier-wired completion (slowest 36.9s, t<60); synthetic r=75/120deg
  scripted comparison — late-apex outside setup + full-lock entry (0.8 rad)
  + partial-lock maintenance beats grip center 10.69s vs 11.59s, 0 vs 2 wall
  hits, winner minGap 0.33u, peak slip 20deg, bit-deterministic.
- Bot note (test-only, no game change): pursuit bots need straight-line slide
  damping or they launch sideways off crests into OOB/respawn loops (07-04
  case); inside-offset pursuit alone destabilizes entries — the scripted
  two-stage drift is the stable demonstrator. A poisoned-snap edge exists
  (respawn replays an edge-slide into immediate flight) but players can steer
  out; bot recovers via 0.8s road-align mode.
- Validation: 1221/1221 green (271+171+117+132+39+91+197+28+41+49+36+49),
  `npm run build` clean (bundle 552170 bytes, +18B), `tsc --noEmit` + tests
  typecheck clean, preview serves 200 (port 4174 probe; user tab 4173
  untouched). Today 2026-09-07: len 2624, est 33.8s, 12 events, 6 drift /
  4 sweep / 2 kink, radii 57-155, attempt 16, no fallback. No deploy, no Sites.
- Remaining: hands-on browser/mobile QA (no headless-GL available this turn —
  serve check only), playtest feel of wide arcs at full speed.

## 2026-09-08 — Feel pass: grounded drift, scenery setback, subtle tells (1226/1226)

Owner: integrator (sole writer this turn). No worker handoffs pending.
- `src/sim.ts`: rhythm-slide sustain requires grounded (slides decay aloft);
  landing bleeds frozen slideBlend at `slideRelease * airSteps` (no snap-spin).
- `src/environment.ts`: new `CORRIDOR.PUSHBACK=6` on rhythm-branch walls +
  roadside arches; cut-branch/far/mesa/spire/gate/horizon untouched; scrub
  reverted to near-road motion cues (visuals-budget contract).
- `src/visuals.ts` + `src/main.ts`: GATE_MIX 0.25, skids 0.16-0.45u,
  shade cap 0.70, dust max 2 / spread <= 2.0u, puff size 1.1 / opacity 0.45.
- Tests: trails-bounds pins updated (width range, capped burst);
  corner-apex bot releases handbrake while airborne. 8/8 wired completions,
  slowest 41.2s. Full flow 1226 green, build + both typechecks clean,
  bundle 552321 bytes (+151B), preview 200 on 4173. No deploy, no Sites.

## 2026-09-08 — Big hug arcs: wider drift turns, safe snapshots, settled jumps (1231/1231)

Owner: integrator (sole writer this turn). User ask: bigger turns for
drifting-and-hugging, multiple per track. No deploy, no Sites calls.
- `src/trackgen.ts`: ordinary drift arcs 92-118u/95-135deg -> 110-128u /
  100-135deg (~190-300u sustained slides, 5/track + one 48-60u dec challenge);
  reversal entries into drift/dec corners floored to 85-95u links (room to
  switch sides at speed; still <=110 so S-transitions count); drift setup
  55-67u; LEN_MAX 3300->3650; canonical grammar updated to match.
  Rationale: mid radii (100-110u) with 250u+ arcs spun pursuit-line drivers
  (74u/s needs 0.69 rad/s vs drift-hold yaw); bigger radii sustain better.
- `src/sim.ts`: respawn snapshot gates (SNAP_MIN_SPD=8, SNAP_MAX_SLIP=0.6) —
  a spin/stall no longer poisons the snapshot, so R always rescues to the
  last healthy on-road moment (exact 3s ghost gap preserved). Real softlock
  fix: pre-fix, a stall refreshed the snapshot at ~0u/s and R restored the
  same stall forever.
- `tests/corner-apex.ts`: section 1 bands to 105-130u / 185-310u; bot models
  jump discipline (on straights near a crest lip: settle slides, start none —
  in-corner driving untouched); new section 9 pins the snapshot gates
  (crawl/spin don't poison, rescue + gap exact). Section 8 synthetic kept at
  r=105/115deg (comment band updated).
- `tests/harness.ts`: hardcoded LEN band 3300->3650; est bands 34-43->34-47
  (`tests/track-variance.ts` est likewise).
- Validation: 1231/1231 green (all 12 files), build clean (bundle 552758B,
  +437B), `tsc --noEmit` + tests typecheck clean, preview 200 on 4173
  (tmux session `canyon`). Today 2026-09-08: 3311u, est 41.9s, 12 events,
  5 hug arcs (R114/199, L125/253, L119/261, R120/247, L116/264) + dec R57,
  attempt 0. Section 5: 8/8 wired completions (was 7/8), slowest ~47s.
- Known limits: pursuit-bot sweep over 33 seeds finishes 27 (six idiosyncratic
  bot-vs-seed traps: crest-link fly-offs, compound-exit slides); isolated
  staged technique completes 8/10 trap corners perfectly (0 walls, ~13deg
  slip). Hands-on browser/mobile playtest of the big arcs still open.
