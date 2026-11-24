# Hero

A centred opener: plain-type name, one typed headline, two pills, all over a radial fleck field.

**Consumer provides:** a headline of two short phrases (under 36 characters), the name as text, and two actions.

- Headline `display-hero` (80/88 at 1440; `clamp(40px, 5.6vw, 80px)`), 450 weight, −0.02em tracking, centred, max 1100px wide.
- Typed once at 55ms per character after a 400ms delay (inferred; the source's speed is in its script). A 3px caret blinks at 500ms, linear, forever. Under reduced motion the text is printed whole and the caret stays solid.
- Field: `<canvas data-dp-flecks>` (about 520 flecks at 1440, fewer when narrower). The centre box stays empty so type keeps its contrast. Flecks drift up to 10px toward the pointer. Static art alternative: `assets/Fields/fleck-field-light.svg` / `-dark.svg` as a cover image.
- Fleck colours are decorative only. Never put copy over a fleck.
- Min height 520px; do not size to the viewport.
