import "./index.css";
import React from "react";

// Assets IMG
import logoMobile from "../../assets/img/sign-in/Tickitz-color.svg";
import logoForgot from "../../assets/img/sign-in/forgot-logo.png";
import step from "../../assets/img/sign-in/step.png";
import iconPassword from "../../assets/img/sign-in/pw-icon.svg";

import { useNavigate } from "react-router-dom";

function UpdatePass() {
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate("../signIn");
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
            <h2>Fill your complete password</h2>
            <p>set your new password</p>
            <form className="signIn_form">
              <div class="mb-3 signIn_password-input">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Write your password"
                />
                <img class="signIn_icon-pw" src={iconPassword} alt="password icon" />
              </div>
              <div class="mb-3 signIn_password-input">
                <label for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Write your confirm password"
                />
                <img class="signIn_icon-pw" src={iconPassword} alt="password icon" />
              </div>
              <button
                onClick={handleUpdate}
                type="submit"
                className="signIn_btn btn btn-primary mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default UpdatePass;
