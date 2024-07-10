import { useState, useEffect } from "react";
import tripsData from "../data/trips.json";
import TripCard from "../components/TripCard";
import TripFilter from "../components/TripFilter";

const Home = () => {
  const [trips, setTrips] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    duration: "",
    level: "",
  });

  useEffect(() => {
    setTrips(tripsData);
  }, []);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: "",
      duration: "",
      level: "",
    });
  };

  const filteredTrips = trips.filter((trip) => {
    const searchMatch = trip.title.toLowerCase().includes(filters.search.toLowerCase());
    const levelMatch = filters.level ? trip.level === filters.level : true;
    const durationMatch = filters.duration
      ? (filters.duration === "< 5 days" && trip.duration <= 5) ||
        (filters.duration === "< 10 days" && trip.duration <= 10) ||
        (filters.duration === "≥ 10 days" && trip.duration >= 10)
      : true;

    return searchMatch && levelMatch && durationMatch;
  });

  return (
    <>
      <TripFilter
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} tripDetails={trip} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
