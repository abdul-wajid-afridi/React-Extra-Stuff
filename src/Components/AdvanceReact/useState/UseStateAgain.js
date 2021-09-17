import React, { useState } from "react";

const UseStateAgain = () => {
  const [Name, setName] = useState([""]);
  const [Email, setEmail] = useState([""]);
  const [AllEntry, setAllEntry] = useState([""]);
  const FormHandler = (event) => {
    event.preventDefault();
    const NewData = { Name: Name, Email: Email };
    setAllEntry([NewData, ...AllEntry]);
    setName([""]);
    setEmail([""]);
  };
  const DeleteHandler = (id) => {
    const Data = AllEntry.filter((it) => it.Name !== id);
    setAllEntry(Data);
  };
  return (
    <div>
      {/* <p>{Name}</p>
      <p>{Email}</p> */}
      <p>
        {AllEntry.map((it) => (
          <div>
            <p>{it.Name}</p>
            <p>{it.Email}</p>
            <button onClick={() => DeleteHandler(it.Name)}>Delete</button>
          </div>
        ))}
      </p>
      <div>
        <form onSubmit={FormHandler}>
          <div>
            <input
              name="Name"
              value={Name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter Name"
            />
            <input
              name="Email"
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UseStateAgain;
