function FilterPanel({ groups }) {
  return (
    <aside className="filters-sidebar" data-design-id="filters-sidebar">
      <div className="sidebar-header" data-design-id="sidebar-header">
        <h2>Filters</h2>
        <button type="button" className="text-link">
          Reset All
        </button>
      </div>

      {groups.map((group, groupIndex) => (
        <section
          key={group.title}
          className="filter-group"
          data-design-id={`filter-group-${groupIndex}`}
        >
          <hr className="divider" data-design-id={`divider-${groupIndex}`} />
          <h3>{group.title}</h3>

          <div className="filter-options" data-design-id="filter-options">
            {group.type === 'range' ? (
              <div className="price-range" data-design-id="price-range">
                <div className="range-labels">
                  <span>{group.min}</span>
                  <span>{group.max}</span>
                </div>
                <div className="range-track">
                  <div className="track-fill" />
                </div>
              </div>
            ) : (
              group.options.map((option, index) => (
                <label
                  key={option.label}
                  className="filter-checkbox"
                  data-design-id={`filter-checkbox-${groupIndex}-${index}`}
                >
                  <span className="checkbox-left">
                    <input type="checkbox" defaultChecked={index === 0} />
                    <span>{option.label}</span>
                  </span>
                  <span className="filter-count">{option.count}</span>
                </label>
              ))
            )}
          </div>
        </section>
      ))}
    </aside>
  )
}

export default FilterPanel
