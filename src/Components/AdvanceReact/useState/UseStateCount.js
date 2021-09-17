import React, { useState } from "react";
import "../../../App.css";
const UseStateCount = () => {
  const [Count, setCount] = useState(1);
  const IncreaseHandler = () => {
    const Counter = Count + 1;
    setCount(Counter);
  };
  const DecreaseHandler = () => {
    const DeCounter = Count - 1;
    setCount(DeCounter);
  };
  const ResetHandler = () => {
    setCount(0);
  };
  return (
    <div>
      <div className="counter">
        <h1 className="num">{Count}</h1>
      </div>
      <div className="header_c">
        <button className="btn" onClick={IncreaseHandler}>
          Increase
        </button>

        <button className="btn" onClick={DecreaseHandler}>
          Decrease
        </button>

        <button className="btn" onClick={ResetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseStateCount;
