# Comp before build: composing in pixels before composing in CSS

Loaded **only** on signal 9: the request asks for comps (the words *comp*, *mock-up*, *options*, *versions*, *directions*, *show me two*, *explore first*). It runs at the comp step after the Picks block, and § Session-made pictures applies to any build that needs a picture the library cannot supply. With no such ask this file never loads and the build goes from the Picks block straight to Step 6. The comp step is never auto-fired, never a blocker and never something to apologise for skipping.

**This session does the work.** There is no image API, no key and no external call: the comps are small HTML pages this session writes, renders in a browser and looks at. A rendered comp carries mass, interval and alignment at a glance, which prose cannot, and reproducing an approved page is easier than inventing a composition from a paragraph.

---

## § What the comp is, and is not

| It is | It is not |
| --- | --- |
| a composition proposal: mass, interval, alignment, where the eye lands first | a design system; the palette and pairing were settled in the Picks block and do not move |
| the first viewport only, at the surface's own dimensions (1280 x 800) | a full page; comping below the fold buys nothing |
| a throwaway HTML file written by this session, rendered and screenshotted | an asset; comps are not shipped and not committed (`.hallmark/comps/` stays out of git) |
| a target to reproduce in code, measured against | a texture or picture source; nothing from a comp is embedded in the page except the structure and token names it proved |

**The comp is code, so the Floor binds it.** Write each comp under the same rules as the build: tokens at `:root`, no literal colours or faces past the token block, no eyebrow, no gradient, no fake browser window, no invented number or quote. The comp still gets no vote against the gates: a comp is never evidence that a gate is wrong, and "the comp had it" is not a waiver reason. Take its composition; the gates decide the rest.

---

## § The build of the comps

Two comps, three when the direction genuinely forks. One is not a choice and four is a shopping trip.

Each comp is one self-contained file, `.hallmark/comps/c1.html`, `c2.html`, with inline CSS:

- the Picks block's own `:root` token block (the same names the build will use), so what the comp proves carries over;
- exactly one viewport: `html, body { margin: 0; width: 1280px; height: 800px; overflow: hidden }`, nothing below the fold;
- real words from the user's material or the idea, never from the category default; where a picture would sit, a labelled stand-in slot (`imagery.md` § 3), never a drawing (80) and never a gradient wash (81);
- the **macrostructure** as a compositional instruction: where the headline sits and how large, what fills the rest of the screen, where the primary action is.

**Build the comps from the idea, not the prompt.** A comp that reads like the prompt is the category default in pixels, the page `direction.md` sets aside. Carry, in order: the first viewport as you planned it (what sits where, how large), the idea in a few plain words, the ground and accent from the Picks block, the display class and the macrostructure.

**Vary the comps on one axis only.** Two comps that differ in everything are two pages, and comparing them tells you nothing about the decision you are actually making. Vary the composition (where the weight sits, symmetry against asymmetry, type-led against image-led) and hold the system fixed.

**Render and look.** Screenshot each comp at 1280 x 800 with `node <skill-dir>/scripts/capture.mjs file://<absolute path>/.hallmark/comps/c1.html` when Node and a Chrome are available, or with any browser tool the harness provides (Claude in Chrome, the built-in browser, headless Chrome through Playwright). **Look at every screenshot before describing it.** If nothing on the machine can screenshot, say so in one line and skip the comp step: `comp: skipped (no browser to capture)`.

---

## § The approval point

Show both screenshots, side by side, at their own size. One line each on what differs. Then stop and ask which one, or whether neither.

This is the second and last redirect window (the Picks block was the first) and it is much cheaper than the one after the build. **Do not build past a comp the user has not chosen.** "I'll build A and we can adjust" is how the approval point turns into decoration.

If the user picks neither, ask which was closer on composition, change that axis, and rebuild once. Two rounds is the ceiling; after that, build without a comp and say so in one line.

---

## § Reproduction discipline

**A model reliably believes its recreation succeeded when it did not.** This is the failure mode that makes the whole step worthless if unguarded, because the belief is what stops you looking.

The chosen comp's structure may seed the build, but through the build's own files and token block: a comp's inline shortcuts and literal values are rewritten, never pasted. Before building anything below the fold:

1. Screenshot the built page at **exactly the comp's dimensions** (1280x800).
2. Put the two side by side and answer three questions in writing, one line each:
   - **Mass.** Does the weight sit in the same place, at the same size, relative to the viewport?
   - **Interval.** Are the gaps between the major elements the same proportion of the height?
   - **Entry.** Does the eye land on the same element first?
3. Name the largest divergence and fix it, or state in one line why the built version is right and the comp was wrong. Both are legitimate. Silence is not.

The comp is the target, not the authority: reproducing a comp that misjudged the copy length is worse than diverging from it deliberately. What is banned is diverging without noticing.

Record it in the stamp: `comp: 2 built in session · c1 approved · reproduced (checked at 1280x800)`, or `comp: skipped (not asked)`, or `comp: skipped (no browser to capture)`, or `comp: 2 built in session · none approved · built unconstrained`.

---

## § The medium inventory

Before writing a line of the build, every region of the approved comp gets a written implementation medium. Six or eight regions, one line each, and it takes about a minute.

**The gate: a CSS gradient or a layered background is not a texture.** Writing "CSS" against a woven cloth, a sculpted panel, a printed halftone, a photographed material, or anything with grain is how a committed comp silently becomes a flat page with the same section order and none of its ambition. The inventory exists to make that substitution visible while it is still cheap.

| Medium | What it is right for |
| --- | --- |
| **Code** (CSS/SVG) | what the page *draws*: rules, type, geometry, diagrams and charts of real data, anything that animates or reacts, anything that must reflow |
| **Raster** (supplied) | what the world *paints*: material, grain, cloth, paper fibre, photography, painted or sculpted surfaces, real depth |
| **Neither** | the region the comp invented and the copy does not support. Cut it here, not after building it |

Two rules on top:

- **A raster region needs a real source:** a user-supplied asset, a library photograph (`imagery.md` § 2), or a capture of the real product (`imagery.md` § 4). This session cannot generate photographs, and a photograph from memory is not a source; a region the comp painted as a picture never becomes a drawing (80). When no source exists, the region stays a labelled stand-in slot and the handoff asks the user for the image.
- **A region cannot change medium silently during the build.** Downgrading raster to CSS mid-build is the whole failure this section catches. Change it if the code argues for it, and say so in one line.

Ship the inventory as part of the comp message, under the comps:

```
Timetable          code      a real table, must reflow
Headline           code      type, must reflow
Rule under head    code      1px, tokenised
Next-race mark     code      the accent on one row, it moves once on load
Rower photograph   raster    library photo; the comp's crew is not a real crew
```

---

## § Session-made pictures

This session writes code; it does not generate photographs or painted images, and nothing here calls an outside service. When a page needs a picture and the library cannot reach the subject (`imagery.md` § 1):

1. **Ask for it.** Name the exact picture and where it lands, and let the user supply it. Until then it is a labelled stand-in slot (`imagery.md` § 3), listed in the handoff.
2. **Author in code only what code can honestly draw:** a chart or diagram of real data or a real system, plain geometry (a rule, a grid, a dot pattern as texture), a grain or noise texture a theme's material names. Each carries its label or `aria-hidden` (33).
3. **Never a picture of a thing.** An SVG or CSS figure of an object, plant, animal, person, product, building, landscape or scene is a drawn illustration (80), and a gradient block where a picture belongs is an empty picture (81). Writing the code in this session does not change that.

Stamp `generated: none` on a run that placed no authored graphic, or `authored: <what> in code` for a chart, diagram or texture.
