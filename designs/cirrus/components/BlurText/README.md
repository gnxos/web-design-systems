# BlurText

A headline whose words resolve one at a time: each starts invisible, 20px low and blurred 8px, then settles.

**Consumer provides:** a headline of 3–10 words in an element with `class="cr-blur" data-cr-blur`.

- Per word: `opacity 0→1`, `translateY 20px→0`, `blur 8px→0`, **0.8s, `ease`**, delayed `index × 0.15s`. Same values as the source.
- Fires once when 20% of the element is visible (IntersectionObserver threshold 0.2). Words are `inline-block`, separated by plain spaces.
- Original text stays in `aria-label`; word spans are `aria-hidden`.
- Under reduced motion all words show immediately.
- Use for one or two statement headlines per page, never body copy.
