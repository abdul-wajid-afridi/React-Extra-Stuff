import React from "react";
import home from "../images/home.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

function ImgCard({ img, Author, Title }) {
  return (
    <div className="container">
      <div className="card card-columns">
        <div className="card-body">
          <img className=" card-img-top " style={{ width: 300 }} src={img} />
          <h1 className="card-title">{Author}</h1>
          <p className="card-text">{Title}</p>
        </div>
      </div>
      <div className="card card-columns">
        <div className="card-body">
          <img className=" card-img" style={{ width: 300 }} src={img} />
          <h1 className="card-title">{Author}</h1>
          <p className="card-text">{Title}</p>
        </div>
      </div>
      <div className="card card-columns">
        <div className="card card-body ">
          <img style={{ width: 300 }} src={img} className=" card-img-top" />
          <p className="card-title">{Author}</p>
          <p className="card-text">{Title}</p>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
