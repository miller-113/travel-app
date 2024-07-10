import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import TripDetails from "./pages/TripDetails";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/trip/:tripId" element={<TripDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
