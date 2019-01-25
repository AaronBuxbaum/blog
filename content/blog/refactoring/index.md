---
title: Refactoring
date: '2015-05-01T22:12:03.284Z'
---

**Why bother refactoring?**

Refactoring is a core part of all development work. You should have some form of refactor in every PR you make. Each time we refactor, we are forced to deal with the intricacies of the associated designs and architectures. It can be easy to fall into complacency when "at least it works", but when you take a chunk of code and deal with it, new ways to separate out become clearly better. This is similar to the "demo" effect, where basically all product demos look amazing but as they get fleshed out, the cracks (or at least, the tradeoffs) of that design begin to appear. While you're not dealing with larger-scale design, making small changes and sticking to the status quo is easy.

In addition, we currently have a high barrier of entry to testing, largely due to big functions that do many things. By encouraging refactoring, we can separate our work out better, which makes our code more testable.

 
-- INFO --
Test-Driven Development allows for much easier refactoring. If tests don't exist in the code you're planning to refactor, it may make more sense to write tests, _then_ refactor, _then_ make any necessary changes. See [Test-Driven Development](TODO) for more information.



**Refactoring attitude**

Because much of our codebase is currently not in a very good state, larger-scale refactors are encouraged. We're also currently taking a "make it better, even if it breaks" approach: though obviously you should do your best to ensure all features are successfully adapted, we can err on the side of changes rather than feature safety. In other words, feel free to completely rewrite an area of code, move things around, or rewrite them – if the code you're refactoring doesn't currently make its features clear and document them well, it's bad code. It should be taken as a granted that badly written features will be broken in the pursuit of better design. If it's hard to maintain a feature, it's done poorly and should be redone anyway. It will be easier to fix bugs in a good design than maintain strict feature-parity in a poor design.

That said, your refactor isn't necessarily going to be taken to well by your peers. For that reason, it is prudent to discuss your ideas with others (and an appropriate number of people depending on the scope of your refactor) and make sure you're on the right track _before_ you dig in and do it. A new approach isn't necessarily a good approach.

When we refactor, it's important to take the perspective of someone else. If you were a new hire, would you understand the architecture and the system in question? Refactoring for the lowest common denominator lowers the learning curve, which makes everyone's mental model the same. That way, our codebase is optimally easy to understand and update, and it is easy to communicate about it.

Lastly, note that refactoring and clean code are not separate concerns – good refactored code is clean. Clean code can be refactored easily, and likely has been refactored already repeatedly. In fact, one of the metrics people use to analyze how good your code is is by how "refactorable" it is. So, it is important not just to move things around, but to make it _clean _too! If you're code isn't cleaner by the end of a refactor, you did something wrong.

**When to refactor**

Any time you touch code, at least _consider_ running a refactor in that area. You can refactor the entire folder, a component or function, or just that function itself. Common methodologies for refactoring are to refactor anything you change, refactor whenever adding a feature, refactor whenever fixing a bug, or refactor before you submit anything to code review. In general, the best approach is to be liberal with your refactoring and do it as often as you can.

Though it may seem counter-intuitive, particularly when you're adding a feature or fixing a bug, it's often easiest to refactor _first_, and then make your change. By doing so, you benefit by being able to start from a clean slate and your finished product is typically better.

You can scale your scope of refactor in accordance with how confident you feel, but you should at least aspire to be able to handle larger-scale refactoring. Though it can be daunting, refactoring an area you're not intimately familiar with serves two uses: it exposes areas of concern to everyone, and it teaches you about that area of code likely better/faster than you would have gotten otherwise. People who are already very familiar with a certain codebase are actually _less_ likely to discover design problems, as they've already built up their own mental model about the system. As mentioned above, when we refactor, we should take the perspective of a brand-new entry-level engineer. How easy is it to figure out what's going on?

**Learning to refactor**

If you're not familiar with refactoring, pairing with a more experienced engineer is a great way to learn. There's lots of different approaches and considerations to refactoring, and as such it will likely be one of the harder parts of your job.

If you learn effectively from books, there are two particularly excellent options: _Clean Code_ by Robert Martin and _Refactoring_ by Martin Fowler. These both tackle different approaches and are very highly regarded in the software engineering sphere. Both are available to you for free: ask management for your copy.

**Code smells**

_Code smells_ are patterns in code that potentially indicate problems. They are likely related to a larger problem (at least tangentially), and as such you should be familiar with code smells and should be constantly on the lookout for them. It's important to note that code smells are working code and not bugs – they are design problems, not logical problems.

A list of common code smells are available [here](TODO).

**How to refactor**

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

TODO