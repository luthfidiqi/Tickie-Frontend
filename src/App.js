import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React";
import SignIn from "./pages/signIn";
import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";
import Order from "./pages/order";
import Payment from "./pages/payment";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="movieDetails" element={<MovieDetails />} />
        <Route path="order" element={<Order />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
