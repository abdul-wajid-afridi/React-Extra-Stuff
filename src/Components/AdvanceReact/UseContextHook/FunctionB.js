import React, { useContext } from "react";
import { UserContext } from "./UseContext";
const FunctionB = () => {
  const context = useContext(UserContext);
  return <div>Function B: {context}</div>;
};

export default FunctionB;
