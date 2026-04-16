# Team Learners — Plugin Operations Memory (humans only)

For humans setting up or maintaining this plugin. Claude Code does NOT auto-load it (not referenced from `AGENTS.md`/`CLAUDE.md`). Reach it explicitly with `@CONTEXT.md` when needed.

## What this repo is

This repo is the **public surface** of Team Learners as a Claude Code plugin. It contains identity, rules, content, and the `team-learners-context` / `team-learners-rules` skills. The viewer site that renders this repo for humans is a **separate private repo** — see *Viewer site* below.

## URLs

- **GitHub (public):** <https://github.com/learners-superpumped/team-learners>
- **Viewer site (renders this repo):** <https://team-learners.vercel.app>
- **Plugin install (external agents):**
  ```
  /plugin marketplace add learners-superpumped/team-learners
  /plugin install team-learners@team-learners
  ```

## Updating the plugin

1. Edit any file under `content/`, `rules/`, `skills/`, or top-level (`AGENTS.md`, `CLAUDE.md`, `README.md`, `CONTEXT.md`).
2. If the change is meaningful (a new skill, a new rule that changes behavior), bump `version` in `.claude-plugin/plugin.json`.
3. `git pull --rebase && git add . && git commit -m "..." && git push origin main`.
4. The viewer site auto-rebuilds because its build script fetches from this repo at build time. Re-deploy the viewer (see its CONTEXT.md) to pick up the change.

## Viewer site (separate repo)

The site at `team-learners.vercel.app` lives in a separate private repo: `learners-superpumped/team-learners-site`. It does NOT contain a copy of this repo's content — it fetches from GitHub at build time and renders everything as a file tree. Pushing to this repo does not deploy the site automatically; trigger a viewer redeploy from that repo when you want changes live.

## Keep the public surface clean

Every file in this repo is rendered, as-is, on the public site. There must be:

- **No secrets** anywhere. Even `.json` config files, even line numbers in code comments.
- **No internal-only notes.** If you don't want it on the public site, don't put it in this repo. Put it in the viewer repo or in a private agent + harness instead.
- **No drafts.** Content here is published the moment it lands.

## Common mistakes (don't repeat)

1. **Putting viewer-related deploy steps in this CONTEXT.md.** Those belong in the viewer repo's CONTEXT.md.
2. **Treating CLAUDE.md as the master.** The master is `AGENTS.md`. `CLAUDE.md` is a one-line import so other AI tools work too.
3. **Adding a `web/` folder back.** Code for the renderer lives in `learners-superpumped/team-learners-site`, not here.
4. **Forgetting `git pull --rebase` before push.** Public repo with multiple machines pushing — fast-forward fails fast.
5. **Skipping the version bump on skill changes.** External agents won't see the new behavior until version changes.

## Truth-source map

| If you need to know... | Read this |
|------------------------|-----------|
| Company entry point (cross-tool) | `AGENTS.md` |
| Same entry point for Claude Code | `CLAUDE.md` (imports `AGENTS.md`) |
| Plain-language definition + legal entity + current product | `content/about.md` |
| Why the company is structured this way | `content/thesis.md`, `rules/thesis.md` |
| Founder | `content/founder.md` |
| Investors | `content/investors.md` |
| How we run | `content/operating.md`, `rules/operating-principles.md` |
| What we won't do | `rules/what-we-dont-do.md` |
| Continuity bar | `rules/continuity.md` |
| Quarterly worldview | `content/perspective.md` |
| Accumulating learnings | `content/learnings/` |
| Plugin manifest | `.claude-plugin/plugin.json` |
| Marketplace manifest | `.claude-plugin/marketplace.json` |
| Skills | `skills/team-learners-context/SKILL.md`, `skills/team-learners-rules/SKILL.md` |
