# Problem Filter

An open-source agent skill for deciding whether an idea deserves to be built.

Most idea prompts reward novelty, feature lists, and confident language. This skill does the opposite: it asks whether a real person has a painful situation, whether their current workaround fails, and whether the proposed product has a defensible gap.

## What it evaluates

- Web products
- Android apps
- Open-source utilities
- Agent skills and rules
- Automations
- Libraries
- Templates
- Flagship product concepts

## What it rejects

- Generic AI wrappers
- Renamed to-do lists
- Feature ideas without a user incident
- Invisible risks that users are not actively trying to solve
- Crowded clones with better branding as the only advantage
- Products that need many features before becoming useful

## The decision output

Every evaluation returns one direct verdict:

- **Build candidate**
- **Validate first**
- **Narrow the wedge**
- **Reject**
- **Insufficient evidence**

The skill also shows the evidence quality, filter scores, competitive gap, smallest credible version, AI role, and the one validation test that could change the verdict.

## Use it

Choose the path that matches your agent. The simplest path is to share this repository with the agent and ask it to read `SKILL.md` before evaluating an idea.

### Download the skill

[Download `SKILL.md`](https://raw.githubusercontent.com/Javeed726/problem-filter/main/SKILL.md) and place it in the skill directory your agent uses. The file is self-contained and does not require an API key, database, or hosted service.

### Native Agent Skills

Copy the repository's `SKILL.md` into one of these locations:

| Agent | Project path | Example request |
| --- | --- | --- |
| OpenAI Codex | `.codex/skills/problem-filter/SKILL.md` | `Use problem-filter to evaluate this idea.` |
| Claude Code | `.claude/skills/problem-filter/SKILL.md` | `/problem-filter` |
| Google Antigravity | `.agents/skills/problem-filter/SKILL.md` | `Use problem-filter before we build this.` |

### Cursor

Copy both included adapters into your project:

```text
adapters/cursor/problem-filter.mdc  ->  .cursor/rules/problem-filter.mdc
adapters/cursor/problem-filter.md   ->  .cursor/commands/problem-filter.md
```

Then apply the rule, or run `/problem-filter` from Cursor's command palette.

### Any other agent

Share the repository, ask the agent to read `SKILL.md`, and use a request like:

```text
Read SKILL.md from this repository. Apply it to the idea below.
Do not skip the evidence check or soften the verdict.

Idea: [describe the product, app, automation, skill, or service]
Context: [who experienced the problem, what happened recently, current workaround,
cost or consequence, and tools already tried]
```

For the strongest result, provide:

1. The person who experienced the problem.
2. A recent incident, not only a general annoyance.
3. The current workaround and where it fails.
4. The cost, risk, delay, or emotional consequence.
5. Existing products or workflows already tried.
6. The smallest outcome the first version should deliver.

## Compatibility

Problem Filter uses the open Agent Skills format. It includes native installation guidance for OpenAI Codex, Claude Code, and Google Antigravity, plus Cursor rule and command adapters.

See [COMPATIBILITY.md](COMPATIBILITY.md) for exact locations and official references.

## Proof

See [TEST-REPORT.md](TEST-REPORT.md) for six behavioural tests using real ideas from the discovery process. The skill rejected generic document tooling and waiting-list products, requested validation for uncertain ideas, and refused to approve an icon pack without evidence.

## Product philosophy

The skill chooses the format after understanding the problem. The answer may be an app, website, Android utility, agent skill, rule, library, automation, service, checklist, or something outside software entirely.

The skill is intentionally rejection-oriented. “Reject” and “Insufficient evidence” are successful outcomes when they prevent wasted building time.

## Current status

P1 — first public product in a 20-product open-source release program.

## Demo

[Open the live demo](https://problem-filter.galvoralabs.com) to try the browser-only decision console, inspect the proof examples, and see the supported agent formats.

You can also open [site/index.html](site/index.html) locally. The demo page is separate from the skill runtime; the actual reusable product is `SKILL.md`.
