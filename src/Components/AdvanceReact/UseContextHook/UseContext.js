import React, { createContext, useState } from "react";
import FunctionA from "./FunctionA";
import FunctionB from "./FunctionB";

export const UserContext = createContext();
const UseContext = () => {
  const [Count, setCount] = useState(0);
  return (
    <div>
      {Count}
      <UserContext.Provider value={Count}>
        <button onClick={() => setCount(Count + 1)}>+</button>
        <button onClick={() => setCount(Count - 1)}>-</button>

        <FunctionA />
        <FunctionB />
      </UserContext.Provider>
    </div>
  );
};

export default UseContext;
