# Draftline

A drafting sheet for technical products: warm-white paper, ruled columns with shaded gutters, square corners with small bracket marks, mono uppercase controls, one teal accent and isometric line drawings. Light is the primary theme; Dark is derived from it.

Draftline is brand-neutral. The name is set in plain type; there is no logo.

## Content and voice
- Precise and short. Name the thing, the number and the unit.
- Headlines: up to seven words, sentence case, no full stop. "Build once, update every device calmly".
- Labels: one or two words in brackets, set by CSS. "[ ROLLOUTS ]". Stat names read like variables: `$build_time`.
- Buttons: verb first, one to three words: "Start building", "Read the manual".
- Never invent customers, quotes, benchmarks or figures. Mark samples as samples.

## Colour
- `surface` paper, `surface-raised` white for anything that holds content, `surface-sunk` gutters.
- Teal is the only accent: the primary fill, bracket labels, line numbers and the one important part of a drawing.
- Text is near black, with `on-surface-variant` for paragraphs.
- The source teal is light. Prefer `primary-safe`, `accent-text-safe` and `on-surface-muted-safe` for anything a person must read (see `accessibility.md`).

## Type
Geist for headlines and prose, Spline Sans Mono for controls, labels, figures and code.

| Style | Size / line | Weight | Tracking |
| --- | --- | --- | --- |
| display | 44 / 52.8 | 500 | -0.88px |
| title | 28 / 33.6 | 500 | -0.56px |
| lead | 16 / 22.4 | 400 | 0 |
| body, small | 14 / 19.6, 12 / 16.8 | 400 | 0 |
| button-label | 14 / 20 | 600 | 0.56px |
| tag-label | 12 / 16.8 | 500 | 0.48px |
| reading | 20 / 28 | 400 | 0.8px |

Fluid rule: display is `clamp(34px, 3.06vw, 44px)`.

## Layout
- A 1200px frame with shaded side gutters around a ruled column of about 1000px. Horizontal rules separate everything.
- Content sits in grids whose cells share 1px lines; no floating cards.
- Phones: one column, 16px padding, nav links collapse, hero art fades back.

## Shape and depth
Radius is 0 for buttons, fields, panels and cells; 2px for code chips, pill only for dots. Corner marks (`df-corners`, 4px arms) show what is selected or pressable. The one shadow is the primary button's glow and bevel.

## States
- Primary hover fills `primary-hover` over 400ms. Quiet buttons step to `fill-quiet-hover` in 200ms.
- Selected tabs and chips turn white and gain corner marks.
- Focus: 2px `focus-ring`, 2px offset.

## Iconography
16px line icons, 1.6px stroke, mitred joins. No emoji.

## Imagery
See `imagery.md`.

## Using it
```html
<html data-theme="light">
<link rel="stylesheet" href="draftline/tokens.css">
<link rel="stylesheet" href="draftline/components/bundle.css">
<script defer src="draftline/components/bundle.js"></script>
<script>addEventListener("DOMContentLoaded", () => Draftline.init());</script>
```
Classes start with `df-`. Behaviours: `data-scramble`, `data-type`, `data-appear`, `data-tabs`, `data-chips`, `data-dropdown`, `data-copy`.

## Measured and inferred
Measured at 1440 x 900 (and one 390px check): light colours, type sizes and tracking, the primary button's colours, shadow and 400ms hover, quiet-button hover, hairlines, banner, marquee, caret and appear timings.
Inferred: the whole Dark theme, every "safe" token and `outline-strong`, menu shadow, form error and pricing styles, typing speed and the label decode timing.
