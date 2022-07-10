import "./index.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// IMAGE
import userPhoto from "../../assets/img/profile/user_photo.png";
import ebvLogo from "../../assets/img/history/ebv.png";

function OrderHistory() {
  const navigate = useNavigate();
  const [dataTicket, setDataTicket] = useState([]);

  const getdataTicket = async () => {
    try {
      console.log("GET DATA TICKET");
      const idUser = localStorage.getItem("id");
      const ticket = await axios.get(`booking/user/${idUser}`);
      setDataTicket(ticket.data.data.slice(0, 3));
      console.log(dataTicket);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getdataTicket();
  }, []);

  console.log(getdataTicket);

  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleTicket = (send) => {
    navigate("/ticket", { state: send });
  };
  return (
    <>
      <div className="profile">
        <NavbarSignIn></NavbarSignIn>

        <section className="switch-mobile">
          <div className="switch-nav">
            <div className="switch-nonactive">
              <Link to="/accountSet">Account Settings</Link>
            </div>
            <div className="switch-active">
              <Link to="/orderHistory">Order History</Link>
            </div>
          </div>
        </section>

        <main className="profile_main d-flex container">
          <div className="profile-left-content">
            <section className="user-info">
              <h1>INFO</h1>
              <div className="d-flex flex-column align-items-center">
                <div className="img-profile">
                  <img
                    src={
                      user.data.image
                        ? `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/${user.data.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    alt=""
                    className="profile__profileImg"
                  />
                </div>
                {/* <img src={userPhoto} alt="" /> */}
                <h2>{`${user.data.firstName} ${user.data.lastName} `}</h2>
                <h3>{user.data.email}</h3>
                <div className="info-line"></div>
                <button
                  onClick={handleLogout}
                  type="submit"
                  className="signIn_btn btn btn-primary mt-4"
                >
                  Logout
                </button>
              </div>
            </section>
          </div>
          <div className="profile-right-content">
            <div className="switch-nav mb-4 disable-mobile">
              <div className="switch-nonactive">
                <Link to="/accountSet">Account Settings</Link>
              </div>
              <div className="switch-active">
                <Link to="/orderHistory">Order History</Link>
              </div>
            </div>

            {dataTicket.map((item) => (
              <div className="order-ticket mb-4" key={item}>
                <div className="order-top d-flex justify-content-between">
                  <div className="order-top-text">
                    <p>Tuesday, 07 July 2020 - 04:30pm</p>
                    <h4>Spider-Man: Homecoming</h4>
                  </div>
                  <img src={ebvLogo} alt="" />
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <button
                    type="submit"
                    onClick={() =>
                      handleTicket({
                        name: item.name,
                        category: item.category,
                        date: item.dateBooking.split("T")[0],
                        time: item.timeBooking.substring(0, 5),
                        seat: item.seat,
                        total: item.totalPayment,
                        id: item.bookingId
                      })
                    }
                    className={
                      item.statusUsed === "active"
                        ? "btn-ticket-active mt-4"
                        : "btn-ticket-nonactive mt-4"
                    }
                    disabled={item.statusUsed === "active" ? false : true}
                  >
                    {item.statusUsed === "active" ? "Ticket in Active" : "Ticket is Expired"}
                  </button>
                  <button
                    onClick={() =>
                      handleTicket({
                        name: item.name,
                        category: item.category,
                        date: item.dateBooking.split("T")[0],
                        time: item.timeBooking.substring(0, 5),
                        seat: item.seat,
                        total: item.totalPayment,
                        id: item.bookingId
                      })
                    }
                    disabled={item.statusUsed === "active" ? false : true}
                    type="submit"
                    className="ticket-details mt-4 disable-mobile"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default OrderHistory;
