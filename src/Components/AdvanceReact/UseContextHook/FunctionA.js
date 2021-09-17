import React, { useContext } from "react";
import { UserContext } from "./UseContext";

const FunctionA = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <p>Function A: {context}</p>
    </div>
  );
};

export default FunctionA;
