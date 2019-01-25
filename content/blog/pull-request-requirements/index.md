---
title: Pull Request Requirements
date: '2015-05-01T22:12:03.284Z'
---

#### Document Purpose

> This document describes the requirements for a successful pull request (PR), from the perspective of both the PR author and reviewer. This is beneficial as a living document with which to set our bar for acceptable new code and for our code review process. As this document describes the bar that all new code must pass, enforcement should be complete and 100% ubiquitous. In addition, care must be taken to be precise when updating the document.

> **It is EVERY engineer's responsibility to follow these requirements in order to maintain code quality.**

## The PR System

- All code must go through the PR system in order to be merged.
- To complete a PR, you need at least two approvals.
- At least one of the approvals must come from an engineer with [Readability](http://my-jet.atlassian.net/wiki/spaces/BW/pages/504398740/Readability).
- All comments must be resolved – if you disagree with the comment, you must reply to it. If you simply resolve the comment, it means that you completed the request.
- If adding /upgrading a Package, please take a look at this [document](http://my-jet.atlassian.net/wiki/spaces/BW/pages/526680392/Introducing+New+Packages+or+Upgrading+existing+packages).

## Author Requirements

> You should _never_ submit a PR until these requirements are met.

- **Working and Tested**
    - Metric: Unmeasurable
    - Implementation: Author must run their PR in full production (v4 in v3) and test that it works and does not break any other functionality, to their knowledge. _Please do your due diligence. It is important to ensure that your code actually works, not just that you think it does__!_

- **Non-Decreasing Code Coverage**
    - Metric: code coverage percentage by branch criteria
    - Implementation: [TFS Build Quality Checks](https://marketplace.visualstudio.com/items?itemName=mspremier.BuildQualityChecks)
    - Link: [TODO: Unit Testing](http://my-jet.atlassian.net/wiki/spaces/BW/pages/518849222/TODO%3A+Unit+Testing)

- **Example Requirement**
    - Metric: _example metric details_
    - Implementation: _example implementation details_
    - Link: _link to the proposal notes_

## Reviewer Requirements

> You should _never_ accept a PR unless these requirements are met.

- **Example Requirement**
    - Metric: _example metric details_
    - Implementation: _example implementation details_
    - Reference: _link to the proposal notes_

## The Update Process

> In order to add, remove, or change one of these requirements, they must go through a distinct process:

1. A proposal is brought up in the form of a design review. Any engineer can present such a proposal.  
That proposal needs to have the following included, which should be explicitly displayed at the conclusion of the design review: 
    1. Description: short explanation of the idea.
    2. Perspective: whom this requirement is relevant to (Author or Reviewer).
    3. Metric: what is considered successful, what is considered not successful, or both. This should be as precise as possible.
    4. Implementation: the method in which the requirement will be added to the developer workflow. This should be as automated as possible, or should smoothly fit into the current developer workflow.
    5. Demo / Reference: link(s) to a demo _(this is ideal)_ or any other relevant information and documentation. At least one link is required.

2. Like any design review, good notes should be taken so that engineers can review the information or review historical decisions.
3. At the end of the design review, there is a discussion, but actual decision-making should not occur.
4. Developers can use the demo and informal meetings in order to decide on their opinion. If a change occurs in the proposal during the course of the week (for example, due to peer feedback), it should be communicated clearly and appropriately with the rest of the team. If the change is large enough, it should be be re-presented upon again: a requirement should feel like a moving target.
5. At the beginning of the next design review, there will be vote, but not a discussion.
    1. Engineers can vote yes, no, or abstain. 
    2. A vote of 2/3 wins, barring extreme circumstances.
    3. The next design review should continue immediately after the vote ends.

6. If approved, all new PRs must abide by new responsibilities the business day after any necessary infrastructure is implemented.  
If declined, the proposal can be attempted again, but must go through the entire process from the beginning, including a completely new proposal design review.

> There is no "delay option": if the proposal is accepted, it must go into the requirements as soon as possible; if it is not accepted "for now", the proposal should be considered declined.

> Update proposals should ideally be limited to one per week, though more than one proposal can occur simultaneously if necessary.

> Not every design review is a PR requirement update proposal: the intent to update this document should be expressed in the introduction of the design review.

### Example Information for an Update Proposal

- Description: Test coverage should monotonically increase with every PR (coverage should never go down)
- Perspective: Author
- Metric: When coverage is run via Jest, % statements, branches, functions, and lines is greater than or equal to the same values on the current head
- Implementation: Utilize TFS's Build Quality Checks hook to fail the build if metric fails
- Reference: [https://marketplace.visualstudio.com/items?itemName=mspremier.BuildQualityChecks](https://marketplace.visualstudio.com/items?itemName=mspremier.BuildQualityChecks)