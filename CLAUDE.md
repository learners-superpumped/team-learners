@AGENTS.md

## Claude Code specifics

The two skills in [`skills/`](./skills/) use Claude Code's `SKILL.md` frontmatter and `@`-import semantics. They auto-load when their description matches the user's request — see each `SKILL.md` for triggers.

Other AI tools that don't recognize `SKILL.md` should read [`AGENTS.md`](./AGENTS.md) and follow the links from there.
