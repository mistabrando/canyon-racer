# Art Direction Review — Cycle 4 (read-only, no implementation changes)

Scope: review only. Inspected `src/environment.ts` (574 lines), `src/visuals.ts`,
`src/main.ts` (scene/sky/fog/ground), `docs/TRACKMANIA_REFERENCE.md`, and
cycle-2/3 handoffs. No implementation, config, or `dist` edits. No deploy, no Sites calls.
Local preview was not runnable from this pass (no browser tools in session); all
findings are code-verified below with line refs so the integrator can confirm with screenshots.

Reference rule: use TrackMania² Canyon screenshots/gameplay as *composition and value*
reference only. Do not copy logos, branded furniture, textures, or proprietary geometry
(see `docs/TRACKMANIA_REFERENCE.md` non-goals).

## 1. Why the background reads as repetitive boxes / flat corridor

Seven specific, code-level causes. Each is small alone; together they produce a corridor:

1. **One box geometry for every near + far wall.** `environment.ts:375` builds
   `wallGeo = BoxGeometry(1,1,1, 1,4,1)` and reuses it for both depth layers
   (`:436`, `:452` scale only). Boxes have flat tops, 90° vertical edges, zero
   faceting. The integrator scales `sv.set(w.w, w.h, segLen*0.4)` — width 10–24,
   height 20–50 (`:138–148`) — so every cliff is the same rectangular prism at a
   different scale.
2. **Continuous bilateral placement = corridor walls.** `planWalls` (`:120–148`)
   emits *both* sides every `wallStep` (14u) at lateral 19–34 (`:138`). Rendered
   segment length is `wallStep*2.2*0.4 ≈ 12u`, so instances nearly tile into two
   unbroken fences. There are no intentional gaps, notches, passes, or one-sided
   releases that in Canyon reference let the eye escape to midground.
3. **Near-identical yaw on every instance.** `:445` sets
   `yaw = yawAt(idx) ± 0.25 rad`. Every box faces track-parallel. Real canyon strata
   read comes from oblique / perpendicular facets catching light differently; here
   all faces share one normal family, so lighting is uniform down the whole track.
4. **Uniform horizontal strata + grayscale-only tint.** `bakeStrata` (`:353–373`)
   bands purely by local Y over 4 height segments, and mount multiplies only a
   gray `t = 0.85–1.15` (`:455–457`). Result: identical flat stripes on every wall,
   no hue/roughness variation, no caprock-vs-talus separation. `MeshLambertMaterial`
   without `flatShading` smooths what little facet interest exists.
5. **Far layer speaks the same box language, only bigger.** Far walls (`:159–170`:
   lateral 70–130, h 40–90) reuse the same box, same yaw rule, same strata. Depth
   cue collapses: far reads as "near boxes pushed back", not as distinct mesa/butte
   silhouettes. The 6 mid mesas + 8 horizon buttes (`planMesas :176–241`, cylinder
   8-sided `:378`) are too few, too regular, and mostly hidden behind the continuous
   near fence from chase-cam height.
6. **No macro-silhouette or landmark rhythm.** Heights random-walk 20–50u per slot
   with no ridgeline function, no alternating tall/short phrasing, no overhang/talus
   profile, no arch-over-road moment (arches sit off-road at lateral ≥ 22, `:257`,
   torus r 8–12 — accent props, not gates). Spires at fractions 0.33/0.66 (`:224–240`)
   are thin cylinders, one per side, easily lost behind near walls.
7. **Floor and road contrast under-deliver.** `main.ts:118–129` ground is one flat
   Lambert plane `0xc96f3f` + one mid box; patches are random-positioned circles
   (`main.ts:240–268`, rejection only vs. centerline) rather than canyon-floor
   aprons hugging the road. Asphalt `0x3d3a40` vs. warm rock is the right Canyon
   warm/cool split, but the eye never gets the engineered-road-vs-rough-terrain
   contrast because rough terrain is all identically smooth boxes.

Net effect from chase cam: dark ribbon → low rails → two flat striped fences →
sky. No parallax layering, no visible future track, no horizon payoff in corners.

What is already good (keep): warm rock vs. blue-sky gradient + `0xeab183` fog
(`main.ts:47–84`) matches reference value structure; `SIGHTLINE` contract
(`environment.ts:60–68`, guard top +0.85) correctly keeps exits readable; one
`InstancedMesh` per family, deterministic hash placement, zero per-frame alloc,
and mobile `count`-truncation LOD are the right performance architecture — fix
*composition inside* that architecture, don't replace it.

## 2. Target look (TrackMania² Canyon, in our low-poly language)

From `docs/TRACKMANIA_REFERENCE.md` and linked references:

- Monumental sandstone cliffs/plateaus = large *silhouettes* first, strata detail second.
- Smooth engineered road/bridges/rails vs. rough natural rock — contrast is the subject.
- Warm orange/red rock vs. cool blue sky + pale concrete/metal structures.
- Three-plus depth bands (roadside → mid formations → distant mesas) for parallax and scale.
- Landmarks + visible future-track segments teach the route at speed.
- Furniture stays low; scenery frames the line, never corridors it.

Sources (do not scrape assets from these; composition reference only):

- Ubisoft overview: https://www.ubisoft.com/en-us/games/trackmania2-canyon
- GameSpot review: https://www.gamespot.com/reviews/trackmania-2-canyon-review/1900-6335508/
- Trackmania replay/ghost docs: https://doc.trackmania.com/play/watch-replays/
- Canyon gameplay reference video: https://www.youtube.com/watch?v=ydN3z4RobDs
- Screenshot refs:
  - https://images.cgames.de/images/gamestar/287/trackmania-2-canyon_2251184.jpg
  - https://assetsio.gnwcdn.com/arqid.jpg?auto=webp&fit=crop&height=630&width=1200
  - https://gamewatcher-images.s3.amazonaws.com/image/file/8/b8/62458/1742.jpg

## 3. Performant low-poly composition system (proposal for integrator)

Constraints the design respects: ≤ 5 new env draw calls, ≤ 26k new env tris
(`ENV_BUDGET`), one `InstancedMesh` per family, shared baked geometry, no shadows /
no post, deterministic arc-distance placement, `setQuality(mobile)` via `count`
truncation only. All geometry procedural; no protected assets.

### 3.1 Macro silhouettes (kill the box read first)

- Replace the single box with **2–3 cliff archetypes** sharing one draw call via
  merged-geometry variants or 2 instanced meshes max: (a) *slab* (caprock slab wider
  than base, slight overhang), (b) * facet spire cluster* (3–5 displaced tetra/penta
  facets fused at base), (c) *talus wedge* (low, wide, sloped skirt). Build each from
  `BoxGeometry`/`CylinderGeometry` with vertex jitter applied once at build time
  (hash-driven, ±15–25% on XZ, ±10% on Y, then `computeVertexNormals` + `flatShading:
  true`), strata baked per-vertex as today. Cost: same 12–40 tris/instance class.
- Add a **ridgeline function**: wall height = base(h 18–30) + slow sine/hash phrase
  (wavelength ~150–250u, amplitude ~15–25u) + per-instance jitter ±8u, instead of
  independent 20–50u random. Alternate tall/short phrasing so the skyline has rhythm.
- Cap flat tops: scale top-face vertices inward 0.7–0.85× (caprock) and flare base
  1.1–1.3× (talus). One-line change at geometry build; destroys the shoebox read.

### 3.2 Irregular faceted cliffs (light does the work)

- `flatShading: true` on wall/mesa Lambert materials; rotate instances to *oblique*
  yaws: `yaw = yawAt ± (0.3–0.9 rad)` hash-picked, with ~20% near-perpendicular facets.
  Same tri count, 3× the perceived detail because adjacent facets shade differently.
- Per-instance hue jitter, not just gray: multiply strata by HSL offset
  (h ±0.015, s ±0.08, l ±0.08) hash-driven. Keeps warm family, kills uniform stripe.
- Vary strata band count per archetype (3 vs. 4 vs. 5) so bands don't align across
  neighboring walls — misalignment reads as geology, alignment reads as wallpaper.

### 3.3 Layered depth (roadside → mid → horizon, each a different language)

- **Near (lateral 17–34): broken, not continuous.** Emit walls on ~55–65% of slots
  (hash skip), never both sides tall simultaneously for > 60u: if left is tall,
  force right low/skip and vice versa. Gaps reveal midground. Keep `SIGHTLINE`
  inside-corner caps (`INSIDE_LATERAL 26`, `INSIDE_HEIGHT_CAP 22`).
- **Mid (lateral 60–140): detached mesas/fins.** 10–16 instances, each a *distinct*
  silhouette (fin, balanced-rock-ish stacked cylinders, broken arch stump), yawed
  randomly (not track-aligned), 40–90u tall. These are the parallax layer; they must
  be visible *through* near gaps.
- **Horizon (r 400–740): buttes ring** (keep current 8, widen size variance
  120–230w × 90–160h, haze-lerp 0.45–0.65 toward `HAZE_COLOR`). Never occluded by
  near layer by design (they sit above the ridgeline from chase cam).
- **Floor aprons:** replace random circles with road-hugging talus strips
  (instanced flat quads flanking road at halfW+2 … halfW+14, warm dark `0x8a4a28`
  family, 1 draw call reused from patch mesh). Grounds the road; sells canyon floor.

### 3.4 Visible future track / elevated structures (learn the route at speed)

- At 2–3 long-setup fractions, place a **pale concrete viaduct hint**: a short
  elevated ribbon segment or gantry pair + distant road-colored sliver parallel to
  the route (reuse road ribbon builder with pale `0xf2ede2`/`0x9aa0a8` palette, 1
  draw call or merged into arch mesh). Must read at 200u+ through fog.
- **Gate arches over the road** (not beside it): 1–2 per lap spanning the road at
  straight entries, deck at ≥ 9u clearance, pale concrete color for warm/cool pop.
  Current off-road torus props (`lateral ≥ 22`) don't deliver this; move the moment
  onto the road centerline with yaw = track yaw.
- Chevron/gantry rhythm (`visuals.ts`) already teaches corners; environment should
  answer "where does the road go after?" — every screenshot at a corner exit must
  contain either future road, a gate, or a landmark spire in frame.

### 3.5 Warm / cool value separation

- Sky/fog cool-to-warm gradient stays (`main.ts:51–84`): top `0x2e6bd8` → mid
  `0x9fc3ee` → horizon `0xf6c489`. Rock family warm (`strataColor` bands), road +
  structures cool/pale (`0x3d3a40` asphalt, `0xf2ede2` concrete, `0x9aa0a8` steel).
- Haze lerp by depth: near 0, mid 0.15–0.3, horizon 0.45–0.65 toward `0xeab183`.
  Do not haze the road or rails (readability), haze only rock silhouettes.
- Scrub stays olive accent (`planScrub` HSL h 0.13–0.19) at ≤ 1.6u — never competes
  with strata. Keep counts; vary scale more (0.6–2.2w) and clump (pairs/triples per
  slot, gaps between clumps) instead of even picket spacing.

### 3.6 Landmark rhythm (one readable moment every ~25–35 s)

- Exactly 3–5 landmarks/lap: e.g. (1) gate arch over start straight, (2) tall spire
  fin outside a fast sweeper, (3) balanced-stack mid-corner, (4) viaduct hint on
  back section, (5) horizon notch framing final corner. Space by arc fraction
  (0.05 / 0.3 / 0.55 / 0.8), alternate sides, announce with a near-gap so each is
  visible ≥ 3 s at speed. Landmarks reuse mesa/arch draw calls — no new calls.
- Landmark scale break: ≥ 1.6× surrounding wall height, distinct hue or pale cap
  so screenshots fingerprint each one.

### 3.7 Road engineering contrast

- Keep asphalt dark + red/white curbs + pale rails; add pale concrete bridge decks /
  gate beams as the only pale verticals in a warm world. Rock never pale, structures
  never orange — one rule, enforced by palette constants.
- Cuttings vs. embankments: where walls pinch (both sides near), add rock-cut texture
  read (steeper, darker strata, talus skirt); where road is exposed, drop near walls
  entirely and let rails + scrub + distant mesas carry the frame.

### 3.8 Sightlines (non-negotiable, already contracted)

- Preserve `SIGHTLINE` (`environment.ts:60–68`): road-edge families ≤ 1.6u within
  halfW+8; inside-of-corner walls lateral ≥ 26 and height ≤ 22; arches/gates lateral
  ≥ 22 or overhead ≥ 9u clearance; nothing overhanging the road surface below 9u.
- Verify from chase cam (not top-down): corner-exit apex + next 60u of centerline
  visible over/around near geometry at speed.

### 3.9 Fog / horizon

- Keep `Fog(0xeab183, 120, 700)` + sky dome; horizon buttes at 420–740r sit inside
  fog mid-range so they silhouette without banding. Background color = horizon color
  (`0xf6c489`) so the dome seam never shows.
- Ridgeline must stay *below* horizon-butte bases from chase cam on straights, so
  every straight frames layered silhouettes, not a wall cap.

### 3.10 Mobile LOD (no reallocation, no new calls)

- Desktop: full near set (broken pattern), mid 10–16, horizon 8, scrub full, gates 1–2.
- Mobile `setQuality(true)`: truncate far-wall layer + half scrub (existing `count`
  mechanism), hide speed ticks (existing `visuals.ts` behavior), **keep** gates,
  spires, and 1 mid layer (landmarks are readability, not decoration). Target
  mobile ≤ 60% of desktop env tris with identical draw calls.
- Never LOD by popping landmarks; pop filler walls/scrub only, ordered so truncated
  tail = filler (keep near-layer-first ordering already in `mountEnvironment`).

## 4. Scene checklist (integrator, in order)

- [ ] Near walls broken (55–65% fill), no both-sides-tall run > 60u; gaps face mid mesas.
- [ ] ≥ 2 cliff archetypes or oblique-yaw + flatShading pass; no flat-top boxes in frame.
- [ ] Ridgeline phrase visible in side-profile screenshot (tall/short alternation).
- [ ] Mid layer (10–16 distinct silhouettes) visible through near gaps from chase cam.
- [ ] Horizon buttes visible on every straight; haze-lerped, above near ridgeline.
- [ ] 3–5 landmarks spaced by arc fraction, alternating sides, each ≥ 1.6× neighbors.
- [ ] 1–2 gate arches spanning the road (≥ 9u clearance, pale concrete), not off-road props.
- [ ] Future-track sliver or viaduct hint visible at 200u+ on back section.
- [ ] Warm rock / cool sky+pale structure separation holds; scrub olive accent only.
- [ ] Floor aprons hug road (not random circles); road reads engineered vs. rough rock.
- [ ] Sightlines: exit apex + 60u centerline visible at every corner from chase cam.
- [ ] Mobile: same landmarks/gates, ≤ 60% env tris, identical draw calls, no filler pop.

## 5. Measurable budgets (assert like `visuals-budget` / env budget tests)

Keep hard caps (do not raise without a frame-time reason):

- Env: ≤ 5 new draw calls, ≤ 26k new tris (`ENV_BUDGET`); per-family instance caps:
  walls 700 / mesas 40 / arches 4 / scrub 420.
- Visuals (road furniture): ≤ 5 new draw calls, ≤ 12k new tris (existing `BUDGET`).
- Combined new-scene target on a ~2250u daily track: **≤ 13 draw calls, ≤ 30k tris**
  (reference measurement cycle-2: 8 calls / ~16.4k tris — headroom funds archetype
  facets, not more instances).
- Tri math for planning (matches `estimateEnvTriangles`): wall box 12, faceted
  cliff ≤ 40, mesa cyl(8,3) ~64, torus(6,12) 144, cone(6) ~12, gate (merged
  boxes, baked once) ≤ 200 amortized across instances.
- Perf asserts: `envWithinBudget(counts)` true on desktop + mobile plans; wall fill
  ratio 0.5–0.7; both-sides-tall run-length ≤ 60u; landmark count 3–5; gate clearance
  ≥ 9u (pure-function checks, no renderer needed).
- Frame check: p50 frame ≤ 16.7ms desktop / ≤ 33ms low-end mobile on reference lap
  before/after; any regression traced to instance count, not material/shader change
  (no shadows, no post, Lambert/Basic only).

## 6. Visual acceptance criteria (verify with screenshots, no renderer in CI)

Take all screenshots at 1280×720, chase cam, dry noon light, same seed/daily:

1. **Start-straight frame:** road + gate + horizon buttes in one frame; no wall
   touching frame top; future road or viaduct visible. Fail = corridor (walls fill
   both frame edges top-to-bottom for > 50% of frame height).
2. **Corner-exit frames (all drift corners):** apex + 60u of exit centerline + next
   landmark or gate visible; inside wall low per `SIGHTLINE`. Fail = exit hidden
   behind wall/scrub.
3. **Side-profile frame (paused, camera 90° to track):** ridgeline alternates tall/
   short; ≥ 2 archetype silhouettes distinguishable; strata bands misaligned across
   neighbors. Fail = uniform fence or aligned stripes.
4. **Midgap frame:** through at least one near-gap per 200u, a mid mesa/fin and a
   horizon butte are both visible. Fail = no layered depth in any 200u window.
5. **Palette frame (color-picker check):** sky top cool blue, rock warm orange/red,
   road dark asphalt, structures pale. Fail = orange structures or gray-orange rock.
6. **Landmark fingerprint:** each of the 3–5 landmarks identifiable in isolation at
   150u (silhouette + scale break). Fail = two landmarks confusable at thumbnail size.
7. **Mobile pair:** same 3 camera spots on mobile preset; landmarks/gates present,
   filler thinned, no holes to skybox at road edge. Fail = missing landmark or
   background-color gap at road edge.
8. **Repetition scan:** no 100u window where > 80% of near walls share yaw within
   ±0.15 rad *and* height within ±15%. Fail = wallpaper segment (the current bug).

## 7. Explicit non-changes for this cycle

- No edits to physics, track gen, sim, ghost share, or scoring.
- No new textures, logos, branded furniture, or copied Canyon meshes.
- No shadows, post-processing, dynamic lights, or per-frame allocation.
- No draw-call or tri-budget increases; no new families without removing old ones.
- No deploy, no Sites calls (per delegation).

## 8. Suggested integrator sequence (when a build cycle approves it)

1. Geometry archetypes + flatShading + oblique yaws (biggest visual win, same calls).
2. Broken-fill + ridgeline + both-sides-tall rule (kills corridor).
3. Mid/horizon layering + haze + floor aprons.
4. Gate-over-road + viaduct hint + landmark spacing pass.
5. Sightline screenshot sweep + budget asserts + mobile pair.

---
*Cycle-4 art-direction review. Read-only; sole writable artifact is this file.*
