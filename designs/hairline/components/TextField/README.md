# TextField

A 50px text input with nearly square corners (`radius-sm`) that pairs with a primary pill on the same line.

**Provide:** a `<label class="hl-label-text">`, an `<input class="hl-input">` inside `hl-field`, the submit button (`hl-btn hl-btn--primary`), and an optional `hl-hint` line (`hl-hint--error` for errors, with a word like "Error:").

- 1px `border` outline, `border-hover` on hover, 2px `focus` ring plus `text-strong` border on focus; `surface` fill, `text-strong` value, `text-weak` placeholder.
- 12px × `space-2` padding, 16px text. Hint and legal copy in the `caption` style, links in `link`.
- `border` is only 1.6:1 against white. Always give the field a visible label and keep the adjacent button, which defines the row; or add `hl-input--strong` for a 5.1:1 outline.

Don't: round the input into a pill (only buttons are pills), rely on placeholder text instead of a label.
