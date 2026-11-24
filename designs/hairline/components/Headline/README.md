# Headline

Hero and section headings: light (300) display type, tight negative tracking, and at most one gradient phrase.

**Provide:** an `<h1 class="hl-display">` (hero) or `<h2 class="hl-h2">` (section), optionally an `hl-eyebrow` kicker above and an `hl-lede` line below; wrap the single key phrase in `<span class="hl-gradient">`.

- `display-xl` (102px / 0.9 / -2.55px) for the hero, centred; `display-l` (54px / 1 / -1.08px) for section heads, left-aligned to the grid. The classes scale with `clamp()`.
- `hl-gradient` runs `gradient-red` → `gradient-pink` → `gradient-red` at 90°, clipped to the text. Hero only, one phrase, display sizes only (the pink stop alone fails contrast).
- For a marker effect inside a section heading or paragraph, use `hl-mark` (highlighter) instead of the gradient.
- Eyebrow: `eyebrow` style, uppercase, `text-strong`. Lede: `lede` style in `text-lede`.

Don't: bold the display weight, use the gradient on body text or buttons, set headlines in Title Case.
