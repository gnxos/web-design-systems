# Imagery

Hairline pictures come in three kinds, in this order of importance: **work graphs**, **orb avatars** and **warm editorial photography**. No screenshots as hero art, no 3D scenes, no stock illustration, no icons blown up as art.

## 1. Work graphs (the hero picture)

A white field with two to five floating **callouts** and one large **orb**, joined by thin **connector wires**. It shows work connected and moving.

- **Wires:** 1px `text-strong` (#0d0d0d), **right-angle steps only**: horizontal and vertical runs, no curves, no diagonals, no arrowheads. Lines never cross. Let one or two run off the edge of the frame to suggest a larger graph.
- **Nodes:** r 5 discs where a wire turns, `surface` fill with a 1.5px `text-strong` ring. At most one **live node** per graph: solid `coral`, gently pulsing.
- **Centre:** one large orb (96px) with a green presence dot. Wires leave it in up to four directions.
- **Callouts:** white cards, 1px `border-card`, `radius-callout` (10px), `shadow-float`. Inside: an optional small orb, one pastel label naming who or what, and one or two lines of past-tense copy. Max 300px wide.
- **Composition:** on a 16:9 canvas (960×540 grid), callouts sit near the four quarters (about 24%/22%, 76%/28%, 26%/78%, 76%/76%), never touching each other, with at least 40px of white around each. Keep the centre clear except for the orb.
- **Colour budget:** at most four pastels and four orb colours in one graph, each used once. Everything else is ink and white.
- **On dark:** the same picture on `surface` dark; wires and node rings become white (`text-strong` does this automatically).

Use the **WorkGraph** component for the live version and `assets/Graph/work-graph.svg` as a still or placeholder.

## 2. Orb avatars

The system's only characters, standing in for helpers, automations or workflows.

- A sphere lit from the top-left: a small white highlight (about 7% of the radius), the body in one `glow-*` colour, darkening 35% toward the lower-right edge, a thin white rim at 60% opacity, and a soft blurred halo of the same colour below (offset down about a third of the radius).
- One colour per helper, kept everywhere it appears. Blue, coral, green, purple.
- Sizes: 28px (in callouts, menus, labels), 48px (cards), 96px (graph centre), 160px (stills).
- Always next to a label that names it.

CSS: `hl-orb` (+ `--coral`, `--green`, `--purple`, `--sm`, `--lg`). SVG: `assets/Graph/orb-*.svg`.

Prompt for an image model (for a larger rendered orb):

> A single glossy sphere floating on a pure white background, saturated [cornflower blue / coral red / leaf green / violet] body, small soft white specular highlight at the upper left, gentle darkening toward the lower right edge, thin bright rim light, a soft blurred glow of the same colour pooling beneath it, minimal, studio product render, centred, lots of empty white space, no text, no face.

Negative: *face, eyes, mascot, character, metal chrome, rainbow, multiple spheres, harsh shadow, dark background, text, logo*.

## 3. Photography

Used in customer stories and team sections, never in the hero.

- **Subject:** people working together or alone at a desk, in a studio, on site. One to three people, mid-task, not posing for the camera.
- **Light:** warm, natural daylight; soft shadows; slightly creamy whites. No cold office fluorescents, no neon, no heavy colour grade.
- **Lens and crop:** eye-level, 35–50mm feel, shallow depth of field. Crop to `radius-lg` frames at 4:3 or 1:1. Leave white around photos; never full-bleed.
- **Overlays:** a single callout may float over a corner of a photo (with `shadow-float`) to tie it to the work graph. No other overlays, gradients or text on photos.

Prompt for an image model:

> Editorial photo of a small team reviewing a project plan on a laptop in a bright studio with large windows, warm natural daylight, soft shadows, neutral wardrobe in cream, oatmeal and charcoal, genuine focused expressions, shallow depth of field, 35mm lens, eye level, clean uncluttered background, subtle film grain, no logos, no text on screens.

Negative: *stock-photo smiles, thumbs up, pointing at the screen, neon, cold blue light, heavy teal-orange grade, logos, readable text, crowded office*.

## 4. Highlight marks

Pastel labels and the inline `hl-mark` work like a highlighter pen over text: flat fill, `radius-sm`, ink text. Use one or two per composition. Reference sheet: `assets/Graph/pastel-labels.svg`.

## Do / Don't

- **Do** keep pictures mostly white; let the ink wires carry the structure.
- **Do** label every orb.
- **Do** write callout copy like a real update: specific, past tense, short.
- **Don't** add arrows, curves or colour to wires.
- **Don't** use the red-pink gradient in images; it belongs to one headline phrase.
- **Don't** put faces on orbs or turn them into mascots.
- **Don't** use photos as page backgrounds or put text over them.
