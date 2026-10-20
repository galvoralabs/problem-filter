# Compatibility

Problem Filter is packaged around the open Agent Skills format: a skill folder with a `SKILL.md` file containing YAML frontmatter and instructions.

## Native skill loading

| Agent | Status | Install location | Invocation |
| --- | --- | --- | --- |
| OpenAI Codex and Responses API | Native | `.codex/skills/problem-filter/SKILL.md` or a registered skill directory | Ask the agent to use `problem-filter` |
| Claude Code | Native | `.claude/skills/problem-filter/SKILL.md` | `/problem-filter` |
| Google Antigravity | Native | `.agents/skills/problem-filter/SKILL.md` | Ask the agent to use `problem-filter` |
| Cursor | Adapter included | `.cursor/rules/problem-filter.mdc` or `.cursor/commands/problem-filter.md` | Apply the rule or run `/problem-filter` |
| Other agents | Manual | Paste or mount `SKILL.md` wherever the agent reads reusable instructions | Explicitly ask the agent to use the skill |

## Why Cursor uses an adapter

Cursor documents project rules in `.cursor/rules` and reusable commands in `.cursor/commands`. The repository includes both formats so Cursor users do not need to translate the skill themselves.

## Important limitation

Compatibility means the instructions can be loaded and followed. The final verdict still depends on the model, the context provided, and whether the user supplies real evidence about the problem.

## Official references

- [OpenAI Agent Skills](https://developers.openai.com/api/docs/guides/tools-skills)
- [OpenAI plugin skills](https://developers.openai.com/plugins/concepts/skills)
- [Claude Code skills](https://code.claude.com/docs/en/skills)
- [Cursor rules](https://docs.cursor.com/context/rules)
- [Cursor commands](https://docs.cursor.com/en/agent/chat/commands)
- [Google Antigravity skills](https://antigravity.google/docs/skills)
- [Google Antigravity rules](https://www.antigravity.google/docs/rules/)
