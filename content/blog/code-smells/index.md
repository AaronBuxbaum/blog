---
title: Code Smells
date: '2015-05-01T22:12:03.284Z'
---

_Code smells_ are patterns indicate a potential problem with a section of code. While the code typically does actually _work_, it represents a strong indicator towards an un unrelated problem. Therefore, code smells should be investigated, fixed, and avoided.

> The following is reference of code smells from Martin Fowler's _Refactoring_ and Robert Martin's _Clean Code_.

### Comments

1. Inappropriate Information: Reserve comments for technical notes referring to code and design.
2. Obsolete Comment: Update or delete obsolete comments.
3. Redundant Comment: A redundant comment describes something able to sufficiently describe itself.
4. Poorly Written Comment: Comments should be brief, concise, correctly spelled.
5. Commented-Out Code: Ghost code. Delete it.

### Environment

1. Build Requires More Than One Step: Builds should require one command to check out and one command to run.
2. Tests Require More Than One Step: Tests should be run with one button click through an IDE, or else with one command.

### Functions

1. Too Many Arguments: Functions should have no arguments, then one, then two, then three. No more than three.
2. Output Arguments: Arguments are inputs, not outputs. If somethings state must be changed, let it be the state of the called object.
3. Flag Arguments: Eliminate boolean arguments.
4. Dead Function: Discard uncalled methods. This is dead code.

### General

1. Multiple Languages in One Source File: Minimize the number of languages in a source file. Ideally, only one.
2. Obvious Behavior is Unimplemented: The result of a function or class should not be a surprise.
3. Incorrect Behavior at the Boundaries: Write tests for every boundary condition.
4. Overridden Safeties: Overriding safeties and exerting manual control leads to code melt down.
5. Duplication: Practice abstraction on duplicate code. Replace repetitive functions with polymorphism.
6. Code at Wrong Level of Abstraction: Make sure abstracted code is separated into different containers.
7. Base Classes Depending on Their Derivatives: Practice modularity.
8. Too Much Information: Do a lot with a little. Limit the amount of *things* going on in a class or functions.
9. Dead Code: Delete unexecuted code.
10. Vertical Separation: Define variables and functions close to where they are called.
11. Inconsistency: Choose a convention, and follow it. Remember no surprises.
12. Clutter: Dead code.
13. Artificial Coupling: Favor code that is clear, rather than convenient. Do not group code that favors mental mapping over clearness.
14. Feature Envy: Methods of one class should not be interested with the methods of another class.
15. Selector Arguments: Do not flaunt false arguments at the end of functions.
16. Obscured Intent: Code should not be magic or obscure.
17. Misplaced Responsibility: Use clear function name as waypoints for where to place your code.
18. Inappropriate Static: Make your functions nonstatic.
19. Use Explanatory Variables: Make explanatory variables, and lots of them.
20. Function Names Should Say What They Do: ...
21. Understand the Algorithm: Understand how a function works. Passing tests is not enough. Refactoring a function can lead to a better understanding of it.
22. Make Logical Dependencies Physical: Understand what your code is doing.
23. Prefer Polymorphism to If/Else or Switch/Case: Avoid the brute force of switch/case.
24. Follow Standard Conventions: It doesn't matter what your teams convention is. Just that you have on and everyone follows it.
25. Replace Magic Numbers with Named Constants: Stop spelling out numbers.
26. Be Precise: Don't be lazy. Think of possible results, then cover and test them.
27. Structure Over Convention: Design decisions should have a structure rather than a dogma.
28. Encapsulate Conditionals: Make your conditionals more precise.
29. Avoid Negative Conditionals: Negative conditionals take more brain power to understand than a positive.
30. Hidden Temporal Couplings: Use arguments that make temporal coupling explicit.
31. Don’t Be Arbitrary: Your code's structure should communicate the reason for its structure.
32. Encapsulate Boundary Conditions: Avoid leaking +1's and -1's into your code.
33. Functions Should Descend Only One Level of Abstraction: The toughest heuristic to follow. One level of abstraction below the function's described operation can help clarify your code.
34. Keep Configurable Data at High Levels: High level constants are easy to change.
35. Avoid Transitive Navigation: Write shy code. Modules should only know about their neighbors, not their neighbor's neighbors.

### Names

1. Choose Descriptive Names: Choose names that are descriptive and relevant.
2. Choose Names at the Appropriate Level of Abstraction: Think of names that are still clear to the user when used in different programs.
3. Use Standard Nomenclature Where Possible: Use names that express their task.
4. Unambiguous Names: Favor clearness over curtness. A long, expressive name is better than a short, dull one.
5. Use Long Names for Long Scopes: A name's length should relate to its scope.
6. Avoid Encodings: No not encode names with type or scope information.
7. Names Should Describe Side-Effects: Consider the side-effects of your function, and include that in its name.

### Tests

1. Insufficient Tests Test: everything that can possibly break
2. Use a Coverage Tool: Use your IDE as a coverage tool.
3. Don’t Skip Trivial Tests: ...
4. An Ignored Test is a Question about an Ambiguity: If your test is ignored, the code is brought into question.
5. Test Boundary Conditions: The middle is usually covered. Remember the boundaries.
6. Exhaustively Test Near Bugs: Bugs are rarely alone. When you find one, look nearby for another.
7. Patterns of Failure Are Revealing: Test cases ordered well will reveal patterns of failure.
8. Test Coverage Patterns Can Be Revealing: Similarly, look at the code that is or is not passed in a failure.
9. Tests Should Be Fast: Slow tests won't get run.