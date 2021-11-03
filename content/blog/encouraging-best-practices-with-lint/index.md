---
title: Encouraging Best Practices with Lint
date: '2019-02-17T22:12:03.284Z'
---

I like to personally review every pull request that goes into the code base; I believe that it gives me a greater ability to speak to what's going on in the codebase, and knowing what's happening gives me a better ability to guide the team's direction. I dedicate a lot of time into reviewing code every day, so I see almost everything before it goes in (I review code after it's been merged in, too, if I somehow miss it).

There's several reasons why I think this investment is worthwhile:

1. You want to stop problems from occurring by preventing them from happening in the first place. It turns out that it's a lot harder to remove or fix code than it is to add it.
2. You want to ensure that coding guidelines are being adhered to properly.
3. You want to help junior engineers find more elegant solutions.
4. It keeps me up to date with what's going into the codebase.
5. It keeps me up to date with the quality of each engineer's work (you can get quantity through JIRA).
6. It lets me help encourage new patterns at the point of impact, which has been much more effective than lecture-style.

These reasons probably resonate with a lot of people in tech leadership/management. However, as you might be thinking, it's not scalable at all. I typically review thousands of lines of code a day, and that review inherently doesn't get the degree of attention that it deserves. I think this investment is still important, but I needed a way to help encourage best practices _before_ the code ever is submitted.

To do this, I established a very opinionated, strict lint ([see here](/strict-linting) for more about it). If you're not familiar, linting is a static analysis test that runs a set of checks against the code. They can alert the writer to anything that can be statically analyzed: consistency of style, avoiding usages of certain APIs, requiring specific code patterns, and so on. Linters are particularly good as first-pass checkers -- since they don't actually run the code, they don't know if the code works or not, but it also means that they're very fast. Editors and IDEs these days are very integrated with linting tools; typically they show a red underline under code sections that are tagged by the lint.

Lint rules also vary between objective and opinionated. For example, you might have a rule that says that all statements need to be finished by a semicolon, or that you can't import a file that doesn't exist. The former is an opinionated rule -- JavaScript says that no semicolon is fine in many situations, but you might say that it doesn't look consistent, or that it allows mistakes to creep in. The latter is more of an objective rule -- there is explicitly no benefit to importing a file that doesn't exist.

Your typical lint configurations tend towards avoiding opinionated subjects. For example, should you allow this syntax?

```
if (condition)
    doSomething()
```

How about this?

```
arr
    .map(mapMe)
    .flatten(flattenMe)
    .reduce(reduceMe);
```

Because the people who write the more popular lint configurations don't necessarily know what guidelines the consumers will use, they don't want to make assumptions. Therefore, most lint rules are relatively flexible.

I believe that it's a mistake to adapt a flexible lint configuration for your team; the more flexibility, the less consistency. More importantly, adapting opinionated rules can push developers into best practice styles. Let me explain what I mean.

When I introduced our new lint configuration at Jet.com, it included several inherently opinionated lint rules that represent my personal idea of what good code looks like. For example, a function cannot have more than seven statements in it. You may look at that and say, _"Seven statements?! You can't get anything done with seven statements!"_ Believe me, I got plenty of pushback for that rule, but I asked developers to try it for a week and see how they felt about it. Personally, I would argue that by eight lines, your function is practically guaranteed to be handling multiple concepts.

After the developers tried the lint rules for a week, almost everyone was very happy with them. They effectively represent a virtual pair-programmer -- someone saying "hey, that function looks too long, let's break it down", except with an immediate feedback loop. The second that you write that 8th line in a function, your IDE is already saying, _"Hold on a minute. Maybe we should split this out?"_ As developers adhered to the rules, patterns become more obvious. Small functions encourage testability, understandability, and maintainability, but that work doesn't come naturally. By encouraging the behavior with an immediate feedback loop, developers quickly come to understand _why_ the pattern is a good idea. It's proven to be much more effective than the many times I've lectured about small functions.

The team took to the lint so much that we actually had a few design reviews about how the rules had pushed them to refactor code, and how the resultant code was drastically better than the existing code. Results include dramatic drops in codebase complexity, much better test coverage, and far fewer bugs in compliant code. Overall, lint enforcement has resulted in considerable improvements to the codebase.

The downside, of course, is that lint is inherently very coarse. Lint rules will never be able to say "this function has multiple concerns", for example. And it's very possible that you'll have a totally legitimate eight-statement function. In addition, lint rules are easy to get around -- for example, a developer might function-chain to avoid the statement limit, which clearly defeats the purpose. To that end, we still need quality engineering and high scrutiny in our code, and we need education about coding principles, so that developers understand the core concepts behind what makes good code _good_.

But by defining general concept rules, you'll be able to start pushing them in the right direction. Engineers are curious people, and once they start seeing the advantages, it won't take much to drive the point home.

If you're interesting in the lint that we use at Jet.com, check out my article on [strict linting](/strict-linting).
