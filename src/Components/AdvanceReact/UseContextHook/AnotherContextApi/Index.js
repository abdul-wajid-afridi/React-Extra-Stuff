import React, { useContext } from "react";
import About from "./About";
import { AppContext } from "./ContextProvider";
import Home from "./Home";

const Index = () => {
  //   const context = useContext(AppContext);
  return (
    <div>
      {/* Index{context} */}
      <About />
      <Home />
    </div>
  );
};

export default Index;
