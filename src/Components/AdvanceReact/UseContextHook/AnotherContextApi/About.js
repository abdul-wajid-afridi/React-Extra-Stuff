import React, { useContext } from "react";
import { AppContext, useGlobal, useGlobalContext } from "./ContextProvider";
const About = () => {
  //   const Data = useGlobalContext();
  const Data = useGlobalContext();
  return (
    <div>
      About us
      <p>{Data}</p>
    </div>
  );
};

export default About;
