import React from "react";

function Card(props) {
  const { id, name, category, image } = props.data;
  return (
    <>
      <div className="showing-card-active">
        <img
          src={
            image
              ? `${process.env.REACT_APP_URL_CLOUDINARY}/${image}`
              : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="showing-card-content">
          <h3>{name.length >= 10 ? name.substring(0, 10) + "..." : name}</h3>
          <p>{category}</p>
          <button
            className="d-flex btn-showing btn btn-outline-primary"
            onClick={() => props.handleDetail(id)}
          >
            Detail
          </button>
        </div>
      </div>
    </>
  );
}

Card.defaultProps = {
  id: "1",
  name: "movie",
  category: "Default Category"
};

export default Card;
