import React, { useState } from "react";

const UseStateStore = () => {
  const [Text, setText] = useState(["empty array"]);
  // const InputHandler = () => {};
  const ChangeHandler = (e) => {
    return setText(e.target.vale);
  };

  return (
    <>
      <div className="header_c">
        <h1>{Text}</h1>

        <form>
          <div>
            <input
              className="inp"
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={ChangeHandler}
              // value="name"
            />
          </div>
          <div>
            <input
              className="inp"
              name="add"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <input name="name" onChange={(e) => setText(e.target.value)} />
          <button className="btn">click me</button>
        </form>
      </div>
    </>
  );
};

export default UseStateStore;
