import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// Assets IMG
import bca from "../../assets/img/payment/logos_bca.svg";
import bri from "../../assets/img/payment/logos_bri.svg";
import dana from "../../assets/img/payment/logos_dana.svg";
import gpay from "../../assets/img/payment/logos_google-pay.svg";
import gopay from "../../assets/img/payment/logos_gopay.svg";
import ovo from "../../assets/img/payment/logos_ovo.svg";
import paypal from "../../assets/img/payment/logos_paypal.svg";
import visa from "../../assets/img/payment/logos_visa.svg";
import warning from "../../assets/img/payment/warning-icon.svg";

function Payment() {
  return (
    <>
    <div class="payment">
      <NavbarSignIn></NavbarSignIn>

      <main class="payment_main d-flex container">
        <div class="left-content">
          <section class="payment-info disable-mobile">
            <h1>Payment Info</h1>
            <div class="payment-card">
              <div class="payment-card-content d-flex">
                <h2>Date & time</h2>
                <p>Tuesday, 07 July 2020 at 02:00</p>
              </div>
              <div class="payment-line"></div>
              <div class="payment-card-content d-flex">
                <h2>Movie title</h2>
                <p>Spider-Man: Homecoming</p>
              </div>
              <div class="payment-line"></div>
              <div class="payment-card-content d-flex">
                <h2>Cinema name</h2>
                <p>CineOne21 Cinema</p>
              </div>
              <div class="payment-line"></div>
              <div class="payment-card-content d-flex">
                <h2>Number of tickets</h2>
                <p>3 pieces</p>
              </div>
              <div class="payment-line"></div>
              <div class="payment-card-content d-flex">
                <h2>Total payment</h2>
                <p>$30,00</p>
              </div>
            </div>
          </section>
          <section class="payment-info">
            <h1>Choose a Payment Method</h1>
            <div class="payment-card">
              <div class="payment-method row">
                <div class="col payment-method-logo">
                  <a href="/"
                    ><img src={gpay} alt=""
                  /></a>
                </div>
                <div class="col payment-method-logo">
                  <a href="/"
                    ><img src={visa} alt=""
                  /></a>
                </div>
                <div class="col payment-method-logo">
                  <a href="/"
                    ><img src={gopay} alt=""
                  /></a>
                </div>
                <div class="col payment-method-logo me-0">
                  <a href="/"
                    ><img src={paypal} alt=""
                  /></a>
                </div>
              </div>
              <div class="payment-method row">
                <div class="col payment-method-logo">
                  <a href="/"
                    ><img src={dana} alt=""
                  /></a>
                </div>
                <div class="col payment-method-logo">
                  <a href="/"
                    ><img src={bca} alt=""
                  /></a>
                </div>
                <div class="col payment-method-logo">
                  <a href="/"
                    ><img src={bri} alt=""
                  /></a>
                </div>
                <div class="col payment-method-logo me-0">
                  <a href="/"
                    ><img src={ovo} alt=""
                  /></a>
                </div>
              </div>
              <div class="or d-flex container">
                <div class="or-line"></div>
                <a href="/">or</a>
                <div class="or-line"></div>
              </div>
              <div class="how">
                <p>Pay via cash. <a href="/"> See how it work </a></p>
              </div>
            </div>
            <div class="content-btn-payment d-flex">
              <a
                class="d-flex btn-payment btn btn-outline-primary disable-mobile"
                aria-current="page"
                href="../order"
              >
                Previous step
              </a>
              <a
                class="d-flex btn-payment-active btn btn-outline-primary"
                aria-current="page"
                href="/"
              >
                Pay your order
              </a>
            </div>
          </section>
        </div>
        <aside class="right-content">
          <section class="payment-info">
            <h1>Personal Info</h1>
            <div class="payment-card">
              <form class="personal-info-form">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Full Name</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Jonas El Rodriguez"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control form-join"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="jonasrodri123@gmail.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Phone Number</label
                  >
                  <input
                    type="email"
                    class="form-control form-join"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="+62 81445687121"
                  />
                </div>
              </form>
              <div class="alert alert-warning" role="alert">
                <div class="alert-content">
                  <img src={warning} alt="" />
                  <p>Fill your data correctly.</p>
                </div>
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

export default Payment;
