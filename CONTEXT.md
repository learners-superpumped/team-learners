# Team Learners — Plugin Operations Memory (humans only)

## Abstract

This file exists for humans who set up or maintain the plugin. Claude Code does not auto-load it; it is not referenced from `AGENTS.md` or `CLAUDE.md`. Open it explicitly with `@CONTEXT.md` when needed. Everything below is operational. Nothing below is part of the company's public statement.

## 1. What this repository is

This repository is the public surface of Team Learners as a Claude Code plugin. It contains, and contains only:

- The stable description of the company (`AGENTS.md`).
- The decision rules (`rules/`).
- The current worldview and accumulating learnings (`content/`). These are the parts that update; the company's identity is that the files keep editing themselves.
- Two skills for agents: `ask` and `decide` (`skills/`).

The viewer site that renders this repo for humans is a separate private repo. See section 4.

## 2. Cadences

The files below are the parts that move. If they stop moving, the company is running on fumes. A maintainer's first check is whether each is current.

- `content/perspective.md` — quarterly. If older than ~90 days, write the new one. The old one is replaced, not preserved.
- `content/learnings/YYYY-MM-DD-slug.md` — one file per learning, dated. Written whenever an assumption was tested and something was concluded. Old entries remain; later ones can overturn them by saying so explicitly.
- `content/investors.md` — updated when a round closes.
- `rules/*.md` — updated when an agent hits a gap and the gap becomes a rule. (Operating principle 3.)
- `skills/*/SKILL.md` — updated when a human patches something and the patch becomes a skill. (Operating principle 4.)

A bump of `version` in `.claude-plugin/plugin.json` signals to external agents that the surface has changed and should be re-read.

## 3. Surfaces and addresses

- GitHub (public): <https://github.com/learners-superpumped/team-learners>
- Viewer (mirrors this repo): <https://team-learners.vercel.app>
- Plugin install:

```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

## 4. Updating the plugin

1. Edit any file under `rules/`, `skills/`, or top-level (`AGENTS.md`, `CLAUDE.md`, `README.md`, `CONTEXT.md`).
2. If the change alters behavior — a new skill, a new rule — bump `version` in `.claude-plugin/plugin.json`.
3. `git pull --rebase && git add . && git commit -m "..." && git push origin main`.
4. Trigger a redeploy in the viewer repo. The viewer fetches this repository at build time; pushes here do not deploy on their own.

## 5. The viewer (separate repository)

`team-learners.vercel.app` lives in `learners-superpumped/team-learners-site`. It holds no copy of this repo's content. It fetches at build time and renders the result as a file tree. The authoritative exclude list is [`.claude-plugin/viewer.json`](./.claude-plugin/viewer.json); the viewer reads it and skips everything under `exclude`.

If a plumbing file appears on the public site, fix the viewer. Do not paper over it by editing the exclude list. Do not add meaningless files to satisfy the renderer.

## 6. Surface hygiene

Every meaningful file in this repository is rendered, as-is, on the public site. Therefore:

- No secrets. Anywhere. Including config files and code-comment line numbers.
- No internal-only notes. If it should not appear on the public site, it does not belong in this repo. Use the viewer repo or the private agent harness.
- No drafts. What lands here is published.
- No build cruft. This repo is markdown and JSON. There is nothing to ignore. Editor artifacts (`.DS_Store` and similar) are handled by the global git config, not by adding `.gitignore` here.

## 7. Common faults (do not repeat)

1. Putting viewer deploy steps in this `CONTEXT.md`. Those belong in the viewer repo.
2. Treating `CLAUDE.md` as the master. The master is `AGENTS.md`. `CLAUDE.md` is a one-line import so other AI tools also work.
3. Restoring a `web/` folder. The renderer code lives in `learners-superpumped/team-learners-site`.
4. Skipping `git pull --rebase` before push. A public repo with multiple machines pushing fails fast-forward by default.
5. Skipping the `version` bump on a skill change. External agents will not notice.
6. Using `@path` imports inside `SKILL.md`. That syntax is a `CLAUDE.md` / memory-file feature only. Skill bodies must use the Read tool with `${CLAUDE_SKILL_DIR}/...` paths.

## 8. Truth-source map

| Question                                                            | File                                            |
| ------------------------------------------------------------------- | ----------------------------------------------- |
| Everything about the company                                        | `AGENTS.md`                                     |
| Same, for Claude Code                                               | `CLAUDE.md` (one-line import of `AGENTS.md`)    |
| Mission / operating principles / continuity / thesis                | `rules/*.md`                                    |
| Quarterly worldview (updates)                                       | `content/perspective.md`                        |
| What has been learned (accumulates)                                 | `content/learnings/`                            |
| Cap table                                                           | `content/investors.md`                          |
| Thesis in prose                                                     | `content/thesis.md`                             |
| The two agent-facing skills                                         | `skills/ask/SKILL.md`, `skills/decide/SKILL.md` |
| Plugin manifest                                                     | `.claude-plugin/plugin.json`                    |
| Marketplace manifest                                                | `.claude-plugin/marketplace.json`               |
| Viewer exclude list                                                 | `.claude-plugin/viewer.json`                    |
| Regression test specs                                               | `evals/evals.json`                              |
