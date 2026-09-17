function FlightCard({ flight, selected, onSelect, designId }) {
  return (
    <article
      className={selected ? 'flight-card is-selected' : 'flight-card'}
      data-design-id={designId}
    >
      <div className="card-upper" data-design-id="card-upper">
        <div className="airline-badge">
          <span
            className="badge-icon"
            style={{ background: flight.badgeColor }}
          >
            {flight.code}
          </span>
          <span>{flight.airline}</span>
        </div>

        {flight.tag ? <span className="best-tag">{flight.tag}</span> : null}
      </div>

      <div className="itinerary-details" data-design-id="itinerary-details">
        <div className="depart-group">
          <strong>{flight.departTime}</strong>
          <span>
            {flight.departAirport} • {flight.departCity}
          </span>
        </div>

        <div className="progress-bar-visual">
          <span>{flight.duration}</span>
          <div className="line-segment">
            <span className="dot" />
            <span className="line" />
            <span className="dot" />
          </div>
          <span
            className={
              flight.stops === 'Nonstop' ? 'stops-label' : 'stops-label is-stop'
            }
          >
            {flight.stops}
          </span>
        </div>

        <div className="arrive-group">
          <strong>{flight.arriveTime}</strong>
          <span>
            {flight.arriveAirport} • {flight.arriveCity}
          </span>
        </div>

        <span className="split-line" aria-hidden="true" />

        <div className="pricing-block">
          <strong>{flight.price}</strong>
          <span>round trip</span>
        </div>

        <button
          type="button"
          className={selected ? 'select-indicator is-selected' : 'select-indicator'}
          data-design-id="select-indicator"
          onClick={onSelect}
          aria-label={selected ? 'Selected flight' : 'Select flight'}
        >
          {selected ? '✓' : '→'}
        </button>
      </div>
    </article>
  )
}

export default FlightCard
