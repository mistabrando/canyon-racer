# DeepSeek recovery — safe rescue (packet 1), 2026-09-15

## Scope and ownership

- Owned files changed: `src/sim.ts`, `tests/physics-feel.ts`, this handoff.
- Did not touch `src/main.ts`, shared configs, package files, generated output, git
  history, or other workers' files. Pre-existing wall-severity changes in
  `src/sim.ts` (`WALL_IMPACT_BLEND_VN`, `WALL_IMPACT_MIN_UPSET`, the blend in the
  wall-hit branch) and the pre-existing `tests/physics-feel.ts` "WS" severity
  sweep were preserved untouched.
- No commit, deploy, provider/settings change, or credential access.

## Problem

The playtest reached `STUCK — R RESET` beside the September 15 opening right
rail; R restored a pose that was still next to the rail and aimed at it. The old
snapshot gate accepted `grounded && |lat| <= halfW+0.5 && speed >= 8 &&
|slip| <= 0.6`, so an **offroad** (`|lat| > halfW`) near-rail moment with an
**outward heading/velocity** could be stored and replayed verbatim by
`simRespawn`, including its heading and lateral velocity.

## Fix (`src/sim.ts`)

Candidate validation for the rescue anchor. A snapshot is now accepted only
when all hold:

- `tr.halfW - |lat| >= SNAP_RAIL_CLEAR` (1.0u rail clearance; offroad rejected)
- `speed >= SNAP_MIN_SPD` (8) and `|slip| <= SNAP_MAX_SLIP` (0.6) — unchanged
- `|wrapPi(heading - yaw[i])| <= SNAP_MAX_HEAD_ERR` (0.4 rad, road-aligned)
- outward lateral velocity `<= SNAP_MAX_OUT_V` (2.0)
- `scrapeT <= 0 && crashT <= 0` (no active scrape/crash state)
- `i <= n - 1 - SNAP_MIN_AHEAD` (road ahead)

Bounded history + safe fallback:

- `SimState.snaps` keeps index 0 as the **pinned run-start anchor**; new
  candidates are appended and the live tail is trimmed so the start is never
  shifted out (`SNAP_HISTORY = 6` live candidates + start).
- `simRespawn` picks the newest anchor, but backs off the history on repeated
  rescues (`rescueStreak`). When it backs off it **truncates the now-future
  entries** (`snaps.length = pick + 1`) and repoints `snap`, so a later rescue
  can never jump forward into pre-rollback history (no shortcut progress).
- After a rescue, candidates only re-arm once the car has driven
  `SNAP_RESUME_AHEAD = 4` course samples past the restored anchor
  (`rescueIdx`), so the restored pose cannot immediately re-record itself and
  reset the backoff.
- 3000 ms penalty, ghost-timestamp gap, `lastIdx`/progress rules, drift/crash
  reset, and `finished` no-op are unchanged. Backoff only moves backward.

## Reproduction (deterministic, actual seed)

`acceptDailyTrack('2026-09-15')`, barrier plan from `arcLengths` +
`planBarriers`. The opening left turn's outside (right) rail span is
`s200–296`; `s180` is just before it (open edge). Placing the car offroad
(`halfW + 0.4`) there, heading yaw `- 0.5` outward at 9 u/s and forcing the
snapshot cadence, the **old** gate stored `lat≈11.97` (offroad), outward
heading `≈0.48`, outward velocity `≈4.0`; a raw rescue to that pose scrapes the
opening rail and ends trapped at `gap ≈ -0.05` (speed ≈8.6). With the fix the
live gate rejects the pose and the rescue lands centered/road-aligned
(`gap = 11.5`, `headErr = 0.00`). SR0/SR1 encode both.

## Tests added (`tests/physics-feel.ts`, block `SR`)

- `SR0` raw offroad/outward pose as an anchor re-hits the opening rail.
- `SR1` real-seed rejection, safe/road-aligned rescue, exact 3s penalty, the
  rescue restoring the *selected known anchor* with no forward jump
  (`lastIdx === anchor.i`, not `>=`), and a **0.75s neutral-input post-rescue
  window** with no scrape (first touch measured ~1.17s).
- `SR2` a genuine clean running line is still recorded and restored.
- `SR3` pinned start anchor; rollback truncates future history; repeated
  rescues with 2 simulation steps between them never move to a higher-progress
  anchor and never re-select pre-rollback history; fresh progress does not
  resurrect it.
- `SR4` the resume gate blocks re-recording the rescue pose before forward
  progress.
- `SR5` an on-road pose angled outward is rejected; the same spot aligned still
  records.

## Verification (isolated output, no shared `test-dist`)

```
./node_modules/.bin/tsc -p tsconfig.tests.json --outDir .muse/test-output/recovery
node .muse/test-output/recovery/tests/physics-feel.js     # 202 passed, 0 failed
```

Relevant regressions from the same output (all pass):

```
corner-apex  75/0   harness 276/0   retry-restart 34/0   ghost-share 117/0
drift-control 103/0 track-variance 197/0 loop-ui 28/0   trails-bounds 41/0
barrier-plan 49/0   barrier-edge 44/0 render-motion 51/0 visuals-budget 167/0
./node_modules/.bin/tsc --noEmit -p tsconfig.json         # app typecheck clean
```

## Limitations

- The gate validates the anchor's instantaneous pose, not a full physics
  lookahead. `SNAP_MIN_AHEAD` is index room only. The neutral-input safety probe
  is a diagnostic for the actual opening (~0.75s guaranteed, first touch
  ~1.17s); a driver must steer beyond that on curving sections. This is
  intentional — no auto-driving.
- During a long slide the aligned requirement holds the last aligned anchor, so
  a rescue mid-drift may go slightly further back. That is the safety trade-off.
- Rescue still restores the anchor's stored heading/velocity verbatim; because
  the anchor is now validated, this preserves desirable recovery near genuine
  clean lines rather than snapping to the tangent.

## Concurrency note (resolved)

While this packet ran, the directional-signs worker was mid-edit in
`src/visuals.ts` / `tests/visuals-budget.ts`. During that window an earlier
compiled pass showed a transient type error in `tests/visuals-budget.ts`
(`'events' does not exist in type 'VisualsOptions'`) and 2 arrow-mount failures.
That worker has since completed. After the final recompile in this session the
tree is clean: `tsc -p tsconfig.tests.json` reports no errors and
`visuals-budget` passes 167/0. No current failures are outstanding in the tests
listed above; the only prior failures were transient concurrency artifacts, not
caused by or affecting this packet.
