import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";
import Order from "./pages/order";
import Payment from "./pages/payment";
import ViewAllMovie from "./pages/viewAllMovie";
import ManageMovie from "./pages/manageMovie";
import ManageSchedule from "./pages/manageSchedule";

import ProfileAccountSet from "./pages/profileAccountSet";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="movieDetails" element={<MovieDetails />} />
        <Route path="order" element={<Order />} />
        <Route path="payment" element={<Payment />} />
        <Route path="viewAllMovie" element={<ViewAllMovie />} />
        <Route path="manageMovie" element={<ManageMovie />} />
        <Route path="manageSchedule" element={<ManageSchedule />} />

        <Route path="profileAccountSet" element={<ProfileAccountSet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
