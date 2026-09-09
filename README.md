# Love of Open Secure AI

Live at https://mlmrx.github.io/ through GitHub Pages, served from the root of main. `.nojekyll` preserves framework asset paths.

The root contains the compiled static site. Editable React/TypeScript source is in `source/`.

To rebuild: enter `source`, run `npm ci` and `npm run build`, then copy the contents of `source/dist/client/` into the repository root. Commit both updated source and public output. On Windows with an npm `os=linux` user setting, use `npm ci --os=win32 --cpu=x64 --include=optional`.

The wolf is an original solid-black inline SVG in `source/app/wolf-scene.tsx`. Its four articulated legs, body and tail animate as it traverses the full viewport. It turns beyond each edge and walks back, without controls. Travel speed follows the planted-foot gait. Reduced-motion preferences show a still vector pose; animation stops while the document is hidden or the scene is outside the viewport. The earlier raster wolf assets are no longer requested by the page.

The opening reads “Love of Open Secure AI”, with a walking black wolf and a shared reading grid for Mahesh Lambe’s work below. Baskervville is hosted locally under the SIL Open Font License in `fonts/OFL.txt`. All styling lives in `source/app/globals.css`.

The catalogue follows the introduction and selected work. It contains 15 public projects and five private work summaries. Private entries contain only titles and short descriptions, with no repository links or internal details. The removed founder/contributor hero sentence and animation buttons should not be reintroduced.

Verified: static production export; exact heading; inline vector with no raster requests; catalogue counts and ordering; internal anchors and exported assets; continuous traversal, edge turns and planted-foot motion at five viewport sizes. Previous designs remain available in Git history.
