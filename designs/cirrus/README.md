# Cirrus

A bright, confident product-marketing system: white pages, one vivid blue, pill buttons and big rounded cards filled with soft sky gradients and frosted glass. A tight, friendly sans runs from small labels to 56px headlines, and headlines resolve word by word. A black closing section ends the page. Light is the primary theme; Dark is the black section, carried by the same tokens.

Measured at a **1440px** viewport; sizes below are the values at that width and the fluid rules use `clamp()`.

## Content fundamentals

- **Voice:** direct, outcome-led, plain business language. Lead with what changes for the reader, then the mechanism. Confident but not shouty.
- **Casing:** sentence case for headlines, buttons and nav. Only the 13px side-tab labels are uppercase.
- **Headlines:** a claim in 4–9 words, no full stop needed. "Plan less. Ship calmly." is the shape (two short clauses) and "Plan, track and bill in one place" the other (a list of three verbs).
- **Lead copy:** one sentence under 120 characters that names the audience's work: "One workspace that keeps schedules, budgets and clients moving together."
- **Buttons:** a verb and one or two words: "Book a tour", "Start free", "Learn more", "See a tour". Never "Click here".
- **Proof:** a stat or a short quote with a name, a role and a company. Numbers are real and specific ("12 min", "100%"); if you cannot source a figure, leave it out. Do not stack more than three stats.
- **Person:** "you" and "your team"; the product is "it" or its own name. No exclamation marks, no emoji.
- **Product names:** invent short nouns for capabilities ("Helpers", "Planner"); do not use real customer logos, real people or real companies in examples.

## Colour

Use tokens, not hex. Two themes: `light` (first) and `dark`. Every token has a usage note in `tokens.json`.

| Role | Tokens | Rule |
| --- | --- | --- |
| Ground | `surface`, `surface-container`, `-high`, `-higher` | White page; `surface-container` (#f5f5f7) for quiet panels; never stack more than two steps. |
| Ink | `on-surface`, `on-surface-variant` | Near-black #1d1d1f for headlines and body; #6f6f6f for roles and captions. |
| Action | `primary` (#0f62fe), `on-primary`, `primary-hover`, `primary-hover-safe` | One blue. White label on it is 5.0:1. Hover lightens to #4589ff in the source; use the darker `primary-hover-safe` where legibility matters. |
| Links | `accent-text` | #0f62fe on white, #4589ff on black. |
| Glass | `glass-fill`, `glass-fill-strong`, `glass-border`, `glass-card-*` | White-on-photo only. Contrast depends on the image: add a `photo-scrim`. |
| Chips | `blue-light` + `blue-dark` | #d0e2ff with #001d6c text, 11.5:1. |
| Status | `success-text/soft`, `danger-text/soft` | Always with words ("Open issue", "Expansion"). |
| Data | `sky`, `cyan`, `purple`, `magenta`, `orange`, `yellow` | Series, avatars and glows; yellow and orange never as text. |
| Dark | `night`, `on-night` | Pure black ground, white text. |

**Contrast flags:** the source hover blue (#4589ff) gives white text only 3.3:1; the inactive tab tone (50% ink) is 3.3:1; blue text on `blue-light` is 3.8:1. Values are kept as tokens and each has a safe alternative. See `accessibility.md`.

## Typography

Sans **Inter Tight** (400–700 variable); mono **JetBrains Mono** for role chips and tags. Both are free (Google Fonts) and load from `tokens.css`. Inter Tight is the closest free match to the reference face by letterform and width; large buttons in the reference use a second family, and Cirrus keeps one sans for simplicity.

| Style | px / line | Weight | Tracking | Use |
| --- | --- | --- | --- | --- |
| `display-hero` | 56 / 67.2 | 500 | 0.15px | Hero headline. `clamp(36px, 3.9vw, 56px)` |
| `display-blur` | 64 / 76.8 | 500 | 0.15px | Large statements. `clamp(40px, 4.4vw, 64px)` |
| `heading-1` | 48 / 57.6 | 500 (600 for stats) | 0.15px | Section headlines. `clamp(32px, 3.3vw, 48px)` |
| `heading-2` | 39 / 50.8 | 400 | 0.15px | Feature headline. `clamp(28px, 2.7vw, 39px)` |
| `heading-3` | 31 / 46.9 | 400 | 0.15px | Sub-headline; 500 in banners |
| `lead` | 20 / 30 | 400 | 0.15px | Lead copy, names |
| `body` | 16 / 24 | 400 | normal | Paragraphs, buttons |
| `body-sm` | 14 / 21 | 400 | normal | Card text, table cells |
| `caption` | 12.8 / 19.2 | 400 | normal | Utility links, fine print |
| `tab-label` | 13 / 20 | 600, uppercase | 0.2px | Side tabs (11px under 767px) |

Headings are weight 500 (400 at 31–39px); letter-spacing is a flat 0.15px on headings and lead. No italics.

## Layout

- **Page margin** 72px at 1440 (nav and section content), 40px at 1024, 16px on phones.
- **Hero field** sits 36px in from each side (1368 wide) with 24px corners.
- **Sections** are full-width rows separated by 120px of space: hero, a pair of tall feature cards, a black statement section, a two-column "side tabs + content" explorer, glass testimonial grid, a CTA field, the black footer.
- **Grids:** two 528px feature cards with a 24px gap; 4-up glass boxes 392px wide with a 24px gap; the explorer uses a 262px sticky tab column and content from x=336.
- **Sticky nav** 66px with a 43px utility strip above it.

## Shape, elevation, blur

- **Radii:** buttons 40px (pill), glass pill 50px, cards and fields 24px, tall feature cards 40px, avatars round.
- **Shadows** are rare: `shadow-float` / `shadow-ui` / `shadow-ui-lg` only for white UI cards inside mock-ups; marketing cards have none.
- **Blur** is a signature: 2px on light glass pills, 20px on glass cards, 35px on glass buttons, 50px on the frosted panel of feature cards, 94px on soft glass boxes.

## States

- Hover changes fill and border together over 300ms `ease` (primary → lighter blue; outline → filled ink; glass → solid white with black text).
- Focus: 2px solid `focus-ring`, 2px offset, on everything.
- Disabled: `surface-container-higher` ground, `on-surface-variant` label.
- Active tab: ink label with a 2px ink rule that fills with scroll progress.

## Iconography

Simple 2px-stroke outline icons, round caps. Chevrons (16–20px) mark dropdowns and trailing circles; the trailing circle is a 30px white disc with a blue chevron. Avoid decorative icons in cards; use initials in round avatars for people.

## Imagery and motion

Imagery rules, prompts and generation recipes: `imagery.md`. Timings, curves and reduced motion: `motion.md`. Original assets: `assets/`.

## Using it

```html
<link rel="stylesheet" href="designs/cirrus/tokens.css">
<link rel="stylesheet" href="designs/cirrus/components/bundle.css">
<script src="designs/cirrus/components/bundle.js"></script>
<script>Cirrus.init();</script>
```

Class prefix `cr-`. Set the theme with `Cirrus.theme.set("dark")` or `data-theme="dark"` on `<html>`.

## What was measured and what was inferred

**Measured** (live page, 1440px): colour variables, type sizes and line heights, button padding, borders, radii, hover fills, backdrop-blur radii, the 24/40px card radii, transition durations, and the exact blur-in animation (20px rise, 8px blur, 0.8s, 0.15s stagger, 20% trigger). **Inferred:** the Dark theme as a theme (taken from the black section), the nav's gradient blur, the footer's size and layout, tab-label tracking, soft focus halo, the `photo-scrim`. **Not measurable:** the parallax motion on the photo fields (driven by a script library) and the logo marquee's content.
