import React, { useState } from "react";

const UseStateEvent = () => {
  const [Data, setData] = useState([""]);
  const OnchangeHandler = (event) => {
    event.preventDefault();
    const Save = event.target.value;
    setData([Save]);
  };

  return (
    <div>
      <h1>{Data}</h1>
      <input onChange={OnchangeHandler} value={Data} />
    </div>
  );
};

export default UseStateEvent;
