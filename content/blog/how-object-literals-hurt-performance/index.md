---
title: How Object Literals Hurt Performance
date: '2019-01-26T22:12:03.284Z'
---

If you use an object literal within a component, it will cause unnecessary re-renders (in other words, slow performance).

There are 3 types of object literals (note that functions and arrays _are_ objects):

- `() => { stuff here }` – function literal
- `{{ stuff here }}` – object literal
- `{[ stuff here ]}` – array literal

#### Why are object literals a problem?

Let's talk a bit about how React works.

React has an in-memory DOM equivalent called VDOM (Virtual DOM). It uses this to make smart decisions about when DOM manipulations are needed – when things happen in React, it compares the previous VDOM to the new VDOM, and then only commits actual DOM changes on a per-need basis.

Many components take advantage of `PureComponent` – this is explained in more depth [here](/shouldComponentUpdate-and-pure-components), but in short, it's a version of a component that checks if its props or state are different, and if not, it tells React that the component is still the same. While not every component can make this assumption, most can. The check if props are different is done by referentially checking each prop and state variable in the old VDOM and the proposed new VDOM. In other words, it runs `oldProp === newProp` for all props (and state), and if any of them return `false`, it continues evaluating the component.

Because a component is just a function, every time you use a literal, it is inherently a completely new reference (a brand-new object in memory). Therefore, referential equality fails, and React thinks that the component has changed. Because of this, if you pass a literal into a `PureComponent`, it automatically doesn't work. By using the techniques above, we can use the same reference, and save our `PureComponent` performance benefits.

In code -- if we have the following pure component:

```
const MyComponent = pure(({ info }) => (
    <div>{info.count}</div>
));
```

...then if we use it like this...

```
<MyComponent info={{ count: 10 }} />
```

...then it will always re-render, even though we already know that nothing changed :(
The effect of that re-render could be really huge, depending on how much occurs in and within that component. We ideally want to "cut off" unnecessary work at as high-up of a level as possible.

#### What to do

1. _Hoisting_: when a literal doesn't need access to variables in the component's scope, we can hoist the literal itself outside of the component.

`const Component = () => (<div styles={{ marginTop: '15px' }} /> );`

...becomes...

```
const styles = { marginTop: '15px' };
const Component = () => (
  <div styles={styles} />
);
```

2. _With Handlers_: if your literal is a function, you can create the function reference earlier and use it instead. This should ideally be done within a container component.

```
const Component = ({ product, buyProduct }) => (
  <div onClick={() => buyProduct(product)}>Click here</div>
);
```

...becomes...

```
const ContainerComponent = withHandlers({
  onClick: ({ buyProduct, product }) => () => buyProduct(product),
})(PresentationalComponent);

const PresentationalComponent = ({ onClick }) => (
  <div onClick={onClick}>Click here</div>
);
```

3. _Map Props_: if your literal is formed from other props, you can evaluate the literal beforehand. This should be ideally be done within a container component.

```
const Component = ({ productInfo }) => (
  <div product={{ ...productInfo, isAwesome: true }} />
);
```

...becomes...

```
const ContainerComponent = mapProps((props) => ({
  product: { ...props.productInfo, isAwesome: true },
}))(PresentationalComponent);

const PresentationalComponent = ({ product }) => (
  <div product={product} />
);
```
