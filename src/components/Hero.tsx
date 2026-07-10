import { business } from '../data/site'

export function Hero() {
  return <section className="hero" id="agency" aria-labelledby="hero-title">
    <div className="rain" aria-hidden="true" />
    <div className="hero-lamp" aria-hidden="true" />
    <div className="hero-content">
      <p className="hero-kicker"><span>Est. 1947*</span><span>Open file № 001</span></p>
      <h1 id="hero-title"><span>The</span> Velvet Paw</h1>
      <p className="hero-tagline">{business.tagline}</p>
      <blockquote>“Every customer has a story. Every cat already knows it.”</blockquote>
      <div className="hero-actions"><a className="button button-primary" href="#case-files">Review the Case Files</a><a className="button button-ghost" href="#reservations">Book a Table</a></div>
      <p className="hero-footnote">*The story is fictional. The standards are not.</p>
    </div>
    <div className="hero-window" aria-hidden="true"><span className="cat-window" /></div>
    <a className="scroll-cue" href="#briefing"><span>Begin the briefing</span><i /></a>
  </section>
}
