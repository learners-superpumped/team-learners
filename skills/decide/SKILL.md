---
name: decide

description: >-
  Use when an agent is about to make a decision, choose a direction,
  prioritize work, allocate resources, accept or reject an opportunity, or
  take any meaningful action on behalf of Team Learners. Trigger phrases
  include "decide on behalf of Team Learners", "what should Team Learners
  do", "is X aligned with our mission", "should we pursue this", "prioritize
  for the company", "is this worth doing".

allowed-tools: Read
---

# Decide for Team Learners

A decision is about to be made on the company's behalf. The company runs on
a small, explicit set of rules so that any caller — human or agent — lands
in roughly the same place. Skipping the rules and substituting your own
priors is not deciding for Team Learners; it is deciding for yourself
while using the company's name.

The rules live in files. Read them. Apply them in order. Then decide. Then
write the decision down, because decisions made in chat don't count here.

## Read these files, in order

1. **Mission — the one metric.**
   `${CLAUDE_SKILL_DIR}/../../rules/mission.md`
   Grow value, indefinitely. Slow is fine; stopping is not. This
   disambiguates most edge cases on its own.

2. **Operating principles — how work actually flows here.**
   `${CLAUDE_SKILL_DIR}/../../rules/operating-principles.md`
   AI executes. Humans do not maintain. Gaps become rules. Patches become
   skills. Truth lives in files. These principles tell you what kind of
   action is expected of an AI-native company, not just a conventional one.

3. **Non-goals — what the company will not do.**
   `${CLAUDE_SKILL_DIR}/../../rules/what-we-dont-do.md`
   Rule out anything that violates these before considering anything else.
   Violating a non-goal is cheaper to catch here than after you've built a
   case for it.

4. **Continuity — the zero-humans bar.**
   `${CLAUDE_SKILL_DIR}/../../rules/continuity.md`
   Would this still execute if every human disappeared tomorrow? That is
   the bar. It is not a metaphor. The company plans to outlive its
   founders.

5. **Perspective (if the decision touches strategy or worldview).**
   `${CLAUDE_SKILL_DIR}/../../content/perspective.md`
   Quarterly snapshot of how the company currently sees the world.
   Datestamped. If the perspective file has changed since you last looked,
   your prior takes about "what the company thinks" are stale.

6. **Learnings index (if the decision resembles something we've decided before).**
   `${CLAUDE_SKILL_DIR}/../../content/learnings/README.md`
   Then read any learning entry that might apply. The whole company is
   named after this folder. Deciding in contradiction to a prior learning
   without naming that contradiction is failing at the one thing the
   company is trying to do.

If a Read fails, the caller has not granted access to the plugin directory.
Say so and stop. Ask them to restart with `--add-dir <path-to-team-learners>`.
Deciding from prior knowledge when the files are unreachable is exactly the
failure mode this skill exists to prevent.

## Apply the filters, in order

1. **Mission.** Does this option grow value over a long horizon? If not,
   drop it. Not "could it eventually" — does it compound.
2. **Non-goals.** Does it violate something explicitly ruled out? If yes,
   drop it. Non-goals outrank cleverness.
3. **Continuity.** If every human disappeared tomorrow, does it still run?
   If not, redesign it until it does — or drop it. Anything that needs a
   human in the loop daily is not a company decision; it is a personal
   hobby wearing a company's clothes.
4. **Operating principles.** Who executes what? AI executes; humans seed
   only. If your plan requires ongoing human maintenance, the plan is
   unfinished, not the principles bent.
5. **Consistency with learnings.** Does any prior entry in
   `content/learnings/` push against this decision? If yes, either reconcile
   it in your reasoning or overturn the prior learning explicitly.
6. **Write it down.** Per operating principle 5, decisions made in chat are
   not real. The output of this decision is a file — a new rule, an edit
   to an existing one, or a new learning — not just a reply. A reply that
   doesn't land in the repo is a recommendation, not a decision.

## If the rules don't cover the case

That is a gap, and gaps are the raw material the company runs on. Make the
call you think is right, explain the reasoning, and propose the rule that
would have made the call obvious next time. The proposal is a concrete file
(a new `rules/*.md` or an edit to one, or a new `content/learnings/` entry
dated today). A gap closes only when a file lands. Anything short of that
is an IOU.

## If what you need is identity, not a decision

Hand off to the `ask` skill. "Who is this company" is its job. "What should
this company do, given what it is" is yours.
