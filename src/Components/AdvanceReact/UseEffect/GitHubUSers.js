import React, { useEffect, useState } from "react";
const GitHubUSers = () => {
  const [Users, setUsers] = useState([""]);
  const UsersData = async () => {
    const Data = await fetch("https://api.github.com/users");
    const GotData = await Data.json();
    setUsers(GotData);
  };
  useEffect(() => {
    setTimeout(() => {
      UsersData();
    }, 2000);
  }, []);
  return (
    <div>
      <p>GitHub Users</p>
      {Users.map((it) => {
        const { login, id, avatar_url, type } = it;
        return (
          <div>
            <p>{login}</p>
            <p>{type}</p>
            <img src={avatar_url} style={{ height: 300, width: 300 }} />
          </div>
        );
      })}
    </div>
  );
};

export default GitHubUSers;
