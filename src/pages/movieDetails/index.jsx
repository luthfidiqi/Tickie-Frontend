import "./index.css";

// Assets IMG
import avatar from "../../assets/img/movie-details/avatar.png";
import calendar from "../../assets/img/movie-details/calendar.svg";
import cineone from "../../assets/img/movie-details/cine.svg";
import ebu from "../../assets/img/movie-details/ebu.svg";
import arrow from "../../assets/img/movie-details/arrow.svg";
import hiflix from "../../assets/img/movie-details/hiflix.svg";
import location from "../../assets/img/movie-details/location.svg";
import search from "../../assets/img/movie-details/search.svg";
import spiderman from "../../assets/img/movie-details/spiderman.png";

// Header & Footer
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";
import ebuFoot from "../../assets/img/home/ebu-logo.svg";
import cineoneFoot from "../../assets/img/home/cineone-logo.svg";
import hiflixFoot from "../../assets/img/home/hiflix-logo.svg";
import facebook from "../../assets/img/home/facebook.svg";
import instagram from "../../assets/img/home/instagram.svg";
import twitter from "../../assets/img/home/twitter.svg";
import youtube from "../../assets/img/home/youtube.svg";

function MovieDetails() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src={logoTickitz} alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="home.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >List Movie</a
              >
            </li>
          </ul>
          <div class="d-flex">
            <img src={search} alt="" />
            <img
              class="avatar"
              src={avatar}
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>

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
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
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
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
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
                  href="order.html"
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
                  href="order.html"
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
                  href="order.html"
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
                  href="order.html"
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
                  href="order.html"
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
                  href="order.html"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="view-more d-flex container">
          <div class="view-line"></div>
          <a href="#">view more</a>
          <div class="view-line"></div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-content d-flex container">
        <div class="logo">
          <img src={logoTickitz} alt="" />
          <p>
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </p>
        </div>
        <div class="explore">
          <h3>Explore</h3>
          <div class="explore-link">
            <a href="#">Home</a>
            <a href="#">List Movie</a>
          </div>
        </div>
        <div class="sponsor">
          <h3>Our Sponsor</h3>
          <div class="sponsor-logo">
            <img src={ebuFoot} alt="" />
            <img src={cineoneFoot} alt="" />
            <img src={hiflixFoot} alt="" />
          </div>
        </div>
        <div class="follow">
          <h3>Follow us</h3>
          <div class="follow-content">
            <div class="follow-list d-flex align-items-center">
              <img src={facebook} alt="" />
              <a target="_blank" href="#"> Tickitz Cinema id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={instagram} alt="" />
              <a target="_blank" href="#"> tickitz.id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={twitter} alt="" />
              <a target="_blank" href="#"> tickitz.id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={youtube} alt="" />
              <a target="_blank" href="#"> Tickitz Cinema id </a>
            </div>
          </div>
          <div class="follow-content-mobile">
            <a target="_blank" href="#">
              <img src="/assets/img/home/facebook.svg" alt="" />
            </a>
            <a target="_blank" href="#">
              <img src="/assets/img/home/instagram.svg" alt="" />
            </a>
            <a target="_blank" href="#">
              <img src="/assets/img/home/twitter.svg" alt="" />
            </a>
            <a target="_blank" href="#">
              <img src="/assets/img/home/youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
    </>
  );
}

export default MovieDetails;
