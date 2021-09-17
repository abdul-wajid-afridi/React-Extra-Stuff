import React, { useState, Fragment } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
const UseStateText = () => {
  const [Text, setText] = useState("Title");
  const HandleClick = () => {
    // if (Text === "Title") {
    //   setText("UseState");
    // } else {
    //   setText("Title");
    // }
    Text == "Title" ? setText("UseState") : setText("Title");
  };
  return (
    <Fragment>
      <div className="container">
        <h1>{Text}</h1>
        <button className="btn btn-outline-info" onClick={HandleClick}>
          ChangeTitle
        </button>
      </div>
    </Fragment>
  );
};

export default UseStateText;
