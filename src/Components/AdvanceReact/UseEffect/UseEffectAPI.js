import React, { useState, useEffect } from "react";

const UseEffectAPI = () => {
  const [Users, setUsers] = useState([""]);
  const UsersData = async () => {
    const Return = await fetch("https://api.github.com/users");
    setUsers(await Return.json());
  };
  useEffect(() => {
    UsersData();
  }, []);
  return (
    <>
      <h2>Git Hub Users</h2>
      {Users.map((it) => {
        return (
          <div>
            <p>{it.login}</p>
            <img src={it.avatar_url} style={{ height: 200, width: 200 }} />
          </div>
        );
      })}
    </>
  );
};

export default UseEffectAPI;
