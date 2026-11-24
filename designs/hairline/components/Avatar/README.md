# Avatar (orb)

A glowing sphere that stands in for an automated helper or a workflow: a white highlight top-left, a body in one `glow-*` colour, and a soft halo of the same colour below. It is the system's only "character".

**Provide:** a `<span class="hl-orb">` with a colour modifier (`--coral`, `--green`, `--purple`; blue is the default) and a size (`--sm` 28px, default 48px, `--lg` 96px). Add `data-live` for a small green presence dot. Pair it with a highlight label inside `hl-persona` to name it.

- One colour per helper, kept consistent everywhere it appears.
- For people, use a round photo the same size instead, never an orb.
- Static SVG versions: `assets/Graph/orb-*.svg`.

Don't: add faces, eyes or limbs, mix two glow colours in one orb, use orbs as decoration without a label nearby.
