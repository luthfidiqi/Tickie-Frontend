import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";
import Card from "../../components/Card";

// Assets IMG
import blackWidow from "../../assets/img/home/black-widow.png";
import homeBanner from "../../assets/img/home/home-banner.png";
import tenet from "../../assets/img/home/tenet.png";
import theWitches from "../../assets/img/home/the-witches.png";

function Home() {
  const navigate = useNavigate();

  const limit = 7;
  const months = [
    { number: "", title: "All Movie" },
    { number: 1, title: "January" },
    { number: 2, title: "February" },
    { number: 3, title: "March" },
    { number: 4, title: "April" },
    { number: 5, title: "Mei" },
    { number: 6, title: "June" },
    { number: 7, title: "July" },
    { number: 8, title: "Augst" },
    { number: 9, title: "September" },
    { number: 10, title: "October" },
    { number: 11, title: "November" },
    { number: 12, title: "Desember" }
  ];

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [releaseDate, setReleaseDate] = useState("");

  useEffect(() => {
    getdataMovie();
  }, []);

  useEffect(() => {
    getdataMovie();
  }, [page]);

  useEffect(() => {
    getdataMovie();
  }, [releaseDate]);

  const getdataMovie = async () => {
    try {
      console.log("GET DATA MOVIE");
      // Input
      console.log(limit);
      console.log(page);
      // Proses
      const resultMovie = await axios.get(`movie?page=${page}&limit=${limit}&month=${releaseDate}`);
      console.log(resultMovie);
      // Output
      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDetailMovie = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <NavbarSignIn />

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
            <Link to="../viewAllMovie">
              <Link class="home_show-all" to="../viewAllMovie">
                view all
              </Link>
            </Link>
          </div>
          <div class="showing-list container d-flex">
            {data.map((item) => (
              <div key={item.id}>
                <Card data={item} handleDetail={handleDetailMovie} />
              </div>
            ))}
          </div>
        </section>

        <section class="home_upcoming-movie">
          <div class="home_upcoming-title d-flex container">
            <h2>Upcoming Movies</h2>
            <Link to="../viewAllMovie">
              <div class="home_show-all">view all</div>
            </Link>
          </div>

          <div class="home_upcoming-month d-flex container">
            <div className="month-filter-cont">
              {months.map((item) => (
                <button
                  className={`btn btn-outline-primary ${
                    item.number === releaseDate ? "btn-upcoming-month-active" : "btn-upcoming-month"
                  }`}
                  onClick={() => setReleaseDate(item.number)}
                  key={item.number}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div class="showing-list container d-flex">
            {data.map((item) => (
              <div key={item.id}>
                <Card data={item} handleDetail={handleDetailMovie} />
              </div>
            ))}
          </div>
        </section>
        <section class="home_join-now container">
          <h3>Be the vanguard of the</h3>
          <h2>Moviegoers</h2>
          <div class="home_join-form d-flex">
            <input
              type="email"
              class="form-control home_form-control form-join"
              placeholder="Write your email"
            />
            <Link class="d-flex home_btn-join btn btn-primary" aria-current="page" to="/">
              Join Now
            </Link>
          </div>

          <p>
            By joining you as a Tickitz member, we will always send you the latest updates via email
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
