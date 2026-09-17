function FlightDetails({ flight }) {
  return (
    <aside className="flight-detail-panel" data-design-id="flight-detail-panel">
      <div className="panel-cover" data-design-id="panel-cover">
        <span className="section-kicker">Selected Departure</span>
        <div className="panel-route-summary" data-design-id="panel-route-summary">
          <h2>
            {flight.departAirport} ➔ {flight.arriveAirport}
          </h2>
          <p>
            {flight.airline} {flight.flightNumber} • {flight.date}
          </p>
        </div>
      </div>

      <div className="panel-body" data-design-id="panel-body">
        <div className="equipment-info" data-design-id="equipment-info">
          <div className="airline-badge">
            <span className="badge-icon" style={{ background: flight.badgeColor }}>
              {flight.code}
            </span>
            <span>{flight.airline}</span>
          </div>
          <span className="aircraft-chip">{flight.aircraft}</span>
        </div>

        <hr className="divider" />

        <div className="travel-timeline" data-design-id="travel-timeline">
          <div className="timeline-node">
            <span className="node-dot" />
            <div className="node-content">
              <strong>
                {flight.departTime} • {flight.departAirportFull}
              </strong>
              <span>{flight.departNote}</span>
            </div>
          </div>

          <div className="timeline-flight-duration">
            <span className="icon-plane" aria-hidden="true" />
            <span>{flight.flightNote}</span>
          </div>

          <div className="timeline-node is-final">
            <span className="node-dot is-filled" />
            <div className="node-content">
              <strong>
                {flight.arriveTime} • {flight.arriveAirportFull}
              </strong>
              <span>{flight.arriveNote}</span>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="fare-perks" data-design-id="fare-perks">
          <h3>Fare Benefits</h3>
          <div className="perks-list">
            {flight.perks.map((perk) => (
              <span
                key={perk.label}
                className={perk.highlight ? 'perk-badge is-highlight' : 'perk-badge'}
              >
                {perk.label}
              </span>
            ))}
          </div>
        </div>

        <hr className="divider" />

        <div className="checkout-box" data-design-id="checkout-box">
          <div className="pricing-row">
            <span>Total Fare (1 Adult)</span>
            <strong>{flight.price}</strong>
          </div>
          <button type="button" className="checkout-cta" data-design-id="checkout-cta">
            Select Seat & Checkout
          </button>
        </div>
      </div>
    </aside>
  )
}

export default FlightDetails
