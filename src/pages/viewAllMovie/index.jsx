import "./index.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataMovie } from "../../stores/actions/movie";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";
import Card from "../../components/Card";

function ViewAllMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const limit = 8;
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
  // const [data, setData] = useState([]);
  const [releaseDate, setReleaseDate] = useState("");

  const movie = useSelector((state) => state.movie);

  let totalPagination = [];
  for (let i = 1; i <= movie.pageInfo.totalPage; i++) {
    totalPagination.push(i);
  }

  const [form, setForm] = useState({
    search: "",
    sort: ""
  });
  const handleChangeForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    getdataMovie();
  };

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
      await dispatch(getDataMovie(page, limit, form.search, form.sort, releaseDate));
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleDetailMovie = (id) => {
    navigate(`/detail/${id}`);
  };
  const handlePagination = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <>
      <div className="viewAllMovie">
        <NavbarSignIn></NavbarSignIn>

        <main className="viewAllMovie_main container">
          <section className="allMovie_title mb-5 d-flex">
            <h1>List Movie</h1>
            <div className="d-flex">
              <select name="sort" onChange={handleChangeForm}>
                <option value="">Sort</option>
                <option value="DESC">A-Z</option>
                <option value="ASC">Z-A</option>
              </select>

              {/* <div className="dropdown">
                <Link
                  className="btn btn-secondary dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
                </Link>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <div className="dropdown-item" value="">
                      All
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item" value="DESC">
                      A-Z
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item" value="ASC">
                      Z-A
                    </div>
                  </li>
                </ul>
              </div> */}
              <div className="ml-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Movie Name ..."
                  name="search"
                  onChange={handleChangeForm}
                  value={form.search}
                />
              </div>
            </div>
          </section>

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

          <div class="container row">
            {movie.data.map((item) => (
              <div key={item.id} className="col-md-3 mb-5">
                <Card data={item} handleDetail={handleDetailMovie} />
              </div>
            ))}
          </div>

          <section className="allMovie_pagination">
            {totalPagination.map((item) => (
              <button
                className={`btn ${item === page ? "pagination-active" : "pagination"}`}
                key={item.addr}
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            ))}
          </section>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default ViewAllMovie;
