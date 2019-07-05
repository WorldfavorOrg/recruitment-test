# Worldfavor recruitment test

## Introduction
This repository is intended for Worldfavor's developer candidates only. It contains a basic `react` project to base the assignments on. The candidate is required to fork this repository to his/her own Github account and work on the forked version.

Candidates are required to go through the different required assignments by providing their own implementation. A review meeting will be held after receiving the candidate's code, questions will be asked regarding the code and the mindset displayed in the implementation. Any candidate cheating on the test will be seen during this meeting and will see their candidature be denied.

This test should take no longer than 2h. If you feel you did not have the time to complete all the assignments and show all your capabilities, you are free to come back to us and we will take the time to ask you question about the points you did not fulfilled.

How to answer to the different scenario is open to the candidate unless stated in the question.

Be as true to yourself as you can, and good luck!

## Installation
In order to run this project you need to have a working `node` environment with `yarn` installed.

Clone this repository to your local machine and run:
```bash
yarn install
yarn start
```
A server should now be running on your machine with live update enable, and you should be all setup for the assignments.

## Assignments
The different assignments are divided into multiple levels depending on the difficulty of the questions and on your knowledge of Javascript and React.

Each previous level is required in order to do the next level.

Each level tackle a set of knowledge involved in our everyday development processes. To us, implementation design is as important as solving the question. The way you think will be first assessed through your code and next through the review meeting.

All assignments should be done without using external libraries, except for the one already available in `package.json`. No type definition nor linting are required from the candidate, but if you feel the need, we are open for this kind of initiatives.

### Level 1

Using the provided design, you are asked to reimplement the scene, while supporting an unknown amount of "network". The UI has to be responsive and show 1 network on small resolution, 2 on medium, 3 on large and 4 on extra large, on the same row.

The different components can be implemented using `Material-UI` component library, and is recommended for small building blocks such as a button.

Mock data that you should use is provided in `mockData.json`. There is no need for that task to use any state management to store the mock data, just a direct access is enough.

### Level 2

A `redux` store already exist in the application to store app data. For this task, it is asked to the candidate to create a new reducer, actions and selectors to store network information.

The mock data should be stored to the redux store whenever the application is mounting. When using the networks data, the networks should come from the redux store and no more directly from `mockData.json`.

### Level 3

In this task, the candidate is asked to load the data from our API by mocking an `axios` GET request. The content of the response will be the content of `mockData.json`.

### Optional

The candidate has the possibility to write all components using hooks, and will have to use `useSelector` and `useDispatch` from `react-redux` to communicate with the redux store. A new hook `useNetworks` will have to be implemented to load all the data at once and return the fetched networks, if available, or an empty array.

The newly created hook should be used like this:
```js
const networks = useNetworks()
```
