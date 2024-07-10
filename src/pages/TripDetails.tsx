import { useState } from "react";
import { useParams } from "react-router-dom";
import tripsData from "../data/trips.json";
import TripModal from "../components/TripModal";
import { Trip } from "../types";

const TripDetails = () => {
  const { tripId } = useParams();
  const trip: Trip | undefined = tripsData.find((t) => t.id === tripId);
  
  if (!trip){
    return (
      <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <p>Trip not found</p>
      </main>
    );
  }
  const { title, level, duration, price, image, description } = trip;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
      <div className="trip">
        <img data-test-id="trip-details-image" src={image} className="trip__img" alt="trip photo" />
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
    </main>
  );
};

export default TripDetails;
