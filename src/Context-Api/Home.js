import React, { useContext } from "react";
import { contextData, useGlobalContext } from "./ContextProvider";

const Home = () => {
  const { state, Name, Password } = useGlobalContext();

  return (
    <div>
      <h1>this is the data of home</h1>

      {/* <p>{state.map((it) => it.Name)}</p> */}
      <p>{Name}</p>
      <hr />
    </div>
  );
};

export default Home;
