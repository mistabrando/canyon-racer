# DeepSeek signs — packet 3: actual directional signs (2026-09-15)

## Scope and ownership

Packet 3 (`docs/agents/canyon-playtest-2026-09-15.md`, P1). Wrote only:

- `src/visuals.ts` — directional arrow geometry, planning, mount, budgets.
- `tests/visuals-budget.ts` — direction/severity/budget + fake-kit regressions.
- this handoff.

No edits to `src/trackgen.ts`, `src/main.ts`, `src/environment.ts`, shared
configs, package files, generated output, or git history. All pre-existing
working-tree changes (other workers' `main.ts`, `sim.ts`, retry tests, etc.)
are untouched.

## Problem

`planChevrons` emitted a plain colored plane. `side` was the board's placement
on the turn's outside, and the board color was the only signal — there was no
left/right arrow and no distinct tightening indicator. `side` must not be read
as arrow direction: an L turn's board stands on the driver's right.

## Changes

### 1. Explicit direction, independent of placement (`src/visuals.ts`)

- `CornerEventLike` now optionally carries `decreasing?`, `entryR?`, `exitR?`
  (already present on `trackgen.CornerEvent`); minimal fixtures default to
  not-tight.
- `Chevron` gained `dir: 'L' | 'R'`, `tight: boolean` (keeps `side`, `severe`).
- `planChevrons` encodes `dir` from the real event (`e.dir === 'L' ? 'L' : 'R'`,
  malformed values fall back to `'R'`, never to placement). Placement stays
  `side = dir === 'L' ? 1 : -1` (outside), unchanged.
- `arrowPointSign(c) = dir === 'R' ? +1 : -1` is the arrow's real pointing sign
  in the road-normal convention; it is the opposite of `side`.
- `tight = e.decreasing === true && e.medR < SIGN.TIGHT_MED_R (62)`, matching the
  `corner-apex` grammar for the one decreasing challenge per track.

### 2. Code-native high-contrast arrow geometry

- No dependencies, no bitmap assets, no new kit constructors. `buildArrowGeo`
  folds the four vertices of the injected `PlaneGeometry` into a concave-back
  chevron (two triangles: upper/lower arm sharing the inner notch and apex).
  Guarded so a stub geometry without a writable `position` attribute degrades
  to the plain plane instead of throwing headless.
- Mount renders two instanced families inside the existing sign block:
  a colored board (`boardGeo`/`boardMat`, tint: deep red `0xd11a0f` tight,
  warning red `0xd83a2a` severe, amber `0xf2a53a` otherwise) and near-black
  `0x101010` arrows (`arrowGeo`/`arrowMat`).
- Mirroring: right-pointing geometry with per-instance `scale.x = ±1`
  (`arrowPointSign`); the symbol is offset `SIGN.FACE_OFFSET` toward oncoming
  traffic along `-tangent` to avoid coplanar z-fighting.
- Tightening indicator: `planSignArrows` emits a second arrow offset toward the
  turn by `SIGN.DOUBLE_GAP` (double chevron), so tightening is distinguishable
  by shape as well as color. `setQuality` keeps boards + arrows on mobile.

### 3. Honest budgets

- `BUDGET.MAX_SIGN_ARROWS = 256` (2 symbols x at most 128 boards).
- `InstanceCounts.signArrows`; `estimateDrawCalls` now counts boards + arrows as
  two draws, so visuals can reach the already-declared `MAX_NEW_DRAW_CALLS = 5`
  (previously 4 were used; the cap is unchanged).
- `estimateTriangles` adds `signArrows * 2`; worst case remains
  `640*12 + 260*2 + 128*2 + 256*2 = 8968 < 12000`.
- Combined visuals+env envelope assertions updated 9 -> 10 draws (env is 5,
  visuals now 5); tris unchanged and under cap. No cap was raised.

Placement (`s`, `side`, advance/repeater distances) is unchanged, so barrier and
inside-apex clearance is preserved; the arrow extends at most
`ARROW_W/2 + DOUBLE_GAP ~= 1.08u` laterally from a board already at
`halfW + 4.5`.

## Tests

Added to `tests/visuals-budget.ts`:

- `8a` builds synthetic left/right arcs and checks the arrow points *into* the
  turn while the board stands *outside* — using the track's own curvature
  (`dT/ds`), not the event field, so it is not tautological.
- `8b` verifies severe vs tight flags (sweeper, drift arc, decreasing-but-wide
  radius gate, tightening), and that tightening doubles the symbol with the
  offset toward the turn.
- `8c` adversarial all-tight track: arrow cap, `withinBudget`, 5-draw ceiling,
  and exact triangle accounting including both symbol triangles.
- `8d` headless fake-kit mount: `mountVisuals` runs without real three, builds
  the chevron (non-rectangular) geometry, and mirrors every arrow instance to
  its encoded direction.
- Updated #3 for `dir`/`tight`, #4 for `MAX_SIGN_ARROWS`, #5 for empty arrows,
  and the combined-envelope draw assertions.

### Commands and results (project-relative scratch, isolated build)

```
./node_modules/.bin/tsc -p tsconfig.tests.json --outDir .muse/test-output/signs
node .muse/test-output/signs/tests/visuals-budget.js   # 167 passed, 0 failed
node .muse/test-output/signs/tests/corner-apex.js      # 75 passed, 0 failed
node .muse/test-output/signs/tests/trails-bounds.js    # 41 passed, 0 failed
```

Logs: `.muse/test-output/signs/{visuals-budget,corner-apex,trails-bounds}.log`.
Deterministic: fake-kit mirroring, planner output, and counts are all
reproducible (test #8 byte-identical check retained).

Existing visible markers: the fake-kit test confirms board tints and arrow
mirroring; root separately confirmed the left chevrons render visibly at the
2026-09-15 start in-browser.

## Limitations / open subjective questions

- `decreasing` is optional; a fixture that omits it can never be flagged tight.
  All real daily tracks carry it, so tightening signs appear on generated
  courses.
- Severity color still treats ordinary drift arcs (`medR <= 130`) as red, as
  before; the tightening board is a distinct deep red plus a double chevron.
  Human color-blind legibility of the two reds was not measured.
- "~1.5 s of advance notice at top speed" was not re-measured; placement is
  intentionally unchanged per the packet.
- Arrow size/board legibility at chase-cam distance is a feel judgement left to
  an in-browser sign screenshot pass; the fake-kit test cannot judge visibility.
- No apex/exit reference markers were added; the packet asked to preserve
  existing marker placement unless narrowly necessary, and any placement change
  belongs with packet 7.
