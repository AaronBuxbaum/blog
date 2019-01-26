---
title: Container/Presentation Separation
date: '2015-05-01T22:12:03.284Z'
---

Container/Presentation Separation is a mode of organizing front-end functionality so that changes are easier to adapt to and testing is easier.

With Container/Presentation Separation, all components can be divided into one of two groups:
- **Container**: provides business logic but does not have provide rendering responsibilities.
- **Presentation**: provides direct rendering responsibilities, but does not provide any business logic.

&nbsp;

To help make this distinction clearer, here's an example of a component:

```
const MyComponent = ({ count, makeApiCall }) => {
  const text = count % 2 ? 'EVEN' : 'ODD';

  return (
    <div onClick={() => makeApiCall(count)}>
      {text}
    </div>
  );
};
```

Even in this simplistic state, this component has both business logic _and_ rendering responsibilities, and thus it is not properly adherent to Container/Presentation Separation. Note that it has some logic to calculate the text, and how it needs to know how to "make an API call". To a presentational component, all it should know is that it consumes the data it receives, or it calls a function naively.

To explain what I mean, we'll split off the business logic into a wrapper component, and make the render function be as dumb as we can possibly can make it. We're going to use [Recompose](https://github.com/acdlite/recompose/blob/master/docs/API.md) for this, but you could do this separation however you like.

 ```
// Presentational
const MyComponent = ({ text, onClick }) => (
  <div onClick={onClick}>
    {text}
  </div>
);
export default MyComponent;

// Container
const propMapper = (props) => ({
  text: count % 2 ? 'EVEN' : 'ODD',
});

const handlers = {
  onClick: ({ count }) => () => makeApiCall(count),
};

const enhance = compose(
  withProps(propMapper),
  withHandlers(handlers),
);
export default enhance(MyComponent);
```

Notice how now the presentational component only knows about how things should be displayed, and how the container only knows about making changes to data and providing the functionality to the presentational layer. Our responsibilities are disconnected, and it is easy to separately manage as changes occur!


### How do I do the same?

For you to do this, I recommend first getting a good grasp of how to wrap component functionality with an HOC. As mentioned, [Recompose](https://github.com/acdlite/recompose/blob/master/docs/API.md) is my favorite way to compose together container components.

Secondly, I recommend focusing on making your presentational as dumb as they possibly can be – keep separating out functionality and breaking up the component until all it does is set styling and DOM, and pass-through information/events. That's all we want our presentational components to do. Then, just fill out the functionality on the container side. If you have _any_ logic occurring on your presentational component, that logic is likely best moved into the container.

Lastly, add containers if they don't exist when you're moving logic out of a "combined" component. The extra layer is actually desirable; the performance hit is negligible, and you'll immediately see benefits in reusability and development speed!