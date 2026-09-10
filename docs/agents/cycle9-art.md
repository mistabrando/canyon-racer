# Cycle 9 — Art / Performance Review (read-only)

Scope: reviewer only. No edits to implementation, config, or `dist/`.
No deployment, no Sites calls. Sole writable artifact is this file.

## Sources read

- `MUSE_ORCHESTRATION.md` (rules, budgets, integration queue)
- `docs/TRACKMANIA_REFERENCE.md` (reference principles, non-goals)
- Handoffs: `docs/agents/background-cycle7.md`, `docs/agents/art-direction-cycle4.md`,
  `docs/agents/environment-cycle4.md`, `docs/agents/graphics.md`,
  `docs/agents/barriers-cycle7.md`, `docs/agents/corner-speed-cycle7.md`,
  `docs/agents/cycle9-driving.md`, `docs/agents/cycle9-loop.md`
- Code (read-only): `src/environment.ts`, `src/visuals.ts`, `src/main.ts`,
  `src/barrier-plan.ts`, `src/trackgen.ts`

## Preview attempt

- `curl http://127.0.0.1:4173/` returns `000` (no preview server running
  in this turn). Judgement below is from code + handoff measurements, not
  screenshots. The screenshot sweep in this doc remains to be run by the
  integrator. Do not treat this review as visual QA pass.

## Verdict per axis (code-grounded)

- **Actual background:** two archetypes exist (near 5-gon prism `WALL_TRIS=30`,
  far 7-gon butte `FAR_TRIS=28`, `FLAT_SHADED=true`) plus 6 mid mesas, 8 hazed
  horizon buttes (`haze 0.55`), 2 spires, 3 side arches, scrub cones. Layering
  architecture is correct; placement math pushes it too far from the road to
  read (see below).
- **Road hierarchy:** strong. Dark asphalt ribbon + red/white curb ribbon +
  center dashes + start/finish checker strips + gantries. Road is the highest-
  contrast engineered element, as the reference demands.
- **Future-track visibility:** missing. Acknowledged gap in `background-cycle7.md`
  ("no future-track sliver/viaduct"). Nothing in `environment.ts` / `main.ts`
  renders the road ahead beyond the ribbon itself; far mesas ring the bbox
  center, not the route. Learning the route at speed still relies on chevrons
  + ghosts only.
- **Guardrail / open-edge readability:** contract is correct (Cycle 7
  `barrier-plan.ts`: rails render exactly where they collide; open edges are
  intentional). Risk: open edges currently read as *absence* — no shoulder,
  no edge line, no drop beyond the curb ribbon. Drivers may parse open corners
  as unfinished rather than "you may fall here". Crest gaps (`crestHalfGap 55`)
  are right for jumps but unmarked visually.
- **Landmark rhythm:** present but weak. 6 mid mesas alternate sides by index,
  2 spires at fractions 0.33/0.66, 2 pier pairs at 0.03/0.5, 3 side arches.
  Spacing is by centerline fraction (good) but laterals are large (mid mesas
  90–210u, spires ~55–75u, arches `MIN_ARCH_LATERAL 22` + corridor push) so
  landmarks sit deep in the background, small in frame, and similar in scale
  to filler walls. No `>=1.6x` scale break is enforced against neighbors.
- **Palette:** correct separation. Warm strata bands + pale caprock, cool-blue
  sky dome (`0x2e6bd8`/`0x9fc3ee`), pale structures, dark asphalt, olive scrub.
  Watch items: `PIER_TINT [1.25,1.18,1.08]` exceeds 1.0 (clipping risk under
  `1.6`-intensity sun + hemisphere); ground patches (`HSL L 0.22–0.32`) run
  darker than the `0xc96f3f` floor and are excluded within 40u of the road, so
  they read as spots, not aprons.
- **Scale / depth:** three depths exist (near / mid / horizon + fog 120–700),
  but `CORRIDOR.PUSHBACK 6` + rotation-aware extents + 8-pass push-out keep
  near walls at 17–34u+ from centerline and vista cliffs at 48–93u. Enclosure
  is polite; the reference wants monumental cliffs that loom, then release.
  Horizon buttes at radius 420–740u sit near/beyond fog far (700) — likely
  fully fogged on some seeds.
- **Repetition:** improved (phrase-block height scaling, `yaw ±0.45`, two
  geometries, repetition-scan test). Residual risk: every near wall is still
  one shared prism with baked strata; variation is scale/yaw/tint only, so at
  speed the eye still gets a "same rock, different size" read, especially in
  both-sides cut runs up to 4 stations (~56u).
- **Mobile cost:** honest but off-target. `setQuality(true)` zeroes the far
  mesh and halves scrub (`scrubFullCount/2`); handoff measures ~75% of desktop
  tris vs the Cycle-4 aspiration of ≤60%, and the cut removes the *depth*
  layer while keeping near filler. Landmarks are preserved (good); parallax
  suffers most where mobile needs it.

## Why it still may not read as a convincing Canyon world

1. **No spanning gate or viaduct.** The two "gates" are bleached mesa-piers
   flanking the road, and arches are side props (`lateral ≥ 22`, never over
   the road). Nothing frames the start straight or marks mid-course from the
   chase cam. Reference gates read because you drive *through* them.
2. **Scenery stands off the road.** Corridor math is safety-correct but
   aesthetically over-pushed: near walls +6u setback on top of extents, mesas
   ≥90u, patches/cacti excluded within 40u. Result: engineered road floating
   on an empty apron with cliffs as backdrop, not gorge.
3. **No floor aprons.** Ground is one 2600u plane + excluded random circles.
   No pale dirt shoulder hugging the ribbon, so the road/rock transition is a
   hard line and the "smooth engineered vs rough natural" contrast is lost.
4. **Open edges are unmarked.** After the barrier contract, ~most of the lap
   has no rail by design — but the curb ribbon looks identical on walled vs
   open edges. No edge-lightening, no shoulder strip, no chevron-side cue for
   "fall is possible here".
5. **Landmarks lack scale breaks.** Spires (`w 6–9, h 70–95`) are tall but
   thin and 55u+ off-road; mid mesas (`w 40–90`) differ ~2x from near walls
   (`w 10–24`) only at the extremes. At 150u thumbnails several will confuse.
6. **Horizon risks fog-out.** Butte ring radius (up to ~740u) + heights 90–160u
   from `minY-20..-40` compete with fog far 700 and the 1500u sky sphere. Some
   seeds will show gradient sky with no silhouette above the ridgeline.
7. **One rock geometry per layer.** Phrase scaling changes height, not
   silhouette grammar. No caprock overhang, fin, or slot variant — the eye
   learns the prism after two phrases.

## Minimal performant scene pass (proposal, not implementation)

Goal: keep every budget and contract; change silhouette grammar + roadside
ground + gate moments, not instance counts.

Exact modules to change (integrator-owned; this review edits nothing):

- `src/environment.ts` (planners + mount only):
  a. Third near-wall variant via vertex-shuffle of the existing prism
     (same `WALL_TRIS=30`, same draw call; pick variant by `tint % 3`).
     Adds caprock/fin reads with zero new calls/tris.
  b. One spanning gate at fraction ~0.03 reusing the arch torus scaled to
     straddle the road (vertical clearance ≥ 9u asserted pure-side; two
     pier feet reuse mesa mesh). Replaces one pier pair, not an addition.
  c. Pull *tall-phrase* near walls 3–4u closer (reduce `PUSHBACK` for the tall
     phrase only, keep corridor audit green) so enclosure looms then releases
     on vista blocks. No lateral change to inside-corner or crest stations.
  d. Floor-apron strip: reuse scrub `InstancedMesh` slot or ground-patch block
     in `main.ts` (see below) — do not add a family.
- `src/main.ts` (ground/patches only, road/sky/fog untouched):
  e. Replace excluded random circles with road-hugging apron quads: sample
     `cum` every ~20u, place flat pale quads (`y -2.4`) at `halfW+4..10`,
     skip inside corners/crests. Same 1 draw call, same `COUNT=70`.
  f. Open-edge shoulder cue: tint the curb ribbon paler (or add a 0.6u pale
     edge line) on stations with no barrier span — reads from existing
     `track.barrier` query, no new geometry family.
- `src/visuals.ts` (no new families):
  g. Keep rail/chevron/tick placement; add a pure `planGateChevron` accent
     (one chevron pair at the spanning gate) only if (b) lands.
- Tests (same files, extend don't widen): `tests/visuals-budget.ts` +
  `tests/trails-bounds.ts` — gate clearance ≥ 9u, apron corridor audit,
  variant-count check, budget asserts unchanged.

Explicit non-changes: sim, trackgen grammar, ghost/share, physics constants,
fog/sky/lights, shadow/post (none), draw/tri caps.

## Draw / triangle limits (do not raise)

- Env: ≤ 5 new draw calls, ≤ 26k new tris (`ENV_BUDGET`). Planning math:
  near `30` / far `28` / mesa `64` / arch torus `144` / scrub cone `12`.
- Road furniture (`src/visuals.ts` `BUDGET`): ≤ 5 new draw calls, ≤ 12k new tris.
- Combined new-scene target on a ~2250u daily: **≤ 10 draws / ≤ 30k tris**
  (last measured 9 / ~21.2k — spend headroom on the wall variant + gate, both
  ~zero-net, not on more instances).
- Mobile: identical draw calls; rendered tris ≤ 75% desktop today, target
  ≤ 65% by thinning scrub to one-third (pure `setQuality` change) *after*
  the far layer is kept at reduced count instead of zeroed — depth matters
  more than filler. Landmarks, gate, aprons identical on mobile.

## Screenshot acceptance criteria (1280×720, chase cam, same daily seed)

1. **Start straight:** road + spanning gate + ≥1 horizon butte in one frame;
   no wall touching frame top. Fail = flanking piers only, or backdrop gap.
2. **All drift-corner exits:** apex + 60u exit centerline + next landmark or
   gate visible; inside wall low per `SIGHTLINE`. Fail = exit hidden.
3. **Side profile (paused, 90°):** tall/short phrase alternation + ≥2 wall
   silhouettes distinguishable; strata misaligned across neighbors.
   Fail = uniform fence or aligned stripes.
4. **Midgap (per 200u):** through one near-gap, a mid mesa/fin *and* a horizon
   butte visible. Fail = no layered depth in any 200u window.
5. **Palette picker:** sky cool blue, rock warm orange/red, road dark asphalt,
   structures/gate pale, scrub olive only. Fail = orange gate or gray rock.
6. **Landmark fingerprint:** gate + 2 spires + 1 mesa identifiable in isolation
   at 150u. Fail = any two confusable at thumbnail size.
7. **Open-edge read:** on a known open corner, the pale shoulder/edge cue is
   visible and no rail is present; on a walled corner, rails + rock align.
   Fail = identical edges or invisible-wall suspicion.
8. **Mobile pair:** same 3 spots on mobile preset; landmarks/gate/aprons
   present, no skybox gap at road edge, no filler pop.
9. **Repetition scan (existing test):** no 100u window with >80% near walls
   yaw-matched ±0.15 rad *and* height-matched ±15%.

## Handoff to integrator

- This review proposes; it implements nothing. Cheapest order: (f) shoulder
  cue → (e) aprons → (b) spanning gate → (a) wall variant → (c) tall-phrase
  pull-in → (g) gate chevrons. Re-run full suite + build + the 9-frame sweep
  before any Sites/publish step. No deployment from this workstream.
