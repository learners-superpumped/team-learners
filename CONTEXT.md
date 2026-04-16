# Team Learners — Plugin Operations Memory (humans only)

For humans setting up or maintaining this plugin. Claude Code does NOT auto-load it (not referenced from `AGENTS.md`/`CLAUDE.md`). Reach it explicitly with `@CONTEXT.md` when needed.

## What this repo is

This repo is the **public surface** of Team Learners as a Claude Code plugin. It contains:

- The stable company description (`AGENTS.md`).
- The decision rules (`rules/`).
- The company's current worldview and accumulating learnings (`content/`) — these are the parts that *update*; the company's identity is that the files keep editing themselves.
- Two skills agents use: `ask` and `decide` (`skills/`).

The viewer site that renders this repo for humans is a **separate private repo** — see *Viewer site* below.

## Cadences (the parts that update)

These are the files that should change over time. If they stop changing, the company is running on fumes. If you're maintaining this plugin, check whether these are up to date:

- `content/perspective.md` — quarterly. If older than ~90 days, write the new one; the old one is replaced, not preserved.
- `content/learnings/YYYY-MM-DD-slug.md` — whenever an assumption was tested and something was learned. One file per learning, dated. Never delete; later entries can overturn earlier ones by saying so explicitly.
- `content/investors.md` — whenever a round closes.
- `rules/*.md` — whenever an agent hits a gap and the gap becomes a rule (per operating principle 3).
- `skills/*/SKILL.md` — whenever a human patches something and the patch becomes a skill (per operating principle 4).

Bumping `version` in `.claude-plugin/plugin.json` signals that external agents should re-read.

## URLs

- **GitHub (public):** <https://github.com/learners-superpumped/team-learners>
- **Viewer site (mirrors this repo):** <https://team-learners.vercel.app>
- **Plugin install (external agents):**
  ```
  /plugin marketplace add learners-superpumped/team-learners
  /plugin install team-learners@team-learners
  ```

## Updating the plugin

1. Edit any file under `rules/`, `skills/`, or top-level (`AGENTS.md`, `CLAUDE.md`, `README.md`, `CONTEXT.md`).
2. If the change alters behavior (new skill, new rule), bump `version` in `.claude-plugin/plugin.json`.
3. `git pull --rebase && git add . && git commit -m "..." && git push origin main`.
4. Trigger a redeploy from the viewer repo to pick up the change (it fetches this repo at build time).

## Viewer site (separate repo)

The site at `team-learners.vercel.app` lives in a separate private repo: `learners-superpumped/team-learners-site`. It does NOT contain a copy of this repo's content — it fetches from GitHub at build time and renders everything as a file tree. Pushing to this repo does not deploy the site automatically; trigger a viewer redeploy from that repo when you want changes live.

The authoritative viewer exclude list lives in [`.claude-plugin/viewer.json`](./.claude-plugin/viewer.json). The viewer must read this file at build time and skip everything under `exclude`. If a plumbing file starts appearing on the site, fix the viewer — do not change the exclude list to paper over it, and do not dump meaningless files here to satisfy the renderer.

## Keep the public surface clean

Every meaningful file in this repo is rendered, as-is, on the public site. There must be:

- **No secrets** anywhere. Even `.json` config files, even line numbers in code comments.
- **No internal-only notes.** If you don't want it on the public site, don't put it in this repo. Put it in the viewer repo or in a private agent + harness instead.
- **No drafts.** Content here is published the moment it lands.
- **No build cruft.** This repo is pure markdown + JSON; there are no build artifacts to ignore. If your editor drops `.DS_Store` or similar, handle it via your global git config — don't clutter the repo with `.gitignore`.

## Common mistakes (don't repeat)

1. **Putting viewer-related deploy steps in this CONTEXT.md.** Those belong in the viewer repo's CONTEXT.md.
2. **Treating CLAUDE.md as the master.** The master is `AGENTS.md`. `CLAUDE.md` is a one-line import so other AI tools work too.
3. **Adding a `web/` folder back.** Code for the renderer lives in `learners-superpumped/team-learners-site`, not here.
4. **Forgetting `git pull --rebase` before push.** Public repo with multiple machines pushing — fast-forward fails fast.
5. **Skipping the version bump on skill changes.** External agents won't see the new behavior until version changes.
6. **Using `@path` imports inside `SKILL.md`.** That syntax only works in `CLAUDE.md` / memory files. Skill bodies must use the Read tool with `${CLAUDE_SKILL_DIR}/...` paths.

## Truth-source map

| If you need to know...                   | Read this                                  |
| ---------------------------------------- | ------------------------------------------ |
| Everything about the company             | `AGENTS.md`                                |
| Same for Claude Code                     | `CLAUDE.md` (one-line import of AGENTS.md) |
| Mission / operating principles / non-goals / continuity / thesis | `rules/*.md`                    |
| Quarterly worldview (updates)            | `content/perspective.md`                   |
| What we've learned (accumulates)         | `content/learnings/`                       |
| Cap table                                | `content/investors.md`                     |
| Thesis in prose form                     | `content/thesis.md`                        |
| The two agent-facing skills              | `skills/ask/SKILL.md`, `skills/decide/SKILL.md` |
| Plugin manifest                          | `.claude-plugin/plugin.json`               |
| Marketplace manifest                     | `.claude-plugin/marketplace.json`          |
| Viewer exclude list                      | `.claude-plugin/viewer.json`               |
| Regression test specs                    | `evals/evals.json`                         |
