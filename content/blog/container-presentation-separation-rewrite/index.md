---
title: Container/Presentation Separation
date: '2015-05-01T22:12:03.284Z'
---

One of our most prevalent models in our codebase is the separation of containers and presentational components.

What that means is that all React components can be divided into one of two groups:

- **Container**: provides business logic but does not have provide rendering responsibilities.
- **Presentation**: provides direct rendering responsibilities, but does not provide any business logic.

To help make this distinction clearer, here's an example of a component:

 

const MyComponent = ({ count, makeApiCall }) =&gt; {
  const text = count % 2 ? 'EVEN' : 'ODD';

  return (
    &lt;div onClick={(count) =&gt; makeApiCall(count)}&gt;
      {text}
    &lt;/div&gt;
  );
};

As-is, this component has both business logic _and_ rendering responsibilities. It is not properly adherent to Container/Presentation Separation. To fix this, we'll split off the business logic into a wrapper component, and make the render function be as dumb as we can possibly can make it:

 

// Presentational
const MyComponent = ({ text, onClick }) =&gt; (
  &lt;div onClick={onClick}&gt;
    {text}
  &lt;/div&gt;
);
export default MyComponent;

// Container
const propMapper = (props) =&gt; ({
  text: count % 2 ? 'EVEN' : 'ODD',
  count: props.count,
});

const handlers = {
  onClick: ({ count }) =&gt; () =&gt; makeApiCall(count),
};

const enhance = compose(
  mapProps(propMapper),
  withHandlers(handlers),
);
export default enhance(MyComponent);

Notice how now the presentational component only knows about how things should be displayed, and how the container only knows about making changes to data and providing the functionality to the presentational layer. Our responsibilities are disconnected, and it is easy to separately manage as changes occur!

For you to do this, I recommend first getting a good grasp of how to wrap component functionality with an HOC. We typically use [Recompose](https://github.com/acdlite/recompose/blob/master/docs/API.md) to compose together container components.

Secondly, I recommend focusing on making your presentational as dumb as they possibly can be – keep separating out functionality and breaking up the component until all it does is set styling and DOM, and pass-through information/events. That's all we want our presentational components to do. Then, just fill out the functionality on the container side. If you have _any__ _logic occurring on your presentational component, that logic is likely best moved into the container.

Lastly, add containers if they don't exist when you're moving logic out of a "combined" component. The extra layer is actually desirable, and it's better done now than later!