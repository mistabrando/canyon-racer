# Completion — packet 6: Canyon composition (`src/environment.ts`)

## Scope and ownership

Wrote only `src/environment.ts` and the environmental tests in
`tests/visuals-budget.ts`. The completed signs work in that test file and in
`src/visuals.ts` is preserved. No edits to `main.ts`, `visuals.ts`,
`trackgen.ts`, `courses.ts`, audio, UI, shared configs, package files,
generated output, or git history. Other sessions' working-tree changes are
untouched.

## Revision 3 — response to root's fixed PRACTICE/BENCHMARK launch review

Root's integrated review found the **fixed practice/benchmark starting
screenshots** (Watch Reference) still show enormous tall cliffs on both sides
with a narrow sky slit. Root asked to validate the fixed course geometry (via
the courses module, read-only) and to inspect all tall families, not just near
walls.

Probing the authored geometry found the real causes:

1. **Far range formed a symmetric far corridor.** The far-butte layer placed a
   tall butte on **both** sides every 60u (`h 44–86`, `lateral 70–130`),
   including through the launch and immediately after it.
2. **A hazed horizon butte loomed over the benchmark start.** The horizon ring
   was placed relative to the course bounding-box centre; on a compact authored
   course a ring butte landed **41u from the start with its top 112u up** →
   ~68° elevation (near-full viewport).
3. Near walls and other families were already opening-clamped, but the launch
   had no gentle transition and the first both-sided cut began right at the
   opening edge.

Fixes:

1. **Far range is now one-sided.** One butte per 90u station, alternating side,
   so it can never form a symmetric corridor. Inside the opening it is pushed
   to `OPENING_FAR_LATERAL = 240`; over the next 220u it ramps back
   (`farOpeningLateral`), and its height ramps up with distance
   (`0.55 … 1.0×`) so the approach stays airy.
2. **Horizon ring clears the whole course.** `HORIZON_CLEAR = 300`; ring radius
   is now `max(420, courseSpanR + HORIZON_CLEAR) + hash*200`, and
   `enforceCorridor` pushes any hazed butte centre to at least `HORIZON_CLEAR`
   from every centreline sample. Benchmark launch max elevation dropped from
   **68.3° → 13.8°**.
3. **Ease-in after the opening** (`EASEIN_LEN = 80`): one-sided, set-back,
   height-capped cliffs (`h ≤ 22`) before full confinement resumes.
4. `OPENING_LEN` set to 180; the same `openingLateral` rule covers near walls
   (low shelves), far buttes, mesas, terraces, spires, piers, and arches, so
   the composed opening is shared by every family on fixed and daily geometry.
5. Existing constraints kept: `GORGE_MAX_CUT_RUN = 4`, `GORGE_BLOCK = 4`, no
   budget/clearance weakening.

### Fixed-mode probe evidence (`.muse/scratch/environment/probe-fixed.mjs`)

```
===== practice (1212u, opening=180) =====
  opening near walls: n=6, maxH=4.2, tall(>6)=0
  opening far range:  pushed to 240 (h reduced to ~22)
  launch forward view: max elevation=15.6deg
  later tall near walls (>12, s>180): resumes; far range one-sided
===== benchmark (1789u, opening=180) =====
  opening near walls: n=6, maxH=4.2, tall(>6)=0
  opening far range:  pushed to 240 (h reduced to ~22)
  launch forward view: max elevation=13.8deg   (was 68.3deg)
  later tall near walls (>12, s>180): resumes; far range one-sided
```

Daily launch is unchanged-good: `2026-09-15` opening has 6 shelves (max
4.2u), no opening formations, landmark at lateral 236, 287 tall near cliffs
resume after s=180.

## What else changed (revisions 1–2, retained)

- Deliberate gorge phrases (`GORGE_BLOCK = 4`), open block 0, corridor breaker 4.
- Confined cuts use asymmetric shoulders + phrase tall/short bias.
- Midground terrace layer + one grounded landmark butte (no stacked cap).
- Grounding: `archCenterY`/`archHalfHeight` half-bury arches; spires/piers use
  `ENV_BASE_DROP`; `enforceCorridor` re-anchors pushed mesas to the ground under
  their final position.
- Sparse clustered vegetation (`scrubStep` 16/28) with varied width/height.
- Stable horizon ring (now also depth-clamped).

## Budgets (caps unchanged)

| Family | Value | Cap |
| --- | --- | --- |
| Near+far walls | 234 (far now one-sided: 25) | 700 |
| Mesas | 28 | 40 |
| Arches | 3 | 4 |
| Scrub | 259 | 420 |
| Env draw calls | 5 | 5 |
| Combined tris | 18,182 | 40,000 |

## Tests (environmental, in `tests/visuals-budget.ts`)

Updated #11 (wall volume lower bound reflects one-sided far layer), #13 (mesa
layer set), #14 (scrub variety/sparsity), #19 (rhythm + open launch), #27 (run
cap 4). Added:

- **31 / 31a** layered composition + opening composition + shared opening rule.
- **32** grounding (no hovering bases; stable horizon band).
- **33** arches grounded half-rings, corridor-clear on both tiers.
- **34** both tiers keep landmarks; mobile only thins vegetation.
- **35** four fixed daily seeds: landmark, terraces, no floaters, corridor-clear.
- **36** fixed practice/benchmark (consumes `resolveCourse`, read-only):
  day-independent identity + reference match; opening near walls low; opening
  far range pushed; opening formations separated; no both-sided tall cliffs in
  the opening; far range never forms a symmetric corridor; confinement resumes;
  horizon ring clears the course; launch forward-arc max elevation ≤ 22°; env
  within budget.

### Commands and results

`tsc -p tsconfig.tests.json` currently fails on another worker's in-progress
`tests/driving-feedback.ts` (outside my ownership), so I compiled only the
affected roots:

```
./node_modules/.bin/tsc --target ES2020 --module nodenext \
  --moduleResolution nodenext --strict --skipLibCheck \
  --outDir .muse/test-output/environment \
  src/courses.ts tests/visuals-budget.ts tests/trails-bounds.ts tests/corner-apex.ts

node .muse/test-output/environment/tests/visuals-budget.js   # 244 passed, 0 failed
node .muse/test-output/environment/tests/trails-bounds.js    #  41 passed, 0 failed
node .muse/test-output/environment/tests/corner-apex.js      #  75 passed, 0 failed
```

`trails-bounds` re-verifies zero corridor intrusions across 30 fixed daily seeds
on desktop + mobile plus the current date. Logs: `.muse/test-output/environment/`;
probes: `.muse/scratch/environment/`.

## Road supports / shelf details — integrator suggestion (unchanged)

Not implemented here (corridor collision risk). Safe shape: a pale shoulder
ribbon just outside the curb on non-barrier stations in `main.ts`
(`halfW + 2.6`, dropped ~1u); any pillars reuse the mesa mesh at
`lateral >= corridorNeed + mesaExtent`, `y = roadY - ENV_BASE_DROP`. Never span
the road.

## Limitations (honest)

- I still cannot view rendered frames; all launch claims are measured geometry
  and an approximate chase-cam elevation metric, not screenshots. Root's browser
  pass is the final visual check.
- The launch-elevation test uses a simple pinhole approximation (camera 8u
  behind, 3u up, 140° forward arc, 350u range); it is a composition guard, not a
  renderer.
- The landmark is placed on `side = 1` at fraction 0.08; on self-approaching
  courses its nearest-section distance can be smaller than its placement lateral
  (still corridor-clear).
- If root wants a wider or narrower opening, `OPENING_LEN`, `EASEIN_LEN`,
  `OPENING_MIN_LATERAL`, and `HORIZON_CLEAR` are the dials; tests read them.
