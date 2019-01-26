---
title: Test-Driven Development
date: '2019-01-26T22:12:03.284Z'
---

Test-Driven Development (TDD) is a technique that helps developers write better and more high-quality code. Some experts even argue that the only way to write good code is through Test-Driven Development.


### How?
TDD operates on the "red-green-yellow" cycle:

* <span style="color: red">**RED**</span>: Write a test that fails. Once the tests fail, stop.
* <span style="color: green">**GREEN**</span>: Fix the code so that the test succeeds. Once the tests pass, stop.
* **YELLOW**: Refactor the code and the test. As you refactor, make sure that the tests still pass.


### Why?
- By declaring the results of the code before you write the code, you know if the code actually works. If the tests are written after, they can accidentally assert that incorrect behavior works.
- Good code is also highly testable code. If you write the tests first, your code will be designed to be testable, and therefore, often more high quality at the same time.
- It places greater emphasis on testing. Despite the fact that better testing means a component that is more unlikely to break, it's often deprioritized, and thus bugs creep into the code.
- It helps guide your programming practices – though it seems counterintuitive, writing code in TDD is much easier and much less frustrating than without.


Besides for the benefits above, perhaps the most cogent argument to me personally is that...

* In order to move fast, we need to have high code coverage and high quality tests. In other words, we need to know when something breaks without manually trying the feature. We want to be able to code completely from the IDE, and never have to go check if it works. Manually checking is much slower than automatic tests!
* In order to trust our tests, they need to be indicative of the feature (and not just confirming that the code as it is works).
* In order to write tests that describe the system and not the code itself, you have to write them before writing the code.