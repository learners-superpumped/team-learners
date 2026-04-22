# Team Learners

Contact: `hello@learners.company`

팀러너스 주식회사 runs as the set of files in this repository. Agents read the files, agents act on them, humans seed intent. Continuity does not depend on any individual.

Entry point for any agent: [`AGENTS.md`](./AGENTS.md).

## Why this shape

Human learning has a ceiling. AI learning does not. A company whose editor is AI has no fixed ceiling on its rate of change, as long as the files stay coherent. Humans seed once; AI executes against the files thereafter.

## Use

Claude Code:

```
/plugin marketplace add learners-superpumped/team-learners
/plugin install team-learners@team-learners
```

`/team-learners:ask` to describe. `/team-learners:decide` to choose on the company's behalf.

When Claude Code runs from a directory outside the installed plugin, start the session with `--add-dir <path-to-installed-plugin>` so the skills can read this repo.

Other tools: read [`AGENTS.md`](./AGENTS.md), then [`rules/`](./rules/) or [`content/`](./content/).
