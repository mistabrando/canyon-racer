// surface.ts — shared physics/render ground contract for the out-of-bounds
// dirt plain. Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock.
//
// The playtest follow-up replaces bottomless off-course falling with a wide,
// drivable dirt plain. Physics and rendering must agree on the same surface or
// the car will float/sink against the rendered bank, so both sides import this
// module. The road mesh sits at the track sample height (offset 0); the car's
// own clearance is added by the simulation.

/** Flat dirt-plain height reached past the verge. Never a void. */
export const DIRT_PLAIN_Y = -2.5;

/** Horizontal width of the smooth bank from the road edge down to the plain. */
export const DIRT_VERGE_WIDTH = 18;

/**
 * Ground surface height at a lateral offset from the road centreline.
 *
 * - On the road (`|lateral| <= halfW`) this is exactly `roadY`.
 * - Across the verge (`halfW .. halfW + DIRT_VERGE_WIDTH`) it blends smoothly
 *   (smoothstep, so the road edge is tangent-flat and the bottom is tangent-flat)
 *   down to `DIRT_PLAIN_Y`.
 * - Beyond the verge it is the flat `DIRT_PLAIN_Y` plain, extending to any
 *   lateral distance: the car always has ground beneath it.
 *
 * Pure and allocation-free so the sim can call it every fixed step and the
 * renderer can sample it per ribbon vertex.
 */
export function groundSurfaceY(roadY: number, lateral: number, halfW: number): number {
  const d = Math.abs(lateral);
  if (d <= halfW) return roadY;
  const t = Math.min((d - halfW) / DIRT_VERGE_WIDTH, 1);
  const s = t * t * (3 - 2 * t); // smoothstep: flat at both ends
  return roadY + (DIRT_PLAIN_Y - roadY) * s;
}
