---
title: Strict Linting
date: '2019-01-26T22:12:03.284Z'
---

_Linting_ is a set of metrics that are statically analyzed against the code. This static analysis can inform the user about known bad code patterns, performance inefficiencies, poor naming practices, and so on.

I recommend having two lint files -- _build_ and _strict_. The reason for two is that there's almost always a difference between your currently accomplished code standards and your prospective, desired code standards. In my experience, the best way to push your team towards a desired style is with the split lint files.

* The build lint represents the accomplished code standards. It is run against all of the files in the codebase, and you expect that anything that makes it into the codebase passes this lint with 0 errors and 0 warnings.
* The strict lint represents the future of your code standards. When it is run in the build is up for debate (discussed below), but it is the default IDE lint, and there is a separate command to run the strict lint on changed files. Because of this fact, we must also make sure that the strict lint is always in compliance with the build lint (in other words, the strict lint must be a superset of the build lint).


### Why bother with a strict lint?
A strict lint goes a step farther than your usual lint and helps push developers into the right patterns in real-time as they code. Over time, this has proven effective – though often annoying at the time, the end result of my strict lint-compliant code has consistently been better than code that is only build lint-compliant code. That lets you create lint rules which are more arbitrary, but represent accepted standards of quality. For example, my lint file restricts functions to 7 statements, among many other things.


### What will be the long-term plan for strict linting?
As your engineers develop according to the strict lint, eventually you'll have compliance for some strict-lint rules throughout the codebase. At that point, you can move that rule into your build lint. Over time, that means that standards are improving, build rules are keeping those standards in check, and you now have more room to move in your strict lint.

That means that your build lint mostly represents "previously completed strict lint rules", and each time a rule is completed, you can push the boundaries again. It's conceivable that you'll eventually reach a point where your entire codebase is under strict lint, and you don't want to change the strict lint anymore. In that case, you should fold back into a single lint file. However, that's really hard, especially if you follow rules as difficult as the ones I personally use (those will be given below).

_What if a develop disagrees with a rule in the strict lint?_
Team discussions about strict lint rules are encouraged. While many of the rules are arbitrary by nature, the team should have the power to adapt them to fit the overall vision of the future. If you disagree with a strict lint rule, try using it for some time to give it a fair shake; if you still don't like it, create a discussion in Slack or in design review so the team can weigh in and make a decision!

An important part of this process is the trying part. For example, I have always seen resistance to my seven-statement limit rule, but after trying it, I've always been told that it changed the way they write code. Pairing with your programmers to help make sense of the rules in context may help here, as well.



## My lint
Though many of the rules are inherently arbitrary, they tend to reflect leading research and books on the subject, primarily "Clean Code" by Robert Martin and "Refactoring" by Martin Fowler.

Feel free to take these and adapt them however you want. Note that a lot of the best rules come implicitly from extension of Airbnb's excellent eslint config.

```
// extends
'eslint-config-airbnb',

// babel
'babel/no-invalid-this': 'error',
'no-invalid-this': 'off',

// best practices
'no-eq-null': 'error',
'no-implicit-coercion': ['error', {
    boolean: false,
    number: true,
    string: true,
}],
'no-magic-numbers': 'error',

// complexity
complexity: ['error', {
    max: 4,
}],
'max-depth': ['error', {
    max: 1,
}],
'max-len': ['error', {
    code: 120,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreUrls: true,
}],
'max-lines': ['error', {
    max: 150,
    skipBlankLines: true,
    skipComments: true,
}],
'max-lines-per-function': ['error', {
    max: 40,
    skipBlankLines: true,
}],
'max-nested-callbacks': ['error', {
    max: 2,
}],
'max-params': 'error',
'max-statements': ['error', {
    max: 7,
}],
'max-statements-per-line': 'error',

// imports
'import/default': 'error',
'import/exports-last': 'error',
'import/group-exports': 'error',
'import/imports-first': 'error',
'import/max-dependencies': ['error', { max: 10 }],
'import/no-anonymous-default-export': 'error',
'import/no-deprecated': 'error',
'import/no-extraneous-dependencies': 'error',
'import/no-namespace': 'error',

// react-perf
'react-perf/jsx-no-jsx-as-prop': 'error',
'react-perf/jsx-no-new-array-as-prop': 'error',
'react-perf/jsx-no-new-function-as-prop': 'error',
'react-perf/jsx-no-new-object-as-prop': 'error',

// react
'react/boolean-prop-naming': 'error',
'react/jsx-filename-extension': 'error',
'react/jsx-handler-names': 'error',
'react/jsx-indent': 'error',
'react/jsx-indent-props': 'error',
'react/jsx-key': 'error',
'react/jsx-max-depth': ['error', {
    max: 2,
}],
'react/jsx-no-bind': ['error', {
    allowArrowFunctions: false,
}],
'react/jsx-no-literals': 'error',
'react/jsx-sort-default-props': 'error',
'react/jsx-sort-props': 'error',
'react/no-unsafe': 'error',
'react/prop-types': 'error',
'react/sort-prop-types': 'error',

// style
'arrow-parens': ['error', 'always'],
curly: ['error', 'multi-or-nest', 'consistent'],
indent: 'error',
'multiline-ternary': 'error',
'newline-after-var': 'error',
'no-inline-comments': 'error',
'no-multiple-empty-lines': ['error', {
    max: 1,
}],
'no-negated-condition': 'error',
'no-tabs': 'error',
'nonblock-statement-body-position': ['error', 'below'],
'prefer-object-spread': 'error',

// variables
'no-catch-shadow': 'error',
'no-undefined': 'error',
'sort-imports': 'off',
'sort-keys': ['error', 'asc', {
    caseSensitive: false,
    natural: true,
}],
'sort-vars': 'error',
```