---
title: Naming
date: '2015-05-01T22:12:03.284Z'
---

> "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors."

Much of the difficulty in programming isn't getting the computer to do what you want, it's in telling other humans what you wanted it to do (this is typically called _intent_). In that regard, naming things well is very important.

Though it's not obvious on the surface, taking your time naming things right is one of the best things you can do with your time. Making a list of possible names, taking a short break from the code, or asking a peer are all great strategies for coming up with the best name for the job.

A few other points about naming:

- Stick to the naming conventions. They are described below.
- Short names are great, but longer names are better than confusing ones.
- Never use shorthand or acronyms. For example, 

getMessage as opposed to 

getMsg.
- Usage of domain terminology is encouraged (ie. 

PDP).
- Usage of names that are not obvious outside of the domain should be avoided. In other words, the names should make sense to a non-programmer with domain knowledge.
- If you find yourself having difficulty naming something, it's likely doing too much. See [Functions](http://my-jet.atlassian.net/wiki/spaces/BW/pages/684261576/Functions) for more information.
- Avoid filler words like 

Manager, 

Controller, and so on. These names likely mean that your code is doing too much in one place.

##### Naming Conventions

###### Files

- Component files are named in CapitalCase: 

MyCoolComponent.js
- Folder root files are named 

index.js
- Utility files are named in camelCase: 

myUtils.js
- Tests are scoped to the folder, and exist in their own folder named 

__tests__
    - Unit test files exist in the test folder and are named the same as the file they test, except with the additional 

.spec extension

: MyCoolComponent.spec.js
    - Storybook files exist in the test folder and are named the same as the file they utilize, except with the additional 

.stories extension: 

MyCoolComponent.stories.js
    - If the file being tested is 

index.js, substitute the name of the folder

- Mocks are scoped to the folder, and exist in their own folder named 

__mocks__

###### Folders

- Folders are named in the same style as the type of files they contain

###### Components

- Components are named in CapitalCase: 

MyCoolComponent
- Functions are named in camelCase: 

thisIsMyFunction

###### Variables

- Most variables are named in camelCase: 

myCoolVariable
    - When keying into a map of possible options, or otherwise when there is a distinct set of limited and well-defined possible keys, those keys are typically in CAPITAL_CASE: 

MY_COOL_VARIABLE
    - If your variable is named with an acronym (ie. PDP), try to word around it: 

productOptions is better than 

PDPOptions. If you still need to use the acronym, use it in capitals: 

myPDPVariable.

- Functions should be prefixed with a verb, for example 

handleMyEvent or 

getData
- Booleans should be prefixed with a qualifier, for example 

isDisplayed
- Selectors should be prefixed with 

get, for example 

getProductFlags
- Selector creators should be prefixed with 

makeGet, for example 

makeGetProductFlags
- Event handlers (the name of the function itself) should be named with the prefix 

handle: 

handleMyEvent  
Event callbacks (the name of the prop) should be named with the prefix 

on: 

onMyEvent  
Typically this will look like 

&lt;MyComponent onMyEvent={handleMyEvent} /&gt;  
This is also true when using 

withHandlers, for example: 

{ onMyEvent: () =&gt; (e) =&gt; handleMyEvent(e) }