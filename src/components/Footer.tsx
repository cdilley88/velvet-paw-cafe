import { business, navigation } from '../data/site'

export function Footer() {
  const [addressStart, addressEnd] = business.address.split(' · ')
  return <footer id="contact">
    <div className="footer-top">
      <div className="footer-brand"><span className="brand-mark">VP</span><h2>{business.name}</h2><p>{business.tagline}</p><p className="fictional">A fictional café concept with very real attention to detail.</p></div>
      <div><h3>Visit the office</h3><address>{addressStart}<br />{addressEnd}</address><a href={`tel:${business.phone}`}>{business.phone}</a><a href={`mailto:${business.email}`}>{business.email}</a></div>
      <div><h3>Working hours</h3>{business.hours.map((hours) => <p key={hours}>{hours}</p>)}</div>
      <div><h3>Open files</h3>{navigation.slice(1,5).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
    </div>
    <div className="footer-note"><p>Adoptions would be coordinated by independent rescue partners. This portfolio concept does not represent a real café, rescue, or available animals.</p><div className="socials">{business.socials.map((social) => <a key={social} href="#contact" aria-label={`${social} placeholder link`}>{social}</a>)}</div></div>
    <div className="footer-bottom"><p>Concept, design, and development by <a href="https://integraltec.ai" target="_blank" rel="noreferrer">IntegralTec Systems</a>.</p><p>© {new Date().getFullYear()} The Velvet Paw · Fictional concept</p></div>
  </footer>
}
