import React, { useState } from "react";

const TodoApp = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Total, setTotal] = useState([""]);
  const FormHandler = (event) => {
    event.preventDefault();
    const SaveData = { Name, Email };
    setTotal([...Total, SaveData]);
    {
      setName([""]);
    }
    {
      setEmail([""]);
    }
  };
  const DelHandler = (name) => {
    const Update = Total.filter((it) => it.Name !== name);
    setTotal(Update);
  };
  return (
    <>
      <div>
        {Total.map((it) => {
          const { Name: name, Email: email } = it;

          return (
            <div>
              <p>{name}</p>
              <p>{email}</p>
              <button onClick={() => DelHandler(name)}>Del</button>
            </div>
          );
        })}
        <form onSubmit={FormHandler}>
          <div>
            <input
              placeholder="your Name"
              type="text"
              value={Name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="your email"
              type="text"
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
          <button onClick={() => setTotal([])}>Delete All</button>
        </form>
      </div>
    </>
  );
};

export default TodoApp;
