import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import "./index.css";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// IMAGE
import ticketLogo from "../../assets/img/history/ticket-logo.png";
import qrcode from "../../assets/img/history/qrcode.png";

function Ticket() {
  return (
    <>
      <div class="ticket-cont">
        <NavbarSignIn></NavbarSignIn>
        <div className="ticket-box container d-flex flex-column mt-5 mb-5 align-items-center justify-content-center">
          <h1>Proof of Payment</h1>
          <div className="ticket-main-box d-flex mt-4 mb-4">
            <div className="ticket-info-box">
              <div className="top d-flex justify-content-between align-items-center">
                <img src={ticketLogo} alt="" />
                <p>Admit One</p>
              </div>
              <div className="down">
                <h6>Movie</h6>
                <p>Spider-Man: Homecoming</p>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="mt-4">
                      <h6>Date</h6>
                      <p>07 July</p>
                    </div>
                    <div className="mt-4">
                      <h6>Count</h6>
                      <p>3 pieces</p>
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <h6>Time</h6>
                      <p>02:00pm</p>
                    </div>
                    <div className="mt-4">
                      <h6>Seats</h6>
                      <p>C4, C5, C6</p>
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <h6>Category</h6>
                      <p>Action</p>
                    </div>
                    <div className="mt-4">
                      <h6>Price</h6>
                      <p>$30.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="qrcode-box">
              <div className="top disable-mobile">
                <img src={ticketLogo} alt="" />
              </div>
              <div className="down">
                <img src={qrcode} alt="" />
              </div>
            </div>
          </div>
          <button
            // onClick={handleSignIn}
            type="submit"
            class="btn-download btn btn-primary mt-4"
          >
            Download
          </button>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Ticket;
