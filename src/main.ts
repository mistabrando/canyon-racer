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
import { acceptDailyTrack, TRACK_HALF_W, arcLengths, markerStations } from './trackgen';
import { planBarriers, barrierAt } from './barrier-plan';
import {
  mountVisuals, trailTarget, trailSmooth, trailWidth, trailLength,
  trailShade, trailSpawnEvery, dustBurst, dustSpread,
} from './visuals';
import { createMotionState, resetMotion, updateMotion, cameraOutput, impulseLength, DEFAULT_TUNING } from './render-motion';
import { mountEnvironment } from './environment';
import type { EnvKit } from './environment';
function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// ---------- config from URL (parsed + validated by ./share.ts, never throws) ----------
const parsed = parseShareUrl(location.search);
const day: string = parsed.day || todayStr();
const sharedTime: number = parsed.timeMs;
let pbGhost: GhostData | null = null;
try {
  const pb = decodeGhost(localStorage.getItem(`canyon-ghost-${day}`));
  if (pb && pb.p.length > 1) pbGhost = pb;
} catch { /* ignore */ }
// Identity-gated rival (./ghost.ts): only a course-matched ghost races.
// Resolution happens after the daily track loads (checksum = geometry proof).
let rival: RivalGhost | null = null;
let sharedGhost: GhostData | null = null;
let rivalNotice = '';

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

// ---------- daily canyon sprint: grammar-built track, verified on acceptance ----------
const rng = mulberry32(hashSeed('canyon-' + day));
// Grammar-based daily sprint (see ./trackgen.ts): explicit corner events verified
// against the measured handling envelope before acceptance.
// The decor rng below stays independent of track acceptance.
// Accepted-track diagnostics ("canyon-debug" in console).
const daily = acceptDailyTrack(day);
if (typeof console !== 'undefined') console.log('[canyon-debug] track', day, 'attempt', daily.attempt, 'fallback', daily.fallback, 'len', daily.stats.length.toFixed(0), 'est', daily.estTimeS.toFixed(1) + 's');
const pts = daily.points.map((p) => new THREE.Vector3(p.x, p.y, p.z));
const HALF_W = TRACK_HALF_W;
const expectedTrack = makeExpectedTrack(day, daily.checksum);
{
  const decision = resolveRivalIdentity({ shared: parsed.ghost, pb: pbGhost, expected: expectedTrack });
  rival = decision.rival;
  sharedGhost = rival ? rival.ghost : null;
  rivalNotice = decision.notice;
  if (rivalNotice && typeof console !== 'undefined') console.log('[canyon-debug] rival', decision.status, rivalNotice);
}
const track = trackFromPoints(pts.map((p) => ({ x: p.x, y: p.y, z: p.z })), HALF_W);
const tangents: THREE.Vector3[] = track.tx.map((x, k) => new THREE.Vector3(x, 0, track.tz[k]));
const normals: THREE.Vector3[] = track.nx.map((x, k) => new THREE.Vector3(x, 0, track.nz[k]));
// Arc-distance table for flow markers: dashes/curbs/posts keyed to metres of
// road, not sample index, so readability holds at any sample spacing.
const cum = arcLengths(daily.points);
// Explicit barrier contract (Cycle 7): only these spans collide AND render.
// Open edges allow off-course flight/falls; sim gates wall contact on the
// same plan, visuals render rails exactly on it — one mask, no divergence.
track.barrier = planBarriers(cum[cum.length - 1], daily.stats.events, daily.crestS);
if (typeof console !== 'undefined') console.log('[canyon-debug] barriers',
  `spans=${track.barrier.spans.length}`);
// P0 splits: 3 grammar-derived checkpoints (S1/S2/S3) + finish. Positions are
// arc metres; sample indices via the cum table. No track format change.
const splitIdx = splitPositions(daily.stats.events).map((sp) => splitSampleIdx(cum, sp));
let runSplits: (number | null)[] = splitIdx.map(() => null);
let splitExpiry = 0;

// ground
{
  const end = pts[pts.length - 1];
  const midX = (pts[0].x + end.x) / 2, midZ = (pts[0].z + end.z) / 2;
  const g = new THREE.Mesh(
    new THREE.PlaneGeometry(2600, 2600),
    new THREE.MeshLambertMaterial({ color: 0xc96f3f })
  );
  g.rotation.x = -Math.PI / 2; g.position.set(midX, -2.5, midZ);
  scene.add(g);
  const mesa = new THREE.Mesh(
    new THREE.CylinderGeometry(760, 820, 24, 28),
    new THREE.MeshLambertMaterial({ color: 0xa9502c })
  );
  mesa.position.set(midX, -14, midZ);
  scene.add(mesa);
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
  events: daily.stats.events, crestS: daily.crestS,
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
  events: daily.stats.events, crestS: daily.crestS,
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
ghostCar.visible = !!sharedGhost;
scene.add(ghostCar);
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
{
  const hide = new THREE.Matrix4().makeScale(0, 0, 0);
  for (let i = 0; i < SKID_N; i++) {
    skids.setMatrixAt(i, hide);
    skids.setColorAt(i, SKID_FAINT);
  }
  skids.instanceMatrix.needsUpdate = true;
  if (skids.instanceColor) skids.instanceColor.needsUpdate = true;
}
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
resetBtn.addEventListener('pointerdown', (ev) => { ev.preventDefault(); doRespawn(); });
stick.addEventListener('pointerdown', (ev) => {
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
function pollKeys() {
  if (input.left && !input.right) input.steer = -1;
  else if (input.right && !input.left) input.steer = 1;
  else input.steer = tc.steer;
  input.drift = input.keyDrift || tc.drift;
}

// ---------- race state (simulation lives in sim.ts; this file renders it) ----------
let state: 'menu' | 'countdown' | 'run' | 'finish' = 'menu';
let countdownT = 0;
let lastFinalMs = 0;
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
let lastInfo: StepInfo = {
  spd: 0, drifting: false, sIdx: 0, pitch: 0,
  launched: false, landed: false, finished: false,
  fSpeed: 0, lSpeed: 0, slip: 0, yawRate: 0,
  offroad: false, surface: 'road', landV: 0,
  impact: 0, scraping: false, stuckMs: 0, oobMs: 0,
};
const bestKey = `canyon-best-${day}`;
let best = Number(localStorage.getItem(bestKey) || 0);
const timeEl = document.getElementById('time')!;
const bestEl = document.getElementById('best')!;
const msgEl = document.getElementById('msg')!;
const progEl = document.getElementById('progfill')!;
const deltaEl = document.getElementById('delta')!;
const splitEl = document.getElementById('split')!;
const panel = document.getElementById('panel')!;
const presult = document.getElementById('presult')!;
const ptitle = document.getElementById('ptitle')!;
const debugEl = document.getElementById('debug')!;
(document.getElementById('day') as HTMLElement).textContent = `CANYON DAILY · ${day}`;
function refreshBest() { bestEl.textContent = best > 0 ? `BEST ${fmt(best)}` : (sharedTime > 0 ? `FRIEND ${fmt(sharedTime)}` : 'BEST —'); }
refreshBest();

// Apply sim pose to meshes (car yaw + road/trajectory pitch + blob shadow).
function syncCarTransform() {
  car.position.set(sim.px, sim.py, sim.pz);
  car.rotation.set(sim.pitch, sim.heading, 0);
  const gy = track.y[sim.lastIdx] + 0.2;
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
  // R RESET: mid-run rescue to the last clean snapshot (instant, +3000ms race
  // penalty with an honest ghost-timestamp gap). Falling off an open edge no
  // longer discards the run. From the finish panel R retries the run instead
  // (nothing to rescue once finished — simRespawn is a no-op there).
  if (state === 'finish') { startRun(true); return; }
  if (state !== 'run') return;
  simRespawn(sim);
  syncCarTransform();
  resetMotion(motion, DEFAULT_TUNING, sim.px, sim.py, sim.pz, sim.heading);
  trailSm = 0;
  trailTick = 0;
  snapView = true;
  msgEl.textContent = '';
}
placeAt(0);
camera.position.set(sim.px - 10, sim.py + 6, sim.pz - 10);
camera.lookAt(sim.px, sim.py + 1, sim.pz);

let hasRunOnce = false; // session flag: first GO gets the full 3-2-1, retries get READY-GO
let cdLen = 3.1;
function startRun(quick = false) {
  panel.classList.add('hidden');
  state = 'countdown'; countdownT = 0; acc = 0;
  cdLen = quick && hasRunOnce ? 0.7 : 3.1;
  hasRunOnce = true;
  placeAt(0);
  deltaEl.textContent = ''; deltaEl.className = '';
  splitEl.textContent = '';
  runSplits = splitIdx.map(() => null);
  camera.position.set(motion.px, motion.py, motion.pz);
  camera.lookAt(motion.lx, motion.ly, motion.lz);
  camera.fov = motion.fov;
  camera.updateProjectionMatrix();
  ghostCar.visible = !!sharedGhost;
}
(document.getElementById('drivebtn') as HTMLButtonElement).onclick = () => startRun(state === 'finish');
canvas.addEventListener('pointerdown', () => { if (state === 'menu') startRun(); });

// wordle-style share: best ghost embedded in link (?d=&t=&g= via ./share.ts).
// buildShareUrl drops corrupt ghosts; shareRun reports the truthful outcome.
(document.getElementById('sharebtn') as HTMLButtonElement).onclick = async () => {
  const isFinish = state === 'finish';
  const ms = isFinish ? lastFinalMs : best;
  let g = '';
  if (isFinish) g = encodeGhost(sim.rec, lastFinalMs, GHOST_URL_BUDGET, expectedTrack);
  else { try { g = localStorage.getItem(`canyon-ghost-${day}`) || ''; } catch { g = ''; } }
  const url = buildShareUrl(location.origin, location.pathname, { day, timeMs: ms, ghost: g });
  const hasGhost = url.includes('&g=');
  const text = buildShareText(day, ms, url);
  const outcome = await shareRun(
    {
      requestNativeShare: (d) => navigator.share(d),
      copyText: (t) => navigator.clipboard.writeText(t),
    },
    { title: 'Canyon Daily', text, url, hasGhost, isFinish },
    shouldUseNativeShare(coarse, typeof navigator.share === 'function'),
  );
  presult.textContent = outcome.message;
};

// ---------- physics wrapper: sim advances, this renders ----------
const FWD = new THREE.Vector3();
function step(dt: number): StepInfo {
  pollKeys();
  const steer = clamp(input.steer, -1, 1);
  const info = simStep(sim, track, { steer, drift: input.drift }, dt);
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
    const groundY = track.y[sim.lastIdx] + 0.2;
    const fx = Math.sin(sim.heading), fz = Math.cos(sim.heading);
    const rx = -fz, rz = fx;
    const w = trailWidth(trailSm), len = trailLength(trailSm), shade = trailShade(trailSm);
    for (const sd of [1, -1]) {
      skidAt(sim.px - fx * 1.5 + rx * 1.0 * sd, groundY + 0.22, sim.pz - fz * 1.5 + rz * 1.0 * sd, sim.heading, w, len, shade);
    }
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
  if (!best || finalMs < best) {
    best = finalMs;
    try { localStorage.setItem(bestKey, String(best)); } catch { /* quota */ }
    try { localStorage.setItem(`canyon-ghost-${day}`, encodeGhost(sim.rec, finalMs, GHOST_URL_BUDGET, expectedTrack)); } catch { /* quota */ }
    // Session-live rival: the next retry races the new best immediately, no
    // reload. Fail-closed semantics unchanged (bad data races nothing).
    try {
      const fresh = decodeGhost(localStorage.getItem(`canyon-ghost-${day}`));
      pbGhost = fresh && fresh.p.length > 1 ? fresh : null;
      const decision = resolveRivalIdentity({ shared: parsed.ghost, pb: pbGhost, expected: expectedTrack });
      rival = decision.rival;
      sharedGhost = rival ? rival.ghost : null;
      rivalNotice = decision.notice;
    } catch { /* keep previous rival */ }
  }
  refreshBest();
  const isRecord = best === finalMs;
  ptitle.textContent = isRecord ? 'NEW BEST!' : 'FINISH!';
  const verdict = !prevBest || isRecord
    ? (prevBest ? `by ${fmt(prevBest - finalMs)}` : 'first finished run!')
    : `+${fmt(finalMs - prevBest)} vs best`;
  presult.textContent = `${fmt(finalMs)} · ${verdict} · best ${fmt(best)}${sharedTime ? ` · friend ${fmt(sharedTime)}` : ''}`;
  panel.classList.remove('hidden');
  const driveBtn = document.getElementById('drivebtn') as HTMLButtonElement;
  driveBtn.textContent = 'RETRY (Enter)';
  driveBtn.focus();
  msgEl.textContent = '';
}

// ---------- main loop: fixed-step sim, render interp-lite ----------
const timeEl2 = timeEl;
let last = performance.now();
let acc = 0;
const DT = 1 / 60;
function frame(now: number) {
  requestAnimationFrame(frame);
  let dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  if (dt > 0) fpsEMA = lerp(fpsEMA, 1 / dt, 0.05);
  if (state === 'menu') {
    // slow orbit behind start
    const t = now / 1000;
    camera.position.set(pts[0].x + Math.cos(t * 0.15) * 58, pts[0].y + 24, pts[0].z + Math.sin(t * 0.15) * 58);
    camera.lookAt(pts[0].x, pts[0].y + 1, pts[0].z);
    ptitle.textContent = `CANYON DAILY · ${day}`;
    presult.textContent = `${best ? `Your best ${fmt(best)} · ` : ''}${sharedTime ? `Friend ${fmt(sharedTime)} · ` : ''}${rivalNotice ? rivalNotice + ' ' : ''}${rival || sharedTime ? rivalLabel(rival, sharedTime) : 'Point-to-point sprint · flat out, drift the hairpins'}`;
    panel.classList.remove('hidden');
    (document.getElementById('drivebtn') as HTMLButtonElement).textContent = 'DRIVE';
    deltaEl.textContent = ''; deltaEl.className = ''; splitEl.textContent = '';
    renderer.render(scene, camera);
    return;
  }
  if (state === 'countdown') {
    countdownT += dt;
    if (cdLen > 1) {
      const k = 3 - Math.floor(countdownT);
      msgEl.textContent = k > 0 ? String(k) : 'GO!';
    } else {
      msgEl.textContent = countdownT > cdLen - 0.25 ? 'GO!' : 'READY';
    }
    if (countdownT > cdLen) { state = 'run'; msgEl.textContent = ''; }
    renderer.render(scene, camera);
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
      progEl.style.width = `${(info.sIdx / (track.n - 1)) * 100}%`;
      // P0-5/P0-7: live delta + gap vs the racing ghost at your position.
      // Blank when no matched ghost races (never fabricate a target).
      if (sharedGhost && rival) {
        const gt = ghostTimeAt(sharedGhost, sim.px, sim.pz);
        if (gt >= 0) {
          const d = sim.raceMs - gt;
          const label = rival.kind === 'friend' ? 'FRIEND' : 'PB';
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
            splitEl.textContent = gt >= 0 ? `S${k + 1} ${gapText(runSplits[k]! - gt, info.spd, rival && rival.kind === 'friend' ? 'FRIEND' : 'PB')}` : `S${k + 1} ${fmt(runSplits[k]!)}`;
          } else {
            splitEl.textContent = `S${k + 1} ${fmt(runSplits[k]!)}`;
          }
          splitExpiry = now + 1500;
        }
      }
      if (splitEl.textContent !== '' && now > splitExpiry) splitEl.textContent = '';
      if (info.stuckMs > 1500) msgEl.textContent = 'STUCK — R RESET';
      else if (info.oobMs > 900) msgEl.textContent = 'OFF COURSE — R RESET';
      else if (info.drifting) msgEl.textContent = 'DRIFT';
      else if (msgEl.textContent === 'DRIFT' || msgEl.textContent.startsWith('STUCK') || msgEl.textContent.startsWith('OFF COURSE')) msgEl.textContent = '';
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
      const shudder = wallKick > 0 ? Math.sin(now * 0.09) * 0.18 * wallKick : 0;
      car.rotation.set(rp.pitch, rp.h, -input.steer * (0.05 + motion.driftMix * 0.09) + shudder);
      const tail = car.userData.tail as THREE.MeshBasicMaterial | undefined;
      if (tail) tail.color.setHex(motion.driftMix > 0.4 || input.drift ? 0xff5a2a : 0xff2a2a);
      const groundY = track.y[info.sIdx] + 0.2;
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
    renderer.render(scene, camera);
  }
}
requestAnimationFrame(frame);
