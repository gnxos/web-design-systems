# Motion guide

Dewpoint moves quietly: short colour fades on controls, one soft settle on menus and tiles, a typed headline with a blinking caret, and slowly drifting flecks. Nothing bounces, nothing is long. **Measured** values come from the reference page; **inferred** values are marked.

## Timings and curves

| Pattern | Property | Duration | Easing | Basis |
| --- | --- | --- | --- | --- |
| Button / nav hover | background, border, colour | 150ms | `ease-out` | measured |
| Small link colour | colour | 120ms | default | measured |
| Press | transform scale 1 → 0.98 | 180ms | `ease-out-quart` | inferred (source has the transition, no scale) |
| Icon nudge on hover | transform translate(2px, −2px) or (0, 2px) | 180ms | `ease-out-quart` | inferred |
| Menu open / close | opacity 0→1, translateY 4px→0, visibility | 160ms | `ease-out-quart` | measured timing, offset inferred |
| Chevron rotate | rotate 0 → 180° | 160ms | `ease-out-quart` | inferred |
| Announcement bar | border, background, shadow | 200ms | default | measured |
| Chip entrance | opacity 0→1, translateY 6px→0 | 200ms | `ease-out-quart` | measured keyframe (6px rise) |
| Panels, tiles, tracks | transform, opacity, background | 300ms | `ease-out` / `ease-in-out` | measured |
| Fade in | opacity 0 → 1 | 300ms | default | measured |
| Delayed fade | opacity 0 for 50% then 0 → 1 | 600ms total | linear | measured keyframe, duration inferred |
| Stroke draw | stroke-dashoffset → 0 | 600ms | `ease-out-quart` | measured keyframe, duration inferred |
| Caret blink | opacity on/off | 500ms, infinite | linear | measured |
| Progress bar | transform scaleX 0 → 0.7 | 8s | `cubic-bezier(.1,.5,.1,1)` | measured |
| Tile art slow zoom | transform scale 1 → 1.04 | 8s | `cubic-bezier(.1,.5,.1,1)` | inferred |
| Typed headline | one character | 55ms | step | inferred |
| Fleck drift | translate by pointer up to 10px; idle sway ±1.5px | continuous | sine | inferred |

Curves (`tokens.json` → easing): `ease-out-quart` `cubic-bezier(0.165, 0.84, 0.44, 1)` is the default for any movement. Use `ease-out-quint` for large settles and `ease-in-out-quart` for slider travel. `ease-out-back` (overshoot) only for a small chip pop, never on layout.

## Patterns

1. **Hero type-on.** On load wait 400ms, print the headline one character per 55ms, leave a 3px caret blinking (500ms linear). The element carries `aria-label` with the full text; the typed spans are `aria-hidden`. Re-run only on a full page load.
2. **Fleck field.** A canvas of ~1700 flecks (at 1440; scaled by width). Idle sway uses sine offsets; the pointer shifts each fleck by up to 10px × its depth. Redraw on resize and on theme change.
3. **Reveal on scroll.** `[data-dp-reveal]` elements below the fold start at opacity 0, translateY 6px and settle over 300ms `ease-out-quart`, staggered 60ms in groups of four. Anything already in view is shown immediately. Content is never hidden without JS.
4. **Menu.** Closed state is `visibility: hidden`, so it never takes focus. Open adds `is-open` to the wrapper; the menu fades and rises over 160ms; keyboard focus uses the same hover fill.
5. **Slider.** Buttons scroll the row by one card width (card + 48px gap), smooth, snapping to cards. The end buttons disable at the edges.
6. **Page-load progress.** A 2px bar at the very top creeps to 70% over 8s on the progress curve, then jumps to 100% and fades in 150ms when the page is ready.
7. **Theme switch.** Colours change instantly. Do not animate the whole page between themes.

## Scroll-linked effects

The reference page has smooth-scroll styling and sticky positioning but no measurable scroll-linked transforms in its feature section (zero transformed elements at rest and mid-scroll). Dewpoint therefore uses only the reveal above; no parallax.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- The headline prints whole at once; the caret stays solid (no blink).
- The fleck field draws once and does not drift or follow the pointer.
- Reveal elements are shown immediately with no transform.
- Press scale, icon nudges, chevron rotation, menu movement and tile zoom are removed; menus and state changes may still cross-fade opacity at 150ms linear.
- The progress bar jumps without the crawl.
- Smooth scrolling in the slider becomes instant.

Colour changes on hover (fill, border) stay: they are not motion.
