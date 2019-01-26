---
title: Readability
date: '2015-05-01T22:12:03.284Z'
---

Readability is a system internal at Google that I brought over to Jet for great effect. It's a system for ensuring that code quality stays high and consistent with standards, while simultaneously maintaining effective business decisions and encouraging tech excellence.

Readability is a badge that a developer earns for excellence in code quality, attention to detail, and attention to code review. In the system, all pull requests must have at least one approval by a developer with Readability, in effect making Readability a bottleneck on code approval.

You may be thinking: why would I ever want a bottleneck on code approval? There are a few reasons why this has historically worked:
1. It encourages excellence and discipline in order to get the badge.
2. It allows leadership to define or update code guidelines, since they will be enforced at the point of impact by those who hold readability.
3. It increases the overall quality of code review.
4. It creates a reward system for those who are already most important to your codebase's ecosystem.

Those with readability have the responsibility to block pull requests if it doesn't abide by guidelines or if it isn't written correctly, with no exceptions.

It's important to note that Readability is _not_ a measure of who the "best" developers are. Engineers with readability are those who have proven themselves to be thoughtful and thorough, and to have a great grasp of your code standards. In an ideal world, everyone on the team will have Readability, though realistically that is unlikely.

The requirements for Readability that make sense for you will differ from team to team. For example, at Google it's based on language proficiency. Below are the qualifications I use at Jet:

1. A history of dedication to extensive and thorough code review, with proper style and suggestions throughout. Specific examples of your exemplary code review are required.
2. To have _read_ and _understand_ our Code Style Guide.
    - Reading "[Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM)" by Robert Martin is a _BIG _plus. Management will buy the book for youin paper or online form.
    - If you're more of an audio/visual learner, Robert Martin also supplies the same information in video format via [cleancoders.com](https://cleancoders.com/videos/clean-code). If you're interested, we have team access.
3. Good refactoring and naming skills (ie. good "code sense") – these are difficult to measure, but you can typically acquire good code sense via the book above, or by practicing by doing many refactors.
4. To be a thorough and thoughtful engineer!


Likewise to requirements, the process for achieving Readability will differ from team to team. For example, at Google it's a written test. Below are the qualifications I use at Jet:
1. Take a decent chunk of the code – this could be a particularly complex section of the code, a distinct vertical or horizontal slice, or just an area of the code that you feel could be improved!
2. Refactor it according to our code style guidelines. Make it really high quality.
3. Perform a presentation on that refactor during Design Review. That presentation should include...
    - What you did: show the changes, describe how you did it.
    - Findings you made: discuss the decisions you made and their tradeoffs.
    - Some of your favorite code style guidelines or concepts that we aren't upholding well enough (even if not found in your refactor) and/or suggestions on a guideline that should be added to the style guide.


I also recommend that you have a required "check in" with a mentor about intended applications and a discussion about code sense. This helps prevent people going for Readability on a whim, and it removes the potential for a failed Readability presentation (for example, scope is too small, developer doesn't really have the skills in place yet, etc) -- if it's already approved by the right people, the rest is just a presentation to spread the information through the team.