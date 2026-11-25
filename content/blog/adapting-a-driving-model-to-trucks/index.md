---
title: Adapting a Driving Model to Trucks
date: "2026-11-25T04:14:03.284Z"
---

In September, we put a paper on arXiv called [Data-Efficient Adaptation of a Driving VLA to Class 8 Trucks](https://arxiv.org/abs/2609.38570). It's a collaboration between Stack AV and the University of Southern California.

Papers are written for other researchers, so here's our attempt at explaining what's in this one for everyone else.

## The problem

A _VLA_ is a vision-language-action model. It takes in camera images (and sometimes text), and it puts out actions -- in this case, the path that a vehicle should drive over the next few seconds. Several large ones have been released for driving, and we started from NVIDIA's Alpamayo 1.5.

Models like this learn mostly from passenger cars, and a Class 8 truck is not a big car. The trailer doesn't follow the same path as the cab (this is called off-tracking), so a turn that is fine for a sedan can put a trailer into the next lane. The differences matter the most in the situations that come up the least, such as construction zones and the scene of an accident, where the lanes are narrow and the usual rules of the road are suspended.

The obvious fix is to retrain the model on a huge amount of truck driving. That is expensive, and the rare situations are rare in that data, too. So, the question in the paper is a narrower one: how far can we get with a small number of carefully chosen examples, and without touching most of the model?

## Adapt

Alpamayo has two parts. There's a vision-language backbone with about 8.2 billion parameters, which is the part that understands the scene, and an action expert with about 2.3 billion, which is the part that turns that understanding into a trajectory. We left the backbone frozen and fine-tuned only the action side, on a few hundred real highway scenarios from construction zones and accidents.

The reasoning is that a truck and a car are looking at the same road. What a construction zone looks like doesn't change with the vehicle, but what to do about it does.

On scenarios that the model had not seen, this cut the error in the predicted path over 6.4 seconds by roughly 56% compared to the off-the-shelf model.

The more interesting result, to us, is the comparison with general truck data. With the same number of examples, training on the targeted scenarios gave 19-26% lower error than training on ordinary truck driving. The targeted model also stayed competitive with one that was trained on about 65 times as many general truck scenarios. In other words, which examples we picked mattered a lot more than how many we had.

## Steer

The action expert builds a trajectory in a series of small steps, starting from noise and refining it a little each time. The second part of the paper adds a small module that we call Flow Velocity Steering, which nudges each of those steps while the fine-tuned model stays frozen.

It's a correction that's added on top, with a single strength setting, and turning that setting to zero gives back exactly the model from the first stage. Since each nudged step is fed back into the model for the next one, a small correction early on carries through the rest of the trajectory. It's trained on the same logged examples, so it needs no extra data.

This reduced the error over the full 6.4 seconds by a further 13.9% on average, and by 16.5% at the end point of the path.

## What it doesn't show

Like everything, this has caveats. The results are _open-loop_, which means that we compare the path the model predicts against the path that an expert driver actually took in a recorded scenario. That's a different thing from letting the model drive, where a small mistake changes what the cameras see next. The paper also looks at two families of scenarios, on highways. It's a result about how to adapt a model efficiently, and it shouldn't be read as a claim about a finished driving system.

## Why we think it's worth reading

What we like about this result is that it lines up with things we already believed about software in general. A small change to a small part of the system is easier to reason about than retraining all of it. And a few hundred examples taken from the cases that actually go wrong are worth more than a mountain of examples from the cases that already work, which is the same argument as in [Evals Are Just Tests](/evals-are-just-tests/).

If you'd like the details, the [paper](https://arxiv.org/abs/2609.38570) and the [project site](https://truckvla.github.io) have all of them.
