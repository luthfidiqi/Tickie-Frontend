import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";

// Assets IMG
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";
import avatar from "../../assets/img/movie-details/avatar.png";
// import search from "../../assets/img/movie-details/search.svg";

function NavbarSignIn() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="../home">
            <img src={logoTickitz} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mobile-navbar" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="../home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="../viewAllMovie">
                  List Movie
                </Link>
              </li>
              <li className="nav-item disable-web">
                <Link className="nav-link active" aria-current="page" to="../accountSet">
                  Profile
                </Link>
              </li>
              <li className="nav-item disable-web">
                <div className="nav-link active">
                  <p>© 2020 Tickitz. All Rights Reserved.</p>
                </div>
              </li>
            </ul>

            <div className="nav-profile d-flex disable-mobile">
              {/* <img src={search} alt="" /> */}
              <Link to="../accountSet">
                <img
                  src={
                    user.data.image
                      ? `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/${user.data.image}`
                      : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                  }
                  alt=""
                  className="profile__profileImg"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarSignIn;
