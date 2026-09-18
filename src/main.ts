import * as THREE from 'three';

// ---------- helpers, simulation + ghosts (pure logic in ./sim.ts) ----------
import {
  clamp, lerp, hashSeed, mulberry32,
  trackFromPoints, TouchState, interpPose, updateDisplay,
  createSimState, resetRun, simRespawn, simStep,
} from './sim';
import type { StepInfo } from './sim';
import { decodeGhost, encodeGhost, sampleGhost, rivalLabel, makeExpectedTrack, resolveRivalIdentity } from './ghost';
import type { GhostData, RivalGhost } from './ghost';
import { GHOST_URL_BUDGET } from './ghost';
import { splitPositions, splitSampleIdx, ghostTimeAt, gapText, clampAcc } from './loop';
import {
  fmt, buildShareText, buildShareUrl, parseShareUrl,
  shareRun, shouldUseNativeShare,
} from './share';
import { TRACK_HALF_W, arcLengths, markerStations } from './trackgen';
import { parseCourseMode, resolveCourse } from './courses';
import type { CourseMode, CourseInfo } from './courses';
import {
  speedKmh, exitFeedback, createLesson, advanceLesson, lessonText,
  createPractice, recordPracticeExit, practiceText,
  medalFor, nextTargetText, sectorDeltas, sectorSummaryText,
  recordsPB, appendCourseMode,
} from './driving-feedback';
import type { LessonState, PracticeState, DriftObservation } from './driving-feedback';
import { createAudioEngine } from './audio';
import type { AudioContextLike } from './audio';
import { planBarriers, barrierAt } from './barrier-plan';
import {
  mountVisuals, trailTarget, trailSmooth, trailWidth, trailLength,
  trailShade, trailSpawnEvery, dustBurst, dustSpread,
} from './visuals';
import { createMotionState, resetMotion, updateMotion, cameraOutput, impulseLength, DEFAULT_TUNING, SPEED_FULL } from './render-motion';
import { apronColumns, groundSurfaceY, offroadLevel, resolveApronWidths } from './surface';
import {
  countdownLen, clearTouch, retryDisplayReset, neutralRunInfo,
  stuckPrompt, offCoursePrompt, rescuePenaltyToast, retryKey,
} from './retry-control';
import { mountEnvironment, groundPlainBounds, GROUND_PLAIN_MIN_SIZE, GROUND_PLAIN_SNAP } from './environment';
import type { EnvKit } from './environment';
function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// ---------- config from URL (parsed + validated by ./share.ts, never throws) ----------
function lsGet(key: string): string | null { try { return localStorage.getItem(key); } catch { return null; } }
function lsSet(key: string, value: string): void { try { localStorage.setItem(key, value); } catch { /* quota */ } }

const parsed = parseShareUrl(location.search);
const requestedDay: string = parsed.day || todayStr();
// Course mode (./courses.ts): daily is the default; fixed practice/benchmark
// courses are authored and carry recorded references. Mode is preserved in
// share links so a link resolves the same course on the receiving side.
const mode: CourseMode = parseCourseMode(location.search);
const course: CourseInfo = resolveCourse(mode, requestedDay);
const day: string = course.identityDay;
const sharedTime: number = parsed.timeMs;
// Course-isolated PB storage (mode + geometry checksum + version). The fresh
// physics era starts clean competition: legacy per-day keys from the old
// physics envelope are left untouched on disk but are neither read nor written,
// so a stale old-physics run can never seed a new-competition PB/ghost.
const bestKey = `${course.storageKey}-best`;
const ghostKey = `${course.storageKey}-ghost`;
let pbGhost: GhostData | null = null;
{
  const pb = decodeGhost(lsGet(ghostKey));
  if (pb && pb.p.length > 1) pbGhost = pb;
}
// Identity-gated rival (./ghost.ts): only a course-matched ghost races.
// Resolution happens after the course track loads (checksum = geometry proof).
let rival: RivalGhost | null = null;
let sharedGhost: GhostData | null = null;
let rivalNotice = '';
let ghostIsReference = false;
let preferReference = false;

// ---------- renderer / scene ----------
const canvas = document.getElementById('game') as HTMLCanvasElement;
const coarse = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
if (coarse) document.body.classList.add('touchmode');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !coarse, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarse ? 1.5 : 2));
renderer.setSize(innerWidth, innerHeight);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf6c489);
scene.fog = new THREE.Fog(0xeab183, 120, 700);
// gradient sky dome + sun glow (single draw call, unaffected by fog)
{
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color(0x2e6bd8) },
      mid: { value: new THREE.Color(0x9fc3ee) },
      bot: { value: new THREE.Color(0xf6c489) },
    },
    vertexShader: `
      varying vec3 vP;
      void main() {
        vP = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      varying vec3 vP;
      uniform vec3 top;
      uniform vec3 mid;
      uniform vec3 bot;
      void main() {
        vec3 d = normalize(vP);
        vec3 c = d.y > 0.12
          ? mix(mid, top, smoothstep(0.12, 0.65, d.y))
          : mix(bot, mid, smoothstep(-0.08, 0.12, d.y));
        vec3 sd = normalize(vec3(-0.55, 0.32, 0.28));
        float s = max(dot(d, sd), 0.0);
        c += vec3(1.0, 0.85, 0.6) * pow(s, 220.0) * 1.2 + vec3(1.0, 0.7, 0.4) * pow(s, 8.0) * 0.18;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(1500, 24, 12), skyMat);
  sky.frustumCulled = false;
  scene.add(sky);
}
const camera = new THREE.PerspectiveCamera(64, innerWidth / innerHeight, 0.1, 2000);
scene.add(new THREE.HemisphereLight(0xffe0c0, 0x7a3b22, 1.0));
const sun = new THREE.DirectionalLight(0xffd9a8, 1.6);
sun.position.set(-120, 180, 60);
scene.add(sun);
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ---------- course track (./courses.ts): daily grammar or fixed authored ----------
const rng = mulberry32(hashSeed('canyon-' + mode + '-' + day));
const courseTrack = course.track;
if (typeof console !== 'undefined') console.log('[canyon-debug] course', mode, day, 'attempt', courseTrack.attempt, 'fallback', courseTrack.fallback, 'len', courseTrack.stats.length.toFixed(0), 'est', courseTrack.estTimeS.toFixed(1) + 's');
const pts = courseTrack.points.map((p) => new THREE.Vector3(p.x, p.y, p.z));
const HALF_W = TRACK_HALF_W;
const expectedTrack = makeExpectedTrack(day, courseTrack.checksum);
const track = trackFromPoints(pts.map((p) => ({ x: p.x, y: p.y, z: p.z })), HALF_W);
const tangents: THREE.Vector3[] = track.tx.map((x, k) => new THREE.Vector3(x, 0, track.tz[k]));
const normals: THREE.Vector3[] = track.nx.map((x, k) => new THREE.Vector3(x, 0, track.nz[k]));
// Arc-distance table for flow markers: dashes/curbs/posts keyed to metres of
// road, not sample index, so readability holds at any sample spacing.
const cum = arcLengths(courseTrack.points);
// Explicit barrier contract (Cycle 7): only these spans collide AND render.
// Open edges allow off-course flight/falls; sim gates wall contact on the
// same plan, visuals render rails exactly on it — one mask, no divergence.
track.barrier = planBarriers(cum[cum.length - 1], courseTrack.stats.events, courseTrack.crestS);
if (typeof console !== 'undefined') console.log('[canyon-debug] barriers',
  `spans=${track.barrier.spans.length}`);
// P0 splits: 3 grammar-derived checkpoints (S1/S2/S3) + finish. Positions are
// arc metres; sample indices via the cum table. No track format change.
const splitIdx = splitPositions(courseTrack.stats.events).map((sp) => splitSampleIdx(cum, sp));
let runSplits: (number | null)[] = splitIdx.map(() => null);
let splitExpiry = 0;

// ground: one expansive dirt far-field (sized from the full course bounds with
// a generous margin) plus a wide per-station apron ribbon that follows the
// road height at the shared ./surface.ts level. The road climbs several units
// along its length, so no single flat height can sit beside it: the apron
// samples groundSurfaceY per vertex (exactly the surface the car drives), and
// the far plane tracks the local road height under the car each frame, so the
// apron edge always meets the far field with no embankment and no z-fighting.
// The plane is also recentred on the camera in whole grid steps each frame
// (cheap: one uniform 2-triangle mesh) so driving far onto the dirt can never
// expose the plane edge inside the 2000u camera far plane.
let groundPlain: THREE.Mesh | null = null;
const APRON_EDGE_COLOR = 0xbe7038;
{
  const bounds = groundPlainBounds(courseTrack.points, 1200);
  const size = Math.max(bounds.size, GROUND_PLAIN_MIN_SIZE);
  const plain = new THREE.Mesh(
    new THREE.PlaneGeometry(size, size),
    new THREE.MeshLambertMaterial({ color: APRON_EDGE_COLOR })
  );
  plain.rotation.x = -Math.PI / 2;
  // A hair below the shared apron level so the apron seam can never z-fight
  // the huge plane (the sim still grounds the car on the shared surface).
  plain.position.set(bounds.cx, offroadLevel(pts[0].y) - 0.05, bounds.cz);
  scene.add(plain);
  groundPlain = plain;
  // Apron: per-side ribbon sampled laterally through groundSurfaceY, so the
  // rendered bank is exactly the surface the car drives (smoothstep from the
  // road edge down to apron level over DIRT_VERGE_WIDTH, then level). Each
  // station extends to apronHalfWidth of its local curve radius: wide on
  // straights, pinched inside hairpins so the offset strip can never reach a
  // centre of curvature and fold (measured min daily radius ~40u).
  const headings = pts.map((p, i) => Math.atan2(track.tx[i], track.tz[i]));
  const apronW = resolveApronWidths(
    pts.map((p, i) => ({ x: p.x, z: p.z, nx: normals[i].x, nz: normals[i].z })),
    headings, cum, HALF_W,
  );
  const verge = (side: number): THREE.Mesh => {
    const n = pts.length;
    const NCOLS = apronColumns(apronW[0]).length;
    const pos = new Float32Array(n * NCOLS * 3);
    const col = new Float32Array(n * NCOLS * 3);
    const idx: number[] = [];
    const c = new THREE.Color();
    const near = new THREE.Color(0xc98d54);
    const far = new THREE.Color(0xa05f33);
    const edge = new THREE.Color(APRON_EDGE_COLOR);
    for (let i = 0; i < n; i++) {
      const cols = apronColumns(apronW[i]);
      for (let j = 0; j < NCOLS; j++) {
        const d = cols[j];
        const lat = side * (HALF_W + d);
        const k = i * NCOLS + j;
        pos.set([
          pts[i].x + normals[i].x * lat,
          groundSurfaceY(pts[i].y, lat, HALF_W),
          pts[i].z + normals[i].z * lat,
        ], k * 3);
        // Bank palette (near -> far) easing into the far-field colour at the
        // edge so the apron meets the huge plane with no visible tone step.
        const f = Math.min(1, d / Math.max(apronW[i], 1e-6));
        if (f < 0.7) c.copy(near).lerp(far, f / 0.7);
        else c.copy(far).lerp(edge, (f - 0.7) / 0.3);
        col.set([c.r, c.g, c.b], k * 3);
      }
      if (i < n - 1) {
        for (let j = 0; j < NCOLS - 1; j++) {
          const a = i * NCOLS + j, b = a + 1;
          const d = (i + 1) * NCOLS + j, e = d + 1;
          idx.push(a, b, d, b, e, d);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
  };
  scene.add(verge(1));
  scene.add(verge(-1));
}
// road ribbon
function ribbon(width: number, yOff: number, colorFn: (i: number, side: number) => THREE.Color): THREE.Mesh {
  const n = pts.length;
  const pos = new Float32Array(n * 2 * 3);
  const col = new Float32Array(n * 2 * 3);
  const idx: number[] = [];
  const c = new THREE.Color();
  for (let i = 0; i < n; i++) {
    for (let s = 0; s < 2; s++) {
      const side = s === 0 ? 1 : -1;
      const p = pts[i].clone().addScaledVector(normals[i], side * width);
      pos.set([p.x, pts[i].y + yOff, p.z], (i * 2 + s) * 3);
      c.copy(colorFn(i, side));
      col.set([c.r, c.g, c.b], (i * 2 + s) * 3);
    }
    if (i < n - 1) {
      const a = i * 2, b = i * 2 + 1, d = (i + 1) * 2, e = (i + 1) * 2 + 1;
      idx.push(a, b, d, b, e, d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
}
const asphalt = new THREE.Color(0x3d3a40);
const asphalt2 = new THREE.Color(0x45424a);
scene.add(ribbon(HALF_W, 0.15, (i) => (Math.floor(cum[i] / 40) % 2 ? asphalt : asphalt2)));
// Dirt apron: pale engineered roadbed hugging the ribbon (parallels the road
// exactly, so it can never intersect corridor-kept scenery). Grounds the road
// against the desert floor instead of a hard asphalt/rock line.
scene.add(ribbon(HALF_W + 4, 0.05, () => new THREE.Color(0xc98d54)));
// Curb ribbon doubles as the open-edge cue: stations with no visible rail on a
// side read pale sand there instead of red/white, so fall-possible edges look
// deliberately different from walled ones. Same geometry, no new draw calls.
const sandPale = new THREE.Color(0xe8d3a8);
const curbRed = new THREE.Color(0xd83a2a);
const curbWhite = new THREE.Color(0xf2ede2);
scene.add(ribbon(HALF_W + 1.1, 0.12, (i, side) => {
  const k = Math.floor(cum[i] / 14) % 2;
  const base = k ? curbRed : curbWhite;
  if (track.barrier && !barrierAt(track.barrier, cum[i], side >= 0 ? 1 : -1)) {
    return base.clone().lerp(sandPale, 0.6);
  }
  return base;
}));
// center dashes
{
  const dg = new THREE.PlaneGeometry(0.35, 3);
  dg.rotateX(-Math.PI / 2);
  const dm = new THREE.MeshBasicMaterial({ color: 0xf5efdd });
  const at: number[] = markerStations(cum, 16).filter((i) => i >= 6 && i < pts.length - 6);
  const inst = new THREE.InstancedMesh(dg, dm, at.length);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const eu = new THREE.Euler();
  const one = new THREE.Vector3(1, 1, 1);
  at.forEach((si, k2) => {
    eu.set(0, Math.atan2(tangents[si].x, tangents[si].z), 0);
    q.setFromEuler(eu);
    m.compose(new THREE.Vector3(pts[si].x, pts[si].y + 0.19, pts[si].z), q, one);
    inst.setMatrixAt(k2, m);
  });
  inst.instanceMatrix.needsUpdate = true;
  scene.add(inst);
}
// checkered start/finish strips
const stripGeo = new THREE.PlaneGeometry(2, 1.15);
stripGeo.rotateX(-Math.PI / 2);
const stripWhite = new THREE.MeshBasicMaterial({ color: 0xf2ede2 });
const stripBlack = new THREE.MeshBasicMaterial({ color: 0x141414 });
function checkerStrip(si: number) {
  const yaw = Math.atan2(tangents[si].x, tangents[si].z);
  for (let rI = 0; rI < 2; rI++) {
    for (let cI = 0; cI < 8; cI++) {
      const sq = new THREE.Mesh(stripGeo, (rI + cI) % 2 ? stripBlack : stripWhite);
      const lat = (cI - 3.5) * 2;
      const lon = (rI - 0.5) * 1.15;
      sq.position.set(
        pts[si].x + normals[si].x * lat + tangents[si].x * lon,
        pts[si].y + 0.21,
        pts[si].z + normals[si].z * lat + tangents[si].z * lon
      );
      sq.rotation.y = yaw;
      scene.add(sq);
    }
  }
}
// readability layer (./visuals.ts): instanced guardrails replace the old edge
// posts, chevron boards mark drift/sweeper entries, speed ticks line the edges
// (hidden on mobile). Mounted once; placement is deterministic in arc distance.
// The kit passes statically-referenced classes (not the THREE namespace) so
// bundler tree-shaking of three keeps working.
const threeKit = {
  BoxGeometry: THREE.BoxGeometry, PlaneGeometry: THREE.PlaneGeometry,
  MeshLambertMaterial: THREE.MeshLambertMaterial, MeshBasicMaterial: THREE.MeshBasicMaterial,
  InstancedMesh: THREE.InstancedMesh, Group: THREE.Group, Matrix4: THREE.Matrix4,
  Quaternion: THREE.Quaternion, Euler: THREE.Euler, Vector3: THREE.Vector3,
  Color: THREE.Color, DoubleSide: THREE.DoubleSide,
};
const visuals = mountVisuals(threeKit, scene, {
  points: pts, tangents, normals, cum,
  events: courseTrack.stats.events, crestS: courseTrack.crestS,
}, { mobile: coarse, halfW: HALF_W, barriers: track.barrier });
visuals.setQuality(coarse);
// Cohesive canyon environment (./environment.ts): two wall depth layers with
// baked strata, mesas + horizon buttes, arch landmarks, olive scrub. Mounted
// once; deterministic, zero per-frame allocation. Supersedes the old wall/mesa
// box block and rock scatter (deleted); ground plane/patches, road, dashes,
// gantries, and cacti stay.
const envKit: EnvKit = { ...threeKit,
  CylinderGeometry: THREE.CylinderGeometry, ConeGeometry: THREE.ConeGeometry,
  TorusGeometry: THREE.TorusGeometry, BufferAttribute: THREE.BufferAttribute };
const env = mountEnvironment(envKit, scene, {
  points: pts, tangents, normals, cum,
  events: courseTrack.stats.events, crestS: courseTrack.crestS,
}, { mobile: coarse, halfW: HALF_W });
env.setQuality(coarse);
if (typeof console !== 'undefined') console.log('[canyon-debug] visuals',
  `guards=${visuals.counts.guardrails} chevrons=${visuals.counts.chevrons} ticks=${visuals.counts.ticks} dust=${visuals.counts.dust}`);
// ground patches: darker desert variation on the canyon floor (1 draw call)
{
  const geo = new THREE.CircleGeometry(1, 10);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const COUNT = 70;
  const inst = new THREE.InstancedMesh(geo, mat, COUNT);
  const m = new THREE.Matrix4();
  const col = new THREE.Color();
  let placed = 0, guard = 0;
  while (placed < COUNT && guard++ < 2000) {
    const x = (rng() - 0.5) * 1100, z = (rng() - 0.5) * 1100;
    let md = 1e9;
    for (let i = 0; i < pts.length; i += 12) {
      const dx = pts[i].x - x, dz = pts[i].z - z;
      const d = dx * dx + dz * dz;
      if (d < md) md = d;
    }
    if (md < 40 * 40) continue;
    const sc = 6 + rng() * 22;
    m.makeScale(sc, 1, sc * (0.6 + rng() * 0.6));
    m.setPosition(x, -2.35, z);
    inst.setMatrixAt(placed, m);
    inst.setColorAt(placed, col.setHSL(0.03 + rng() * 0.04, 0.5 + rng() * 0.2, 0.22 + rng() * 0.1));
    placed++;
  }
  inst.count = placed;
  inst.instanceMatrix.needsUpdate = true;
  if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
  scene.add(inst);
}
// cacti: classic canyon tufts standing on the desert floor (1 draw call)
{
  const geo = new THREE.CylinderGeometry(0.35, 0.55, 1, 7);
  geo.translate(0, 0.5, 0);
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const COUNT = coarse ? 70 : 120;
  const inst = new THREE.InstancedMesh(geo, mat, COUNT);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const vv = new THREE.Vector3();
  const sc = new THREE.Vector3();
  const col = new THREE.Color();
  let placed = 0, guard = 0;
  while (placed < COUNT && guard++ < 6000) {
    const x = (rng() - 0.5) * 1000, z = (rng() - 0.5) * 1000;
    let md = 1e9;
    for (let i = 0; i < pts.length; i += 12) {
      const dx = pts[i].x - x, dz = pts[i].z - z;
      const d = dx * dx + dz * dz;
      if (d < md) md = d;
    }
    if (md < 40 * 40) continue;
    const h = 3 + rng() * 4;
    e.set((rng() - 0.5) * 0.14, rng() * 3, (rng() - 0.5) * 0.14);
    q.setFromEuler(e);
    vv.set(x, -2.5, z);
    sc.set(0.8 + rng() * 0.9, h, 0.8 + rng() * 0.9);
    m.compose(vv, q, sc);
    inst.setMatrixAt(placed, m);
    inst.setColorAt(placed, col.setHSL(0.29 + rng() * 0.04, 0.4 + rng() * 0.2, 0.26 + rng() * 0.1));
    placed++;
  }
  inst.count = placed;
  inst.instanceMatrix.needsUpdate = true;
  if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
  scene.add(inst);
}
// start + finish gantries (beams span across the road)
function gantry(si: number, checkeredBeam: boolean) {
  const p0 = pts[si], n0 = normals[si];
  const yaw = Math.atan2(tangents[si].x, tangents[si].z);
  const nx = -Math.cos(yaw), nz = Math.sin(yaw); // across-road direction
  const postMat = new THREE.MeshLambertMaterial({ color: 0x222222 });
  for (const side of [1, -1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(1.4, 9, 1.4), postMat);
    const p = p0.clone().addScaledVector(n0, side * (HALF_W + 1.5));
    post.position.set(p.x, p0.y + 4.5, p.z);
    scene.add(post);
  }
  if (!checkeredBeam) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry((HALF_W + 1.5) * 2, 1.4, 1.4), postMat);
    beam.position.set(p0.x, p0.y + 9, p0.z);
    beam.rotation.y = yaw;
    scene.add(beam);
  } else {
    for (let cI = 0; cI < 10; cI++) {
      const b = new THREE.Mesh(
        new THREE.BoxGeometry(1.9, 1.4, 1.4),
        new THREE.MeshBasicMaterial({ color: cI % 2 ? 0x111111 : 0xffffff })
      );
      const off = (cI - 4.5) * 1.9;
      b.position.set(p0.x + nx * off, p0.y + 9, p0.z + nz * off);
      b.rotation.y = yaw;
      scene.add(b);
    }
  }
  checkerStrip(si);
}
gantry(0, false);
gantry(pts.length - 1, true);

// ---------- cars ----------
function buildCar(color: number, ghost = false): THREE.Group {
  const g = new THREE.Group();
  const mat = ghost
    ? new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.45 })
    : new THREE.MeshLambertMaterial({ color });
  const dark = ghost ? mat : new THREE.MeshLambertMaterial({ color: 0x23232a });
  const glass = ghost ? mat : new THREE.MeshLambertMaterial({ color: 0x9fd8ff });
  const add = (geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number) => {
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(x, y, z);
    g.add(mesh);
    return mesh;
  };
  add(new THREE.BoxGeometry(2.3, 0.55, 4.6), mat, 0, 0.8, 0); // hull
  add(new THREE.BoxGeometry(2.0, 0.3, 1.0), mat, 0, 0.55, 2.5); // nose
  add(new THREE.BoxGeometry(2.34, 0.22, 4.0), dark, 0, 0.42, 0); // splitter/skirt base
  add(new THREE.BoxGeometry(0.18, 0.3, 1.4), mat, -1.2, 0.95, 0.9); // side skirts
  add(new THREE.BoxGeometry(0.18, 0.3, 1.4), mat, 1.2, 0.95, 0.9);
  add(new THREE.BoxGeometry(1.6, 0.55, 1.9), glass, 0, 1.3, -0.2); // cabin
  add(new THREE.BoxGeometry(1.7, 0.1, 2.0), mat, 0, 1.62, -0.2); // roof
  add(new THREE.BoxGeometry(2.4, 0.12, 0.7), dark, 0, 1.72, -2.0); // wing
  add(new THREE.BoxGeometry(0.14, 0.5, 0.4), dark, -0.8, 1.4, -2.0); // struts
  add(new THREE.BoxGeometry(0.14, 0.5, 0.4), dark, 0.8, 1.4, -2.0);
  add(new THREE.BoxGeometry(0.3, 0.18, 0.5), mat, -1.05, 1.35, 0.6); // mirrors
  add(new THREE.BoxGeometry(0.3, 0.18, 0.5), mat, 1.05, 1.35, 0.6);
  add(new THREE.BoxGeometry(0.5, 0.28, 0.3), dark, -0.5, 0.6, -2.35); // exhausts
  add(new THREE.BoxGeometry(0.5, 0.28, 0.3), dark, 0.5, 0.6, -2.35);
  if (!ghost) {
    const hl = new THREE.MeshBasicMaterial({ color: 0xfff3c0 });
    const tl = new THREE.MeshBasicMaterial({ color: 0xff2a2a });
    add(new THREE.BoxGeometry(0.45, 0.18, 0.1), hl, -0.7, 0.82, 2.32);
    add(new THREE.BoxGeometry(0.45, 0.18, 0.1), hl, 0.7, 0.82, 2.32);
    add(new THREE.BoxGeometry(0.45, 0.16, 0.1), tl, -0.7, 0.85, -2.32);
    add(new THREE.BoxGeometry(0.45, 0.16, 0.1), tl, 0.7, 0.85, -2.32);
    g.userData.tail = tl;
  }
  const wg = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 12);
  wg.rotateZ(Math.PI / 2);
  const wm = ghost ? mat : new THREE.MeshLambertMaterial({ color: 0x141414 });
  const hubm = ghost ? mat : new THREE.MeshBasicMaterial({ color: 0xd8d8de });
  const steerGs: THREE.Group[] = [];
  const spinGs: THREE.Group[] = [];
  for (const [wx, wz, front] of [[-1.15, 1.5, 1], [1.15, 1.5, 1], [-1.15, -1.5, 0], [1.15, -1.5, 0]] as const) {
    const steerG = new THREE.Group();
    steerG.position.set(wx, 0.45, wz);
    const spinG = new THREE.Group();
    spinG.add(new THREE.Mesh(wg, wm));
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.44, 8).rotateZ(Math.PI / 2), hubm);
    spinG.add(hub);
    steerG.add(spinG);
    g.add(steerG);
    spinGs.push(spinG);
    if (front) steerGs.push(steerG);
  }
  g.userData.wheels = { steer: steerGs, spin: spinGs };
  return g;
}
const car = buildCar(0xff7a1a);
car.rotation.order = 'YXZ'; // yaw -> pitch -> lean, matches old yaw+lean visuals at pitch 0
scene.add(car);
const ghostCar = buildCar(0x35d6ff, true);
scene.add(ghostCar);
// Rival selection: a course-matched friend link or PB races; a recorded
// REFERENCE fills in when nothing else is available and can be toggled in the
// menu. Fail-closed: stale/mismatched ghosts never race (./ghost.ts).
function selectRival() {
  const decision = resolveRivalIdentity({ shared: parsed.ghost, pb: pbGhost, expected: expectedTrack });
  const ref = course.reference && course.reference.p.length > 1 ? course.reference : null;
  ghostIsReference = false;
  let chosen: RivalGhost | null = decision.rival;
  if (preferReference && ref) {
    chosen = { ghost: ref, kind: 'pb', racingPB: false };
    ghostIsReference = true;
  } else if (!chosen && ref) {
    chosen = { ghost: ref, kind: 'pb', racingPB: false };
    ghostIsReference = true;
  }
  rival = chosen;
  sharedGhost = chosen ? chosen.ghost : null;
  rivalNotice = decision.notice;
  if (ghostIsReference) rivalNotice = (rivalNotice ? rivalNotice + ' ' : '') + 'Racing the REFERENCE run.';
  ghostCar.visible = !!sharedGhost;
  if (rivalNotice && typeof console !== 'undefined') console.log('[canyon-debug] rival', decision.status, rivalNotice);
}
selectRival();
const wheels = car.userData.wheels as { steer: THREE.Group[]; spin: THREE.Group[] };
// blob shadow (cheap grounding cue, stays on the road under jumps)
const blob = new THREE.Mesh(
  (() => { const bg = new THREE.CircleGeometry(2.4, 20); bg.rotateX(-Math.PI / 2); return bg; })(),
  new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false })
);
scene.add(blob);
// persistent drift skid marks (ring buffer, oldest reused first)
const SKID_N = 500;
const skids = new THREE.InstancedMesh(
  (() => { const sg = new THREE.PlaneGeometry(1, 1); sg.rotateX(-Math.PI / 2); return sg; })(),
  new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
  SKID_N
);
skids.frustumCulled = false;
skids.renderOrder = 1;
scene.add(skids);
let skidIdx = 0;
// Skid shade ramp: faint marks blend toward asphalt, committed marks go dark.
// (material color is white; per-instance color carries the shade.)
const SKID_FAINT = new THREE.Color(0x4a4750);
const SKID_DARK = new THREE.Color(0x0e0d0e);
const _skShade = new THREE.Color();
const _skHideM = new THREE.Matrix4().makeScale(0, 0, 0);
// Full retry clears the previous run's skid residue: a fresh run must not
// start on top of stale marks from the attempt it is replacing.
function clearSkids() {
  for (let i = 0; i < SKID_N; i++) {
    skids.setMatrixAt(i, _skHideM);
    skids.setColorAt(i, SKID_FAINT);
  }
  skids.instanceMatrix.needsUpdate = true;
  if (skids.instanceColor) skids.instanceColor.needsUpdate = true;
  skidIdx = 0;
}
clearSkids();
const _skM = new THREE.Matrix4();
const _skQ = new THREE.Quaternion();
const _skE = new THREE.Euler();
const _skV = new THREE.Vector3();
const _skS = new THREE.Vector3();
function skidAt(x: number, y: number, z: number, h: number, w: number, len: number, shade: number) {
  _skE.set(0, h, 0);
  _skQ.setFromEuler(_skE);
  _skV.set(x, y, z);
  _skS.set(w, 1, len);
  _skM.compose(_skV, _skQ, _skS);
  skids.setMatrixAt(skidIdx, _skM);
  _skShade.copy(SKID_FAINT).lerp(SKID_DARK, shade);
  skids.setColorAt(skidIdx, _skShade);
  skidIdx = (skidIdx + 1) % SKID_N;
  skids.instanceMatrix.needsUpdate = true;
  if (skids.instanceColor) skids.instanceColor.needsUpdate = true;
}
// Smoothed trail intensity (./visuals.ts): advanced per fixed step, reset on
// teleport so no stale slide leaks into a fresh run.
let trailSm = 0;
let trailTick = 0;

// ---------- dust (Points cloud backed by the preallocated visuals ring) ----------
const dustGeo = new THREE.BufferGeometry();
dustGeo.setAttribute('position', new THREE.BufferAttribute(visuals.dust.positions, 3));
const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0xe8c49a, size: 1.1, transparent: true, opacity: 0.45 }));
dust.frustumCulled = false;
scene.add(dust);

// ---------- input: auto-gas, steer + drift ----------
const input = { steer: 0, drift: false, left: false, right: false, keyDrift: false };
const tc = new TouchState();
addEventListener('keydown', (ev) => {
  ensureAudio();
  if (ev.key === 'Escape' || ev.key === 'p' || ev.key === 'P') {
    setPaused(!paused);
    ev.preventDefault();
  }
  if (ev.key === 'f' || ev.key === 'F') {
    showDebug = !showDebug;
    debugEl.classList.toggle('hidden', !showDebug);
  }
  if (ev.repeat) return;
  if (ev.key === 'ArrowLeft' || ev.key === 'a') input.left = true;
  if (ev.key === 'ArrowRight' || ev.key === 'd') input.right = true;
  if (ev.key === 'ArrowDown' || ev.key === ' ') { input.keyDrift = true; ev.preventDefault(); }
  if (ev.key === 'r' || ev.key === 'R') doRespawn();
  if (ev.key === 'Enter' && state === 'menu') startRun(false);
  if (ev.key === 'Enter' && state === 'finish') startRun(true);
  if (ev.key === 'Enter' && state === 'run') startRun(true);
});
addEventListener('keyup', (ev) => {
  if (ev.key === 'ArrowLeft' || ev.key === 'a') input.left = false;
  if (ev.key === 'ArrowRight' || ev.key === 'd') input.right = false;
  if (ev.key === 'ArrowDown' || ev.key === ' ') input.keyDrift = false;
});
// touch joystick + drift button (separate pointer IDs: multi-touch safe,
// releasing one finger never cancels the other control)
const stick = document.getElementById('stick')!;
const knob = document.getElementById('knob')!;
const driftBtn = document.getElementById('driftbtn')!;
const resetBtn = document.getElementById('resetbtn')!;
resetBtn.addEventListener('pointerdown', (ev) => { ev.preventDefault(); ensureAudio(); doRespawn(); });
stick.addEventListener('pointerdown', (ev) => {
  ensureAudio();
  tc.stickDown(ev.pointerId, ev.clientX);
  try { (ev.target as Element).setPointerCapture(ev.pointerId); } catch { /* noop */ }
});
stick.addEventListener('pointermove', (ev) => {
  tc.stickMove(ev.pointerId, ev.clientX);
  knob.style.transform = `translate(calc(-50% + ${tc.joy * 34}px), -50%)`;
});
const stickEnd = (ev: PointerEvent) => {
  tc.stickUp(ev.pointerId);
  if (!tc.joyOn) knob.style.transform = 'translate(-50%,-50%)';
};
stick.addEventListener('pointerup', stickEnd);
stick.addEventListener('pointercancel', stickEnd);
driftBtn.addEventListener('pointerdown', (ev) => {
  ensureAudio();
  tc.driftDown(ev.pointerId);
  try { driftBtn.setPointerCapture(ev.pointerId); } catch { /* noop */ }
  driftBtn.classList.add('on');
  ev.preventDefault();
});
const driftEnd = (ev: PointerEvent) => {
  tc.driftUp(ev.pointerId);
  if (!tc.drift) driftBtn.classList.remove('on');
};
driftBtn.addEventListener('pointerup', driftEnd);
driftBtn.addEventListener('pointercancel', driftEnd);
// P0 reliable controls: a held key released outside the window never sticks.
// Blur / tab-hide / page-hide clears keyboard + touch state together and
// recenters the visible stick, so returning has no phantom steering or drift
// and the next press works. Retries also route through here (see startRun).
function clearAllInput() {
  input.left = false; input.right = false; input.keyDrift = false;
  input.steer = 0; input.drift = false;
  clearTouch(tc);
  knob.style.transform = 'translate(-50%,-50%)';
  driftBtn.classList.remove('on');
}
addEventListener('blur', clearAllInput);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearAllInput();
    audio.suspend();
    if (state === 'run' || state === 'countdown' || state === 'watch') setPaused(true);
  } else {
    audio.resume();
  }
});
addEventListener('pagehide', clearAllInput);
// Full-run retry button (accessible, desktop + mobile): same complete reset
// as Enter mid-run. R stays a mid-run rescue with its 3-second penalty.
const retryBtn = document.getElementById('retrybtn') as HTMLButtonElement;
retryBtn.textContent = `\u21bb ${retryKey(coarse)}`; // ENTER RETRY (desktop) / RETRY (touch)
retryBtn.addEventListener('click', () => {
  ensureAudio();
  if (state === 'run' || state === 'countdown') startRun(true);
});
function pollKeys() {
  if (input.left && !input.right) input.steer = -1;
  else if (input.right && !input.left) input.steer = 1;
  else input.steer = tc.steer;
  input.drift = input.keyDrift || tc.drift;
}

// ---------- race state (simulation lives in sim.ts; this file renders it) ----------
let state: 'menu' | 'countdown' | 'run' | 'finish' | 'watch' = 'menu';
let countdownT = 0;
let lastFinalMs = 0;
let watchT = 0; // reference-demonstration playback clock (ms, race time)
let paused = false;
const sim = createSimState();
let snapView = true; // render current pose exactly on teleport frames (car mesh)
// Deterministic chase-camera + FOV state (./render-motion.ts): lagged
// velocity-led yaw, damped position/look/FOV, bounded landing/wall impulses.
// Zero per-frame allocation; explicit snaps on start/respawn/finish.
const motion = createMotionState();
const camOut = { x: 0, y: 0, z: 0 };
let showDebug = false;
let fpsEMA = 60;
let wallKick = 0; // one-shot visual crash shudder, set on sim wallHit edge, decays per frame
let surgeVis = 0; // one-shot clean-exit surge lean/pitch (visual only, bounded)
let penaltyExpiry = 0; // brief "+3s" rescue charge toast deadline (separate from msgEl)
function showPenaltyToast(now: number) {
  penaltyEl.textContent = rescuePenaltyToast();
  penaltyEl.classList.add('show');
  penaltyExpiry = now + 1800;
}
function clearPenalty() {
  penaltyEl.textContent = '';
  penaltyEl.classList.remove('show');
  penaltyExpiry = 0;
}
let lastInfo: StepInfo = neutralRunInfo();
let best = Number(lsGet(bestKey) || 0);

const timeEl = document.getElementById('time')!;
const speedEl = document.getElementById('speed')!;
const bestEl = document.getElementById('best')!;
const msgEl = document.getElementById('msg')!;
const penaltyEl = document.getElementById('penalty')!;
const exitfbEl = document.getElementById('exitfb')!;
const lessonEl = document.getElementById('lesson')!;
const progEl = document.getElementById('progfill')!;
const deltaEl = document.getElementById('delta')!;
const splitEl = document.getElementById('split')!;
const panel = document.getElementById('panel')!;
const presult = document.getElementById('presult')!;
const ptitle = document.getElementById('ptitle')!;
const pdateEl = document.getElementById('pdate')!;
const ptargets = document.getElementById('ptargets')!;
const pubEl = document.getElementById('psub')!;
const phintEl = document.getElementById('phint')!;
const debugEl = document.getElementById('debug')!;
const raceBtn = document.getElementById('racebtn') as HTMLButtonElement;
const referenceBtn = document.getElementById('referencebtn') as HTMLButtonElement;
const muteBtn = document.getElementById('mutebtn') as HTMLButtonElement;
const fsBtn = document.getElementById('fsbtn') as HTMLButtonElement;
const pauseOverlay = document.getElementById('pauseoverlay')!;
const resumeBtn = document.getElementById('resumebtn') as HTMLButtonElement;
const pauseMenuBtn = document.getElementById('pausemenubtn') as HTMLButtonElement;
const pausePlayBtn = document.getElementById('pauseplaybtn') as HTMLButtonElement;
// Single writer for #msg: the countdown is styled large via the .count hook
// (and a touch larger for GO! via .go); every other line clears the hook so
// nothing else inherits the huge size.
function setMsg(text: string, count = false, go = false) {
  msgEl.textContent = text;
  msgEl.classList.toggle('count', count);
  msgEl.classList.toggle('go', go);
}
type MedalKind = 'gold' | 'silver' | 'bronze';
function medalLabelSpan(medal: MedalKind): HTMLSpanElement {
  const s = document.createElement('span');
  s.className = medal === 'gold' ? 'mgold' : medal === 'silver' ? 'msilver' : 'mbronze';
  s.textContent = medal.toUpperCase();
  return s;
}
// One atomic "LABEL time" pair: white-space:nowrap keeps a medal on one line.
// Built with DOM nodes (textContent only), never innerHTML.
function targetPair(medal: MedalKind, timeMs: number): HTMLSpanElement {
  const pair = document.createElement('span');
  pair.className = 'tpair';
  const t = document.createElement('span');
  t.className = 'mtime';
  t.textContent = fmt(timeMs);
  pair.append(medalLabelSpan(medal), document.createTextNode(' '), t);
  return pair;
}
// One atomic flex item of plain text: never splits across lines.
// Built with textContent only, never innerHTML.
function targetChunk(text: string): HTMLSpanElement {
  const c = document.createElement('span');
  c.className = 'tchunk';
  c.textContent = text;
  return c;
}
// Menu targets line: per-medal colours, atomic pairs in a wrapping flex row.
// Spacing comes from the flex gap in CSS — no text separators, so no
// separator can ever dangle at a line end.
let lastPtargetsKey = '';
function renderMenuTargets(): void {
  const key = `menu:${best}`;
  if (key === lastPtargetsKey) return;
  lastPtargetsKey = key;
  ptargets.replaceChildren();
  const t = course.targets;
  if (best > 0) {
    const m = medalFor(best, t);
    ptargets.append(targetChunk(`BEST ${fmt(best)}`));
    if (m === 'none') ptargets.append(targetChunk('NO MEDAL YET'));
    else ptargets.append(medalLabelSpan(m));
    ptargets.append(targetPair('gold', t.goldMs));
    return;
  }
  const label = document.createElement('span');
  label.className = 'tlabel';
  label.textContent = 'TARGETS —';
  ptargets.append(label);
  ptargets.append(targetPair('gold', t.goldMs));
  ptargets.append(targetPair('silver', t.silverMs));
  ptargets.append(targetPair('bronze', t.bronzeMs));
}
// Finish targets line: same medal colours for the next-target mention; each
// logical chunk is one atomic flex item (prefix/next/sectors), so wrapping
// always happens between chunks. Free-text parts stay text nodes so nothing
// can inject markup.
function renderFinishTargets(prefix: string, next: string, sectors: string): void {
  const key = `finish:${prefix}|${next}|${sectors}`;
  if (key === lastPtargetsKey) return;
  lastPtargetsKey = key;
  ptargets.replaceChildren();
  const cleanPrefix = prefix.replace(/\s*·\s*$/, '');
  if (cleanPrefix) ptargets.append(targetChunk(cleanPrefix));
  if (next) {
    const m = next.match(/^(next )?((?:GOLD|SILVER|BRONZE))([\s\S]*)$/);
    if (m) {
      const chunk = document.createElement('span');
      chunk.className = 'tchunk';
      if (m[1]) chunk.append(document.createTextNode(m[1]));
      chunk.append(medalLabelSpan(m[2].toLowerCase() as MedalKind));
      chunk.append(document.createTextNode(m[3]));
      ptargets.append(chunk);
    } else {
      ptargets.append(document.createTextNode(next));
    }
  }
  if (sectors) ptargets.append(targetChunk(sectors));
}
const stopBtn = document.getElementById('stopbtn') as HTMLButtonElement;
// Header shows the real date only for daily; fixed courses must not leak the
// internal 2026-01-01/02 identity day.
(document.getElementById('day') as HTMLElement).textContent = mode === 'daily' ? `CANYON DAILY · ${day}` : course.title.toUpperCase();
function refreshBest() {
  if (best > 0) bestEl.textContent = `BEST ${fmt(best)}`;
  else if (sharedTime > 0) bestEl.textContent = `FRIEND ${fmt(sharedTime)}`;
  else bestEl.textContent = 'BEST —';
}
refreshBest();

// ---------- audio (single bounded graph, built on first gesture) ----------
const audio = createAudioEngine({
  createContext: () => {
    const w = window as unknown as { AudioContext?: new () => AudioContextLike; webkitAudioContext?: new () => AudioContextLike };
    const AC = w.AudioContext || w.webkitAudioContext;
    if (!AC) throw new Error('no AudioContext');
    return new AC();
  },
  storage: (() => { try { return localStorage; } catch { return null; } })(),
});
let audioStarted = false;
function updateMuteBtn() { muteBtn.textContent = audio.isMuted() ? 'SOUND OFF' : 'SOUND ON'; }
function ensureAudio() {
  if (audioStarted) return;
  audioStarted = true;
  try { audio.start(); } catch { /* audio unavailable */ }
  updateMuteBtn();
}

// ---------- drift lesson / practice / exit feedback ----------
const lesson: LessonState = createLesson();
let lessonSeen = lsGet('canyon-drift-lesson-seen') === '1';
// Practice progress persists across retries (and reloads) in this session so a
// multi-exit goal is achievable without replaying from zero each attempt.
const practiceSaveKey = `${course.storageKey}-practice`;
const practice: PracticeState = createPractice(5);
{
  const raw = lsGet(practiceSaveKey);
  if (raw) {
    const [c, p] = raw.split(',');
    const cn = Number(c), pn = Number(p);
    if (isFinite(cn) && cn >= 0) practice.clean = Math.floor(cn);
    if (isFinite(pn) && pn >= 0) practice.perfect = Math.floor(pn);
  }
}
function savePractice() { lsSet(practiceSaveKey, `${practice.clean},${practice.perfect}`); }
let pendingDrift: { event: DriftObservation['event']; grade: DriftObservation['grade'] } | null = null;
let exitFbExpiry = 0;
function clearExitFeedback() { exitfbEl.textContent = ''; exitfbEl.classList.remove('show'); exitFbExpiry = 0; }

// ---------- menu mode + player controls ----------
function gotoMode(next: CourseMode) {
  const url = new URL(location.href);
  if (next === 'daily') url.searchParams.delete('mode');
  else url.searchParams.set('mode', next);
  location.assign(url.toString());
}
const modeBtnEls: Record<CourseMode, HTMLButtonElement> = {
  daily: document.getElementById('modedaily') as HTMLButtonElement,
  practice: document.getElementById('modepractice') as HTMLButtonElement,
  benchmark: document.getElementById('modebenchmark') as HTMLButtonElement,
};
for (const m of ['daily', 'practice', 'benchmark'] as CourseMode[]) {
  modeBtnEls[m].onclick = () => gotoMode(m);
  modeBtnEls[m].classList.toggle('active', m === mode);
}
function refreshRefButtons() {
  const hasRef = !!course.reference;
  // The race toggle only matters when there is a second rival to switch to.
  const hasAlt = best > 0 || !!parsed.ghost || sharedTime > 0;
  raceBtn.classList.toggle('hidden', !(hasRef && hasAlt));
  referenceBtn.classList.toggle('hidden', !hasRef);
  if (hasRef) raceBtn.textContent = preferReference ? 'RACE MY BEST' : 'RACE REFERENCE';
}
refreshRefButtons();
raceBtn.onclick = () => { preferReference = !preferReference; selectRival(); refreshRefButtons(); };
referenceBtn.onclick = () => startWatch();
muteBtn.onclick = () => { ensureAudio(); audio.toggleMuted(); updateMuteBtn(); };
updateMuteBtn();
fsBtn.onclick = () => {
  const el = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => void };
  if (document.fullscreenElement) void document.exitFullscreen?.();
  else if (el.requestFullscreen) void el.requestFullscreen();
  else el.webkitRequestFullscreen?.();
};
resumeBtn.onclick = () => setPaused(false);
pauseMenuBtn.onclick = () => { setPaused(false); toMenu(); };
function menuResultText(): string {
  const parts: string[] = [];
  if (best > 0) parts.push(`Your best ${fmt(best)}`);
  if (sharedTime > 0) parts.push(`Friend ${fmt(sharedTime)}`);
  if (rivalNotice) parts.push(rivalNotice);
  // selectRival already appends the REFERENCE label into rivalNotice.
  if (!ghostIsReference && (rival || sharedTime)) parts.push(rivalLabel(rival, sharedTime));
  else if (!ghostIsReference) parts.push(course.reference ? 'Race the reference, then watch it' : 'Point-to-point sprint · flat out, drift the hairpins');
  return parts.join(' · ');
}
function setPaused(p: boolean) {
  if (state !== 'run' && state !== 'countdown' && state !== 'watch') return;
  paused = p;
  pauseOverlay.classList.toggle('hidden', !p);
  pausePlayBtn.textContent = p ? 'RESUME' : 'PAUSE';
  if (p) audio.suspend(); else audio.resume();
}
function toMenu() {
  paused = false;
  pauseOverlay.classList.add('hidden');
  pausePlayBtn.textContent = 'PAUSE';
  state = 'menu';
  document.body.classList.remove('racing', 'watching');
  panel.classList.remove('hidden');
  car.visible = true;
  ghostCar.visible = !!sharedGhost;
  setMsg('');
  deltaEl.textContent = ''; deltaEl.className = '';
  timeEl.textContent = '0:00.00';
  speedEl.textContent = '0 km/h';
  progEl.style.width = '0%';
  clearExitFeedback();
  audio.reset();
}
function startWatch() {
  if (!course.reference || course.reference.p.length < 2) return;
  ensureAudio();
  clearAllInput();
  panel.classList.add('hidden');
  document.body.classList.add('racing', 'watching');
  paused = false;
  pauseOverlay.classList.add('hidden');
  watchT = 0;
  state = 'watch';
  car.visible = false; // demo only: no player car, no PB
  ghostCar.visible = true;
  setMsg('REFERENCE — DEMONSTRATION');
  lessonEl.textContent = '';
  splitEl.textContent = '';
  deltaEl.textContent = 'REPLAY'; deltaEl.className = '';
  timeEl.textContent = '0:00.00';
  speedEl.textContent = '0 km/h';
  progEl.style.width = '0%';
  clearExitFeedback();
  clearPenalty();
}
stopBtn.onclick = () => { setPaused(false); toMenu(); };
pausePlayBtn.onclick = () => setPaused(!paused);

// Ground height under a point following the shared ./surface.ts contract:
// road edge -> smooth verge -> flat dirt plain. Used to ground the skid marks,
// shadow blob and dust so nothing floats at the nearest road height off-road.
function surfaceYAt(idx: number, x: number, z: number): number {
  const lat = (x - track.x[idx]) * track.nx[idx] + (z - track.z[idx]) * track.nz[idx];
  return groundSurfaceY(track.y[idx], lat, HALF_W);
}
// Apply sim pose to meshes (car yaw + road/trajectory pitch + blob shadow).
function syncCarTransform() {
  car.position.set(sim.px, sim.py, sim.pz);
  car.rotation.set(sim.pitch, sim.heading, 0);
  const gy = surfaceYAt(sim.groundIdx, sim.px, sim.pz) + 0.2;
  blob.position.set(sim.px, gy + 0.06, sim.pz);
  blob.scale.setScalar(1 + clamp(sim.py - gy, 0, 12) * 0.04);
}
function placeAt(i: number) {
  resetRun(sim, track, i);
  syncCarTransform();
  resetMotion(motion, DEFAULT_TUNING, sim.px, sim.py, sim.pz, sim.heading);
  trailSm = 0;
  trailTick = 0;
  snapView = true;
}
function doRespawn() {
  // R RESCUE (+3s): mid-run rescue to the last clean snapshot (instant, real
  // 3000ms race penalty with an honest ghost-timestamp gap). Falling off an
  // open edge no longer discards the run. From the finish panel R retries the
  // run instead (nothing to rescue once finished — simRespawn is a no-op).
  if (state === 'finish') { startRun(true); return; }
  if (state !== 'run') return;
  simRespawn(sim);
  syncCarTransform();
  resetMotion(motion, DEFAULT_TUNING, sim.px, sim.py, sim.pz, sim.heading);
  trailSm = 0;
  trailTick = 0;
  snapView = true;
  // Surface the charge in its own element so it can never overwrite an urgent
  // STUCK / OFF COURSE message, then release the message (no longer stuck).
  showPenaltyToast(performance.now());
  setMsg('');
}
placeAt(0);
camera.position.set(sim.px - 10, sim.py + 6, sim.pz - 10);
camera.lookAt(sim.px, sim.py + 1, sim.pz);

let hasRunOnce = false; // session flag: first GO gets the full 3-2-1, retries get READY-GO
let cdLen = 3.1;
function startRun(quick = false) {
  // Full retry: complete reset of input, recording, splits, camera and loop
  // debt together, then a quick READY start. The deliberate 3-2-1 only ever
  // plays for the first start of the session (see ./retry-control.ts).
  clearAllInput();
  panel.classList.add('hidden');
  document.body.classList.add('racing');
  document.body.classList.remove('watching');
  car.visible = true;
  state = 'countdown'; countdownT = 0; acc = 0;
  cdLen = countdownLen(quick, hasRunOnce);
  hasRunOnce = true;
  placeAt(0);
  wallKick = 0;
  surgeVis = 0;
  splitExpiry = 0;
  // Reset every displayed run value before the first READY frame: the old
  // timer, progress fill, delta, split toast and F-telemetry must not survive
  // the countdown (the countdown branch paints msg only). Retained step-info
  // is neutralized too, and stale skid residue is cleared.
  const display = retryDisplayReset();
  timeEl.textContent = display.time;
  progEl.style.width = `${display.progressPct}%`;
  deltaEl.textContent = display.delta; deltaEl.className = '';
  splitEl.textContent = display.split;
  debugEl.textContent = display.debug;
  lastInfo = neutralRunInfo();
  setMsg('');
  clearPenalty();
  clearSkids();
  clearExitFeedback();
  pendingDrift = null;
  paused = false;
  pauseOverlay.classList.add('hidden');
  audio.reset();
  speedEl.textContent = '0 km/h';
  lessonEl.textContent = '';
  // Practice progress is intentionally NOT reset here: retries continue the
  // same session objective (persisted under the course key). The first-time
  // lesson likewise keeps its own progress across retries.
  runSplits = splitIdx.map(() => null);
  camera.position.set(motion.px, motion.py, motion.pz);
  camera.lookAt(motion.lx, motion.ly, motion.lz);
  camera.fov = motion.fov;
  camera.updateProjectionMatrix();
  ghostCar.visible = !!sharedGhost;
}
(document.getElementById('drivebtn') as HTMLButtonElement).onclick = () => { ensureAudio(); startRun(state === 'finish'); };
canvas.addEventListener('pointerdown', () => { ensureAudio(); if (state === 'menu') startRun(); });

// wordle-style share: best ghost embedded in link (?d=&t=&g= via ./share.ts).
// buildShareUrl drops corrupt ghosts; shareRun reports the truthful outcome.
(document.getElementById('sharebtn') as HTMLButtonElement).onclick = async () => {
  const isFinish = state === 'finish';
  const ms = isFinish ? lastFinalMs : best;
  let g = '';
  if (isFinish) g = encodeGhost(sim.rec, lastFinalMs, GHOST_URL_BUDGET, expectedTrack);
  else g = lsGet(ghostKey) || '';
  // Course mode travels with the link so the receiver resolves the same course;
  // daily keeps its `d` date and needs no mode param.
  const url = appendCourseMode(
    buildShareUrl(location.origin, location.pathname, { day, timeMs: ms, ghost: g }),
    mode,
  );
  const hasGhost = url.includes('&g=');
  const text = buildShareText(day, ms, url);
  const outcome = await shareRun(
    {
      requestNativeShare: (d) => navigator.share(d),
      copyText: (t) => navigator.clipboard.writeText(t),
    },
    { title: course.title, text, url, hasGhost, isFinish },
    shouldUseNativeShare(coarse, typeof navigator.share === 'function'),
  );
  presult.textContent = outcome.message;
  presult.classList.remove('finish');
};

// ---------- physics wrapper: sim advances, this renders ----------
const FWD = new THREE.Vector3();
function step(dt: number): StepInfo {
  pollKeys();
  const steer = clamp(input.steer, -1, 1);
  const info = simStep(sim, track, { steer, drift: input.drift }, dt);
  // Capture the last one-shot drift event of this step so lesson/practice/exit
  // feedback react to the actual reward event, never to a phase guess.
  if (sim.rhythmOut.event !== 'none') pendingDrift = { event: sim.rhythmOut.event, grade: sim.rhythmOut.grade };
  if (info.finished) finishRun();
  // step-event visuals only (pose rendering happens per render frame, interpolated)
  // Drift trails scale with the actual slide (smoothed drift amount +
  // slip angle), not the drifting boolean: faint/thin/sparse at the
  // threshold, wide/dark/dense + strong dust when committed.
  trailSm = trailSmooth(
    trailSm,
    trailTarget(sim.driftAmt, Math.abs(info.slip), info.spd, sim.grounded, info.drifting),
    dt,
  );
  trailTick++;
  const burst = dustBurst(trailSm);
  if (burst > 0) {
    const spread = dustSpread(trailSm);
    for (let k = 0; k < burst; k++) visuals.dust.spawn(sim.px, sim.py, sim.pz, spread);
  }
  const every = trailSpawnEvery(trailSm);
  if (every > 0 && trailTick % every === 0) {
    const groundY = surfaceYAt(sim.groundIdx, sim.px, sim.pz) + 0.2;
    const fx = Math.sin(sim.heading), fz = Math.cos(sim.heading);
    const rx = -fz, rz = fx;
    const w = trailWidth(trailSm), len = trailLength(trailSm), shade = trailShade(trailSm);
    for (const sd of [1, -1]) {
      skidAt(sim.px - fx * 1.5 + rx * 1.0 * sd, groundY + 0.22, sim.pz - fz * 1.5 + rz * 1.0 * sd, sim.heading, w, len, shade);
    }
  }
  // Off-road dirt feedback: restrained slip dust kicked up while sliding on the
  // plain at speed. sim.py is already grounded on the shared surface, so the
  // dust sits on the dirt rather than at the nearest road height.
  if (info.offroad && sim.grounded && info.spd > 12 && trailTick % 2 === 0) {
    visuals.dust.spawn(sim.px, sim.py + 0.1, sim.pz, 2.4);
  }
  FWD.set(sim.vx, 0, sim.vz);
  return info;
}
// ---------- finish (atomic: one exact ms everywhere, no ticks after) ----------
function finishRun() {
  if (state !== 'run') return;
  state = 'finish';
  acc = 0;
  resetMotion(motion, DEFAULT_TUNING, sim.px, sim.py, sim.pz, sim.heading);
  snapView = true;
  const finalMs = Math.round(sim.raceMs);
  lastFinalMs = finalMs;
  const prevBest = best; // captured before the PB write below
  // A completed race is the only run kind allowed to write a PB; watching a
  // reference demonstration never reaches here, and the guard keeps that true.
  if (recordsPB('race') && (!best || finalMs < best)) {
    best = finalMs;
    lsSet(bestKey, String(best));
    const encoded = encodeGhost(sim.rec, finalMs, GHOST_URL_BUDGET, expectedTrack);
    lsSet(ghostKey, encoded);
    // Session-live rival: the next retry races the new best immediately, no
    // reload. Fail-closed semantics unchanged (bad data races nothing).
    try {
      const fresh = decodeGhost(lsGet(ghostKey));
      pbGhost = fresh && fresh.p.length > 1 ? fresh : null;
      selectRival();
    } catch { /* keep previous rival */ }
  }
  refreshBest();
  refreshRefButtons();
  const isRecord = best === finalMs;
  const medal = medalFor(finalMs, course.targets);
  ptitle.textContent = isRecord ? 'NEW BEST!' : 'FINISH!';
  const verdict = !prevBest || isRecord
    ? (prevBest ? `by ${fmt(prevBest - finalMs)}` : 'first finished run!')
    : `+${fmt(finalMs - prevBest)} vs best`;
  const medalStr = medal === 'none' ? 'no medal' : `${medal.toUpperCase()} medal`;
  presult.textContent = `${fmt(finalMs)} · ${medalStr} · ${verdict} · best ${fmt(best)}${sharedTime ? ` · friend ${fmt(sharedTime)}` : ''}`;
  presult.classList.add('finish');
  // Real sector gains/losses vs the racing ghost only; blank with no valid ghost.
  const ghostSplits = sharedGhost ? splitIdx.map((j) => ghostTimeAt(sharedGhost as GhostData, track.x[j], track.z[j])) : [];
  const sectors = sectorSummaryText(sectorDeltas(runSplits, ghostSplits));
  renderFinishTargets(ghostIsReference ? 'REFERENCE · ' : '', nextTargetText(best, course.targets), sectors);
  document.body.classList.remove('racing');
  panel.classList.remove('hidden');
  const driveBtn = document.getElementById('drivebtn') as HTMLButtonElement;
  driveBtn.textContent = 'RETRY (Enter)';
  driveBtn.focus();
  setMsg('');
  // The toast expiry only runs in the run branch, so a rescue on the finish
  // step would otherwise leave "+3s" on screen through the result panel.
  clearPenalty();
  clearExitFeedback();
  if (mode === 'practice') lessonEl.textContent = practiceText(practice, coarse);
}

// ---------- main loop: fixed-step sim, render interp-lite ----------
const timeEl2 = timeEl;
let last = performance.now();
let acc = 0;
const DT = 1 / 60;
// Keep the huge uniform dirt plain centred under the camera in fixed 500u
// steps. A flat untextured plane is identical under any whole-grid shift, so
// this is invisible while guaranteeing ground out past the camera far plane.
const GROUND_SNAP = GROUND_PLAIN_SNAP;
function recenterGround() {
  if (!groundPlain) return;
  groundPlain.position.x = Math.round(camera.position.x / GROUND_SNAP) * GROUND_SNAP;
  groundPlain.position.z = Math.round(camera.position.z / GROUND_SNAP) * GROUND_SNAP;
  // The road height varies along the course, so the flat far field rides at
  // the shared apron level under the car: the seam where the apron ribbon
  // ends always meets the plane within road-grade of the car. This follows
  // the gate-free ground station (the sample the physics grounds the car on),
  // NOT the frozen progress index: following lastIdx sank the car below the
  // rendered dirt whenever the road height changed after the progress gate
  // froze (see docs/agents/offtrack-sink2-2026-09-17.md).
  const li = Math.min(Math.max(sim.groundIdx | 0, 0), track.n - 1);
  groundPlain.position.y = offroadLevel(track.y[li]) - 0.05;
}
function renderScene() {
  recenterGround();
  renderer.render(scene, camera);
}
function frame(now: number) {
  requestAnimationFrame(frame);
  let dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  if (dt > 0) fpsEMA = lerp(fpsEMA, 1 / dt, 0.05);
  // A paused race, countdown or reference demo freezes on the last frame.
  if (paused && (state === 'countdown' || state === 'run' || state === 'watch')) {
    renderScene();
    return;
  }
  // Reference demonstration: play the genuine recorded route with a chase
  // camera and replay telemetry derived from the recording, then return to the
  // menu. Never steps the sim, never writes a PB.
  if (state === 'watch') {
    const ref = course.reference;
    if (!ref) { toMenu(); return; }
    watchT += dt * 1000;
    const lastT = ref.t;
    const shown = Math.min(watchT, lastT);
    const gp = sampleGhost(ref, shown);
    const back = sampleGhost(ref, Math.max(0, shown - 60));
    const spd = Math.hypot(gp.x - back.x, gp.z - back.z) / 0.06;
    timeEl.textContent = fmt(shown);
    speedEl.textContent = `${speedKmh(spd)} km/h`;
    progEl.style.width = `${lastT > 0 ? Math.min(100, (shown / lastT) * 100) : 0}%`;
    ghostCar.visible = true;
    ghostCar.position.set(gp.x, gp.y, gp.z);
    ghostCar.rotation.set(0, gp.h, 0);
    camera.position.set(gp.x - Math.sin(gp.h) * 12, gp.y + 5, gp.z - Math.cos(gp.h) * 12);
    camera.lookAt(gp.x, gp.y + 1, gp.z);
    if (watchT > lastT + 700) {
      setMsg('REFERENCE COMPLETE');
      if (watchT > lastT + 1600) { toMenu(); return; }
    }
    renderScene();
    return;
  }
  if (state === 'menu') {
    // slow orbit behind start
    const t = now / 1000;
    camera.position.set(pts[0].x + Math.cos(t * 0.15) * 58, pts[0].y + 24, pts[0].z + Math.sin(t * 0.15) * 58);
    camera.lookAt(pts[0].x, pts[0].y + 1, pts[0].z);
    ptitle.textContent = course.title.toUpperCase();
    pdateEl.textContent = mode === 'daily' ? day : '';
    pubEl.textContent = course.description;
    renderMenuTargets();
    presult.textContent = menuResultText();
    presult.classList.remove('finish');
    phintEl.innerHTML = coarse
      ? 'Mobile: left stick steers · tap DRIFT to slide · steer back the other way to exit · RESCUE returns to the track (+3s)<br/>Controls: tap PAUSE to stop the clock · MENU to quit · RETRY restarts'
      : 'PC: ← → steer · ↓ / space drift · R rescue (+3s) · Enter retry · Esc / P pause<br/>Drift: hold a direction, tap DRIFT to start the slide, hold it, then countersteer to exit';
    panel.classList.remove('hidden');
    (document.getElementById('drivebtn') as HTMLButtonElement).textContent = 'DRIVE';
    deltaEl.textContent = ''; deltaEl.className = ''; splitEl.textContent = '';
    speedEl.textContent = '0 km/h';
    lessonEl.textContent = '';
    renderScene();
    return;
  }
  if (state === 'countdown') {
    countdownT += dt;
    if (cdLen > 1) {
      const k = 3 - Math.floor(countdownT);
      setMsg(k > 0 ? String(k) : 'GO!', true, k <= 0);
    } else {
      const go = countdownT > cdLen - 0.25;
      setMsg(go ? 'GO!' : 'READY', true, go);
    }
    if (countdownT > cdLen) { state = 'run'; setMsg(''); }
    renderScene();
    return;
  }
  if (state === 'run' || state === 'finish') {
    if (state === 'run') {
      acc += dt;
      let stepsRan = 0;
      let fresh: StepInfo | null = null;
      while (acc >= DT && stepsRan < 4 && state === 'run') { fresh = step(DT); acc -= DT; stepsRan++; }
      acc = clampAcc(acc); // P2 overload policy: bounded debt, no spiral (no-op at normal rates)
      // retained display state: zero-step render frames keep last stepped values
      lastInfo = updateDisplay(lastInfo, stepsRan, fresh ?? lastInfo);
      const info = lastInfo;
      if (fresh && fresh.wallHit === true) wallKick = Math.min(1, (fresh.wallSev ?? 0) + 0.25);
      const alpha = snapView ? 1 : clamp(acc / DT, 0, 1);
      snapView = false;
      const rp = interpPose(sim, alpha);
      const ghostMs = lerp(sim.prevRaceMs, sim.raceMs, alpha);
      timeEl2.textContent = fmt(sim.raceMs);
      speedEl.textContent = `${speedKmh(info.spd)} km/h`;
      progEl.style.width = `${(info.sIdx / (track.n - 1)) * 100}%`;
      // P0-5/P0-7: live delta + gap vs the racing ghost at your position.
      // Blank when no matched ghost races (never fabricate a target).
      if (sharedGhost && rival) {
        const gt = ghostTimeAt(sharedGhost, sim.px, sim.pz);
        if (gt >= 0) {
          const d = sim.raceMs - gt;
          const label = ghostIsReference ? 'REF' : rival.kind === 'friend' ? 'FRIEND' : 'PB';
          deltaEl.textContent = gapText(d, info.spd, label);
          deltaEl.className = d < 0 ? 'ahead' : 'behind';
        } else { deltaEl.textContent = ''; deltaEl.className = ''; }
      } else { deltaEl.textContent = ''; deltaEl.className = ''; }
      // P0-6: split crossings vs the same ghost, transient toast (<=1.5s).
      for (let k = 0; k < splitIdx.length; k++) {
        if (runSplits[k] === null && info.sIdx >= splitIdx[k]) {
          runSplits[k] = Math.round(sim.raceMs);
          if (sharedGhost) {
            const j = splitIdx[k];
            const gt = ghostTimeAt(sharedGhost, track.x[j], track.z[j]);
            const splitLabel = ghostIsReference ? 'REF' : rival && rival.kind === 'friend' ? 'FRIEND' : 'PB';
            splitEl.textContent = gt >= 0 ? `S${k + 1} ${gapText(runSplits[k]! - gt, info.spd, splitLabel)}` : `S${k + 1} ${fmt(runSplits[k]!)}`;
          } else {
            splitEl.textContent = `S${k + 1} ${fmt(runSplits[k]!)}`;
          }
          splitExpiry = now + 1500;
        }
      }
      if (splitEl.textContent !== '' && now > splitExpiry) splitEl.textContent = '';
      if (penaltyExpiry && now > penaltyExpiry) clearPenalty();
      // Exit feedback + lesson + practice all react to the actual one-shot drift
      // event captured in step(), never to a phase guess.
      const driftEvent = pendingDrift ? pendingDrift.event : 'none';
      const driftGrade = pendingDrift ? pendingDrift.grade : 'none';
      pendingDrift = null;
      const fb = exitFeedback(driftEvent, driftGrade);
      if (fb) {
        exitfbEl.textContent = fb;
        exitfbEl.classList.add('show');
        exitFbExpiry = now + 1200;
        audio.oneShot('cleanExit', 0.5);
        // One-shot visual surge on the real reward event (bounded, decays).
        surgeVis = Math.min(1, 0.35 + (sim.rhythm.lastQuality ?? 0) * 0.65);
      }
      if (exitFbExpiry && now > exitFbExpiry) { exitfbEl.classList.remove('show'); exitfbEl.textContent = ''; exitFbExpiry = 0; }
      if (mode === 'practice') {
        if (recordPracticeExit(practice, driftEvent, driftGrade)) savePractice();
        lessonEl.textContent = practiceText(practice, coarse);
      } else if (!lessonSeen) {
        advanceLesson(lesson, { event: driftEvent, grade: driftGrade, phase: sim.rhythmOut.phase, slideAge: sim.rhythm.slideAge });
        if (lesson.step === 'complete') { lessonSeen = true; lsSet('canyon-drift-lesson-seen', '1'); lessonEl.textContent = ''; }
        else lessonEl.textContent = lessonText(lesson.step, coarse);
      } else {
        lessonEl.textContent = '';
      }
      // Audio: continuous engine/slip layers plus physical one-shots from edges.
      audio.update(dt, {
        speed: info.spd, maxSpeed: SPEED_FULL,
        load: info.offroad ? 0.8 : Math.min(1, sim.driftAmt),
        slip: Math.min(1, sim.driftAmt),
        drifting: info.drifting, grounded: sim.grounded,
      });
      if (fresh) {
        if (fresh.wallHit === true) audio.oneShot('crash', clamp(fresh.wallSev ?? 0.5, 0.2, 1));
        else if (fresh.landed) audio.oneShot('land', clamp(Math.abs(fresh.landV) / 12, 0.2, 1));
      }
      if (info.stuckMs > 1500) setMsg(stuckPrompt(coarse));
      else if (info.oobMs > 900) setMsg(offCoursePrompt(coarse));
      else if (info.offroad && sim.grounded && info.spd > 12) setMsg('LOW GRIP — DIRT');
      else if (info.drifting) setMsg('DRIFT');
      else if (msgEl.textContent === 'DRIFT' || msgEl.textContent.startsWith('STUCK') || msgEl.textContent.startsWith('OFF COURSE') || msgEl.textContent === 'LOW GRIP — DIRT') setMsg('');
      // ghost playback: interpolated, holds finish pose (never loops)
      if (sharedGhost && sharedGhost.p.length > 1) {
        const gp = sampleGhost(sharedGhost, ghostMs);
        ghostCar.position.set(gp.x, gp.y, gp.z);
        ghostCar.rotation.set(0, gp.h, 0);
      }
      // car + blob follow the interpolated pose; lean rides the smoothed
      // drift envelope (no pops on drift enter/exit)
      car.position.set(rp.x, rp.y, rp.z);
      wallKick *= Math.exp(-5 * dt);
      if (wallKick < 0.001) wallKick = 0;
      surgeVis *= Math.exp(-4.5 * dt);
      if (surgeVis < 0.001) surgeVis = 0;
      const shudder = wallKick > 0 ? Math.sin(now * 0.09) * 0.18 * wallKick : 0;
      // Visual-only body exaggeration: extra yaw exposes the real slide angle
      // (bounded) and the clean-exit surge reads as a short nose-up/roll kick.
      const slipVis = clamp(info.slip, -0.9, 0.9);
      const yawVis = -slipVis * (0.15 + 0.35 * motion.driftMix);
      car.rotation.set(
        rp.pitch - surgeVis * 0.05,
        rp.h + yawVis,
        -input.steer * (0.06 + motion.driftMix * 0.16) - surgeVis * 0.07 + shudder,
      );
      const tail = car.userData.tail as THREE.MeshBasicMaterial | undefined;
      if (tail) tail.color.setHex(motion.driftMix > 0.4 || input.drift ? 0xff5a2a : 0xff2a2a);
      const groundY = surfaceYAt(info.gIdx ?? info.sIdx, rp.x, rp.z) + 0.2;
      blob.position.set(rp.x, groundY + 0.06, rp.z);
      blob.scale.setScalar(1 + clamp(rp.y - groundY, 0, 12) * 0.04);
      // deterministic chase camera (./render-motion.ts): lagged velocity-led
      // yaw, damped position/look/FOV, bounded landing + wall impulses.
      // Wall input reuses the sim's severity-tagged contact fields (read-only).
      updateMotion(motion, DEFAULT_TUNING, {
        dt,
        px: rp.x, py: rp.y, pz: rp.z, heading: rp.h,
        vx: sim.vx, vz: sim.vz, speed: info.spd, drifting: info.drifting,
        tangentX: track.tx[info.sIdx], tangentZ: track.tz[info.sIdx], hasTangent: true,
        landed: fresh ? fresh.landed : false, landV: fresh ? fresh.landV : 0,
        wallHit: fresh ? fresh.wallHit === true : false,
        wallVn: fresh ? (fresh.wallSev ?? 0) * 25 : 0,
      });
      cameraOutput(motion, camOut);
      camera.position.set(camOut.x, camOut.y, camOut.z);
      camera.lookAt(motion.lx, motion.ly, motion.lz);
      if (Math.abs(camera.fov - motion.fov) > 1e-3) {
        camera.fov = motion.fov;
        camera.updateProjectionMatrix();
      }
      for (const s of wheels.steer) s.rotation.y = input.steer * 0.42;
      for (const s of wheels.spin) s.rotation.x += (info.spd / 0.45) * dt;
      if (showDebug) {
        const slipDeg = (info.slip * 180 / Math.PI).toFixed(1);
        const yawDeg = (info.yawRate * 180 / Math.PI).toFixed(0);
        debugEl.textContent =
          `FPS ${fpsEMA.toFixed(0)} dt ${(dt * 1000).toFixed(2)}ms steps ${stepsRan} a ${alpha.toFixed(2)}` +
          ` | spd ${info.spd.toFixed(1)} f ${info.fSpeed.toFixed(1)} l ${info.lSpeed.toFixed(1)}` +
          ` slip ${slipDeg} yaw ${yawDeg}/s ${info.surface}${info.drifting ? ' DRIFT' : ''} fov ${camera.fov.toFixed(1)}` +
          ` hold ${sim.driftHold.toFixed(2)} exit ${sim.exitT.toFixed(2)}` +
          ` ${info.driftPhase ?? 'idle'} q ${(info.exitQuality ?? 0).toFixed(2)} rb ${(info.rhythmBoost ?? 0).toFixed(1)} trl ${trailSm.toFixed(2)}` +
          ` ch ${motion.camH.toFixed(2)} imp ${impulseLength(motion).toFixed(2)} oob ${(info.oobMs / 1000).toFixed(1)}s`;
      }
    }
    // dust anim (preallocated ring: decay + rise, dead slots parked at y=-100)
    visuals.update(dt);
    dustGeo.attributes.position.needsUpdate = true;
    renderScene();
  }
}
requestAnimationFrame(frame);
