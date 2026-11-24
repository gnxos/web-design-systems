# Imagery

Halftone pictures come in four kinds, in this order of importance: **photography of people**, **UI floating over photography**, **dot-matrix graphics** and **pixel glows**. No illustrations, no 3D renders, no stock icons-as-art.

## 1. Photography

- **Subject:** real-looking professionals mid-work or mid-conversation — at a laptop, on a call, explaining something to a colleague. One or two people, never a crowd.
- **Light and colour:** warm and soft. Studio-like backdrops in **terracotta, caramel, tobacco and warm grey**; skin tones natural; whites slightly creamy. No cold blue office light, no heavy teal-orange grade.
- **Lens:** shallow depth of field, eye-level, subject off-centre (usually right), lots of blurred background on the side where text will go.
- **Expression:** relaxed, confident, genuine — a slight smile, mid-sentence, thinking. No thumbs-up, no pointing at screens, no fake laughter.
- **Crop:** tight portrait crops in cards (4:5 or square, `radius-lg`); full-bleed in heroes with the face in the right half.
- **Treatment:** add the `scrim` → `scrim-strong` gradient from the middle down when white text sits on the photo. Optionally lay the pink **scanline** dot pattern (`ht-scanlines`, Assets → `scanlines`) over a whole photo section at ~70% opacity for a screen-like texture.
- **Proof photos** carry a small centred "Customer × You" style co-label at the bottom in white mono — use your own names.

Prompt for an image model:

> Editorial portrait of a [role, e.g. "product manager"] working at a laptop, warm terracotta studio backdrop, soft window light from the left, shallow depth of field, natural relaxed expression, subject in the right third, generous blurred empty space on the left, warm neutral wardrobe (oatmeal, camel, cream), photographed on a 50mm lens, subtle film grain, no logos, no text.

Negative: *cold blue light, neon, stock-photo grin, pointing, thumbs up, crowded office, logos, lens flare*.

Until real photos exist, use Assets → `warm-backdrop` as a stand-in ground.

## 2. UI over photography

- Small **white UI cards** (`ht-ui`, `radius-md`, `shadow-float`) stacked vertically and joined by a 1px pink line with small pink nodes — a workflow running in the person's world.
- **Frosted glass** for anything larger: `ht-glass` (5% white, 1px 15% white edge, 36px blur) for feature cards with a 36px title and smoked mono chips (`ht-tag--smoke`) along the bottom.
- **Glass bubbles** (`ht-bubble`, 20% white, 27px blur) for stats on the pink card: "+24% Win rate", stacked and cropped by the card edge.
- **News ticker** pill at the hero's lower right: glass, a "NEWS" label chip, scrolling text, an arrow disc.

## 3. Dot matrices

- **Dot sphere** (Assets → `dot-sphere`, live `Halftone.sphere(canvas)`): ~700–900 dots on a sphere, front dots larger and pink, back dots small and purple-tinged; slowly turning. Place it cropped by a card's corner, never whole and centred.
- **Halftone glow** (Assets → `dot-glow`, live `Halftone.halftone(canvas)`): a square 16px dot grid on black whose dots swell toward the centre, with a faint pink radial haze. Behind floating portrait tiles in dark sections.
- Dots are always `pink` (fading to `purple`), on a square or spherical lattice. Never random confetti, never other colours.

## 4. Pixel glow

- A mosaic of 24px squares where pink light pools from one corner into black (Assets → `pixel-glow`): the footer and closing CTA backdrop. Large white product name or headline over it.
- Keep the hot corner bottom-left; the rest falls to pure black.

## Do / Don't

- Do let photos run to the card edge and crop people naturally.
- Do keep UI renders monochrome with pink as the only accent.
- Don't put pink text on photos; white text only, over the scrim.
- Don't stack glass on glass, or glass on plain white (it disappears).
- Don't use gradients other than the scrim, the pink haze and the pixel glow.
