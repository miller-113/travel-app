import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TripModal from "../components/TripModal";
import { fetchTripById } from "../features/trips/tripsThunks";

import { RootState } from "../app/store";

const TripDetails = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const trip = useSelector((state: RootState) => state.trips.trip);
  const loading = useSelector((state: RootState) => state.trips.loading);
  const error = useSelector((state: RootState) => state.trips.error);

  useEffect(() => {
    if (tripId) {
      dispatch(fetchTripById(tripId) as any);
    }
  }, [dispatch, tripId]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!trip) {
    return (
      <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <p>Trip not found</p>
      </main>
    );
  }

  const { title, level, duration, price, image, description } = trip;

  return (
    <main className="trip-page">
      {loading ? (
        <div data-test-id="loader">Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <h1 className="visually-hidden">Travel App</h1>
          <div className="trip">
            <img
              data-test-id="trip-details-image"
              src={image}
              className="trip__img"
              alt="trip photo"
            />
            <div className="trip__content">
              <div className="trip-info">
                <h3 data-test-id="trip-details-title" className="trip-info__title">
                  {title}
                </h3>
                <div className="trip-info__content">
                  <span data-test-id="trip-details-duration" className="trip-info__duration">
                    <strong>{duration}</strong> days
                  </span>
                  <span data-test-id="trip-details-level" className="trip-info__level">
                    {level}
                  </span>
                </div>
              </div>
              <div data-test-id="trip-details-description" className="trip__description">
                {description}
              </div>
              <div className="trip-price">
                <span>Price</span>
                <strong data-test-id="trip-details-price-value" className="trip-price__value">
                  ${price}
                </strong>
              </div>
              <button
                data-test-id="trip-details-button"
                className="trip__button button"
                onClick={openModal}
              >
                Book a trip
              </button>
            </div>
          </div>
          {isModalOpen && <TripModal trip={trip} onClose={closeModal} />}
        </>
      )}
    </main>
  );
};

export default TripDetails;
