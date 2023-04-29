---
title: Naming
date: "2019-01-26T22:12:03.284Z"
---

> "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors."

Much of the difficulty in programming isn't getting the computer to do what you want, it's in telling other humans what you wanted it to do (this is typically called _intent_). In that regard, naming things well is very important.

Though it's not obvious on the surface, taking your time naming things right is one of the best things you can do with your time. Making a list of possible names, taking a short break from the code, or asking a peer are all great strategies for coming up with the best name for the job.

A few other points about naming:

- Stick to your naming conventions. You can use whatever you like, but make sure that whatever you pick, everyone does it. Lint as much as you can of it.
- Short names are great, but longer names are better than confusing ones.
- Never use shorthand or acronyms. For example, use `getMessage` as opposed to `getMsg`. The former is searchable, the latter is not.
- Usage of domain terminology is encouraged, as long as it's the domain of the app itself (ie. `PDP` is a great acronym for e-commerce websites).
- Usage of names that are not obvious outside of the domain should be avoided. In other words, the names used should theoretically make sense to a non-programmer with domain knowledge.
- If you find yourself having difficulty naming something, it's likely doing too much. See [Functions](/functions) for more information.
- Avoid filler words like `Manager`, `Controller`, and so on. These names likely mean that your code is doing too much in one place.
