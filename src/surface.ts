// surface.ts — shared physics/render ground contract for the out-of-bounds
// dirt. Pure TypeScript: no THREE, no DOM, no Math.random, no wall-clock.
//
// The playtest follow-up replaces bottomless off-course falling with a wide,
// drivable dirt apron that follows the road height. Physics and rendering must
// agree on the same surface or the car will float/sink against the rendered
// bank, so both sides import this module. The road mesh sits at the track
// sample height (offset 0); the car's own clearance is added by the simulation.

/**
 * Legacy absolute dirt-floor height, retained for export compatibility.
 * Physics and rendering no longer target it: the road climbs (+5.5 .. +16.9
 * on sampled dailies) while this pin stayed at -2.5, so every verge was an
 * 8-19u embankment. The off-road surface is now road-relative
 * (`offroadLevel`), which tracks the neighbouring road height everywhere.
 */
export const DIRT_PLAIN_Y = -2.5;

/** Horizontal width of the smooth bank from the road edge down to apron level. */
export const DIRT_VERGE_WIDTH = 18;

/** Total fall from the road edge to the driveable apron level. */
export const DIRT_VERGE_DROP = 1.5;

/**
 * Render apron bounds (lateral extent past the road edge). The apron is
 * capped at a fraction of the local curve radius so the offset ribbon can
 * never reach a centre of curvature and fold on a hairpin inside
 * (measured min daily radius ~40u; drift arcs ~45-130u). It is never
 * narrower than the old verge, and wide (up to the max) on straights.
 */
export const DIRT_APRON_MAX = 60;
export const DIRT_APRON_MIN = 18;
export const DIRT_APRON_CURVE = 0.6;

/**
 * Render apron columns as absolute lateral offsets past the road edge. The
 * verge (where the smoothstep banks) is sampled every 3.6u so the linear
 * render interpolation never deviates far from the physics smoothstep; the
 * final column lands on the per-station apron width, and the tail between
 * them is exactly level in both physics and render (zero deviation there).
 * Fixed length so the ribbon grid is regular; when the width pins at the
 * verge the tail quad degenerates to zero area (harmless, never a flip).
 */
export function apronColumns(width: number): number[] {
  return [0, 3.6, 7.2, 10.8, 14.4, 18, Math.max(width, DIRT_VERGE_WIDTH)];
}

/** One centreline frame for apron validation (plan position + normal). */
export interface ApronFrame {
  x: number;
  z: number;
  nx: number;
  nz: number;
}

/**
 * Per-station apron half-widths past the road edge. Starts from the
 * curvature cap (wide on straights, pinched in hairpins) then shrink-wraps:
 * any station whose offset strip would reverse lateral ordering or flip a
 * triangle winding is narrowed until every quad on both sides is valid, so
 * the built ribbon is fold-free by construction. Monotone (widths only
 * shrink) and bounded, hence terminating; deterministic, no allocation
 * beyond the output array and per-call column lists.
 */
export function resolveApronWidths(
  frames: ApronFrame[],
  headings: number[],
  cum: number[],
  halfW: number,
): number[] {
  const n = frames.length;
  const widths = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    const a = headings[Math.max(0, i - 2)], b = headings[Math.min(n - 1, i + 2)];
    const ds = Math.max(cum[Math.min(n - 1, i + 2)] - cum[Math.max(0, i - 2)], 1e-6);
    widths[i] = apronHalfWidth(turnRadius(a, b, ds));
  }
  if (n < 2) return widths;
  const px = (i: number, d: number, side: number): number =>
    frames[i].x + frames[i].nx * side * (halfW + d);
  const pz = (i: number, d: number, side: number): number =>
    frames[i].z + frames[i].nz * side * (halfW + d);
  const triSign = (ax: number, az: number, bx: number, bz: number, cx: number, cz: number): number => {
    const area = (bx - ax) * (cz - az) - (cx - ax) * (bz - az);
    if (area > 1e-9) return 1;
    if (area < -1e-9) return -1;
    return 0;
  };
  const quadValid = (i: number, j: number, side: number): boolean => {
    const cA = apronColumns(widths[i]), cB = apronColumns(widths[i + 1]);
    if (j + 1 >= cA.length || j + 1 >= cB.length) return true;
    const s1 = triSign(px(i, cA[j], side), pz(i, cA[j], side), px(i, cA[j + 1], side), pz(i, cA[j + 1], side), px(i + 1, cB[j], side), pz(i + 1, cB[j], side));
    const s2 = triSign(px(i, cA[j + 1], side), pz(i, cA[j + 1], side), px(i + 1, cB[j + 1], side), pz(i + 1, cB[j + 1], side), px(i + 1, cB[j], side), pz(i + 1, cB[j], side));
    // Valid winding is -side in XZ (side +1 offsets along the left normal,
    // so the (lateral, station) frame is mirrored): anything else reversed.
    if (s1 !== 0 && s1 !== -side) return false;
    if (s2 !== 0 && s2 !== -side) return false;
    return true;
  };
  for (let pass = 0; pass < 80; pass++) {
    let shrunk = false;
    for (let i = 0; i < n - 1; i++) {
      for (const side of [1, -1]) {
        const cols = apronColumns(widths[i]).length;
        for (let j = 0; j < cols - 1; j++) {
          if (!quadValid(i, j, side)) {
            if (widths[i] >= widths[i + 1] && widths[i] > DIRT_APRON_MIN) {
              widths[i] = Math.max(widths[i] * 0.9, DIRT_APRON_MIN);
            } else if (widths[i + 1] > DIRT_APRON_MIN) {
              widths[i + 1] = Math.max(widths[i + 1] * 0.9, DIRT_APRON_MIN);
            }
            shrunk = true;
          }
        }
      }
    }
    if (!shrunk) break;
  }
  return widths;
}

/** Driveable dirt level beside a road sample at height `roadY`. */
export function offroadLevel(roadY: number): number {
  return roadY - DIRT_VERGE_DROP;
}

/** Apron half-width past the road edge for a local curve radius. */
export function apronHalfWidth(curveRadius: number): number {
  if (!(curveRadius > 0)) return DIRT_APRON_MAX;
  const w = curveRadius * DIRT_APRON_CURVE;
  if (w < DIRT_APRON_MIN) return DIRT_APRON_MIN;
  if (w > DIRT_APRON_MAX) return DIRT_APRON_MAX;
  return w;
}

/**
 * Turn radius from two consecutive segment headings and the arc length
 * between the outer samples. Straight (no heading change) reads as infinite.
 */
export function turnRadius(headingA: number, headingB: number, ds: number): number {
  let dh = headingB - headingA;
  while (dh > Math.PI) dh -= 2 * Math.PI;
  while (dh < -Math.PI) dh += 2 * Math.PI;
  if (Math.abs(dh) < 1e-9) return Infinity;
  return ds / Math.abs(dh);
}

/**
 * Ground surface height at a lateral offset from the road centreline.
 *
 * - On the road (`|lateral| <= halfW`) this is exactly `roadY`.
 * - Across the verge (`halfW .. halfW + DIRT_VERGE_WIDTH`) it blends smoothly
 *   (smoothstep, so the road edge is tangent-flat and the apron is
 *   tangent-flat) down to `offroadLevel(roadY)`.
 * - Beyond the verge it holds `offroadLevel(roadY)` to any lateral distance:
 *   the dirt beside the road is about the same height as the road, so the
 *   car always has ground beneath it and never plunges below the level.
 *
 * Pure and allocation-free so the sim can call it every fixed step and the
 * renderer can sample it per ribbon vertex.
 */
export function groundSurfaceY(roadY: number, lateral: number, halfW: number): number {
  const d = Math.abs(lateral);
  if (d <= halfW) return roadY;
  const t = Math.min((d - halfW) / DIRT_VERGE_WIDTH, 1);
  const s = t * t * (3 - 2 * t); // smoothstep: flat at both ends
  return roadY - DIRT_VERGE_DROP * s;
}
