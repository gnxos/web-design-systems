# Doodles

The illustration kit: hand-inked SVG shapes and props that every picture in the system is built from (files in Assets → Doodles).

**Consumer provides:** the name and a size. `Inkwell.doodle("donut", {size: 120, motion: "bob"})` returns an inline element; `<span data-ik-doodle="donut" data-size="120" data-motion="bob">` does the same declaratively; the asset file works as a static `<img>`.

- Kit: `sparkle-outline`, `sparkle-powder`, `hexagon`, `squircle-ink`, `squircle-paper`, `burst`, `donut`, `bar-card`, `line-chart-card`, `connector`, `spot-report`, `scribble-ellipse-{ink,paper,powder}`, `scribble-underline-{ink,paper,powder}`.
- `motion`: `spin` (small shapes), `bob` / `sway` (props), `twinkle` (sparkles) — one per doodle.
- New pictures follow **Illustration**; combine and tilt kit pieces before drawing new ones.
