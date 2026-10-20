# Galvora Problem Filter

An open-source agent skill for deciding whether a product idea deserves to be built.

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

## Use it

Invoke the skill in an agent environment, then provide an idea with as much real context as possible:

```text
$galvora-problem-filter

Evaluate this idea:
[describe the person, recent incident, current workaround, consequence, and proposed solution]
```

For a reliable verdict, include:

1. Who experienced the problem?
2. What happened recently?
3. What did they do instead?
4. What did it cost them?
5. What existing tools did they try?

## Product philosophy

Galvora Labs chooses the format after understanding the problem. The answer may be an app, website, Android utility, agent skill, rule, library, automation, or flagship product.

The skill is intentionally rejection-oriented. “Reject” and “Insufficient evidence” are successful outcomes when they prevent wasted building time.

## Current status

P1 — first public product in the Galvora Labs 20-product program.
