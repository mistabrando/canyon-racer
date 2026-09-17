# Canyon Racer — playtest and Muse improvement queue

Date: 2026-09-15. Direction: TrackMania² Canyon-inspired speed, deliberate drift arcs, readable engineered tracks, monumental canyon scenery, and rapid time-attack retries. Preserve Canyon Racer's auto-gas and tap-drift/countersteer slingshot identity.

## Evidence and scope

- Played short sections through the browser at `https://mistabrando.github.io/canyon-racer/` and the current local source at `http://127.0.0.1:5173/canyon-racer/?d=2026-09-15`. Also inspected the local `2026-09-07` opening. Desktop viewport was approximately 1512 × 827.
- Exercised start, steering/drift taps, barrier contact, R rescue, and local Enter/button retry. Inspected the rendered road, car, signs, normal HUD, and F telemetry.
- This was a limited browser playtest, not a completed competitive run. The available input interface supplies discrete key presses; it did not establish sustained drift quality, fine countersteer response, full-course flow, mobile multitouch, audio quality, or ghost behavior after finishing. Failure to clear a turn with sparse tool inputs is not evidence that the turn is too difficult.
- Cross-checked observations against current source and the September 14 handoffs. No gameplay code was changed, no workers were launched, and nothing was deployed. This review did not rerun the test suite.
- The live page lacks the current local retry control. Existing local work already adds focus-loss input clearing, full-run retry, smoother medium-light wall severity, and speed-camera scaling through 80 u/s. Validate and integrate that work; do not assign duplicate implementations.

## Recommended order

| Priority | Packet | Suggested owner | Result |
| --- | --- | --- | --- |
| P0 | 1. Safe rescue | Muse recovery | A rescue gives the player a usable next attempt |
| P0 | 2. Complete retry reset | Integrator | Car, timer, progress, and feedback restart together |
| P1 | 3. Actual directional signs | Muse track readability | Players can identify the next turn before committing |
| P1 | 4. Teach and show the drift rhythm | Muse driving UX + integrator | Entry, sustained slide, and successful exit are understandable |
| P1 | 5. Driving sound | Muse audio | Speed, grip loss, and impacts have useful feedback |
| P1 | 6. Canyon composition | Muse environment | A convincing landscape with memorable landmarks |
| P2 | 7. A benchmark course and track variety | Muse track design | A learnable, repeatable Canyon-style driving sequence |
| P2 | 8. Targets and improvement feedback | Muse time attack | Every retry has a concrete objective |

### 1. Safe rescue — P0

**Observed:** On September 15, both builds reached `STUCK — R RESET` beside the opening right-side rail. R placed the car near that rail again. Immediately after local rescue, telemetry showed approximately 8.9 u/s, 27.4° slip, and `offroad`; the car was still aimed toward the troublesome edge. This is a recovery-quality issue, separate from whether the original crash was deserved.

**Source lead:** `src/sim.ts`, `simRespawn` and the snapshot block. The snapshot gate checks speed, ground contact, lateral distance, and slip relative to the car. It does not establish that the heading/velocity will remain safely on the road ahead. `simRespawn` restores that exact heading and velocity.

**Task:** Keep a short history of safe recovery candidates, or use a validated earlier recovery anchor. Choose a position with rail clearance and enough road ahead to regain control. Reject candidates already scraping/crashing or travelling outward into imminent contact. Preserve the existing 3-second penalty and checkpoint/progress rules. Avoid granting forward progress or advantageous shortcuts.

**Acceptance:** Reproduce the opening-rail case on `2026-09-15`; R gives a clear, controllable re-entry rather than restoring a near-impact pose. Repeat on left/right rails and open-edge falls. A second rescue must not get trapped in the same bad snapshot. Verify penalty and ghost timestamp continuity. A short neutral-input recovery window can be used as a diagnostic, but should not become an auto-driving feature.

**Ownership:** `src/sim.ts` and relevant recovery/physics tests. Any UI wiring goes through the integrator.

### 2. Complete retry reset — P0

**Observed twice in the local build:** Pressing Enter returned the car to the start and displayed `READY`, while the timer still showed `0:36.25` and the progress bar retained the previous run. Clicking RETRY reproduced it with `0:10.54`. The stale values last through the countdown; this is not evidence that the simulation clock failed to reset.

**Source lead:** `startRun()` resets the simulation and split/delta UI, but does not reset the displayed timer or progress. The countdown render branch returns before those elements are refreshed. Debug telemetry also retains the previous run.

**Task:** Reset all displayed run state immediately in the restart transition. Keep the existing Enter/button retry. Label recovery consistently: the menu says “R rescue,” but the stuck prompt says “R RESET.” Prefer `R RESCUE (+3s) · ENTER RETRY` on desktop and appropriate touch labels. Surface the rescue penalty briefly.

**Acceptance:** During the very first READY frame, timer is `0:00.00`, progress is zero, previous drift/crash/split feedback is gone, and the car/camera are at the start. Test Enter, button, finish retry, and airborne retry. The existing 0.7-second retry countdown is an optional feel experiment after this correctness fix, not a missing retry implementation.

**Ownership:** Integrator: `src/main.ts`, `src/retry-control.ts`, `index.html`, `src/style.css`, retry tests.

### 3. Actual directional signs — P1

**Observed:** The roadside warning boards look like blank yellow rectangles, including at close range beside the rail. They provide a warning color but no clear left/right instruction.

**Source confirmation:** `src/visuals.ts` creates rectangular planes with a plain material and per-instance yellow/red color. There is no arrow or chevron graphic in the board rendering.

**Task:** Add high-contrast directional chevrons, correctly mirrored for left/right turns, plus a distinct symbol for the tightening corner. Keep approach and repeater placement, but assess visibility from the actual chase camera. Add sparse apex/exit references where needed.

**Acceptance:** Direction is identifiable in an approach screenshot without inferring it from scenery. At top speed, aim for roughly 1.5 seconds of useful advance notice as an initial design target; measure actual visibility before changing marker distances. Check signs at crests and on both turn directions. Preserve clear inside-apex space, rail collision identity, and instancing budgets.

**Ownership:** `src/visuals.ts`, its tests. Track placement changes require coordination with packet 7.

### 4. Teach and show the drift rhythm — P1

**Observed:** The menu explains which key slides, but not that a tap while steering initiates a sustained slide and countersteering produces the signature exit. The normal driving HUD has no speed display. Useful drift quality/phase and speed values are confined to debug telemetry; ordinary feedback is essentially `DRIFT`.

**Task:** Add a compact speed readout with an intentional unit convention. Add a short optional practice sequence: steer + tap drift, hold an arc, countersteer to straighten. Show brief, restrained feedback for a clean exit using the actual existing reward event. Include a visible input reminder until the player demonstrates the action. Support keyboard and touch explanations separately.

**Handling investigation, not a proven tuning bug:** The September 14 review tested small analog corrections. Keyboard input is digital before smoothing, so independently compare brief opposite-key taps with analog corrections. Test sustained arcs, early/late exits, and alternating turns with continuous controls before retuning thresholds or cooldowns. Preserve one reward per slide and spam resistance.

**Acceptance:** A new player can discover and intentionally repeat the full drift/exit sequence without F telemetry. A good exit visibly preserves or gains speed, and feedback fires once. Report keyboard and touch outcomes separately. Do not claim handling improvement from module tests alone.

**Ownership:** Muse proposes driving UX and any isolated feedback module; integrator owns UI and `main.ts`. Changes to `src/drift-control.ts` are a separate measured follow-up after recovery stabilizes.

### 5. Driving sound — P1

**Source finding:** There is no driving audio implementation in the current source. Audio was not audibly evaluated through this playtest interface.

**Task:** Add engine pitch/load, sustained tire slip, a distinct clean-exit cue, landing, light scrape, and severity-scaled crash sounds. Engine acceleration and the transition into/out of tire noise should explain the car's state. Begin with sound feedback before considering music.

**Acceptance:** Sounds follow actual simulation state, not just button presses. Start audio after interaction, provide mute, suspend while hidden, and avoid stuck loops or duplicated voices after retry. Keep mobile CPU and voice counts bounded; perform an actual listening pass.

**Ownership:** New `src/audio.ts`; integrator owns wiring and controls.

### 6. Canyon composition — P1

**Observed:** The warm rock/cool sky palette and broad asphalt already establish a coherent style. However, both inspected openings are dominated by tall, plain, angular roadside masses and repeated small triangular vegetation. At the contact location, the scenery reads as a close corridor of large slabs. The low-poly car is readable but visually simple.

**Task:** Compose sections deliberately: a confined canyon opens onto a broad vista, a bridge or exposed shelf reveals depth, and a distinctive formation anchors the next section. Vary silhouette, height, spacing, and rock strata; use near/middle/distant layers with atmospheric separation. Make road supports, curbs, and track structures feel constructed. Reduce repeated near-road clutter where it competes with signs. A more recognizable car silhouette, wheel detail, and restrained body response can follow.

**Acceptance:** Matched before/after screenshots at the start, a drift approach, and a crest reveal the route more clearly and contain recognizable landmarks. Road/rail exclusion bounds remain valid. Keep existing render budgets; do not solve scale by adding shake, excessive particles, or expensive effects. This is a composition change, not a blanket instruction to push every cliff farther away.

**Ownership:** `src/environment.ts` and environmental tests. Integrator owns any car changes in `main.ts`; coordinate with the visuals owner rather than editing that file concurrently.

### 7. A benchmark course and track variety — P2

**Source finding:** The generator already provides wide drift arcs, sweepers, a tightening complex, and crests. Those features should not be assigned as absent. Full-course flow was not evaluated in this playtest.

**Task:** Establish one fixed benchmark sprint and a shorter practice section before further random-generation tuning. Build a recognizable sequence: acceleration into a broad drift, a readable reversal, a controlled crest/landing, a tightening challenge, and a fast finish. Preview the landing road and avoid hiding the required next input behind a crest. Use the benchmark to tune the generator, then add more distinct track structures only if the current physics supports them.

**Acceptance:** Record full runs for conservative and skilled lines; compare completion, contacts, entry/minimum/exit speed, and split times. A better line wins repeatably without wall riding or shortcut progress. Keep today’s course accessible while practice/benchmark selection remains separate. Geometry changes must handle course/ghost compatibility.

**Ownership:** `src/trackgen.ts`, track tests, and a benchmark fixture. Integrator owns mode selection and shared wiring.

### 8. Targets and improvement feedback — P2

**Observed/source finding:** A fresh player sees `BEST —`. PB/friend ghosts and live splits already exist, but there is no initial medal target or practice objective. The finish code shows total time and PB comparison; it does not present a retained sector breakdown.

**Task:** Add validated bronze/silver/gold targets for the benchmark first, then derive credible targets for accepted daily courses. Provide a reference ghost where one has actually been recorded. At finish, show the sector that cost the most time relative to the selected valid rival and a clear next target. Keep retry primary and sharing secondary. Add course/practice selection without weakening the daily challenge.

**Acceptance:** Before a PB exists, there is an achievable target. After a run, the player knows a specific sector or time gap to improve. Persist only real results; preserve course/version compatibility and reject mismatched ghosts. Do not fabricate a reference pace or claim a comparison without valid data. Full finish/ghost UI must be playtested before sign-off.

**Ownership:** `src/loop.ts`, isolated target data/module, associated tests. Integrator owns finish/menu UI; coordinate any `ghost.ts`/`share.ts` changes.

## Handoff and verification

One owner per file. Recovery and retry first; directional signs and environment can then proceed with separate file ownership. Integrator owns `src/main.ts`, HTML/CSS, package/config changes, and final integration. Each worker should report evidence, changed files, focused checks, and remaining subjective questions in `docs/agents/`.

For implementation, run relevant regressions, then the full existing test suite, build, and typecheck. Verify the same daily seeds before/after in-browser. Include continuous keyboard driving, touch on a real device, rail/fall rescue, full restart, focus loss, a completed run, and PB/friend replay. Keep source/test findings separate from hands-on feel conclusions. Publishing is a separate action from this review.

## Reference

The design direction follows the project's `docs/TRACKMANIA_REFERENCE.md`. TrackMania² Canyon's official product listing supports the broader emphasis on accessible precision racing, spectacular tracks, and competition: [Ubisoft/Nadeo on Steam](https://store.steampowered.com/app/228760/TrackMania_Canyon/). The proposed priorities and acceptance targets above are this playtest's recommendations, not claims that Canyon uses the same mechanics or numerical tuning.
