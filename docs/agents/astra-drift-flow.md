# Controllable drift arcs — worker handoff (2026-09-14)

Owner files: `src/drift-control.ts` (unchanged), `tests/drift-control.ts`,
`tests/corner-apex.ts`. No `sim.ts` edits. No tuning changes.

## Verdict: retain existing tuning

Repeatable headless measurements show the current thresholds already
separate small corrections from deliberate exits, the chain window already
permits legitimate S-bend transitions, and cooldown + neutral + one-reward
rules already stop spam. There was no evidence-backed reason to move any
dimension, so the implementation is new regression coverage, not retuning.

## Measurements (scripted inputs, fixed seeds, deterministic)

Module probes (`updateDrift` directly, DT=1/60, speed 60):

- Opposite-magnitude sweep at developed slide age (~0.9 s): -0.10/-0.20/
  -0.30/-0.34 hold the slide with event `none`; -0.35 (== `exitOppSteer`)
  and above commit `exit` immediately (q 0.63 at threshold, 0.71 at -0.80).
- Brief correction (-0.30 x3 frames) mid-slide, then resume: slide
  survives, later deliberate exit still `perfect` (q 0.913).
- Early decisive flick (age ~0.12 s, -0.50/-0.80) commits but scores
  q 0.000 (`none`) via the age gate — the slingshot is preserved for
  developed slides, never farmed by flicks.
- Post-exit chain: anti-phase developed exit arms `chainDir` opposite
  with window 0.80 s; a tap with the swing enters instantly, a 0.35 s
  hold enters without a tap; one exit arms at most one chain.
- Post-window tap (1.0 s, chain lapsed, cooldown live) is `rejected` and
  counted as spam; after cooldown + neutral the tap enters with full
  energy (`pendAmp` reseeds to 1).
- Full S (exit, chain-tap, exit): exactly 2 exits, both rewarded
  (q 0.913/0.913), one reward per slide. Rapid alternating-tap farm:
  4 exits, maxQ 0.191 — never a slingshot grade.

Sim probes (`simStep` on wired tracks, three fixed daily seeds
2026-09-07 / 2026-06-07 / 2026-07-28, teleport-to-corner protocol):

- Sustained vs early-correction lines: all complete, 0 walls,
  exactly 1 reward each; correction changes exit speed < 0.5 u/s and
  quality within +0.01 (09-07: sustain q 0.49/exit 82.5, correct q 0.50).
- Late-exit line: completes with 0 walls but earns clearly less
  (0.29/0.14/0.16 vs 0.49/0.31/0.33).
- Sustain repeats byte-identical on all three seeds.

Known narrow edge (left as-is): arriving mid-window (delay ~0.45-0.8 s)
with hold-only steering (no tap) can see the 0.80 s chain expire just
before the 0.35 s hold completes; the driver then waits out the 1.2 s
cooldown and re-passes neutral. Grip steering is never blocked — only
slide re-entry — and tapping works instantly anywhere inside the window,
so this reads as a deliberate rhythm cost, not a stuck input. Widening
the window or shortening the hold would directly weaken spam resistance
(spam farm maxQ 0.191 < perfect 0.80), so no change.

## Tests

- `tests/drift-control.ts` blocks 31-33 (12 asserts): correction-vs-commit
  sweep incl. repeated near-threshold blips; chain S with two rewarded
  exits; post-window rejection; cooldown+neutral re-arm; script replay
  determinism. Suite: 103 passed, 0 failed.
- `tests/corner-apex.ts` block 10 (21 asserts): sustain/correct/late on
  three fixed seeds — completion, 0 walls, one reward each, correction
  parity, diminished late-exit quality, determinism, boosted exit speed.
  Suite: 75 passed, 0 failed.
- Full `npm test` set rebuilt to `/tmp/driftflow/full` (worker-specific
  dir): all 12 binaries green
  (276/180/117/132/51/103/197/28/41/49/44/75), 0 failures.

## Ghost compatibility

No physics change shipped (`drift-control.ts` untouched), so recorded
ghost inputs replay to identical trajectories; no version bump needed.
Note for any future tuning: `yawKick`, `pendRate`, and `boostAccel` all
feed `simStep` velocity/heading, so ANY tuning change alters same-input
trajectories on the same course checksum and would desync old ghosts —
a future change must either bump the ghost version/gen or be gated to
new recordings.

## Integration requests

None. No `sim.ts` changes requested. Suggested integrator verification:
same-seed before/after play at desktop and mobile sizes, drift
corrections, S-bend transitions, ghost timing — all headless-green here.

## Limitations

- Headless scripted inputs only; no human playtesting is claimed. Whether
  the 0.35 commit threshold and 1.2 s cooldown *feel* right at race speed
  needs a hands-on pass.
- Sim line comparison covers one ordinary-arc protocol per seed (inside
  hug, R corners 110-125u); full-run race comparisons are integrator
  territory.
