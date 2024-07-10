const TripFilter = ({ filters, onFilterChange, onResetFilters }) => {
  const optionsFilterDuration = ["duration", "< 5 days", "< 10 days", "≥ 10 days"].map(
    (option, ind) => (
      <option value={ind === 0 ? "" : option} key={ind}>
        {option}
      </option>
    )
  );
  const optionsFilterLevel = ["level", "easy", "moderate", "difficult"].map((option, ind) => (
    <option value={ind === 0 ? "" : option} key={ind}>
      {option}
    </option>
  ));
  
  const handleFilter = ({ target }) => onFilterChange(target.getAttribute("name"), target.value);

  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <label className="trips-filter__search input">
          <span className="visually-hidden">Search by name</span>
          <input
            data-test-id="filter-search"
            name="search"
            type="search"
            placeholder="search by title"
            value={filters.search}
            onChange={handleFilter}
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select
            data-test-id="filter-duration"
            name="duration"
            value={filters.duration}
            onChange={handleFilter}
          >
            {optionsFilterDuration}
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select
            data-test-id="filter-level"
            name="level"
            value={filters.level}
            onChange={handleFilter}
          >
            {optionsFilterLevel}
          </select>
        </label>
        <button type="button" onClick={onResetFilters}>
          Reset filters
        </button>
      </form>
    </section>
  );
};

export default TripFilter;
