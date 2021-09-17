import React, { useState } from "react";
import "../../../App.css";
const UseForm = () => {
  const [Email, setEmail] = useState([""]);
  const [Password, setPassword] = useState([""]);
  const [AllEntry, setAllEntry] = useState([""]);
  const FormHandler = (event) => {
    event.preventDefault();
    const NewData = { Email, Password };
    {
      /***the data from email and password is stored in NewData */
    }
    setAllEntry([
      ...AllEntry,
      NewData,
    ]); /**we setAllEntry Data to display and we dont want to display only
    NewData But we used the sprid operator to add both arrays and also store it and show the previos and now data
    AllEntry Has the old data to store and NewData has the inputs new data
    */
  };
  return (
    <>
      <div>
        <form className="header_c" onSubmit={FormHandler}>
          <div>
            <input
              className="inp"
              onChange={(event) => setEmail(event.target.value)}
              name="Email"
              value={Email} /**value targets the email data in the hook */
            />
          </div>
          <div>
            <input
              className="inp"
              onChange={(event) =>
                setPassword(event.target.value)
              } /**we are targetting the values */
              name="Password"
              value={Password} /**value targets the password data in the hook */
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <p className="num">{Email}</p>
        <p className="num">{Password}</p>
        <>
          {AllEntry.map((it) => {
            /**as we know that all the data is in array form so we can easily map it and show it in proper way */
            return (
              <div>
                <p>{it.Email}</p>
                <p>{it.Password}</p>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
};

export default UseForm;
