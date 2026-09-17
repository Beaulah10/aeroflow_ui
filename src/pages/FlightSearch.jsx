import Navbar from '../components/Navbar.jsx'
import SearchForm from '../components/SearchForm.jsx'
import DestinationCard from '../components/DestinationCard.jsx'

const recentSearches = [
  { from: 'JFK', to: 'CDG', dates: 'Nov 02 - Nov 09', cabin: 'Economy' },
  { from: 'MIA', to: 'HND', dates: 'Dec 18 - Jan 04', cabin: 'Business' },
  { from: 'LAX', to: 'SFO', dates: 'Oct 25 - Oct 28', cabin: 'Economy' },
]

const destinations = [
  { city: 'Paris', country: 'France', price: '$490', gradient: 'paris' },
  { city: 'Tokyo', country: 'Japan', price: '$850', gradient: 'tokyo' },
  { city: 'Reykjavik', country: 'Iceland', price: '$620', gradient: 'reykjavik' },
  { city: 'Rome', country: 'Italy', price: '$510', gradient: 'rome' },
]

function FlightSearch({ onContinue }) {
  return (
    <div className="page page-search" data-design-id="flight-search">
      <Navbar />

      <section className="hero-section" data-design-id="hero-section">
        <div className="hero-text" data-design-id="hero-text">
          <h1>Where to next, traveler?</h1>
          <p>Find the lowest fares to 400+ destinations worldwide</p>
        </div>

        <SearchForm onSubmit={onContinue} />
      </section>

      <main className="search-insights" data-design-id="search-insights">
        <section className="recent-searches" data-design-id="recent-searches">
          <h2>Recent Searches</h2>

          <div className="recent-items" data-design-id="recent-items">
            {recentSearches.map((search, index) => (
              <article
                key={`${search.from}-${search.to}`}
                className="recent-card"
                data-design-id={`recent-card-${index}`}
              >
                <span className="route-visual" aria-hidden="true">
                  <span className="icon-clock" />
                </span>

                <div className="route-details">
                  <div className="route-codes">
                    <strong>{search.from}</strong>
                    <span className="icon-arrow-right" aria-hidden="true" />
                    <strong>{search.to}</strong>
                  </div>
                  <p>
                    {search.dates} • {search.cabin}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="popular-destinations"
          data-design-id="popular-destinations"
        >
          <h2>Trending Autumn Getaways</h2>

          <div className="grid-destinations" data-design-id="grid-destinations">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.city}
                destination={destination}
                designId={`dest-card-${index}`}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default FlightSearch
