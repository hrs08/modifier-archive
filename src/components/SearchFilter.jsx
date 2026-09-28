export default function SearchFilter({
  search,
  onSearchChange,
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="controls">
      <input
        type="text"
        className="search-field"
        placeholder="Search by name or effect…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div className="chip-row">
        <button
          className={`chip ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => onCategoryChange('all')}
        >
          all
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
