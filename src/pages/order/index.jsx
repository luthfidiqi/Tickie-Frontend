import "./index.css";

// Assets IMG
import seat from "../../assets/img/order/seat.png";
import cineone from "../../assets/img/order/CineOne.png";

// Header & Footer
import logoTickitz from "../../assets/img/home/logo-tickitz-color.svg";
import ebuFoot from "../../assets/img/home/ebu-logo.svg";
import cineoneFoot from "../../assets/img/home/cineone-logo.svg";
import hiflixFoot from "../../assets/img/home/hiflix-logo.svg";
import facebook from "../../assets/img/home/facebook.svg";
import instagram from "../../assets/img/home/instagram.svg";
import twitter from "../../assets/img/home/twitter.svg";
import youtube from "../../assets/img/home/youtube.svg";

function Order() {
  return (
    <>
    <div class="order">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/"
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
              <a class="nav-link active" aria-current="page" href="../home"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"
                >List Movie</a
              >
            </li>
          </ul>
          <div class="d-flex">
            <img src="assets/img/movie-details/search.svg" alt="" />
            <img
              class="avatar"
              src="assets/img/movie-details/avatar.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>

    <main class="order_main d-flex container">
      <div class="left-content">
        <section class="payment-info disable-mobile">
          <h1>Movie Selected</h1>
          <div class="payment-card">
            <div
              class="movie-select d-flex align-items-center justify-content-between"
            >
              <h2>Spider-Man: Homecoming</h2>
              <a
                class="d-flex btn-change btn btn-outline-primary"
                aria-current="page"
                href="movie-details.html"
              >
                Change movie
              </a>
            </div>
          </div>
        </section>
        <section class="payment-info">
          <h1>Choose Your Seat</h1>
          <div
            class="payment-card d-flex flex-column justify-content-center align-items-center"
          >
            <img src={seat} alt="" />
          </div>
          <div class="content-btn-payment d-flex">
            <a
              class="d-flex btn-payment btn btn-outline-primary disable-mobile"
              aria-current="page"
              href="../movieDetails"
            >
              Change your movie
            </a>
            <a
              class="d-flex btn-payment-active btn btn-outline-primary"
              aria-current="page"
              href="../payment"
            >
              Checkout now
            </a>
          </div>
        </section>
      </div>
      <aside class="right-content">
        <section class="payment-info">
          <h1>Order Info</h1>
          <div class="payment-card">
            <div class="d-flex flex-column align-items-center">
              <img src={cineone} alt="" />
              <h2>CineOne21 Cinema</h2>
            </div>
            <div class="payment-card-content d-flex">
              <h2>Movie selected</h2>
              <p>Spider-Man: Homecoming</p>
            </div>
            <div class="payment-card-content d-flex">
              <h2>Tuesday, 07 July 2020</h2>
              <p>02:00</p>
            </div>
            <div class="payment-card-content d-flex">
              <h2>One ticket price</h2>
              <p>$10</p>
            </div>
            <div class="payment-card-content d-flex">
              <h2>Seat choosed</h2>
              <p>C4, C5, C6</p>
            </div>
            <div class="payment-line"></div>
            <div
              class="total-pay d-flex align-items-center justify-content-between"
            >
              <h2>Total Payment</h2>
              <p>$30</p>
            </div>
          </div>
        </section>
      </aside>
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
            <a href="/">Home</a>
            <a href="/">List Movie</a>
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
              <a target="_blank" href="/"> Tickitz Cinema id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={instagram} alt="" />
              <a target="_blank" href="/"> tickitz.id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={twitter} alt="" />
              <a target="_blank" href="/"> tickitz.id </a>
            </div>
            <div class="follow-list d-flex align-items-center">
              <img src={youtube} alt="" />
              <a target="_blank" href="/"> Tickitz Cinema id </a>
            </div>
          </div>
          <div class="follow-content-mobile">
            <a target="_blank" href="/">
              <img src="/assets/img/home/facebook.svg" alt="" />
            </a>
            <a target="_blank" href="/">
              <img src="/assets/img/home/instagram.svg" alt="" />
            </a>
            <a target="_blank" href="/">
              <img src="/assets/img/home/twitter.svg" alt="" />
            </a>
            <a target="_blank" href="/">
              <img src="/assets/img/home/youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
    </div>
    </>
  );
}

export default Order;
