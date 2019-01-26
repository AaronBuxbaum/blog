---
title: SOLID Principles
date: '2015-05-01T22:12:03.284Z'
---

**SOLID** is an acronym for a set of best-practice principles that have been shown over time to result in higher-quality code. They’re concepts that can help make software more understandable, flexible and maintainable. Use them as guiding concepts as you write code.

**SOLID** stands for:

- **S**ingle Responsibility Principle
    - “A module should have only one reason to change, meaning that a module should only have one job.”
- **O**pen/Closed Principle
    - “Objects or entities should be open for extension, but closed for modification.”
- **L**iskov Substitution Principle
    - “Derived types must be completely substitutable for their base types.”
- **I**nterface Segregation Principle
    - “A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.”
- **D**ependency Inversion Principle
    - “High level modules should not depend upon low level modules. Rather, both should depend upon abstractions.”

##### Single Responsibility Principle

> “A module should have only one reason to change, meaning that a module should only have one job.”

> “Gather together the things that change for the same reasons. Separate those things that change for different reasons.”

Single Responsibility concerns itself with organizing your code around where change is likely to happen. The more your class does, the more it increases coupling between the classes it interfaces with, which increases the likelihood of problems. Therefore, we must enforce separation so that we can effectively manage specific features. We want several tools that each do their job really well, rather than a few tools that are multi-purpose.

This principle is all about minimization of risk. Think about where things might change, and organize your code accordingly. It’s much easier said than done!

> "As an example, consider a module that compiles and prints a report. Such a module can be changed for two reasons. First, the content of the report can change. Second, the format of the report can change. These two things change for very different causes; one substantive, and one cosmetic. The single responsibility principle says that these two aspects of the problem are really two separate responsibilities, and should therefore be in separate classes or modules. It would be a bad design to couple two things that change for different reasons at different times."

_How?_

> “We define a responsibility as “a reason for change”. If you can think of more than one motive for changing a class, then that class has more than one responsibility.”

Before you start coding, break down your work into multiple class stubs such that there is only one reason for changing them. Make sure to name them effectively. Then, write tests for them, making sure that individual classes only know about what they need to know about, and nothing more. Lastly, fill in the details.

> “The name of a class should describe what responsibilities it fulfills. In fact, naming is probably the first way of helping determine class size. If we cannot derive a concise name for a class, then it’s likely too large.”

Any class more than one statement can violate Single Responsibility, but the likelihood of violation increases exponentially with the class’ complexity, and therefore indirectly also by number of lines.

As a completely arbitrary rule of thumb, components should generally build exactly one level of DOM (otherwise you can’t easily shallowly test it), modules should be less than 150 lines long, and functions should be less than 7 lines long.  
  

> “The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.”

> “With functions we measured size by counting physical lines. With classes we use a different measure: we count responsibilities.”

<!-- // TODO: example -->


##### Open/Closed Principle

> “Objects or entities should be open for extension, but closed for modification.”

Additions or changes to functionality should be possible without adding complexity to existing code.

A class should not directly manage several different possible functionalities, but instead be wrapped by or call into functionalities that exists elsewhere. In other words, make your class extend out to extension points, as opposed to directly handling its own complexity. Use this principle with some discretion based on how many functionalities are needed and how tightly related they are.

_How?_

> “You should be able to extend the behavior of a system without having to modify that system.”

Instead of having a class manage different possible cases, a class should define an interface for consumers to implement. The class doesn’t need to know about the intricacies of each possible case, it just knows to operate over each interface.

HOCs are great for Open/Closed, because each wrapper handles its own implementation and therefore extension is possible (adding/editing/removing) without modification to the class (component) itself. You also get Single Responsibility for free!

Another Open/Closed pattern is the Strategy pattern, in which the class delegates its responsibilities to different “strategy” implementations.

 

Instead of…
```
const getTitle = () => {
  if(this.status === ENTERING) return ‘hello’;
  if(this.status === EXITING) return ‘goodbye’;
  ...
};
```

Do…
```
const getTitle = () => this.strategies.find(
  (strategy) => strategy.getTitle(this.status)
);
```

##### Liskov Substitution Principle

> “Derived types must be completely substitutable for their base types.”

If you extend a class, any overridden public methods must still be handled appropriately: preconditions cannot be strengthened in a subclass. In other words, the consumer should be able to expect that a derived type works anywhere that the base type works. What that means is that when you extend a class, every public function needs to operates the way that the contract defines them as, even if they’re irrelevant to the derived class. If a consumer changes from a base class to a derived class, there should be no difference in API expectations.

 
 An example of violation would be if we have a Square class that extends Rectangle:
```
class Rectangle {
  setWidth(w){ this.w = w; }
  setHeight(h){ this.h = h; }
}
```

If a consumer switches a Rectangle instance to a Square and calls one of these functions, the requirements have changed beneath them -- now, setWidth is actually also setting height and vice-versa. Therefore, this example violates Liskov Substitution: the derived class changed the preconditions of the base class.


##### Interface Segregation Principle

> “A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.”

When a class implements an interface, there should be no methods that aren’t used by that class. If there are, that class needs a new interface more specific to its actual requirements. This is true still if the subclass is an exception to a rule. Interfaces define how a consumer uses your class, not simply to mirror implementation.

Imagine we have an interface for Bird:
```
interface Bird {
  fly() { … }
  walk() { … }
  …
}
```

If we create a Penguin that implements this class, it needs to throw an error for fly.
Therefore, Bird is not a good interface for Penguin because it violates Interface Segregation.


##### Dependency Inversion Principle

> “High level modules should not depend upon low level modules. Rather, both should depend upon abstractions.”

Create a layer of abstraction that separates calls to APIs from the API itself. By doing so, the entire team codes to a consistent interface, regardless of how that interface is actually implemented behind the scenes. This encourages testable code and reasonable feature management, makes performance work easier to do, and makes APIs less brittle to work with.

This is similar to “Information Hiding”: if you encapsulate a design decision under an abstraction, you stabilize the entire application against changes to that decision.

 
 Instead of...
```
const getProducts = () => axios.get(PRODUCTS_URL);
```

Do...
```
import { getRequest } from ‘utils/requests’;
const getProducts = () => getRequest(PRODUCTS_URL);
```