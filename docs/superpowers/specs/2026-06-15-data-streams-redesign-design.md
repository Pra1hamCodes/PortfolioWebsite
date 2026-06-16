# Portfolio Redesign — "Data Streams Edition"

Date: 2026-06-15
Owner: Prathmesh Pandey
Reference inspiration: https://ameen-abdullah.dev (immersive WebGL/Three.js creative portfolio)

## Goal
Elevate the existing single-file portfolio to the *immersive, interactive 3D* caliber of the
reference site, but with a motif and palette that suit a data/ML engineer — **not** the
reference's cherry-blossom theme.

## Locked decisions (from user)
- **3D motif:** "Golden Data Streams" — flowing rivers of gold particles in 3D space.
- **Palette:** keep existing gold-on-black tokens (`--gold #C9A84C`, etc.). Adopt the
  reference's *motion/interactivity*, not its pink.
- **Higgsfield:** user will top up credits; custom assets generated after (portrait, ambient
  loop video, favicon/OG cover). Balance is currently 0 — build proceeds with procedural
  visuals + existing `photo.png`, assets dropped in as a second pass.
- **Content:** keep everything (About, About Me, Skills, 12 Projects, Experience, Achievements,
  Certifications, Connect, Footer) — same text, same links. Restyle only.

## The interactive 3D hero (centerpiece)
Replaces the current "deep golden void" particle constellation in the global `#bg-canvas`.

- Several dozen **streams**, each a dense line of gold particles following a curved "spine"
  through depth, reading as flowing data pipelines / rivers.
- Particles advect along their stream and recycle, so the field flows continuously.
- **Drag to orbit** — pointer drag rotates the whole stream group with inertia (window-level
  listener; ignores drags that start on links/cards so clicks still work).
- **Mouse-reactive** — streams bend toward the cursor via a world-space repulsion/attraction
  falloff; camera parallax tilt.
- **Scroll = camera dive** — as the user scrolls out of the hero the camera moves forward
  through the streams and they *part* (radial spread); scrolling back flies back in.
- Gold additive blending + depth fog so distant particles fade to black.
- **Performance:** capped particle count, `devicePixelRatio` clamped to 1.5, single buffer
  updated in JS. `prefers-reduced-motion` → calm static field, no advection.

## Preserve verbatim
Intro video loader (`intro.mp4`), custom cursor (`#cur-dot`/`#cur-ring`), nav shrink + mobile
hamburger, typewriter, IntersectionObserver reveals, experience timeline scroll-draw, project
card 3D tilt, achievement glow-follow, smooth in-page scrolling.

## Higgsfield asset pass (after top-up)
1. Stylized cinematic gold-lit editorial **portrait** from `photo.png` (fallback: real photo).
2. Short looping **gold data-stream video** for Connect/footer backdrop + mobile hero fallback.
3. **Favicon** + **OG cover** (gold "PP" mark).
Each generated with a `get_cost` preview first so spend is approved before generation.

## Build approach
All in single `index.html`, no framework/build. `index.backup.html` holds the pre-redesign
version for instant revert.

## Out of scope
Cherry-blossom/pink theming, framework migration, content rewrites, multi-page routing.
