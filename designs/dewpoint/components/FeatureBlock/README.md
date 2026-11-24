# FeatureBlock

A two-column row: a narrow text stack (title, paragraph, one button) beside a large `MediaTile`.

**Consumer provides:** a title of two to four words, a paragraph under 220 characters, one button label, and the tile art.

- Columns 5fr / 7fr at 1440 with a 48px gap; text column max 420px; vertical padding `space-4xl` (80px) between rows.
- Title `heading-1`; paragraph `body` in `on-surface-variant`. Long paragraphs fade out at 130px with `dp-fade` and expand on click (consumer wiring).
- `dp-feature--flip` puts the tile on the left. Alternate rows when stacking more than two.
- Under 767px the row becomes one column with the tile after the text.
- A dark panel (`night`) inside the tile may hold an abstract window: use `assets/Panels/window-placeholder.svg`, never a real screenshot of a product.
