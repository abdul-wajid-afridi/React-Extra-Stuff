import React, { useContext, useReducer, useState } from "react";
import File1, { SendForm } from "./File1";
import { CounterContext } from "./UseContextHook";
const initialState = [];
const reducer = (state, action) => {
 
  switch (action.type) {
    case "add":
      return [...state, action.payload];
      break;

    default:
      break;
  }
};
const File2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const {id,name,type,img} = useContext(CounterContext)
  const FormHandler = (e) => {
    e.preventDefault();
    console.log("Form Submited");
    setName("");
    setEmail("");
    const Data = { Name, Email };
    dispatch({ type: "add", payload: Data });
  };

  return (
    <div>
      <h3>File2</h3>
      {/* the file 1 data API name is SendForm */}
      <div>
      <img src={img} style={{width:300,height:400}}/>
<p>{id}</p>
<p>{name}</p>
<p>{type}</p>
      </div>
      <form>
        <input
          placeholder="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setEmail(URL.createObjectURL(e.target.files[0]))}
        />
        <button disabled={!Email} onClick={FormHandler}>
          SUBMIT
        </button>
      </form>
      <p>
        {state.map((it) => {
          const Name = it.Name;
          const Email = it.Email;
          {
            /* return<div>
                    <p>{it.Name}</p>
                    <img src={it.Email} style={{height:200,width:300}}/>
                </div> */
          }
          return (
            <CounterContext.Provider value={{ Name, Email }}>
              <File1 />
            </CounterContext.Provider>
          );
        })}
      </p>
    </div>
  );
};

export default File2;
