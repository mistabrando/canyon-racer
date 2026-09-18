// P0 reliable controls + full-run retry (integrator-owned).
// Pure logic, DOM-free so headless tests can pin it: main.ts owns the DOM
// wiring, this module owns the decisions.
import { fmt } from './share.js';
import type { TouchState, StepInfo } from './sim.js';

// First GO of the session gets the full 3-2-1; every retry gets READY-GO.
export const FULL_COUNTDOWN_S = 3.1;
export const QUICK_COUNTDOWN_S = 0.7;
export function countdownLen(quick: boolean, hasRunOnce: boolean): number {
  return quick && hasRunOnce ? QUICK_COUNTDOWN_S : FULL_COUNTDOWN_S;
}

// Focus-loss / retry reset for touch state: release any held stick + drift
// finger (a keyup/pointerup outside the window is never delivered) and zero
// the deflection. Keyboard flags + the visible knob live in main.ts.
export function clearTouch(tc: TouchState): void {
  if (tc.stickId !== -1) tc.stickUp(tc.stickId);
  tc.joy = 0; tc.joyOn = false;
  if (tc.driftId !== -1) tc.driftUp(tc.driftId);
  tc.drift = false;
}

// ---------- truthful recovery language (pure) ----------
// The displayed rescue charge must stay equal to the sim's actual penalty;
// retry-restart.ts pins this to sim.RESPAWN_PENALTY_MS so the copy can never
// silently drift from the physics.
export const RESCUE_PENALTY_S = 3;

// Desktop names the physical keys; touch names the on-screen controls. Both
// always pair the rescue action with its real cost and the full-run retry, so
// the menu, stuck prompt and help line agree.
export function rescueKey(touch: boolean): string {
  return touch ? 'RESCUE' : 'R RESCUE';
}
export function retryKey(touch: boolean): string {
  return touch ? 'RETRY' : 'ENTER RETRY';
}
export function recoveryHint(touch: boolean): string {
  return `${rescueKey(touch)} (+${RESCUE_PENALTY_S}s) · ${retryKey(touch)}`;
}
export function stuckPrompt(touch: boolean): string {
  return `STUCK — ${recoveryHint(touch)}`;
}
export function offCoursePrompt(touch: boolean): string {
  return `OFF COURSE — ${recoveryHint(touch)}`;
}
// Brief penalty toast after a real rescue. It lives in its own HUD element so
// surfacing the charge never overwrites the urgent STUCK / OFF COURSE line.
export function rescuePenaltyToast(): string {
  return `RESCUE +${RESCUE_PENALTY_S}s`;
}

// ---------- immediate retry display reset (pure) ----------
// Values the HUD must show the instant a retry transition starts, before the
// countdown branch ever paints READY. main.ts applies them to the DOM; tests
// pin the reset so a refactor cannot leave the previous run's timer, progress,
// delta, split toast or debug telemetry on screen through the countdown.
export interface RetryDisplayReset {
  time: string;
  progressPct: number;
  delta: string;
  split: string;
  debug: string;
}
export function retryDisplayReset(): RetryDisplayReset {
  return { time: fmt(0), progressPct: 0, delta: '', split: '', debug: '' };
}

// Neutral retained step-info: replaces the previous run's last stepped values
// on retry so no stale sIdx / stuckMs / surface feeds the first READY frames.
// Fresh object every call (main.ts reassigns it; callers must not share a ref).
export function neutralRunInfo(): StepInfo {
  return {
    spd: 0, drifting: false, sIdx: 0, gIdx: 0, pitch: 0,
    launched: false, landed: false, finished: false,
    fSpeed: 0, lSpeed: 0, slip: 0, yawRate: 0,
    offroad: false, surface: 'road', landV: 0,
    impact: 0, scraping: false, stuckMs: 0, oobMs: 0,
  };
}
