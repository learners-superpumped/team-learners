# Team Learners

Contact: `hello@learners.company`

## Abstract

This repository is Team Learners. Not a description of the company; the company. `AGENTS.md` and the files under `rules/` define what the company is. Files under `content/` hold what the company currently thinks and has learned — these update. `skills/` is the agent interface. For Claude Code, [`CLAUDE.md`](./CLAUDE.md) imports this file.

The format follows the [AGENTS.md](https://agents.md) convention, so the same surface is read by Claude, Cursor, Codex, Copilot, Aider, Continue, Gemini CLI, Zed, and any other tool that supports it.

## Legal entity

- 팀러너스 주식회사 (TeamLearners Inc.)
- 사업자등록번호 385-87-02889
- 통신판매업신고 제2023-서울강남-01114호
- Seoul, South Korea

## Founder

Seung-Jin Jung (정승진) — <https://www.linkedin.com/in/seungjin-jung-6097a8265/>

## Product

- **Now:** [ClawOps](https://claw-ops.com) — managed Korean 070 + AI agent telecom platform.
- **Before:** Picaboo (photo app), Tweak (SNS). Prior phase, not current.

## Mission

Grow value, indefinitely. The metric is value, not valuation. Channel-agnostic across B2C, B2B, B2A; the channel is an implementation detail. Slow is acceptable; stopping is not. Full statement in [`rules/mission.md`](./rules/mission.md).

## Thesis

The name comes from one question: *did we get better at solving today's problem than we were yesterday?* At founding, the subject of that question was the team. It is now AI. Human learning has a ceiling; AI learning does not. A company whose editor is AI has no upper bound on its rate of change, provided the files remain coherent. Short form in [`rules/thesis.md`](./rules/thesis.md); reasoning chain in [`content/thesis.md`](./content/thesis.md).

## How we operate

- AI executes. Humans do not maintain.
- Every gap an agent hits becomes a rule.
- Every patch a human applies becomes a skill.
- Truth lives in files. Chat does not count until it lands in a file.
- Detail in [`rules/operating-principles.md`](./rules/operating-principles.md).

## What we do not do

- Not a fund. Not a consultancy. Not a tool vendor.
- No fixed ideology. No domain lock-in.
- No timelines. No promises. The files update; that is the commitment.
- No moats not yet proven.
- Detail in [`rules/what-we-dont-do.md`](./rules/what-we-dont-do.md).

## Continuity

If every human disappears tomorrow, this repository and the skills inside it keep running. That is the bar, stated as a constraint rather than an aspiration. Detail in [`rules/continuity.md`](./rules/continuity.md).

## What is current (these files update)

- [`content/perspective.md`](./content/perspective.md) — worldview. Datestamped, quarterly. Treat as stale after ~90 days.
- [`content/learnings/`](./content/learnings/) — accumulating record. One entry per learning, `YYYY-MM-DD-slug.md`. Old entries remain; later entries can overturn them explicitly.
- [`content/investors.md`](./content/investors.md) — cap table.
- [`content/thesis.md`](./content/thesis.md) — thesis in prose.

When the question is "what does the company currently think about X," prefer these over the stable description.

## Use

Claude Code:

```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

Then `/team-learners:ask` to describe, `/team-learners:decide` to choose on the company's behalf. The two skills are defined under [`skills/`](./skills/).

Other tools: read this file, then whichever of [`rules/`](./rules/) or [`content/`](./content/) is relevant.

## Mirror

<https://team-learners.vercel.app> rebuilds from `main`. Reading the mirror is reading this repository at the last build.
