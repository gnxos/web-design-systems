# Gridlight

A black, ruled system for products that do work for people. One soft light falls from the top-left, sections sit inside a 1056px frame drawn with 1px lines, controls are small and quiet, and words resolve out of blur. Dark is the primary theme; Light is derived from it.

Gridlight is brand-neutral. The name is set in plain type; there is no logo.

## Content and voice
- Calm, concrete, short. Say what it does and what still needs a person.
- Headlines: two lines, up to eight words, sentence case, no full stop. "Built for the people on the floor".
- Leads: one sentence. "Every screen answers one question before it asks for anything."
- Buttons: one to four words, verb first: "Start a trial", "Open the report", "Read the notes".
- Never invent customers, quotes or figures. Mark samples as samples.

## Colour
- Black ground, near-white ink (`on-surface`), grey leads (`on-surface-variant`), quieter grey links (`on-surface-muted`).
- White is the only action colour. Everything else that can be pressed is grey (`fill-secondary`).
- Colour is information: `success`, `danger`, chart series (`blue`, `violet`, `amber`) and one `warm` announcement tag. It never fills a section.
- Surfaces step up in small amounts: `surface`, `surface-raised`, `surface-container`, `surface-container-high`.

## Type
Inter for everything, DM Mono for run logs and paths, Source Serif 4 only on report covers. Weights 400 and 500 do almost all the work.

| Style | Size / line | Weight | Tracking |
| --- | --- | --- | --- |
| display | 48 / 56 | 500 | -1.08px |
| display-stat | 56 / 64 | 500 | -2.94px |
| heading, lead | 18 / 24 | 500, 400 | -0.045px |
| body | 16 / 24 | 400 | -0.2px |
| ui, ui-strong | 14 / 20 | 400, 500 | -0.175px |
| caption | 12 / 16 | 400 | -0.15px |

Fluid rule: display is `clamp(36px, 3.34vw, 48px)`; on phones it sets at 36 / 40.

## Layout
- A framed column of 1056px with 1px rules; dashed guides 12px outside it. Cells share borders instead of floating apart.
- Section rhythm 96px; headline block left-aligned with arrows at the right, centred only for openings and closings.
- The hero holds a product window that runs off the bottom of the first screen.
- Phones: one column, 16px gutter, nav links hidden behind the primary action.

## Shape and depth
Radii: 4 (square icon buttons), 6 (tags, icon tiles), 8 (buttons), 12 (menus), 16 (product cards), 20 (large art), pill (chips). Depth comes from surface steps and hairlines. The only shadows are the 1px ring on grey buttons and an inferred menu shadow.

## States
- Primary hover drops the fill to 70%. Grey hover steps to `fill-secondary-hover`.
- Links go from muted to full ink (150 to 300ms).
- Focus: 2px `focus-ring`, 2px offset.
- Pressed chips invert. Disabled uses `surface-container-high` and `on-surface-disabled`.

## Iconography
16px line icons, 1.8px stroke, round joins, inheriting colour. In menus they sit in 40px tiles. No emoji.

## Imagery
See `imagery.md`. Light beams, node constellations, punched report covers, abstract product panels and faceless silhouettes.

## Using it
```html
<html data-theme="dark">
<link rel="stylesheet" href="gridlight/tokens.css">
<link rel="stylesheet" href="gridlight/components/bundle.css">
<script defer src="gridlight/components/bundle.js"></script>
<script>addEventListener("DOMContentLoaded", () => Gridlight.init());</script>
```
Classes start with `gl-`. Behaviours: `data-swap`, `data-words`, `data-reveal`, `data-tabs`, `data-chips`, `data-dropdown`.

## Measured and inferred
Measured at 1440 x 900 (and one 390px check): the dark colours, type sizes and tracking, button, chip and menu geometry, hover fills, keyframes, durations, easings and the 3s word swap.
Inferred: the whole Light theme, `outline-strong`, `media-scrim`, `focus-ring` use, the menu shadow, plan and form styling, the 90ms word stagger and 450ms step stagger.
