import React, { useState } from "react";
import "../../../App.css";
const UseStateForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Entry, setEntry] = useState([]);
  const SubmitForm = (event) => {
    event.preventDefault();
    const AllEntry = { Email: Email, Password: Password };
    setEntry([...Entry, AllEntry]);
  };
  const ClearHandler = () => {
    setEntry([""]);
  };
  const DeleteItem = (email) => {
    const NewDel = Entry.filter((it) => it.Email !== email);
    setEntry(NewDel);
  };
  return (
    <div>
      {/* <h1 className="num">{Email}</h1>
      <h1 className="num">{Password}</h1> */}
      <h1 className="num">
        {Entry.map((it) => {
          return (
            <div>
              <p>{it.Email}</p>
              <p>{it.Password}</p>
              <button onClick={() => DeleteItem(it.Email)}>Delete</button>
            </div>
          );
        })}
      </h1>

      <div>
        <form className="header_c" onSubmit={SubmitForm}>
          <div>
            <input
              name="email"
              className="inp"
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <input
              name="password"
              className="inp"
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
          <button className="btn" onClick={ClearHandler}>
            Clear All
          </button>
        </form>
      </div>
    </div>
  );
};

export default UseStateForm;
