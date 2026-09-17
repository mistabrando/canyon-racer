# P1 speed camera handoff — Muse speed-camera — 2026-09-14

## Change (one tuning line)
- `src/render-motion.ts:54`: `DEFAULT_TUNING.fullSpeed` 60 → 80.
- Nothing else in the module touched: same 14-degree `speedFov` range, same
  `baseFov` 62, same `driftFov` 5, same smoothing lambdas, same feedforward,
  same impulse bounds. No additional shake added.

## Why this is safe
- `fovTarget` is `base + clamp(speed/fullSpeed) * 14 + drift*5`, so the max
  FOV is unchanged (76 cruise, 81 full drift). Only the slope changes:
  FOV now keeps responding from 60 to grip top speed 80 instead of
  saturating at 60.
- Exact targets: 40 → 69.0, 60 → 72.5, 80 → 76.0. The 60-to-80 gain is
  3.5 degrees with the existing 14-degree range — not 5 degrees as the raw
  review suggested. Above 80 the target still clamps.
- `src/main.ts` consumes `DEFAULT_TUNING` directly, so no call-site change
  was needed (main.ts untouched per packet ownership).

## Verification (headless, worker-specific build dir)
- Compiled with `npx tsc -p tsconfig.tests.json --outDir /tmp/astra-speed-camera-dist`
  to avoid racing parallel workers; ran the full suite from that directory.
- `tests/render-motion.ts` block 15 (new): monotonic 40<60<80, exact 3.5°
  60-to-80 delta, saturation above 80, settled FOV at 40/60/80 within 0.5°
  of target, 60Hz-vs-144Hz settled FOV within 0.3° at speed 70, drift exit
  at 60 settles to 72.5 with max per-frame step < 0.6°, zero impulse, and
  velocity-led camH (stable framing).
- Results: `render-motion` 51 passed, 0 failed. Full suite green from the
  same build: harness 276, physics-feel 171, ghost-share 117,
  visuals-budget 132, drift-control 91, track-variance 197, loop-ui 28,
  trails-bounds 41, barrier-plan 49, barrier-edge 44, corner-apex 54 —
  0 failures throughout. `npx tsc --noEmit` exit 0.
- Note: `src/sim.ts` shows a working-tree modification owned by the parallel
  wall-feel worker; not touched by this packet.

## Limitations
- Headless synthetic pose streams only: no human playtesting. Whether the
  extra 3.5° from 60→80 reads as earned speed vs. noise needs a person
  playing the same seeds before/after at desktop and mobile sizes.
- Subjective playtest still pending (integrator gate).
