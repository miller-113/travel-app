import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings, cancelBooking } from "../features/bookings/bookingsThunks";
import BookingCard from "../components/BookingCard";
import { RootState } from "../app/store";

const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.bookings.bookings);
  const loading = useSelector((state: RootState) => state.bookings.loading);
  const error = useSelector((state: RootState) => state.bookings.error);

  useEffect(() => {
    dispatch(fetchBookings() as any);
  }, [dispatch]);

  const handleCancelBooking = (bookingId: string) => {
    dispatch(cancelBooking(bookingId) as any);
  };
  

  if (loading) {
    return <div data-test-id="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings &&
          bookings.map((booking) => (
            <BookingCard key={booking.id} bookingDetails={booking} onCancel={handleCancelBooking} />
          ))}
      </ul>
    </main>
  );
};

export default Bookings;
