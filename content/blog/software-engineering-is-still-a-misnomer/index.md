---
title: Software Engineering Is Still a Misnomer
date: "2026-11-25T03:40:03.284Z"
---

A few years ago, I wrote that [software engineering is a misnomer](/software-engineering-is-a-misnomer/). My argument was that most software development is a craft, and not an engineering or science discipline. As I put it then, you're almost always utilizing existing tools, with existing solved solutions, putting them together in some new configuration.

Reading that sentence again in 2026 is a little strange, because it's also a very good description of what a language model does. Taking existing, solved solutions and putting them together in a new configuration is exactly the kind of work that coding agents have become good at. So, it seems worth asking what's left of the argument now that a lot of the building is done by a model.

## What happened to the craft

In the original post, I compared an experienced developer to an experienced carpenter, who might not be physically more skilled than a young carpenter, but knows the tricks and pitfalls that are likely coming up in a given project.

I think that comparison has held up better than I expected. The part of the craft that was about producing the code -- knowing the syntax, remembering the API, typing it out quickly -- is worth much less than it was. The part that was about having seen the problem before is worth more. An agent will build whatever it's asked to build, and it will do it quickly, whether or not it was a good idea. Someone still has to know that the design is going to fall over at scale, or that the edge case everyone forgot about is the one that matters, and that knowledge still mostly comes from experience.

My first proposal back then was that less emphasis should be put on a college degree, and more on prior experience, regardless of where it comes from. If anything, I'd lean on that harder now. What I'm less sure about is how new developers are going to get that experience. A carpenter learns the pitfalls by building a lot of things, and if the agent is the one doing the building, we need to be deliberate about making sure that junior people are still the ones making the decisions and living with the results.

## The builders and the engineers

The second proposal was about responsibility. I wrote that programmers are the builders, and engineers are those who guide the development of the project and take responsibility for any shortcomings of the project. At the time, that was a description of two different groups of people.

With an agent, it's closer to a description of one person's day. The agent is the builder. The person who prompted it is the one guiding the project, and as I argued in [Code Review for AI-Written Code](/code-review-for-ai-written-code/), they're also the one who owns the result. In other words, a lot of developers have been moved into the engineer's chair without anyone saying so, and without any of the standards, training, or oversight that other engineering disciplines attach to that chair.

This matters because an agent can't be held responsible for anything. It can't be asked what it was thinking, and it won't be in the room when something goes wrong. If the responsibility isn't clearly sitting with a person, then it isn't sitting anywhere. I complained in the original post that programmers are never held responsible when software hurts people, because programming is not seen as an actual engineering job. Adding a builder that _can't_ be responsible makes that problem worse, and not better.

## The guidelines

My third proposal was that actual guidelines should be drawn up, similar to other engineering disciplines, along with oversight to make sure they're followed. I used the Boeing 737 MAX as the example of what happens without them.

I've spent the last several years working on software for autonomous vehicles, so this isn't an abstract point for me. I still think the proposal is right, and I think there's less time to get to it than there was. The amount of software in the world is growing much faster than it used to, because it has become so cheap to produce. The amount of careful review hasn't grown with it. For most software, that's a perfectly reasonable tradeoff (I recently wrote about [preferring velocity](/delivering-impact-in-an-ai-world/) for exactly that kind of work). For software where a mistake can hurt someone, it isn't, and that's where the line between the craft and the engineering needs to be drawn clearly.

## So, is it still a misnomer?

For most of us, most of the time, I think it is. We're still practicing a craft, with a remarkable new tool. What has changed is that the tool does the building, so what's left for the person is the judgment and the responsibility. Those happen to be the two things that the word "engineer" was supposed to mean in the first place.

For what it's worth, I'd suggest that anyone leading a team decide explicitly which of their software is craft and which is engineering. The craft can move as fast as the tools allow. The engineering needs a named person who signs off on it, standards that are written down, and tests that an agent isn't allowed to weaken. If we do that, the title might finally start to fit.
