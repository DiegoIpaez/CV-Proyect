import React from "react";

const CvSection = () => {
  return (
    <div className="col-md-8 mt-1">
      <div className="container cv-section mb-5">
        <div className="row pt-4">
          <h3>EDUCATION:</h3>
          <span>
            <b>Programador Full Stack - 2021</b>
          </span>
          <span>
            Rolling Code School, San miguel de Tucuman, Argentina{" "}
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <br />
          <br />
          <br />
          <hr />
        </div>
        <div className="row mt-3">
          <h3>EXPERIENCE:</h3>
          <span className="ms-1 mb-5">-</span>
          <hr />
        </div>
        <div className="row mt-3">
          <h3>MY SKILLS:</h3>

          <span className="col-1">
            <i className="fab fa-css3-alt fa-3x mt-3 ps-4"></i>
          </span>
          <input
            id="slider"
            className="col-10 offset-md-1 mt-3 ms-5"
            type="range"
            min="0"
            max="100"
            value="62"
          />
          <span className="col-1">
            <i className="fab fa-html5 fa-3x mt-4 ps-4"></i>
          </span>
          <input
            id="slider"
            className="col-10 mt-3 ms-5"
            type="range"
            min="0"
            max="100"
            value="87"
          />
          <span className="col-1">
            <i className="fab fa-react fa-3x mt-4 ps-3"></i>
          </span>
          <input
            id="slider"
            className="col-10 mt-3 ms-5"
            type="range"
            min="0"
            max="100"
            value="72"
          />
          <span className="col-1">
            <i className="fab fa-js-square fa-3x mt-4 ps-4"></i>
          </span>
          <input
            id="slider"
            className="col-10 mt-3 ms-5"
            type="range"
            min="0"
            max="100"
            value="66"
          />
          <span className="col-1">
            <i className="fab fa-bootstrap fa-3x mt-4 mb-4 ps-3"></i>
          </span>
          <input
            id="slider"
            className="col-10 mt-3 ms-5"
            type="range"
            min="0"
            max="100"
            value="99"
          />

          <hr />
          <span className="mb-3"></span>
        </div>
      </div>
    </div>
  );
};

export default CvSection;
