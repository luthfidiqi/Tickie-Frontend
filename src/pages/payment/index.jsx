import "./index.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// COMPONENT
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
// import warning from "../../assets/img/payment/warning-icon.svg";

function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const idUser = localStorage.getItem("id");
  const dataFinalbook = {
    userId: idUser,
    scheduleId: state.scheduleId,
    dateBooking: state.dateBooking,
    timeBooking: state.timeBooking,
    totalPayment: state.totalPayment,
    seat: state.seat,
    paymentMethod: "midtrans"
  };
  const handlePayment = async (event) => {
    try {
      console.log(dataFinalbook);
      const resultPay = await axios.post("booking", dataFinalbook);
      const midtrans = resultPay.data.data.redirectUrl;
      window.open(midtrans);
      toast.success("Pay your order in midtrans");
      alert("Pay your order in midtrans");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.msg);
    }
  };

  const formatIDR = (data) => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const user = useSelector((state) => state.user);

  return (
    <>
      <ToastContainer />
      <div className="payment">
        <NavbarSignIn></NavbarSignIn>
        <section className="payment-info-mobile web-disable">
          <h2>Total payment</h2>
          <p>Rp {formatIDR(state.totalPayment)}</p>
        </section>

        <main className="payment_main d-flex container">
          <div className="left-content">
            <section className="payment-info disable-mobile">
              <h1>Payment Info</h1>
              <div className="payment-card">
                <div className="payment-card-content d-flex">
                  <h2>Date & time</h2>
                  <p>{state.dateBooking + "  at  " + state.timeBooking}</p>
                </div>
                <div className="payment-line"></div>
                <div className="payment-card-content d-flex">
                  <h2>Movie title</h2>
                  <p>{state.name}</p>
                </div>
                <div className="payment-line"></div>
                <div className="payment-card-content d-flex">
                  <h2>Cinema name</h2>
                  <p>ebv.id</p>
                </div>
                <div className="payment-line"></div>
                <div className="payment-card-content d-flex">
                  <h2>Number of tickets</h2>
                  <p>{`${state.seat.length}  pieces`}</p>
                </div>
                <div className="payment-line"></div>
                <div className="payment-card-content d-flex">
                  <h2>Total payment</h2>
                  <p>Rp {formatIDR(state.totalPayment)}</p>
                </div>
              </div>
            </section>
            <section className="payment-info">
              {/* <h1>Choose a Payment Method</h1>
              <div className="payment-card">
                <div className="payment-method row">
                  <div className="col payment-method-logo">
                    <a href="/">
                      <img src={gpay} alt="" />
                    </a>
                  </div>
                  <div className="col payment-method-logo">
                    <a href="/">
                      <img src={visa} alt="" />
                    </a>
                  </div>
                  <div className="col payment-method-logo">
                    <a href="/">
                      <img src={gopay} alt="" />
                    </a>
                  </div>
                  <div className="col payment-method-logo me-0">
                    <a href="/">
                      <img src={paypal} alt="" />
                    </a>
                  </div>
                </div>
                <div className="payment-method row">
                  <div className="col payment-method-logo">
                    <a href="/">
                      <img src={dana} alt="" />
                    </a>
                  </div>
                  <div className="col payment-method-logo">
                    <a href="/">
                      <img src={bca} alt="" />
                    </a>
                  </div>
                  <div className="col payment-method-logo">
                    <a href="/">
                      <img src={bri} alt="" />
                    </a>
                  </div>
                  <div className="col payment-method-logo me-0">
                    <a href="/">
                      <img src={ovo} alt="" />
                    </a>
                  </div>
                </div>
                <div className="or d-flex container">
                  <div className="or-line"></div>
                  <a href="/">or</a>
                  <div className="or-line"></div>
                </div>
                <div className="how">
                  <p>
                    Pay via cash. <a href="/"> See how it work </a>
                  </p>
                </div>
              </div> */}
              <div className="content-btn-payment d-flex">
                <Link
                  className="d-flex btn-payment btn btn-outline-primary disable-mobile"
                  aria-current="page"
                  to="/home"
                >
                  Previous step
                </Link>
                <button
                  className="d-flex btn-payment-active btn btn-outline-primary"
                  onClick={handlePayment}
                >
                  Pay your order
                </button>
              </div>
            </section>
          </div>
          <aside className="right-content">
            <section className="payment-info">
              <h1>Personal Info</h1>
              <div className="payment-card">
                <form className="personal-info-form">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={user.data.firstName + " " + user.data.lastName}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-join"
                      value={user.data.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control form-join"
                      value={user.data.noTelp}
                    />
                  </div>
                </form>
                {/* <div className="alert alert-warning" role="alert">
                <div className="alert-content">
                  <img src={warning} alt="" />
                  <p>Fill your data correctly.</p>
                </div>
              </div> */}
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
