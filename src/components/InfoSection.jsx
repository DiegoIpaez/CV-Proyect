import React from "react";

const InfoSection = () => {
  return (
    <div className="col-md-4">
      <div className="container text-white info-seccion mb-5">
        <div className="row text-center">
          <h1 className="mb-2 pt-4">
            <b>DIEGO PAEZ</b>
          </h1>

          <span> Full Stack Developer</span>
        </div>
        <div className="row">
          <img
            src="https://png.pngtree.com/element_our/png/20180918/letter-d-logo-photography-vector-png_100110.jpg"
            className="perfil-img"
            alt=""
          />
        </div>
        <div className="row pt-5 pb-3 text-center capa">
          <h5>
            <b>ABOUT ME</b>
          </h5>
          <p>Web programming student constantly learning. </p>
        </div>
        <div className="row text-center">
          <span className="mt-4 capa pt-1 pb-1">
            <i className="fas fa-envelope"></i> diegoipaez2000@gmail.com
          </span>
          <span className="mt-4 capa pt-1 pb-1">
            <i className="fas fa-phone"></i><span> +54 381 613 6233</span> 
          </span>
        </div>
        <div className="row mt-5 pt-3 pb-4 capa">
          <h4 className="text-center mb-4">LANGUAGES</h4>
          <span className="ps-5"> English</span>
          <span className="ps-5 mt-2"> Spanish</span>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default InfoSection;
