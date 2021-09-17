import React from "react";
import crypto from "../assets/img/Cryto.PNG"

const BitCoin = () => {
  return (
    <div className="row">
      <h1 className="mb-3 mt-3 ">BitCoin</h1>
      <img
        className="img-proyect mb-3"
        src={crypto}
        alt="img-crypto"
      />
      <p className="mb-4">
      Practice with React. <br />
       It is a cryptocurrency application, made with
        an encryption API, where we can search all the cryptographic currencies of the
        market, and be able to see them on a board where we will see the ranking. Besides that, we have a button where we can update the
        crytos data.
      </p>
    </div>
  );
};

export default BitCoin;
