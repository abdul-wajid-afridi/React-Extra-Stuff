import React, { useState } from "react";
import "../../../App.css";
const FormTodo = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [AllEntry, setAllEntry] = useState([""]);

  //functions
  const FormHandler = (event) => {
    event.preventDefault();
    const AllData = { Name, Email, Password };
    setAllEntry([AllData, ...AllEntry]);
  };
  //Deleting Each item
  const DeleteItem = (name) => {
    const UpDated = AllEntry.filter((it) => it.Name !== name);
    setAllEntry(UpDated);
  };
  return (
    <>
      <div>
        <div className="header_c">
          <form onSubmit={FormHandler}>
            <div>
              <input
                className="inp"
                placeholder="Enter Your Name"
                name="Name"
                value={Name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <input
                className="inp"
                placeholder="Enter Your Email"
                name="Name"
                value={Email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <input
                className="inp"
                placeholder="Enter Your Password"
                name="Password"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div>
          {/* <p>{Name}</p>
          <p>{Email}</p>
          <p>{Password}</p> */}
          <p>
            {AllEntry.map((it) => {
              const name = it.Name;
              const email = it.Email;
              const password = it.Password;
              return (
                <div>
                  <p className="num">{name}</p>
                  <p className="num">{email}</p>
                  <p className="num">{password}</p>
                  <button onClick={() => DeleteItem(name)}>Delete</button>
                  <hr />
                </div>
              );
            })}
          </p>
        </div>
        <button className="btn" onClick={() => setAllEntry([])}>
          Delete All
        </button>
      </div>
    </>
  );
};

export default FormTodo;
