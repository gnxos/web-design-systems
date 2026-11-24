# Dewpoint

A bright, airy interface built from white space, one near-black ink, soft pill buttons and drifting confetti-like flecks. Large rounded art tiles carry glow rings and pastel halos; type is a friendly geometric sans set tight at display sizes. Light is the primary theme; Dark is derived from the same neutrals.

Measured at a **1440px** viewport. Sizes below are the values at that width; fluid rules use `clamp()`.

## Content fundamentals

- **Voice:** calm, plain, a little warm. Short declarative lines, present tense, no hype. Say what the thing does, not how amazing it is.
- **Casing:** sentence case everywhere, including buttons, nav and badges. Only the 12.5px badge may be set in capitals ("NEW"), with 0.6px tracking.
- **Person:** "you" for the reader, "we" sparingly for the makers. Never "users".
- **Headlines:** two short phrases, often with a comma or full stop. Under 36 characters. Example: "Small tools, steady hands."
- **Buttons:** one to three words, a verb first. "Get started", "Try the demo", "See how it works", "All posts". A trailing icon (download, arrow) may replace extra words.
- **Body copy:** one or two sentences, under 220 characters. Example: "Lay out your tasks, drag them into the days that fit, and let the calendar settle around you."
- **Meta:** dates as "Nov 18, 2026"; one category chip per post ("Journal", "Guide").
- **No emoji, no exclamation marks, no all-caps shouting, no stats as decoration.**

## Colour

Use tokens, never hex. Two themes, `light` (first) and `dark`. Every token has a usage note in `tokens.json`.

| Role | Tokens | Rule |
| --- | --- | --- |
| Ground | `surface`, `surface-container`, `-high`, `-higher`, `-highest` | Page on `surface`. Quiet panels on `surface-container`. Never stack more than two neutral steps. |
| Ink | `on-surface`, `on-surface-variant` | Headlines and labels `on-surface`; paragraphs and nav `on-surface-variant`. |
| Action | `primary`, `on-primary`, `primary-hover` | Near-black fill in light, near-white in dark. One primary per view. |
| Soft fill | `secondary-fill`, `secondary-hover` | Translucent blue-grey for secondary and nav buttons. |
| Accent | `accent`, `accent-text`, `on-accent-text`, `focus-ring` | `accent` is a graphic colour (glows, progress). Text and fills that carry text use `accent-text`. |
| Edges | `outline-hairline`, `outline`, `outline-strong` | Hairlines divide sections. `outline-strong` is the edge of inputs and any control without a fill. |
| Flecks | `fleck-blue`, `-violet`, `-magenta`, `-coral`, `-amber`, `-gold` | Decorative only. Sweep around a centre point; never under text. |
| Dark art | `night`, `on-night` | Ground and text of dark media tiles and the footer band. |

**Contrast flags** (full table in `accessibility.md`): the reference accent `#3279f9` is 4.0:1 as text on white, and its 12% hairline border is 1.3:1 on controls. Both values are kept; use `accent-text` and `outline-strong` instead where it matters.

## Typography

Sans **Figtree** (400–700 variable, weight 450 supported); mono **JetBrains Mono**. Both are free on Google Fonts and load from `tokens.css`. Figtree replaces a licensed face with the same single-storey `g`, similar width and similar weight; it has no optical-size axis, so display sizes get their tightness from letter-spacing only.

| Style | px / line | Weight | Tracking | Use |
| --- | --- | --- | --- | --- |
| `display-hero` | 80 / 88 | 450 | −1.6px | The one hero line. `clamp(40px, 5.6vw, 80px)` |
| `display-2xl` … `display-sm` | 148 → 54 | 450 | −2.96 → −0.95px | Poster marks, statements |
| `heading-1` | 42 / 43.68 | 450 | −0.73px | Section heading. `clamp(28px, 2.9vw, 42px)` |
| `heading-2` / `-3` | 32 / 28 | 450 | −0.15 / −0.1px | Feature and post titles |
| `heading-4` / `-5` | 24 / 22 | 500 | −0.07 / −0.08px | Card titles |
| `body` | 17.5 / 25.38 | 400 | 0.18px | Paragraphs, large buttons (15/22 under 767px) |
| `body-sm` | 14.5 / 21.02 | 450 | 0.16px | Nav, compact buttons, footer |
| `label` | 12.5 / 15.5 | 500 | 0.11px | Chips, badges |
| `code` | 14 / 22 | 400 | 0 | Mono |

Display steps shrink by breakpoint: 148→38 for the largest, 54→34, 42→28, 32→28 across 1440 → 425px. Body drops to 15/22 at 767px.

## Layout

- **Grid:** 12 columns, gutter 64px at 1440 (`grid-gutter`), 8 columns at 1024 (gutter 24–40), 4 columns at 767 and below (gutter 16). Page margin `clamp(72px, 5vw, 120px)`, 40px at 1024, 16px on phones.
- **Rhythm:** sections are separated by a 1px hairline and 120px of padding (`space-6xl`). Feature rows alternate text left / art right with 80px between them.
- **Pattern:** full-width sections, not a bento. Each section is one idea: a hero, a feature row, a horizontal row of posts, a card, a closing band. Content never exceeds 1600px; margins grow instead.
- **Sticky nav:** 52px, `surface` with a 10px backdrop blur and a hairline.

## Shape, elevation, blur

- **Radii:** every control is a pill (`radius-pill`). Menus `radius-md` 16px, art tiles and cards `radius-xl` 36px (24px on phones), the closing band `radius-2xl` 48px.
- **Shadows:** nearly none. `shadow-pill` for the announcement strip, `shadow-menu` for dropdowns, `shadow-pop` for dialogs and floating panels. Cards and tiles have no shadow; they are separated by tone.
- **Blur:** 4–6px behind secondary buttons and chips, 10px behind the sticky nav, 16px behind dialog scrims.

## States

- **Hover:** fill change only, 150ms ease-out. Primary → `primary-hover`; secondary/text → `secondary-hover`.
- **Pressed:** scale 0.98 for 180ms (inferred) and the hover fill.
- **Focus:** 2px solid `focus-ring`, 2px offset, on every interactive element. Inputs add `shadow-focus`.
- **Disabled:** `disabled-fill` ground, `disabled-text` label, no pointer events, no hover.
- **Selected:** 600 weight plus a check, never colour alone.

## Iconography

Outline icons on a 24px grid, 1.8px stroke, round caps and joins, `currentColor`. Sizes: 24px in large buttons, 20px in compact, 18px in nav chevrons, 14px in chips, 12px in badges. Set 18px for nav, 36–56px for feature marks. Prefer a variable symbol font (Material Symbols Rounded is a close free match) or inline SVG. No emoji; no filled multi-colour icons.

## Imagery and motion

- Imagery rules and generation prompts: `imagery.md`. Asset kit: `assets/`.
- Motion timings, curves and reduced-motion rules: `motion.md`.

## Using it

```html
<link rel="stylesheet" href="designs/dewpoint/tokens.css">
<link rel="stylesheet" href="designs/dewpoint/components/bundle.css">
<script src="designs/dewpoint/components/bundle.js"></script>
<script>Dewpoint.init();</script>
```

Class prefix `dp-`. Set the theme with `Dewpoint.theme.set("dark")` or `data-theme="dark"` on `<html>`.

## What was measured and what was inferred

Measured on a live page at 1440px: every colour, radius, shadow, blur, spacing step, type size, line height, tracking, button size, hover fill, easing curve, transition duration and the 500ms caret blink. Inferred: the dark theme (derived from the page's inverse tokens and dark-scoped components, since the page itself is light-only), the 0.98 press scale, the typing speed, the slow tile zoom, the wordmark size, the fleck palette beyond blue (matched by eye). Not measurable without the page's source: the fleck field's exact particle algorithm and pointer response.
