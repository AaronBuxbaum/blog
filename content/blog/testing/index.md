---
title: Testing
date: '2019-01-26T22:12:03.284Z'
---

### Why bother with testing?
Testing is important for many reasons:

1. It catches bugs early on.
2. It describes the intent of the code (in other words, it tells a reader what the code is meant to accomplish).
3. It self-documents the requirements of the system.
4. It gives us confidence that the system actually works correctly.
5. It tells us if a system breaks when we make changes elsewhere.
6. It helps us design a good solution (in other words, a highly effective solution is generally highly testable, and vice versa).
7. It lets us know if we made any mistakes while we refactor systems.
8. It prevents a problem from happening again.
9. It encourages separation of concerns.
10. It forces the design of changes to be deliberate and methodical.
11. It increases app stability.
12. It increases development speed both short- and long-term.
...etc...


For a simple thought experiment, imagine that we have perfect tests that complete instantly. Making changes in this environment is trivially easy:

1. Make a very small change.
2. Run the tests.
3. If the tests fail, undo the previous change.
4. Repeat.


The more we test, the closer we move towards this kind of workflow. As we move there, the ability to make changes quickly and be confident in those changes improve. Even better, since tests depend upon each other for coverage, the benefits of testing stack exponentially as we write them.


See [Test-Driven Development](/test-driven-development) for the methodology behind good testing.


> Every time you fix a bug, write a test that failed before and now succeeds. By doing this, you prevent bugs from reoccurring.


### Test specificity

> "As the tests get more specific, the code gets more generic."

Make your assertions as specific as possible in order to test optimally. For example `expect(...).toBeFalsy()` is not very specific – it could pass if the value is 0, false, null, and so on. Much better might be `expect(...).toEqual(false)`. Likewise, be specific in what you assert on as opposed to generic. Counterintuitively, specific tests will make your code cleaner!







### What is important when I test?
There's a few metrics to keep in mind while you test:

* Coverage: how many code paths (branches) or lines of code are run by a test of some kind?
* Completeness: how well does your test actually test the function?
* Brittleness: when unrelated change occurs in the codebase, does the test still succeed?
* Performance: how fast do my tests complete?
* Readability: how well-described is the intent of the feature being tested?
* Isolation: do your tests affect other tests?


We will dig into each of these metrics in brief.

#### Coverage
Coverage is a measure of _how much_ of the codebase is run by tests. This is measured by a few different methods: by function basis, by line basis, or by branch (each individual code path that could happen). We primarily care about branch coverage. Here's an example of a function that we want to test:

```
const myFunction = (input) => {
  if (input <= 0) {
    return -1;
  }

  if (input > 0) {
    if (input % 2) {
      input = 9999999;
    }
    return input;
  }
}
```

This example has 3 branches, 10 lines, and 1 function. If we write a test like `expect(myFunction(5)).toEqual(7)`, that will hit 1 branch, 9 lines, and 1 function. It looks like we've covered most of the file, but we're actually missing some important functionality! This illustrates the importance of covering all of the branches, and why lines don't tell the full story.

Coverage is important because it tells us if that section of the code is run by tests. You should expect 100% code coverage for new files, and have a goal of 100% coverage over time. It's important that even if you achieve high coverage that the tests still have high completeness – for example, a test that renders a component and asserts that it exists might have 100% coverage, but very low completeness. In fact, high coverage with low completeness is actually worse than not having tests, because we won't know where to look to add tests. When a branch is covered by a test, it _must_ have good tests for branch.



#### Completeness
Imagine a really simple function that returns an input number plus 1. If we wanted to make sure every possible input number was handled, we could iterate over every number and test each, right? The problem is that while that would get us "full completeness", it would take 2^64 tests to do – if we assume each test takes 1 millisecond, that's 584,540,649 years to finish completion! While this is obviously an extreme example, the point is that while we want to _know_ that a function is fully tested, it's realistically impossible to _prove it_. Therefore, we want to just do our best to cover all of the different situations that the function might find itself in. Make sure to test incorrect inputs, strange values like negative numbers, zero, and inputs that assure that all of the different code paths are hit. For example, if the code has a catch block, make sure to give the code a value that will trigger that block. The idea here is to evaluate your level of confidence that the function will handle any value it might receive. This metric is really important in combination with coverage – for example, a test that renders a component and asserts that it exists might have 100% coverage, but very low completeness. Tests are pointless if one or the other is not good!
![Testing isn't everything](https://img.devrant.com/devrant/rant/r_34058_wmoPD.jpg)



#### Brittleness
Because code changes often, we want our tests to adapt to change easily. When an unrelated change occurs, we want to know that our code won't fail. Remember that the person who changes the code you write probably won't be you. That means that we need our tests to only fail when relevant so that they are maintainable long-term. For example, if your tests fail easily while refactoring is occuring, it will be difficult for a developer to refactor easily. Ideally, as long as the system works, the tests should also work. In other words, test the method as a black box, don't test the implementation of the method.



#### Performance
Tests need to fit into the TDD lifecycle – in other words, they need to be _very fast_! The entire test suite shouldn't take more than a minute, and individual tests shouldn't take longer than 10 milliseconds. The shorter the feedback cycle for running tests, the better. Some cases require more intensive testing – those can be pushed into integration testing suites that are run regularly, but less continuously. For developers to be interested and involved with the tests, they need to be fast and fit into their workflow. Use `beforeAll` whenever possible as opposed to `beforeEach`; use only what you need for the tests; use `shallow` instead of `mount`; be cognizant about the performance impacts of your tests. You don't need to test every possible case, you just need to describe what the feature should do and make sure it handles all of its evaluation branches accordingly.



#### Readability
The readability of your tests is very important! Since tests describe business concepts, values, and expected behavior, they represent the intent of the system. Always make sure that the intent of your system is explained well in plain English and that it is easy to read and understand. Think about the test from the perspective of a reader – either something is broken and they need to know what it is and what it's meant to do, or they are trying to understand the existing system. Either way, the tests should tell them everything they need to know about the code that it's testing. For example, tests like `it('returns XVI', () =>  ...)` are not very useful; they don't tell the reader about _the point_ of this functionality. Perhaps a better naming would be `it('returns XVI when the input is 16', () => ...)`.

In addition to describing the intent of the feature in a readable manner, it's also important that the test code itself is readable! Other people will have to change and update this test, so make sure it's easy to understand! The worst thing you can do is write a confusing test, because then it's possible that in the future, another developer will mistakenly assert on something that isn't actually true. Tests that assert on the wrong behavior are worse than no tests at all!



#### Isolation
Tests should not have any effect on other tests. Tests should be able to be run in any order and in parallel. Therefore, make sure that any effects your test may have is cleaned up at the end of the test. For example, if you set a mock value for a package, you may have to reset the mock in order to prevent it from being applied to unrelated tests. Tests also should not yield any console output, network requests, memory leaks, or any other side-effect.







### What should I test?
_Everything_ in the codebase should be tested – every component, every utility function, every selector, and so on. We're aiming at 100% coverage.

External libraries should not be tested.





### Testing External Dependencies: Mockism vs Statism
There are two schools of thoughts in testing external dependencies: mockism and statism. Neither approach is necessarily correct – depending on your problem, you're likely going to need somewhere in between.

Imagine that you are writing a function that at some point calls another function. Should the tests test this second function? What about if that function calls another function – should your tests cover this third function?

The _mockist_ school of thought says that you should not test the imported function, and instead mock a return value. In your tests for your function, you will merely assert that the function was called with the right parameters, and in the tests for that function, you will again only assert on functionality within the function itself.

The _statist_ school of thought says that you want to have tests that cover the branches of the dependent functions. In the tests for your function, you will need the right combination of arguments to hit all of the functionality below that may be relevant to the top level. In other words, instead of writing specific tests for each file and checking that they call each other, you will write a test for the higher-level concept and make sure that it explores all of the different functionality encapsulated by the function.

In general, the mockist approach tends to be easier to develop, but more brittle. As you refactor, the statist approach tends to be more beneficial, as it is not directly connected to the way the code is organized and instead tests on the concept: what the consumer actually cares about. However, due to the difficulty of fully testing all of the branches below a concept, mockism tends to have more thorough test coverage.

Both approaches have advantages, and realistically you're going to want a place somewhere in between. Either way, make sure that every exported file is individually tested, since you cannot make assumptions about where it will be used.







### When should I test?
Ideally, before you write your code. See [Test-Driven Development](/test-driven-development).

Let's be realistic -- in this industry, you’ll always be in some kind of “crunch time”. Because we know there will never really be downtime to make up for past mistakes, it makes sense to "slow down" the process overall slightly in order to go faster long-term as test coverage increases. Testing will only stay important if you adhere to your testing principles in every work environment.

Even though adding tests may seem like a waste at times (ie. it's trivial, it obviously works, it's a very small bit, it's hard to test, etc), it actually benefits you in both the short and long term.

* In the short term, it will increase your code quality short-term -- you'll want to maintain separation of concern and modularity in order to simplify testing. If your code is great from the beginning, there won't be a back-and-forth in code review, which means less wasted time by the team as a whole!
* In the long term, it will allow you to catch breakage early and improve your code acceptance rates. Eventually, you'll have saved more time than the time originally dedicated to writing the tests.






### Some takeaways
* Break down your functions -- seriously. It will make testing _much_ easier.
* If testing is a pain, likely you haven’t broken down your functions far enough.
* Tests should inherently document what your function does.
* Regard the annoyance of passing through a bunch of props as a code smell, especially if you’re not directly consuming those props. This indicates that you’re either not broken down enough, or that you need to connect at a lower level.
* Use the right assertion for the job. The more precise, the better.
* If you’re unsure of what to do at any point, pair with a teammate.
* Testing applies to all functions in your codebase, including components, but not libraries that you plug into. Those should be tested separately.
* It’s up to all of us to make testing a **priority**. Talking doesn’t get the work done. _(unfortunately)_