import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TripModal = ({ trip, onClose }) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const booking = {
      id: uuidv4(),
      trip: {
        title: trip.title,
        duration: trip.duration,
        price: trip.price,
      },
      guests,
      title: trip.title,
      date,
      totalPrice: trip.price * guests,
    };

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    onClose();
  };

  return (
    <div className="modal">
      <div data-test-id="book-trip-popup" className="book-trip-popup">
        <button
          data-test-id="book-trip-popup-close"
          className="book-trip-popup__close"
          onClick={onClose}
        >
          ×
        </button>
        <form className="book-trip-popup__form" onSubmit={handleSubmit} autoComplete="off">
          <div className="trip-info">
            <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
              {trip.title}
            </h3>
            <div className="trip-info__content">
              <span data-test-id="book-trip-popup-duration" className="trip-info__duration">
                <strong>{trip.duration}</strong> days
              </span>
              <span data-test-id="book-trip-popup-level" className="trip-info__level">
                {trip.level}
              </span>
            </div>
          </div>
          <label className="input">
            <span className="input__heading">Date</span>
            <input
              data-test-id="book-trip-popup-date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label className="input">
            <span className="input__heading">Number of guests</span>
            <input
              data-test-id="book-trip-popup-guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </label>
          <span className="book-trip-popup__total">
            Total:
            <output
              data-test-id="book-trip-popup-total-value"
              className="book-trip-popup__total-value"
            >
              ${trip.price * guests}
            </output>
          </span>
          <button data-test-id="book-trip-popup-submit" className="button" type="submit">
            Book a trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default TripModal;
