# FeatureCard

A fog card with a doodle on top, a bold title and a short description — always in a 3-up grid on a fog block.

**Consumer provides:** one spot doodle (kit SVG or a new one drawn per Illustration), a 2-line title in `ik-h-card`, and 2–4 lines of `ik-body`.

- Markup: `.ik-grid-3 > .ik-card > .ik-card__art + h3.ik-h-card + p.ik-body`.
- Doodle sits top-left in a 140px band, left-aligned, never cropped; leave the card's top-right empty.
- Titles are outcomes ("Every answer shows its working"), not feature names.
- Keep all three cards the same height (the grid does this) and the same doodle scale.
