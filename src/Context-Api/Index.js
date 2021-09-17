import React from "react";
import Aboutus from "./Aboutus";
import { ContextProvider } from "./ContextProvider";
import Home from "./Home";

const Index = () => {
  return (
    <ContextProvider>
      <Home />
      <Aboutus />
    </ContextProvider>
  );
};

export default Index;
