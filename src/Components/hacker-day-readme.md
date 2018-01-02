# Questions/Answers for Hacker Day

### How it went overall

Good, really enjoy breaking things down into components. Feels much better than the messy Angular controllers.
I'd been doing L&D over a few months on React and the syntax etc finally committed to my memory in this project.
It's a pretty easy app, no need for Redux etc

### Any tips/knowledge you’ve picked up that you want to share

* Avoiding `this` hell with the ES6 style `funcName = (param1, param2) =>` (though there are good videos out there explaining scope of `this`)
* Functional stateless components (e.g. Badge.js) are more simple, less characters, you can easily tell they don't do anything complex, and more portable to other frameworks (https://javascriptplayground.com/blog/2017/03/functional-stateless-components-react/)

### Anything you struggled with

Initially just where you call an API when the props for a component change - found it needs to be in `componentWillReceiveProps`... in other
component lifecycle methods React would crash as it got in an infinite loop (of updating state in B -> changing state in A -> new prop for B -> updating state in B)

### Anything you think there must be a better way of doing

Checking multiple properties for null, like C# -> objectA.prop1?.prop2?.prop3
(Turns out it's coming in the future... https://stackoverflow.com/questions/31610869/null-conditional-operators)

### What you liked/didn’t like

I've been doing enough L&D on React and research ready for reporting to be able to just jump in and enjoy it.
It's a simple app, so that can make it feel more enjoyable as it's quicker/easier to make a significant change.
I liked breaking things down into components, I think it's easy to see when a component is getting too complex and needs breaking up.
I like using Prettier (format on save) & Babel - takes out unnecessary characters (e.g. semi-colons, brackets around single function params etc)
Like the fast load times after making a change!!!

### What next (for me, and for any spare time in the day)

What can we learn from: https://github.com/bvaughn/personal-logger (side project by somebody in the core React team)

Get tips from: https://vasanthk.gitbooks.io/react-bits/

Consider using styled components (https://github.com/styled-components/styled-components , https://javascriptplayground.com/blog/2017/08/introduction-to-styled-components-react/)

Or https://github.com/rapidjs/rapid.js for API config stuff

Consider adding unit tests for components (Jest), or end-to-end tests (Cypress.io)
