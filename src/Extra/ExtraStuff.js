import React from "react";
import logo192 from "../logo192.png";
function ExtraStuff() {
  const Data = [
    {
      id: 1,
      NewName: "New Versions of React Js Book",
      NewAuthor: "Mashoom Khan",
      Img: logo192,
    },
    {
      id: 2,
      NewName: "Javascript Book",
      NewAuthor: "Mashoom Khan",
      Img: logo192,
    },
    {
      id: 3,
      NewName: "Java Book",
      NewAuthor: "Mashoom Khan",
      Img: logo192,
    },
  ];
  return (
    <div>
      {/* <User Name={NewName} Author={NewAuthor} Image={Img} /> */}
      {Data.map((it) => {
        return <User Name={it.NewName} Author={it.NewAuthor} Image={it.Img} />;
      })}
    </div>
  );
}
const User = ({ Name, Author, Image }) => {
  return (
    <div>
      <p>{Name}</p>
      <p>{Author}</p>
      <img src={Image} />
    </div>
  );
};
export default ExtraStuff;
