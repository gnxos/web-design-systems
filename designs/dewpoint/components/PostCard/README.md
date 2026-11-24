# PostCard

A vertical card in a horizontally scrolling row: 288px `MediaTile`, a 28px title, a date and a chip, separated by hairlines.

**Consumer provides:** art (a tile), a title under 60 characters, an ISO-style date ("Nov 18, 2026") and one chip.

- Row `dp-posts`: scroll-snap x, hidden scrollbar. Card is 336px: 288px art plus 48px gutter; the divider is a 1px `outline-hairline` placed in the gutter, none after the last card.
- Title `450 28/30.24`, −0.1px, balanced. Hover underlines the title (1px, 4px offset); the tile art slow-zooms.
- Meta `body-sm` in `on-surface-variant` (9.3:1 on white) with a neutral chip.
- Controls: two 44px round `dp-iconbtn`s with an `outline-strong` ring; the previous button disables at the start, next at the end. Wire with `data-dp-slider`, `data-dp-prev`, `data-dp-next`.
- Four cards fit at 1440; show a peek of the fifth so the row reads as scrollable.
