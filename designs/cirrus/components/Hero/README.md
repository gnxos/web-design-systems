# Hero

A rounded field (24px radius, 36px inset from each side) filled with sky art; centred blur-in headline, one lead line and two buttons near the bottom.

**Consumer provides:** a headline under 40 characters, one lead sentence, two actions, and a sky image (`assets/Skies/`).

- Headline `display-hero` 56/67.2, 500 weight, white (`on-photo`), blur-in word by word (see BlurText).
- Lead `lead` 20/30, white. A `photo-scrim` (40% black, bottom-weighted) sits under the text: white over a bright sky is not reliably 4.5:1 without it.
- Buttons: Glass + Trailing dot (light). Gap 12px.
- Min height 560–640px, never the full viewport. Under 767px the inset becomes 16px.
