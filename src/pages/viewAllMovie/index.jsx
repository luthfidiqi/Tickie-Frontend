import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";
import { Link } from "react-router-dom";

// Assets IMG
import blackWidow from "../../assets/img/home/black-widow.png";
import tenet from "../../assets/img/home/tenet.png";
import theWitches from "../../assets/img/home/the-witches.png";

function ViewAllMovie() {
  return (
    <>
    <div class="viewAllMovie">
      <NavbarSignIn></NavbarSignIn>

        <main class="viewAllMovie_main container">
          <section class="allMovie_title mb-5 d-flex">
            <h1>List Movie</h1>
            <div class="d-flex">
              <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div class="ml-2">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail"
                  placeholder="Search Movie Name ..."
                />
              </div>
            </div>
          
          </section>

          <section class="home_upcoming-month d-flex container px-0">
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
          </section>

          <section class="allMovie">
            <div class="home_showing-list allMovie_list container d-flex">
              <div class="showing-card-active allMovie_card">
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
              <div class="showing-card-active allMovie_card">
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
              <div class="showing-card-active allMovie_card">
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
              <div class="showing-card-active allMovie_card">
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
            </div>
            
            {/* ROW 2 */}
            <div class="home_showing-list allMovie_list container d-flex mt-5">
              <div class="showing-card-active allMovie_card">
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
              <div class="showing-card-active allMovie_card">
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
              <div class="showing-card-active allMovie_card">
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
              <div class="showing-card-active allMovie_card">
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
            </div>
          </section>

          <section class="allMovie_pagination">
            <nav aria-label="...">
              <ul class="pagination pagination-md">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
              </ul>
            </nav>
          </section>

        </main>

      <Footer></Footer>
    </div>
    </>
  );
}

export default ViewAllMovie;
