import "./index.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../..//utils/axios";

// COMPONENT
import DetailMov from "../../components/DetailMov";
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
  const navigate = useNavigate();
  const params = useParams();
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [dataSchedule, setDataSchedule] = useState([]);

  useEffect(() => {
    getdataMovieById();
  }, []);
  useEffect(() => {
    getdataSchedule();
  }, []);
  useEffect(() => {
    getdataSchedule();
  }, [limit]);
  useEffect(() => {
    getdataSchedule();
  }, [location]);

  const getdataMovieById = async () => {
    try {
      console.log("GET DATA MOVIE");
      const resultMovie = await axios.get(`movie/${params.id}`);
      setData(resultMovie.data.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getdataSchedule = async () => {
    try {
      console.log("GET DATA Schedule");
      const resultSchedule = await axios.get(
        `schedule?page=${page}&limit=${limit}&searchLocation=${location}`
      );
      setDataSchedule(resultSchedule.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const [dataOrder, setDataOrder] = useState({
    movieId: params.id,
    dateBooking: date
  });

  const changeDataBooking = (data) => {
    setDataOrder({ ...dataOrder, ...data });
  };

  const handleBooking = () => {
    console.log(dataOrder);
    navigate("/order", { state: dataOrder });
  };

  const formatIDR = (data) => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  console.log(dataOrder);

  return (
    <>
      <NavbarSignIn></NavbarSignIn>

      <main>
        <DetailMov data={data} />

        <section className="showtimes">
          <div className="container">
            <h1>Showtimes and Tickets</h1>
            <div className="filter d-flex">
              <input
                type="date"
                className="detail__calender"
                onChange={(event) => setDate(event.target.value)}
              />
              <select
                name="location"
                className="detail__location"
                onClick={(event) => setLocation(event.target.value)}
              >
                <option value="">All Location</option>
                <option value="Bogor">Bogor</option>
                <option value="Jakarta">Jakarta</option>
              </select>
            </div>

            <div className="row">
              {dataSchedule.map((item) => (
                <div className="showtimes-card col-md-4" key={item}>
                  <div className="d-flex">
                    <img src={ebu} alt="" />
                    <div>
                      <h2>ebv.id</h2>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <div className="showtimes-line"></div>
                  <div className="row time-list mb-4">
                    {item.time.split(",").map((time) => (
                      <div className="col-md-3" key={time}>
                        <button
                          className={`btn ${
                            time === dataOrder.timeBooking && item.id === dataOrder.scheduleId
                              ? "btn-time-list-active"
                              : "btn-time-list"
                          }`}
                          onClick={() =>
                            changeDataBooking({
                              name: data.name,
                              price: item.price,
                              timeBooking: time,
                              scheduleId: item.id,
                              dateBooking: date
                            })
                          }
                        >
                          {time}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="price d-flex align-items-center">
                    <h3 className="m-0">Price</h3>
                    <p>Rp {formatIDR(item.price)} / seat</p>
                  </div>
                  <button
                    className="d-flex btn-book btn btn-primary"
                    disabled={item.id === dataOrder.scheduleId ? false : true}
                    onClick={handleBooking}
                  >
                    Book now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default MovieDetails;
