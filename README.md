# dersion.app

Public marketing site for Dersion. Next.js (App Router), static export, deployed on Vercel.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Static build into `out/` |
| `npm run sync:brand` | Copy tokens and logo files from `../brand` into `src/brand/` and `public/brand/` |
| `npm run build:images` | Make the WebP/AVIF exports the page uses from the synced PNG masters |

## Brand files

`src/brand/` and `public/brand/` (except `public/brand/derived/`) are copies from the
[brand repo](../brand). Never edit them here: change the brand repo, then run
`npm run sync:brand && npm run build:images` and commit the result.

All colour comes from the CSS variables in `src/brand/tokens.css`. No hex values in the site's own code.

## Not for search engines yet

The site ships `noindex, nofollow` and a `robots.txt` that disallows everything until launch.
