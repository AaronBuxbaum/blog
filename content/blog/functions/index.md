---
title: Functions
date: '2019-01-26T22:12:03.284Z'
---

#### What does a good function look like?

Most of us know when we see a really bad function, but noting a great, delightful function is much rarer. We want small, understandable functions, and the less a function does, the better. It turns out, however, the doing "one thing" is much harder than it seems on the surface.

When a function only does one thing, it’ll typically be somewhere between **1 and 4 statements** (yes, a 1-statement function is often invaluable). Some complex functions will be as long as 6 or 7 statements, but almost never more.

> “The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.”

> “Functions should do one thing.  
They should do it well.   
They should do it only.”

As a gut check, the Five Second Rule is great for figuring out if you're writing a clean function:

> Every function should be able to be understood in 5 seconds or less by a party who is not familiar with the codebase.
If you can't, it should be broken down.

There are several advantages to small, effective functions:

- Naming is easier and better
- Testing is easier and better
- Mental abstraction is much easier
- Easier to hold logic in memory
- You can “skim read” code
- Functions are easily reused
- Bugs are more easily found
- ...etc...

### How do I write good functions?

#### Extract 'Til You Drop
Extract functions until you can’t anymore.

Be pedantic! Break down your functions so that they actually do one thing, and be radical about it. It’s surprisingly hard to break functions down too far.

### How do I know if a function only does one thing?

> "If your function has more than one reason that it might need to change, it’s probably doing more than one thing."
(Single Responsibility Principle)

> “If a function does only the steps that are one level of abstraction below the stated name of the function, then the function is doing one thing.”

> “Another way to know that a function is doing more than one thing is if you can extract another function from it with a name that is not a restatement of its implementation.”

> "If your function is hard to name, it’s probably doing more than one thing." 

### How many arguments should a function take?

0 is best; then 1; then 2.
There should be very few cases where you need 3, and no cases where you need more than 3.

Passing an object is not cheating, as long as the object attributes are intentionally tightly coupled. In other words, to pass values by object, you have to know that they cohesively belong together and will not need to be split apart or used in a different context.

### Testing

You should not write tests for every function. Tests should only be written for naturally exported functions, but they should be written to cover all private branches.  

> “Test the method, not the implementation.”  

> See [Testing](/testing) and [Test-Driven Development](/test-driven-development) for more information.

### Assorted Points
- Avoid boolean arguments! You actually want two separate functions.
- Object arguments are fine, as long as the attributes of that object are intentionally tightly coupled.
- Error handling itself does count as “one thing”.
- A null return is not an error! (when a problem occurs, a new `Error` is usually better)
- Use the “tell, don’t ask” principle -- where possible, functions should be structured to perform an action themselves as opposed to being queried for information.