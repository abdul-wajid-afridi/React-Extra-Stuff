import React, { useEffect, useState } from "react";

const UseEffectClean = () => {
  const [ScreenWidth, setScreenWidth] = useState(window.screen.width);
  const [ScreenHeight, setScreenHeight] = useState(window.screen.height);
  const HeightF = () => {
    setScreenHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", HeightF);
    return () => window.removeEventListener("resize", HeightF);
  });

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth)); //the add event listner adds and performs the data with the two functions
    return () =>
      window.removeEventListener("resize", () =>
        // we must define a function here to call that setScreenwidtrh
        setScreenWidth(window.innerWidth)
      ); //the remove event listner removes the functionalities of the first function
  });
  return (
    <div>
      <p>width of the screen is : {ScreenWidth}</p>
      <p>Height of the screen is : {ScreenHeight}</p>
    </div>
  );
};

export default UseEffectClean;
