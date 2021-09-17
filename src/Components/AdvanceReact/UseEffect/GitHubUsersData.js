import React, { useEffect, useState } from "react";
import "./GitHubUsers.css";
const GitHubUsersData = () => {
  const Url = "https://api.github.com/users";
  const [Users, setUsers] = useState([""]);
  const UsersData = async () => {
    const GetData = await fetch(Url);
    const Return = await GetData.json();
    setUsers(Return);
  };
  useEffect(() => {
    UsersData();
  }, []);
  return (
    <div>
      <h1>Git Hub Users Data</h1>
      <div className="img-gallary">
        {Users.map((it) => {
          return (
            <div className="img-gallary-container">
              <div>
                <img src={it.avatar_url} />
                <p>{it.id}</p>
                <p>{it.login}</p>
                <p>{it.type}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GitHubUsersData;
