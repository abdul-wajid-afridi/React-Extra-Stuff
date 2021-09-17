import React, { useState, useEffect } from "react";

const ScreenWidth = () => {
  const [Width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return (
    <div>
      <p>{Width}</p>
      <p></p>
    </div>
  );
};

export default ScreenWidth;
