import React, { useEffect, useState } from "react";
import "../../../App.css";
const UseEffectBasic = () => {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Chats(${Count})`;
    console.log("Inside of the useffect");
  });
  console.log("outside of the UseEffect");
  return (
    <div>
      <p>{Count}</p>
      <button className="btn" onClick={() => setCount(Count + 1)}>
        Click
      </button>
    </div>
  );
};

export default UseEffectBasic;
