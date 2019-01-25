---
title: Comments
date: '2015-05-01T22:12:03.284Z'
---

Comments are a useful, but often abused, tool.

You should actually avoid comments where possible. Comments (including jsdoc) should be thought of as a code smell – it indicates a place where something _might_ be wrong, but is not necessarily wrong. Most comments are replaceable with a well-named function (or several well-named functions). One-line functions can be great for this. Comments are a code smell because they draw visual attention away from the important parts of the system (the code), and more importantly, they need to updated along with the code. It's very common for comments to drift from the code itself, which is often more harmful than having no comment at all.

That said, comments should be a last resort, but not an option that's off the table. When you do need a comment, it should be self-documenting – in other words, it should describe _why_ the code does something in a way that is not obvious from naming. It should not explain _what_ the code does.




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