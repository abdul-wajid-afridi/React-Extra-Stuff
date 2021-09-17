import React from "react";
import { useGlobalContext } from "./ContextProvider";

const Aboutus = () => {
  const Data = useGlobalContext();
  return (
    <div>
      this is the About us data
      <p>{Data}</p>
    </div>
  );
};

export default Aboutus;
