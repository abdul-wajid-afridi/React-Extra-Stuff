import React, { useState } from "react";

const UseStateObject = () => {
  // way 1   const [Text, setText] = useState({ name: "Jhone", age: 23, add: "newyork" });
  const [name, setname] = useState({ name: "jhon" });
  const [add, setadd] = useState({ add: "newyork" });
  const [age, setage] = useState({ age: 23 });

  const ChangeHandler = () => {
    //way 1 setText({ ...Text, name: "new name" });
    setname({ name: "jhon-doe" });
    setadd({ add: "losangles" });
    setage({ age: 24 });
  };
  return (
    <div className="container">
      <h1>{name.name}</h1>
      <h1>{age.age}</h1>
      <h1>{add.add}</h1>
      <button onClick={ChangeHandler}>Change Address</button>
    </div>
  );
};
export default UseStateObject;
