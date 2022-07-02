import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// IMAGE
import userPhoto from "../../assets/img/profile/user_photo.png";
import iconPassword from "../../assets/img/sign-in/pw-icon.svg";

function AccountSet() {
  return (
    <>
      <div class="profile">
        <NavbarSignIn></NavbarSignIn>

        <main class="profile_main d-flex container">
          <div class="profile-left-content">
            <section class="user-info">
              <h1>INFO</h1>
              <div className="d-flex flex-column align-items-center">
                <img src={userPhoto} alt="" />
                <h2>Jonas El Rodriguez</h2>
                <h3>Moviegoers</h3>
                <div className="info-line"></div>
                <button
                  // onClick={handleSignIn}
                  type="submit"
                  class="signIn_btn btn btn-primary mt-4"
                >
                  Logout
                </button>
              </div>
            </section>
          </div>
          <div class="profile-right-content">
            <div className="switch-nav">
              <div className="switch-active">
                <Link to="/profileAccountSet">Account Settings</Link>
              </div>
              <div className="switch-nonactive">
                <Link to="/orderHistory">Order History</Link>
              </div>
            </div>

            <div className="details mt-4">
              <p>Details Information</p>
              <hr />
              <form class="signIn_form details-form mt-5">
                <div className="details-form d-flex">
                  <div class="details-input me-3">
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control" placeholder="Write your first name" />
                  </div>
                  <div class="details-input ms-3">
                    <label class="form-label">E-mail</label>
                    <input type="text" class="form-control" placeholder="Write your email" />
                  </div>
                </div>
                <div className="details-form d-flex">
                  <div class="details-input me-3">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control" placeholder="Write your last name" />
                  </div>
                  <div class="details-input ms-3">
                    <label class="form-label">Phone Number</label>
                    <input type="text" class="form-control" placeholder="Write your phone number" />
                  </div>
                </div>
                <button
                  // onClick={handleSignIn}
                  type="submit"
                  class="signIn_btn btn btn-primary mt-4"
                >
                  Update changes
                </button>
              </form>
            </div>

            <div className="details mt-4 mb-4">
              <p>Account and Privacy</p>
              <hr />
              <form class="signIn_form details-form mt-5">
                <div className="details-form d-flex">
                  <div class="mb-3 signIn_password-input details-input me-3">
                    <label class="form-label">New Password</label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Write your password"
                    />
                    <img class="signIn_icon-pw" src={iconPassword} alt="password icon" />
                  </div>
                  <div class="mb-3 signIn_password-input details-input ms-3">
                    <label class="form-label">Confirm Password</label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Confirm your password"
                    />
                    <img class="signIn_icon-pw" src={iconPassword} alt="password icon" />
                  </div>
                </div>
                <button
                  // onClick={handleSignIn}
                  type="submit"
                  class="signIn_btn btn btn-primary mt-4"
                >
                  Update changes
                </button>
              </form>
            </div>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default AccountSet;
