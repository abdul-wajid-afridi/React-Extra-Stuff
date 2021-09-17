import React, { useState } from "react";

const ChangeColor = () => {
  const [Color, setColor] = useState("#631a59");
  return (
    <div style={{ background: Color, height: 200, width: 300 }}>
      <button
        onClick={() => setColor(Color == "#631a59" ? "#0edbff" : "#631a59")}
      >
        Change Color
      </button>
    </div>
  );
};

export default ChangeColor;
