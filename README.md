# Team Learners

An AI-native company. The execution layer is AI; humans seeded the will and the structure. The only goal is to grow value over a long horizon.

This repo is the company. Not a description of it — the company itself, as files that keep editing themselves. What the company *is* sits in the stable parts (AGENTS.md, rules/). What the company currently *thinks and has learned* sits in the parts that update (content/). The site at <https://team-learners.vercel.app> is a read-only mirror of whatever is on `main`.

## Shape of the repo

- [`AGENTS.md`](./AGENTS.md) — the single, stable description of the company (legal entity, founder, product, mission, thesis, operating model, non-goals).
- [`rules/`](./rules/) — the decision rules: mission, operating principles, non-goals, continuity, thesis (short form). These change only when the company itself does.
- [`skills/`](./skills/) — two Claude Code skills that pull the files above on demand: `ask` (describe the company) and `decide` (choose on the company's behalf).
- [`content/`](./content/) — the parts that update. `perspective.md` (quarterly worldview), `learnings/` (accumulating record of what's actually been learned, one entry per learning), `investors.md` (cap table), `thesis.md` (founding reasoning chain, prose form). If you want to know what the company *currently thinks* about something, this is where it lives.

## Install (for Claude Code)

```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

The skills read this repo's files via `${CLAUDE_SKILL_DIR}/../../...`. If you run Claude Code from a cwd outside the plugin, start the session with `--add-dir <path-to-installed-plugin>` so the Read calls have access.

## For other AI tools

No plugin system needed. Read [`AGENTS.md`](./AGENTS.md) first; follow links into [`rules/`](./rules/) for decisions and [`content/`](./content/) for current thinking.
