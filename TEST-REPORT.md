# Problem Filter — Behaviour Test Report

## Purpose

This report tests the skill against ideas already discussed during product discovery. The test set intentionally includes weak ideas, crowded ideas, vague flagship concepts, and a concrete problem with evidence.

The goal is not to make every idea pass. The goal is to check whether the skill gives direct, defensible decisions instead of praising every idea.

## Test 01 — Structured document workbench

**Input:** “Build an AI-assisted platform where users choose project-scope, quotation, and requirements templates, paste their notes, and export polished documents.”

**Verdict: Reject**

**Problem restatement:** The input describes a document-generation workflow, but does not prove that a specific group has an unresolved painful problem.

| Filter | Score | Reason |
| --- | ---: | --- |
| Pain | 2/5 | Document creation is inconvenient, but urgency is not demonstrated. |
| Recurrence | 3/5 | Some users create documents repeatedly. |
| Existing behaviour | 3/5 | Users already use AI, Word, Google Docs, and templates. |
| Failure | 2/5 | The current workaround is not shown to fail materially. |
| User pull | 2/5 | No evidence users would seek this specific product. |
| Competitive gap | 1/5 | AI document generators and editors already cover the workflow. |
| Outcome | 3/5 | Faster document creation is measurable. |
| Build wedge | 3/5 | A prototype is feasible. |
| Trust | 2/5 | No clear trust advantage yet. |
| Expansion | 3/5 | It could expand, but expansion would increase category competition. |

**AI role:** Useful for drafting, but not a differentiator. Manual templates remain possible.

**Validation test:** Interview people who recently created these documents and ask what specifically went wrong, not whether they like the concept.

## Test 02 — ParcelCheck

**Input:** “A browser tool where small sellers upload courier settlement data, enter rate cards, and find shipping overcharges.”

**Verdict: Validate first**

**Problem restatement:** Small sellers may lose money through courier billing differences, but the frequency, data availability, and willingness to investigate are not proven.

| Filter | Score | Reason |
| --- | ---: | --- |
| Pain | 4/5 | Unexpected charges directly reduce margin. |
| Recurrence | 3/5 | Recurring for active sellers, weak for occasional sellers. |
| Existing behaviour | 3/5 | Sellers use spreadsheets and settlement exports. |
| Failure | 3/5 | Manual reconciliation is slow, but evidence is needed. |
| User pull | 3/5 | Strong only if the recovered money exceeds the effort. |
| Competitive gap | 3/5 | Could be underserved for Indian small sellers, but needs research. |
| Outcome | 4/5 | Flagged variance and recovered amount are measurable. |
| Build wedge | 4/5 | Import, compare, and export can be narrow. |
| Trust | 3/5 | Local processing could matter. |
| Expansion | 3/5 | More courier formats and dispute workflows are possible. |

**AI role:** Unnecessary for the core calculation; optional for column mapping and dispute drafting.

**Validation test:** Obtain five real anonymised settlement files and verify whether each reveals a meaningful, actionable discrepancy.

## Test 03 — Waiting tracker

**Input:** “Track refunds, replies, claims, repairs, applications, and follow-ups in one place.”

**Verdict: Reject**

**Problem restatement:** People forget open loops, but the proposed product is already a defined category with dedicated products and task-manager workarounds.

| Filter | Score | Reason |
| --- | ---: | --- |
| Pain | 4/5 | Waiting and forgotten follow-ups are real frustrations. |
| Recurrence | 4/5 | Many people experience them regularly. |
| Existing behaviour | 4/5 | Notes, reminders, email flags, and task apps are common. |
| Failure | 3/5 | Existing tools are imperfect but functional. |
| User pull | 3/5 | There is interest, but not enough differentiation. |
| Competitive gap | 1/5 | A dedicated app already targets this exact workflow. |
| Outcome | 4/5 | Fewer missed follow-ups is measurable. |
| Build wedge | 4/5 | Easy to build, which also makes cloning easy. |
| Trust | 2/5 | No unique trust advantage. |
| Expansion | 3/5 | Expansion leads toward another task manager. |

**AI role:** Optional for extracting dates and drafting follow-ups.

**Validation test:** Not worth running for the generic version. Find a specific underserved population first.

## Test 04 — Icon pack

**Input:** “Build an Android icon pack with a distinctive visual system and publish it.”

**Verdict: Insufficient evidence**

**Problem restatement:** The input proposes an asset product, but does not identify a user pain, unmet need, or visual niche.

**Why:** A beautiful product can still be a valid flagship, but the skill should not pretend that “people like icons” proves demand.

**AI role:** Unnecessary for the core product; AI may assist exploration but should not define the design.

**Validation test:** Identify a specific visual audience, show a coherent sample set, and measure saves, downloads, or preorders rather than asking for opinions.

## Test 05 — Problem Filter itself

**Input:** “A reusable agent skill that evaluates product ideas against evidence, user pain, workaround failure, competition, buildability, trust, and expansion before recommending a format.”

**Verdict: Validate first**

**Problem restatement:** Builders repeatedly re-explain evaluation criteria to AI agents and receive enthusiastic but weak ideas, causing wasted discovery and build time.

| Filter | Score | Reason |
| --- | ---: | --- |
| Pain | 3/5 | Repeated weak ideation wastes time, but severity varies. |
| Recurrence | 4/5 | Builders and agents face this repeatedly. |
| Existing behaviour | 4/5 | People paste frameworks and prompts into separate chats. |
| Failure | 4/5 | Generic AI ideation repeatedly produces crowded utilities. |
| User pull | 3/5 | Plausible for builders, but external demand is unproven. |
| Competitive gap | 3/5 | Generic product frameworks exist; agent-native rejection behaviour may be distinct. |
| Outcome | 4/5 | Better rejection consistency and shorter discovery cycles are measurable. |
| Build wedge | 5/5 | A portable skill can be released immediately. |
| Trust | 4/5 | Transparent criteria and inspectable rules are meaningful. |
| Expansion | 4/5 | Domain-specific filters and evidence adapters are possible. |

**AI role:** Required as the environment that interprets the idea; the filter rules themselves remain inspectable and deterministic.

**Validation test:** Give the skill to independent users, provide five mixed-quality ideas, and compare its verdict consistency and usefulness against an ordinary “give me product ideas” prompt.

## Test 06 — Household notice handoff

**Input:** “Three people in an apartment repeatedly miss maintenance deadlines because the landlord sends notices across WhatsApp, paper, and email. Last month they paid a late fee after one notice was buried. They currently forward messages into a group chat, but nobody knows who owns the next action.”

**Verdict: Validate first**

**Problem restatement:** Households lose money and accountability when time-sensitive notices are scattered across channels and no single person owns the next action.

**Why:** This has a concrete incident, failed workaround, and measurable consequence. It still needs evidence that the problem repeats across households and is not already solved by a tool people will actually adopt.

**AI role:** Not required for the core workflow. It could extract dates and obligations from notices later.

**Validation test:** Collect ten real anonymised notice incidents and measure how often the current group-chat workaround loses ownership or deadlines.

## Test result

The skill produced different decisions for different evidence levels:

- **Reject:** generic document workbench, generic waiting tracker
- **Validate first:** ParcelCheck, Problem Filter, household notice handoff
- **Insufficient evidence:** icon pack

This is the behaviour we want. The skill does not treat buildability or AI usage as proof of product quality.
