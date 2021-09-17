import React from "react";
import img2 from "../images/img2.jpg";
const Images = ({ author, name, img }) => {
  return (
    <div className="container">
      <div className="row">
        <div className=" m-4 col-md-4">
          <img src={img} style={{ width: 200 }} />
          <p>{author}</p>
          <h1>{name}</h1>
        </div>

        <div className=" m-4 col-md-4">
          <img src={img} style={{ width: 200 }} />
          <p>{author}</p>
          <h1>{name}</h1>
        </div>

        {/* <div className=" m-4 col-md-4">
          <img src={img2} style={{ width: 400 }} />
          <p>image is good</p>
          <h1>click to buy</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Images;
