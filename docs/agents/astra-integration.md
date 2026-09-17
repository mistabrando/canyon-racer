# P0 reliable controls + retry — integrator handoff (2026-09-14)

Owner files: `src/main.ts`, `index.html`, `src/style.css`,
`src/retry-control.ts` (new), `tests/retry-restart.ts` (new),
`tsconfig.tests.json`, `package.json` (test script only).

## Changes

- Focus loss (`blur`, `visibilitychange` hidden, `pagehide`) calls new
  `clearAllInput()`: keyboard flags + polled steer/drift zeroed, touch
  stick/drift released via `clearTouch(tc)` (`src/retry-control.ts`),
  visible knob recentered, DRIFT button `.on` cleared. A key released
  outside the window no longer sticks; the next press works.
- Full-run retry during a run: `Enter` in `run` state plus a labeled
  `↻ RETRY` button (`#retrybtn`, real `<button>` with aria-label, visible
  only while `body.racing`, stacked below the R button in touchmode).
  Both route to `startRun(true)` — complete reset of input, sim
  (`resetRun` → time/recording/splits/camera via `placeAt`), loop debt
  (`acc`), crash shudder (`wallKick`), split banner (`splitExpiry`), then
  the quick 0.7 s READY start. First menu start stays the deliberate 3-2-1
  (`countdownLen` pins this; the quick flag cannot shortcut it).
- R rescue untouched: `simRespawn` + exact 3000 ms penalty; still a no-op
  when finished (finish panel retries instead). Mobile stick/drift paths
  unchanged otherwise.

## Worker-diff review (no integration edits made)

- `src/sim.ts` (wall-feel): loss/crash-time blend confined to vn 6–12;
  glance branch, vn ≥ 12 costs, rebound, cooldown, guards bit-identical.
  No integration regression; `sim.ts` left as the wall worker left it.
- `src/render-motion.ts` (speed-camera): one-constant change
  (`fullSpeed` 60→80), render-only. No sim/ghost interaction.
- Drift-flow: test coverage only, zero tuning changes. Nothing to integrate.

## PB/ghost compatibility

- Ghost format, recording cadence and rival resolution untouched; old
  ghosts still load and race.
- Clean-line times fully comparable (physics identical off the vn 6–12
  wall band). Lines with a light wall touch just above the old glance
  threshold are now slightly cheaper than under the old 40%-floor cliff,
  so pre-change PBs set through wall grazes may be marginally easier to
  beat. Do not present old vs new times on wall-touching lines as
  like-for-like without that caveat.

## Checks (all green)

- `npx tsc --noEmit`: exit 0.
- `npm run build`: exit 0 (chunk-size warning only, pre-existing).
- Tests compiled to `/tmp/astra-integrator/testrun` (worker-specific,
  `test-dist` untouched): harness 276, physics-feel 180, ghost-share 117,
  visuals-budget 132, render-motion 51, drift-control 103, track-variance
  197, loop-ui 28, retry-restart 16 (new), trails-bounds 41,
  barrier-plan 49, barrier-edge 44, corner-apex 75 — 0 failures.
- `npm test` (test-dist build) not run directly to avoid racing parallel
  workers; same sources compiled clean to the worker dir above.

## Limitations (explicitly not claimed)

- No browser smoke test: no interactive browser tooling in this
  environment. Pending: human pass on desktop + mobile sizes covering
  focus loss, R rescue, Enter/button retry (incl. airborne and
  post-finish), drift corrections, shallow vs hard contacts, ghost timing.
- Headless tests pin reset/penalty/countdown logic only; DOM wiring
  (knob recenter, button visibility) verified by code inspection, and
  subjective feel is unverified.
- No P2 art/audio added in this pass.
