# Completion packets 4/5 + UI of 7/8 — handoff (2026-09-15)

Owner: UI integrator (DeepSeek Flash, OpenCode). Scope delivered:
`src/main.ts`, `src/style.css`, `index.html`, new `src/audio.ts`, new
`src/driving-feedback.ts`, new `tests/audio.ts`, new
`tests/driving-feedback.ts`, `tests/loop-ui.ts` (untouched, still green),
`package.json`, `tsconfig.tests.json`, this handoff. `src/courses.ts`,
`src/course-reference.ts`, `tests/courses.ts` are consumed but owned by the
course worker. No physics/threshold tuning; `sim.ts`/`drift-control.ts`/`visuals.ts`
untouched.

## Drift teaching + practice (packet 4)

- `src/driving-feedback.ts` (pure, tested):
  - `exitFeedback(event, grade)` — returns `CLEAN EXIT` / `PERFECT EXIT` only
    for the actual one-shot `exit` event; `weak`/`none` and every non-exit event
    stay silent.
  - `createLesson`/`advanceLesson`/`lessonText` — three steps (steer + tap
    DRIFT → hold the slide ~0.6s → countersteer exit) advanced strictly by real
    sim/drift events, with separate keyboard/touch wording.
  - `createPractice`/`recordPracticeExit`/`practiceText` — practice counts only
    good/perfect exits toward a 5-exit goal.
  - `speedKmh` (u/s treated as m/s × 3.6), medals (`medalFor`,
    `nextTargetText`), sector deltas/summary, `recordsPB`, `appendCourseMode`.
- `main.ts`: first-time lesson shows in the HUD until completed, then persists
  `canyon-drift-lesson-seen` (optional); practice mode shows stepwise progress
  driven by the same captured `sim.rhythmOut` event; exit feedback is a separate
  `#exitfb` line so it never fights `#msg`. Compact `#speed` km/h readout under
  the timer.

## Driving audio (packet 5)

- `src/audio.ts` — one bounded graph built on the first user gesture:
  2 continuous oscillators (engine saw + sub sine) + 1 looping noise source
  through a band-pass (sustained slip) + a fixed 4-voice one-shot pool.
  - `update(dt, state)` maps speed/load → engine pitch/level and actual drift
    amount → slip noise.
  - `oneShot('land'|'crash'|'cleanExit')` reuses the pool (steals the soonest
    voice; never grows). Pool oscillators run continuously after a single
    `start()` and are gated by envelopes; `reset()` silences every voice and the
    continuous layers on retry without restarting any node.
  - `setMuted` persists `canyon-audio-muted`; `suspend`/`resume` mirror
    `visibilitychange`; all platform effects are injected so tests use a mock
    `AudioContext`.
- `main.ts`: `ensureAudio()` on first key/pointer gesture; `update` per run
  frame; one-shots on wall hit / landing / clean exit; `#mutebtn` toggle;
  auto-pause + audio suspend on tab hide.

## Course modes + UI (packet 7/8 UI)

- Consumes `parseCourseMode`/`resolveCourse` (`src/courses.ts`). Daily is the
  default; `mode=practice|benchmark` reloads the same page.
- Course-isolated PBs/ghosts via `course.storageKey` (daily falls back
  read-only to legacy `canyon-best-<day>`/`canyon-ghost-<day>`).
- Share links: `buildShareUrl` for `d/t/g` then `appendCourseMode` adds
  `mode=practice|benchmark`; the daily `d` date is preserved.
- Medals: menu `#ptargets` shows GOLD/SILVER/BRONZE before the first PB; finish
  shows achieved medal, `nextTargetText`, and real per-sector gains/losses vs a
  valid racing ghost (`sectorDeltas`/`sectorSummaryText`) — blank when none.
- Reference: practice/benchmark recorded references race as a `REF` rival and
  can be toggled (`RACE REFERENCE`/`RACE MY BEST`); `WATCH REFERENCE` plays the
  genuine recording with a chase camera, labelled `REFERENCE — DEMONSTRATION`,
  and returns to the menu. Watching never steps the sim, never calls
  `finishRun`, and `recordsPB('watch')` is false (tested), so no fake PB.
- Player controls (not developer UI): pause (`Escape`/`P` + overlay with
  RESUME/MENU), fullscreen toggle, mute, plus the existing retry/rescue.
  `F` telemetry remains the pre-existing debug key.

## Verification (isolated to `.muse/test-output/ux-audio`)

```
# scoped compile (environment.ts was mid-edit by its owner at handoff time)
./node_modules/.bin/tsc src/sim.ts src/barrier-plan.ts src/share.ts src/ghost.ts \
  src/drift-control.ts src/trackgen.ts src/courses.ts src/course-reference.ts \
  src/audio.ts src/driving-feedback.ts src/loop.ts src/retry-control.ts \
  tests/audio.ts tests/driving-feedback.ts tests/courses.ts tests/loop-ui.ts \
  tests/retry-restart.ts --target es2020 --module nodenext \
  --moduleResolution nodenext --strict --skipLibCheck \
  --outDir .muse/test-output/ux-audio

node .muse/test-output/ux-audio/tests/audio.js              # 41 passed, 0 failed
node .muse/test-output/ux-audio/tests/driving-feedback.js   # 45 passed, 0 failed
node .muse/test-output/ux-audio/tests/courses.js            # 79 passed, 0 failed
node .muse/test-output/ux-audio/tests/retry-restart.js      # 34 passed, 0 failed
node .muse/test-output/ux-audio/tests/loop-ui.js            # 28 passed, 0 failed
```

`./node_modules/.bin/tsc --noEmit` reported **no errors in any owned file**;
the only errors were the environment worker's in-progress `LANDMARK_CAP_TINT`
rename in `src/environment.ts`, so the full `npm test`/build was not run (root
owns final integration once that worker finishes).

### What the tests actually prove
- Audio: lazy single graph, idempotent `start()`, bounded node/voice counts,
  persisted mute read-back, visibility suspend gating, speed→pitch monotonicity,
  drift-gated slip noise, no voice leak across `reset()`, distinct one-shot
  envelopes. (Mock AudioContext; real playback not heard.)
- Driving feedback: exit copy fires only on the real reward event; lesson
  advances only on real events in order; practice ignores non-qualifying exits;
  sector math is per-sector and skips missing splits; watch never records a PB;
  mode-aware share append.

### Config wiring
`package.json` `test` now also runs `audio.js`, `driving-feedback.js`,
`courses.js`; `tsconfig.tests.json` includes `src/audio.ts`,
`src/driving-feedback.ts`, `src/courses.ts`, `src/course-reference.ts` and the
three test files. Note: `tests/courses.ts`'s header says "not in
tsconfig.tests.json"; the user packet explicitly asked to wire courses tests
into `npm test`, so it is included — root can move it to a `test:courses`
script if the ~seconds of robot calibration is unwanted.

## Release blocker fix — Web Audio single-use sources (audio.ts)

Real-browser `InvalidStateError: Failed to execute 'start' on
AudioScheduledSourceNode: cannot call start more than once` came from the
one-shot voice pool: a pooled oscillator was `start()`ed, `stop()`ed and then
`start()`ed again on the next collision. Oscillator/BufferSource nodes are
single-use.

Fix: the four pooled voice oscillators now start **exactly once** when the graph
is built and stay running; `oneShot()` retriggers them purely through scheduled
frequency + gain envelopes, selecting a voice by `active`/`endsAt` and stealing
the soonest-ending one when all four are busy. `reset()` no longer stops nodes —
it cancels envelopes and zeroes gains. Continuous engine/sub/noise nodes were
already start-once. The pool therefore stays bounded across unlimited
collisions/landings/clean exits and retry cycles.

Mock hardened: `tests/audio.ts` `FakeOsc`/`FakeSource` now throw
`InvalidStateError` on a second `start()`/`stop()`, exactly like the platform.
New regression tests fire 24 mixed one-shots and 5 start/reset retry cycles,
assert simultaneous voices stay ≤ 4, that every oscillator and the noise source
has exactly one `start` call for its lifetime, and that `reset` leaves zero
active voices. `audio` now **41 passed, 0 failed**; `tsc --noEmit` clean.

Scope limited to `src/audio.ts` and `tests/audio.ts`. I did not listen to the
result; root rechecks a real unmuted browser.

## Release fixes (browser-review follow-up)
1. **Watch reference telemetry + controls.** During `WATCH REFERENCE` the HUD now
   shows replay elapsed time (`fmt(watchT)`), speed derived from consecutive
   recorded samples (`speedKmh`), and progress as recorded time fraction.
   `Esc`/`P` pauses/resumes the demo; a visible `#playctrl` bar shows PAUSE/
   RESUME and MENU/STOP during race and watch (touch raises it above the
   joystick/drift controls). `body.watching` hides the race RETRY button, which
   previously appeared and did nothing. Watching still never records a PB.
2. **Header/title dates.** Top-bar identity no longer leaks the fixed
   `2026-01-01`/`02` day for practice/benchmark; daily shows
   `CANYON DAILY · <date>`. The menu title is the course name only, with the
   daily date moved to a separate `#pdate` line (hidden when empty).
3. **Menu ergonomics.** `#refrow` (RACE/WATCH REFERENCE) has spacing below
   Drive/Share. `#phint` is now generated per input type and includes the pause
   key. `#panel`/`#panelcard` scroll with `max-height` (incl. `100dvh`), and a
   `max-width:430px` query tightens the top bar and mode buttons for 390×844.
4. **Practice goal.** Practice progress is no longer reset on retry: it is
   stored under `${storageKey}-practice` and continues across retries and
   reloads, so the 5-clean-exit goal is achievable; `practiceText` now states
   "retries keep progress". Progress is confirmed only by real good/perfect
   exit events.

Scoped checks after the fixes: `tsc --noEmit` clean; `audio` 27/0,
`driving-feedback` 46/0, `retry-restart` 34/0, `loop-ui` 28/0, `courses` 85/0
(compiled from `tsconfig.tests.json` into `.muse/test-output/ux-audio`).

## Limitations / honest notes
- No browser was available: menu layout, pause/fullscreen, reference watch,
  km/h HUD, and audio output are reasoned but not visually/heard verified.
  Root will browser-check.
- `audio.ts` generates its noise buffer with `Math.random()` (platform audio,
  not simulation); it is outside the deterministic sim contract.
- Reference racing defaults on only when no friend/PB ghost is present; the
  `RACE REFERENCE` toggle appears once a PB or shared ghost exists.
- Full `npm test`/`vite build` intentionally deferred until the environment
  worker's `environment.ts` edit stabilises.
