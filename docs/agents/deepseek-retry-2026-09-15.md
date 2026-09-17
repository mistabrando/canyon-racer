# Packet 2 — Complete retry reset + truthful recovery UI (handoff)

Date: 2026-09-15. Owner: UI integrator (DeepSeek Flash, OpenCode). Scope:
`src/main.ts`, `src/retry-control.ts`, `index.html`, `src/style.css`,
`tests/retry-restart.ts`, this file. No other files changed; all pre-existing
working-tree changes preserved.

## Defect fixed

On Enter/button retry the car returned to the start and `READY` appeared while
the previous run's timer (`0:36.25`), progress fill, delta/split toasts, F
debug telemetry and retained `lastInfo` stayed on screen for the whole
countdown. `startRun()` reset the sim and splits but never touched those DOM
values or the retained step-info, and the countdown branch returns before the
run branch refreshes them.

## Changes

### `src/retry-control.ts` (pure, DOM-free, tested)
- `retryDisplayReset()` — canonical retry HUD values: `time = fmt(0)` →
  `0:00.00`, `progressPct = 0`, and empty delta/split/debug. Fresh object per
  call.
- `neutralRunInfo()` — fresh neutral `StepInfo` so no stale `sIdx`, `stuckMs`,
  `oobMs`, `surface`, drift/scrape flags survive into the first READY frames.
- Recovery language: `RESCUE_PENALTY_S = 3`, `rescueKey(touch)`,
  `retryKey(touch)`, `recoveryHint(touch)`, `stuckPrompt(touch)`,
  `offCoursePrompt(touch)`, `rescuePenaltyToast()`.
  - Desktop: `STUCK — R RESCUE (+3s) · ENTER RETRY`
  - Touch: `STUCK — RESCUE (+3s) · RETRY`
- `clearTouch`/`countdownLen` unchanged (3.1s first, 0.7s retry preserved).

### `src/main.ts`
- `startRun()` now applies `retryDisplayReset()` before the first READY frame:
  timer, progress width, delta, split, debug text; swaps in `neutralRunInfo()`;
  clears `msgEl`, the penalty toast, and the previous run's skid residue
  (`clearSkids()`, factored from the init block, resets `skidIdx`). Existing
  input clear, sim reset, motion/camera snap, split reset and ghost logic are
  untouched.
- Run loop uses `stuckPrompt(coarse)` / `offCoursePrompt(coarse)` instead of
  the old `R RESET` copy (prefixes preserved so the existing message-clear
  check still works).
- `doRespawn()` calls `showPenaltyToast(performance.now())` on a real rescue.
  The toast is a **separate** HUD element (`#penalty`), so it surfaces the real
  charge without overwriting urgent STUCK / OFF COURSE messages. It expires
  after 1.8s (checked in the run branch).
- Retry button label set via `retryKey(coarse)` (`↻ ENTER RETRY` desktop /
  `↻ RETRY` touch).

### `index.html` / `src/style.css`
- New `<div id="penalty">` HUD line with `.show` fade style.
- Touch reset button relabeled `RESCUE` (pill, larger tap target).
- Menu hint updated to `R rescue (+3s) · Enter retry` and a touch-specific line.

### Integration review follow-ups (same pass)
- Mobile hint now says `RESCUE returns to the track (+3s)` (no
  implementation-detail "snapshot"; `snapshot` remains only in source comments).
- Touch `RESCUE` pill: `white-space:nowrap` + 16px horizontal padding so the
  six-character label cannot wrap or overflow; 40px height keeps its vertical
  gap to the touch retry button (top 64px+ vs 124px+ safe area) and to the
  bottom controls.
- `finishRun()` now calls `clearPenalty()`. The toast expiry lives only in the
  run branch, so a rescue on the finish step previously could leave `+3s` up
  behind the result panel indefinitely.

## Verification (isolated, no shared `test-dist`, no full build)

```
./node_modules/.bin/tsc --noEmit
rm -rf .muse/test-output/retry \
  && ./node_modules/.bin/tsc -p tsconfig.tests.json --outDir .muse/test-output/retry
node .muse/test-output/retry/tests/retry-restart.js   # 34 passed, 0 failed
node .muse/test-output/retry/tests/loop-ui.js         # 28 passed, 0 failed
```

New meaningful tests (in `tests/retry-restart.ts`): display reset is exactly
`0:00.00`/0/blank and non-aliasing; neutral info zeroes index/stuck/oob/flags
and cannot leak between calls; desktop vs touch copy; and
`RESCUE_PENALTY_S * 1000 === sim.RESPAWN_PENALTY_MS` so the displayed charge
can never drift from the actual penalty. `tsc --noEmit` is clean.

The isolated compile also picks up `src/sim.ts`, which another worker was
editing concurrently; the compile was clean at the time of the run.

## Browser wiring not executed (no browser in this session)

The DOM wiring is deliberately thin and belongs to `main.ts`, which headless
tests cannot run. Manual checks for the integration pass:

1. Enter mid-run, retry button mid-run, finish-panel retry, and airborne retry:
   on the first READY frame timer reads `0:00.00`, progress is empty, no old
   delta/split/F text remains, car and camera are at the start.
2. Trigger STUCK / OFF COURSE, press R: urgent prompt clears, `RESCUE +3s`
   toast appears in its own line for ~1.8s, timer jumps by exactly 3.000s.
3. Desktop shows `R RESCUE (+3s) · ENTER RETRY`; touch shows `RESCUE`: on a
   coarse pointer the reset pill reads `RESCUE` and retry reads `↻ RETRY`.
4. First GO of a session still counts 3.1s; retries still count ~0.7s.

## Limitations / notes

- `#penalty` toast expiry is frame-driven (only while `state === 'run'`);
  it is cleared explicitly on finish and on the next `startRun`, so no rescue
  toast can persist behind the result panel.
- Dust is left to its own short decay (no reset hook in `visuals.ts`, which is
  out of scope); only skid residue is force-cleared.
- Did not run the full suite/build; root owns final integration.
