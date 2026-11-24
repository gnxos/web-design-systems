# Imagery and illustration guide

Dewpoint pictures are light, soft and abstract: drifting flecks, glowing rings, pastel halos, flat gradient fields, dot drifts and a few loose hand-drawn doodles. There are no photographs of people and no stock scenes. Every asset in `assets/` is original and can be regenerated from the rules below.

## The six kinds of picture

| Kind | What it is | Where it goes | Asset |
| --- | --- | --- | --- |
| **Fleck field** | Hundreds of tiny rounded dashes (1.4–3.4px thick, 2.5–11px long) arranged radially, each pointing away from the centre, hue sweeping blue → violet → magenta → coral → amber → gold around the circle. A clear empty zone in the middle for type. Plus fine dust dots. | Hero ground, footer band | `Fields/fleck-field-light.svg`, `-dark.svg`, `-corner.svg`, `fleck-band-dark.svg` |
| **Glow ring** | A pure black or deep-navy square with one blurred ring (azure circle, or an ember pill) in the middle: a soft wide halo plus a thin bright core. | Dark media tiles, post art | `Glows/ring-azure.svg`, `ring-ember.svg` |
| **Pastel halo** | A pale grey-blue square holding a smaller rounded grey card; blurred blue, magenta and gold strokes bleed out from three of its edges. | Light media tiles; frame for a UI placeholder | `Glows/halo-pastel.svg` |
| **Gradient field** | A flat diagonal or vertical gradient, azure → deep blue, or blue → near-black. No texture. | Tiles with a title, covers | `Glows/field-azure.svg`, `field-midnight.svg` |
| **Dot pattern** | A 28px jittered dot grid fading out downward, or a regular dot grid, or a hairline ruler. Ink at 25–80% opacity. | Section backgrounds, empty areas | `Patterns/dot-drift.svg`, `dot-grid.svg`, `hairline-ruler.svg` |
| **Doodle** | A 3px round-capped ink stroke: loop with arrowhead, squiggle, eight-ray burst, bracket pair. Single ink (`#121317`), no fill. | Annotating a heading or a feature, sparingly | `Doodles/*.svg` |

Plus **Panels/window-placeholder.svg**: an abstract app window (traffic dots, pill tab, three grey bars, a composer pill). It stands in for a product screenshot; never use a real screenshot.

## Rules

1. **One idea per picture.** A ring, or a halo, or a field. Never a ring on a halo on a field.
2. **Soft light, not hard edges.** Glows are Gaussian-blurred (σ 18–70 on a 1000px tile). Flecks and doodles have round caps. No sharp drop shadows.
3. **Colour only from the tokens.** Flecks use the six `fleck-*` colours; glows use `accent` (azure) or `fleck-coral` (ember); dark grounds are `night`.
4. **Keep the centre clear.** Fleck fields leave a ~860 × 420px empty box at 1440 wide for the headline and buttons.
5. **Crop with the tile radius.** Art is clipped by `radius-xl` (36px). Never put key content within 36px of an edge.
6. **Titles on art** are white (`on-night`) 450-weight, at most three words, with a faint coloured glow; only on dark or deep-blue art.
7. **Alt text:** decorative art `alt=""`. A placeholder window gets alt text only if it explains something.
8. **Do not** use people, hands, laptops, planets, rockets, robots, brains or circuit boards; do not draw logos or letters into art.

## How to make each one

- **Fleck field (SVG or canvas).** Pick a centre at (50%, 52%). For each fleck choose an angle θ uniformly and a distance d = r₀ + u^0.6·r₁ (r₀ 190px, r₁ 0.78 × the larger side), stretched 1.25× horizontally and 0.8× vertically. Reject points inside the clear box. Rotate the dash to point along the radial direction ±8°. Colour = palette sampled by θ (hue sweep). Length grows with d. Opacity 0.35–1. Add ~250 dust dots at 0.5–1.2px. `Dewpoint.fleckField(canvas)` does this live.
- **Glow ring.** Square 1000 × 1000. Fill with a radial gradient from `#000` (centre) to `#14306e` (corners). Draw a circle r = 330, stroke 150 `#3279f9` at 55% with blur σ 70, then the same circle, stroke 22 `#7aa7ff` at 90% with blur σ 26. For ember: pill 620 × 280, ground `#0a0403 → #1c0705`, strokes `#e8504a` (σ 60) and `#ffb27a` (σ 18). Set blur filters to `filterUnits="userSpaceOnUse"` with a huge region so there is no square edge.
- **Pastel halo.** Ground `#eff2f7`. Three blurred (σ 46) rounded-rect strokes, 70px wide, with dash arrays so each paints only part of the perimeter: blue 55%, magenta 35%, gold 55%. A `#ededed` rounded card (r 96) sits on top.
- **Gradient field.** Linear gradient: azure `#8ec5ff → #3b82f0 → #143a9e` at 135°, or midnight `#14347f → #071236 → #000` at 180°.
- **Dot drift.** Grid pitch 28px, each dot jittered ±4px, radius 0.8–2.2px, probability fading with `(1 − y/H)^1.4`.
- **Doodle.** Draw with one continuous curve, stroke 3px, round caps, no fill, no more than 5 anchor points; add a small arrowhead only on the loop.

## AI image prompt (copy and paste)

```
A square abstract illustration, 1:1, in a soft, airy digital style. Pure black background with a single softly glowing circular ring in the centre: a wide, blurred azure-blue halo with a thin, bright pale-blue core line. Subtle, smooth falloff into deep navy at the corners. No texture, no grain. Calm, luminous, minimal. Flat vector-like gradients with Gaussian-blur glow only. Centre of the ring is empty black so text can sit there.
```

Variants: replace the ring with a rounded pill outline in warm coral and amber (ember); or "a pale grey-blue square with a smaller rounded grey card in the middle and soft blurred blue, pink and yellow glows bleeding from its edges" (halo); or "hundreds of tiny rounded dashes radiating outward from an empty centre, hue shifting from blue through violet, magenta, coral and amber to gold, on white, sparse near the middle and denser at the edges" (fleck field).

## Negative prompt

```
people, faces, hands, photographs, realistic objects, laptop, phone, rocket, planet, astronaut, robot, brain, circuit board, text, letters, logo, watermark, harsh shadows, hard edges, outlines, 3D render, glossy plastic, chrome, neon grid, purple-pink gradient background, lens flare, sparkles, stars, heavy noise, grain, vignette, clutter, busy background, stock photo
```

## File rules

SVG, one `viewBox`, no external references, no fonts, no `<style>` blocks. Single-ink doodles use fixed `#121317` because `<img>` cannot inherit `currentColor`; for the dark theme flip with `filter: invert(1)`. Name files `kind-variant.svg`.
