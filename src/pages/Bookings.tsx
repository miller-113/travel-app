import { useState, useEffect } from "react";
import bookingsData from "../data/bookings.json";
import BookingCard from "../components/BookingCard";

import { Booking } from "../types";

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const cancelBooking = (bookingId: string) =>
    setBookings((prevState) => {
      const filteredBookings = prevState.filter((booking) => booking.id !== bookingId);
      localStorage.setItem("bookings", JSON.stringify(filteredBookings));
      return filteredBookings;
    });
  useEffect(() => {
    const bookingsFromStorage = localStorage.getItem("bookings");
    if (bookingsFromStorage) {
      setBookings(JSON.parse(bookingsFromStorage));
    } else {
      setBookings(bookingsData);
    }
  }, []);

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings &&
          bookings.map((booking) => (
            <BookingCard key={booking.id} bookingDetails={booking} onCancel={cancelBooking} />
          ))}
      </ul>
    </main>
  );
};

export default Bookings;
