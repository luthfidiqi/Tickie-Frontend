import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";
import { Link } from "react-router-dom";

// Assets IMG

function ManageSchedule() {
  return (
    <>
    <div class="manageSchedule">
      <NavbarSignIn></NavbarSignIn>

        <main class="manageSchedule_main container">
          
        </main>

      <Footer></Footer>
    </div>
    </>
  );
}

export default ManageSchedule;
