# Imagery

Afterglow has exactly two kinds of picture: **gradient fields** (soft, grainy colour light) and **product renders** (terminals, data, graphs drawn with the system's own UI). Nothing else — no illustrations, no stock photography, no 3D objects, no icons-as-art.

## 1. Gradient fields

A field is coloured light seen through film grain: two or three large, very soft colour masses over a linear base, then grain on top.

| Field | Base (linear) | Light masses | Text on it |
| --- | --- | --- | --- |
| **Dusk** (hero only) | 160°: #1d3a40 → #2a5a63 → #16282c | a wide teal haze (`success` #4f9aa8) left of centre; one hot ember glow (#e0602a with a #ff8a57 core) right of centre, upper third; dark vignette to `canvas` at the edges and bottom | `paper` 90% |
| **Ember** | 140°: `ember` → #dc6a3e 60% → `coral` | a lighter #f0884f bloom top-right, a deeper #c63a03 pool bottom-left | `paper` 90% (headlines only) |
| **Tide** | 165°: #2f7683 → `teal` 45% → `slate` | a pale #8fc0c7 mist top-right, a deep #1b4f59 pool lower-left | `paper` 90% |
| **Warm** | 120°: `sand` → `coral` 55% → `ember` | a pale #e4d3ca bloom top-left | `charcoal` 90% |
| **Sand** | flat `sand` (or a 2-stop #d4bfb4 → #c7b0a4) | none | `charcoal` 90% |

Rules:
- **Grain is mandatory** on every field: fractal noise (base frequency 0.9, 3 octaves, greyscale), tiled at 160px, `mix-blend-mode: overlay`, `opacity-grain` 0.6. It is what makes the colour feel like light rather than a CSS gradient.
- **Masses are huge and soft** (blur radius ≈ 15–20% of the field's short side). No visible edges, no rings, no shapes.
- **One hot spot per field at most**, never centred; leave the bottom-left calm, because that's where the headline goes.
- **No hues outside the palette** — no purple, no pink, no neon blue, no rainbow meshes.
- Fields are always cropped by a 12px-radius tile; they never fill a page edge to edge.

### Make one in CSS (preferred, crisp at any size)

`ag-tile--ember`, `--teal`, `--warm`, `--sand` and `ag-hero` in `bundle.css` are complete recipes: layered `radial-gradient`s over a `linear-gradient`, plus the grain `::after`. Copy one and move the radial centres to recompose.

### Use the files

Assets → Fields holds 1200×800 SVG renders (`field-dusk`, `field-ember`, `field-tide`, `field-warm`, `field-sand`) and the 160px `grain-tile` — use them as `<img>`/`background-image` for exports, slides, social cards and video backplates.

### Generate one with an image model

> Abstract soft-focus colour field, [deep teal haze with a single warm ember-orange glow right of centre / saturated orange to soft coral / deep teal to blue-grey slate], very large blurred light masses, no shapes or objects, heavy fine film grain, analogue photographic texture, dark vignette at the edges, calm empty lower-left area, 3:2.

Negative: *shapes, lines, text, bokeh circles, neon, purple, pink, rainbow, glossy, 3D, sharp edges*.

## 2. Product renders

Show the product working, using real components rather than screenshots or mockups.

- **Terminal / transcript** (`ag-term`): dark in both themes, Geist Mono 13/20, a 36px header bar with a title left and a live `ag-dot` + status right; `>` prompt in `term-faint`; tool calls in `code-strong`; tree lines (├ └) in `term-muted`; source tags as `ag-chip--mono` ("CRM", "Email · 6 replies").
- **API response:** a `ground` well with a method chip (`POST`), a path, a status (`200 OK`) and pretty-printed JSON in mono.
- **Tables:** mono, right-aligned numbers, header row in `faint` `code-s`.
- **Node graph** (`ag-graph`, Assets → Fields → `node-graph`): one light **hub** card (inverted: `ink` fill, `canvas` text, an ID line in mono) with 6–12 dark node chips around it on thin `border-strong` lines; each chip starts with a 6px dot in a series colour and a `faint` type label ("Meeting", "Web visit"). A legend row of square dots sits under the graph.
- **Chips row** above a render: which client/surface it's running in ("Terminal", "Editor", "Browser").
- Renders sit inside a `panel` tile or float over a gradient field with `shadow-floating`. Keep them legible at 100% — real text, real-looking data, labelled "Sample data for illustration".

## Do / Don't

- Do let a gradient tile and a dark render tile sit side by side — light beside detail is the signature composition.
- Do keep renders monochrome with one colour accent (a signal dot, one series).
- Don't put a gradient behind body text longer than two lines.
- Don't add glows, glass, reflections or coloured shadows to components.
- Don't use photographs of people or offices; testimonials are text with initials avatars (`avatar-*`).
