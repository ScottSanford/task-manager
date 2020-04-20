<p align="center">
  <img src="./img/4_20_screenshot.png" width="600"/>
</p>

## Task Manager (Trello Clone)

A fun little side project working with React, Redux, and Jest Unit Testing! :)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

##### Installation:

`npm install`

##### To Start Server:

`npm start`

## Opinions

The goal of this project is to work with React, Redux, and Jest. My time at Mediafly focused heavily using Angular+TypeScript. I wanted to compare the 2 different popular frameworks. Here are a few of my opinions working with React.

Writing a web application in React is a great experience compared to Angular. Part of this is the ability to write components within function declarations as opposed to class-style components. Yes, you could write React components using class-style syntax but with React Hooks there is no need. Additionally, writing in JSX is enjoyable. I remember when it was considered taboo to not mix markup and logic into the same files, however the experience is great because it means one less file to toggle between. Also, React Hooks is fantastic and feels like a cheat code when managing state.

Redux does have its advantages and disadvantages. Advantages being its use of a single store object and immutability. The two reasons why I enjoy immutability is it solves the problem of object equality and forces you to explicitly express your values as "clones" or "copies" through the use of reducers (pure functions). This is achieved by taking advantage of latest JS syntax like the spread operator `{...myObj, {color: red} }` is fantastic combined with the ability to override properties. Also, pure functions makes unit testing a breeze!

However, Redux does lend itself some disadvantages primarily through initial configuration setup. It's not bad once you get it up and running but remembering each function and ensuring container components are in place is something to always think about. Also, as an Engineer you have to decide which state you do want to end up managing through Redux and which through React Hooks. Generally, I prefer to store state in Redux if I know the state is going to be used across multiple components. If it's not, React Hooks are just fine. There is no need to automatically default to using Redux for everything.

Lastly, I wanted this project to experience writing unit tests in Jest. I've always heard positive experiences writing in the testing framework and yes I can confirm, the experience is great. Snapshot testing a great quick tool for regression testing. Initially, I assumed these could be used for every little component and can move on with our lives, but I disagree. Snapshot testing has its place but there is something to be said about having explicit written tests. Tests not only ensure code works as expected but defines the feature requirements. To an Engineer, reading those requirements gives me a strong satisfaction that the most important points are working.

## What else

I've been playing around with the Redux architecture. Initially, I kept my components within a separate "redux" folder and files sorted by functionality next to a "components" folder. However after quickly using redux, I do not enjoy this approach because you constantly have to reference your imports from multiple files. Instead I prefer to place my redux files next to each feature. While this couples your components and state management, I find it's more enjoyable and more scalable once your project becomes larger.

I came across the idea of putting your redux logic within "ducks". Essentially, all your actions, action creators, reducers all in one file. This goes against the grain of convention but why not try something new, right? ;)
