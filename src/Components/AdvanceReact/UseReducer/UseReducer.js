import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    if (action.type === "INC") {
      return state + 1;
    }
    if (action.type === "DEC") {
      return state - 1;
    }

    return state;
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>use UseReducer</h1>
      <h1>{state}</h1>
      <button className="btn" onClick={() => dispatch({ type: "INC" })}>
        Inc +
      </button>
      <button className="btn" onClick={() => dispatch({ type: "DEC" })}>
        Dec -
      </button>
    </div>
  );
};

export default UseReducer;
