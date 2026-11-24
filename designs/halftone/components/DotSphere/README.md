# DotSphere

A slowly turning sphere of pink-to-purple dots, drawn live on a canvas, cropped by a card corner.

**Consumer provides:** a sized container; optional dot count (default 700).

- `<canvas data-ht-sphere>` + `Halftone.init()`, or `Halftone.sphere(canvas, {count, period})`; returns a stop function. Still frame under reduced motion.
- Static export: Assets → Graphics → `dot-sphere.svg`.
- Crop it: position it half outside a card's top-right corner; never centred and whole.
