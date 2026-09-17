const navItems = ['Book', 'Manage', 'Flight Status', 'Explore', 'Loyalty']

function Navbar() {
  return (
    <header className="navbar" data-design-id="navigation-header">
      <div className="brand" data-design-id="brand">
        <div className="brand-mark" data-design-id="logo-mark" aria-hidden="true">
          <span className="brand-plane" />
        </div>
        <span className="brand-name">AeroFlow</span>
      </div>

      <nav className="nav-links" data-design-id="nav-links" aria-label="Primary">
        {navItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={index === 0 ? 'nav-link is-active' : 'nav-link'}
            data-design-id={`nav-item-${item}`}
            onClick={(event) => event.preventDefault()}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="user-actions" data-design-id="user-actions">
        <button
          type="button"
          className="currency-selector"
          data-design-id="currency-selector"
        >
          USD <span className="chevron-down" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="icon-button"
          data-design-id="support-btn"
          aria-label="Support"
        >
          ?
        </button>
        <button
          type="button"
          className="profile-trigger"
          data-design-id="profile-trigger"
        >
          <span className="profile-avatar" aria-hidden="true" />
          S. Miller
        </button>
      </div>
    </header>
  )
}

export default Navbar
