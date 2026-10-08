# Self-Hosted Variable Fonts

Place the following font files in this directory:

1. **Fraunces** (display font — for headings)
   - File: `Fraunces[opsz,wght].woff2`
   - Download from: https://fonts.google.com/specimen/Fraunces
   - Or via Google Fonts API helper

2. **Inter** (body font — for text)
   - File: `Inter[slnt,wght].woff2`
   - Download from: https://fonts.google.com/specimen/Inter
   - Or via Google Fonts API helper

These are variable fonts in WOFF2 format. The font-face declarations in `src/layouts/Layout.astro` reference these paths.

Until these files are added, the site will fall back to Georgia (for display) and system-ui (for body) automatically.
