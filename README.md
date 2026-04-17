# Team Learners

Contact: `hello@learners.company`

Team Learners is a Korean company (팀러너스 주식회사). This repo is how the company runs. Full description in [`AGENTS.md`](./AGENTS.md). Mirror: <https://team-learners.vercel.app> (rebuilds from `main`).

## Shape of the repo

- [`AGENTS.md`](./AGENTS.md) — legal entity, founder, product, mission, rules (short form).
- [`rules/`](./rules/) — decision rules, full: mission, operating principles, non-goals, continuity, thesis.
- [`content/`](./content/) — what the company currently thinks (updates). Perspective, learnings, investors, thesis in prose.
- [`skills/`](./skills/) — two Claude Code skills: `ask` (describe the company), `decide` (choose on its behalf).

## Install (Claude Code)

```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

The skills read this repo's files via `${CLAUDE_SKILL_DIR}/../../...`. If you run Claude Code from a cwd outside the plugin, start the session with `--add-dir <path-to-installed-plugin>`.

## Other AI tools

Read [`AGENTS.md`](./AGENTS.md), then [`rules/`](./rules/) or [`content/`](./content/) as needed.
