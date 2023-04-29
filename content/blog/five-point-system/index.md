---
title: Five-Point System
date: "2019-01-26T22:12:03.284Z"
---

The "Five Point System" is a way to organize explicit work towards refactoring React code into best practices. While all _new_ work should already be up to snuff, sometimes you need to create tickets that tell developers how to get the existing code into a good place. This is a good place to start. Investment in best practices requires more initial investment, but the result will have less bugs and be more future-proof. Over time, this will result in higher and more consistent throughput, and higher developer satisfaction.

The Five-Point System is a set of steps that you can use to direct much of the work that goes into component creation.

1. Split down functions/components to very small atomic units that only do "one thing"
2. Split all non-presentation logic into container components
3. Build container logic using HOCs (Recompose is great here!)
4. Separate all logic out into functions that only do "one thing"
5. Where needed, connect containers to state
   - Connect at the lowest level possible -- a component should directly consume all of the props that it is passed as opposed to passing them down
   - Each connected value should be either a primitive or an array of primitives

#### Step 1: Split down components

Lots of small components is better than a few larger components.

Each component being one level of depth is ideal, because it makes a shallow snapshot an effective test.  
Not every component needs to be exported, but it makes testing easier; not every component needs its own file, but it makes separation of concerns easier.

#### Step 2: Container / Presentation Separation

See [Container/Presentation Separation](/container-presentation-separation).
If your component has any non-presentational logic, create a container to wrap the presentational component, regardless of if it connects to state.  
It’s best if you create a folder and separate file, but putting both in the same file is fine.

#### Step 3: Build Logic as Container HOCs

Use `compose` to create to wrap the container. Use as many layers as necessary -- Recompose layers add negligible overhead, and multiple layers allow for good separation of concerns.

```
const enhance = compose(
  branch(shouldDisplay),
  withHandlers(handlers),
  pure,
  ...,
);
```

#### Step 4: Split functions to do only one "thing"

How do we accomplish this?

EXTRACT ‘TIL YOU DROP  
Extract functions until you can’t anymore.

“The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.”

_How do you know your function does only one thing?_

- “If your function has more than one reason that it might need to change, it’s probably doing more than one thing.”
- “If a function does only the steps that are one level of abstraction below the stated name of the function, then the function is doing one thing.”
- “Another way to know that a function is doing more than one thing is if you can extract another function from it with a name that is not a restatement of its implementation.”
- If your function is hard to name, it’s probably doing more than one thing.

#### Step 5: Connect Containers to State

Connect to components at the lowest level possible, using whatever state management system you've got. In general, connected props should be used immediately in that component and not passed down. While base React works fine with prop-drilling, this is highly susceptible to bugs and ties you to your implementation. Usage of a system to pass data around is highly encouraged.

Connected props should typically be primitives (ie. not an object or array). There are occasional exceptions (particularly arrays of IDs), but they should be rare. The point of this is to avoid unnecessary rerenders due to unrelated data.

## Testing

Particularly when we’re writing new features, it’s important to write good tests and get good test coverage. As the author of a new feature, you’re in the best position anyone ever will be to keep that feature stable! Branch coverage on your new files should be at least 80%, and you should aim for 100% at all times (it's not as unrealistic as it sounds!).

If you write your tests before you refactor your work, you'll both work faster (counterintuitively) and have higher confidence in your work. See [Test-Driven Development](/test-driven-development) for more.
