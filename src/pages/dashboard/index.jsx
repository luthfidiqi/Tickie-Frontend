import "./index.css";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// IMAGE
import graph from "../../assets/img/manage/graph.png";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <NavbarSignIn></NavbarSignIn>

        <div className="dashboard-box d-flex container mt-5 mb-5">
          <div className="dashboard-left me-4">
            <h1>Dashboard</h1>
            <div className="dashboard-card d-flex flex-column justify-content-center align-items-center">
              <img src={graph} alt="" />
            </div>
          </div>

          <div className="dashboard-right">
            <h1>Filtered</h1>
            <div className="dashboard-card">
              <div className="dropdown-style">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Movie
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown mt-3">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Premiere
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown mt-3">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Location
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <button type="submit" className="filter-btn mt-5">
                Filter
              </button>
              <button type="submit" className="reset-btn mt-4">
                Reset
              </button>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default Dashboard;
