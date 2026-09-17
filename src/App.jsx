import { useEffect, useMemo, useState } from 'react'
import './App.css'
import FlightSearch from './pages/FlightSearch.jsx'
import FlightSelection from './pages/FlightSelection.jsx'

const pageFromHash = (hash) => {
  if (hash === '#selection') {
    return 'selection'
  }

  return 'search'
}

function App() {
  const [page, setPage] = useState(() => pageFromHash(window.location.hash))

  useEffect(() => {
    const handleHashChange = () => {
      setPage(pageFromHash(window.location.hash))
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const onNavigate = useMemo(
    () => ({
      search: () => {
        window.location.hash = 'search'
      },
      selection: () => {
        window.location.hash = 'selection'
      },
    }),
    [],
  )

  return (
    <div className="app-shell">
      {page === 'search' ? (
        <FlightSearch onContinue={onNavigate.selection} />
      ) : (
        <FlightSelection onEditSearch={onNavigate.search} />
      )}
    </div>
  )
}

export default App
