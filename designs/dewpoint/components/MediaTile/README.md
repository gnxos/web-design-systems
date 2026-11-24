# MediaTile

A square (or 16:9 with `dp-tile--wide`) art tile with 36px corners, clipped, holding one image and optional title.

**Consumer provides:** an `<img class="dp-tile__art">` from `assets/Glows/` (or your own at the same style) and, optionally, a title of one to three words.

- Radius `radius-xl` (36px; 24px under 767px). Aspect ratio 1, never stretched.
- Titles sit centred in `on-night`, 450 weight, `clamp(24px, 3.2vw, 42px)`, with a soft coloured text glow. Only on `night` or deep gradient art, where white is 8:1 or better.
- Hover: the image slowly scales to 1.04 over 8s with the progress curve (inferred, subtle). None under reduced motion.
- Light placeholder: `dp-tile--paper` or the pastel halo. Dark: `dp-tile--night`.
- Keep one idea per tile: a ring, a halo or a field. No stock photos.
