import React, { useReducer, useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload.Forms];
      break;
    case "delete":
      return state.filter((it) => it.Id !== action.payload.id);
    default:
      break;
  }
};
const ReducerTodos = () => {
  const [state, dispatch] = useReducer(reducer, [
    {
      Id: "1",
      Name: "my name",
      Email: "email@gail.com",
    },
  ]);
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const FormData = (e) => {
    e.preventDefault();
    const Forms = {
      Id,
      Name,
      Email,
    };
    dispatch({ type: "add", payload: { Forms } });
    setId("");
    setName("");
    setEmail("");
  };
  return (
    <div>
      <div>
        <form>
          <input
            value={Id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
          />
          <input
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="file"
            onChange={(e) => setEmail(URL.createObjectURL(e.target.files[0]))}
          />
          <button type="submit" onClick={FormData}>
            Submit
          </button>
        </form>
        <ul>
          {state.map((it) => {
            return (
              <div>
                <li>{it.Id}</li>
                <li>{it.Name}</li>
                <img src={it.Email} />
                <button
                  onClick={() =>
                    dispatch({ type: "delete", payload: { id: it.Id } })
                  }
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReducerTodos;
