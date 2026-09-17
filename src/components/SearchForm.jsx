const tripTypes = ['Round-trip', 'One-way', 'Multi-city']

function SearchForm({ onSubmit }) {
  return (
    <div className="search-board" data-design-id="search-board">
      <div className="options-bar" data-design-id="options-bar">
        <div className="trip-types" data-design-id="trip-types">
          {tripTypes.map((type, index) => (
            <button
              key={type}
              type="button"
              className={index === 0 ? 'trip-type is-active' : 'trip-type'}
              data-design-id={type}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="dropdown-selectors" data-design-id="dropdown-selectors">
          <button
            type="button"
            className="dropdown-selector"
            data-design-id="passengers-dropdown"
          >
            <span className="icon-user" aria-hidden="true" />
            1 Passenger
            <span className="chevron-down" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="dropdown-selector"
            data-design-id="class-dropdown"
          >
            Economy
            <span className="chevron-down" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="fields-row" data-design-id="fields-row">
        <div className="airports-group" data-design-id="airports-group">
          <label className="airport-selector" data-design-id="airport-selector-0">
            <span>From</span>
            <div className="airport-info">
              <strong>JFK</strong>
              <span>New York, USA</span>
            </div>
          </label>

          <button
            type="button"
            className="swap-btn"
            data-design-id="swap-btn"
            aria-label="Swap airports"
          >
            <span className="icon-swap" aria-hidden="true" />
          </button>

          <label className="airport-selector" data-design-id="airport-selector-1">
            <span>To</span>
            <div className="airport-info">
              <strong>LHR</strong>
              <span>London, United Kingdom</span>
            </div>
          </label>
        </div>

        <div className="dates-group" data-design-id="dates-group">
          <label className="date-selector" data-design-id="date-selector-0">
            <span>Depart</span>
            <div className="date-info">
              <strong>Oct 14</strong>
              <span>Monday</span>
            </div>
          </label>
          <label className="date-selector" data-design-id="date-selector-1">
            <span>Return</span>
            <div className="date-info">
              <strong>Oct 21</strong>
              <span>Monday</span>
            </div>
          </label>
        </div>
      </div>

      <div className="action-row" data-design-id="action-row">
        <label className="promo-checkbox" data-design-id="promo-checkbox">
          <input type="checkbox" />
          <span>Add promo code / discount companion ticket</span>
        </label>

        <button
          type="button"
          className="search-cta"
          data-design-id="search-cta"
          onClick={onSubmit}
        >
          Search Flights <span className="icon-arrow-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default SearchForm
