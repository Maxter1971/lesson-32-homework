import { createStore } from "./createStore";

import { combineReducers, AbstractAction } from "./combineReducers";

const store = createStore(() => null, { name: "Bob" });
const state = { name: "Bob" };
const action1 = { type: "xxx" };
const action2 = { type: "yyyy" };
console.log(store.getState());

const reducer = (state = 1) => state + 1;
const store1 = createStore(reducer);
const qq = store1.dispatch(action1);

console.log(store1.getState());
store.dispatch(action2);
console.log(store1);

type State = { a: number; b: number };
const r1: any = (state = 5, action: AbstractAction) => state + action.payload;
const r2: any = (state = 6, action: AbstractAction) => state + action.payload;
const config = {
  a: r1,
  b: r2,
};

const reducer1 = combineReducers(config);

const state1: State = {
  a: 55,
  b: 66,
};
const action3 = { payload: 1 };
const newState1 = reducer1(state1, action3);

console.log(newState1);
