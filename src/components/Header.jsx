export default function Header({ count }) {
  return (
    <header className="header">
      <h1>Modifier Archive</h1>
      <p>
        A searchable record of story modifiers — what each one does, what it
        hides, and how it connects to everything else.
      </p>
      <div className="count">{count} entries catalogued</div>
    </header>
  )
}
