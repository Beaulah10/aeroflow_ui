function DestinationCard({ destination, designId }) {
  return (
    <article className="dest-card" data-design-id={designId}>
      <div
        className={`dest-image dest-image-${destination.gradient}`}
        data-design-id="dest-image"
      />

      <div className="dest-info" data-design-id="dest-info">
        <div className="dest-text" data-design-id="text">
          <h3>{destination.city}</h3>
          <p>{destination.country}</p>
        </div>

        <div className="price-badge" data-design-id="price-badge">
          <span>Fares from</span>
          <strong>{destination.price}</strong>
        </div>
      </div>
    </article>
  )
}

export default DestinationCard
