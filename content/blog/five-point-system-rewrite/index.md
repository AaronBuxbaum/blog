---
title: Five-Point System
date: '2015-05-01T22:12:03.284Z'
---

We want to raise our level of code quality to the next level! This means that work will generally take longer, but should have less bugs and be more future-proof. Over time, this will result in higher throughput.

The Five-Point System is a set of steps that you can use to direct much of the work that goes into component creation.

1. Split down functions/components to very small atomic units that only do one thing
2. Split all non-presentation logic into container components
3. Build container logic using HOCs (Recompose is great here!)
4. Separate all logic out into functions that only do one thing
5. Where needed, connect containers to state
    1. Connect at the lowest level possible -- a component should directly consume all of the props that it is passed as opposed to passing them down
    2. Use the new state systems (core-state and ui-state)
    3. Each connected value should be either a primitive or an array of primitives

In addition, the strict lint (`yarn lint:strict`) tries to nudge you towards best practices. It is not applied on the build, but it is the default IDE configuration. You can override it if you want, but it should help you write better code. Lint is a very coarse method of applying techniques -- they should be considered general guidelines as opposed to “the point”. The lint rules themselves are up for discussion as we discover any areas where it may be too restrictive, or not restrictive enough. The lint combines well with the Five Point System.

Step 1: Split down components

Lots of small components is better than a few larger components.

Each component being one level of depth is ideal, because it makes a shallow snapshot an effective test.  
Not every component needs to be exported, but it makes testing easier; not every component needs its own file, but it makes separation of concerns easier.

Step 2: Container / Presentational Separation

If your component has any non-presentational logic, create a container to wrap the presentational component, regardless of if it connects to state.  
It’s best if you create a folder and separate file, but putting both in the same file is fine.

Step 3: Build Logic as Container HOCs

Use compose to create to wrap the container. Use as many layers as necessary -- Recompose layers add negligible overhead, and multiple layers allow for good separation of concerns.

  

const enhance = compose(  

branch(shouldDisplay),  

withHandlers(handlers),  

pure,  

...,  

);

Step 4: Split functions to do only one "thing"

How do we accomplish this?

EXTRACT ‘TIL YOU DROP  
Extract functions until you can’t anymore.

“The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.”

_How do you know your function does only one thing?_

- “If your function has more than one reason that it might need to change, it’s probably doing more than one thing.”
- “If a function does only the steps that are one level of abstraction below the stated name of the function, then the function is doing one thing.”
- “Another way to know that a function is doing more than one thing is if you can extract another function from it with a name that is not a restatement of its implementation.”
- If your function is hard to name, it’s probably doing more than one thing.

Step 5: Connect Containers to State

Connect to components at the lowest level possible, using the core-state package. In general, connected props should be used immediately in that component and not passed down.

Connected props should typically be primitives (ie. not an object or array). There are occasional exceptions (particularly arrays of IDs), but they should be rare.

#### Testing

Particularly when we’re writing new features, it’s important to write good tests and get good test coverage. As the author of a new feature, you’re in the best position anyone ever will be to keep that feature stable! Branch coverage on your new files should be at least 80%.

To do this, use Enzyme testing for components, and unit tests to cover functions and sagas.

First, create a shallowly rendered component...  

const foo = shallow(&lt;Foo abc=”abc” /&gt;);

You can assert on that component…  

expect(foo.props().abc).toBe(‘abc’);

You can use dive() to dig into the DOM…  

expect(foo.dive().find(Bar)).toHaveLength(1);

You can snapshot the component...  

expect(foo).toMatchSnapshot();

Bookmark the documentation and keep it open as you write tests: [airbnb.io/enzyme](https://airbnb.io/enzyme)