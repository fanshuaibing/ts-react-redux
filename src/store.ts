import { createStore } from "redux";
const Reducer = (state = { n: 0 }, action: any) => {
  switch (action.type) {
    case "ADD": {
      return { n: state.n + 1 };
    }
    case "MINUS": {
      return { n: state.n - 1 };
    }
    default:
      return state;
  }
};
const store = createStore(Reducer);
export default store;
