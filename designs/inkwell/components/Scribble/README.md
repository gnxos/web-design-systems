# Scribble

A hand-drawn ellipse or underline around 1–3 words of a headline, drawn on once when it scrolls into view.

**Consumer provides:** the words to mark. Wrap them: `<span data-ik-scribble="ellipse">clear answers</span>` (or `"underline"`) and call `Inkwell.init()`; or `Inkwell.scribble(el, {kind, ink})`.

- Ink: `ink` on paper/fog, `data-ik-ink="paper"` (white) on powder and ink blocks, `data-ik-ink="powder"` on ink for a softer mark.
- One scribble per viewport; never on body copy, never on a whole line.
- Ellipse for the key phrase of a hero; underline for a short centred showpiece title or a word in a card title.
- Static (no draw-on) under reduced motion. Stroke weight `stroke-scribble` 3.3px stays constant at any size.
