# Team Learners — Viewer

A static read-only viewer for the parent repo (the Team Learners plugin). Sidebar = the whole file tree, right pane = the selected file's raw contents. No design beyond what's needed to read.

## Local

```bash
npm install
npm run dev   # runs build-manifest first, then next dev on http://localhost:3000
```

`scripts/build-manifest.ts` walks one directory up (the plugin root), applies an allowlist, and emits `app/_data/{tree,files}.json`. The Next.js routes statically prerender from those.

## Deploy

This package's Vercel root directory is `web/`, but the build script reads files from the parent (`..`). Make sure your Vercel project is configured with `rootDirectory: "web"` and the parent files are checked out. The deploy command lives in `../CONTEXT.md`.
