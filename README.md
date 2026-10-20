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

Invoke the skill in an agent environment, then provide an idea with as much real context as possible:

```text
$problem-filter

Evaluate this idea:
[describe the person, recent incident, current workaround, consequence, and proposed solution]
```

For a reliable verdict, include:

1. Who experienced the problem?
2. What happened recently?
3. What did they do instead?
4. What did it cost them?
5. What existing tools did they try?

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

## Landing page

Open [site/index.html](site/index.html) locally. It is a static product page with a live browser-only demo, proof examples, the compatibility matrix, and installation paths.

See [DEPLOYMENT.md](DEPLOYMENT.md) for the exact GitHub push and landing-page publishing steps.
