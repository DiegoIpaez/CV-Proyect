import React from "react";
import BitCoin from "../components/BitCoin";
import KheDona from "../components/KheDona";
import TucuMang from "../components/TucuMang";

const MyProyects = () => {
  return (
    <div className="body pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="container proyects-card mb-3 text-white">
              <KheDona />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="container proyects-card mb-3 text-white">
              <TucuMang />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="container proyects-card mb-3 text-white">
              <BitCoin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProyects;
