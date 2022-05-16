import React from "react";
import PropTypes from "prop-types";

// Assets IMG
import spiderMan from "../../assets/img/home/spider-man.png";

function CardHome(props) {
    
    const { id, name, category, image } = props.data;
    // const image = "vqvzjbe2sk1urzt5hgkx.png";

  return (
    <>
    <div class="showing-card-active"> 
        <img
        src={
          image
            ? `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/${image}`
            : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
        }
        className="card-img-top"
        alt="..."
        />
        {/* <span>img : {image}</span> */}
        <div class="showing-card-content">
            <h3>{name}</h3>
            <p>{category}</p>
            <button 
            class="d-flex btn-showing btn btn-outline-primary"
            onClick={() => props.handleDetail(id)}>
              Detail
            </button>
            {/* <Link to="../movieDetails">
            <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="/"
            >
            Details
            </a>
            </Link> */}
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
