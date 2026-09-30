# MadePossible

The landing page for [MadePossible](https://madepossible.ca). It's a single Next.js page with no runtime dependencies beyond Next and React.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- **Type**: Archivo (variable, `wdth` + `wght`) via `next/font/google`. The static TTFs in `assets/` are only used by `app/opengraph-image.tsx`.
- **Hero animation**: pure CSS in `app/globals.css`. "IMPOSSIBLE." is laser-cut: the "IM" slices and drops out while "POSSIBLE." widens along the `wdth` axis to hold the same right edge. The `--w0 / --w1 / --k / --im` values come from measured glyph advances, so if you change the font, weight or tracking, re-measure them.
- **Reduced motion**: the page renders the final state with no animation.

## Deploy

The site deploys on Vercel. Every push to `main` goes to production.
