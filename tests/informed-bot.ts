// Shared informed controller (headless bot) used by tests/courses.ts and
// tests/corner-apex.ts. Extracted verbatim from courses.ts so both suites drive
// the SAME policy against the frozen Trackmania physics (cruise 140 / drift 112).
import { clamp } from '../src/sim.js';
import type { SimState, StepInput, TrackView } from '../src/sim.js';

export function makeBot(handbrake: boolean) {
  const traps: number[] = [];
  let respawns = 0;
  const bot = function step(s: SimState, tr: TrackView, prevSlip: number): StepInput {
    const sNow = tr.cum[Math.max(0, Math.min(s.lastIdx, tr.n - 1))];
    const nearTrap = traps.some((t) => t >= sNow - 50 && t <= sNow + 300);
    const tier = nearTrap ? 2 : Math.min(Math.floor(respawns / 2), 2);
    const cap = tier === 0 ? 112 : tier === 1 ? 95 : 80;
    const spd = Math.hypot(s.vx, s.vz);
    const L = 12 + spd * 0.7;
    let li = s.lastIdx, acc = 0;
    while (li < tr.n - 1 && acc < L) {
      acc += Math.hypot(tr.x[li + 1] - tr.x[li], tr.z[li + 1] - tr.z[li]); li++;
    }
    const dx = tr.x[li] - s.px, dz = tr.z[li] - s.pz;
    let ang = Math.atan2(dx, dz) - s.heading;
    while (ang > Math.PI) ang -= 2 * Math.PI;
    while (ang < -Math.PI) ang += 2 * Math.PI;
    // Rail guard: only once the car is past 60% of the half-width does the
    // cross-track bias fade in, so mid-road lines (where the pure pursuit is
    // already accurate) are untouched and corner exits stop grazing the rail.
    // Normals are left-of-travel, so a positive offset needs the same
    // negative-steer correction the pursuit uses.
    const li0 = Math.max(0, Math.min(s.lastIdx, tr.n - 1));
    const lat = (s.px - tr.x[li0]) * tr.nx[li0] + (s.pz - tr.z[li0]) * tr.nz[li0];
    const railT = clamp((Math.abs(lat) / tr.halfW - 0.6) / 0.4, 0, 1);
    const pursuit = clamp(-ang * 2.0 - Math.sign(lat) * railT * 0.3, -1, 1);
    if (!s.grounded) return { steer: pursuit, drift: false };
    // Reversal catch-first: a deeply sideways car (|slip| > ~35deg, e.g. a
    // crossed-up slide carried out of the previous corner) must be caught
    // (countersteer into alignment, no new drift) before any new commitment.
    // Fresh-engaging into the cross fires the kick into the existing slide
    // and snaps the car into the rail; gripping through it spins.
    if (Math.abs(prevSlip) > 0.6) {
      return { steer: clamp(-prevSlip * 4, -1, 1), drift: false };
    }
    // True grip-hold speed of a bend: the largest v with v/r <= the sim's
    // exact grip yaw curve (mirrors sim.ts highCut verbatim, gripRamp ~1
    // above 10 u/s). The old 0.72r fiction understated low-speed grip by
    // 20+ u/s (r60 holds to 74, not 43), so the bot slid corners it could
    // have gripped — and the needless slides over-rotated into rails.
    const gripCut = (v: number): number =>
      v <= 30 ? 1 : Math.max(0.30 + 0.08 * clamp((v - 100) / 40, 0, 1), 1 - (v - 30) / 95);
    const holdV = (r: number): number => {
      let lo = 8, hi = 200;
      for (let k = 0; k < 24; k++) {
        const mid = (lo + hi) / 2;
        if (mid <= r * 2.3 * gripCut(mid) * Math.min(Math.max(mid, 8) / 10, 1)) lo = mid;
        else hi = mid;
      }
      return lo;
    };
    const vth = (r: number): number => Math.min(cap, holdV(r));
    const enterOver = tier === 2 ? 15 : 12, holdOver = 3;
    let rNow = Infinity;
    {
      const a = Math.max(s.lastIdx - 2, 0), b = Math.min(s.lastIdx + 2, tr.n - 1);
      const h1 = Math.atan2(tr.x[a + 1] - tr.x[a], tr.z[a + 1] - tr.z[a]);
      const h2 = Math.atan2(tr.x[b] - tr.x[b - 1], tr.z[b] - tr.z[b - 1]);
      let dh = h2 - h1;
      while (dh > Math.PI) dh -= 2 * Math.PI;
      while (dh < -Math.PI) dh += 2 * Math.PI;
      const dd = Math.hypot(tr.x[b] - tr.x[a], tr.z[b] - tr.z[a]);
      if (Math.abs(dh) > 1e-4) rNow = dd / Math.abs(dh);
    }
    // Horizon scan: minR/dMin locate the TIGHTEST bend ahead (speed target),
    // while dEntry/rEntry/dirEntry locate the NEAREST bend onset (first
    // window under r=200, catching joint bleed). dMin routinely points 100u+
    // past the entry (tightest sub-window deep inside), so it must never
    // drive proximity: chain windows, brake points and the turn-in floor all
    // key on dEntry.
    let minR = Infinity, dMin = Infinity, dirMin = 0;
    let rEntry = Infinity, dEntry = Infinity, dirEntry = 0;
    let ahead = s.lastIdx, d = 0;
    while (ahead < tr.n - 4 && d < 500) {
      d += Math.hypot(tr.x[ahead + 1] - tr.x[ahead], tr.z[ahead + 1] - tr.z[ahead]);
      const h1 = Math.atan2(tr.x[ahead + 1] - tr.x[ahead], tr.z[ahead + 1] - tr.z[ahead]);
      const h2 = Math.atan2(tr.x[ahead + 3] - tr.x[ahead + 2], tr.z[ahead + 3] - tr.z[ahead + 2]);
      let dh = h2 - h1;
      while (dh > Math.PI) dh -= 2 * Math.PI;
      while (dh < -Math.PI) dh += 2 * Math.PI;
      if (Math.abs(dh) > 1e-4) {
        const r = 4 / Math.abs(dh);
        if (r < minR) { minR = r; dMin = d; dirMin = dh > 0 ? -1 : 1; }
        if (r < 200 && dEntry === Infinity) { rEntry = r; dEntry = d; dirEntry = dh > 0 ? -1 : 1; }
      }
      ahead++;
    }
    const damp = (st: number): number => clamp(st - clamp(prevSlip * 1.5, -1, 1), -1, 1);
    const flick = clamp(pursuit * 1.3, -1, 1);
    // Committed turn-in: floor the wheel toward the bend while the slide
    // develops or is dying near it. The module-entry kick pre-rotates the
    // nose and collapses pursuit to ~zero; without the floor the bot commands
    // no rotation through the entry yards, runs wide, and the module aborts
    // the slide off-road. A developed balanced slide (|slip| 0.15+) keeps raw
    // pursuit (the floor would oversteer steady-state sweepers); an
    // over-sliding one is the catch's job. The floor scales with proximity:
    // full 0.45 at the door, 0.30 inside 100u, none farther out (distant lock
    // over-slips straights to 37deg).
    const commitNear = (d: number): number => {
      if (Math.abs(flick) >= 0.45) return flick;
      if (s.driftAmt >= 0.7 && Math.abs(prevSlip) >= 0.15) return flick;
      const f = d < 40 ? 0.45 : d < 100 ? 0.30 : 0;
      if (f <= 0) return flick;
      const dir = dirEntry !== 0 ? dirEntry : dirMin !== 0 ? dirMin : Math.abs(pursuit) > 0.05 ? Math.sign(pursuit) : 1;
      return f * dir;
    };
    // rNow hysteresis (engage 160, hold 175): the narrow curvature window
    // blips over 160 on joints mid-corner; without hysteresis each blip
    // releases and re-engages the slide (entry cut + kick upset per toggle).
    // No fresh engagement while crossed-up (catch-first above), off the road,
    // or hugging the rail: engaging there fires the kick into the existing
    // slide (or the rail) instead of rotating the car. Holds are
    // continuations, not new snaps: unaffected.
    const engaged = Math.abs(lat) <= tr.halfW - 1.0 && Math.abs(prevSlip) <= 0.5;
    if (rNow < 175) {
      const hold = s.driftAmt > 0.5;
      // Hysteresis around grip-hold: engage above holdV+12, release below
      // holdV-10 (release must land at a speed grip truly holds, with margin
      // for the transition — releasing at the ragged edge re-slides with no
      // re-engage available). Holds/chains need minR confirmation like above.
      const want = hold ? spd > vth(rNow) - 10
        : (handbrake && spd > 34 && minR < 200 && engaged && spd > vth(rNow) + enterOver);
      if (want) return { steer: commitNear(Math.min(dEntry, 199)), drift: true };
      return { steer: pursuit, drift: false };
    }
    if (handbrake && spd > 34 && engaged && minR < 160) {
      const vtt = vth(minR);
      const brakeD = (spd * spd - vtt * vtt) / 80 + 40;
      // Chain the slide across SHORT links only (dMin <= 110, the same range
      // trackgen counts as an S-transition): the slide genuinely carries. On
      // longer links the previous slide must settle first (release), then the
      // brake branch below enters the next bend fresh — carrying a stale
      // slide 160u into a reversal arrives crossed-up and rails.
      if ((dEntry <= 110 && spd > vtt + 6) || (spd > vtt + enterOver && dEntry < brakeD)) {
        return { steer: flick, drift: true };
      }
    }
    if (minR > 160 && Math.abs(prevSlip) > 0.06) return { steer: damp(pursuit), drift: false };
    return { steer: pursuit, drift: false };
  };
  (bot as unknown as { noteRespawn: (sIdx: number, tr: TrackView) => void }).noteRespawn = (sIdx: number, tr: TrackView) => {
    respawns++;
    const sc = tr.cum[Math.max(0, Math.min(sIdx, tr.n - 1))];
    if (!traps.some((t) => Math.abs(t - sc) < 200)) traps.push(sc);
  };
  // Fresh memory per measured run: traps/respawns from an earlier course must
  // never leak into a later one (s-positions would false-trigger caution and
  // break run-to-run determinism). runCourse resets before every run.
  (bot as unknown as { reset: () => void }).reset = () => {
    traps.length = 0;
    respawns = 0;
  };
  return bot;
}
