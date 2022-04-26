import "./index.css";

// Assets IMG
import blackWidow from "../../assets/img/home/black-widow.png";
import cineone from "../../assets/img/home/cineone-logo.svg";
import ebu from "../../assets/img/home/ebu-logo.svg";
import facebook from "../../assets/img/home/facebook.svg";
import hiflix from "../../assets/img/home/hiflix-logo.svg";
import homeBanner from "../../assets/img/home/home-banner.png";
import instagram from "../../assets/img/home/instagram.svg";
import johnWick from "../../assets/img/home/john-wick.png";
import lionKing from "../../assets/img/home/lion-king.png";
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";
import spiderMan from "../../assets/img/home/spider-man.png";
import tenet from "../../assets/img/home/tenet.png";
import theWitches from "../../assets/img/home/the-witches.png";
import twitter from "../../assets/img/home/twitter.svg";
import youtube from "../../assets/img/home/youtube.svg";

function Home() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="../"
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
              <a class="nav-link active" aria-current="page" href="../">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../"
                >List Movie</a
              >
            </li>
          </ul>
          <a
            class="d-flex btn-sign-up btn btn-primary"
            aria-current="page"
            href="sign-in.html"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>

    <header class="home_banner container d-flex">
      <div class="home_banner-content">
        <p>Nearest Cinema, Newest Movie,</p>
        <h1>Find out now!</h1>
      </div>
      <img src={homeBanner} alt="" />
    </header>

    <main>
      <section class="home_now-showing">
        <div class="home_showing-title d-flex container">
          <div class="home_showing-text">
            <h2>Now Showing</h2>
            <div class="home_showing-line"></div>
          </div>
          <a class="home_show-all" href="../">view all</a>
        </div>
        <div class="showing-list container d-flex">
          <div class="showing-card-active">
            <img src={spiderMan} alt="" />
            <div class="showing-card-content">
              <h3>Spider-Man</h3>
              <p>Acion, Adventure, Sci-FI</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={lionKing} alt="" />
            <div class="showing-card-content">
              <h3>Lion King</h3>
              <p>Acion, Adventure, Sci-FI</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={johnWick} alt="" />
            <div class="showing-card-content">
              <h3>John Wick</h3>
              <p>Acion, Adventure, Sci-FI</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={spiderMan} alt="" />
            <div class="showing-card-content">
              <h3>Spider-Man</h3>
              <p>Acion, Adventure, Sci-FI</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={lionKing} alt="" />
            <div class="showing-card-content">
              <h3>Lion King</h3>
              <p>Acion, Adventure, Sci-FI</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={johnWick} alt="" />
            <div class="showing-card-content">
              <h3>John Wick</h3>
              <p>Acion, Adventure, Sci-FI</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <section class="home_upcoming-movie">
        <div class="home_upcoming-title d-flex container">
          <h2>Upcoming Movies</h2>
          <a class="show-all" href="../">view all</a>
        </div>
        <div class="home_upcoming-month d-flex container">
          <a
            class="d-flex btn-upcoming-month-active btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            September
          </a>
          <a
            class="d-flex btn-upcoming-month btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            October
          </a>
          <a
            class="d-flex btn-upcoming-month btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            November
          </a>
          <a
            class="d-flex btn-upcoming-month btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            December
          </a>
          <a
            class="d-flex btn-upcoming-month btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            January
          </a>
          <a
            class="d-flex btn-upcoming-month btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            February
          </a>
          <a
            class="d-flex btn-upcoming-month btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            March
          </a>
          <a
            class="d-flex btn-upcoming-month btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            April
          </a>
          <a
            class="d-flex btn-upcoming-month btn btn-outline-primary"
            aria-current="page"
            href="../"
          >
            May
          </a>
        </div>
        <div class="home_showing-list container d-flex">
          <div class="showing-card-active">
            <img src={blackWidow} alt="" />
            <div class="showing-card-content">
              <h3>Black Widow</h3>
              <p>Action, Adventure, Sci-Fi</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={theWitches} alt="" />
            <div class="showing-card-content">
              <h3>The Witches</h3>
              <p>Adventure, Comedy</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={tenet} alt="" />
            <div class="showing-card-content">
              <h3>Tenet</h3>
              <p>Action, Sci-Fi</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={blackWidow} alt="" />
            <div class="showing-card-content">
              <h3>Black Widow</h3>
              <p>Action, Adventure, Sci-Fi</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={theWitches} alt="" />
            <div class="showing-card-content">
              <h3>The Witches</h3>
              <p>Adventure, Comedy</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
          <div class="showing-card-active">
            <img src={tenet} alt="" />
            <div class="showing-card-content">
              <h3>Tenet</h3>
              <p>Action, Sci-Fi</p>
              <a
                class="d-flex btn-showing btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="home_join-now container">
        <h3>Be the vanguard of the</h3>
        <h2>Moviegoers</h2>
        <div class="home_join-form d-flex">
          <input
            type="email"
            class="form-control home_form-control form-join"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Write your email"
          />
          <a
            class="d-flex home_btn-join btn btn-primary"
            aria-current="page"
            href="../"
          >
            Join Now
          </a>
        </div>

        <p>
          By joining you as a Tickitz member, we will always send you the latest
          updates via email .
        </p>
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
            <a href="../">Home</a>
            <a href="../">List Movie</a>
          </div>
        </div>
        <div class="sponsor">
          <h3>Our Sponsor</h3>
          <div class="sponsor-logo">
            <img src={ebu} alt="" />
            <img src={cineone} alt="" />
            <img src={hiflix} alt="" />
          </div>
        </div>
        <div class="follow">
          <h3>Follow us</h3>
          <div class="follow-content">
            <div class="follow-list d-flex align-items-center">
              <img src={facebook} alt="" />
              <a target="_blank" href="../"> Tickitz Cinema id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={instagram} alt="" />
              <a target="_blank" href="../"> tickitz.id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={twitter} alt="" />
              <a target="_blank" href="../"> tickitz.id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={youtube} alt="" />
              <a target="_blank" href="../"> Tickitz Cinema id </a>
            </div>
          </div>
          <div class="follow-content-mobile">
            <a target="_blank" href="../">
              <img src={facebook} alt="" />
            </a>
            <a target="_blank" href="../">
              <img src={instagram} alt="" />
            </a>
            <a target="_blank" href="../">
              <img src={twitter} alt="" />
            </a>
            <a target="_blank" href="../">
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
    </>
  );
}

export default Home;
