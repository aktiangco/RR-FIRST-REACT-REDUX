# Introduction to React-Redux

1) Planning
whenever we are designing an app, no matter how small, we should plan out what we are expecting to do. For now, we'll be building a relatively simple app. The page should feature:

- A displayed number, representative of the current state value in the store
- A button to increment the value
- A button to decrement the value
- An input field for a custom value
A button to submit the custom value
Given the simplicity of the app, we can expect to build a component tree with only two components.
- App
  - Counter
Great! That gets the UI out of the way. But what about our Redux store? What kind of planning does it require?

1. Establish the store.
2. Build a reducer.
3. Develop actions.

Luckily, the toolkit we get from Redux will condense #2 and #3 on our list into a single item: Develop a slice.# RR-FIRST-REACT-REDUX
