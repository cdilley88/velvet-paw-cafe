import { useState } from 'react'
import { menuCategories } from '../data/menu'
import { SectionHeading } from './SectionHeading'

const formatPrice = (price: number) => `$${price.toFixed(2).replace('.00', '')}`

export function Menu() {
  const [active, setActive] = useState(menuCategories[0].id)
  const category = menuCategories.find((item) => item.id === active) ?? menuCategories[0]
  return <section className="menu-section section-pad" id="evidence-locker">
    <SectionHeading light eyebrow="Evidence Locker · Café Menu" title="Exhibits worth examining." intro="Prepared in a separate, fully licensed café kitchen. No cats near the croissants—despite ongoing negotiations." />
    <div className="menu-tabs" role="tablist" aria-label="Menu categories">
      {menuCategories.map((item) => <button key={item.id} role="tab" aria-selected={active === item.id} aria-controls="menu-panel" onClick={() => setActive(item.id)}>{item.label}</button>)}
    </div>
    <div className="menu-sheet" id="menu-panel" role="tabpanel" tabIndex={0}>
      <div className="menu-sheet-head"><span>Evidence log</span><h3>{category.label}</h3><span>Prices subject to sensible revision</span></div>
      <div className="menu-items">{category.items.map((item) => <article key={item.name}>
        <div className="menu-title"><h4>{item.name}</h4><span/><b>{formatPrice(item.price)}</b></div><p className="plain-name">{item.plainName}</p><p>{item.description}</p>
        {item.tags && <ul className="tags" aria-label="Dietary information">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
      </article>)}</div>
      <p className="menu-note">Please tell your server about allergies. Our staff can explain ingredients, substitutions, and which cat has been falsely accused.</p>
    </div>
  </section>
}
