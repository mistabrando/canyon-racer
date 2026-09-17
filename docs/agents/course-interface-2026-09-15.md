# Course interface — `src/courses.ts` (packets 7 + target data of 8)

Owner: course worker. Consumers: UI integrator (`src/main.ts`, HTML/CSS) and
tests. `src/trackgen.ts`, `src/sim.ts`, `src/ghost.ts` are unchanged.

## API

```ts
export type CourseMode = 'daily' | 'practice' | 'benchmark';

export interface CourseTargets { bronzeMs: number; silverMs: number; goldMs: number }

export interface CourseInfo {
  mode: CourseMode;
  title: string;          // e.g. 'Benchmark Sprint'
  description: string;    // short player-facing line
  identityDay: string;    // valid ISO date: daily = requested day; fixed = fixed date
  storageKey: string;     // daily: canyon-course-daily-<checksum>-<identityDay>-v<...>
                          // fixed: canyon-course-<mode>-<checksum>-v<...>
  track: AcceptedTrack;   // points/stats/crestS/estTimeS/checksum/landmarkS
  targets: CourseTargets; // ordered gold < silver < bronze, all > 0
  reference: GhostData | null; // recorded clean run for fixed modes; null for daily
}

export function parseCourseMode(search: string): CourseMode;
export function resolveCourse(mode: CourseMode, day: string): CourseInfo;
export function courseStorageKey(mode: CourseMode, identityDay: string, checksum: string): string;
export function clearCourseCache(): void; // tests/debug only
export const COURSE_STORAGE_VERSION = 1;
```

Supporting constants/data live in `src/course-reference.ts`:
`REFERENCE_ENCODED`, `FIXED_IDENTITY_DAYS`, `REFERENCE_TIMES_MS`,
`FIXED_TARGET_MARGINS`, `DAILY_TARGET_FACTORS`, `COURSE_IDENTITY_GEN`.

## Behaviour

- `parseCourseMode` reads `m` / `mode` / `course` from a raw search string
  (leading `?` optional). Accepts `daily`, `practice`, `benchmark`
  (case-insensitive). Missing/unknown/malformed input falls back to `daily`
  and never throws.
- `resolveCourse` is deterministic and memoized. Fixed modes ignore the
  requested day (cache on mode). Daily calls the existing
  `acceptDailyTrack(day)` unchanged.
- **No bots or simulation runs** happen inside `resolveCourse`. Fixed tracks are
  built once from the shared `buildCenterline`/`analyzeCenterline`/`checksumPoints`
  helpers; the reference is decoded from the recorded payload; targets are
  constants derived from the recorded reference or from `track.estTimeS`.
- `reference.track` carries `{ day, course, gen }`. It is geometry-bound and
  fails `checkIdentity` on any other course. Treat it as **REFERENCE** in UI,
  never as a best/human/world record.
- `storageKey` is course-isolated: mode + geometry checksum + version. **Daily
  keys also bind `identityDay`**, so two dates whose fallback geometry shares a
  checksum cannot merge scalar PBs even though the ghost identity day differs.
  Fixed-mode keys stay date-independent (one key per geometry). PBs and ghosts
  stay separated per course, per geometry, and per daily date.

## Suggested integration (matching current `src/main.ts` shape)

```ts
import { parseCourseMode, resolveCourse } from './courses';
import type { CourseInfo, CourseMode } from './courses';

const mode: CourseMode = parseCourseMode(location.search);
const course: CourseInfo = resolveCourse(mode, requestedDay);
// use course.track.points / stats / crestS / checksum, course.targets,
// course.reference, course.identityDay, course.storageKey
```

- Expected track identity for ghost validation:
  `makeExpectedTrack(course.identityDay, course.track.checksum)`.
- Preserve share-link params: `m`/`mode`/`course` (mode) and `d` (daily date).
- PB/ghost storage must key on `course.storageKey`, not the bare day.
- Medals: `targets.goldMs <= silverMs <= bronzeMs` (gold hardest). Show
  `reference` as a separate REFERENCE pace where present.

## Guarantees the course worker validated

- Practice ("Drift Practice"): one broad drift + easy exit, short (<1700u).
- Benchmark: broad drift, readable reversal, controlled crest with easy
  landing runoff, tightening decreasing-radius challenge, fast finish; no
  self-crossing (clearance >= 40u).
- Both finish under a clean skilled controller and a conservative controller;
  the recorded reference is an exact replay of the clean skilled run.
- References are bundled at **full fidelity** (every 120ms sample, no
  share-URL striding; interpolation stays within the 0.5u quantization bound),
  so a demo rival cannot cut visibly through inside curbs.
- Daily targets calibrated offline against 22 representative clean runs
  (`DAILY_TARGET_FACTORS.gold = 1.10` vs measured 1.031-1.054).
