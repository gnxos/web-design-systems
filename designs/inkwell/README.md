# Inkwell

> Black ink on paper, a soft powder blue and hand-drawn doodles. Rounded colour blocks, heavy wide headlines, ink-line illustrations with flat fills, gently spinning and bobbing confetti.

**Live preview:** [`index.html`](index.html) · **Guides:** [Illustration](illustration.md) · [Motion](motion.md) · **Tokens:** [`tokens.json`](tokens.json) / [`tokens.css`](tokens.css) · **Kit:** [`components/`](components/) · **Images:** [`assets/`](assets/)

---

Inkwell is black ink on paper, a soft powder blue, and hand-drawn doodles that look like a smart person's notebook margins. Big confident type sits inside rounded colour blocks, small sketchy shapes drift and spin around it, and every illustration is drawn with the same 1px ink line and flat fills. It should feel **precise but human**: data clarity, made warm by the hand.

Read this first, then **Illustration** (how to draw or generate any image) and **Motion** (how anything moves). Three rules hold everything together:

1. **Three colours do 95% of the work:** `ink`, `surface` (paper) and `powder`. Everything else is a supporting neutral.
2. **Everything sits in a rounded block** (`radius-l` 20px) inset `space-gutter` (20px) from the page edge, and blocks stack with a 20px gap.
3. **Every picture is ink line + flat fill.** No gradients, no photos of objects, no 3D renders, no stock icons. Depth comes from a solid black offset ("inked shadow"), never a blur.

## Content fundamentals

- **Voice:** plain-English, confident, slightly playful, never hype. Talk to the reader as *you/your*; the product is the subject, not "we". Lead with an outcome or a number: "Most of the work happens before the first meeting."
- **Headlines:** sentence case, short, a full stop is welcome on a statement ("Built for the way your team already works."). 1–3 words inside a headline can carry a scribble or a powder highlight: "Turn scattered notes into *clear answers*", "Ready to start *drawing conclusions?*"
- **Claims strip:** three short claims joined by interpuncts, in `heading-m` weight 600: "Plain language · Every step shown · No lock-in".
- **Eyebrows:** UPPERCASE, `eyebrow` style, above every section headline: "HOW IT WORKS", "FEATURES", "STORIES". Never coloured.
- **Buttons:** big CTAs UPPERCASE ("GET STARTED", "SEE HOW IT WORKS", "READ THE STORIES →"); the header CTA is sentence case ("Get started"). Text links end with " →" ("Learn more →", "Read the story →").
- **Numbers:** numerals, not words; big stats on ink in `powder` ("48h", "3×"), with a two-word label underneath.
- **No emoji. No exclamation marks.** Personality comes from the doodles, not from punctuation.

## Colour

| Token | Use it for |
| --- | --- |
| `powder` #bfd9e3 | Hero and feature blocks, image panes, doodle fills, highlight box, stat numerals on ink. The colour people remember. |
| `ink` #000 | All text, outlines, doodle strokes, primary buttons, the ink blocks. |
| `surface` #fff | Page ground; white cards sitting on a powder block. |
| `surface-fog` #f5f5f5 | Calm gray block + 3-up feature cards (with a 1px `line`). |
| `powder-50` #dfecf1 | Second fill inside illustrations; receded stacked card. |
| `muted` #8e8e8e | Small labels on ink only (6.4:1). On paper it fails for small text (3.3:1) — don't. |
| `line` #ccc | Hairline borders of fog cards. |

- **Rhythm down a page:** paper header → `powder` hero → `ink` logo strip → paper → `powder` feature → `ink` proof strip → `surface-fog` grid → `powder` → `ink` stories → … → `ink` footer. Alternate; never put two blocks of the same colour next to each other.
- **Ink blocks are the Ink theme:** put `data-theme="dark"` on the block so `surface` becomes black, `ink` becomes white and `focus` becomes powder. `powder` stays the same and becomes the accent on black.
- **Text on powder is always `on-powder` black** (14:1). Never white text on powder.
- No other hues. Third-party brand colours (partner logos, review stars) appear only inside their own logos.

## Type

- One family: **Archivo** (`--font-sans`; free on Google Fonts, loaded by `bundle.css`, weights 400–800). Run display sizes at `font-stretch: 108%` for a slightly wide, heavy stance; body text stays at normal width.
- Headlines are **heavy (800), tight (line-height 0.96–1.0)** and big: `display-l` for the hero, `heading-xl` for sections, `display-xl` for one centred showpiece title. Card titles drop to 600–700.
- Body is **medium-weight** (`body-l` 500) for leads and **regular** (`body` 400, +0.16px tracking) for everything else.
- Sizes are defined at a 1920px viewport and scale with it. Use clamp: hero `clamp(40px, 3.75vw, 72px)`, section `clamp(34px, 2.92vw, 56px)`, card title `clamp(24px, 1.77vw, 34px)`, lead `clamp(17px, 1.04vw, 20px)`.
- Centre the hero and big section titles; left-align headlines that sit beside an illustration.

## Layout

- Page = a column of rounded blocks: `.ik-page` (20px side padding, 20px gaps) holding `.ik-block` (`radius-l`, `space-section` vertical padding). Content max width `content-max` 1480px, centred.
- Cards: fog cards in a 3-up grid with `space-gutter` gaps and `space-card` (50px) padding; white product cards on a powder block, two columns (text left, illustration/screenshot in a powder pane right).
- Generous air: a hero is mostly empty powder, with the headline centred and confetti doodles near the edges only — never behind the text.
- Header: white, logo left, plain nav links, an outline `Log in` (`ik-btn--nav`) and a small ink CTA (`ik-btn--sm ik-btn--primary`) right.

## Shape, borders, shadows

- Corners: `radius-l` 20px for blocks/cards/panes, `radius-m` 10px for buttons and highlight, `radius-s` 8px for small controls. Nothing else.
- Borders are 1px: `line` on fog cards, `line-strong` (ink) on outline buttons. No thick borders except the hand-drawn ones inside illustrations.
- Shadows: almost none. `shadow-pop` on dropdowns, `shadow-float` on a floating launcher, `glow-ai` only around an AI ask bar. Depth inside pictures = an inked black offset of 3–5px down-right.

## States

- Primary (ink) button: hover → `opacity-hover` 0.8 over 100ms linear.
- Outline button: hover → fills `ink`, text turns `surface`.
- Text link: underline 1px → 2px on hover.
- Focus: 2px solid `focus`, 2px offset, on every interactive element, both themes.

## Imagery and iconography

- **Illustrations:** ink-line doodles with flat `powder`/paper/fog fills — see **Illustration** for the full spec, a ready-made AI image prompt and the doodle kit (Assets → Doodles).
- **Product UI** appears as real screenshots, cropped and placed inside a `powder` pane with `radius-l` corners, sometimes with a scribble or a doodle overlapping the edge. Never a device mockup.
- **People** appear only in proof (testimonials, customer stories): real photos, warm and natural, cropped tight in square or 4:5 tiles with a big white stat set over the lower-left.
- **Icons** are drawn in the doodle style (1px ink outline, optional powder fill), not taken from an icon font. Logos of other tools sit in small white discs with a 1px ink ring inside illustrations.
- **No logo is defined for Inkwell.** Set the product name in `ink` Archivo 500; don't draw a mark.

## Motion (summary)

Small doodles spin slowly (10s linear) or bob (2s, `ease-float`, alternate); blocks rise into place as you scroll (`ease-scroll`); product cards stack and the covered one recedes to 95% / 50% opacity; scribbles draw on once. Everything stops under `prefers-reduced-motion`. Details and code: **Motion**.

## Using the kit

Load `tokens.css`, `components/bundle.css` and `components/bundle.js`, then call `Inkwell.init()`. Declarative hooks:

- `<span data-ik-scribble="ellipse">clear answers</span>` — hand-drawn ellipse that draws on (`underline` also; add `data-ik-ink="paper"` on ink blocks).
- `<span class="ik-highlight">drawing conclusions?</span>` — powder box with a sketchy ink border.
- `<section class="ik-block ik-block--powder" data-ik-confetti="12">` — seeded spinning/bobbing doodles around the edges.
- `<span data-ik-doodle="spot-report" data-size="300"></span>` — any doodle from the kit inline; `Inkwell.names` lists them.
- `.ik-rise`, `.ik-rise--10`, `.ik-rise--30` — scroll-linked rise; `.ik-stack` — sticky stacking card.
