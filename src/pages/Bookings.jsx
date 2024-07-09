import { useState, useEffect } from "react";
import bookingsData from "../data/bookings.json";
import BookingCard from "../components/BookingCard";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const cancelBooking = (bookingId) => setBookings(prevState => (
    prevState.filter(booking => booking.id !== bookingId)
  ))
  useEffect(() => {
    setBookings(bookingsData);
  }, []);

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} bookingDeatails={bookings} onCancel={cancelBooking} />
        ))}
      </ul>
    </main>
  );
};

export default Bookings;
