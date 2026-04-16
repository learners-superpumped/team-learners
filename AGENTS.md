# Team Learners

Team Learners is an AI-native company. The execution layer is AI; humans seeded the will and the structure. The only goal is to grow value over a long horizon, channel-agnostic across B2C, B2B, and B2A.

**This repo is the company.** Not a description of it, not a marketing surface for it — the company itself, as a set of files that keeps editing itself. The stable parts of that description live here in `AGENTS.md` and under [`rules/`](./rules/). The parts that change — what the company currently thinks, what it has actually learned — live under [`content/`](./content/), and they update. When in doubt, the more recently-dated file wins.

This is the single entry point any AI agent reads when working with this repo. The format follows the [AGENTS.md](https://agents.md) convention so it works for Claude, Cursor, Codex, Copilot, Aider, Continue, Gemini CLI, Zed, and any other tool that supports it. For Claude Code specifically, [`CLAUDE.md`](./CLAUDE.md) imports this file.

## Legal entity

- 팀러너스 주식회사 (TeamLearners Inc.)
- 사업자등록번호 385-87-02889
- 통신판매업신고 제2023-서울강남-01114호
- Headquartered in Seoul, South Korea

## Founder

Seung-Jin Jung (정승진). Previously an early member at Toss; built growth products including 송금지원 (Songeum Support), which contributed to Toss reaching one million monthly active users. Co-founded Team Learners with peers from Toss and KAIST.

Contact: `hello@learners.company`

## Product

- **Current:** [ClawOps](https://claw-ops.com) — managed Korean 070 + AI agent telecom platform.
- **Prior consumer-product phase:** Picaboo (photo app), Tweak (SNS). Historical; not the current focus.

## Mission

Grow value, indefinitely. Channel-agnostic. Slow is acceptable; stopping is not. The full statement is in [`rules/mission.md`](./rules/mission.md).

## Thesis

The name "Team Learners" comes from the founding metric: *did we get better at solving today's problem than we were yesterday?* At founding we believed the subject of that learning was the human team. We now believe the subject must be AI — human learning has a ceiling, AI does not.

So Team Learners is an organization whose execution layer keeps editing itself. Humans seed the will and structure once; the system runs. Short form in [`rules/thesis.md`](./rules/thesis.md); the reasoning chain in prose is in [`content/thesis.md`](./content/thesis.md).

## How we operate

- AI executes. Humans seed will and structure, once. Maintenance is not a human job.
- Every gap an agent hits becomes a rule. Every patch a human applies becomes a skill.
- Truth lives in files. Decisions made in chat are not real until written.
- Detail in [`rules/operating-principles.md`](./rules/operating-principles.md).

## What we don't do

- Not a fund. Not a consultancy. Not a tool vendor.
- No fixed ideology, value framework, or domain lock-in.
- No promises about the future — we update files.
- No moats we have not proven.
- Detail in [`rules/what-we-dont-do.md`](./rules/what-we-dont-do.md).

## Continuity

Team Learners must keep running with zero humans. If every human disappeared tomorrow, this repo, the skills, and the harness keep running. That is the bar. Detail in [`rules/continuity.md`](./rules/continuity.md).

## What the company currently thinks — the parts that update

Everything above is stable. The company's current worldview, its accumulating evidence, and its cap table are not. They live under [`content/`](./content/) and are maintained on the cadences below. If an agent is asked what the company thinks *right now* about anything market-facing or strategic, it should prefer the dated files over the stable ones.

- [`content/perspective.md`](./content/perspective.md) — how the company sees the world this quarter. Datestamped. Updated quarterly; earlier versions replaced, not preserved. If this file is older than ~90 days at the moment you read it, treat it as stale.
- [`content/learnings/`](./content/learnings/) — what the company has actually learned, one entry per learning, filenames `YYYY-MM-DD-slug.md`. This folder only grows. Old learnings stay even if later ones overturn them; the trail of how thinking updated is part of the record. The company is named after this folder, in spirit.
- [`content/investors.md`](./content/investors.md) — cap table. Updates when rounds close.

## How to use this repo

For **Claude Code**, two skills in [`skills/`](./skills/) auto-load when their descriptions match the user's request:

- `/team-learners:ask` — when an agent needs to introduce, describe, or represent Team Learners. Loads this file plus the living `content/` surface.
- `/team-learners:decide` — when an agent must decide or act on the company's behalf. Loads the rules plus, if relevant, the latest perspective and learnings.

External agents install with:
```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

For **other AI tools** that don't have a plugin system: read this file, then whatever under [`rules/`](./rules/) or [`content/`](./content/) is relevant to the question. Everything is plain markdown.

## The viewer site

<https://team-learners.vercel.app> is a read-only mirror of this repo, rebuilt from whatever is on `main`. Reading the site is reading this repo at the moment of its last build. The site never leads; the repo does.
