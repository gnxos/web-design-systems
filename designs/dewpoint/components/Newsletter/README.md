# Newsletter

A `surface-container` card (36px radius, 60px 48px padding) with a heading, one line of copy, an email field and a submit.

**Consumer provides:** a heading, one sentence, a labelled email input, a submit label, and a help line.

- Input `dp-input`: 47px pill, `surface` fill, `outline-strong` border (3.4:1), 17.5px text. Focus: 2px `focus-ring` outline plus `shadow-focus` halo.
- Invalid: border turns `fleck-coral` and the help line says what to fix ("Enter an address like name@example.com").
- Placeholder uses `on-surface-variant`; always give the input an `aria-label`.
- Under 767px it becomes one column with 24px 16px padding and 24px radius.
