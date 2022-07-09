import React from "react";

function DetailMov(props) {
  const { name, category, image, releaseDate, synopsis, duration, director, casts } = props.data;
  return (
    <>
      <section className="movie-detail d-flex container align-items-center">
        <div className="movie-image">
          <img
            src={
              image
                ? `${process.env.REACT_APP_URL_CLOUDINARY}/${image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="movie-text">
          <h1>{name}</h1>
          <h2>{category}</h2>
          <div className="text-sub-content d-flex">
            <div className="text-sub-content-detail">
              <div>
                <h3>Release date</h3>
                <p>{releaseDate ? releaseDate.split("T")[0] : ""}</p>
              </div>
              <div>
                <h3>Directed by</h3>
                <p>{director}</p>
              </div>
            </div>
            <div>
              <div>
                <h3>Duration</h3>
                <p>{duration}</p>
              </div>
              <div>
                <h3>Casts</h3>
                <p>{casts}</p>
              </div>
            </div>
          </div>
          <div className="movie-detail-line"></div>
          <div className="synopsis">
            <h3>Synopsis</h3>
            <p>{synopsis}</p>
          </div>
        </div>
      </section>
    </>
  );
}

// Card.defaultProps = {
//   id: "1",
//   name: "movie",
//   category: "Default Category"
// };

export default DetailMov;
