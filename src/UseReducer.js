import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type == "increament") {
    return state + 1;
  } else if (action.type == "decreament") {
    return state - 1;
  } else {
    return (state = 0);
  }
};
const UseReducer = () => {
  const [Count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increament" })}>+</button>
      <button onClick={() => dispatch({ type: "decreament" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      {Count}
    </div>
  );
};

export default UseReducer;
