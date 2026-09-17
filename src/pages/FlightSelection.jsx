import { useMemo, useState } from 'react'
import FilterPanel from '../components/FilterPanel.jsx'
import FlightCard from '../components/FlightCard.jsx'
import FlightDetails from '../components/FlightDetails.jsx'
import Navbar from '../components/Navbar.jsx'

const filters = [
  {
    title: 'Stops',
    options: [
      { label: 'Nonstop', count: 12 },
      { label: '1 Stop', count: 8 },
      { label: '2+ Stops', count: 2 },
    ],
  },
  {
    title: 'Airlines',
    options: [
      { label: 'Delta Air Lines', count: 4 },
      { label: 'British Airways', count: 3 },
      { label: 'United Airlines', count: 5 },
      { label: 'Virgin Atlantic', count: 2 },
    ],
  },
  {
    title: 'Price Range',
    type: 'range',
    min: '$580',
    max: '$1,850',
  },
  {
    title: 'Departure Times',
    options: [
      { label: 'Morning (6am - 12pm)', count: 6 },
      { label: 'Afternoon (12pm - 6pm)', count: 8 },
      { label: 'Evening (6pm - 12am)', count: 10 },
    ],
  },
]

const flights = [
  {
    id: 'flight-0',
    airline: 'Delta Air Lines',
    code: 'DE',
    badgeColor: '#e53e3e',
    tag: 'Cheapest',
    departTime: '08:15 AM',
    arriveTime: '08:30 PM',
    departAirport: 'JFK',
    departCity: 'New York',
    arriveAirport: 'LHR',
    arriveCity: 'London',
    duration: '7h 15m',
    stops: 'Nonstop',
    price: '$640',
    flightNumber: 'Delta 406',
    date: 'Oct 14',
    aircraft: 'Boeing 767-400ER',
    departAirportFull: "John F. Kennedy Int'l (JFK)",
    departNote: 'Terminal 4 • Check-in opens 3h prior',
    flightNote: '7 hours 15 minutes flight time • In-seat power & USB',
    arriveAirportFull: 'Heathrow Airport (LHR)',
    arriveNote: 'Terminal 3 • Arrives Next Day',
    perks: [
      { label: 'Carry-on included', highlight: true },
      { label: '1st Checked Bag $30' },
      { label: 'Change fee applies' },
    ],
  },
  {
    id: 'flight-1',
    airline: 'British Airways',
    code: 'BR',
    badgeColor: '#2b6cb0',
    tag: 'Fastest',
    departTime: '10:30 AM',
    arriveTime: '11:00 PM',
    departAirport: 'JFK',
    departCity: 'New York',
    arriveAirport: 'LHR',
    arriveCity: 'London',
    duration: '7h 30m',
    stops: 'Nonstop',
    price: '$710',
    flightNumber: 'BA 178',
    date: 'Oct 14',
    aircraft: 'Airbus A350-900',
    departAirportFull: "John F. Kennedy Int'l (JFK)",
    departNote: 'Terminal 7 • Check-in opens 3h prior',
    flightNote: '7 hours 30 minutes flight time • Wi-Fi available',
    arriveAirportFull: 'Heathrow Airport (LHR)',
    arriveNote: 'Terminal 5 • Arrives Next Day',
    perks: [
      { label: 'Carry-on included', highlight: true },
      { label: '1st Checked Bag $35' },
      { label: 'Change fee applies' },
    ],
  },
  {
    id: 'flight-2',
    airline: 'United Airlines',
    code: 'UN',
    badgeColor: '#1a365d',
    tag: null,
    departTime: '06:00 PM',
    arriveTime: '08:45 AM',
    departAirport: 'JFK',
    departCity: 'New York',
    arriveAirport: 'LHR',
    arriveCity: 'London',
    duration: '9h 45m',
    stops: '1 stop LIS',
    price: '$580',
    flightNumber: 'UA 921',
    date: 'Oct 14',
    aircraft: 'Boeing 737 MAX 8',
    departAirportFull: "John F. Kennedy Int'l (JFK)",
    departNote: 'Terminal 8 • Check-in opens 3h prior',
    flightNote: '9 hours 45 minutes flight time • 1 stop in Lisbon (LIS)',
    arriveAirportFull: 'Heathrow Airport (LHR)',
    arriveNote: 'Terminal 2 • Arrives Next Day',
    perks: [
      { label: 'Personal item' },
      { label: 'Paid checked bag' },
      { label: 'Change fee applies' },
    ],
  },
  {
    id: 'flight-3',
    airline: 'Delta Air Lines',
    code: 'DE',
    badgeColor: '#e53e3e',
    tag: 'Best',
    departTime: '09:40 PM',
    arriveTime: '09:55 AM',
    departAirport: 'JFK',
    departCity: 'New York',
    arriveAirport: 'LHR',
    arriveCity: 'London',
    duration: '7h 15m',
    stops: 'Nonstop',
    price: '$640',
    flightNumber: 'Delta 418',
    date: 'Oct 14',
    aircraft: 'Airbus A330-900neo',
    departAirportFull: "John F. Kennedy Int'l (JFK)",
    departNote: 'Terminal 4 • Check-in opens 3h prior',
    flightNote: '7 hours 15 minutes flight time • In-seat power & USB',
    arriveAirportFull: 'Heathrow Airport (LHR)',
    arriveNote: 'Terminal 3 • Arrives Next Day',
    perks: [
      { label: 'Carry-on included', highlight: true },
      { label: '1st Checked Bag $30' },
      { label: 'Change fee applies' },
    ],
  },
]

function FlightSelection({ onEditSearch }) {
  const [selectedFlightId, setSelectedFlightId] = useState(flights[0].id)

  const selectedFlight = useMemo(
    () => flights.find((flight) => flight.id === selectedFlightId) ?? flights[0],
    [selectedFlightId],
  )

  return (
    <div className="page page-selection" data-design-id="flight-selection">
      <Navbar />

      <section className="search-summary-bar" data-design-id="search-summary-bar">
        <div className="summary-left" data-design-id="summary-left">
          <div className="route-chips" data-design-id="route-chips">
            <strong>New York (JFK)</strong>
            <span className="icon-swap" aria-hidden="true" />
            <strong>London (LHR)</strong>
          </div>

          <span className="summary-divider" aria-hidden="true" />

          <div className="search-meta" data-design-id="search-meta">
            <span className="meta-item" data-design-id="meta-item-0">
              <span className="icon-calendar" aria-hidden="true" />
              Oct 14 - Oct 21
            </span>
            <span className="meta-item" data-design-id="meta-item-1">
              <span className="icon-user" aria-hidden="true" />
              1 Passenger, Economy
            </span>
          </div>
        </div>

        <button
          type="button"
          className="edit-search"
          data-design-id="edit-search"
          onClick={onEditSearch}
        >
          <span className="icon-pencil" aria-hidden="true" />
          Edit Search
        </button>
      </section>

      <main className="main-results-layout" data-design-id="main-results-layout">
        <FilterPanel groups={filters} />

        <div
          className="flight-results-center"
          data-design-id="flight-results-center"
        >
          <div className="sorting-header" data-design-id="sorting-header">
            <p>Showing 24 flights matching filters</p>
            <button type="button" className="sort-dropdown" data-design-id="sort-dropdown">
              Sort by: <strong>Best match</strong>
              <span className="chevron-down" aria-hidden="true" />
            </button>
          </div>

          {flights.map((flight, index) => (
            <FlightCard
              key={flight.id}
              flight={flight}
              designId={`flight-card-${index}`}
              selected={flight.id === selectedFlight.id}
              onSelect={() => setSelectedFlightId(flight.id)}
            />
          ))}
        </div>

        <FlightDetails flight={selectedFlight} />
      </main>
    </div>
  )
}

export default FlightSelection
