# Illustration

Every image in Inkwell — hero confetti, feature spots, diagrams, empty states, report covers, social cards — is drawn in **one hand**: a thin black ink line, flat fills from a five-colour palette, and a solid black offset for depth. If a picture could have come from a stock site, an icon font or a 3D renderer, it is wrong.

## The ink

| Rule | Value |
| --- | --- |
| Line colour | `ink` #000 only (white `surface` line allowed on ink blocks) |
| Line weight | `stroke-line` 1px at the drawing's own scale; `stroke-hatch` 0.5px for hatching, ruled lines and motion ticks; `stroke-bold` 1.9px for the hero object or an arrow; `stroke-scribble` 3.3px only for scribbles around words |
| Line character | slightly wobbly and alive — corners overshoot a hair, circles don't quite close, straight edges drift ±1px. In SVG use the roughness filter (below); never a perfectly geometric vector look, never a messy sketch either |
| Caps and joins | round |
| Fills | flat: `powder` #bfd9e3, `powder-50` #dfecf1, `surface` #fff, `surface-fog` #f5f5f5, `muted` #8e8e8e, light gray #e6e6e6, solid `ink`. No gradients, textures, noise or transparency |
| Depth | an **inked shadow**: the same shape filled solid black, offset 3–5px down-right, behind the object. Never a blurred drop-shadow |
| Shading | 0.5px parallel hatching lines, or one face of a box in `powder-50`/fog. Never tonal shading |
| Highlights | a short white stroke on a powder lens/glass; small white dots |

## Composition

- **Spot illustrations** (feature cards, product panes, empty states): one main object, 2–4 satellites, lots of air. The object is a *data thing made physical*: a report sheet, a box, a gear, a funnel, a cursor, a chart card, a magnifier, a stack of index cards. Satellites: sparkles, hexagons, squircles, small logo discs, dashed connectors with node dots.
- **System diagrams:** isometric-ish boxes and cards joined by thin arrows and **dashed lines** (4/4 dash) with small open circles at the ends; labels set in `ink` Archivo 600 at ~18px, centred under each node; the whole diagram inside a sketchy rounded frame on `powder`.
- **Confetti** (hero and CTA blocks): 10–16 small shapes scattered near the edges, never behind text — `hexagon`, `squircle-ink`, `squircle-paper`, `sparkle-outline`, `sparkle-powder`, plus one or two larger props (`donut`, `bar-card`, `line-chart-card`) tilted 8–15°. Mix of ink-solid, paper and powder; at most a third solid black.
- **Signature motifs:** the concave **four-point sparkle** (marks AI/magic/insight), the **squircle blob**, the **hexagon**, the **spiky burst** behind a celebratory object, the **scribble ellipse** around words, the **tilted paper card** with black bars.
- **Perspective:** flat or a loose 3/4 isometric (≈30°). Never a vanishing point.
- **Tilt:** props sit at −15° to +15°; nothing important is perfectly level except text.
- **Hands and people:** if a person is needed, draw only hands/forearms (cuffs, sleeves) in ink line with white skin and a black or white sleeve — never faces or full figures in illustrations.
- **Text inside drawings:** short, UPPERCASE, condensed and heavy, in ink on a powder or paper surface (like a stencil on a box). Otherwise use black bars as "fake text".
- **Brand logos** of third-party tools: only as small marks inside white discs with a 1px ink ring.

## Do / Don't

- Do keep the ground of the illustration the block it sits on (`powder`, `surface`, `surface-fog`); no backgrounds inside the image except a burst or a sketchy frame.
- Do let one prop overlap the edge of its pane or card.
- Don't use colour outside the palette — no blue-purple gradients, no neon, no orange/red accents.
- Don't draw with a uniform geometric stroke (icon-font look) or with a heavy marker (crayon look).
- Don't add glow, blur, bevels, lens flares, 3D renders or photos of objects.
- Don't fill more than ~40% of an illustration with solid black.

## The doodle kit (Assets → Doodles)

Ready-made SVGs, all drawn to these rules: `sparkle-outline`, `sparkle-powder`, `hexagon`, `squircle-ink`, `squircle-paper`, `burst`, `donut`, `bar-card`, `line-chart-card`, `connector`, `spot-report`, and the scribbles `scribble-ellipse-{ink,paper,powder}`, `scribble-underline-{ink,paper,powder}`. Inline them with `Inkwell.doodle(name, {size, motion})` or `<span data-ik-doodle="name">`; use the files as `<img>` when nothing needs to move. Build new pictures by combining and re-tilting these before drawing from scratch.

## Drawing new SVGs by hand

Start every SVG like this, then draw plain paths inside the group:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240">
  <defs>
    <filter id="ik-r" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <g filter="url(#ik-r)" stroke-linecap="round" stroke-linejoin="round">
    <!-- inked shadow first, offset +4,+4 -->
    <rect x="84" y="64" width="120" height="150" fill="#000"/>
    <!-- the object -->
    <rect x="80" y="60" width="120" height="150" fill="#fff" stroke="#000" stroke-width="1"/>
    <rect x="92" y="72" width="54" height="8" fill="#000"/>            <!-- fake title bar -->
    <rect x="96" y="140" width="14" height="50" fill="#bfd9e3" stroke="#000"/>
  </g>
</svg>
```

- Displacement `scale` ≈ 1 per 100 units of viewBox (1.2 for a 100-unit doodle, 2 for 300, 3 for 500). Change `seed` per drawing so wobbles differ.
- Order: inked shadows → fills/outlines → hatching → highlights → satellites.
- Keep files small (<10 KB) and editable: no embedded raster, no fonts — convert any lettering to paths or use bars.

## Generating images with an AI image model

Use this prompt skeleton (fill the bracket), then check the result against the Do/Don't list:

> Hand-drawn editorial spot illustration of **[subject — e.g. "a stack of index cards being sorted into labelled trays"]**, thin black ink line art with slight natural wobble, flat fills only in pale powder blue (#BFD9E3), white and light gray, solid black offset shadows under objects, a few small four-pointed sparkles, hexagons and rounded-square blobs floating around, loose 3/4 isometric view, lots of empty space, plain [powder blue / white] background, no gradients, no shading, no text, no people's faces, minimalist tech notebook-doodle style.

Negative prompt: *gradient, 3D render, glossy, photorealistic, watercolor, crayon, thick marker, neon, purple, orange, drop shadow blur, lens flare, busy background, lettering*.

Then: place it on the matching block colour, crop with `radius-l` if it's a pane, and add 2–3 kit doodles in code so they can move.
