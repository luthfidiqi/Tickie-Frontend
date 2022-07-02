import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

// Assets IMG
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";
import avatar from "../../assets/img/movie-details/avatar.png";
// import search from "../../assets/img/movie-details/search.svg";

function NavbarSignIn() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link class="navbar-brand" to="../home">
            <img src={logoTickitz} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mobile-navbar" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="../home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="../viewAllMovie">
                  List Movie
                </Link>
              </li>
              <li class="nav-item disable-web">
                <Link class="nav-link active" aria-current="page" to="../accountSet">
                  Profile
                </Link>
              </li>
              <li class="nav-item disable-web">
                <div class="nav-link active">
                  <p>© 2020 Tickitz. All Rights Reserved.</p>
                </div>
              </li>
            </ul>

            <div class="d-flex disable-mobile">
              {/* <img src={search} alt="" /> */}
              <Link to="../accountSet">
                <img class="avatar" src={avatar} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarSignIn;
