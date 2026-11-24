# Afterglow

> A dark bento-grid interface lit by grainy ember, teal and sand gradient fields. Exact Geist type, terminal panels, node graphs and pixel numerals for data-heavy, developer-facing products.

**Live preview:** [`index.html`](index.html) · **Guides:** [Imagery](imagery.md) · [Motion](motion.md) · **Tokens:** [`tokens.json`](tokens.json) / [`tokens.css`](tokens.css) · **Kit:** [`components/`](components/) · **Images:** [`assets/`](assets/)

---

Afterglow is a dark, quiet interface lit by warm and cool light. Near-black surfaces carry crisp Geist type; a few tiles glow with grainy ember, teal and sand gradients, like light caught on film. It is built for developer-facing, data-heavy products: terminals, graphs and numbers are the illustrations. It should feel **calm, exact and a little cinematic**.

Read this first, then **Imagery** (gradient fields, grain, product renders, graphs) and **Motion** (how anything moves). Four rules hold it together:

1. **Dark first.** `canvas` #0a0a0a is home; a full Light theme exists and every token has both values, but design and judge in Dark.
2. **Bento tiles, 12px corners, 12px gaps.** Every section is a grid of `ag-tile`s (`radius-xl`, `space-3` gap) inside a full-height, snap-scrolling section.
3. **Colour is light, not paint.** Neutrals do the work; colour arrives only as grainy gradient fields (`ember`, `teal`, `warm`, `sand`) and as tiny signal dots. No flat brand-colour buttons, no coloured text blocks.
4. **Rings, not borders.** Panels and buttons are outlined with an inset 1px shadow ring (`shadow-panel`, `shadow-btn`), never a CSS border.

## Content fundamentals

- **Voice:** technical, plain and confident. Short declarative sentences; no hype words, no exclamation marks, no emoji. Address the reader as *you/your* ("Your agent gets the facts first").
- **Headlines:** sentence case, 2–6 words, no full stop on fragments ("Use it from anywhere", "One shared picture of every account"); a full stop is fine on a two-sentence statement ("The data is ready. Your agent takes it from here.").
- **Eyebrows:** UPPERCASE, `eyebrow` style, 1–2 words, top-left of every tile: "SURFACES", "LIVE DATA", "RESULTS".
- **Body:** one or two sentences in `muted`, under ~70 characters per line.
- **Lists of surfaces/options:** interpuncts — "Terminal · API · Browser".
- **Numbers:** numerals with a suffix ("40M+", "2.3B", "12x", "18%"), set in the pixel face; a short label under them in sans.
- **Commands and data:** always in `code` (Geist Mono): `$ ag accounts search --sort revenue`. Tool names in `code-strong`.
- **Links:** "Learn" in `faint` followed by outline chips ("All docs", "Quickstart"); standalone links end with " →".
- **Honesty notes:** demo data is labelled in `caption`: "Sample data for illustration."

## Colour

| Token | Use |
| --- | --- |
| `canvas` | Page background (dark #0a0a0a / light #fff). |
| `panel` / `raised` / `ground` | Tile fill / menus and popovers / recessed wells and code. |
| `ink` → `muted` → `faint` | Three text levels; all pass 4.5:1 on canvas and panel in both themes. |
| `border` / `border-strong` | Hairline ring / dividers and input outlines. |
| `signal` + `signal-ink` / `signal-soft` | The one attention colour: live dots, key series, primary highlight; `-ink` for text, `-soft` for tinted grounds. |
| `success*`, `danger*` | States — always with a word or icon, never colour alone. |
| `ember` `coral` `sand` `teal` `slate` `charcoal` `paper` `mist` | The palette that gradient fields are mixed from. Same in both themes. |
| `series-1…4`, `series-other` | Charts and legends: ember, teal, sand, grey. |
| `term-*` | Terminal panels stay dark in both themes. |

- Text on **ember and teal tiles** is `paper` at 90% (`ink` is re-scoped inside the tile). On ember it is 3.9:1 — fine for 24px+ headlines and numbers, too weak for small body copy: keep small text on ember to one short line, or put it in a `ground` chip.
- Text on **sand and warm tiles** is `charcoal` at 90% (≥8:1).
- Per page: at most one ember tile, one teal tile and one sand/warm tile in view at once; the rest are `panel`.

## Type

- **Geist** (sans) for everything, **Geist Mono** for code and data, **Geist Pixel Square** for big numbers (falls back to Geist Mono where not installed). Geist and Geist Mono load from Google Fonts via `bundle.css`; all three are open-source (SIL OFL).
- Weights are light-handed: **500 for every heading**, 400 body, 600 only for emphasis in code and hub labels.
- Big type is tightly tracked: `display` −0.045em, `heading-1/2` −0.035em, `title` −0.018em; body −0.011em. Eyebrows are the only positive tracking (+0.14em).
- Scale: `display` 88/86 (hero only) · `heading-1` 56/60 · `heading-2` 44/48 · `heading-3` 32/38 · `title` 20/28 · `title-s` 15/24 · `body-l` 16/24 · `body` 14/22 · `body-s` 13/20 · `caption`/`eyebrow` 12/16 · `badge` 11/16. Numbers: `stat-xl` 72/72, `stat` 44/48.
- Headlines in gradient tiles sit **low** (bottom-left), with the eyebrow alone at the top-left and empty space between.

## Layout

- Each section is `min-height: 100vh`, `scroll-snap-align: start` (page `scroll-snap-type: y mandatory`), padded `section-pad-top` 80px / `space-10` 40px sides / `space-6` 24px bottom, so one section fills the screen under the 44px `header`.
- Inside: a 12-column `ag-bento` grid, max `content-max` 1440px, `space-3` 12px gaps. Typical recipes:
  - **Hero:** one full-width dusk field (`ag-hero`), headline bottom-left, a floating `ag-kv` data card bottom-right.
  - **Feature + demo:** a tall gradient tile (4 cols) beside a large dark panel (8 cols) holding a live render (graph, terminal).
  - **Facts:** a gradient tile + a sand stat tile stacked (4 cols) beside 2×3 panel feature cards (8 cols).
  - **Section header strip:** a short full-width panel with eyebrow + `heading-1` left, body right, above a 2×2 grid of demo tiles.
- Tile padding: `space-6` 24px on panels, `space-8` 32px on gradient tiles; small feature cards `space-5` 20px.
- Header: 44px, `canvas`, a 1px `border` bottom, product name in `title`-ish 20px/500 left, `body-s` nav in `muted`, a light primary `ag-btn--sm` right, a theme toggle icon.

## Shape, depth, states

- Radii: `radius-xl` 12px tiles · `radius-lg` 8px buttons, inputs, node hubs · `radius-md` 6px small buttons, rows · `radius-sm` 4px chips · `radius-full` dots.
- Depth: rings and short, neutral lifts only (`shadow-floating` for menus and the hero data card; `shadow-floating-lg` for dialogs). Glows don't exist — light comes from the gradient fields.
- Buttons: primary is **light on dark** (`ink` at 90% fill, `canvas` text, `shadow-highlight`); secondary is `panel` + `shadow-btn` ring; ghost is text-only. All 40px (`control-lg`) or 28px (`control-sm`). Hover changes colour in 120ms; press scales to `scale-press` 0.97 in 140ms.
- Focus: 2px solid `focus` (= `ink`), 2px offset, every interactive element, both themes.
- Disabled: `opacity-disabled` 0.4.

## Imagery and iconography

- **No illustrations, no photos.** Pictures are either grainy gradient fields (see **Imagery**) or real-looking product renders: terminals, JSON, tables, node graphs, built in HTML with the system's own tokens.
- **Icons:** 14–16px single-weight line icons (1.5px stroke, round caps; a Lucide-style set) in `muted`, usually inside a 24px `ag-icon-box` with a `border-strong` ring at a feature card's top-left. No filled or coloured icons.
- **Third-party marks** (logos of tools you integrate with) only appear small, monochrome, inside chips.
- **No logo is defined for Afterglow.** Set the product name in Geist 500 20px with −0.02em tracking.

## Using the kit

Load `tokens.css`, `components/bundle.css`, `components/bundle.js`, then `Afterglow.init()`.

- Tiles: `ag-tile ag-tile--panel | --ground | --ember | --teal | --warm | --sand` (gradient tiles get grain automatically; add `ag-grain` to anything else).
- Hero: `ag-hero` + `ag-display` + `ag-kv`.
- Live renders: `ag-term` (+ `ag-line-in` for the staggered reveal), `[data-ag-graph='{"hub":…,"nodes":[…]}']` or `Afterglow.graph(el, data)`.
- Theme: `data-theme="dark|light"` on any element, or `Afterglow.theme("light")`.
