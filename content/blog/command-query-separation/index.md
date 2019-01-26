---
title: Command-Query Separation
date: '2019-01-26T22:12:03.284Z'
---

Command-Query Separation is a guideline to help you write clean, reusable code. It helps you mentally separate responsibility in functions.

It states that all functions should fall into one of two categories (but not both):

1. **Command**: changes the state of the system but does not return a value
2. **Query**: returns a value, but does not change the state of the system

&nbsp;

> "Asking a question should not change the answer."

In other words, a function that does something to the state of the application should not have a return value.

Creating a function which _calls_ a command and a query is not a violation of this concept, though it should not have a return value (since anything that wraps a command is also a command).

&nbsp;

There are a few main reasons why this separation is valuable:

- It simplifies code, making it easier to understand, read, and maintain.
- Queries have the property of being able to be organized in any order, making them easier to refactor and maintain.
- It enforces a design by contract – in other words, because the separation is made, either function can make changes without breaking consumers.
- It makes testing easier because we know that the state won't change when we run a query, and we know how the state will change when we run a command.

Sometimes there's a grey area where convenience can be drawn from combining the two (for example, array's `pop` functionality). However, even in that case, explicitly drawing the difference between the command and the query is easy, yields readability benefits, and prevents easy-to-make mistakes from happening (in-place algorithms such as `pop` are notorious for causing bugs). Therefore, sticking to the command-query separation is recommended where possible – use it as a guideline, not a rule.