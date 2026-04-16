---
name: team-learners-rules
description: Loads Team Learners' decision rules — mission, operating principles, explicit non-goals, and continuity expectations — so an agent acting on the company's behalf stays aligned. Use this skill whenever an agent is about to make a decision, choose a direction, prioritize work, allocate resources, accept or reject an opportunity, or take any meaningful action on behalf of Team Learners. Trigger eagerly on phrases like "decide on behalf of Team Learners", "what should Team Learners do", "is X aligned with our mission", "should we pursue this", "prioritize for the company", or any context where the company's will is being applied to a choice.
---

# Team Learners — Decision Rules

You are about to make or recommend a decision on behalf of **Team Learners**. Load the rules below and apply them. These files are short and meant to be read in full — do not skim.

## Why this skill exists

The company runs on a small set of explicit rules so that any agent (or human) making a call lands in roughly the same place. If you decide without loading these, you will probably substitute your own priors — and those priors are not the company's.

## Load these in order

1. **Mission** — the only metric. Read first; it disambiguates most edge cases.
   @../../rules/mission.md

2. **Operating principles** — how work actually flows. Read second; this tells you what kind of action is expected.
   @../../rules/operating-principles.md

3. **Non-goals** — what we explicitly do NOT do. Read third; rule out options that violate these before considering anything else.
   @../../rules/what-we-dont-do.md

4. **Continuity** — the bar every decision is measured against (would this still work with zero humans?).
   @../../rules/continuity.md

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

Use the `team-learners-context` skill instead. That's the right surface for "who is this company / what is it doing." This skill is specifically for "what should the company do."
