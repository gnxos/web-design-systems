# Hairline

> Near-black ink on white, airy light-weight display type, pill buttons, one red-to-pink gradient phrase and pastel highlighter labels. Its pictures are work graphs: floating update cards and glowing orbs joined by 1px hairlines.

**Live preview:** [`index.html`](index.html) · **Guides:** [Imagery](imagery.md) · [Motion](motion.md) · **Tokens:** [`tokens.json`](tokens.json) / [`tokens.css`](tokens.css) · **Kit:** [`components/`](components/) · **Images:** [`assets/`](assets/)

---

Hairline is near-black ink on white, airy light-weight display type, pill-shaped buttons, one red-to-pink gradient phrase, and pastel labels used like a highlighter pen. Its pictures are work graphs: floating update cards and glowing orb avatars joined by 1px hairlines. It should feel **calm, capable and connected**: lots of white, very little colour, every bit of colour meaning something.

Read this first, then **Imagery** (work graphs, orbs, photography) and **Motion**. Four rules hold it together:

1. **Ink does the work.** Text, primary buttons and the one dark band per page are `neutral-1000`. Colour arrives in small doses: one gradient phrase in the hero, one or two pastel labels per composition, orb glows.
2. **Big and thin.** Display type is weight 300 with negative tracking. Nothing on the page is bold; the heaviest weight is 500 for labels, buttons and card titles.
3. **Pills for actions, near-squares for everything else.** Buttons and tabs are fully round; fields, tags and labels are `radius-sm`; cards `radius-md`; bands `radius-xl`.
4. **Flat, with one exception.** Sections are separated by space, not rules or colour changes. Only floating things (callouts, menus, popovers) get shadows.

## Content fundamentals

- **Voice:** calm, outcome-first, short. Headlines promise a result in five to eight words: "Plans that keep up with you", "Every project in one clear picture", "Less reporting, more shipping".
- **Person:** speak to "you" and "your team". Use "we" only when owning something ("We kept it to one page on purpose").
- **Casing:** sentence case for headlines, buttons and tabs. Uppercase only through the `eyebrow` and `tag` styles (CSS does it); never type in caps.
- **Structure:** problem, then answer. A section names the pain ("Why plans drift when updates live in five places") before the product answers it.
- **Buttons:** verb first, two words at most: "Get started", "Talk to us", "Learn more", "Continue".
- **Callouts:** past tense, concrete, under 12 words: "Moved the beta to Thursday and told three owners."
- **Numbers as proof:** one hard stat beside a row of partner marks, never a grid of filler stats. Never invent a number for real use.
- **No emoji, no exclamation marks.** Personality comes from the orbs and the graph, not punctuation.

## Colour

| Token | Use |
| --- | --- |
| `surface` | White page (dark: #1e1f21). Almost everything sits on it. |
| `surface-subtle`, `surface-strong`, `surface-hover` | Soft panels, tag fills, hover washes. |
| `surface-band`, `surface-band-raised` | The one full-bleed dark band per page and the cards and tabs on it. |
| `text-strong`, `text`, `text-weak`, `text-lede` | Headlines, body, meta and captions, the hero subhead. |
| `text-on-band` | Everything on the dark band. |
| `button-*`, `on-button-*` | Primary (ink) and secondary (white, outlined) pills. Dark theme: hovers turn `coral`. |
| `gradient-red` → `gradient-pink` | The hero's single gradient phrase. Display sizes only. |
| `orchid`, `highlighter`, `mint`, `sky`, `blush`, `lilac` | Pastel labels and the active tab. **Text on them is always `on-accent` (ink).** `*-deep` variants are for marks and illustration only. |
| `glow-blue`, `glow-coral`, `glow-green`, `glow-purple` | Orb avatars, one colour per helper. |
| `coral` | The mark colour: the wordmark dot, the live node, dark-theme hovers. |
| `error`, `warning`, `success` | Dark, text-weight status colours (7:1+ on white). |

Neutrals come from the `neutral-*` ramp and every semantic colour aliases it.

**Contrast flags (values kept from the source, with safe alternatives):**
- `border` (input outline) is 1.6:1 on white. Always label fields and keep the adjacent button, or use `hl-input--strong` (`border-strong`, 5.1:1).
- `focus` is 2.7:1 on white. Where you control the page, a `text-strong` ring is the accessible substitute. It is 6.1:1 on the dark surface.
- `gradient-red` is 3.4:1 and `gradient-pink` 2.3:1 on white: the gradient is for display type (24px+) only, never solo text.
- `coral` is 3.0:1 on white: never body text.
- `error`, `warning`, `success` keep their light values in the dark theme, where they drop to about 2.2:1. Always pair them with an icon and a word.

## Type

One family: **Albert Sans** (Google Fonts, weights 300/400/500), falling back to Helvetica Neue, Helvetica, Arial. It stands in for a licensed Swiss-style grotesque; it was chosen for its open, slightly wide shapes and a true light weight that holds up at 102px.

| Style | Size / line / weight / tracking | Use |
| --- | --- | --- |
| `display-xl` | 102 / 0.9 / 300 / -2.55px | The hero headline only. `clamp(48px, 7vw, 102px)`. |
| `display-l` | 54 / 1 / 300 / -1.08px | Section heads. `clamp(34px, 4vw, 54px)`. |
| `lede` | 26 / 33.8 / 300 / 0.52px | The hero subhead, in `text-lede`. |
| `heading-card` | 24 / 1.2 / 500 | Card titles. |
| `heading-s` | 20 / 30 / 400 | Titles on the dark band; h3. |
| `body-l` | 20 / 30 / 300 / 0.4px | Section intros. |
| `body` | 16 / 28 / 400 | Everything else. |
| `eyebrow` | 16 / 24 / 500 / 0.64px, uppercase | Kicker directly above a `display-l` heading. |
| `button`, `nav` | 16/24 and 14/20, 500 | Labels, links, callout text. |
| `caption` | 13 / 19.5 / 300 / 0.26px | Legal lines, hints, meta labels. |
| `tag` | 11 / 16.5 / 500 / 0.44px, uppercase | Tags and menu group labels. |

## Layout

- 12-column grid, `grid-gutter` (32px) gutters, content capped at `content-max` (1440px). Header `header-height` (68px), transparent, no border.
- Spacing is generous and 8-based (`space-1` = 8px … `space-20` = 160px). Sections are separated by `space-14` to `space-16` of white. Card padding `space-3`; heading block to content `space-6`; hero air `space-20`.
- Hero: centred `display-xl` headline with a gradient phrase, `lede` below, a primary and a secondary pill, then the work graph full width beneath.
- One dark band per page (`hl-band`, `radius-xl`, inset from the page edge by the gutter) holding pill tabs and band cards.

## Shape, depth, states

- **Radii:** buttons `radius-pill`, tabs `radius-tab`, fields/tags/labels `radius-sm`, cards `radius-md`, callouts `radius-callout`, menus and media `radius-lg`, large cards and the band `radius-xl`.
- **Borders:** cards use 1px `border-card` or a fill, never a shadow.
- **Shadows** (cool slate rgba): `shadow-raised` small controls, `shadow-menu` dropdowns, `shadow-popover` popovers, `shadow-float` callouts and chat panels. Nothing else.
- **Hover:** buttons darken (light) or turn `coral` (dark); outline borders go to `border-hover` or `text-strong`; links underline. All in `dur-fast`.
- **Focus:** 2px `focus` ring with 2px offset (see the contrast flag above).
- **Disabled:** `button-disabled` fill; never that grey on an enabled control.

## Imagery and iconography

- The hero picture is a **work graph**: callouts and orbs joined by right-angle hairlines with node discs. See [imagery.md](imagery.md) for how to compose one, and `assets/Graph/` for stills.
- **Orbs** are the only characters: glowing spheres in one `glow-*` colour each. No faces, no mascots.
- **Photography** (when used) is warm, natural-light and editorial, never staged stock.
- **Icons:** a simple 1.5px-stroke outline set (Lucide or similar) in `icon` colour at 16–20px. No icon font is bundled.
- **Partner logos** appear small, in one row, at their own colours when you have permission; placeholders use `text-weak`.
- **No logo** is included. Set your product name in plain type with the `hl-wordmark` class.

## Using the kit

Plain CSS classes in `components/bundle.css` (prefix `hl-`) plus a small `components/bundle.js` (`window.Hairline`) for tabs, menus and the work-graph draw-in. Components: Button, NavBar, Headline, PillTabs, Tag, TextField, Card, Avatar, Callout, WorkGraph, Menu, ProofStrip. Each component's README says what markup to provide.

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="components/bundle.js"></script>
...
<h1 class="hl-display">Plans that <span class="hl-gradient">keep up</span> with you</h1>
<a class="hl-btn hl-btn--primary" href="#">Get started</a>
<script>Hairline.init();</script>
```
