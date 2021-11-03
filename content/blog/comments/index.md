---
title: Comments
date: '2019-01-26T22:12:03.284Z'
---

Comments are a useful, but often abused, tool.

You should actually avoid comments where possible. Comments (including jsdoc) should be thought of as a code smell – it indicates a place where something *might* be wrong, but is not necessarily wrong. Most comments are replaceable with a well-named function (or several well-named functions). One-line functions can be great for this.

Comments are a code smell because they draw visual attention away from the important parts of the system (the code), and more importantly, they need to updated along with the code. It's very common for comments to drift from the code itself, which is often more harmful than having no comment at all.

That said, comments should be a last resort, but not an option that's off the table. When you do need a comment, it should be self-documenting – in other words, it should describe _why_ the code does something in a way that is not obvious from naming. It should not explain *what* the code does.

### The Counterargument

There is a counter-argument to the idea that comments are a code smell, which states that comments are valuable organizational pieces which help make code easier to read. The crux of the argument is that you should be able to recreate the code with the comments, or recreate the comments with the code. Both argue that comments should only be used to describe intent (ie. why something is done rather than how), but it expands the allowed uses to include what is being done. For example, a file might include a comment at the top describing what the file does.

In theory, this approach sounds reasonable and sounds valuable from the perspective of having developers rapidly get to the places they need to get, and encouraging documented separations of concerns. In practice, my experience has been that the comments go out of sync or become excuses for unreadable code. To that point, if you want to have comments to be used in this manner, you must ensure that the comments are maintained according to the same standards as (if not higher than) the rest of the code. I have yet to see this work in reality, but theoretically, it makes sense. Either way, comments should very rarely be _needed_ -- this argument is merely stating that comments should be used _in addition_ to highly readable code to make blocks of code faster to navigate.

#### Examples

```
// flatten to account for batched actions (which are dispatched in arrays)
return flatten(dispatches);
```

This comment explains the intent, but it could have been described in code instead (ie. `return manageBatchedActions(dispatches)`).

```
// check payment
const activePaymentId = yield getActivePaymentId();
```

This comment is unnecessary. It could be replaced with a one-line function called `checkPayment` that calls `getActivePaymentId`.

```
/** *****************************************************************************
INITIAL STATE
****************************************************************************** */
```

This comment is pointless. It should be deleted completely. If there's a need to enforce a separation of concepts, use functions or separate files instead.
