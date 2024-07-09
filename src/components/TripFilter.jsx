const TripFilter = () => {
  // TODO add action onChange for each section(input)
  // TODO add reset filter action
  const optionsFilterDuration = ["duration", "&lt; 5 days", "&lt; 10 days", "&ge; 10 days"].map((option, ind) => (
    <option value={ind === 0 ? "" : option} key={ind}>
      {option}
    </option>
  ));
  const optionsFilterLevel = ["level", "easy", "moderate", "difficult"].map((option, ind) => (
    <option value={ind === 0 ? "" : option} key={ind}>
      {option}
    </option>
  ));
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
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select data-test-id="filter-duration" name="duration">
            {optionsFilterDuration}
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select data-test-id="filter-level" name="level">
            {optionsFilterLevel}
          </select>
        </label>
      </form>
    </section>
  );
};
export default TripFilter;
