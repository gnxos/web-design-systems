# Web Design Systems

Four complete, brand-neutral design systems: tokens, brand books, illustration/imagery and motion guides, live components and original image kits. Each one is ready to drop into a web project or hand to an AI agent as a style guide.

| System | Look | Fonts | Themes |
| --- | --- | --- | --- |
| [**Inkwell**](designs/inkwell/) | Black ink on paper, powder blue, hand-drawn doodles in rounded colour blocks | Archivo | Paper, Ink |
| [**Afterglow**](designs/afterglow/) | Dark bento tiles lit by grainy ember/teal/sand gradients, terminals and node graphs | Geist, Geist Mono | Dark, Light |
| [**Halftone**](designs/halftone/) | Cool grey and white, one electric pink, warm photography under frosted glass, dot-matrix graphics | Hanken Grotesk, Geist Mono | Light, Dark |
| [**Dewpoint**](designs/dewpoint/) | Bright white space, near-black ink, soft pill buttons, drifting confetti flecks and glow-ring art tiles | Figtree, JetBrains Mono | Light, Dark |

All fonts are free (Google Fonts) and load from each system's `components/bundle.css`. Every image in the repo is original.

## Browse them

- **On GitHub Pages:** turn on Pages for this repo (Settings → Pages → deploy from `main`, root). The landing page is [`index.html`](index.html); each system has its own gallery at `designs/<name>/index.html` with every component live and a theme switch.
- **Locally:** `python3 -m http.server` in the repo root, then open <http://localhost:8000>.

## What each system contains

```
designs/<name>/
├── README.md            brand book: voice, colour, type, layout, states, imagery — start here
├── illustration.md      (Inkwell) or imagery.md (Afterglow, Halftone, Dewpoint): how to draw or generate every picture
├── motion.md            every animation, with exact timings and easing curves
├── tokens.json          source of truth: colours per theme, type scale, spacing, radii, shadows, motion
├── tokens.css           the same tokens as CSS custom properties + one class per type style
├── index.html           live gallery of all components
├── assets/<group>/      original SVG kit (doodles, gradient fields, dot graphics) + notes
└── components/
    ├── bundle.css       component styles (loads the Google Fonts)
    ├── bundle.js        small helpers exposed as window.Inkwell / Afterglow / Halftone / Dewpoint
    └── <Component>/     README.md (usage rules) + preview.html (live example)
```

## Use one in a project

```html
<!doctype html>
<html data-theme="dark">
<head>
  <link rel="stylesheet" href="designs/afterglow/tokens.css">
  <link rel="stylesheet" href="designs/afterglow/components/bundle.css">
  <script src="designs/afterglow/components/bundle.js"></script>
</head>
<body>
  <!-- markup from the component READMEs, e.g. -->
  <a class="ag-btn ag-btn--primary" href="#">Get started</a>
  <script>Afterglow.init();</script>
</body>
</html>
```

Swap `afterglow` for `inkwell` or `halftone` (and `Afterglow.init()` for `Inkwell.init()` / `Halftone.init()`). Class prefixes are `ik-`, `ag-` and `ht-`. Tokens are plain CSS variables (`var(--ink)`, `var(--radius-lg)`, `var(--ease-out)`), so they work with any framework.

## Use one with an AI agent

Point the agent at a system folder and use [`prompts/use-a-design-system.md`](prompts/use-a-design-system.md). To make a new system from any website in the same way, use [`prompts/create-from-website.md`](prompts/create-from-website.md).

## Accessibility notes

Each system checks text contrast in every theme. Where a palette value is weak as text (for example the pink accent in Halftone or the grey `muted` in Inkwell), its usage note says so and names the safe alternative. All motion stops under `prefers-reduced-motion`.
