import "./index.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { getUserById } from "../../stores/actions/user";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Assets IMG
import logoMobile from "../../assets/img/sign-in/Tickitz-color.svg";
import logoWeb from "../../assets/img/sign-in/tickitz-white.png";
import iconPassword from "../../assets/img/sign-in/pw-icon.svg";

function SignIn() {
  document.title = "Tickie";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
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
      const resultLogin = await axios.post("auth/login", form);
      setIsError(false);
      setMessage(resultLogin.data.msg);
      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      localStorage.setItem("id", resultLogin.data.data.id);
      await dispatch(getUserById(resultLogin.data.data.id));
      navigate("home");
      toast.success("Success Login");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
      toast.error(error.response.data.msg);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("Reset Form");
  };

  return (
    <>
      <ToastContainer />
      <main className="signIn d-flex">
        <div className="signIn_image">
          <img src={logoWeb} alt="tickitz logo" />
          <h1>wait, watch, wow!</h1>
        </div>
        <div className="signIn_content">
          <div className="signIn_logo-mobile">
            <img src={logoMobile} alt="" />
          </div>
          <div className="auth-cont">
            <h2>Sign In</h2>
            <p>Sign in with your data that you entered during your registration</p>
            <form className="signIn_form" onSubmit={handleSubmit} onReset={handleReset}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Write your email"
                  value={form.email}
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3 signIn_password-input">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Write your password"
                  value={form.password}
                  onChange={handleChangeForm}
                />
                <img className="signIn_icon-pw" src={iconPassword} alt="password icon" />
              </div>
              <button type="submit" className="signIn_btn btn btn-primary">
                Sign In
              </button>
            </form>
            <div className="signIn_other-input">
              <Link to="forgot">
                <p>
                  Forgot your password?
                  <button className="signIn_click-input"> Reset now </button>
                </p>
              </Link>
              <Link to="signUp">
                <p>
                  Don’t have an account?
                  <button className="signIn_click-input"> Sign Up </button>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignIn;
