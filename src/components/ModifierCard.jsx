import { useState } from 'react'
import RedactedBlock from './RedactedBlock.jsx'

export default function ModifierCard({ modifier }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card" onClick={() => setExpanded(!expanded)}>
      <div className="card-top">
        <div>
          <h3 className="card-title">{modifier.name}</h3>
          <p className="card-effect">{modifier.effect}</p>
        </div>
        <span className="card-tag">{modifier.category}</span>
      </div>

      <div className="card-chevron">
        {expanded ? '− collapse' : '+ expand'}
      </div>

      {expanded && (
        <div className="card-detail">
          {modifier.connections.length > 0 && (
            <div className="detail-block">
              <p className="detail-label">connections</p>
              <div className="connections">
                {modifier.connections.map((name) => (
                  <span className="connection-tag" key={name}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="detail-block">
            <p className="detail-label">known by</p>
            <p className="known-by">{modifier.knownBy.join(', ')}</p>
          </div>

          <div className="detail-block">
            <p className="detail-label">hidden information</p>
            <RedactedBlock text={modifier.hidden} />
          </div>
        </div>
      )}
    </div>
  )
}
