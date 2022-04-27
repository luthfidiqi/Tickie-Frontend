import "./index.css";
import React from "react";

// Nav
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";

function NavbarSignUp() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/"
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
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"
                >List Movie</a
              >
            </li>
          </ul>
          <a
            class="d-flex btn-sign-up btn btn-primary"
            aria-current="page"
            href="../signIn"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavbarSignUp;