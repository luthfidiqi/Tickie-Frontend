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
      <div class="manageSchedule">
        <NavbarSignIn></NavbarSignIn>

        <main class="manageSchedule_main container">
          <section class="allMovie_title">
            <h1>Form Schedule</h1>
            <div class="formMovie">
              <div class="d-flex">
                <div class="movieImage">
                  <img src={spiderman} alt="" />
                </div>
                <div class="form-grup-1">
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label">
                      Movie Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Spider-Man: Homecoming"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label">
                      Director
                    </label>
                    <input
                      type="text"
                      name="text"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Jon Watts"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label">
                      Release date
                    </label>
                    <input
                      type="text"
                      name="text"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="07/05/2020"
                    />
                  </div>
                </div>

                <div class="form-grup-2">
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label">
                      Movie Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Spider-Man: Homecoming"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label">
                      Director
                    </label>
                    <input
                      type="text"
                      name="text"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Jon Watts"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label">
                      Release date
                    </label>
                    <input
                      type="text"
                      name="text"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="07/05/2020"
                    />
                  </div>
                </div>
              </div>

              <div class="formMovie_content-btn d-flex">
                <a
                  class="d-flex formMovie_btn btn btn-outline-primary disable-mobile"
                  aria-current="page"
                  href="/"
                >
                  Reset
                </a>
                <a
                  class="d-flex formMovie_btn-active btn btn-outline-primary"
                  aria-current="page"
                  href="/"
                >
                  Submit
                </a>
              </div>
            </div>
          </section>

          <section class="allMovie_title mb-4 d-flex">
            <h1>Data Schedule</h1>
            <div class="d-flex">
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Location
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown m-0">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movie
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="allMovie">
            <div class="showtimes-list">
              {/* <!-- CARD GRID--> */}
              {/* <!-- ROW 1 --> */}
              <div class="d-flex justify-content-space-between">
                <div class="dataSchedule-card">
                  <div class="d-flex">
                    <img src={ebu} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </div>
                  </div>
                  <div class="showtimes-line"></div>
                  <div class="time-list">
                    <div class="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div class="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div class="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div class="dataSchedule-btn d-flex justify-content-center">
                    <a
                      class="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      class="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>

                <div class="dataSchedule-card">
                  <div class="d-flex">
                    <img src={cineone} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Downcare street No. 21, East Purwokerto</p>
                    </div>
                  </div>
                  <div class="showtimes-line"></div>
                  <div class="time-list">
                    <div class="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div class="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div class="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div class="dataSchedule-btn d-flex justify-content-center">
                    <a
                      class="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      class="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>

                <div class="dataSchedule-card">
                  <div class="d-flex">
                    <img src={hiflix} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Colonel street No. 2, East Purwokerto</p>
                    </div>
                  </div>
                  <div class="showtimes-line"></div>
                  <div class="time-list">
                    <div class="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div class="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div class="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div class="dataSchedule-btn d-flex justify-content-center">
                    <a
                      class="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      class="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- ROW 2 --> */}
              <div class="d-flex justify-content-space-between">
                <div class="dataSchedule-card">
                  <div class="d-flex">
                    <img src={ebu} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </div>
                  </div>
                  <div class="showtimes-line"></div>
                  <div class="time-list">
                    <div class="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div class="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div class="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div class="dataSchedule-btn d-flex justify-content-center">
                    <a
                      class="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      class="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>

                <div class="dataSchedule-card">
                  <div class="d-flex">
                    <img src={cineone} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Downcare street No. 21, East Purwokerto</p>
                    </div>
                  </div>
                  <div class="showtimes-line"></div>
                  <div class="time-list">
                    <div class="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div class="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div class="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div class="dataSchedule-btn d-flex justify-content-center">
                    <a
                      class="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      class="d-flex dataSchedule-btn-delete btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Delete
                    </a>
                  </div>
                </div>

                <div class="dataSchedule-card">
                  <div class="d-flex">
                    <img src={hiflix} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>Colonel street No. 2, East Purwokerto</p>
                    </div>
                  </div>
                  <div class="showtimes-line"></div>
                  <div class="time-list">
                    <div class="d-flex">
                      <button>08:30am</button>
                      <button>10:30pm</button>
                      <button>12:00pm</button>
                      <button>02:00pm</button>
                    </div>
                    <div class="d-flex">
                      <button>04:30pm</button>
                      <button>07:00pm</button>
                      <button>08:30pm</button>
                    </div>
                  </div>
                  <div class="price d-flex">
                    <h3>Price</h3>
                    <p>$10.00/seat</p>
                  </div>
                  <div class="dataSchedule-btn d-flex justify-content-center">
                    <a
                      class="d-flex dataSchedule-btn-update btn btn-primary"
                      aria-current="page"
                      href="../order"
                    >
                      Update
                    </a>
                    <a
                      class="d-flex dataSchedule-btn-delete btn btn-primary"
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

          <section class="allMovie_pagination">
            <nav aria-label="...">
              <ul class="pagination pagination-md">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
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
