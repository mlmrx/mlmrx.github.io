# Love of Open Secure AI

Live at https://mlmrx.github.io/ through GitHub Pages, served from the root of main. `.nojekyll` preserves framework asset paths.

The root contains the compiled static site. Editable React/TypeScript source is in `source/`.

To rebuild: enter `source`, run `npm ci` and `npm run build`, then copy the contents of `source/dist/client/` into the repository root. Commit both updated source and public output. On Windows with an npm `os=linux` user setting, use `npm ci --os=win32 --cpu=x64 --include=optional`.

The opening is an interactive geometric ribbon drawn by `source/app/kinetic-form.ts` and presented by `source/app/kinetic-hero.tsx`. It responds to pointer movement and touch. Focusing or hovering Open, Secure or AI changes its form and previews the corresponding work. Each word is a native anchor link, usable with touch or keyboard. Vertical touch scrolling remains available.

The opening reads “Love of Open Secure AI”. Open leads to the public catalogue, Secure to AgentHalo and Truthseek, and AI to research and standards. The animated canvas has a static SVG fallback for visitors without JavaScript or Canvas support, respects reduced-motion preferences, and suspends work while hidden. It is capped at 30 frames per second and a pixel ratio of 1.75. The earlier animal illustrations are no longer used by the page.

Baskervville is hosted locally under the SIL Open Font License in `fonts/OFL.txt`. All styling lives in `source/app/globals.css`.

The catalogue follows the introduction and selected work. It contains 15 public projects and five private work summaries. Private entries contain only titles and short descriptions, with no repository links or internal details. The removed founder/contributor hero sentence and animation buttons should not be reintroduced.

Verified: static production export; strict type checks for the interactive components; exact heading and three discovery links; static artwork fallback; continuous, bounded geometry across modes and pointer positions; complete drawing pipeline; catalogue counts, ordering, internal anchors and exported assets. Previous designs remain available in Git history.
