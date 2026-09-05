# Mahesh Lambe

Live at https://mlmrx.github.io/ through GitHub Pages, served from the root of main. `.nojekyll` preserves framework asset paths.

The root contains the compiled static site. Editable React/TypeScript source is in `source/`.

To rebuild: enter `source`, run `npm ci` and `npm run build`, then copy the contents of `source/dist/client/` into the repository root. Commit both updated source and public output. On Windows with an npm `os=linux` user setting, use `npm ci --os=win32 --cpu=x64 --include=optional`.

The original graphite wolf and eight-frame wolf sprite sheet were made using built-in image generation. Prompt: eight consecutive phases of a calm right-facing graphite wolf walking, consistent scale, white background, no text or scenery. Playback registers the second row to the same baseline and supports pause, replay, and reduced motion. Animation pauses while the document is hidden or the scene is outside the viewport.

Verified: static production export; eight frames; entrance, centre pause, exit, repeat and mobile placement. The previous design remains available in Git history.
