# Team Learners — Operations Memory (humans only)

This file is for humans setting up or maintaining the surface. Claude Code does NOT auto-load it (it is not in `CLAUDE.md`'s `@` references). Reach it explicitly with `@CONTEXT.md` when needed.

## What this repo is

The public surface of Team Learners as a Claude Code plugin + a static viewer site. The repo is pushed to `learners-superpumped/team-learners` and deployed to Vercel under the `learners` team.

## URLs

- **GitHub:** https://github.com/learners-superpumped/team-learners
- **Site:** https://team-learners.vercel.app (custom domain TBD)
- **Plugin install (external agents):**
  ```
  /plugin marketplace add learners-superpumped/team-learners
  /plugin install team-learners@team-learners
  ```

## Vercel

- **Team:** `learners` (`team_Dw4JLudX9zXXTMS70ObrPATx`)
- **Project name:** `team-learners`
- **Root directory:** `web/`
- **Production branch:** `main`
- **Token:** `VERCEL_TOKEN` from `/Users/slave2/aicompany/ai_shared/vault/common/keys.json`

GitHub auto-deploy is **disabled by convention** for `learners` team projects — the `thomiroseofficial-spec` GitHub auth block makes auto-deploys fail. Always deploy manually.

## Manual deploy command (the only deploy path)

```bash
cd /Users/slave2/aicompany/projects/team-learners/web
export VERCEL_TOKEN=$(jq -r '.VERCEL_TOKEN' /Users/slave2/aicompany/ai_shared/vault/common/keys.json)
vercel pull --yes --environment production --token "$VERCEL_TOKEN" --scope learners
rm -rf .vercel/output
vercel build --prod --token "$VERCEL_TOKEN"
vercel deploy --prebuilt --prod --token "$VERCEL_TOKEN"
```

## How the site works

1. `web/scripts/build-manifest.ts` runs as `prebuild`. It walks the parent directory (the repo root), applies an allowlist of file extensions, and writes:
   - `web/app/_data/tree.json` — the nested file tree shown in the sidebar.
   - `web/app/_data/files.json` — flat map of `{path → {kind, content, sizeBytes}}`.
2. Next.js builds with `outputFileTracingRoot` set one level up so the parent files are traced into the deployment package.
3. `app/[...path]/page.tsx` calls `generateStaticParams()` with every allowlisted path → fully prerendered. URL == repo path 1:1.

The site reads NOTHING at runtime. Everything is baked at build time.

## Allowlist (what shows on the site)

Extensions: `.md`, `.json`, `.ts`, `.tsx`, `.js`, `.css`, `.toml`, `.gitignore`. Bare files: `LICENSE`. Hard-excluded: `node_modules/`, `.next/`, `.vercel/`, `.git/`, `.DS_Store`, `*.env*`, anything > 200 KB. Symlinks are not followed.

## Adding content

1. Add a file under `content/` (or `content/notes/YYYY-MM-DD-slug.md`).
2. `git add . && git commit -m "..." && git pull --rebase && git push origin main`.
3. Run the manual deploy command above. The site's tree/files manifest regenerates automatically as part of `npm run build`.

## Updating the plugin

Bump `version` in `.claude-plugin/plugin.json` whenever a skill or its behavior changes meaningfully. Push, then external agents can `/plugin install team-learners@team-learners` to pick up changes.

## Common mistakes (don't repeat)

1. **Auto-deploy on push.** Doesn't work for `learners` team. Always run the manual deploy command.
2. **Rebasing without pulling.** `git push` will fail with `non-fast-forward`. Always `git pull --rebase` first.
3. **Putting secrets anywhere in this repo.** Every file is rendered on the public site. Even `.json` config files.
4. **Forgetting `--scope learners` on `vercel pull`.** Will pull the wrong project's settings.
5. **Editing files in `web/app/_data/`.** They are build artifacts. Edit the source files in the repo root and rebuild.
6. **Renaming the Vercel project.** It is `team-learners`. clawops is named `web` for historical reasons; do not repeat that confusion here.

## Truth-source map for this repo

| If you need to know... | Read this |
|------------------------|-----------|
| The company in one screen | `CLAUDE.md` |
| What the company is, in plain words | `content/about.md` |
| Why the company is structured this way | `content/thesis.md`, `rules/thesis.md` |
| Founder | `content/founder.md` |
| Investors | `content/investors.md` |
| How we run | `content/operating.md`, `rules/operating-principles.md` |
| What we won't do | `rules/what-we-dont-do.md` |
| What "still works without humans" means | `rules/continuity.md` |
| Quarterly worldview | `content/perspective.md` |
| Accumulating thinking | `content/notes/` |
| Plugin manifest | `.claude-plugin/plugin.json` |
| Marketplace manifest | `.claude-plugin/marketplace.json` |
| Skills | `skills/team-learners-context/SKILL.md`, `skills/team-learners-rules/SKILL.md` |
