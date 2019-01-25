---
title: Cohesion vs Coupling
date: '2015-05-01T22:12:03.284Z'
---

High-quality code has the dual properties of high cohesion and low coupling.

**Cohesion** represents the degree to which the elements inside a module belong together. It is a measure of the strength of relationship between the class’s methods and data themselves. For example, if component A is only used by component B, they likely belong in the same file, or at least the same folder. An example of low cohesion is a file about "testing" – this is a very generic, wide term, and thus is likely to contain elements that have low cohesion. In other words, elements with a similar focus should be closely colocated.

Modules with high cohesion tend to be preferable. High cohesion is associated with several desirable traits of software including robustness, reliability, reusability, and understandability. In contrast, low cohesion is associated with undesirable traits such as being difficult to maintain, test, reuse, or even understand.

> Cohesion describes how related the functions within a single module are.

> A module has high cohesion when everything belongs together and everything is focused on one task.

&nbsp;

**Coupling** represents the degree of interdependence between modules. In other words, two modules have high coupling if they are closely connected or have a strong relationship to each other. For example, if a component is tightly tied to a certain API, it may be a major project when that API is updated or the design changes to a different system. A system with low coupling would mean that such transitions are much easier and safer.

Modules with low coupling tend to be preferable. Low coupling is often a sign of a well-structured computer system and a good design, and when combined with high cohesion, supports the general goals of high readability and maintainability.

> Coupling describes how interdependent two modules are to each other.

> A module has low coupling when it has low interdependence to other modules.
