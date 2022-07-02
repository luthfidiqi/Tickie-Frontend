import "./index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

// Assets IMG
import logoMobile from "../../assets/img/sign-in/Tickitz-color.svg";
import logoWeb from "../../assets/img/sign-in/tickitz-white.png";
import iconPassword from "../../assets/img/sign-in/pw-icon.svg";

function SignIn() {
  const navigate = useNavigate();
  // const handleSignIn = () => {
  //   navigate("../home");
  // };

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (event) => {
    // console.log("User sedang mengetik");
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // console.log("Submit Login");
      // Input = email password di siapkan
      // console.log(form);
      // Proses = memanggil axios
      const resultLogin = await axios.post("auth/login", form);
      // proses get data user by id
      //   const resultUser = await axios.get(`user/${resultLogin.data.data.id}`)
      const resultUser = [
        {
          id: 1,
          name: "Luthfi",
          role: "admin"
        }
      ];
      // console.log(resultLogin);
      // Output = suatu keadaan yang dapat diinfokan ke user bahwa proses sudah selesai
      setIsError(false);
      setMessage(resultLogin.data.msg);
      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      localStorage.setItem("dataUser", JSON.stringify(resultUser[0]));
      navigate("../home");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("Reset Form");
  };

  return (
    <>
      <main class="signIn d-flex">
        <div class="signIn_image">
          <img src={logoWeb} alt="tickitz logo" />
          <h1>wait, watch, wow!</h1>
        </div>
        <div class="signIn_content">
          <div class="signIn_logo-mobile">
            <img src={logoMobile} alt="" />
          </div>
          <div className="auth-cont">
            <h2>Sign In</h2>
            <p>Sign in with your data that you entered during your registration</p>
            <form class="signIn_form" onSubmit={handleSubmit} onReset={handleReset}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Write your email"
                  value={form.email}
                  onChange={handleChangeForm}
                />
              </div>
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
                  value={form.password}
                  onChange={handleChangeForm}
                />
                <img class="signIn_icon-pw" src={iconPassword} alt="password icon" />
              </div>
              {/* Alert */}
              {!message ? null : isError ? (
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              ) : (
                <div className="alert alert-primary" role="alert">
                  {message}
                </div>
              )}
              <button
                // onClick={handleSignIn}
                type="submit"
                class="signIn_btn btn btn-primary"
              >
                Sign In
              </button>
            </form>
            <div class="signIn_other-input">
              <a href="../forgot">
                <p>
                  Forgot your password?
                  <button class="signIn_click-input"> Reset now </button>
                </p>
              </a>
              <a href="../signUp">
                <p>
                  Don’t have an account?
                  <button class="signIn_click-input"> Sign Up </button>
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignIn;
