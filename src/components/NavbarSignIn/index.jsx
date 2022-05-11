import "./index.css";
import React from "react";

// Assets IMG
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";
import avatar from "../../assets/img/movie-details/avatar.png";
import search from "../../assets/img/movie-details/search.svg";

function NavbarSignIn() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="../home"
          ><img src={logoTickitz} alt=""
        /></a>
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../home"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"
                >List Movie</a
              >
            </li>
          </ul>
          <a href="../profile_accountSet">
          <div class="d-flex">
            <img src={search} alt="" />
            <img
              class="avatar"
              src={avatar}
              alt=""
            />
          </div>
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavbarSignIn;
