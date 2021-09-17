import React, { useState } from "react";

const UseStateFilter = () => {
  const [Data, setData] = useState([
    { id: 1, name: "jhon", age: 23, add: "newyork" },
    { id: 2, name: "bob-logan", age: 24, add: "losangles" },
    { id: 3, name: "bob", age: 25, add: "los" },
    { id: 4, name: "logan", age: 26, add: "angles" },
  ]);
  const DeleteItem = (id) => {
    const Return = Data.filter((it) => it.id !== id);
    setData(Return);
  };
  const DeleteAll = () => {
    setData([]);
  };
  return (
    <>
      {Data.map((it) => {
        const name = it.name;
        const age = it.age;
        const add = it.add;
        const id = it.id;
        return (
          <div key={id} onClick={() => DeleteItem(id)}>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{add}</p>
            <button onClick={() => DeleteItem(id)}>Delete Item</button>
            <hr />
          </div>
        );
      })}
      <button onClick={DeleteAll}>Delete All</button>
    </>
  );
};

export default UseStateFilter;
