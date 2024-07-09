const BookingCard = ({ bookingDetails, onCancel }) => {
  const { id, trip, guests, date, totalPrice } = bookingDetails;
  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {trip.title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {guests} guests
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {date}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        ${totalPrice}
      </span>
      <button
        onClick={() => onCancel(id)}
        data-test-id="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
      >
        <span className="visually-hidden">Cancel booking</span>x
      </button>
    </li>
  );
};
export default BookingCard;
