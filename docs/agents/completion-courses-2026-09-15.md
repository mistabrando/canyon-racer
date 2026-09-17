# Completion handoff — packets 7 + target data (8): courses & benchmark

Owner: course worker (DeepSeek Flash). Owned files:

- `src/courses.ts` (new)
- `src/course-reference.ts` (new)
- `tests/courses.ts` (new)
- `docs/agents/course-interface-2026-09-15.md` (new, early interface contract)
- this file

Untouched: `src/trackgen.ts`, `src/sim.ts`, `src/ghost.ts`, `src/main.ts`,
HTML/CSS, shared configs, package files. No commit/deploy/install/config change.

## What was built

Three course modes behind one contract (`CourseInfo`):

- **daily** — unchanged `acceptDailyTrack(day)`.
- **practice** — authored 1212u point-to-point learning course, titled
  **Drift Practice**: one broad `R` drift (r=122, 108°) plus a gentle `L`
  sweeper exit (r=165) and a gentle `R` (r=150). 3 events.
- **benchmark** — authored 1789u sprint: broad `L` drift (r=122, 118°),
  readable reversal into a broad `R` drift (r=120, 120°), long host straight
  with a controlled crest landing into a gentle `L` sweeper, a tightening
  decreasing-radius `R` challenge (entry R60 → exit R48), a second host
  straight/crest into a gentle `L` kink, and a fast finish straight. 5 events,
  clearance 224u (no self-crossing), max grade 0.24.

`parseCourseMode` reads `m`/`mode`/`course`, case-insensitive, falls back to
`daily` on anything malformed. `resolveCourse` is deterministic and memoized;
fixed modes ignore the requested day; **no simulation or bots run in the
browser**. `storageKey` = `canyon-course-daily-<checksum>-<identityDay>-v<ref>.<ver>`
for daily (the date is bound so a shared fallback geometry checksum cannot merge
two dates' PBs; ghost identity day differs) and
`canyon-course-<mode>-<checksum>-v<ref>.<ver>` for fixed modes (date-independent,
one key per geometry). Both are available via `courseStorageKey(mode,
identityDay, checksum)`.

## Reference runs (real, not invented)

Recorded from actual clean simulated completions (0 respawns, 0 wall contacts)
of the built geometry, encoded by the shared ghost codec with a packed identity:

| mode | identity day | checksum | REFERENCE |
| --- | --- | --- | --- |
| practice | 2026-01-01 | `271011ac` | 15763 ms |
| benchmark | 2026-01-02 | `199ca7bb` | 23486 ms |

The test replays the identical skilled controller on the resolved track and
asserts `round(run) === reference.t`, and that `checkIdentity` returns `match`.
The reference is surfaced as REFERENCE; it is not a gold target.

**Local full-fidelity samples.** These demos ship with the build, so they are
encoded with `REFERENCE_ENCODE_BUDGET` (not the share-URL `GHOST_URL_BUDGET`).
They keep every 120ms recorded sample (practice 120, benchmark 178) instead of
being strided ~1s apart. With the share budget, interpolation cut up to 2.8u
(practice) / 3.7u (benchmark) through inside curbs; at full fidelity the sampled
trajectory stays within the 0.5u quantization bound (measured max 0.352 / 0.362u
vs the replay). Both payloads (4279 / 6148 chars) are under the codec's
8192-char decode limit.

## Measured controllers (barrier-wired sim, authored courses)

| course | skilled (clean) | contacts | conservative | contacts |
| --- | --- | --- | --- | --- |
| practice | 15.76s | 0 | 15.91s | 1 wall |
| benchmark | 23.49s | 0 | 23.68s | 4 walls |

Splits are captured per corner event and asserted ordered/complete. The
conservative controller finishes both modes and records honest contacts; the
skilled controller is contact-free.

## Target calibration

- Fixed: gold/silver/bronze = reference × 1.08 / 1.20 / 1.36 (gold slower than
  the recorded reference, with margin).
- Daily: gold/silver/bronze = `estTimeS` × 1.10 / 1.22 / 1.40. Calibrated
  offline over 22 representative daily seeds driven by the skilled controller
  (clean, 0 respawns): measured time/estimate ratios were **1.031–1.054,
  median 1.045**. Gold 1.10 leaves ~5% over the measured clean pace. The test
  re-measures 4 representative seeds and asserts their pace stays under gold.

## Verification (isolated, project-relative)

```
# courses (explicit compile; not in tsconfig.tests.json)
./node_modules/.bin/tsc src/sim.ts src/barrier-plan.ts src/share.ts src/ghost.ts \
  src/drift-control.ts src/trackgen.ts src/courses.ts src/course-reference.ts \
  tests/courses.ts --target es2020 --module nodenext --moduleResolution nodenext \
  --strict --skipLibCheck --outDir .muse/test-output/courses
node .muse/test-output/courses/tests/courses.js     # 85 passed, 0 failed

# existing suite (same isolated output)
./node_modules/.bin/tsc -p tsconfig.tests.json --outDir .muse/test-output/courses
physics-feel 202/0  corner-apex 75/0  harness 276/0  retry-restart 34/0
ghost-share 117/0  drift-control 103/0  track-variance 197/0  loop-ui 28/0
trails-bounds 41/0  barrier-plan 49/0  barrier-edge 44/0  render-motion 51/0
visuals-budget 198/0
```

`tests/courses.ts` covers: parse fallback/recognition, daily identity and
ordered targets, fixed determinism/day-independence/ISO identity, geometry
(broad drift, reversal, decreasing challenge, crest runway, clearance), split
and contact measurement under both controllers, reference decode/identity/
finish-pose/replay-equality/**full-sample fidelity**, storage-key course
isolation (including daily keys separating two dates with an identical geometry
checksum while fixed keys stay date-independent), and byte-identical
determinism.

## Limitations / honest notes

- Reference demos are bundled locally at full fidelity (every 120ms sample,
  <0.4u interpolation error vs the replay). They are larger constants
  (4.3KB / 6.1KB) than a share link would be, which is intentional for a
  bundled demo; they are still under the codec's decode limit.
- Daily medals are calibrated against a deterministic mid-skill bot, not human
  lap data; margins are conservative but should be re-checked if physics is
  retuned. `DAILY_TARGET_FACTORS` is the single knob.
- Authored grammars rely on `buildCenterline`'s crest-host selection, which
  requires at least two middle straights (first/last excluded). Both authored
  tracks satisfy this; a future authored course must too.
- `resolveCourse` builds each fixed track once (centerline + analyzer) and
  caches it. That is a few ms and no sim; the O(n²) clearance pass is the
  heaviest part (~0.2M–0.4M iterations), done once per session.
- Module/bot validation only. In-browser feel, medal UI, and reference display
  are the integrator's; no human playtest was performed here.

## Concurrency note

Another worker is mid-integration. At this run `tsc -p tsconfig.tests.json`
reports errors in `tests/driving-feedback.ts` (`medalFor`, `nextTargetText`,
`sectorDeltas` unresolved) and `src/main.ts` (`bestKey` redeclared,
`acceptDailyTrack` import in flight). These are that worker's in-progress files,
not part of this packet; every pre-existing test still emits and passes, and the
courses compile is clean when scoped to the files above.
