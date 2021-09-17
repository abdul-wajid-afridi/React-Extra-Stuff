import React from "react";
import home from "../../../images/home.jpg";
const ReUse = ({ img, title, name }) => {
  return (
    // <div className=" container">
    //   {/* <div className="row">
    //     <div className="col-md-4">
    //       <div className="thumbnail">
    //         <img src={img} style={{ width: "100%" }} />
    //         <div className="caption">
    //           <p>{name}</p>
    //           <h1>{title}</h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    //   <div className="row">
    //     <div className="col-md-4">
    //       <div className="thumbnail">
    //         <img src={home} style={{ width: "100%" }} />
    //         <div className="caption">
    //           <p>name</p>
    //           <h1>title</h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="col-md-4">
    //     <div className="thumbnail">
    //       <img src={home} style={{ width: "100%" }} />
    //       <div className="caption">
    //         <p>name</p>
    //         <h1>title</h1>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="col-md-4">
    //     <div className="thumbnail">
    //       <img src={home} style={{ width: "100%" }} />
    //       <div className="caption">
    //         <p>name</p>
    //         <h1>title</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href={img} target="_blank">
              <img src={img} alt="Lights" style={{ width: "100%" }} />
              <div className="caption">
                <p>{title}</p>
                <h1>{name}</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReUse;
