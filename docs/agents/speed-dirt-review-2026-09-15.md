# Faster drift rhythm and slippery dirt — review

User direction: faster straights, committed drifting, a stronger swing between sliding and accelerating, and a broad slippery dirt area outside the road instead of falling off the world.

## Review criteria

- Higher actual road speed, not a changed HUD conversion.
- A distinct corner-entry, sustained-slide, countersteer and exit-acceleration rhythm.
- Authored and daily courses with readable drift-demanding corners and enough straightaway to feel speed return.
- Dirt supports the car throughout the off-course area. Lateral momentum persists much longer than on asphalt; steering is difficult but recovery remains possible.
- Dirt does not grant drift boosts, shortcuts, checkpoint advancement, or a competitive advantage.
- The visible dirt verge and plain match the simulation surface; shadows and dust meet the ground.
- Reference runs, target times and competition identities belong to the revised physics.
- Retry, rescue, pause and audio continue to work.

## Before measurement

Independent deterministic probe on a wide flat asphalt surface, 5 seconds accelerating, then 1.2 seconds at 70% steering. This isolates motion from wall contact; it is not a lap-time test.

| Measurement | Published build before this revision |
| --- | ---: |
| Road cruise | 80.00 units/s |
| Grip turn end speed | 80.08 units/s |
| Drift turn end speed | 75.15 units/s |
| Drift maximum slip | 11.78 degrees |
| Drift yaw change | 65.67 degrees |
| Off-course height after 1.2 seconds | -20.76, still falling |

Probe source and raw measurements are in `.muse/speed-metrics.mjs` and `.muse/logs/speed-dirt/baseline-metrics.json`. The dirt probe begins at plain height with forward and lateral velocity; the old build has no collision support there.

## Revised measurements and browser assessment

Pending completed implementation.
