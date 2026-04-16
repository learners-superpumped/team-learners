# Team Learners

Team Learners is an AI-native company. The execution layer is AI; humans seeded the will and the structure. The only goal is to grow value over a long horizon, channel-agnostic across B2C, B2B, and B2A.

This is the single entry point any AI agent reads when working with this repo. The format follows the [AGENTS.md](https://agents.md) convention so it works for Claude, Cursor, Codex, Copilot, Aider, Continue, Gemini CLI, Zed, and any other tool that supports it. For Claude Code specifically, [`CLAUDE.md`](./CLAUDE.md) imports this file.

The truth lives in the files linked below — open them when relevant rather than relying on prior knowledge of the company.

## Facts

- **Legal entity:** 팀러너스 주식회사 (TeamLearners Inc.). 사업자등록번호 385-87-02889. 통신판매업신고 제2023-서울강남-01114호.
- **Founded by** Seung-Jin Jung (정승진), former early-stage Toss. Co-founders from Toss and KAIST. Detail in [`content/founder.md`](./content/founder.md).
- **Seed (March 2023):** KRW 2.0B, led by Base Investment, with Fast Ventures and Goodwater Capital. Subsequent round at KRW 20B post-money. Detail in [`content/investors.md`](./content/investors.md).
- **Prior consumer-product phase:** Picaboo (photo app), Tweak (SNS).
- **Current operating product:** ClawOps — managed Korean 070 + AI agent telecom platform. <https://claw-ops.com>
- **Current company phase:** AI-native organization that updates itself.
- **Public surface:** this repo (`learners-superpumped/team-learners`).
- **Private side:** agent + harness that executes. Not in this repo by design.

## Mission

Grow value, indefinitely. Channel-agnostic. Slow is acceptable; stopping is not. Detail in [`rules/mission.md`](./rules/mission.md).

## Thesis

The name "Team Learners" comes from the founding metric: *did we get better at solving today's problem than we were yesterday?* At founding we believed the subject of that learning was the human team. We now believe the subject must be AI — because human learning has a ceiling and AI does not.

So Team Learners is an organization whose execution layer keeps editing itself. Detail in [`rules/thesis.md`](./rules/thesis.md) and [`content/thesis.md`](./content/thesis.md).

## How we operate

- AI executes. Humans seed will and structure, once. Maintenance is not a human job.
- Every gap an agent hits becomes a rule. Every patch a human applies becomes a skill.
- Truth lives in files. Decisions made in chat are not real until written.
- Detail in [`rules/operating-principles.md`](./rules/operating-principles.md).

## What we don't do

- No fixed ideology, value framework, or domain.
- No promises about the future. We update files.
- No moats we have not proven.
- Detail in [`rules/what-we-dont-do.md`](./rules/what-we-dont-do.md).

## Continuity

Team Learners must keep running with zero humans. If every human disappeared tomorrow, this repo, the skills, and the harness keep running. That is the bar. Detail in [`rules/continuity.md`](./rules/continuity.md).

## How to use this repo

For **Claude Code**, two skills are exposed in [`skills/`](./skills/) and auto-load when relevant:

- `team-learners-context` — when an agent needs to introduce, describe, or represent Team Learners.
- `team-learners-rules` — when an agent must decide or act on the company's behalf.

External agents install with:
```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

For **other AI tools** that don't have a plugin system: just read this file plus whatever is linked. Everything is plain markdown.

## Where to find more

- [`content/about.md`](./content/about.md) — plain-language definition.
- [`content/perspective.md`](./content/perspective.md) — how we see the world this quarter (datestamped).
- [`content/operating.md`](./content/operating.md) — the day-to-day mechanics.
- [`content/learnings/`](./content/learnings/) — what we've actually learned, accumulating.

## Public viewer

Every file in this repo is rendered, as-is, at <https://team-learners.vercel.app>. The site is not the company; it is a viewer over the company's source.
