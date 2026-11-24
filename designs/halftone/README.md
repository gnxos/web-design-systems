# Halftone

> Cool grey and white with one electric pink, warm people photography under frosted glass, pink dot-matrix graphics, pill controls and uppercase mono labels.

**Live preview:** [`index.html`](index.html) · **Guides:** [Imagery](imagery.md) · [Motion](motion.md) · **Tokens:** [`tokens.json`](tokens.json) / [`tokens.css`](tokens.css) · **Kit:** [`components/`](components/) · **Images:** [`assets/`](assets/)

---

Halftone is cool grey and clean white, one electric pink, and warm photographs of real people at work, overlaid with frosted glass and fine pink dot patterns. Type is light and wide-open; labels are monospaced and uppercase like a terminal readout. It should feel **human, confident and engineered**: people first, data underneath.

Read this first, then **Imagery** (photography, glass, dot matrices, pixel glows) and **Motion**. Four rules hold it together:

1. **Pink is the only loud colour.** `pink` marks the one primary action, one accent word per headline, the active tab and the dots. Everything else is ink, white and cool grey (`surface`). Lavender, mint and butter are quiet supporting washes.
2. **Two voices of type:** a regular-weight sans for everything you read (`display` → `body`, never bold) and an uppercase mono for everything you tap or scan (`button`, `tag`, `index`, `rating`).
3. **Round, then rounder:** buttons, chips, tabs and the nav are pills (`radius-pill`); cards are `radius-lg` 40px; big sections go to `radius-xl`/`radius-2xl`.
4. **Glass over photos.** On photography, UI sits on frosted glass (`glass*` + `blur-*`) with a soft dark scrim — never opaque boxes.

## Content fundamentals

- **Voice:** direct, optimistic, specific. Short declaratives, often in pairs: "Find the account. Start the conversation." Talk to *you/your team*; no exclamation marks, no emoji.
- **Headlines:** sentence case, regular weight, 2 lines max, **one** word or short phrase in `pink`: "Work every account in *one place*", "Results you can *measure*."
- **Eyebrows:** a "/" marker, then 2–5 words UPPERCASE on two short lines, top-left of a section: "/ THE WORKSPACE", "/ PROOF FROM THE FIELD". They carry the shimmer.
- **Buttons:** mono UPPERCASE, 2–3 words: "GET STARTED", "SIGN IN", "SEE THE PLATFORM". The arrow-circle variant ends with a → disc.
- **Stats:** big numeral (`stat`) with a sign and unit ("+24%", "3x", "48h"), then a mono tag on `mint` naming the outcome ("FASTER FIRST REPLY"). Never a stat without its tag.
- **Testimonials:** a short quote in quotation marks, then the name and role as two mono chips (ink chip for the name, outline chip for the role).
- **Lists inside cards:** mono uppercase lines prefixed with "+": "+ ENRICHMENT", "+ SIGNALS".
- **Proof strip:** "4.9 / 900+ REVIEWS" in mono with five small pink stars.

## Colour

| Token | Use |
| --- | --- |
| `canvas` | White page / near-black dark sections and nav. |
| `surface`, `surface-strong` | Cool grey sections and cards; hover. |
| `ink`, `ink-secondary`, `ink-faint` | Text: primary, slate body copy, captions. |
| `pink` (+ `-hover`, `-strong`) | CTA fill, accent words, active tab, dots, glows. **Text on pink is `on-pink` (ink)**. |
| `purple` | Links, icons, focus on light, secondary chart series. |
| `lavender`, `mint`, `butter` (+ light/strong) | Tag and card washes. `green`, `yellow` are dot-only. |
| `glass`, `glass-clear`, `glass-dark` (+ lines) | Frosted elements over photos and pink. |
| `scrim` → `scrim-strong` | Gradient behind white text on photos. |

Contrast notes (kept exact from the reference, flagged): `pink` as text on white is 2.5:1 — use it only for accent words at 48px+, never for small text or the only cue; white text on `pink` is 2.5:1, so set `on-pink` (ink, 7.5:1) instead. `ink-faint` on white is 3.9:1 — 18px+ or non-essential text only.

Section rhythm: white hero (photo) → white logo wall → `surface` product section → white proof bento → dark `radius-xl` panel → photo section with glass cards → black footer with a pixel glow.

## Type

- **Hanken Grotesk** (sans, 400 only) for reading; **Geist Mono** (400) for labels, buttons, tags, numbers in circles. Both free on Google Fonts and loaded by `bundle.css`.
- Big type is regular weight and tightly tracked: `display` 80/80 −0.05em, `heading-1` 64/64 −0.047em, `stat` 64/64 −0.02em, `heading-2` 36/36, `heading-3` 28/30.8.
- Body: `lead` 20/24 for descriptions, `body` 16/22, `small` 14/18. Mono: `button` 16, `rating` 18, `index` 14, `tag` 13 — always UPPERCASE, no extra tracking.
- The site scales everything with the viewport: treat the values as the 1920px layout and scale with `clamp()` (helpers `ht-display`, `ht-h1` do this).

## Layout

- 12-column grid, max `grid-max` 120rem, fluid `grid-gutter` and `grid-margin`.
- **Section header:** eyebrow on the left half, `heading-1` on the right half, content below after `space-16`.
- **Bento:** `ht-bento` with `space-5` 20px gaps, mixing white cards, `surface` cards, one `pink` card with glass bubbles, photo cards and logo cells — all `radius-lg`.
- Cards pad `space-10` 40px; titles start with an 8px pink dot.
- **Nav:** a floating black pill (`ht-nav`) inset from the page edges: name left, sans links centre, a white "SIGN IN" and a pink "GET STARTED" pill right.

## Shape, depth, states

- Radii: `radius-pill` controls · `radius-lg` 40px cards and photo frames · `radius-md` 17px small UI cards over photos · `radius-sm` 10px and `radius-xs` 7.2px inside UI renders · `radius-xl` 56px and `radius-2xl` 100px for whole sections.
- Depth: glass + blur on photos; `shadow-float` for floating UI cards; `shadow-glow` (purple-pink haze) only as a hover on clickable proof.
- Hover: pink → `pink-hover` (150ms); white → `surface`; ink → `purple` (450ms, `ease-expo`); arrow discs nudge 3px right. Press: scale 0.97.
- Focus: 2px solid `focus` (purple on light, pink on dark), 3px offset.

## Imagery and iconography

- **Photography first:** warm, natural, shallow-depth portraits and candid work moments; see **Imagery**. Product UI floats over photos as small white cards.
- **Generated graphics:** the dot sphere, halftone glow, pixel glow and scanline overlay (Assets → Graphics; live versions in `Halftone.sphere()` / `Halftone.halftone()`).
- **Icons:** 13–16px single-weight line icons (1.5px stroke) in chips and card titles; white in smoked chips, ink elsewhere. No filled or multicolour icons.
- **No logo is defined for Halftone.** Set the product name in Hanken Grotesk 400, −0.03em.

## Using the kit

Load `tokens.css`, `components/bundle.css`, `components/bundle.js`, then `Halftone.init()`.

- Buttons `ht-btn ht-btn--pink | --white | --ink | --ghost` (+ `--sm`, `--arrow` with `ht-btn__disc`).
- Tags `ht-tag` (+ `--mint`, `--butter`, `--ink`, `--line`, `--smoke`); tabs `ht-tabs > button.ht-tab[aria-selected] > span.ht-tab__n`.
- Cards `ht-card` (+ `--white`, `--pink`, `--ink`); photos `ht-photo` (+ `ht-scanlines`) with `ht-glass`, `ht-bubble`, `ht-ui` on top.
- `<canvas data-ht-sphere>` and `<canvas data-ht-halftone>` draw the graphics live.
