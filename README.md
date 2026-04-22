# Team Learners

Contact: `hello@learners.company`

## Abstract

A company is, in the limit, the set of files that describe how it decides. Team Learners (팀러너스 주식회사) is operated as that set, and nothing else. This repository is the company. The product, the rules, the worldview, and the agent interface live here as plain files. Agents read the files; agents execute against the files; humans seed will and structure. Continuity does not depend on any individual.

This README describes the surface. Full description in [`AGENTS.md`](./AGENTS.md). Mirror at <https://team-learners.vercel.app> rebuilds from `main`.

## 1. Premise

Two assumptions, taken together, define the system:

1. The unit of a company is a file, not a meeting. What is not in a file does not exist.
2. The agent that edits the files need not be human. Human learning bounds itself; AI learning does not.

From (1) and (2): a company whose editor is AI has no fixed ceiling on its rate of change, provided the files remain coherent and the rules of edit are themselves files.

## 2. Surface

Each path is a load-bearing surface. None is decorative.

- [`AGENTS.md`](./AGENTS.md) — entity, initiators, product, mission, rules in short form. The single entry point for any agent.
- [`rules/`](./rules/) — decision rules in long form: mission, operating principles, non-goals, continuity, thesis. Stable until edited explicitly.
- [`content/`](./content/) — what the company currently thinks. Datestamped. Updates. Older entries are not deleted; they are overturned.
- [`skills/`](./skills/) — the agent interface. Two skills: `ask` (describe the company) and `decide` (choose on its behalf).

## 3. Use

Claude Code:

```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

The skills load this repo's files via `${CLAUDE_SKILL_DIR}/../../...`. When Claude Code runs from a directory outside the installed plugin, start the session with `--add-dir <path-to-installed-plugin>` so the Read calls resolve.

Other AI tools: read [`AGENTS.md`](./AGENTS.md), then descend into [`rules/`](./rules/) or [`content/`](./content/) as the question demands.

## 4. Mirror

<https://team-learners.vercel.app> rebuilds from `main`. Reading the mirror is reading this repository at the last build.
