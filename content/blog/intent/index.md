---
title: Intent
date: "2019-01-26T22:12:03.284Z"
---

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

The main point of modern-day programming is to convey logical ideas between humans. The computer doesn't need variables or naming, but we use it because we need to explain our thought process to ourselves and to other developers who will inevitably be touching the code you write. In fact, it turns out that over 95% of an average developer's time is spent *reading*, not writing, code! So, it's important that your code actually makes sense to the people who will be reading it and changing it.

The word we commonly use for this concept is *intent* – in general, we ask ourselves "how well does this code express my intent for what the computer should do?". Much of what makes good code "good" is that it expresses intent clearly and in a well-organized manner, and much of what makes bad code frustrating is that intent is obfuscated behind poor naming, or organization, or just isn't written from the perspective that another human will have to read it. Unexpectedly, you need to exercise an unusual skill: empathy. The degree to which you care to make your code understandable for future readers will correspond directly to how well you make your intent known through your code. In that regard, it isn't just nice to write your code to express intent well; it is your *responsibility*. Arguably, it's the main item on your job description!

For example:

```
const makeItSo = (str) => {
	let x = '';
	let y = 1;

	for (let i=1; i<str.length + 1; i++) {
		if (str.charAt(i-1) === str.charAt(i)) y++;
		else {
			x += str.charAt(i-1) + y;
			y = 1;
		}
	}

	return x;
}
```

Nothing about this code is technically wrong, but it's not immediately obvious what it's supposed to do. With just a little bit of naming and separating out, we'll get something much more reasonable (assuming some outside functionality for brevity)...

```
const compressString = (input) => {
	let response = '';

	for (let index=1; index<input.length + 1; index++) {
        const currentValue = input.charAt(index);

		if (isSameAsPreviousValue(currentValue)) {
			incrementCounter();
		}
		else {
			response = getCompressedValue(currentValue);
		}
	}

	return response;
}
```

There's lots of techniques for improving how well intent is conveyed by your code, but the most important is that you **must** think about it while you code!

By far the most common problem with intent is that a developer will write what he needs the computer to do as a "list of steps". This isn't useful because even if the original writer *does* have a good grasp of the concept (they likely actually do not if intent isn't expressed well), the next reader will have no idea what the author meant, and is susceptible to making mistakes. Code without well-expressed intent is hard to read, even harder to work with, takes a long time to deal with, and often requires complete rewrites when push comes to shove.

Below are a few methods you can use to help express intent in your code more effectively:

1. Think about intent and keep it in your mind as you code. Think about reading your coding from the perspective of someone who needs to fix a bug, who knows nothing about this area.
   - Will they know where to go?
   - Will they understand what you're trying to do as they dig into it?
   - How easy is it to understand what's going on from no experience?
   - Is the code organized in a manner to make this easy and fun, or will it be frustrating and confusing?
   - If you showed your code to a non-coder, would they be able to grasp the idea?
2. Use TDD. [Test-Driven Development](http://my-jet.atlassian.net/wiki/spaces/BW/pages/684359896/Test-Driven+Development) is one of the best ways to force you to think with intent.
3. Split things down as far as possible and name them well. As you do this, the business concepts should leap out into structures and help express what you're telling the computer to do.
4. Avoid "clever" solutions. While there may be actual benefits associated with a cute trick, or performance improvements from bit manipulation, these solutions are difficult to express intent with. It's often better to write something more straightforward, and allow performance improvements to be made if it becomes necessary.
5. Stick within the system. Wherever possible, stick to the existing conventions and systems. Adding something that is best for your specific problem may be a solution, but intent is often better described with an existing system, even at a loss of performance or features. When deviating from conventions, make sure that your use-case really warrants such an exception. Ask a few co-workers what they think before making such a move.
