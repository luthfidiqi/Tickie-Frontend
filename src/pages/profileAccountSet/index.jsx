import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

// Assets IMG
import userPhoto from "../../assets/img/profile/user_photo.png";

function ProfileAccountSet() {
  return (
    <>
    <div class="profile">
      <NavbarSignIn></NavbarSignIn>

      <main class="profile_main d-flex container">
        <div class="profile-left-content">
          <section class="user-info">
          <h1>INFO</h1>
          <img src={userPhoto} alt="" />
          <h2>Jonas El Rodriguez</h2>
          <h3>Moviegoers</h3>
          <button type="button" class="btn btn-primary">Logout</button>
          </section>
        </div>
        <div class="profile-right-content">
          
        </div>
      </main>

      <Footer></Footer>
    </div>
    </>
  );
}

export default ProfileAccountSet;
