# Los Verdes ATX — Tifo Portfolio

A single-page app showcasing the tifo displays created by Los Verdes and Austin
FC supporters. Built to be embedded in a Squarespace page via iframe.

## Stack

- Vite 8 + React 18 + TypeScript
- No runtime dependencies beyond React; styling is plain CSS

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Content

All tifo entries live in [`src/data/tifos.ts`](src/data/tifos.ts). To add a new
tifo:

1. Drop the full image at `public/tifos/<slug>.webp` (long edge ≤ 1600px) and a
   thumbnail at `public/tifos/thumbs/<slug>.webp` (long edge ≤ 700px). Convert
   from a source image with, e.g., `cwebp -q 80 -m 6 source.png -o <slug>.webp`.
2. Add an entry to the `TIFOS` array with a matching `imageSlug`.
3. Optionally add an entry to `TIFO_LINKS` (keyed by `imageSlug`) to turn artist
   names or inline phrases in the description into hyperlinks — no HTML needed in
   the data.

Images were extracted and optimized from the source `.docx`; originals are kept
out of the repo (see `.gitignore`).

## Embedding

See [EMBED.md](EMBED.md) for the Squarespace iframe snippet and the optional
auto-resize listener.
