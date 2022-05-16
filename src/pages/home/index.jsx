import "./index.css";
import Footer from "../../components/footer";
import NavbarSignUp from "../../components/NavbarSignUp";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import CardHome from "../../components/CardHome";
import axios from "../../utils/axios";


// Assets IMG
import blackWidow from "../../assets/img/home/black-widow.png";
import homeBanner from "../../assets/img/home/home-banner.png";
import tenet from "../../assets/img/home/tenet.png";
import theWitches from "../../assets/img/home/the-witches.png";

function Home() {
  const limit = 9;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const sort = "id ASC";

  useEffect(() => {
    getdataMovie();
  }, []);

  const getdataMovie = async () => {
    try {
      console.log("GET DATA MOVIE");
      // Input
        console.log(limit);
        console.log(page);
      // Proses
      const resultMovie = await axios.get(`movie?page=${page}&limit=${limit}`);
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
  };


  return (
    <>
      <NavbarSignUp />

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
            <a class="home_show-all" href="/">view all</a>
            </Link>
          </div>
          <div class="showing-list container d-flex">
            {data.map((item) => (
            <div key={item.id}>
              <CardHome data={item} handleDetail={handleDetailMovie} />
            </div>
            ))}
          </div>
        </section>

        
        <section class="home_upcoming-movie">
          <div class="home_upcoming-title d-flex container">
            <h2>Upcoming Movies</h2>
            <Link to="/">
              <a class="home_show-all" href="/viewAllMovie">view all</a>
            </Link>
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
                <Link to="../movieDetails">
                <a
                  class="d-flex btn-showing btn btn-outline-primary"
                  aria-current="page"
                  href="/"
                >
                  Details
                </a>
                </Link>
              </div>
            </div>
            <div class="showing-card-active">
              <img src={theWitches} alt="" />
              <div class="showing-card-content">
                <h3>The Witches</h3>
                <p>Adventure, Comedy</p>
                <Link to="../movieDetails">
                <a
                  class="d-flex btn-showing btn btn-outline-primary"
                  aria-current="page"
                  href="/"
                >
                  Details
                </a>
                </Link>
              </div>
            </div>
            <div class="showing-card-active">
              <img src={tenet} alt="" />
              <div class="showing-card-content">
                <h3>Tenet</h3>
                <p>Action, Sci-Fi</p>
                <Link to="../movieDetails">
                <a
                  class="d-flex btn-showing btn btn-outline-primary"
                  aria-current="page"
                  href="/"
                >
                  Details
                </a>
                </Link>
              </div>
            </div>
            <div class="showing-card-active">
              <img src={blackWidow} alt="" />
              <div class="showing-card-content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <Link to="../movieDetails">
                <a
                  class="d-flex btn-showing btn btn-outline-primary"
                  aria-current="page"
                  href="/"
                >
                  Details
                </a>
                </Link>
              </div>
            </div>
            <div class="showing-card-active">
              <img src={theWitches} alt="" />
              <div class="showing-card-content">
                <h3>The Witches</h3>
                <p>Adventure, Comedy</p>
                <Link to="../movieDetails">
                <a
                  class="d-flex btn-showing btn btn-outline-primary"
                  aria-current="page"
                  href="/"
                >
                  Details
                </a>
                </Link>
              </div>
            </div>
            <div class="showing-card-active">
              <img src={tenet} alt="" />
              <div class="showing-card-content">
                <h3>Tenet</h3>
                <p>Action, Sci-Fi</p>
                <Link to="../movieDetails">
                <a
                  class="d-flex btn-showing btn btn-outline-primary"
                  aria-current="page"
                  href="/"
                >
                  Details
                </a>
                </Link>
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

      <Footer />
    </>
  );
}

export default Home;
