import React from "react";
import { Link } from "react-router-dom";

// Assets IMG
import spiderMan from "../../assets/img/home/spider-man.png";

function CardHome(props) {
    
    const { id, name, category } = props.data;
    const image = "vqvzjbe2sk1urzt5hgkx.png";

  return (
    <>
    <div class="showing-card-active">
        <img
        src={
          image
            ? `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/Tickitz/movie/${image}`
            : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
        }
        className="card-img-top"
        alt="..."
        />
        {/* <span>img : {image}</span> */}
        <div class="showing-card-content">
            <h3>{name}</h3>
            <p>{category}</p>
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
    data: {
      id: "",
      name: "",
      category: ""
    }
  };

export default CardHome;
