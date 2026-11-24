# Hero

A full-width dusk gradient field with a huge headline bottom-left, two buttons, and a floating key/value data card bottom-right.

**Consumer provides:** headline (2 lines max), one or two sentences of body, a primary and a secondary action, 3–5 key/value facts for the data card, and an optional one-line caption under the card.

- Markup: `section.ag-hero > (div text block) + (div right block > dl.ag-kv)`; the hero is the only place `ag-display` is used.
- Keep the upper half empty: the glow is the picture. Text never sits on the hot spot.
- Buttons: `ag-btn--primary` + `ag-btn--secondary` ("Read the docs →"), 10px apart.
- The data card uses `shadow-floating`-level contrast via its own translucent `ag-kv` fill; facts are short ("Sources · 40+").
