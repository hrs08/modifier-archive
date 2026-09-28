import ModifierCard from './ModifierCard.jsx'

export default function ModifierGrid({ modifiers }) {
  if (modifiers.length === 0) {
    return (
      <div className="grid">
        <div className="empty-state">No modifiers match your search.</div>
      </div>
    )
  }

  return (
    <div className="grid">
      {modifiers.map((mod) => (
        <ModifierCard key={mod.id} modifier={mod} />
      ))}
    </div>
  )
}
