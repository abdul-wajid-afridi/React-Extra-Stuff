import React from "react";
import ReUse from "./ReUse";
import home from "../../../images/home.jpg";
const PropsData = () => {
  const Data = [
    {
      id: 1,
      img: home,
      name: "my name",
      title: "title name",
    },
    {
      id: 2,
      img: home,
      name: "my name",
      title: "title name",
    },
    {
      id: 3,
      img: home,
      name: "my name",
      title: "title name",
    },
  ];
  return (
    <div className=" container-fluid">
      {Data.map((it) => {
        return (
          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail">
                <a href={it.img} target="_blank">
                  <img src={it.img} alt="Lights" style={{ width: "100%" }} />
                  <div className="caption">
                    <p>{it.title}</p>
                    <h1>{it.name}</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropsData;
