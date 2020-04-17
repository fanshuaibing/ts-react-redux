import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

function Counter(props: CounterProps) {
  return (
    <div className="App">
      <div>{props.n}</div>
      <button onClick={props.add}>+1</button>
      <button onClick={props.minus}>-1</button>
    </div>
  );
}

const mapStateToprops = (state: State) => {
  return {
    n: state.n
  };
};

function mapActionToprops(dispatch: Dispatch) {
  return {
    add: () => dispatch({ type: "ADD" }),
    minus: () => dispatch({ type: "MINUS" })
  };
}

const App = connect(
  mapStateToprops,
  mapActionToprops
)(Counter);
export default App;
