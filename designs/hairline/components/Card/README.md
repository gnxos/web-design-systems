# Card

Content containers in two flavours: the outlined white card for lists of items, and the raised card for the dark band.

**Provide:** an `<article class="hl-card">` with `hl-card__title`, `hl-card__body`, optionally an `hl-card__meta` label and an `hl-tags` row, or an `hl-persona` (orb + label) at the top; add `hl-card--band` when it sits on `surface-band`.

- Default: `surface` fill, 1px `border-card`, `radius-md`, `space-3` padding; title in `heading-card` (24px, 500), body in `body`, meta labels in `caption` / `text-weak`.
- Band: `surface-band-raised` fill, no border, `radius-xl`, `text-on-band`; title in `heading-s` (20px, 400).
- Flat by default; only callouts floating over a graph take `shadow-float`.

Don't: add a coloured side border, stack shadows on in-flow cards, put more than one action in a card.
