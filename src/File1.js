import React, { createContext, useContext } from "react";
import { CounterContext } from "./UseContextHook";
import img from "./images/img1.jpg";
import File2 from "./File2";
const id = "1";
const name = "good place";
const type = "COOL";
export const SendForm = createContext();
const File1 = ({ children }) => {
  const { Name, Email } = useContext(CounterContext);
  return (
    <div>
      <CounterContext.Provider value={{ id, name, type, img }}>
        <File2 />
      </CounterContext.Provider>
      <hr />
      <p>{Name}</p>
      <img src={Email} style={{ height: 200, width: 300 }} />
    </div>
  );
};

export default File1;
