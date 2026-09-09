# Mahesh Lambe

Live at https://mlmrx.github.io/ through GitHub Pages, served from the root of main. `.nojekyll` preserves framework asset paths.

The root contains the compiled static site. Editable React/TypeScript source is in `source/`.

To rebuild: enter `source`, run `npm ci` and `npm run build`, then copy the contents of `source/dist/client/` into the repository root. Commit both updated source and public output. On Windows with an npm `os=linux` user setting, use `npm ci --os=win32 --cpu=x64 --include=optional`.

The original graphite wolf and eight-frame wolf sprite sheet were made using built-in image generation. Playback registers the second row to the same baseline, scales its pace with the rendered wolf, and includes an extended rest. It runs autonomously without controls. Reduced-motion preferences show a still pose; animation stops while the document is hidden or the scene is outside the viewport.

The visual direction is a quiet opening with a single name and a walking wolf, followed by a shared reading grid for the work. Baskervville is hosted locally under the SIL Open Font License in `fonts/OFL.txt`. All styling lives in `source/app/globals.css`.

The catalogue follows the introduction and selected work. It contains 15 public projects and five private work summaries. Private entries contain only titles and short descriptions, with no repository links or internal details. The removed founder/contributor hero sentence and animation buttons should not be reintroduced.

Verified: static production export; catalogue counts and ordering; internal anchors and exported assets; continuous walk positioning and resting behavior at five viewport sizes. Previous designs remain available in Git history.
