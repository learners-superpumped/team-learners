# Team Learners

Team Learners is an AI-native company. The execution layer is AI; humans seeded the will and the structure. The only goal is to grow value over a long horizon, channel-agnostic across B2C, B2B, and B2A.

This is the single entry point any AI agent reads when working with this repo. The format follows the [AGENTS.md](https://agents.md) convention so it works for Claude, Cursor, Codex, Copilot, Aider, Continue, Gemini CLI, Zed, and any other tool that supports it. For Claude Code specifically, [`CLAUDE.md`](./CLAUDE.md) imports this file.

Everything an agent needs to describe the company is in this file. The decision rules live under [`rules/`](./rules/). Nothing else is required reading.

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

So Team Learners is an organization whose execution layer keeps editing itself. Humans seed the will and structure once; the system runs. Full statement in [`rules/thesis.md`](./rules/thesis.md).

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

## How to use this repo

For **Claude Code**, two skills in [`skills/`](./skills/) auto-load when their descriptions match the user's request:

- `/team-learners:ask` — when an agent needs to introduce, describe, or represent Team Learners.
- `/team-learners:decide` — when an agent must decide or act on the company's behalf.

External agents install with:
```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

For **other AI tools** that don't have a plugin system: read this file plus whatever under [`rules/`](./rules/) is relevant. Everything is plain markdown.

## The viewer site

This repo is the company. Every commit to `main` is what Team Learners is, right now. The site at <https://team-learners.vercel.app> is a read-only mirror that renders the repo file-by-file — when you read the site, you are reading this repo. The site never leads; the repo does.
