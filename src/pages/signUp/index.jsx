import "./index.css";
import React, { useState } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Assets IMG
import logoMobile from "../../assets/img/sign-in/Tickitz-color.svg";
import logoWeb from "../../assets/img/sign-in/tickitz-white.png";
import iconPassword from "../../assets/img/sign-in/pw-icon.svg";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    noTelp: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(form);
      const resultSignup = await axios.post("auth/register", form);
      setIsError(false);
      setMessage(resultSignup.data.msg);
      toast.success("Success Create Account, Please Check Your Email");
      // navigate("/login");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
      toast.error(error.response.data.msg);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ToastContainer />
      <main className="signIn d-flex">
        <div className="signIn_image">
          <img src={logoWeb} alt="tickitz logo" />
          <h1>wait, watch, wow!</h1>
        </div>
        <div className="signIn_content signUp_content">
          <div className="signIn_logo-mobile">
            <img src={logoMobile} alt="" />
          </div>
          <div className="auth-cont">
            <h2>Sign Up</h2>
            <p>Fill your additional details</p>
            <form className="signIn_form signUp_form" onSubmit={handleSubmit} onReset={handleReset}>
              <div className="mb-3">
                <label for="exampleInputFirstName" className="form-label">
                  First Name
                </label>
                <input
                  className="form-control"
                  placeholder="Write your first name"
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputLastName" className="form-label">
                  Last Name
                </label>
                <input
                  className="form-control"
                  placeholder="Write your last name"
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPhoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  placeholder="Write your phone number"
                  type="text"
                  name="noTelp"
                  value={form.noTelp}
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail" className="form-label">
                  Email address
                </label>
                <input
                  className="form-control"
                  placeholder="Write your email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3 signUp_password-input">
                <label for="exampleInputPassword" className="form-label">
                  Password
                </label>
                <input
                  className="form-control"
                  placeholder="Write your password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChangeForm}
                />
                <img className="signUp_icon-pw" src={iconPassword} alt="password icon" />
              </div>
              <button type="submit" className="signIn_btn btn btn-primary">
                Sign Up
              </button>
            </form>
            <div className="signIn_other-input signUp_other-input align-items-center ">
              <Link to="/">
                <p>
                  Already have account?
                  <button className="signIn_click-input"> Sign In </button>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
