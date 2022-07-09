import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";
// import { Link } from "react-router-dom";

// Assets IMG
import cineone from "../../assets/img/movie-details/cine.svg";
import ebu from "../../assets/img/movie-details/ebu.svg";
import hiflix from "../../assets/img/movie-details/hiflix.svg";
import spiderman from "../../assets/img/movie-details/spiderman.png";

function ManageSchedule() {
  document.title = "Tickie";
  return (
    <>
      <div className="manageSchedule">
        <NavbarSignIn></NavbarSignIn>

        <main className="manageSchedule_main container">
          <section className="allMovie_title">
            <h1>Form Schedule</h1>
            <div className="formMovie">
              <div className="d-flex">
                <div className="movieImage">
                  <img src={spiderman} alt="" />
                </div>
                <div className="form-grup-1">
                  <div className="mb-3">
                    <label for="formMovie-1" className="form-label">
                      Movie Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      className="form-control"
                      id="formMovie-1"
                      placeholder="Spider-Man: Homecoming"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formMovie-1" className="form-label">
                      Director
                    </label>
                    <input
                      type="text"
                      name="text"
                      className="form-control"
                      id="formMovie-1"
                      placeholder="Jon Watts"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formMovie-1" className="form-label">
                      Release date
                    </label>
                    <input
                      type="text"
                      name="text"
                      className="form-control"
                      id="formMovie-1"
                      placeholder="07/05/2020"
                    />
                  </div>
                </div>

                <div className="form-grup-2">
                  <div className="mb-3">
                    <label for="formMovie-1" className="form-label">
                      Movie Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      className="form-control"
                      id="formMovie-1"
                      placeholder="Spider-Man: Homecoming"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formMovie-1" className="form-label">
                      Director
                    </label>
                    <input
                      type="text"
                      name="text"
                      className="form-control"
                      id="formMovie-1"
                      placeholder="Jon Watts"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formMovie-1" className="form-label">
                      Release date
                    </label>
                    <input
                      type="text"
                      name="text"
                      className="form-control"
                      id="formMovie-1"
                      placeholder="07/05/2020"
                    />
                  </div>
                </div>
              </div>

              <div className="formMovie_content-btn d-flex">
                <a
                  className="d-flex formMovie_btn btn btn-outline-primary disable-mobile"
                  aria-current="page"
                  href="/"
                >
                  Reset
                </a>
                <a
                  className="d-flex formMovie_btn-active btn btn-outline-primary"
                  aria-current="page"
                  href="/"
                >
                  Submit
                </a>
              </div>
            </div>
          </section>

          <section className="allMovie_title mb-4 d-flex">
            <h1>Data Schedule</h1>
            <div className="d-flex">
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Location
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown m-0">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movie
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="allMovie">
            <div className="showtimes-list">
              {/* <!-- CARD GRID--> */}
              {/* <!-- ROW 1 --> */}
              <div className="d-flex justify-content-space-between">
                <div className="dataSchedule-card">
                  <div className="d-flex">
                    <img src={ebu} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </div>
                  </div>
                  <div className="showtimes-line"></div>
                  <div className="time-list">
                    <div className="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div className="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div className="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div className="dataSchedule-btn d-flex justify-content-center">
                    <a
                      className="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      className="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>

                <div className="dataSchedule-card">
                  <div className="d-flex">
                    <img src={cineone} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Downcare street No. 21, East Purwokerto</p>
                    </div>
                  </div>
                  <div className="showtimes-line"></div>
                  <div className="time-list">
                    <div className="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div className="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div className="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div className="dataSchedule-btn d-flex justify-content-center">
                    <a
                      className="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      className="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>

                <div className="dataSchedule-card">
                  <div className="d-flex">
                    <img src={hiflix} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Colonel street No. 2, East Purwokerto</p>
                    </div>
                  </div>
                  <div className="showtimes-line"></div>
                  <div className="time-list">
                    <div className="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div className="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div className="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div className="dataSchedule-btn d-flex justify-content-center">
                    <a
                      className="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      className="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- ROW 2 --> */}
              <div className="d-flex justify-content-space-between">
                <div className="dataSchedule-card">
                  <div className="d-flex">
                    <img src={ebu} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </div>
                  </div>
                  <div className="showtimes-line"></div>
                  <div className="time-list">
                    <div className="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div className="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div className="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div className="dataSchedule-btn d-flex justify-content-center">
                    <a
                      className="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      className="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>

                <div className="dataSchedule-card">
                  <div className="d-flex">
                    <img src={cineone} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Downcare street No. 21, East Purwokerto</p>
                    </div>
                  </div>
                  <div className="showtimes-line"></div>
                  <div className="time-list">
                    <div className="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div className="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div className="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div className="dataSchedule-btn d-flex justify-content-center">
                    <a
                      className="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      className="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>

                <div className="dataSchedule-card">
                  <div className="d-flex">
                    <img src={hiflix} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Colonel street No. 2, East Purwokerto</p>
                    </div>
                  </div>
                  <div className="showtimes-line"></div>
                  <div className="time-list">
                    <div className="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div className="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div className="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div className="dataSchedule-btn d-flex justify-content-center">
                    <a
                      className="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      className="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="allMovie_pagination">
            <nav aria-label="...">
              <ul className="pagination pagination-md">
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default ManageSchedule;
