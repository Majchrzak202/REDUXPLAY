import { createStore } from "redux";


const redux = require("redux");

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === "increment") {
      return { counter: state.counter + 1, showCounter: state.showCounter };
    }
  
    if (action.type === "increase") {
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    }
  
    if (action.type === "toggleCounter") {
      return { counter: state.counter, showCounter: !state.showCounter };
    }
  
    if (action.type === "decrement") {
      return { counter: state.counter - 1, showCounter: state.showCounter };
    }
    return state;
  };
  
  const store = createStore(counterReducer);
  
  /* to tu na DOLE JEST TEZ WANZE ALE WYLACZYLEM TO Z EKPORTU  */
  /* export default store; */