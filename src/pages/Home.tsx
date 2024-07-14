import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TripCard from "../components/TripCard";
import TripFilter from "../components/TripFilter";
import { fetchTrips } from "../features/trips/tripsThunks";

import { RootState } from "../app/store";

const Home = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state: RootState) => state.trips.trips);
  const loading = useSelector((state: RootState) => state.trips.loading);
  const error = useSelector((state: RootState) => state.trips.error);

  const [filters, setFilters] = useState({
    search: "",
    duration: "",
    level: "",
  });

  useEffect(() => {
    dispatch(fetchTrips() as any);
  }, [dispatch]);

  const handleFilterChange = (name: string, value: string) => {
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
        {loading ? (
          <div data-test-id="loader">Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <ul className="trip-list">
            {filteredTrips.map((trip) => (
              <TripCard key={trip.id} tripDetails={trip} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Home;
