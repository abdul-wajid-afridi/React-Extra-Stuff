import React, { createContext, useContext, useReducer, useState } from "react";
export const contextData = createContext();
let n = 0;
console.log(n++);
console.log(++n);
console.log(n);

const initialState = [
  {
    Name: "my name",
    Password: "password",
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
      break;

    default:
      break;
  }
};
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const HandleForm = (e) => {
    e.preventDefault();
    const Data = {
      Name,
      Password,
    };
    dispatch({ type: "add", payload: Data });
    setName("");
    setPassword("");
  };
  return (
    <>
      <contextData.Provider value={"{ ...state, Name, Password }"}>
        {children}
      </contextData.Provider>
      <form>
        <input
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={HandleForm}>Save</button>
      </form>
      <div>
        {state.map((it) => {
          return (
            <div>
              <p>{it.Name}</p>
              <p>{it.Password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export const useGlobalContext = () => {
  return useContext(contextData);
};
