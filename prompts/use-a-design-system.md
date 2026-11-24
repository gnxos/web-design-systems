# Prompt: build something with one of these design systems

Paste this into a chat with an agent that can read this repo, and fill in the brackets.

```text
Build <what you want: a landing page, a dashboard, a slide, an email…> using the design system in
designs/<inkwell | afterglow | halftone | hairline>/ of this repo.

- Read its README.md first, then tokens.json, its imagery/illustration guide and motion.md.
- Load tokens.css, components/bundle.css and components/bundle.js, and build from its components
  (read each component's README.md before using it). Use tokens (CSS variables), never hard-coded values.
- Follow its voice and content rules for every piece of copy.
- Make any new images in the style its imagery/illustration guide describes, or reuse files from assets/.
- Respect its contrast notes and reduced-motion rules.
- Show me the result and list any place you had to go beyond the system.
```
