import "./index.css";
import React from "react";

// Assets IMG
import logoMobile from "../../assets/img/sign-in/Tickitz-color.svg";
import logoForgot from "../../assets/img/sign-in/forgot-logo.png";
import step from "../../assets/img/sign-in/step.png";

import { useNavigate } from "react-router-dom";

function Forgot() {
  const navigate = useNavigate();
  const handleForgot = () => {
    navigate("../updatePass");
  };
  return (
    <>
      <main className="signIn d-flex">
        <div className="forgot_image">
          <img className="mb-5" src={logoForgot} alt="tickitz logo" />
          <h1 className="mb-4">Lets reset your password</h1>
          <h5>To be able to use your account again, please complete the following steps.</h5>
          <img className="mt-5" src={step} alt="tickitz logo" />
        </div>
        <div className="signIn_content">
          <div className="signIn_logo-mobile">
            <img src={logoMobile} alt="" />
          </div>
          <div className="forgot-cont">
            <h2>Fill your complete email</h2>
            <p>we'll send a link to your email shortly</p>
            <form className="signIn_form">
              <div className="mb-5">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Write your email"
                />
              </div>
              <button
                onClick={handleForgot}
                type="submit"
                className="signIn_btn btn btn-primary mt-5"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Forgot;
