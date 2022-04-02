import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";
// import { createStore } from "redux";

// // Actions
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// // Reducers
// const counter = (state = 0, action) => {
//   if (action.type === "INCREMENT") return state + 1;
//   if (action.type === "DECREMENT") return state - 1;
// };

// // Store
// let store = createStore(counter);

// store.dispatch(increment());
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
