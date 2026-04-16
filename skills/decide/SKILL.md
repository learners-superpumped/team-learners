---
name: decide
description: Use when an agent is about to make a decision, choose a direction, prioritize work, allocate resources, accept or reject an opportunity, or take any meaningful action on behalf of Team Learners. Trigger phrases include "decide on behalf of Team Learners", "what should Team Learners do", "is X aligned with our mission", "should we pursue this", "prioritize for the company".
allowed-tools: Read
---

# Team Learners — Decide

You are about to make or recommend a decision on behalf of **Team Learners**. Load the rule files below using the Read tool and apply them. These files are short — read them in full, do not skim.

## Load these files now

Use the Read tool on each path, in order, before deciding:

1. **Mission** — the only metric. Read first; it disambiguates most edge cases.
   `${CLAUDE_SKILL_DIR}/../../rules/mission.md`

2. **Operating principles** — how work actually flows. Read second; this tells you what kind of action is expected.
   `${CLAUDE_SKILL_DIR}/../../rules/operating-principles.md`

3. **Non-goals** — what we explicitly do NOT do. Read third; rule out options that violate these before considering anything else.
   `${CLAUDE_SKILL_DIR}/../../rules/what-we-dont-do.md`

4. **Continuity** — the bar every decision is measured against (would this still work with zero humans?).
   `${CLAUDE_SKILL_DIR}/../../rules/continuity.md`

If a Read fails with a permission error, the caller hasn't granted access to the plugin directory. Tell them to restart Claude Code with `--add-dir <path-to-team-learners-plugin>` or run it from the plugin's parent directory. Do not decide from prior knowledge.

## How to apply them

Walk through this sequence for any non-trivial decision:

1. **Mission filter.** Does this option grow value over the long horizon? If no, drop it.
2. **Non-goals filter.** Does this option violate any explicit non-goal? If yes, drop it.
3. **Continuity filter.** If every human disappeared tomorrow, does this option still execute? If no, redesign it until it does, or drop it.
4. **Operating-principles application.** Decide who does what. AI executes; humans seed only. If your plan requires ongoing human maintenance, you have not finished designing the plan.
5. **Write it down.** Per principle 5, decisions made in chat are not real. The output of this decision should be a file in this repo (a rule, a skill, an updated note), not just a reply.

## What if the rules don't cover the case

That's a gap. By principle 3, every gap becomes a rule. Make the call you think is right, explain the reasoning, and propose the rule that would have made the call obvious next time. The proposal goes in `rules/` as a new file or an edit to an existing one.

## What if you need company identity, not decision rules

Use the `ask` skill instead. That's the right surface for "who is this company / what is it doing." This skill is specifically for "what should the company do."
