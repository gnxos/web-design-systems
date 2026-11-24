# Confetti

The hero treatment: small doodles scattered near the edges of a block, slowly spinning, bobbing and twinkling, with the headline calm in the middle.

**Consumer provides:** the block and a count. `<section class="ik-block ik-block--powder" data-ik-confetti="14" data-seed="3">` then `Inkwell.init()`; or `Inkwell.confetti(el, {count, seed, kit})`.

- 10–16 pieces on a full hero, 6–10 on a CTA block. The scatter keeps the centre 70% of the width clear.
- Change `data-seed` to get a different but repeatable arrangement; keep the seed fixed once a page ships.
- Add 1–2 larger props (`donut`, `bar-card`) by hand at the corners with `motion: "bob"`.
- Everything is still under reduced motion.
