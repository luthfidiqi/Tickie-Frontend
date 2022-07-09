import "./index.css";
import React from "react";

// Header & Footer
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";
import ebuFoot from "../../assets/img/home/ebu-logo.svg";
import cineoneFoot from "../../assets/img/home/cineone-logo.svg";
import hiflixFoot from "../../assets/img/home/hiflix-logo.svg";
import facebook from "../../assets/img/home/facebook.svg";
import instagram from "../../assets/img/home/instagram.svg";
import twitter from "../../assets/img/home/twitter.svg";
import youtube from "../../assets/img/home/youtube.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content d-flex container">
          <div className="logo">
            <img src={logoTickitz} alt="" />
            <p>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
          </div>
          <div className="explore">
            <h3>Explore</h3>
            <div className="explore-link">
              <a href="/">Home</a>
              <a href="/">List Movie</a>
            </div>
          </div>
          <div className="sponsor">
            <h3>Our Sponsor</h3>
            <div className="sponsor-logo">
              <img src={ebuFoot} alt="" />
              <img src={cineoneFoot} alt="" />
              <img src={hiflixFoot} alt="" />
            </div>
          </div>
          <div className="follow">
            <h3>Follow us</h3>
            <div className="follow-content">
              <div className="follow-list d-flex align-items-center">
                <img src={facebook} alt="" />
                <a target="_blank" href="/">
                  {" "}
                  Tickitz Cinema id{" "}
                </a>
              </div>
              <div className="follow-list d-flex align-items-center">
                <img src={instagram} alt="" />
                <a target="_blank" href="/">
                  {" "}
                  tickitz.id{" "}
                </a>
              </div>
              <div className="follow-list d-flex align-items-center">
                <img src={twitter} alt="" />
                <a target="_blank" href="/">
                  {" "}
                  tickitz.id{" "}
                </a>
              </div>
              <div className="follow-list d-flex align-items-center">
                <img src={youtube} alt="" />
                <a target="_blank" href="/">
                  {" "}
                  Tickitz Cinema id{" "}
                </a>
              </div>
            </div>
            <div className="follow-content-mobile">
              <a target="_blank" href="/">
                <img src="/assets/img/home/facebook.svg" alt="" />
              </a>
              <a target="_blank" href="/">
                <img src="/assets/img/home/instagram.svg" alt="" />
              </a>
              <a target="_blank" href="/">
                <img src="/assets/img/home/twitter.svg" alt="" />
              </a>
              <a target="_blank" href="/">
                <img src="/assets/img/home/youtube.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">© 2020 Tickitz. All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
