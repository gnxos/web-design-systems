# Motion

Motion in Inkwell is **ambient and scroll-led**: little doodles are always gently alive, and big things move only because you scroll. Nothing bounces, nothing flies in from off-screen, nothing loops fast. If you notice the animation before the headline, it's too much.

## The vocabulary

| Pattern | Where | Spec | Class / API |
| --- | --- | --- | --- |
| **Spin** | small confetti shapes (hexagons, squircles) in hero and CTA blocks | rotate 0 → 360°, `dur-spin` 10s, `ease-spin` linear, infinite; random negative delays so they're out of phase | `.ik-spin` |
| **Bob** | floating props (donut, chart cards, sparkles) | translateY 0 → 20% and scaleX 1 → 0.95, `dur-float` 2s, `ease-float` cubic-bezier(0.78, 0, 0.22, 1), alternate, infinite | `.ik-bob` |
| **Sway** | a tilted prop that should feel hand-held | translateY 0 → 5%, scaleX 1 → 0.9, rotate 0 → ±7°, 2s, `ease-float`, alternate | `.ik-sway` |
| **Twinkle** | four-point sparkles | stepped flicker of opacity (1 → 0.35 → 1) and scale (1 → 0.82 → 1.06), ~1.6s | `.ik-twinkle` |
| **Rise** | headlines, illustrations, product panes as they enter | translateY 10% / 20% / 30% → 0 linked to the element crossing the viewport (scroll-driven, `animation-range: entry-crossing → exit-crossing`), `ease-scroll` cubic-bezier(0.4, 0.2, 0.2, 1). Stagger siblings by giving them different distances, not delays | `.ik-rise--10`, `.ik-rise`, `.ik-rise--30` |
| **Slide-in** | one hero illustration per page | from translateX 30% + translateY 30px → 0 over the element's whole time on screen (`cover` range), `ease-scroll` | inline: `--rise` with a custom keyframe |
| **Rotate-in** | a tilted prop arriving | from rotate −20°, translateX −30% → rest, 2s, `ease-float`, once | custom |
| **Stack** | product cards on a powder block | each card `position: sticky`; as the next one covers it, the covered card scales to 0.95 and fades to `opacity-recede` 0.5, `ease-stack` cubic-bezier(0.22, 0.6, 0.36, 1) | `.ik-stack` |
| **Hover** | buttons | ink button: opacity → 0.8 in `dur-hover` 100ms linear; outline button: fills ink, text turns paper | `.ik-btn--*` |
| **Menu** | nav dropdown items | translate + opacity over `dur-nav` 450ms, staggered ~20–50ms | custom |
| **Draw-on** *(intentional addition)* | scribble ellipse/underline around words | stroke-dashoffset 1 → 0 over `dur-draw` 1.2s, `ease-float`, once, when 60% visible | `data-ik-scribble` |

## Rules

- **Scroll-linked beats time-based** for anything bigger than a doodle. Use CSS scroll-driven animations (`animation-timeline: view()`); the bundle falls back to a one-time IntersectionObserver fade-rise where they aren't supported.
- **Distances are small:** 5–30% of the element's own size, or ≤ 50px. Never animate from outside the block.
- **No opacity-only fades** on content; content rises. Opacity changes are for receding cards and twinkles.
- **One looping family per object:** a doodle spins *or* bobs *or* twinkles, never two at once.
- **Density:** at most ~16 moving doodles in a viewport, and none behind body text.
- **Reduced motion:** under `prefers-reduced-motion: reduce` everything above is off — doodles stay still at rest, risen content is simply in place, scribbles are drawn. `bundle.css` already does this; custom animations must do the same.

## Snippets

Hero with confetti and a drawn-on scribble:

```html
<section class="ik-block ik-block--powder" data-ik-confetti="14" data-seed="3">
  <div class="ik-block__inner" style="text-align:center">
    <p class="ik-eyebrow">Sketch-first workspace</p>
    <h1 class="ik-h-hero">Turn scattered notes into <span data-ik-scribble="ellipse" data-ik-ink="paper">clear answers</span></h1>
  </div>
</section>
<script>Inkwell.init();</script>
```

A custom scroll-linked slide-in that matches the system:

```css
.hero-art { animation: hero-in linear both; animation-timeline: view(); animation-range: cover 0% cover 50%;
            animation-timing-function: var(--ease-scroll); }
@keyframes hero-in { from { transform: translate(30%, 30px); } to { transform: none; } }
@media (prefers-reduced-motion: reduce) { .hero-art { animation: none; } }
```

## Animated media (video, GIF, Lottie)

When a motion piece is exported rather than coded, follow the same hand: ink line + flat fills, 12 fps "on twos" boil (redraw the line wobble every other frame with a new turbulence seed) for a living-line feel, loops of 2s or 10s, no camera moves, transparent background so it sits on any block.
