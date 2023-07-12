import React from "react";
import Logo from "../../img/logo-1.png";
import Input from "../Input";

const Wrapper = ({ title, children, bottomSection }) => {
  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-section">
              <div className="form-inner">
                <a href="login-wrapper.html" className="logo">
                  <img src={Logo} alt="logo" />
                </a>
                <h3>{title}</h3>
                {children}
                <div className="clearfix"></div>
                {bottomSection}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
