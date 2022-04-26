import "./index.css";

// Assets IMG
import logoMobile from "../../assets/img/sign-in/Tickitz-color.svg";
import logoWeb from "../../assets/img/sign-in/tickitz-white.png";
import iconPassword from "../../assets/img/sign-in/pw-icon.svg";

function SignIn() {
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
        <div>
          <h2>Sign In</h2>
          <p>
            Sign in with your data that you entered during your registration
          </p>
          <form class="signIn_form">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Write your email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Write your password"
              />
              <img
                class="signIn_icon-pw"
                src={iconPassword}
                alt="password icon"
              />
            </div>
            <a
              href="../home"
              type="submit"
              class="signIn_btn btn btn-primary"
            >
              Sign In
            </a>
          </form>
          <div class="signIn_other-input">
            <p>
              Forgot your password?
              <button class="signIn_click-input"> Reset now </button>
            </p>
            <p>
              Don’t have an account?
              <button class="signIn_click-input"> Sign Up </button>
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default SignIn;
