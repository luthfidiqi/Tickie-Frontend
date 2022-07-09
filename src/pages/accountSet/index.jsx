import "./index.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUserById, updatePasswod } from "../../stores/actions/user";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// COMPONENT
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// IMAGE
import userPhoto from "../../assets/img/profile/user_photo.png";
import iconPassword from "../../assets/img/sign-in/pw-icon.svg";

function AccountSet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const idUser = localStorage.getItem("id");

  const [formUser, setFormUser] = useState({ ...user.data });
  const [formPassword, setFormPassword] = useState({ newPassword: "", confirmPassword: "" });

  const handleChangeFormUser = (event) => {
    const { name, value } = event.target;
    setFormUser({ ...formUser, [name]: value });
  };
  const handleChangeFormPassword = (event) => {
    const { name, value } = event.target;
    setFormPassword({ ...formPassword, [name]: value });
  };

  const handleSubmitDetail = async (e) => {
    try {
      e.preventDefault();
      setFormUser({ ...formUser });
      const sendData = { id: idUser, ...formUser };
      console.log(sendData);
      await dispatch(updateUser(idUser, formUser));
      await dispatch(getUserById(idUser));
      toast.success("Success Update Profile");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitPassword = async (e) => {
    try {
      e.preventDefault();
      setFormPassword({ ...formPassword });
      const sendDataPassword = { id: idUser, ...formPassword };
      console.log(sendDataPassword);
      await dispatch(updatePasswod(idUser, formPassword));
      setFormPassword({ newPassword: "", confirmPassword: "" });
      toast.success("Success Update Password");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.msg);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <ToastContainer />
      <div className="profile">
        <NavbarSignIn></NavbarSignIn>

        <section className="switch-mobile">
          <div className="switch-nav">
            <div className="switch-active">
              <Link to="/accountSet">Account Settings</Link>
            </div>
            <div className="switch-nonactive">
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
            <div className="switch-nav disable-mobile">
              <div className="switch-active">
                <Link to="/accountSet">Account Settings</Link>
              </div>
              <div className="switch-nonactive">
                <Link to="/orderHistory">Order History</Link>
              </div>
            </div>

            <div className="details mt-4">
              <p>Details Information</p>
              <hr />
              <form className="signIn_form details-form mt-5">
                <div className="details-form d-flex">
                  <div className="details-input me-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write your first name"
                      name="firstName"
                      onChange={handleChangeFormUser}
                      value={formUser.firstName}
                    />
                  </div>
                  <div className="details-input ms-3">
                    <label className="form-label">E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Write your email"
                      name="email"
                      onChange={handleChangeFormUser}
                      value={formUser.email}
                    />
                  </div>
                </div>
                <div className="details-form d-flex">
                  <div className="details-input me-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write your last name"
                      name="lastName"
                      onChange={handleChangeFormUser}
                      value={formUser.lastName}
                    />
                  </div>
                  <div className="details-input ms-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write your phone number"
                      name="noTelp"
                      onChange={handleChangeFormUser}
                      value={formUser.noTelp}
                    />
                  </div>
                </div>
                <button
                  onClick={handleSubmitDetail}
                  type="submit"
                  className="signIn_btn btn btn-primary mt-4"
                >
                  Update changes
                </button>
              </form>
            </div>

            <div className="details mt-4 mb-4">
              <p>Account and Privacy</p>
              <hr />
              <form className="signIn_form details-form mt-5">
                <div className="details-form d-flex">
                  <div className="mb-3 signIn_password-input details-input me-3">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Write your password"
                      name="newPassword"
                      onChange={handleChangeFormPassword}
                      value={formPassword.newPassword}
                    />
                    <img className="signIn_icon-pw" src={iconPassword} alt="password icon" />
                  </div>
                  <div className="mb-3 signIn_password-input details-input ms-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm your password"
                      name="confirmPassword"
                      onChange={handleChangeFormPassword}
                      value={formPassword.confirmPassword}
                    />
                    <img className="signIn_icon-pw" src={iconPassword} alt="password icon" />
                  </div>
                </div>
                <button
                  onClick={handleSubmitPassword}
                  type="submit"
                  className="signIn_btn btn btn-primary mt-4"
                >
                  Update changes
                </button>
              </form>
            </div>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default AccountSet;
