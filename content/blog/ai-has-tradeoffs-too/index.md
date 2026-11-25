---
title: AI Has Tradeoffs Too
date: "2026-11-25T02:52:03.284Z"
---

When I wrote about [why Apollo GraphQL is slow](/why-apollo-graphql-is-slow/), the post was only partly about Apollo. The larger point was about a pattern: certain new technologies get described as entirely Good, with no tradeoffs worth mentioning, and that should make us suspicious. As I put it then, whenever something seems like there are no downsides, one should immediately be wary that cognitive bias is getting in the way of objective decision-making.

I build with AI every day, and I think it's the most useful thing to happen to software in a long time. It's also the clearest example of that pattern that I've ever seen. So, let's give it the same treatment that I gave Apollo.

## Two fallacies, again

In the Apollo post, I leaned on two ideas from Daniel Kahneman's _Thinking, Fast and Slow_, and both apply here.

The first is that the brain is quick to build a story out of whatever information is in front of it, and it doesn't go looking for what's missing. A demo of an AI tool is a very good story. Someone types a sentence, a working feature appears, and there's nothing in the room to suggest a downside. The review time, the bill, and the bug that shows up three weeks later aren't part of the demo, so they don't make it into the story.

The second is substitution: when we're faced with a difficult question, we tend to answer an easier one instead. "Will this tool make our team ship better software, faster, a year from now?" is a hard question. "Was the demo impressive?" and "Is everyone else using it?" are easy ones, and they're the ones that usually get answered.

There's some evidence that this affects us more than we'd like to admit. In 2025, METR ran a [study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) where experienced open-source developers worked on issues in their own repositories, with and without AI tools. With the tools, they took 19% longer. What's more interesting is that, afterwards, the same developers believed that the tools had made them about 20% faster. It was a small study, and the tools have improved a lot since then, so I wouldn't read too much into the first number. The gap between the two numbers is what matters. How fast a tool _feels_ and how fast it _is_ are different questions, and we're not very good at telling them apart.

## So what are the tradeoffs?

Here are the ones that I run into the most.

1. The time moves from writing to reading. I covered this in [Code Review for AI-Written Code](/code-review-for-ai-written-code/) -- generating the code is close to free, but someone still has to understand it. If nobody does, the time we saved comes back later as debugging.
2. It costs money on every use. Normal code is nearly free to run once it's written. A feature that calls a model has a price per request, and that price grows with usage. This is easy to ignore in a prototype, and it's hard to ignore on the invoice.
3. It's slow. A model call takes seconds, where the code it replaced might have taken milliseconds. For some features that's fine, and for others it's the difference between a tool people use and a tool people wait on.
4. It isn't consistent. The same input can give a different answer tomorrow, which I wrote about in [Least Surprise in AI Tools](/least-surprise-in-ai-tools/). Making it predictable is possible, but it's real work.
5. It needs upkeep. Models get upgraded and retired, and a prompt that worked well on the old one may not work as well on the new one. Without [evals](/evals-are-just-tests/), we won't know until a user tells us.
6. Complexity gets cheap. When code took effort to write, the effort acted as a brake on how much of it we wrote. That brake is gone, and the codebase can grow much faster than our understanding of it.

None of these are reasons to avoid AI. They're costs, and like any cost, they're worth paying when what we get back is bigger. The trouble is only when they get left out of the math entirely.

## Do the math anyway

In [No Free Lunch](/no-free-lunch/), I did some back-of-the-envelope math on what an engineer's hour is worth, and the same kind of math works here. Before adopting an AI tool or building an AI feature, I suggest writing down what it will cost: the price per use, the review time, the upkeep, and what happens when it's wrong. If the list comes out empty, we haven't looked hard enough.

Then, measure something that the tool can't flatter. Lines of code and number of PRs will both go up no matter what, so they don't tell us much. The time from a ticket being opened to the change working in production is harder to fool, and so is the number of bugs that come back.

Finally, it's worth asking whether the problem needs a model at all. At the end of the Apollo post, I pointed out that you don't necessarily need a GraphQL client -- sometimes the built-in `fetch` function is enough. Likewise, plenty of "AI features" are better off as a form, a filter, or a regular expression. Those are fast, free, and do the same thing every time.

For what it's worth, I think the teams getting the most out of AI right now are the ones that treat it like any other technology choice. They know what it costs, they've checked that it's worth it for the problem in front of them, and they're willing to say no when it isn't.
