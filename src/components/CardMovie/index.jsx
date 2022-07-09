import React from "react";
import PropTypes from "prop-types";

function CardMovie(props) {
  const { id, name, category, image } = props.data;

  return (
    <>
      <div className="showing-card-active my-4 ">
        <img
          src={
            image
              ? `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/${image}`
              : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="showing-card-content">
          <h3>{name}</h3>
          <p>{category}</p>
          <button
            className="d-flex btn-showing btn btn-outline-primary"
            onClick={() => props.setUpdate(props.data)}
          >
            Update
          </button>
          <button
            className="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
            onClick={() => props.handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

CardMovie.defaultProps = {
  category: "Default Category",
  data: {
    id: "",
    name: "",
    category: ""
  }
};

export default CardMovie;

CardMovie.propTypes = {
  data: PropTypes.object,
  handleDetail: PropTypes.func,
  setUpdate: PropTypes.func,
  handleDelete: PropTypes.func
};
