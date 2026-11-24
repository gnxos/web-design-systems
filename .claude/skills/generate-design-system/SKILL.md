---
name: generate-design-system
description: Study a live website in a real browser and build a brand-neutral, publishable design system from it (tokens, brand book, imagery, motion and accessibility guides, original asset kit, live components, cover, viewer page). Use when the user gives a site URL and asks for a design system, style guide or brand book derived from it that must not identify the source company.
argument-hint: <site URL>
---

# Brand-neutral design system from a live site

Input: a site URL (`$ARGUMENTS`). If no real URL is given (or it is a placeholder like `<URL>`), ask for it before doing anything else.

The result will be published publicly. Nothing in it may identify the source company.

## 0. Setup
- **Browser.** Use a real browser, never a page fetch alone. Order of preference:
  1. Claude in Chrome (`claude-in-chrome`) or the built-in browser, if their tools are present.
  2. Otherwise drive the machine's Google Chrome with Playwright from an isolated venv in the scratchpad: `python3 -m venv venv && venv/bin/pip install playwright`, then `p.chromium.launch(channel="chrome", headless=True)`. Run scripts with `venv/bin/python -I script.py`. No browser installs are needed.
  3. If neither works, say so and stop. Do not guess values.
- **Where to put the result.** Check the working repo first:
  - If it already has `designs/<name>/` systems, match that layout exactly (see section 3, "Repo layout") and register the new system in the root `index.html` and `README.md`.
  - Otherwise, or if the user asks for an artifact, use `Artifact` `quickstart` (the "Design System" type) and follow its instructions.
- Keep raw notes, screenshots and scripts in the scratchpad, never in the deliverable.
- Do not commit or push unless asked. Pushing needs GitHub credentials the shell often lacks (`could not read Username`); the `gh` CLI may be missing. If asked to push or open a PR, try once, and if it fails give the user the exact `! git push -u origin <branch>` command and the `compare/main...<branch>` URL plus a ready PR title and body. Work on a new branch, not `main`.

## 1. Study the live site
- Open the site at **1440 x 900** and note the width. Decline non-essential cookies: if the banner offers only "Allow all" and "Customize", open Customize, untick every optional category, then Save. Confirm the dialog is gone.
- Scroll the whole page in 800px steps, wait about a second each step (reveals are scroll-triggered), and screenshot every step. Look at the shots, not just file names.
- Read real values from the page code, not from screenshots:
  - Download the main stylesheet(s) and list the CSS custom properties; dump computed `--` values for every theme (toggle `data-theme` or classes), and find dark-scoped sections.
  - Fonts actually used: count `getComputedStyle(el).fontFamily` across text elements. `document.fonts` lists everything declared, including unused faces, so do not trust it alone.
  - For headings, body, labels, nav and buttons: size, line height, weight, letter spacing, colour, padding, border, radius, shadow, backdrop blur. Query by text or class; check several breakpoints' variables.
  - Hover and pressed states: hover the real element and re-read its computed style.
  - Motion: grep the CSS for `@keyframes`, `transition`, `cubic-bezier`, `prefers-reduced-motion`; read `document.getAnimations()`; and **grep the page's inline `<script>` blocks and any GSAP/Lenis usage**, because many effects (word-by-word reveals, progress bars, parallax) live in script, not CSS. Sample an element's computed styles over time to confirm.
  - Note whether the site honours reduced motion.
- Convert fluid (vw/rem) sizes to clean px at the measured width and give `clamp()` rules.
- Describe the visual language in words: layout pattern, imagery style, recurring motifs, tone of voice.
- Keep a list of what could not be measured or was inferred (for example a dark theme the page does not have, scroll-driven parallax, typing speed).

## 2. Keep it brand-neutral
- No company name, logo, product or customer names, domain, headlines, taglines, stats, quotes, people, table figures or other copy. Write new neutral example copy.
- **Echo check.** Besides names, rewrite anything that mirrors the source too closely: the nav item set (Platform, Solutions, Resources...), utility links, button labels that are the site's signature, tab labels, taglines, stat numbers and phrasing, quotes, and table or card data. Generic words are fine; copied sets and numbers are not.
- Never copy their images. Draw or generate original assets in the same style: SVG fields, glows, SVG-turbulence clouds, dot patterns, doodles, abstract UI placeholders, flat avatar silhouettes without faces. Never reuse a customer logo or real portrait.
- **Paid or proprietary font:** render it only inside a throwaway comparison page (load the font from the site's own URL), side by side with free Google Fonts, at the site's heading size and tracking. Pick the closest by letterform and width, and test a tighter cut when the original is narrow (for example Inter Tight beats Inter). Record the comparison in the report only; never name the paid font in the deliverable.
- **Free fonts the source uses** may be reused, but prefer a different mono or secondary family so the stack does not mirror the site.
- Give the system an original name. No logo; set the name in plain type.
- **Neutrality grep.** Search every output file (README, tokens, CSS, JS, HTML, SVG, markdown) for: company name and its parts, product, customer, and person names, the domain, font names (including `ibm`, `plex`, `sf pro`), vendor names (CMP, CMS), distinctive headlines and numbers. Beware false positives such as "magenta" containing "agent". Fix every real hit and re-run.

## 3. Build the system
**Repo layout** (match existing `designs/<name>/` systems):
```
README.md          brand book: content/voice, colour, type, layout, shape, states, iconography, using it, measured vs inferred
tokens.json        colours per theme with usage notes, type, spacing, radius, shadow, blur, duration, easing, layout
tokens.css         generated from tokens.json (:root + [data-theme] blocks, tokens, .type-style classes, font @import)
imagery.md         every kind of picture, how to make it, copy-paste AI prompt and negative prompt
motion.md          every pattern with exact timings and easings, measured vs inferred, reduced-motion rules
accessibility.md   passing pairs per theme, flags with safe alternatives
assets/<Group>/    original SVGs plus a README.md per group (what, size, ink colour)
components/        bundle.css, bundle.js, <Comp>/{README.md,preview.html} x 10-13, Cover/preview.html
index.html         viewer: header banner, cover, one iframe card per component, theme toggle
```
- Class prefix of two letters per system; `bundle.js` exposes `window.<Name>` with `init()` and a header comment `/* @ds-bundle: {...} */`.
- Previews: first line `<!-- @dsCard group=".." height=N subtitle=".." -->`, link `../../tokens.css`, `../bundle.css`, `../bundle.js`, read `?theme=` from the URL, call `<Name>.init()`. The viewer loads iframes lazily and passes the theme.
- Cover (`components/Cover/preview.html`, 960 x 288): coloured blocks cut from the radius scale, one pattern, the name in plain type bottom-left, a derivation comment. Check both themes.
- Assets: SVG filters need `filterUnits="userSpaceOnUse"` with a very large region or they show square edges. Single-ink art uses a fixed ink colour (an `<img>` cannot inherit `currentColor`).
- Components: usage note, "Consumer provides" line, tokens named. Include forced-state classes (`is-hover`) so a preview can show hover.
- Contrast: compute WCAG ratios in every theme for text, borders and focus rings. Where the source's own colours fail, keep the token, flag it in its usage note and `accessibility.md`, and add a safe alternative token. Text over photos or glass depends on the image: add a scrim token.
- If building as an Artifact instead, follow the type's own file layout (`project/…`), upload assets, and publish in one call.

## 4. Verify and report
- Render every component and the cover in light and dark with a headless-Chrome script; record console errors and horizontal overflow; look at the screenshots and fix what is broken (empty menus, wrapping labels, thin wordmarks, square blur edges, weak text on art).
- Screenshot the viewer page too, scrolling so lazy iframes load.
- Re-run the neutrality grep on the final files.
- Report to the user:
  - what came from the site (and the viewport it was measured at)
  - what was substituted (fonts with the comparison result, assets, copy)
  - contrast flags with the safe alternatives
  - anything that could not be measured or was inferred
  - git state: branch, commit, and whether it was pushed (and why not)
