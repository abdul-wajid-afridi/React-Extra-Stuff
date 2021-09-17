import React, { useState } from "react";

const Toggle = () => {
  const newBtn = "show";
  const [Name, setName] = useState(false);
  const [Btn, setBtn] = useState(newBtn);
  const ToggleHandler = () => {
    Name == false ? setName(<Navbar />) : setName(false);
    Btn == "show" ? setBtn("Hide") : setBtn("show");
  };
  return (
    <div>
      <button onClick={ToggleHandler}>{Btn}</button>
      <h1>{Name}</h1>
    </div>
  );
};
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Gallary</li>
        <li>Contact us</li>
        <li>Login</li>
      </ul>
    </div>
  );
};
export default Toggle;
