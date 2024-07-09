// src/pages/Home.jsx
import { useState, useEffect } from "react";
import tripsData from "../data/trips.json";
import TripCard from "../components/TripCard";
import TripFilter from "../components/TripFilter";

const Home = () => {
  const [trips, setTrips] = useState();

  useEffect(() => {
    setTrips(tripsData);
  }, []);

  return (
    <>
      <TripFilter />

      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {trips.map(trip => (
            <TripCard key={trip.id} tripDetails={trip}/>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
