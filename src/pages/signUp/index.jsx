import "./index.css";

// Assets IMG
import logoMobile from "../../assets/img/sign-in/Tickitz-color.svg";
import logoWeb from "../../assets/img/sign-in/tickitz-white.png";
import iconPassword from "../../assets/img/sign-in/pw-icon.svg";

function SignUp() {
  return (
    <>
      <main class="signIn d-flex">
        <div class="signIn_image">
          <img src={logoWeb} alt="tickitz logo" />
          <h1>wait, watch, wow!</h1>
        </div>
        <div class="signIn_content signUp_content">
          <div class="signIn_logo-mobile">
            <img src={logoMobile} alt="" />
          </div>
          <div className="auth-cont">
            <h2>Sign Up</h2>
            <p>Fill your additional details</p>
            <form class="signIn_form signUp_form">
              <div class="mb-3">
                <label for="exampleInputFirstName" class="form-label">
                  First Name
                </label>
                <input
                  type="FirstName"
                  name="FirstName"
                  class="form-control"
                  id="exampleInputFirstName"
                  placeholder="Write your first name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputLastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="LastName"
                  name="LastName"
                  class="form-control"
                  id="exampleInputLastName"
                  placeholder="Write your last name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPhoneNumber" class="form-label">
                  Phone Number
                </label>
                <input
                  type="PhoneNumber"
                  name="PhoneNumber"
                  class="form-control"
                  id="exampleInputPhoneNumber"
                  placeholder="Write your phone number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail"
                  placeholder="Write your email"
                />
              </div>
              <div class="mb-3 signUp_password-input">
                <label for="exampleInputPassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword"
                  placeholder="Write your password"
                />
                <img class="signUp_icon-pw" src={iconPassword} alt="password icon" />
              </div>
              <button type="submit" class="signIn_btn btn btn-primary">
                Sign Up
              </button>
            </form>
            <div class="signIn_other-input signUp_other-input align-items-center ">
              <a href="../signIn">
                <p>
                  Already have account?
                  <button class="signIn_click-input"> Sign In </button>
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
