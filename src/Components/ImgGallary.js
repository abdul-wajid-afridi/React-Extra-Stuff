import React from "react";
import home from "../images/home.jpg";
function ImgGallary(props) {
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href={home} target="_blank">
              <img src={home} alt="Lights" style={{ width: "100%" }} />
              <div className="caption">
                <p>
                  Lorem ipsum donec id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href={home} target="_blank">
              <img src={home} alt="Nature" style={{ width: "100%" }} />
              <div className="caption">
                <p>
                  Lorem ipsum donec id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href={home} target="_blank">
              <img src={home} alt="Fjords" style={{ width: "100%" }} />
              <div className="caption">
                <p>
                  Lorem ipsum donec id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href={home} target="_blank">
              <img src={home} alt="Lights" style={{ width: "100%" }} />
              <div className="caption">
                <p>
                  Lorem ipsum donec id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href={home} target="_blank">
              <img src={home} alt="Nature" style={{ width: "100%" }} />
              <div className="caption">
                <p>
                  Lorem ipsum donec id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="img-thumbnail">
            <a
              href={home}
              className=" img-thumbnail img-thumbnail"
              target="_blank"
            >
              <img src={home} alt="Fjords" style={{ width: "100%" }} />
              <div className="caption">
                <p>
                  Lorem ipsum donec id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgGallary;
