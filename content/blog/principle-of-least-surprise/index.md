---
title: Principle of Least Surprise
date: '2019-01-26T22:12:03.284Z'
---

The Principle of Least Surprise is a concept that is used to frame your mindset as you code.

> If a necessary feature has a high astonishment factor, it may be necessary to redesign the feature.

This principle is typically used for designers, to guide how they craft functionality (in the sense that the user should be able to reasonably correctly guess the result of an action), but it's really useful for developers too.

The idea is that code should be _organized_ according to where the reader will expect it to be, and it should _operate_ as one would expect.

- Organization: your code is categorically and reasonably located. You expect names to effectively describe what they mean, and you expect hierarchal organization to group concepts together. A user reading shouldn't need to bounce back and forth between files because they are able to abstract concepts and move on. Likewise, a coder should have a reasonable expectation where the code she is looking for is located. If she can't just find it by simple search, she should at least be able to easily find it simply by following common sense. Even in a very large codebase, a user should be able to find what they're searching for in a matter of seconds, not minutes.
- Operation: your code has an API that makes intuitive sense and doesn't have any hidden pitfalls. Examples of surprising operations might include requiring a parameter that isn't always used (ie. `myFunc(arg1, null, arg2)`), surprising return values (ie. `getTime()` returning a boolean), or unusual defaults. The best example of surprising operation is JavaScript's `parseInt` function: until recently, it operated on base 8 rather than the expected base 10. This continued to cause so many errors to the point where JavaScript actually changed the default to 10 in ES5.
