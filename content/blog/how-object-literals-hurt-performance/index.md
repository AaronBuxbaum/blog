---
title: How Object Literals Hurt Performance
date: '2015-05-01T22:12:03.284Z'
---

If you use a literal within a component, it will cause unnecessary re-renders (in other words, slow performance).

There are 3 types of literals:

- 

() =&gt; { stuff here } – function literal
- 

{{ stuff here }} – object literal
- 

{[ stuff here ]} – array literal 

##### What to do

1. _Hoisting_: when a literal doesn't need access to variables in the component's scope, we can hoist the literal itself outside of the component.  

const Component = () =&gt; (  

  &lt;div styles={{ marginTop: '15px' }} /&gt;  

);  
  
...becomes...  
  

const styles = { marginTop: '15px' };  

const Component = () =&gt; (  

  &lt;div styles={styles} /&gt;  

); 
2. _With Handlers_: if your literal is a function, you can create the function reference earlier and use it instead. This should ideally be done within a container component.  

const Component = ({ product, buyProduct }) =&gt; (  

  &lt;div onClick={() =&gt; 

buyProduct(

product)}&gt;Click here&lt;/div&gt;  

);  
  
...becomes...  
  

const ContainerComponent = withHandlers({  

  onClick: ({ buyProduct, product }) =&gt; () =&gt; buyProduct(product),  

})(PresentationalComponent);  
  

const PresentationalComponent = ({ onClick }) =&gt; (  

  &lt;div onClick={onClick}&gt;Click here&lt;/div&gt;  

);
3. _Map Props_: if your literal is formed from other props, you can evaluate the literal beforehand. This should be ideally be done within a container component.  

const Component = ({ productInfo }) =&gt; (  

  &lt;div product={{ ...

productInfo, isAwesome: true }} /&gt;  

);  
  
...becomes...  
  

const ContainerComponent = mapProps((props) =&gt; ({  

  product: { ...props.productInfo, isAwesome: true },  

}))(PresentationalComponent);  
  

const PresentationalComponent = ({ product }) =&gt; (  

  &lt;div product={product} /&gt;  

);

##### Why?

Let's talk a bit about how React works.

React has an in-memory DOM equivalent called VDOM (Virtual DOM). It uses this to make smart decisions about when DOM manipulations are needed – when things happen in React, it compares the previous VDOM to the new VDOM, and then only commits actual DOM changes on a per-need basis.

Many components take advantage of 

PureComponent – this is explained in more depth [here](http://my-jet.atlassian.net/wiki/spaces/BW/pages/684097774), but in short, it checks if its props are different, and if not, it tells React that the component is still the same. While not every component can make this assumption, many are. The check if props are different is done by referentially checking each prop and state variable in the old VDOM and the proposed new DOM. In other words, it runs 

oldProp === newProp for all props, and if any of them return 

false, it continues evaluating the component.

Because a component is just a function, every time you use a literal, it is inherently a completely new reference (a brand-new object in memory). Therefore, referential equality fails, and React thinks that the component has changed. Because of this, if you pass a literal into a 

PureComponent, it automatically doesn't work. By using the techniques above, we can use the same reference, and save our 

PureComponent performance benefits.