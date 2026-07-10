import { useState } from 'react'
import { business, navigation } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#agency" aria-label={`${business.name}, home`}>
        <span className="brand-mark" aria-hidden="true">VP</span>
        <span><b>{business.name}</b><small>Private Café & Adoption Bureau</small></span>
      </a>
      <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        <span className="sr-only">Toggle navigation</span><span/><span/>
      </button>
      <nav id="site-nav" className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
    </header>
  )
}
