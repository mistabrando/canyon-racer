# Canyon feel plan — 2026-09-14

## Direction

Make speed feel earned and controllable: read the turn, set the car, sustain an arc, straighten into acceleration. Keep the deliberate tap-drift / countersteer slingshot identity. A correction should be understandable; a shallow rail touch should lose time without destroying the attempt. Hard crashes must still matter. Favor a clear road and stable horizon over more shake and particles.

## Review completed

Two actual Muse Spark workers completed independently through `.muse/run-codex.sh`, with separate worker homes: `astra-driving-review` and `astra-feel-review`. Raw reports are in `.muse/logs/astra-driving-review.txt` and `.muse/logs/astra-feel-review.txt`. Astra inspected their findings against source. `npm test` completed with exit 0. Game source is unchanged. This is a code review, not a hands-on playtest.

## Work packets

Launch workers with separate homes. One owner per file. Workers do not edit main.ts, shared configuration, generated output, or deploy. Integrator owns main.ts and final verification.

### P0 — reliable controls and retry (integrator)

- `src/main.ts:512`: keyboard flags clear only on keyup. Clear keyboard and touch state on blur and document hide; recenter the visible stick. Release a held key outside the window and return: no stuck steering or drift, and the next press works.
- `src/main.ts:628` and `:644`: R rescues with a 3-second penalty, while quick retry still uses a 0.7-second countdown. Preserve rescue and add a clearly labeled full-run retry available during a run. A retry should reset time, recording, splits, camera and input together, then start without the repeated countdown. Keep a deliberate first start. Verify repeated restart, restart airborne, finish retry, and valid ghost timestamps.

### P1 — wall severity continuity (Muse: wall-feel)

Own `src/sim.ts`, `tests/physics-feel.ts`; handoff `docs/agents/astra-wall-feel.md`.

- Inspect `src/sim.ts:648-682`. Light grazes already use a separate low-loss branch. The real concern is the jump into a minimum 40% impact loss plus a full crash timer just above the glance threshold.
- Measure contacts immediately below/above that threshold at the same forward speed. Smooth severity progression if the measurements confirm a sharp feel discontinuity. Retain hard-impact rebound, anti-wall-riding drag, deep-penetration protection and one event per contact.
- Acceptance: a severity sweep shows sensible retained speed and recovery time; shallow contact remains much cheaper than a hard crash; sustained grinding never beats a clean line. Do not weaken existing crash tests merely to green the suite.

### P1 — controllable drift arcs (Muse: drift-flow; after wall worker)

Own `src/drift-control.ts`, `tests/drift-control.ts`, `tests/corner-apex.ts`; request sim changes through integrator.

- `src/drift-control.ts:311`: opposite steering commits exit immediately. Evaluate small corrections versus deliberate exit using recorded input sequences; preserve the intentional countersteer slingshot. Do not replace the mechanic on assumption alone.
- `src/drift-control.ts:95,324`: evaluate the 1.2-second cooldown on alternating corners. Permit legitimate transitions only if repeatable runs demonstrate blocked inputs; maintain one reward per slide and spam resistance.
- Compare equal-skill lines on several fixed seeds: sustained arc, early correction, late exit, alternating turns. Report completion, collisions, minimum speed, exit speed and reward count. Change one tuning dimension at a time. Preserve deterministic replays; assess ghost compatibility before physics changes ship.

### P1 — speed camera (Muse: speed-camera; parallel with wall worker)

Own `src/render-motion.ts`, `tests/render-motion.ts`; handoff `docs/agents/astra-speed-camera.md`.

- `src/render-motion.ts:54,153`: FOV saturates at 60 while grip top speed is 80. This is a tuning choice, not a proven bug. Try fullSpeed 80 while retaining bounded FOV, stable horizon and existing smoothing.
- With the existing 14-degree speed range, that candidate adds 3.5 degrees between 60 and 80, not the 5 degrees incorrectly requested by the raw review. Test monotonicity and refresh-rate consistency; compare both versions at 40/60/80 and through a drift exit before accepting.

### P2 — track readability and sound (subsequent pass)

- Track worker owns `src/trackgen.ts` and `tests/track-variance.ts`. Measure visible setup distance and car travel time into generated corners before widening or lengthening everything. Existing large arcs and reversal links already address part of this. Keep characteristic sequences; avoid turning the course into uniformly easy bends.
- Art worker owns `src/visuals.ts` and its tests. Trial sparse inside apex references and stronger approach cues. Keep the racing corridor clear and existing mobile budgets intact.
- Audio is absent from main.ts. A later isolated audio module can communicate engine load, sustained tire slip, landing and impact severity. Start audio only after interaction; provide mute and suspend when hidden. Add after handling is convincing.

## Integration gate

Review each diff, run relevant regressions, then `npm test`, `npm run build` and `npx tsc --noEmit`. Play the same seeds before/after at desktop and mobile sizes. Explicitly test focus loss, rescue, full restart, drift corrections, shallow and hard contacts, and ghost timing. Headless bots establish consistency; human play establishes whether it feels better. No deployment is included.

## Implementation status (integrator 2026-09-14)

- P0 reliable controls + retry: implemented (`src/main.ts`, `index.html`,
  `src/style.css`, new `src/retry-control.ts`, new `tests/retry-restart.ts`).
  Handoff: `docs/agents/astra-integration.md`.
- P1 wall severity: implemented by wall-feel worker (`src/sim.ts`,
  `tests/physics-feel.ts`); reviewed, no integration changes needed.
- P1 drift arcs: drift-flow worker retained existing tuning (coverage only,
  `tests/drift-control.ts`, `tests/corner-apex.ts`); no sim changes.
- P1 speed camera: implemented by speed-camera worker
  (`src/render-motion.ts` `fullSpeed` 60->80, `tests/render-motion.ts`);
  reviewed, render-only.
- Verification: `npx tsc --noEmit` 0, `npm run build` 0, full headless suite
  green from worker-specific `/tmp/astra-integrator/testrun` build.
- Pending (no browser tooling available): human smoke test at desktop and
  mobile sizes (focus loss, rescue, retry, drift corrections, contacts,
  ghost timing). Subjective feel not verified.
