import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// Assets IMG
import calendar from "../../assets/img/movie-details/calendar.svg";
import cineone from "../../assets/img/movie-details/cine.svg";
import ebu from "../../assets/img/movie-details/ebu.svg";
import arrow from "../../assets/img/movie-details/arrow.svg";
import hiflix from "../../assets/img/movie-details/hiflix.svg";
import location from "../../assets/img/movie-details/location.svg";
import spiderman from "../../assets/img/movie-details/spiderman.png";

function MovieDetails() {
  return (
    <>
      <NavbarSignIn></NavbarSignIn>

      <main>
        {/* <!-- MOVIE DETAIL --> */}
        <section class="movie-detail d-flex container">
          <div class="movie-image">
            <img src={spiderman} alt="" />
          </div>
          <div class="movie-text">
            <h1>Spider-Man: Homecoming</h1>
            <h2>Adventure, Action, Sci-Fi</h2>
            <div class="text-sub-content d-flex">
              <div class="text-sub-content-detail">
                <div>
                  <h3>Release date</h3>
                  <p>June 28, 2017</p>
                </div>
                <div>
                  <h3>Directed by</h3>
                  <p>Jon Watss</p>
                </div>
              </div>
              <div>
                <div>
                  <h3>Duration</h3>
                  <p>2 hours 13 minutes</p>
                </div>
                <div>
                  <h3>Casts</h3>
                  <p>Tom Holland, Michael Keaton, Robert Downey Jr., ...</p>
                </div>
              </div>
            </div>
            <div class="movie-detail-line"></div>
            <div class="synopsis">
              <h3>Synopsis</h3>
              <p>
                Thrilled by his experience with the Avengers, Peter returns home,
                where he lives with his Aunt May, under the watchful eye of his
                new mentor Tony Stark, Peter tries to fall back into his normal
                daily routine - distracted by thoughts of proving himself to be
                more than just your friendly neighborhood Spider-Man - but when
                the Vulture emerges as a new villain, everything that Peter holds
                most important will be threatened.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- SHOWTIMES & TICKET --> */}
        <section class="showtimes">
          <div class="container">
            <h1>Showtimes and Tickets</h1>
            <div class="filter d-flex">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="icon-text-filter d-flex">
                    <img src={calendar} alt="" />
                    <p>21/07/20</p>
                  </div>
                  <img src={arrow} alt="" />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="/">Something else here</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="icon-text-filter d-flex">
                    <img src={location} alt="" />
                    <p>Purwokerto</p>
                  </div>
                  <img src={arrow} alt="" />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="/">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- CARD GRID--> */}
            <div class="showtimes-list">
              {/* <!-- ROW 1 --> */}
              <div class="row">
                <div class="showtimes-card col">
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
                  <a
                    class="d-flex btn-book btn btn-primary"
                    aria-current="page"
                    href="../order"
                  >
                    Book now
                  </a>
                </div>

                <div class="showtimes-card col">
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
                  <a
                    class="d-flex btn-book btn btn-primary"
                    aria-current="page"
                    href="../order"
                  >
                    Book now
                  </a>
                </div>

                <div class="showtimes-card col">
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
                  <a
                    class="d-flex btn-book btn btn-primary"
                    aria-current="page"
                    href="../order"
                  >
                    Book now
                  </a>
                </div>
              </div>

              {/* <!-- ROW 2 --> */}
              <div class="row">
                <div class="showtimes-card col">
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
                  <a
                    class="d-flex btn-book btn btn-primary"
                    aria-current="page"
                    href="../order"
                  >
                    Book now
                  </a>
                </div>

                <div class="showtimes-card col">
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
                  <a
                    class="d-flex btn-book btn btn-primary"
                    aria-current="page"
                    href="../order"
                  >
                    Book now
                  </a>
                </div>

                <div class="showtimes-card col">
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
                  <a
                    class="d-flex btn-book btn btn-primary"
                    aria-current="page"
                    href="../order"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="view-more d-flex container">
            <div class="view-line"></div>
            <a href="/">view more</a>
            <div class="view-line"></div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default MovieDetails;
