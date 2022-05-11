import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";
import { Link } from "react-router-dom";

// Assets IMG
import blackWidow from "../../assets/img/home/black-widow.png";

function ManageMovie() {
  return (
    <>
    <div class="manageMovie">
      <NavbarSignIn></NavbarSignIn>

        <main class="manageMovie_main container">
          <section class="allMovie_title">
            <h1>Form Movie</h1>
            <div class="formMovie">

            </div>
          </section>

          <section class="allMovie_title mb-5 d-flex">
            <h1>Data Movie</h1>
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

          <section class="allMovie">
            <div class="home_showing-list allMovie_list container d-flex">
              <div class="showing-card-active allMovie_card">
                <img src={blackWidow} alt="" />
                <div class="showing-card-content">
                  <h3>Black Widow</h3>
                  <p>Action, Adventure, Sci-Fi</p>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary"
                    aria-current="page"
                    href="/"
                  >
                    Update
                  </a>
                  </Link>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
                    aria-current="page"
                    href="/"
                  >
                    Delete
                  </a>
                  </Link>
                </div>
              </div>
              <div class="showing-card-active allMovie_card">
                <img src={blackWidow} alt="" />
                <div class="showing-card-content">
                  <h3>Black Widow</h3>
                  <p>Action, Adventure, Sci-Fi</p>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary"
                    aria-current="page"
                    href="/"
                  >
                    Update
                  </a>
                  </Link>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
                    aria-current="page"
                    href="/"
                  >
                    Delete
                  </a>
                  </Link>
                </div>
              </div>
              <div class="showing-card-active allMovie_card">
                <img src={blackWidow} alt="" />
                <div class="showing-card-content">
                  <h3>Black Widow</h3>
                  <p>Action, Adventure, Sci-Fi</p>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary"
                    aria-current="page"
                    href="/"
                  >
                    Update
                  </a>
                  </Link>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
                    aria-current="page"
                    href="/"
                  >
                    Delete
                  </a>
                  </Link>
                </div>
              </div>
              <div class="showing-card-active allMovie_card">
                <img src={blackWidow} alt="" />
                <div class="showing-card-content">
                  <h3>Black Widow</h3>
                  <p>Action, Adventure, Sci-Fi</p>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary"
                    aria-current="page"
                    href="/"
                  >
                    Update
                  </a>
                  </Link>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
                    aria-current="page"
                    href="/"
                  >
                    Delete
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
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary"
                    aria-current="page"
                    href="/"
                  >
                    Update
                  </a>
                  </Link>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
                    aria-current="page"
                    href="/"
                  >
                    Delete
                  </a>
                  </Link>
                </div>
              </div>
              <div class="showing-card-active allMovie_card">
                <img src={blackWidow} alt="" />
                <div class="showing-card-content">
                  <h3>Black Widow</h3>
                  <p>Action, Adventure, Sci-Fi</p>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary"
                    aria-current="page"
                    href="/"
                  >
                    Update
                  </a>
                  </Link>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
                    aria-current="page"
                    href="/"
                  >
                    Delete
                  </a>
                  </Link>
                </div>
              </div>
              <div class="showing-card-active allMovie_card">
                <img src={blackWidow} alt="" />
                <div class="showing-card-content">
                  <h3>Black Widow</h3>
                  <p>Action, Adventure, Sci-Fi</p>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary"
                    aria-current="page"
                    href="/"
                  >
                    Update
                  </a>
                  </Link>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
                    aria-current="page"
                    href="/"
                  >
                    Delete
                  </a>
                  </Link>
                </div>
              </div>
              <div class="showing-card-active allMovie_card">
                <img src={blackWidow} alt="" />
                <div class="showing-card-content">
                  <h3>Black Widow</h3>
                  <p>Action, Adventure, Sci-Fi</p>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary"
                    aria-current="page"
                    href="/"
                  >
                    Update
                  </a>
                  </Link>
                  <Link to="../">
                  <a
                    class="d-flex btn-showing btn btn-outline-primary mt-3 btn-delete"
                    aria-current="page"
                    href="/"
                  >
                    Delete
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

export default ManageMovie;
