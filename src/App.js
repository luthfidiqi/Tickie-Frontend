import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Forgot from "./pages/forgot";
import UpdatePass from "./pages/updatePass";

import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";
import Order from "./pages/order";
import Payment from "./pages/payment";
import ViewAllMovie from "./pages/viewAllMovie";

import AccountSet from "./pages/accountSet";
import OrderHistory from "./pages/orderHistory";
import Ticket from "./pages/ticket";

import ManageMovie from "./pages/manageMovie";
import ManageSchedule from "./pages/manageSchedule";
import Dashboard from "./pages/dashboard";

import PrivateRoute from "./helpers/route/privateRoute";
import PublicRoute from "./helpers/route/publicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute restricted={true} />}>
          <Route path="/" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="updatePass" element={<UpdatePass />} />
        </Route>

        <Route element={<PrivateRoute isAdmin={false} />}>
          <Route path="home" element={<Home />} />
          <Route path="viewAllMovie" element={<ViewAllMovie />} />
          <Route path="detail/:id" element={<MovieDetails />} />
          <Route path="order" element={<Order />} />
          <Route path="payment" element={<Payment />} />

          <Route path="accountSet" element={<AccountSet />} />
          <Route path="orderHistory" element={<OrderHistory />} />
          <Route path="ticket" element={<Ticket />} />
        </Route>

        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="manageMovie" element={<ManageMovie />} />
          <Route path="manageSchedule" element={<ManageSchedule />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
