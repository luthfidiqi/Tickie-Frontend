import "./index.css";
import React from "react";

// Nav
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";

function NavbarSignUp() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logoTickitz} alt="" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  List Movie
                </a>
              </li>
            </ul>
            <a className="d-flex btn-sign-up btn btn-primary" aria-current="page" href="../signIn">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarSignUp;
