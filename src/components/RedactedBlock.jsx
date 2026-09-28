import { useState } from 'react'

// A block of text that starts hidden behind a solid cover.
// Clicking the cover reveals the text underneath with a short fade.
// Stops the click from bubbling up so it doesn't also toggle a parent card.
export default function RedactedBlock({ text }) {
  const [revealed, setRevealed] = useState(false)

  function handleReveal(e) {
    e.stopPropagation()
    setRevealed(true)
  }

  return (
    <div className="redact-box">
      <p className="redact-content">{text}</p>
      <div
        className={`redact-cover ${revealed ? 'revealed' : ''}`}
        onClick={handleReveal}
        role="button"
        tabIndex={0}
        aria-label="Reveal hidden information"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleReveal(e)
        }}
      >
        <span>Tap to reveal</span>
      </div>
    </div>
  )
}
