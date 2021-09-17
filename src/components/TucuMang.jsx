import React from "react";
import Tucumanga from "../assets/img/TucuManga.PNG"

const TucuMang = () => {
  return (
    <div className="row">
      <h1 className="mb-3 mt-3 ">TucuManga</h1>
      <img
        className="img-proyect mb-3"
        src={Tucumanga}
        alt=""
      />
      <p className="mb-4">
      Comprehensive JavaScript Project, Module 2. <br />
      It is a manga page, where the 'administrator' user, from the applications made in Js, can register and through his account, he can enter the manga and edit them. <br />
       And by the user, only the uploaded content can be seen.
      </p>
    </div>
  );
};

export default TucuMang;
