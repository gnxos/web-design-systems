# ProductCard

A white card on a powder block: eyebrow + big title + short copy on the left, a powder pane with a screenshot or doodle on the right; several cards stack as you scroll.

**Consumer provides:** eyebrow (product family, UPPERCASE), title (`ik-h-section`), 2–3 lines of `ik-body`, an optional `ik-link`, and the pane content (a real UI screenshot cropped to the pane, or a spot illustration).

- Markup: `article.ik-product.ik-stack > div + div.ik-product__pane`.
- Put cards in a column on a `ik-block--powder` with ~40vh between them so each sticks and the covered one recedes (scale 0.95, opacity 0.5).
- Two columns ≥720px; stacked below. The pane keeps `radius-l` and `powder` even when the card is on paper.
