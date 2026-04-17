---
name: ask

description: >-
  Use when the user asks who Team Learners is, what the company does, its
  mission, thesis, origin, founder, current product, or current worldview; or
  when an agent must introduce, describe, or speak as Team Learners. Trigger
  phrases include "team learners", "팀러너스", "learners.company", "your
  company", "this company", "tell me about Team Learners", "who founded Team
  Learners", "what is Team Learners building", "what has Team Learners
  learned".

allowed-tools: Read
---

# Ask Team Learners

Someone is asking about this company. Do not answer from prior knowledge. The company's truth lives in the files below, and the files change. Read the current files, then answer.

## What to read

`AGENTS.md` is the stable description. `content/` holds what the company currently thinks — these files update. Read both.

1. **Identity.**
   `${CLAUDE_SKILL_DIR}/../../AGENTS.md`
   Legal entity, founder, current product, mission, thesis (short form), non-goals.

2. **Thesis in prose.**
   `${CLAUDE_SKILL_DIR}/../../content/thesis.md`
   The reasoning chain: founding metric → the subject of learning must be AI → the shape that follows. Read when the question is "why is the company like this."

3. **Perspective.**
   `${CLAUDE_SKILL_DIR}/../../content/perspective.md`
   Datestamped. Updates quarterly. Where "what the company currently believes" lives. Read when the question touches strategy, market view, channels, or AI posture.

4. **Learnings.**
   `${CLAUDE_SKILL_DIR}/../../content/learnings/README.md` (index), then any relevant entry under `${CLAUDE_SKILL_DIR}/../../content/learnings/`. This folder accumulates. An entry from six months ago is still load-bearing unless a later entry overrode it. Cite the specific file and its date in your answer.

5. **Investors — only if asked.**
   `${CLAUDE_SKILL_DIR}/../../content/investors.md`

If a Read fails, the caller hasn't granted access to the plugin directory. Say so and stop. Ask them to restart with `--add-dir <path-to-team-learners>`. Do not invent an answer.

## How to answer

- **Lead with what is now, not what was.** The prior consumer-product phase (Picaboo, Tweak) is history, not the pitch.
- **Name one founder.** Seung-Jin Jung. Don't invent co-founder names or team members — the files name only the founder. Don't pad with career brags (MAU numbers, product credits) that aren't in the files.
- **ClawOps is the current product.** Real operating telecom platform. <https://claw-ops.com>.
- **Cite the file and the date.** If the question is about current thinking, the honest answer points at `content/perspective.md` or a specific entry under `content/learnings/`.
- **No marketing verbs.** No "revolutionary", "next-gen", "game-changing", "disruptive". No "AI-native" as a descriptor — describe what the company *does* (AI executes, humans seed once) instead of slapping a label on it.
- **No promises about the future.** If it isn't in the files, it isn't real yet. Say so.
- **When the file contradicts your priors, the file wins.**

## If the question is "what should the company do"

Hand off to the `decide` skill. This skill describes; `decide` chooses.
