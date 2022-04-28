import React from "react";
import { Link } from "react-router-dom";

// Assets IMG
import spiderMan from "../../assets/img/home/spider-man.png";

function CardHome(props) {
  return (
    <>
    <div class="showing-card-active">
        <img src={spiderMan} alt="" />
        <div class="showing-card-content">
            <h3>Spider-Man</h3>
            <p>Acion, Adventure, Sci-FI</p>
            <Link to="../movieDetails">
            <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="/"
            >
            Details
            </a>
            </Link>
        </div>
    </div>
    </>
  );
}

CardHome.defaultProps = {
    category: "Default Category",
    // data: {
    //   id: "",
    //   name: "",
    //   category: ""
    // }
  };

export default CardHome;
