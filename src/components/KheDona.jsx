import React from "react";
import KheDonaiMG from "../assets/img/KheDona.PNG"

const KheDona = () => {
  return (
    <div className="row">
      <h1 className="mb-3 mt-3">KheDona</h1>
      <img
        className="img-proyect mb-3"
        src={KheDonaiMG}
        alt=""
      />
      <p className="mb-4">
      It is an integral Project based on HTML, CSS and Bootstrap, of Module 1. In which we deploy our knowledge in design and positioning of the elements (flexbox). The design of the page consists of an Online Commerce for the sale of donuts, with its carousel, its search engine, its sections and its products.
      </p>
    </div>
  );
};

export default KheDona;
