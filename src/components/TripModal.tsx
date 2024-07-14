import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { bookTrip } from "../features/bookings/bookingsThunks";
import { Trip } from "../types";

interface TripModalProps {
  trip: Trip;
  onClose: () => void;
}

const TripModal: FC<TripModalProps> = ({ trip, onClose }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const bookingData = {
      tripId: trip.id,
      guests,
      date,
    };
    dispatch(bookTrip(bookingData) as any);
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
              onChange={(e) => setGuests(Number(e.target.value))}
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
