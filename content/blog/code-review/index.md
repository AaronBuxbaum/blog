---
title: Code Review
date: '2019-01-26T22:12:03.284Z'
---

Code Review is a great way to ensure that code that goes in is high-quality. A lot of value here isn't from the review itself, it's from the fact that developers know that they need to send the code past others.

In order to accomplish an effect code review process, you want to balance three perspectives:
- Speed. How easy and fast can code get in? How many man-hours does it take to go from code-complete to merged?
- Safety. How much bad code gets into your code? How often do you need to hotfix or patch? What's the ratio of bugs to new functionality?
- Knowledge Dissemination. How siloed are the specifics of your codebase? If you have a problem in a specific area of the app, do you have a point-person, or will any developer suffice? Is that true for the entirety of the app?

The degree to which you want higher safety and knowledge dissemination both correspond to the rigidity of your code review. For example, if you value safety over speed, you might have a more involved process with more stakeholders. If you value knowledge dissemination, you might want to enforce pair programming and a more strict code review process.

Whichever direction you pick, _at least one other person_ should read all of the code that goes into the codebase -- no exceptions. Though I recommend pair programming, I also recommend that that other person not be one who paired on the project. The ideal reviewer is actually one who is unfamiliar with the codebase, that way they aren't biased by the current architecture, and they gain some knowledge in the area.

Below are some guidelines I consider valuable, but you should adapt them to what you consider important.

#### Reviewing
- Gut check if the code works. You don't have to pull down the code and test it, but from a code perspective, does it seem to work? Does anything look off?
- Check the code style. If there's something out of alignment in style, let the author know in a comment.
- Be thorough. Go through the entire PR line-by-line.
- If you find anything, make a comment about it.
- Follow your coding principles (such as the Five-Second Rule) -- if something doesn't adhere, mention it. It's more likely that it was overlooked than intentional.

In general, prefer false negatives to false positives – in other words, if there's any question about if the PR is good enough, don't approve it. You'd rather have the process take longer and the work be able to be confidently approved later.

#### Authoring
- Be respectful of your reviewers' time!
    - Before you post, do a review of your own and check that everything looks right.
    - Don't submit anything that isn't already complete and tested. You should be very confident that it will pass review with no comments.
    - Spend extra time to make the PR right the first time around.
    - The more times adjustments are needed, the more time is wasted by additional review and context switching. If there are suggestions, make sure you test and assure quality of your work before asking for another review.
- Make small PRs so that they are easy to review.
- Make the code "immutable" -- in other words, any single commit should be safely revertible.
- When you receive a comment, you can:
    - Continue the discussion, in which case you respond to the comment and ping the person or wait for a response. In some cases, you can resolve the ticket if you feel like your response closes the subject, but it's good practice to let the reviewer know in case they're not satisfied.
    - Do the suggested change – when done and pushed, you can resolve the comment. If you did exactly what the comment suggested, you can close it without a response, though adding one is good practice. NOTE: resolving is _only_ for completing the comment in some way. Do not just resolve a comment and not make any change or any response. The entire point of the system is to have records and accountability.