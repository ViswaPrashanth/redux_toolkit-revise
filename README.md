## __REACT-REDUX_TOOLKIT__

## This code repository deals with basic redux, redux toolkit and the integration of redux toolkit and react.

### Below is some handy notes about react-redux.


Redux is a predictable state container for Javascript apps.
  - In Redux, a pattern is enforced to ensure all state transitions are explicit and can be tracked. The changes to our application's state become predictable
  - Redux stores the state of our application. In short, the state of an app is the state shared by all the components of that app. Redux will store and manage the application's state
  - Redux is not tied to React. It can be used with React, Vue, Angular or even with Vanilla JS. Redux is a library for JS Applications

So, if we want to manage Global state of our application in a predictable way, Redux can help. The Patterns and tools provided by redux makes it easier to understand when, where, why and how the state in our app is being updated and how our application logic will behave when these changes occur. Redux guides us towards writing code that is highly predictable and testable which helps give confidence that our app will work as expected.

__Redux Toolkit__ - Redux toolkit is the official, opinionated, batteries included toolset for efficient redux development.

It is also intended to be the standard way to write redux logic in our application.

__Redux__ is great but it does have few shortcomings.
  - configuring Redux in app seems complicated.
  - In addition to redux, a lot of other packages like immer have to be installed to get redux to do something useful.
  - Redux requires too much of boilerplate code.

So, Redux toolkit serves as an abstraction over redux. It hides the difficult parts ensuring we have a good dev experience.

We need React-redux to use redux in React.

The dilemma here in using redux is - when should we use redux in our application. The answer is
  - when we have large amounts of application state that are needed in many places of app.
  - when the app's state is updated frequently over time.
  - when the logic to update the state is complex.
  - when the app has a medium or large-sized codebase, and might be worked on by many people.

All in all, not all applications require redux.

We use __*Immer*__ library in basic redux to keep track of nested state in reducer functions. But it comes inbuilt in redux-toolkit.

Using __Middleware__ is the suggested way to extend Redux with custom functionality. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. We use middleware for logging, crash reposrting, performing asynchronous tasks etc,..
