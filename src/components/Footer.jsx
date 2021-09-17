import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row pt-5 pb-5 text-center">
          <div className="col mt-3">
          <span>D.Paez_Dev © 2021 - 2021</span> 
          </div>
          <div className="col">
            You can also see my profile of <b>Linked-In</b>:
            <h6>https://www.linkedin.com/in/diego-ivan-paez-baa513219/</h6>
          </div>
          <div className="col">
            <h5>Follow me:</h5>
            <i className="fab fa-facebook-square fa-2x pe-2"></i>
            <i className="fab fa-instagram-square fa-2x pe-2"></i>
            <i className="fab fa-twitter-square fa-2x pe-2"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
