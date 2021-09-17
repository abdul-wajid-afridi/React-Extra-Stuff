import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((i) => i.id !== action.id);
    default:
      break;
  }
};
const initialState = [{ id: 1, Name: "ab", Email: "ab@gmail.com" }];
const ReducerTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [id, setid] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  console.log(state);
  const FormSubmit = (e) => {
    e.preventDefault();
    const Forum = {
      id,
      Name,
      Email,
    };
    dispatch({ type: "add", payload: Forum });
    setid("");
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form>
        <input value={id} onChange={(e) => setid(e.target.value)} />
        <input value={Name} onChange={(e) => setName(e.target.value)} />
        <input value={Email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={FormSubmit}>Submit</button>
      </form>
      <ul>
        {state.map((data) => {
          const id = data.id;
          const Del = { id };
          return (
            <div key={data.id}>
              <p>{data.id}</p>
              <h3>{data.Email}</h3>
              <h3>{data.Name}</h3>
              <button onClick={() => dispatch({ type: "delete", id: data.id })}>
                DELETE
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ReducerTodos;
