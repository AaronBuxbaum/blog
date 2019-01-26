---
title: Refactoring
date: '2019-01-26T22:12:03.284Z'
---

### Why bother refactoring?

Refactoring is a core part of all development work. You should have some form of refactor in every PR you make. Each time we refactor, we are forced to deal with the intricacies of the associated designs and architectures. It can be easy to fall into complacency when "at least it works", but when you take a chunk of code and deal with it, new ways to separate out become clearly better. This is similar to the "demo" effect, where basically all product demos look amazing but as they get fleshed out, the cracks (or at least, the tradeoffs) of that design begin to appear. While you're not dealing with larger-scale design, making small changes and sticking to the status quo is easy.

In addition, we currently have a high barrier of entry to testing, largely due to big functions that do many things. By encouraging refactoring, we can separate our work out better, which makes our code more testable.

> Test-Driven Development allows for much easier refactoring. If tests don't exist in the code you're planning to refactor, it may make more sense to write tests, _then_ refactor, _then_ make any necessary changes. See [Test-Driven Development](/test-driven-development) for more information.



### Refactoring attitude
In general, I don't believe in "refactor tickets" -- refactors should be built into every ticket as a base part of it. If you didn't do a refactor of some kind, you did it wrong. Leave the code in a better condition than the way you found it, even if that's just a small improvement.

While it's best if your refactor directly relates to the work you're doing, sometimes you'll see a developer rename a variable or extract a method that's unrelated to the pull request itself. And that's fine! What we're going for is _kaizen_ -- slow improvement over time. If we limit what can be in a pull request for "scope", the worst areas of the code never gets changed, even though they are in highest need.

In general, I encourage larger-scale refactors. Although it's inherently more risky, I tend to err on the side of long-term positive change, as opposed to feature safety. In other words, you should feel free to completely rewrite an area of code, move things around, or rewrite them – if the code you're refactoring doesn't currently make its features clear and document them well, it's bad code. It should be taken as a granted that badly written features will be broken in the pursuit of better design. If it's hard to maintain a feature, it's done poorly and should be redone anyway. It will be easier to fix bugs in a good design than maintain strict feature-parity in a poor design.

That said, a large-scale refactor isn't necessarily going to be taken to well by your peers. For that reason, it is prudent to discuss your ideas with others (and an appropriate number of people depending on the scope of your refactor) and make sure you're on the right track _before_ you dig in and do it. A new approach isn't necessarily a good approach.

The main point here is to not be "afraid of your code". If you don't want to touch a certain area of the code because it's unpleasant or because you worry it might break something, you're afraid of it. Other examples of this problem include "the author must have done this for a reason, so I don't want to change it" or "I'm not sure what that does exactly, we should go ask the author". Overall, change should be fearless and confident, and a lack thereof is a serious problem with your code quality.

When we refactor, it's important to take the perspective of someone else. If you were a new hire, would you understand the architecture and the system in question? Refactoring for the lowest common denominator lowers the learning curve, which makes everyone's mental model the same. That way, our codebase is optimally easy to understand and update, and it is easy to communicate about it.

Lastly, note that refactoring and clean code are not separate concerns, though they are correlated. Well-refactored code is clean, and clean code can be refactored easily (it likely has been refactored already repeatedly to get to a clean point). In fact, one of the metrics people use to analyze how good your code is is by how "refactorable" it is. So, it is important not just to move things around, but to make it _clean _too! If you're code isn't cleaner by the end of a refactor, you did something wrong.


### When to refactor
Any time you touch code, at least _consider_ running a refactor in that area. You can refactor the entire folder, a component or function, or just that function itself. Common methodologies for refactoring are to refactor anything you change, refactor whenever adding a feature, refactor whenever fixing a bug, or refactor before you submit anything to code review. In general, the best approach is to be liberal with your refactoring and do it as often as you can.

You can scale your scope of refactor in accordance with how confident you feel, but you should at least aspire to be able to handle larger-scale refactoring. Though it can be daunting, refactoring an area you're not intimately familiar with serves two uses: it exposes areas of concern to everyone, and it teaches you about that area of code likely better/faster than you would have gotten otherwise. People who are already very familiar with a certain codebase are actually _less_ likely to discover design problems, as they've already built up their own mental model about the system. As mentioned above, when we refactor, we should take the perspective of a brand-new entry-level engineer. How easy is it to figure out what's going on?

In addition to all of this, it's a good idea to write tests _before_ you refactor. That way, as you change your implementation, you'll know if you broke anything. Creating that short feedback loop is the best way to rapidly iterate and make your code better, while still having high confidence that the system isn't broken.


### Learning to refactor
If you're not familiar with refactoring, pairing with a more experienced engineer is a great way to learn. There's lots of learn in the area, and since it digs into the core of how good code is written, it will likely become one of the most important parts of your job.

If you learn effectively from books, I recommend _Clean Code_ by Robert Martin and _Refactoring_ by Martin Fowler. These both tackle different approaches and are very highly regarded in the software engineering sphere. For tech leads, I recommend buying a copy of these for everyone on your team.

If you learn better from video, I've found Robert Martin's [cleancoders.com](cleancoders.com) video series to be quite effective. Again for tech leads, I recommend buying video licenses for anyone who's willing to watch them.


### Code smells
_Code smells_ are patterns in code that potentially indicate problems. They are likely related to a larger problem (at least tangentially), and as such you should be familiar with code smells and should be constantly on the lookout for them. Code smells are often perfect places to target for refactoring, because the code is working (they are design problems, not logical problems). Therefore, if you have tests (or write tests), then as you refactor you'll know if you broke anything.

A list of common code smells are available [here](/code-smells).

<!-- ### How to refactor

In this section, we will briefly summarize some refactoring techniques, which should be immediately applicable to your daily work.

_Extract Method_

This is by far the most common and vital technique: when we have multiple lines that can be grouped together, move them into their own method. This has several benefits for us:

1. it makes the code easier to understand and abstract upon
2. it lets us assign a name to a block of functionality
3. it lets us re-use complexity (whether we'll need it now or not)
4. it isolates complexity, making side-effect errors less likely
5. it makes stack traces more useful

There's two ways you can get the information into the method in the first place:

1. Function parameters: 

const myFunc = (a, b) =&gt; { ... }
2. Query: 

const myFunc = () =&gt; { const a = getA(); } 

Both options should be considered whenever analyzing data flow.

_Combined vs Separated Parameters_

TODO -->