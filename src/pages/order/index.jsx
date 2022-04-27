import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// Assets IMG
import seat from "../../assets/img/order/seat.png";
import cineone from "../../assets/img/order/CineOne.png";

function Order() {
  return (
    <>
    <div class="order">
    <NavbarSignIn></NavbarSignIn>

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

    <Footer></Footer>
    </div>
    </>
  );
}

export default Order;
