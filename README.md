# Team Learners

An AI-native company. The execution layer is AI; humans seeded the will and the structure. The only goal is to grow value over a long horizon.

This repo is the company. The public face, the decision rules, the skills agents use — all of it, every file. The site at <https://team-learners.vercel.app> is a read-only mirror of what's here.

## Shape of the repo

- [`AGENTS.md`](./AGENTS.md) — who the company is (single authoritative description).
- [`rules/`](./rules/) — the decision rules: mission, operating principles, non-goals, continuity, thesis.
- [`skills/`](./skills/) — two Claude Code skills that load the files above on demand: `ask` and `decide`.

## Install (for Claude Code)

```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

The skills read this repo's files via `${CLAUDE_SKILL_DIR}/../../...`. If you run Claude Code from a cwd outside the plugin, start the session with `--add-dir <path-to-installed-plugin>` so the Read calls have access.

## For other AI tools

No plugin system needed. Read [`AGENTS.md`](./AGENTS.md) first; follow links into [`rules/`](./rules/) as needed.
