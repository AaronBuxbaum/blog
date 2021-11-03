---
title: shouldComponentUpdate and Pure Components
date: '2019-01-26T22:12:03.284Z'
---

#### The Render Cycle

By default, React re-renders a component when it receives a render trigger. What happens during that process?

1. Something changes in the app.
2. The top-level component runs its `render` function.
3. As the top-level component hits lower-level components, those components' `render` functions are called.
4. This render process (Step 3) continues recursively until the end of the component tree.
5. The collected results (the new VDOM) are compared with the previous state of the application (the old VDOM).
6. If any changes exist, they are committed to the real browser DOM.

As you read this, you may notice that the recursive nature of Step 4 is quite heavy-duty – it means that even if we already know that a component didn't need to be updated, we still need to run through its render function. Stacking on top of this problem, render functions tend to be relatively expensive compared to most functions – even a simple component's `render` function is typically on the order of milliseconds as opposed to microseconds.

#### shouldComponentUpdate

To help with this problem, React has a lifecycle function called `shouldComponentUpdate`. This function is called before a component is asked to render, and if it returns `false`, it will just immediately return the existing VDOM for the component and its subcomponents. By default, `shouldComponentUpdate` simply returns `true`, but we can override it to do whatever we want.

The problem with `shouldComponentUpdate` is that it's difficult to keep maintained: every time a change is made in the component, the developer needs to make sure to adjust `shouldComponentUpdate` as well. Even worse, debugging problems where changes aren't happening due to a bad `shouldComponentUpdate` is difficult to track down.

To make a component utilize `shouldComponentUpdate`...

1. If it's a functional component, wrap it in `lifecycle` from the Recompose library.
2. If it's a class component, add the static function `shouldComponentUpdate` to the class.

#### Pure Components

Luckily, React has a solution for this! "Pure" components are the same as normal components, except they have a predefined `shouldComponentUpdate` attached to them. In a pure component, `shouldComponentUpdate` is a check that does a shallow check on each prop and state value for the component. In other words, it is implemented as:

```
shouldComponentUpdate(oldProps, newProps, oldState, newState) {
  return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
}
```

Most components (especially functional components) have this property – you only care to update if a prop has changed.

Note that not every component should be pure – if the component is very likely to re-render when it receives a render trigger, then it may actually be less performant! For that reason, the best strategy is to try to "protect" lower level components from rendering by wrapping `pure` at points of change.

#### How to make a component pure

1. If it's a functional component, wrap it in `pure` from the Recompose library.
   `export default pure(MyComponent);`
2. If it's a class component, extend `PureComponent` instead of `Component`.  
   `class MyComponent extends React.PureComponent { ... }`

> Note that Redux's `connect` wrapper automatically applies `pure`, so there's no need to add it in those cases.

> When writing a pure component, make sure that its uses don't use literals – these break shallow equality. See [How Object Literals Hurt Performance](/how-object-literals-hurt-performance) for more information.
