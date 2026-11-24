# Prompt: create a brand-neutral design system from a website

Paste this into a new chat and replace `<URL>`.

```text
Create a new, brand-neutral design system from this website: <URL>
I'll publish it publicly, so nothing in it may identify the company.

1. STUDY THE LIVE SITE (in a real browser, not just a page fetch)
- Open the site, decline non-essential cookies, then scroll through every section and screenshot each one.
- Read the real values from the page's code, not from screenshots:
  - CSS variables (every theme: light, dark, scoped sections)
  - the fonts actually loaded
  - font size, line height, weight and letter spacing for headings, body, labels and buttons
  - colours used for text, backgrounds and borders
  - corner radii, shadows and backdrop blur
  - button sizes and padding, hover and press states
  - transitions, keyframes and running animations (durations, easing curves, scroll-linked effects)
- Note the viewport width you measured at. Convert fluid (vw/rem) sizes to clean values at that width, and give clamp() rules for scaling.
- Describe the visual language in words:
  - layout pattern (blocks, bento grid, sections)
  - imagery style (illustration, photography, gradients, textures)
  - recurring motifs
  - tone of voice in the copy

2. KEEP IT BRAND-NEUTRAL
- No company name, logo, product names, customer names, headlines, stats, quotes, office locations or other copy. Write new neutral example copy that doesn't echo theirs.
- Never copy their images. Draw or generate ORIGINAL assets in the same style (SVG doodles, gradient fields, dot patterns, etc.).
- If the site uses a paid font, compare free Google Fonts side by side against it and use the closest match.
- Give the system an original name. Don't draw a logo; set the name in plain type.
- When finished, search every file for the company name, its product and customer names, its fonts, and any of its copy. Fix anything found.

3. BUILD IT IN THIS REPO'S FORMAT (see designs/inkwell for a complete example)
- designs/<name>/tokens.json: colours for every theme (with usage notes), typography, spacing, radii, shadows, blur, easing, durations.
- designs/<name>/README.md brand book: content/voice rules with example copy, colour, type, layout, shape, states, imagery and icon rules.
- An imagery/illustration guide: how to make or generate every kind of picture, including a copy-paste AI image prompt and a negative prompt.
- motion.md: every animation pattern with exact timings and easings, plus reduced-motion rules.
- assets/<group>/: original images, described in a README.
- components/: 10–13 components, each with README.md + preview.html, plus a shared bundle.css and bundle.js, and a Cover.
- tokens.css generated from tokens.json, and an index.html gallery.
- Check text contrast in every theme. Where the source's own colours fail, keep the value, flag it, and give a safe alternative.

4. VERIFY AND REPORT
- Render every component in both themes, look at the screenshots, and fix anything broken.
- Then tell me: what came from the site, what you substituted (fonts, assets), any contrast flags, and anything you couldn't measure.
```
