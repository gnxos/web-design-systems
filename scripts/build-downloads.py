#!/usr/bin/env python3
"""Build downloads/<id>.zip for every design system, an all-systems bundle, and downloads/manifest.json.
Run from anywhere:  python3 scripts/build-downloads.py
Each zip holds the system folder plus INSTALL.md and LICENSE.txt."""
import json, os, zipfile, glob, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESIGNS, OUT = f"{ROOT}/designs", f"{ROOT}/downloads"
SYSTEMS = {
  "inkwell":   dict(name="Inkwell",   p="ik", ns="Inkwell",   theme="light", btn="ik-btn ik-btn--lg ik-btn--primary", fonts="Archivo"),
  "afterglow": dict(name="Afterglow", p="ag", ns="Afterglow", theme="dark",  btn="ag-btn ag-btn--primary",            fonts="Geist, Geist Mono"),
  "halftone":  dict(name="Halftone",  p="ht", ns="Halftone",  theme="light", btn="ht-btn ht-btn--pink",               fonts="Hanken Grotesk, Geist Mono"),
  "dewpoint":  dict(name="Dewpoint",  p="dp", ns="Dewpoint",  theme="light", btn="dp-btn dp-btn--primary",            fonts="Figtree, JetBrains Mono"),
  "hairline":  dict(name="Hairline",  p="hl", ns="Hairline",  theme="light", btn="hl-btn hl-btn--primary",            fonts="Albert Sans"),
  "cirrus":    dict(name="Cirrus",    p="cr", ns="Cirrus",    theme="light", btn="cr-btn",                            fonts="Inter Tight, JetBrains Mono"),
}
LICENSE = """FITTING ROOM FREE LAUNCH LICENSE  (draft for review before publishing)

You may use these files in personal and commercial projects, for yourself or for clients, in as many
projects as you like, and you may modify them.
You may not resell, sublicense or redistribute the files as a design system, template pack or asset pack
(whole or substantially whole), and may not claim them as your own work.
All images in the pack are original to this project. The typefaces are free fonts under their own licenses.
The files come as they are, with no warranty.
Everyone who downloads during the free launch keeps this license for the version they downloaded.
Paid licensing for future releases is planned and will be announced before it starts.
"""

def install_md(i, s, tokens):
    p, ns, d = s["p"], s["ns"], i
    colors = [t["name"] for t in tokens["color"]["tokens"]][:14]
    tw = ",\n        ".join(f'"{c}": "var(--{c})"' for c in colors)
    return f"""# Install {s['name']}

Free during launch. Fonts load from Google Fonts: {s['fonts']}.

## 1. Add the folder
Copy the `{d}/` folder into your project (for example `public/{d}/` or next to your HTML).

## 2. Link it (plain HTML)
```html
<!doctype html>
<html lang="en" data-theme="{s['theme']}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="{d}/tokens.css">
  <link rel="stylesheet" href="{d}/components/bundle.css">
  <script defer src="{d}/components/bundle.js"></script>
</head>
<body>
  <a class="{s['btn']}" href="#">Get started</a>
  <script>window.addEventListener("DOMContentLoaded", function () {{ {ns}.init(); {ns}.initExtras(); }});</script>
</body>
</html>
```
Switch theme with `{ns}.theme` where available, or set `data-theme` on `<html>` (themes: see tokens.json `color.themes`).

## 3. Build with the components
Every component has `components/<Name>/preview.html` (a live example, copy its markup) and `README.md` (what it needs).
All classes start with `{p}-`. Open `{d}/index.html` in a browser to see all of them in light and dark.

## 4. React / Next.js
```jsx
import "./{d}/tokens.css";
import "./{d}/components/bundle.css";
// app/layout.jsx: <html lang="en" data-theme="{s['theme']}">
// a client component for behaviours (tabs, dropdowns, hero effects):
"use client";
import {{ useEffect }} from "react";
export default function Behaviours() {{
  useEffect(() => {{ import("./{d}/components/bundle.js").then(() => {{ window.{ns}?.init?.(); window.{ns}?.initExtras?.(); }}); }}, []);
  return null;
}}
export const Cta = () => <a className="{s['btn']}" href="#">Get started</a>;
```

## 5. Tailwind
```js
// tailwind.config.js
module.exports = {{
  theme: {{ extend: {{
    colors: {{
        {tw}
    }},
    fontFamily: {{ sans: ["var(--font-sans)"], mono: ["var(--font-mono)"] }}
  }} }}
}};
```
Keep `tokens.css` linked so the variables exist, and dark mode follows `data-theme`.

## 6. With an AI coding agent
Paste this into the agent:
```
Build the UI with the "{s['name']}" design system in ./{d}.
1. Read {d}/README.md (brand book), then {d}/tokens.json, then components/<Name>/README.md for every component you use.
2. Link {d}/tokens.css, {d}/components/bundle.css and {d}/components/bundle.js. Set data-theme on <html>.
3. Use the class prefix {p}- and the tokens (var(--token)). Never hard-code colours, radii, shadows or timings.
4. Take images from {d}/assets. For any new picture follow {d}/imagery.md (it has a prompt and a negative prompt).
5. Follow {d}/motion.md and honour prefers-reduced-motion. Check {d}/accessibility.md flags before using a flagged colour.
```

## 7. Troubleshooting
- Unstyled page: check the three paths above, and open over http (`python3 -m http.server`) if file:// blocks fonts.
- Wrong fonts: tokens.css imports them from Google Fonts; allow fonts.googleapis.com and fonts.gstatic.com.
- Nothing happens on tabs or menus: call `{ns}.initExtras()` after the markup exists (again after you add markup later).
"""

def main():
    os.makedirs(OUT, exist_ok=True); manifest = {}
    all_zip = zipfile.ZipFile(f"{OUT}/all-systems.zip", "w", zipfile.ZIP_DEFLATED)
    total = {}
    for i, s in SYSTEMS.items():
        base = f"{DESIGNS}/{i}"; tokens = json.load(open(f"{base}/tokens.json"))
        files = [f for f in glob.glob(f"{base}/**/*", recursive=True) if os.path.isfile(f) and ".DS_Store" not in f]
        z = zipfile.ZipFile(f"{OUT}/{i}.zip", "w", zipfile.ZIP_DEFLATED)
        inst = install_md(i, s, tokens)
        for f in sorted(files):
            arc = f"{i}/" + os.path.relpath(f, base)
            z.write(f, arc); all_zip.write(f, arc)
        z.writestr(f"{i}/INSTALL.md", inst); z.writestr(f"{i}/LICENSE.txt", LICENSE)
        all_zip.writestr(f"{i}/INSTALL.md", inst)
        z.close()
        comps = [d for d in os.listdir(f"{base}/components") if os.path.isdir(f"{base}/components/{d}") and d != "Cover"]
        manifest[i] = dict(zip=f"downloads/{i}.zip", bytes=os.path.getsize(f"{OUT}/{i}.zip"), files=len(files) + 2,
                           components=len(comps), colors=len(tokens["color"]["tokens"]), themes=[t["id"] for t in tokens["color"]["themes"]],
                           assets=len([f for f in files if "/assets/" in f and not f.endswith(".md")]),
                           contents=sorted({os.path.relpath(f, base).split("/")[0] for f in files} | {"INSTALL.md", "LICENSE.txt"}))
    all_zip.writestr("LICENSE.txt", LICENSE); all_zip.write(f"{DESIGNS}/COMPONENTS.md", "COMPONENTS.md"); all_zip.close()
    manifest["all-systems"] = dict(zip="downloads/all-systems.zip", bytes=os.path.getsize(f"{OUT}/all-systems.zip"), systems=list(SYSTEMS))
    json.dump(manifest, open(f"{OUT}/manifest.json", "w"), indent=2)
    for k, v in manifest.items(): print(f"{k:12s} {v['bytes']/1024:8.0f} KB", v.get("files", ""), v.get("components", ""))

if __name__ == "__main__": main()
