# Love of Open Secure AI

Live at https://mlmrx.github.io/ through GitHub Pages, served from the root of main. `.nojekyll` preserves framework asset paths.

The root contains the compiled static site. Editable React/TypeScript source is in `source/`.

To rebuild: enter `source`, run `npm ci` and `npm run build`, then copy the contents of `source/dist/client/` into the repository root. Commit both updated source and public output. On Windows with an npm `os=linux` user setting, use `npm ci --os=win32 --cpu=x64 --include=optional`.

The black eagle is “Eagle silhouette 5” by SeriousTux, from Openclipart under CC0. Its source and license are recorded in `eagle-license.txt`. `source/app/eagle-scene.tsx` animates the vector in a gentle arc across the viewport, returning in the opposite direction without controls. Reduced-motion preferences show a still silhouette, and animation stops while the document is hidden or the scene is outside the viewport.

The opening reads “Love of Open Secure AI”, with a soaring black eagle and a shared reading grid for Mahesh Lambe’s work below. Baskervville is hosted locally under the SIL Open Font License in `fonts/OFL.txt`. All styling lives in `source/app/globals.css`.

The catalogue follows the introduction and selected work. It contains 15 public projects and five private work summaries. Private entries contain only titles and short descriptions, with no repository links or internal details. The removed founder/contributor hero sentence and animation buttons should not be reintroduced.

Verified: static production export; exact heading; eagle SVG replaces the wolf; catalogue counts and ordering; internal anchors and exported assets; continuous flight and edge turns at five viewport sizes. Previous designs remain available in Git history.
