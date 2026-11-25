---
title: Evals Are Just Tests
date: "2026-11-25T02:12:03.284Z"
---

If you've spent any time building features on top of a language model, you've probably heard that you need _evals_. The word makes it sound like a new discipline with its own tools and its own experts, and that tends to scare teams into putting it off. I think that's a shame, because an eval is something we already know how to write. It's a list of inputs, a run of the feature against each one, and a check on what comes out. In other words, it's a test.

I wrote about [Testing](/testing/) and [Test-Driven Development](/test-driven-development/) a long time ago, and almost all of it carries over. Let's go through what stays the same, and then the few places where a model makes things different.

## What stays the same

In the testing post, I used a thought experiment: imagine that we have perfect tests that complete instantly. Making a change is then trivially easy -- make a small change, run the tests, and undo the change if they fail. That is exactly the workflow we want when we're editing a prompt. Without it, prompt work turns into trying three inputs by hand, deciding that it looks better, and shipping it. That's the same as checking a feature by clicking around in the browser, and it has the same problem: we only find out what we broke when a user tells us.

The TDD argument holds up too. If we write the cases after the prompt, we tend to write cases that the prompt already passes, and we end up asserting that the current behavior is the correct behavior. If we write down the inputs and the expected outputs first, we've described what the feature is supposed to do, and the prompt is just the code that makes the tests go green.

This one from the original post might be even more useful now than it was then:

> Every time you fix a bug, write a test that failed before and now succeeds. By doing this, you prevent bugs from reoccurring.

When a user sends us an output that was wrong, the input goes into the eval set before we touch the prompt. Over time, that file becomes the most valuable thing in the feature. Prompts get rewritten and models get swapped out, but the list of "here's what real people sent us, and here's what should have happened" keeps working through all of it.

## What changes

The first difference is that the same input doesn't always give the same output. A normal test passes or fails, but an eval case might pass nine times out of ten. So, we run each case several times and look at the rate. Here's about the smallest version of that, for a feature that pulls a due date out of a document:

```
const cases = [
  { input: "Invoice #204, due March 3rd, 2027", expected: "2027-03-03" },
  { input: "Thanks again for your business!", expected: null },
];

const RUNS = 10;

for (const { input, expected } of cases) {
  let passed = 0;

  for (let i = 0; i < RUNS; i++) {
    const { dueDate } = await extractFields(input);
    if (dueDate === expected) passed++;
  }

  console.log(`${passed}/${RUNS}`, input);
}
```

That's the whole idea, and you don't need a framework to get started. What counts as passing is up to you. For something like a due date, I'd want ten out of ten, and a nine is a bug. For something softer, like the tone of a summary, a lower bar might be fine, as long as we know what it is and notice when it drops.

The second difference is that checking the output can be hard. A date either matches or it doesn't, but there's no `===` for "is this a good summary?" I try to turn as much as possible into checks that plain code can do: is it under 100 words, does it mention the customer's name, is it valid JSON, does it avoid promising a refund. This is one more reason to have the model [fill in a shape](/least-surprise-in-ai-tools/) instead of writing a paragraph, since a shape is far easier to test. For what's left over, you can ask a second model to grade the output against a short rubric. That works reasonably well, but the grader is a model too, so I read a sample of its grades by hand every so often to make sure I still agree with it.

The third difference is that evals are slow and they cost money. Unit tests run in milliseconds for free, and a few hundred model calls don't. I keep a small set that runs on every prompt change, and a bigger one that runs before a release or a model upgrade. If that sounds familiar, it's the same split as unit tests and end-to-end tests.

## Watch out for overfitting

There's one more quote from the testing post that applies here:

> "As the tests get more specific, the code gets more generic."

With a prompt, it's easy to go the other way. If we only have five cases, we can keep adding special instructions until all five pass, and we end up with a prompt that's great at those five inputs and not much else. The fix is the same as it is with code, which is more cases and more varied ones -- especially the messy inputs that come from real usage, and not only the clean ones we thought of at our desks.

## Where to start

If you have an AI feature in production with no evals, I suggest starting small. Pull twenty real inputs from your logs, write down what the right answer is for each one, and put them in a file next to the prompt. Run them every time the prompt or the model changes. It takes an afternoon, and it's a lot better than nothing.

For what it's worth, when I see a team struggling with an AI feature, a better model or a cleverer prompt is rarely what they need. Usually, they need the tests, which is the same answer I would have given in 2019.
