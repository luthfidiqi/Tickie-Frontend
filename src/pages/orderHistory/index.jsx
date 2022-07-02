import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// IMAGE
import userPhoto from "../../assets/img/profile/user_photo.png";
import ebvLogo from "../../assets/img/history/ebv.png";

function OrderHistory() {
  const navigate = useNavigate();
  const handleTicket = () => {
    navigate("../ticket");
  };
  return (
    <>
      <div class="profile">
        <NavbarSignIn></NavbarSignIn>

        <section className="switch-mobile">
          <div className="switch-nav">
            <div className="switch-nonactive">
              <Link to="/accountSet">Account Settings</Link>
            </div>
            <div className="switch-active">
              <Link to="/orderHistory">Order History</Link>
            </div>
          </div>
        </section>

        <main class="profile_main d-flex container">
          <div class="profile-left-content disable-mobile">
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
            <div className="switch-nav mb-4 disable-mobile">
              <div className="switch-nonactive">
                <Link to="/accountSet">Account Settings</Link>
              </div>
              <div className="switch-active">
                <Link to="/orderHistory">Order History</Link>
              </div>
            </div>

            <div className="order-ticket">
              <div className="order-top d-flex justify-content-between">
                <div className="order-top-text">
                  <p>Tuesday, 07 July 2020 - 04:30pm</p>
                  <h4>Spider-Man: Homecoming</h4>
                </div>
                <img src={ebvLogo} alt="" />
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <button onClick={handleTicket} type="submit" class="btn-ticket-active mt-4">
                  Ticket in active
                </button>
                <button
                  onClick={handleTicket}
                  type="submit"
                  class="ticket-details mt-4 disable-mobile"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default OrderHistory;
