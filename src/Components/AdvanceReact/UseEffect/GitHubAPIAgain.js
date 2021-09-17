import React, { useEffect, useState } from "react";

const GitHubAPIAgain = () => {
  const [Users, setUsers] = useState([""]);
  const UserData = async () => {
    try {
      const Data = await fetch("https://api.github.com/users");
      const GetData = await Data.json();
      setUsers(GetData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    UserData();
  }, []);
  return (
    <>
      <div>
        {Users.map((it) => {
          const { login, avatar_url, id, type } = it;
          return (
            <div key={id}>
              <p>{login}</p>
              <p>{type}</p>
              <img src={avatar_url} style={{ height: 300, width: 300 }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GitHubAPIAgain;
