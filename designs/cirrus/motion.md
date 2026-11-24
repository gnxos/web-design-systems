# Motion guide

Cirrus moves in two registers: crisp 300ms fills on controls, and one theatrical effect: words that blur into place. Everything else is still. **Measured** values come from the reference page; **inferred** values are marked.

## Timings and curves

| Pattern | Property | Duration | Easing | Basis |
| --- | --- | --- | --- | --- |
| Default hover | all properties | 300ms | `ease` | measured (`transition: all .3s`, used 62 times) |
| Secondary hover | all | 200ms | `ease` | measured |
| Link colour, box-shadow | colour, shadow | 200ms | `ease` | measured |
| Quick fill | background-color, colour | 100ms | `ease` | measured |
| Border and fill | border-color, background-color | 250ms | `ease` | measured |
| Flex grow (accordion-like) | flex-grow | 200ms | `ease` | measured |
| Slow reveal | all | 400–700ms | `ease` | measured |
| **Blur-in word** | opacity 0→1, translateY 20px→0, blur 8px→0 | 800ms each | `ease` | measured (script) |
| Blur-in stagger | delay per word | +150ms × index | n/a | measured |
| Blur-in trigger | IntersectionObserver threshold | 20% visible, once | n/a | measured |
| Scroll progress bar | width | 100ms | `linear` | measured (2px bar, `#e0e0e0` track, black fill) |
| Logo marquee | translateX | 30s, infinite | `linear` | measured (running animation) |
| Tab rule fill | width | 100ms | `linear` | inferred from the progress bar |
| Nav fade | opacity of gradient | 200ms | `ease` | inferred |

The source declares no custom cubic-beziers: use the browser `ease` and `linear` only (`ease-default`, `ease-linear`).

## Patterns

1. **Blur-in headline.** On a headline with `data-cr-blur`: split into words, each `inline-block`, start `opacity 0 / translateY(20px) / blur(8px)`; transition each over 0.8s with `index × 0.15s` delay; trigger once at 20% visibility. Keep the full sentence in `aria-label`.
2. **Hover fills.** Primary lightens (#4589ff in the source; #0043ce is the contrast-safe option). Outline fills with ink and flips its label. Glass fills solid white with a black label. All together on 300ms `ease`.
3. **Scroll progress.** A sticky 2px bar at the top of the explorer section; its black fill width tracks scroll position. The active side tab's rule fills in step.
4. **Parallax photo fields.** The reference moves its photo fields on scroll with a script library. Not measured; Cirrus uses none. If you add it, cap travel at 40px and disable under reduced motion.
5. **Marquee.** Logos scroll at 30s linear, infinite; pause on hover and under reduced motion.

## Reduced motion

The reference page has **no** `prefers-reduced-motion` rules, so its blur-in and marquee always play. Cirrus adds them:

- Blur-in words appear at once (opacity 1, no transform, no blur, no transition).
- Hover fills may remain (colour only) but drop the transition.
- Progress and tab rule widths jump without easing.
- Marquees stop and show a static row.
- Parallax is off.
