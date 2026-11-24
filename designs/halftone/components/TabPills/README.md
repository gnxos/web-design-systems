# TabPills

A row of numbered pill tabs: a mono number in a black circle, then the label; the selected tab fills pink and its circle turns white.

**Consumer provides:** 3–6 tab labels (1–3 words) and the panel for each.

- Markup: `div.ht-tabs[role=tablist] > button.ht-tab[role=tab][aria-selected] > span.ht-tab__n + text`; `Halftone.tabs()` wires selection.
- Sits on a `surface` section above a carousel of cards.
