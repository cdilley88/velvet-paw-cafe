import { useState } from 'react'
import { cats } from '../data/cats'
import { SectionHeading } from './SectionHeading'

export function CaseFiles() {
  const [expanded, setExpanded] = useState<string | null>(null)
  return <section className="case-section section-pad" id="case-files">
    <SectionHeading eyebrow="Resident Operatives · Restricted Access" title="The case files." intro="Six persons of interest. Numerous allegations. Not one credible confession." />
    <div className="case-grid">
      {cats.map((cat, index) => {
        const isOpen = expanded === cat.caseNumber
        return <article className={`case-card${isOpen ? ' case-open' : ''}`} key={cat.caseNumber}>
          <div className="case-image-wrap">
            <img src={cat.portrait} style={{ objectPosition: cat.portraitPosition }} alt={`${cat.name}, ${cat.alias}`} />
            <span className="case-stamp">{cat.adoptionStatus}</span>
            <span className="case-index">{String(index + 1).padStart(2, '0')} / {String(cats.length).padStart(2, '0')}</span>
          </div>
          <div className="case-body">
            <p className="case-number">Case file {cat.caseNumber}</p><h3>{cat.name}</h3><p className="case-alias">Alias: {cat.alias}</p>
            <dl><div><dt>Age</dt><dd>{cat.age}</dd></div><div><dt>Disposition</dt><dd>{cat.personality}</dd></div><div><dt>Last seen</dt><dd>{cat.lastSeen}</dd></div></dl>
            <button className="file-toggle" type="button" aria-expanded={isOpen} onClick={() => setExpanded(isOpen ? null : cat.caseNumber)}>
              {isOpen ? 'Close confidential notes' : 'Open confidential notes'} <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="confidential" hidden={!isOpen}>
              <p><b>Known associates:</b> {cat.associates}</p><p><b>Alleged offenses:</b> {cat.offenses.join(', ')}</p><p><b>Interrogation snack:</b> {cat.snack}</p><p><b>Current status:</b> {cat.status}</p><p className="hand-note">Desk note: {cat.note}</p>
            </div>
          </div>
        </article>
      })}
    </div>
  </section>
}
