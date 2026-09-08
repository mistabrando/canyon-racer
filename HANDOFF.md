# Canyon Racer — task handoff (2026-09-07, sim-correctness pass)

## What this is
TrackMania Canyon-inspired daily drift racer. Browser, Three.js + Vite + TypeScript.
Anonymous Wordle-style: one procedurally generated point-to-point sprint per day,
async ghosts via share links (`?d=&t=&g=`).

## State: working, rebuilt 2026-09-07 evening
- `npm run build` clean, `npx tsc --noEmit` clean, `npm test` 28/28 green.
- `src/main.ts` (~770 lines) = rendering/input/wiring. `src/sim.ts` (~440 lines) = pure
  deterministic sim + ghosts (no THREE/DOM/random). `tests/harness.ts` = headless checks.
- Playable at `http://127.0.0.1:4173/` (vite preview, serves `dist/` — reload after rebuilds).

## Architecture (post sim-pass)
- sim.ts owns: TrackView + trackFromPoints (single tangent convention), SimState,
  resetRun (exact t=0 start sample), simStep @1/60 (grip/drift model, crest launches,
  walls, backstop, respawn snapshots, exact finish-plane crossing with partial-tick
  raceMs, timestamped recording), simRespawn (+3000ms real gap), encode/decode/sample
  ghosts, TouchState, buildShareText.
- main.ts wraps: pollKeys → simStep → visuals (car yaw+pitch+lean, skids, dust, blob),
  chase cam, countdown/menu, share (navigator.share on mobile → clipboard, honest status).
- Ghost schema `{t, p:[[x,y,z,h]...], ts:[ms...]}`; legacy links without `ts` accepted
  (120ms cadence assumed). Corrupt data → null, never shared, never thrown.
- PB ghost loads from localStorage when no URL ghost; menu share after reload embeds it.

## Tuning constants (sim.ts)
- Speeds 58 grip / 62 drift / 30 offroad; accel 30 (16 offroad); drift yaw 3.3,
  grip yaw 2.3 fading to x0.42 above 30 u/s.
- Jumps: LAUNCH_FOLLOW=11 (v²·convex-curvature), V_MIN=20, vy=clamp(v·approach, 5.5, 13),
  GRAV=26. Land only descending through surface, never on launch step.
- Ghost cadence 120ms race-time; URL budget <1650 chars; respawn +3000ms.

## Next candidates
- Mobile playtest; Sites publish (not deployed — do not deploy unprompted).

## Gotchas
- `requestAnimationFrame(frame)` first line of `frame()` is intentional.
- Dev servers started via exec get reaped between turns; preview on 4173 survives.
- Git: no commits yet, inside parent `localagent` scope — don't commit unprompted.

## 2026-09-07 — jitter/instrumentation pass 1 (done)
- sim.ts: StepInfo gains fSpeed/lSpeed/slip/yawRate/offroad/surface/landV; SimState gains pitch0; new interpPose() (lerp + wrapped heading) and updateDisplay() (retains display on zero-step frames).
- main.ts: persistent lastInfo across render frames; car/blob/camera render from interpPose alpha=acc/DT (snap alpha=1 on teleport); removed continuous Math.random camera shake, replaced with decaying landing impact; F-key debug HUD (FPS/dt/steps/alpha/speeds/slip/yaw/surface/FOV); fixed double-requestAnimationFrame (only trailing schedule remains).
- index.html/style.css: added hidden #debug overlay.
- tests/harness.ts: sections 8-10 (interp midpoint/wrap/clamp, per-rate 60/90/120/144 retention, telemetry sanity). 47/47 green. build + tsc clean.
- Jitter risks remaining: ghost sampled at 120ms cadence (steppy on long straights), skid/dust spawn is step-quantized, impact decay uses render dt.

## 2026-09-07 — handling pass 2A (done, 70/70 tests green)
- sim.ts: START_SPEED=10, ACCEL_ROAD=50, ACCEL_OFFROAD=14, MAX_GRIP=80, MAX_DRIFT=74,
  MAX_OFFROAD=26, OFFROAD_DRAG=0.55 (entry cut 0.92); steering smoothing
  (RISE=6/s, FALL=9/s, deterministic in sim); progressive driftAmt (attack 3.5/s,
  release 2.5/s, countersteer/centered fast-recover 4.5/s); grip yaw 2.3*highCut
  (0.24 floor over 68 span), drift yaw 1.5 blended by driftAmt; drift lateral grip 4.8;
  entry cut 0.96 + sustained drift drag 0.35; excess-slip scrub gain 9 past 0.61rad;
  walls: exact normal kill + vn-scaled cut (0.007, cap 0.20, deadband 2) + scrape drag 1.2.
  StepInfo gains impact/scraping (main.ts literal updated, no visual use yet).
- Measured: t70=1.20s, top=80.0, grip yaw 0.60/r=133, drift r=43/slip 16.7deg,
  driftTop=73.7, wall 0.35rad loss=24.3%, scrape 1s 48->34, offroad 4s max 24 vs road 80,
  recovery hold 0.57s vs counter 0.22s, straight 6s grip 432 vs drift 392.
- Stability choice: no rear-lock-up transient (entry spikes capped ~21deg by yaw/grip
  math, so excess scrub is a guardrail for chaos states: wall bounces, air-steer
  landings, forced slides — verified via forced-45deg test 80->9.7).
- tests/harness.ts section 11 (23 asserts). build + tsc --noEmit clean. No track-gen changes, no deploy.

## 2026-09-07 — track pass 2B (done, 193/193 tests green)
- New src/trackgen.ts (pure, no THREE/DOM): explicit corner grammar (8 events:
  4 drift 38-70, 3 sweepers 80-140, 1 mild kink, R->L transitions, one 70->38
  decreasing corner), arc-integration centerline at 2u spacing, analytic elevation
  (flat launch/finish, rolling climb, smoothed joints, 2 gaussian jump crests on
  long straights with 100+ runoff), independent curvature analysis (smoothed
  radii, contiguous event segmentation, positional entry/exit thirds for
  decreasing detection, narrow-width crest counting), accept/retry over
  deterministic `canyon-<day>#<attempt>` suffixes (40) + canonical fallback.
- src/main.ts consumes acceptDailyTrack(day); old probability generator removed.
  No physics/camera/ghost/share changes.
- Calibration: profile estimate ~30s (optimistic), scripted mid-skill driver
  (proportional pursuit + pre-corner drift shed, 0 respawns) runs 33.6-35.0s
  across sampled days — supports the 35-45s clean-run target for humans.
- tests/harness.ts section 12: 30 consecutive seeds + today quotas (length,
  events, drift/sweeper counts, both directions, transition, decreasing,
  first-corner, clearance, grade, crests+runoff, flats, checksum, estimate),
  canonical-fallback quotas, today's table + autopilot completability.
- Stability calls: elevation joints smoothstepped (apex would marginally launch
  otherwise); crest detector requires width<=70u (broad apex/rollers excluded);
  jitter preserves event classes; entry/exit trimmed 8 samples (edge blur).
- build + tsc --noEmit clean. No deploy.

## 2026-09-07 — worker integration (done, 404/404 green)

Sole-integrator pass merging the three parallel workers (physics feel 39,
ghost/share 78, graphics 35) into the playable game.
- `src/sim.ts`: physics-feel mechanics kept as-is; ghost codec + `fmt` /
  `buildShareText` deleted and re-exported from `./ghost.js` / `./share.js`
  (single implementations; harness imports keep working).
- `src/ghost.ts`: added decode-only C1-binary path so pre-v2 links and stored
  PBs still load; new encodes are v2 JSON (budget 1650).
- `src/main.ts`: share/parse/rival/banner/share-sheet flow migrated to
  `./share` + `./ghost`; edge posts replaced by `mountVisuals` guardrails;
  chevrons + speed ticks mounted once (`setQuality(coarse)` on mobile); dust
  Points cloud backed by the preallocated ring (no `Math.random` puffs);
  F-key HUD shows `hold`/`exit` skill-state telemetry.
- `src/visuals.ts`: `mountVisuals` takes a `ThreeKit` of statically-referenced
  classes instead of the THREE namespace (tree-shaking; bundle +6.3KB total,
  not +217KB). No planner/budget logic changes.
- Config: `tsconfig.tests.json` enrolls all suites; `npm test` chains four
  runners (252 + 39 + 78 + 35). Harness test 14 tracks the v2 budget (<1650)
  plus a hardcoded legacy-C1 decode check.
- Validation: `npm test` 404 green, `npm run build` clean, `npx tsc --noEmit`
  clean (both configs), preview on 4173 serves 200. Not visually QA'd in a
  browser here — confirm chevrons/caps/dust/share on desktop + phone before
  any Sites publish. Do not deploy unprompted.

## 2026-09-07 — solid walls + environment (done)

- `src/visuals.ts`: guardrail dots replaced by solid segmented walls — long
  overlapping boxes (0.7 thick, 2.6 high, +1.5u joint overlap, base embedded)
  joining consecutive stations per side at halfW+2.0 (inner face ~halfW+1.65,
  right at the physics clamp halfW+1.6, so the car visibly kisses the wall).
  Red/white pattern kept. Instance/triangle budget unchanged (same mesh count
  class, 12 tris each); planners and all 35 budget tests untouched.
- `src/main.ts` environment: canyon cliffs denser/taller/closer (step 6,
  19-41u offset, up to ~60 high, 5% gaps), 6 far horizon buttes, 70 ground
  variation patches + up to 120 cacti on the desert floor (2 new draw calls,
  all instanced Lambert, deterministic rng).
- Validation: 404/404 tests green, build + tsc clean, bundle 521610 bytes,
  preview on 4173 serves 200. Reload the tab to see it.

## 2026-09-07 — cycle 2 phase A integration (env + render-motion; sim untouched)

- `src/main.ts`: mounts `mountEnvironment` (envKit = threeKit + 4 static
  classes); deleted old wall/mesa boxes + rock scatter; kept ground/patches/
  road/dashes/gantries/cacti. Camera path/FOV/impulses replaced by
  `render-motion` state with explicit snaps (placeAt/finishRun) and read-only
  wall/landing inputs (`fresh.wallHit`, `wallSev*25`, `fresh.landed/landV`);
  lean/tail driven by `motion.driftMix`; F-key HUD shows `ch`/`imp`.
- Tests: 252 + 78 + 69 + 39 green in flow; physics-feel (wall-owned) has 3
  W-failures from the active wall worker's sim changes — not touched, not
  mine; `npm test` chain halts there until wall work lands.
- Bundle +7.5KB (529083), budgets: 8 draws / 12.1k tris desktop, 8 / 9.3k
  mobile. Preview 200. No visual QA possible here — verify walls/arches/
  camera feel in a real browser before publish. No deploy.

## 2026-09-07 — final Cycle 2+3 integration (760/760 green)

Wall sim preserved; crash shudder (one-shot, severity-scaled, decaying) added
in main.ts; camera impulse wiring from phase A kept. Drift-rhythm integrated
in sim.ts per handoff with latch-gated legacy boost (no stacking) and F-HUD
telemetry; all 73 feel checks pass unchanged. Track width 23u + 12-event
grammar accepted; harness quotas mirrored (est band now 28-38s, today 31.4s).
New suites enrolled: drift-control 53, track-variance 196. Total 760 green,
build clean, bundle 537214 bytes (+8.1KB), both typechecks clean. Preview 200
(user's 4173 server untouched). Reload the tab to playtest: tap handbrake
while steering to slide, flick opposite to slingshot. Visual QA (walls,
arches, crash feel, mobile) still needs hands-on browser time. No deploy.

## 2026-09-07 — Cycle 4 phase A (904/904, sim.ts untouched)

Ghost course-identity enforced in main flow: matched ghosts race, stale/legacy
links fail closed with a notice, storage preserved, new PBs stamp v3 identity.
P0 loop live: instant Enter/R retry, 0.7s READY-GO retries, live delta+gap,
3 grammar splits with toasts, finish verdict with gained/lost + focused RETRY.
Env cycle-4 verified mounted (faceted prisms, cut/vista rhythm, budgets within
caps). New loop-ui suite (20) enrolled; 904 checks green, build + typechecks
clean, preview 200. Reload the tab to playtest. No deploy.

## 2026-09-07 — Redteam regression (931/931, P1+P2 fixed)

Early finish before the 5s arm no longer softlocks (edge held until arming,
finishes exactly once; cuts still blocked). Frame accumulator clamped to
100ms: no debt spiral under sustained low FPS, normal rates untouched. Seven
redteam acceptance tests added (shortFinish, accBound, airBudget, grindLoses,
gripBound, kissCost, ghostErr) — all green. 931 checks, build + typechecks
clean, preview 200. Reload the tab to playtest. No deploy.

## 2026-09-07 — Cycle 5 trails + intrusion (972/972)

Skids/dust now scale with the slide: trailTarget() maps smoothed drift amount
+ slip angle to intensity (low 0.17 / med 0.59 / high 0.99 measured), driving
per-instance width (0.28-0.78u), asphalt-to-dark shade, spawn cadence (every
3rd/2nd/1st tick), and dust burst (1/2/3, spread 1.2-3.4). Slew-limited
smoothing (5/s attack, 2.5/s release) — no pops. Skid ring + dust ring still
preallocated, zero per-frame allocation; state resets on teleport.
Environment intrusion fixed geometrically: every family carries its true
rotation-aware extent (wall support sqrt((w*cos)^2+(seg*sin)^2)+jitter, mesa/
arch/scrub circular bounds mirroring mount scales), own-station laterals are
extent-aware, and enforceCorridor() verifies ALL centerline samples and pushes
violators out (8 passes, deterministic; unfixable bodies dropped — typically
0-5 far cliffs/track, mesas/arches/scrub untouched). Audit across 30 seeds x
desktop/mobile: 40236 placements, min clearance 0.00u, zero intrusions; today
min 0.00u over 734. Env tris ~16.1-16.6k (cap 26k), draws unchanged. New
tests/trails-bounds.ts (41) enrolled. 972 checks green, build + both
typechecks clean, bundle 545358 bytes, preview 200 on 4173 (restarted, serves
fresh dist — reload the tab). Remaining: hands-on visual QA of trail feel and
cliff faces at speed; audit is geometric (no screenshots). No deploy.

## 2026-09-07 — Cycle 7 barriers + corner speed + background (1171/1171)

Only visible rails collide now. `planBarriers()` (built once per daily load
from length/events/crestS) is the single mask: sim gates clamp + wallHit on
`barrierAt` at the contact sample, visuals renders rail stations only inside
spans and never bridges open gaps. Null plan = legacy collide-everywhere, so
all 171 physics + 271 harness checks hold untouched. Open edges: 3.5u
supported shoulder, then real ballistic fall (no snap, no floor, no instant
teleport); OOB arms ~0.9s → OFF COURSE — R RESET; R = snapshot + exact 3s
ghost gap (ghost ts strictly increasing through falls). Corner-speed fixes
preserved (entry dip readable, perfect exit surges to the 84 cap, overshoot
bleeds back). Background preserved (far-butte archetype, ridgeline phrases,
≤4-station both-sides runs, gate piers, 5 draws). New tests/barrier-edge.ts
(36: guarded rebound both sides, open fall both sides, curved outside/inside,
mask identity, shoulder support, respawn, ghost continuity, finish/cut
regression, OOB timing/decay) + barrier-plan.ts (49) enrolled. Today: 10
spans, guarded ratio 0.53, rails 438→127, audit clean. Entry loss 56.1%,
exit 3.4→45u/s, fall 23.4u at OOB arm. 1171 green, build + both typechecks
clean, bundle 552152 bytes, preview 200 on 4173 — reload the tab. Hands-on
browser/mobile QA still open. No deploy.

## 2026-09-08 — Cycle 8 wide drift arcs + inside-apex hug (1221/1221)

State: `npm test` 1221/1221 green, build + both typechecks clean, bundle
552170 bytes (+18B), preview serves 200. No deploy.
- Track: same 23u road, 12-event grammar. Drift corners are now long arcs
  (measured R 61-89u, arc 114-210u, 5/track) + one 48-60u decreasing
  challenge; sweepers 105-140u, kinks 150-158u. Length 2000-2700u, est
  28-40s. Today: 2624u, est 33.8s, 12 events (6/4/2), attempt 16.
- Rules: ordinary drift corners have OUTSIDE guardrail only; inside curb is
  open and clear (rails/chevrons/environment). Legal hug line holds the body
  ~0.4u off the inside curb with no collision/OOB/freeze (driven proof on 3
  seeds). Cuts across infields still freeze progress and can't finish.
- Proof: scripted inside drift (late-apex + full-lock entry + partial-lock
  maintenance) beats grip center 10.69s vs 11.59s on an r=75/120deg corner,
  0 vs 2 wall hits, winner 0.33u off the curb, deterministic.
- Bot runs (test-only): 8/8 barrier-wired completions, slowest 36.9s.
- Files: `src/trackgen.ts`, `src/barrier-plan.ts`, `src/visuals.ts` (1 line),
  `tests/track-variance.ts`, `tests/harness.ts`, new `tests/corner-apex.ts`
  (49). No sim/physics, ghost/share, main, or visual redesign changes.
- Open: hands-on browser/mobile playtest of the wide arcs (no WebGL in this
  environment — serve check only); user tab on 4173 needs reload for new dist.


## 2026-09-08 — Big hug arcs + safe snapshots (1231/1231 green)

State: `npm test` 1231/1231 green, build + both typechecks clean, bundle
552758 bytes (+437B), preview serves 200 on 4173 (tmux `canyon`). No deploy.
- Track: same 23u road, 12-event grammar. Ordinary drift corners are now
  110-128u radius over 100-135deg (~190-300u of sustained slide, 5/track) +
  one 48-60u decreasing challenge; sweepers 130-175u, kinks 175u+. Reversal
  entries into drift corners get 85-95u setup links (S-transitions intact).
  Length 2400-3650u, est 34-47s. Today: 3311u, est 41.9s, 5 hug arcs
  (R114/199, L125/253, L119/261, R120/247, L116/264), attempt 0, no fallback.
- Rules: outside-only rails on ordinary drifts, open inside curbs, hug lines
  proven (§7); cuts freeze (§6); scripted inside drift beats grip (§8:
  11.31s vs 12.02s, 0 vs 2 walls); stalls/spins can't poison the respawn
  snapshot (§9); 8/8 barrier-wired completions, slowest ~47s (§5, was 7/8).
- Bot note (test-only): pursuit driver models jump discipline (settle slides
  on straights near crest lips); in-corner logic untouched. Extended 33-seed
  sweep finishes 27; the 6 remaining traps are bot-skill limits, each
  completable in isolation with the staged technique.
- Files: `src/trackgen.ts`, `src/sim.ts` (SNAP_MIN_SPD/SNAP_MAX_SLIP),
  `tests/corner-apex.ts` (§1 bands, bot settle, new §9),
  `tests/harness.ts` + `tests/track-variance.ts` (LEN/est bands). No
  physics, ghost/share, main, or visual changes.
- Open: hands-on browser/mobile playtest feel of the big hug arcs (reload the
  4173 tab for the new dist); 6 extended-seed bot traps documented above.

## 2026-09-08 — Grounded drift + scenery setback + subtle tells (1226/1226)

Slides live on normal ground now: an airborne car keeps momentum but its
driftAmt decays through the release path (rhythm sustain gated on grounded),
and touchdown bleeds the frozen in-air slideBlend at the module's own release
rate — no more landing snap-spins. Held handbrake rebuilds the slide in
~0.3s after landing. Near-road scenery pushed back 6u (CORRIDOR.PUSHBACK on
rhythm-branch walls + roadside arches; scrub kept as low near-road motion
cues per its design contract). Drift tells shrunk: marks gate later
(GATE_MIX 0.25), skids 0.16-0.45u wide / 0.7-1.4u long, shade caps at 0.70,
dust max 2 particles / 2.0u spread, puffs smaller+fainter in main.
Test-only pursuit bot releases the handbrake while aloft (driver contract
matches the game). 1226 checks green, build + both typechecks clean, bundle
552321 bytes (+151B), preview 200 on 4173 — reload the tab. No deploy.
