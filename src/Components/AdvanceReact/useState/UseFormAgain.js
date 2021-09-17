import React, { useState } from "react";
import "../../../App.css";
const UseFormAgain = () => {
  const [Name, setName] = useState([""]);
  const [Add, setAdd] = useState([""]);
  const [Email, setEmail] = useState([""]);
  const [AllData, setAllData] = useState([""]);

  const FormHandler = (event) => {
    event.preventDefault();

    const NewData = { Name, Email, Add };
    setAllData([NewData, ...AllData]);
    setName([""]);
    setAdd([""]);
    setEmail([""]);
  };
  const DeletItem = (event) => {
    const Deleting = AllData.filter((it) => it.Add !== event);
    setAllData(Deleting);
  };
  return (
    <>
      <div>
        <form className="header_c" onSubmit={FormHandler}>
          <div>
            <input
              className="inp"
              name="Name"
              value={Name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              className="inp"
              value={Add}
              name="Add"
              onChange={(event) => setAdd(event.target.value)}
            />
          </div>
          <div>
            <input
              className="inp"
              value={Email}
              name="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Add
          </button>
        </form>
        <div>
          {/* <p>{Name}</p>
          <p>{Add}</p>
          <p>{Email}</p> */}
          {AllData.map((it) => {
            const name = it.Name;
            const add = it.Add;
            const email = it.Email;
            return (
              <div>
                <p>{name}</p>
                <p>{add}</p>
                <p>{email}</p>
                <button className="btn" onClick={() => DeletItem(add)}>
                  Delete Item
                </button>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseFormAgain;
