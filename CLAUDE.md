@AGENTS.md

## Claude Code specifics

The two skills in [`skills/`](./skills/) use Claude Code's `SKILL.md` frontmatter. Their descriptions decide when Claude auto-invokes them. Once invoked, each skill uses the Read tool to load the canonical files via `${CLAUDE_SKILL_DIR}/../../...` paths — not `@`-imports (which are a CLAUDE.md/memory-file feature and do not apply inside skill bodies). See each `SKILL.md` for triggers.

**Install note for external agents:** the skills need read access to this plugin's own directory. When running Claude Code from a different cwd, pass `--add-dir <path-to-team-learners>` once at session start, or start Claude Code from the plugin's parent directory. Without this, the Read calls inside the skills will fail and the skills will say so rather than invent an answer.

Other AI tools that don't recognize `SKILL.md` should read [`AGENTS.md`](./AGENTS.md) and follow the links from there.
