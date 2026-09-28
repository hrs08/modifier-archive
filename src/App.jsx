import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import SearchFilter from './components/SearchFilter.jsx'
import ModifierGrid from './components/ModifierGrid.jsx'
import { modifiers } from './data/modifiers.js'

export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  // Unique category list, derived from the data instead of hand-maintained.
  const categories = useMemo(() => {
    const unique = new Set(modifiers.map((m) => m.category))
    return Array.from(unique).sort()
  }, [])

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return modifiers.filter((m) => {
      const matchesCategory =
        activeCategory === 'all' || m.category === activeCategory
      const matchesSearch =
        query === '' ||
        m.name.toLowerCase().includes(query) ||
        m.effect.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  return (
    <div className="page">
      <Header count={modifiers.length} />

      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ModifierGrid modifiers={filtered} />

      <div className="footer-note">
        edit src/data/modifiers.js to add your own entries
      </div>
    </div>
  )
}
