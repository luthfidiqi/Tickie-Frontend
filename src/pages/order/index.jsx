import "./index.css";
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "../../utils/axios";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";
import Seat from "../../components/Seat";

// Assets IMG
// import seat from "../../assets/img/order/seat.png";
import cineone from "../../assets/img/order/CineOne.png";
import ebu from "../../assets/img/movie-details/ebu.svg";

function Order() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const listSeat = ["A", "B", "C", "D", "E", "F", "G"];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(["A1", "C2", "B11"]);
  const [totalPayment, setTotalPayment] = useState(0);
  const [dataPayment, setDataPayment] = useState({ ...state, totalPayment: totalPayment });
  const handleSelectSeat = (seat) => {
    console.log(state);
    if (selectedSeat.includes(seat)) {
      const deleteSeat = selectedSeat.filter((el) => {
        return el !== seat;
      });
      setSelectedSeat(deleteSeat);
      setTotalPayment(totalPayment - state.price);
      setDataPayment({
        ...dataPayment,
        totalPayment: totalPayment - state.price,
        seat: deleteSeat
      });
    } else {
      setSelectedSeat([...selectedSeat, seat]);
      setTotalPayment(totalPayment + state.price);
      setDataPayment({
        ...dataPayment,
        totalPayment: totalPayment + state.price,
        seat: [...selectedSeat, seat]
      });
    }
  };
  const handleBooking = () => {
    navigate("/payment", { state: dataPayment });
  };

  const formatIDR = (data) => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      <div className="order">
        <NavbarSignIn></NavbarSignIn>

        <main className="order_main d-flex container">
          <div className="left-content">
            <section className="payment-info disable-mobile">
              <h1>Movie Selected</h1>
              <div className="payment-card">
                <div className="movie-select d-flex align-items-center justify-content-between">
                  <h2>{state.name}</h2>
                  <Link
                    className="d-flex btn-change btn btn-outline-primary"
                    aria-current="page"
                    to="../home"
                  >
                    Change movie
                  </Link>
                </div>
              </div>
            </section>
            <section className="payment-info">
              <h1>Choose Your Seat</h1>
              <div className="payment-card d-flex flex-column justify-content-center align-items-center">
                {listSeat.map((item) => (
                  <div key={item}>
                    <Seat
                      rowSeat={item}
                      selectedSeat={handleSelectSeat}
                      reserved={reservedSeat}
                      selected={selectedSeat}
                    />
                  </div>
                ))}
              </div>
              <div className="content-btn-payment d-flex">
                <Link
                  className="d-flex btn-payment btn btn-outline-primary disable-mobile"
                  to="/home"
                >
                  Change your movie
                </Link>
                <button
                  className="d-flex btn-payment-active btn btn-outline-primary"
                  onClick={handleBooking}
                >
                  Checkout now
                </button>
              </div>
            </section>
          </div>
          <aside className="right-content">
            <section className="payment-info">
              <h1>Order Info</h1>
              <div className="payment-card">
                <div className="d-flex flex-column align-items-center">
                  <img src={ebu} alt="" />
                  <h2>ebv.id</h2>
                </div>
                <div className="payment-card-content d-flex">
                  <h2>Movie selected</h2>
                  <p>{state.name}</p>
                </div>
                <div className="payment-card-content d-flex">
                  <h2>{state.dateBooking}</h2>
                  <p>{state.timeBooking}</p>
                </div>
                <div className="payment-card-content d-flex">
                  <h2>One ticket price</h2>
                  <p>Rp {formatIDR(state.price)}</p>
                </div>
                <div className="payment-card-content d-flex">
                  <h2>Seat choosed</h2>
                  <p>{selectedSeat}</p>
                </div>
                <div className="payment-line"></div>
                <div className="total-pay d-flex align-items-center justify-content-between">
                  <h2>Total Payment</h2>
                  <p>Rp {formatIDR(totalPayment)}</p>
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
