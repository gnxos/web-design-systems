# SectionHeader

A heading row that opens a section: `heading-1` at the left, one action or a short paragraph at the right, with a hairline above.

**Consumer provides:** a heading (two lines max, 40 characters per line) and either one button or a paragraph under 200 characters.

- Hairline: 1px `outline-hairline` across the full container; padding after it `space-6xl` (120px) at 1440, `space-4xl` in the tight variant.
- Heading `clamp(28px, 2.9vw, 42px)`, 450 weight, −0.73px tracking, `text-wrap: balance`. Paragraph sits on the right column, aligned to the bottom.
- Under 767px stack the action under the heading, left-aligned.
