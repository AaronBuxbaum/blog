---
title: Linting
date: '2015-05-01T22:12:03.284Z'
---

> _Linting_ is a set of metrics that are statically analyzed against the code. This static analysis can inform the user about known bad code patterns, performance inefficiencies, poor naming practices, and so on.

> We have two lint files:

- Full: this lint file represents our _existing accomplished_ code standards. It is run against the build against _all_ files in the codebase; the rules themselves are easier to accomplish, and the build will only succeed with 0 errors and 0 warnings.
- Strict: this lint file represents our _future_ code standards. It is the default IDE lint file; it is more difficult to accomplish, but is not run in the build at all. Compliance with the strict lint will always also mean compliance with the full lint (in other words, it is a superset of the full lint).

> _Why do we have a strict lint?_

> While the full lint helps prevent developers from making major mistakes, the strict lint goes a step farther and helps push developers into the right patterns in real-time as they code. Over time, this has proven effective – though often annoying at the time, the end result of strict lint-compliant code tends to be better than code that is only full lint-compliant. Though many of the rules are inherently arbitrary, they tend to reflect leading research and books on the subject, primarily "Clean Code" by Robert Martin and "Refactoring" by Martin Fowler.

> _What is the long-term plan for linting?_

> Because the strict lint represents the future of our code standards, we eventually want to merge to just the strict lint. Because there are so many changes that would be necessary to make that, we have to make the distinction between "have" and "want". Over time, we will add rules to the full lint until the strict lint is no longer necessary. We will delete the strict lint when parity is achieved.

> _What if I disagree with a rule in the strict lint?_

> That's totally okay! The strict lint doesn't necessarily represent the rules that _you_ think are important -- you are welcome to adjust it to your personal preferences with [a local override](https://code.visualstudio.com/docs/getstarted/settings).

> However, there are a few things to be aware of:

- Your override should always be compliant with the full lint (otherwise, your work will fail the build).
- The full lint changes over time.
- Since the strict lint represents the tech direction of the team, the full lint is very likely to adapt rules from the strict lint over time.

> Therefore, if you want to be future-proof, using the strict lint without overrides is recommended.

> Either way, team discussions about strict lint rules are encouraged. While many of the rules are arbitrary by nature, the team has the power to adapt them to fit the overall vision of the future. If you disagree with a strict lint rule, try using it for some time to give it a fair shake; if you still don't like it, create a discussion in Slack or in design review so the team can weigh in and make a decision!

 There is currently no linting on the v3 codebase.