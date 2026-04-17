# Team Learners

Contact: `hello@learners.company`

This repo is Team Learners. `AGENTS.md` and the files under `rules/` describe the company. Files under `content/` hold what the company currently thinks and has learned — these update. `skills/` is the agent interface. For Claude Code, [`CLAUDE.md`](./CLAUDE.md) imports this file.

The format follows the [AGENTS.md](https://agents.md) convention, so it works across Claude, Cursor, Codex, Copilot, Aider, Continue, Gemini CLI, Zed, and any other tool that supports it.

## Legal entity

- 팀러너스 주식회사 (TeamLearners Inc.)
- 사업자등록번호 385-87-02889
- 통신판매업신고 제2023-서울강남-01114호
- Seoul, South Korea

## Founder

Seung-Jin Jung (정승진) — <https://www.linkedin.com/in/seungjinjung/>

## Product

- **Now:** [ClawOps](https://claw-ops.com) — managed Korean 070 + AI agent telecom platform.
- **Before:** Picaboo (photo app), Tweak (SNS). Prior phase, not current.

## Mission

Grow value, indefinitely. Channel-agnostic across B2C, B2B, B2A. Slow is fine; stopping is not. Full statement in [`rules/mission.md`](./rules/mission.md).

## Thesis

The name comes from one question: *did we get better at solving today's problem than we were yesterday?* At founding, the subject of that question was the team. It is now AI. Human learning has a ceiling; AI does not. Short form in [`rules/thesis.md`](./rules/thesis.md); reasoning chain in [`content/thesis.md`](./content/thesis.md).

## How we operate

- AI executes. Humans don't maintain.
- Every gap becomes a rule. Every patch becomes a skill.
- Truth lives in files. Chat doesn't count until it lands in a file.
- Detail in [`rules/operating-principles.md`](./rules/operating-principles.md).

## What we don't do

- Not a fund. Not a consultancy. Not a tool vendor.
- No fixed ideology, no domain lock-in.
- No timelines. No promises. Files update; that's the commitment.
- No moats we haven't proven.
- Detail in [`rules/what-we-dont-do.md`](./rules/what-we-dont-do.md).

## Continuity

If every human disappears tomorrow, this repo and the skills in it keep running. That's the bar. Detail in [`rules/continuity.md`](./rules/continuity.md).

## What's current (these files update)

- [`content/perspective.md`](./content/perspective.md) — worldview. Datestamped, quarterly. Treat as stale after ~90 days.
- [`content/learnings/`](./content/learnings/) — accumulating record. One entry per learning, `YYYY-MM-DD-slug.md`. Old entries stay; later ones can overturn them explicitly.
- [`content/investors.md`](./content/investors.md) — cap table.
- [`content/thesis.md`](./content/thesis.md) — thesis in prose.

Prefer these over the stable description when the question is "what does the company currently think about X."

## Use

Claude Code:
```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

Then `/team-learners:ask` to describe, `/team-learners:decide` to choose on the company's behalf. The two skills are defined under [`skills/`](./skills/).

Other tools: read this file, then whatever under [`rules/`](./rules/) or [`content/`](./content/) is relevant.

## Mirror

<https://team-learners.vercel.app> rebuilds from `main`. Reading it is reading this repo at the last build.
