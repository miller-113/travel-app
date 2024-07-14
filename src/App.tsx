import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthenticatedUser, signOut } from "./features/auth/authThunks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import TripDetails from "./pages/TripDetails";
import Bookings from "./pages/Bookings";
import { RootState } from "./app/store";

function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchAuthenticatedUser() as any);
    }
  }, [dispatch]);

  if (loading) {
    return <div data-test-id="loader">Loading...</div>;
  }

  return (
    <BrowserRouter basename="/travel-app">
      <Header user={user} onSignOut={() => dispatch(signOut() as any)} />
      <Routes>
        <Route path="/sign-up" element={user ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/sign-in" element={user ? <Navigate to="/" /> : <SignIn />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/sign-in" />} />
        <Route path="/trip/:tripId" element={user ? <TripDetails /> : <Navigate to="/sign-in" />} />
        <Route path="/bookings" element={user ? <Bookings /> : <Navigate to="/sign-in" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
