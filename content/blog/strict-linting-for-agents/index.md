---
title: Strict Linting for Agents
date: "2026-11-25T02:32:03.284Z"
---

A while back, I wrote about [strict linting](/strict-linting/), and about how an opinionated lint can [encourage best practices](/encouraging-best-practices-with-lint/) better than a lecture can. The idea was to keep two lint files: a _build_ lint that the whole codebase passes today, and a _strict_ lint that represents where we want the code to go. The strict one included some fairly aggressive rules, like a limit of seven statements per function.

The hardest part of that setup was always the people. Developers pushed back on the rules (understandably!), and I had to ask them to try it for a week before judging it. Now that a lot of my code is written by an agent, I've been surprised at how well the old setup fits. An agent doesn't push back on a rule or get annoyed by a red underline. It runs the lint, reads the errors, and fixes them, over and over, until the output is clean.

## Rules beat instructions

Most coding agents can be given a file of instructions about how the team likes its code. Those files are useful, but they're suggestions. The agent follows them most of the time, and the longer the session goes on, the more likely it is that one of them gets forgotten.

A lint rule is different, because it fails. If the function has eight statements, the lint says so, the agent sees the error, and the function gets split. In the original post, I described the lint as a virtual pair-programmer with an immediate feedback loop. That feedback loop is exactly what an agent needs, since it will happily keep working until the checks pass.

So, whenever I catch myself writing "please keep functions small" in an instructions file, I try to turn it into a rule instead. The same goes for types. A strict type checker tells the agent that the function it just called doesn't take that argument, and that's far more reliable than hoping it noticed.

It also turns out that the rules I called "arbitrary" back then line up well with the ways that generated code goes wrong. As I mentioned in [Code Review for AI-Written Code](/code-review-for-ai-written-code/), a model tends to write more code than the problem needs: long functions, deep nesting, and one more layer of abstraction than anyone asked for. Limits on statements, depth, complexity, and file length push directly against that. The settings from my old lint file are still a decent place to start:

```
complexity: ['error', { max: 4 }],
'max-depth': ['error', { max: 1 }],
'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
'max-statements': ['error', { max: 7 }],
```

## The same downsides, but faster

In the original post, I said that lint rules are easy to get around -- for example, a developer might function-chain to avoid the statement limit, which clearly defeats the purpose. An agent will do the same thing, and it will do it without feeling bad about it. The most common version I see is the disable comment. The agent can't get a rule to pass, so it adds `// eslint-disable-next-line` and moves on. Sometimes it loosens the lint config itself.

There are a few things I do about this. ESLint can ignore inline disable comments entirely, which takes away the easy way out:

```
linterOptions: {
  noInlineConfig: true,
},
```

That's too blunt for some codebases, but it's worth trying first. I also treat any change to a lint or type config as something a person has to read in review, the same way I'd treat a change to a test's assertions. And I tell the agent, in plain words, that if it can't satisfy a rule, it should stop and say so instead of working around it. That last one is only an instruction, so it's the weakest of the three, but it helps.

The other downside from the original post still holds as well: lint is inherently coarse. It can tell us that a function is long, but it will never be able to say "this function has multiple concerns". An agent can pass every rule and still solve the wrong problem. Lint takes the easy comments off the reviewer's plate, so the reviewer has more attention left for the hard ones, but it doesn't replace the reviewer.

## What about the build and strict split?

The reason for two lint files was that there's almost always a gap between the standards the codebase meets today and the standards we want it to meet. I said that closing that gap completely was conceivable, but really hard, since nobody has time to go back and fix thousands of old violations.

That part has changed quite a bit. Bringing old code up to a rule is tedious, mechanical work with a clear definition of done, which is about the best kind of work to hand to an agent. I pick one rule and one directory, ask the agent to bring it into compliance without changing behavior, and review the result as a small PR. Assuming the tests are good, this goes quickly, and a rule can move from the strict lint to the build lint in days instead of quarters.

Custom rules have also become cheap. Writing an ESLint rule used to mean an afternoon of reading about syntax trees, so I only did it for the patterns that really hurt. Now, if I leave the same review comment twice, I ask the agent to write a rule for it (with tests), and that comment never has to be written again.

## My recommendation

If your team is starting to use coding agents, I suggest tightening your lint before you write a long instructions file. Start with the complexity limits above, turn on the strictest type checking that you can stand, and make sure the agent can't quietly turn any of it off. For a human team, strict rules were a tradeoff between quality and annoyance, and it took some convincing to get there. An agent doesn't get annoyed, so most of that cost is gone, and the quality is still there for the taking.
