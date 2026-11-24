# Button

Fully rounded pill buttons (`radius-pill`) with short, verb-first, sentence-case labels.

**Provide:** an `<a>` or `<button>` with `hl-btn` plus one variant class, and the label. Add `hl-btn--nav` for the 44px header size.

- **Primary** (`hl-btn--primary`): `button-primary` fill, `on-button-primary` label. One per view: the action the section exists for ("Get started", "Continue").
- **Secondary** (`hl-btn--secondary`): white pill with a 1px `on-button-secondary` outline, beside a primary ("Talk to us"). Hover fills `button-secondary-hover`.
- **Outline** (`hl-btn--outline`): 58px tall, `surface-subtle` fill, `border-strong` outline, for "Learn more" under section intros.
- **Disabled**: `disabled` or `aria-disabled="true"`; `button-disabled` fill. Never use that grey on an enabled control.

Sizes: default 50px tall, 12px × `space-4` padding, `button` type style; nav 44px, 0 × `space-2`, `nav` style. Hover: colour only, `dur-fast` `ease-standard`. Focus: 2px `focus` ring, 2px offset.

Don't: square corners, icon-only buttons without a label, two primaries side by side, Title Case labels.
