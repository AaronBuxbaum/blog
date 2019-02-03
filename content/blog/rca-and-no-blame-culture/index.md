---
title: Root Cause Analysis & No-Blame Culture
date: '2019-01-30T22:12:03.284Z'
---

Regardless of how polished your fundamentals are, it's inevitable that mistakes will happen. Much of what differentiates a productive and unproductive culture is the degree to which the lessons of those mistakes help inform future decisions -- it's likely that your fundamentals aren't as perfect as you'd like to imagine, and it's best to be open for improvement when breakdowns occur. In my experience, the best way to make that change happen is through Root Cause Analysis (RCA).

> The primary goals of writing a postmortem are to ensure that the incident is documented, that all contributing root cause(s) are well understood, and, especially, that effective preventive actions are put in place to reduce the likelihood and/or impact of recurrence. 

As the name implies, the idea of RCA is to analyze the event and come to a conclusion about the "root cause", or the basis for the entire problem. Most problems aren't actually a result of a single event, but through appropriate analysis, your team can typically distill the problem down to a human error, a problem in process, or a lack of appropriate standards or discipline. Interestingly, it is _very_ common that a problem appears to be human error at the surface, but through analysis, we find a way to improve the system so the same problem is less likely in the future.

#### Triggers
First, let's talk about what triggers an RCA. The severity of an RCA trigger varies from team to team, but I recommend that you try to hit a point where it's not annoying, but the team is motivated to solve the problems to prevent them from reoccurrence. It's important that the goal is not to punish those who make a mistake; the goal is to avoid it from happening again. We'll talk a bit further about this concept later in our discussion of No-Blame Culture.

> Postmortems are expected after any significant undesirable event. The postmortem process does present an inherent cost in terms of time or effort, so we are deliberate in choosing when to write one. 

Google recommends the following triggers:
- User-visible downtime or degradation beyond a certain threshold
- Data loss of any kind
- On-call engineer intervention (release rollback, rerouting of traffic, etc.)
- A resolution time above some threshold
- A monitoring failure (which usually implies manual incident discovery)

I also suggest including the following:
- Blocking bugs found in QA (a blocking bug is one that require a hotfix or revert in order to push from QA to production)
- Blocking bugs found in production (in this case, those bugs that warranted a hotfix or revert to fix the problem as opposed to working through your normal development pipeline)

> Writing a postmortem is not punishment—it is a learning opportunity for the entire company. When an outage does occur, a postmortem is not written as a formality to be forgotten. Instead the postmortem is seen by engineers as an opportunity not only to fix a weakness, but to make the company more resilient as a whole.

When a trigger occurs, your process should be set up to require the responsible party (or a closest guess) to write an RCA or postmortem document. This writing "assignment" will require the person to trace back the precise series of events that caused the event, as well as trying to come to a conclusion about why the event occurred and how it could have been prevented. While much of that conclusion will inevitably be speculation, we'll be able to test the hypothesis by reoccurrence rate -- in other words, if the same problem happens again, we can say that either the original analysis was incorrect, or it was improperly implemented. With incremental improvement, eventually the problem won't happen anymore, thus making your process better!

The author(s) of the RCA depend on the trigger type and the way that your team is organized. If you have an on-call system, production issues should assigned to that person. For blocking bugs, the on-call should analyze the problem and co-author the RCA along with the party responsible for the bug itself. The RCA should have very high quality and completeness, and should be future-proof -- in other words, it should be written with the assumption that it will be read in the future and need to be understood by others at that time. In that regard, being precise and verbose is far preferable to a faster completion.

#### Analysis
In order to keep each RCA consistent, it's recommended to have an RCA template, which authors will fill in with their analysis. As you can probably guess, the template will differ from team to team.

Google [recommends](https://landing.google.com/sre/sre-book/chapters/postmortem/) the following sections:
- Authors
- Status: In Progress, In Review, Done
- Summary: A one line description of the issue
- Impact: Who was effected? How bad was it?
- Root Causes: What is at the root of the problem?
- Trigger: What triggered the issue?
- Resolution: Which steps did we take to mitigate and fix the issue?
- Detection: How was the issue reported? Who reported it? 
- Action Items: a full list of all of the actions done, with regards to prevention, mitigation, and process improvement.
- Lessons Learned: This is the most valuable part of the RCA process where we extract knowledge from our errors. 
  * What went well
  * What went wrong
  * Where we got lucky
- Timeline: Detailed timeline of what happened. Use links as much as possible to allow digging into detail.
- Supporting Information: Set of links that were used for the RCA (and related RCAs).

I also suggest including the following:
- Affected Version: or Git `sha`, if you don't have app versions
- Fixed Version: or Git `sha`, if you don't have app versions
- [Five Whys](https://en.wikipedia.org/wiki/5_Whys): Ask yourself "why" at least five times to dig into the actual reason that the problem occurred. This helps force yourself to actually explain the situation methodically, which avoids assumptions.

Regardless of what your template looks like, the most important part is to make sure that the work is taken seriously, that it is completed thoroughly, and that it becomes a priority to accomplish. An RCA should not take longer than one week to finish, and in general it should be several hundred words. Otherwise, it is difficult to really get to the bottom of the problem. For example, imagine code was pushed that caused a server to crash due to a missing parenthese. A quick analysis might decide that "engineers should test most thoroughly", but that wouldn't really be digging into the core of the matter -- why did the engineer push in the first place? Were they receiving pressure to push? Is there an effective system in place to assure that the code compiles before it goes into production? If it was overridden, why? In other words, what changes can we make that would prevent this from having occurred to begin with?

It's important to note that _every_ RCA should generate action items of some kind. This is important, because analysis by itself is not useful if it isn't used to improve the process long-term.

#### Meta-Analysis
A very important and often-missed part of the RCA process is called _meta-analysis_. In this process, the author forms links from their RCA to older RCAs. This should actually have explicit links to the other RCAs so that readers can follow the line of logic. That said, the links themselves aren't enough -- the important part is that the author explains how these RCAs relate, and how their suggestion includes the lessons of the past. For example, if the exact same problem has happened before, and the analysis is the same as the previous RCA, that would imply that either the process change was improperly implemented, or that the process change was incorrect. One should be very careful about suggesting that the problem is human error -- process should be established to the point where human error is delegated only to negligent behavior. Suggesting that the problem is human error is a very serious allegation against the responsible party, and is largely against the concept of no-blame culture.

#### Distribution
Finally, the RCA should be distributed for peer review and comment. The RCA should be distributed freely to the entire team (not just the engineers), and leadership should make it priority that the team actually reads the RCA. The team should recommend edits or any analysis points that may have been missed, and those changes should be discussed and incorporated into the document.

> An unreviewed postmortem might as well never have existed.

Review should also determine if the RCA has reached a sufficient level of completion in order to be closed. Google recommends the following criteria:
- Was key incident data collected for posterity?
- Are the impact assessments complete?
- Was the root cause sufficiently deep?
- Is the action plan appropriate and are resulting bug fixes at appropriate priority?
- Did we share the outcome with relevant stakeholders?

When peer review finishes, the author(s) should present the findings during your next team meeting -- we dedicate a section of both our daily squad meetings and our weekly All Hands meetings, but some RCAs demand entire meetings of their own. In this meeting, the authors should explain what happened and their analysis, and the entire team should discuss accordingly. It's important that this meeting also include the meta-analysis so that the team understands the severity of the problem and its reoccurrence rate. Lastly, the team should review the generated action items and revise as necessary. The action items can change, but again, there must be at least one action item left on the backlog. The result of the action items should be prioritized as highly as possible, so that the problem is resolved before the same problem occurs again.

As mentioned before, the end goal here is that the RCA makes a difference and that the problem doesn't occur again due to improvement of process. Or, if it does happen again, that we adjust process accordingly and _then_ it doesn't occur again. Rinse and repeat until you have very few high-severity problems! This is similar to _kaizen_: steady improvement over time. If you create the culture of avoiding reoccurrence, you will very quickly get to a point where very few serious problems happen.

#### No-Blame Culture
Because we're digging into the causes of problems, it can be easy to try to blame certain teams or people for the problems. For example, if a certain team continues to show up often, an instinctive reaction might be "_that_ team isn't keeping up to _our_ standards" -- you should be sure to avoid this instinct. You might actually be wrong about where blame should be given, that entity might just be at a point of higher risk, or any other reason.

Even more importantly, putting blame on associated parties causes self-guessing about escalating a problem. Toyota Production System revolutionized this concept with _jidoka_, or "automation with a human touch". The idea is that any worker should feel comfortable stopping the entire production when she detects a problem, because that will avoid defects and avoid the greater problem of potentially letting a problem propagate. In other words, it's better to be safe and catch a mistake early, rather than allowing it to cause bigger problems. In order to make this system a reality, workers have to be comfortable with the concept that they will not be punished for stopping production, as long as they have a valid reason to suggest that something is wrong. In fact, some implementations of jidoka actually punishes those who saw the defect but did _not_ stop production.

#### Source
Much of this philosophy has been inspired by the [Postmortem Culture](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/) of Google's _Site Reliability Engineering_ book. I strongly recommend the entire book, which is available freely [online](https://landing.google.com/sre/books/), or in print format ([Jet.com](https://jet.com/product/Site-Reliability-Engineering-How-Google-Runs-Production-Systems/a7bf4d6d4fb9415bb12f376ee4840fa9)).