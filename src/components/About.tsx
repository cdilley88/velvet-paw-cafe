import { SectionHeading } from './SectionHeading'

const practices = [
  ['01', 'Cats set the pace', 'Quiet rooms, climbing space, daily rest periods, and no forced interaction.'],
  ['02', 'Rescue-led adoption', 'Applications and placements are handled with trusted local rescue partners.'],
  ['03', 'A clean division', 'The lounge and café kitchen are physically separated for hygiene and peace of mind.'],
  ['04', 'Small guest lists', 'Timed reservations keep the room calm, comfortable, and safe for every operative.'],
]

export function About() {
  return <section className="about section-pad" id="briefing">
    <div className="about-copy">
      <SectionHeading eyebrow="The Agency · Initial Briefing" title="A warm room for cold cases." />
      <p className="dropcap">Behind a rain-streaked window, the coffee is hot, the lamps are low, and somebody has misplaced the cream again.</p>
      <p>The Velvet Paw is a fictional café and adoption lounge imagined as a private detective agency run—rather loosely—by cats. Beneath the atmosphere is a real-world operating philosophy: thoughtful rescue partnerships, humane boundaries, transparent adoption support, and hospitality that makes room for every kind of guest.</p>
      <a className="text-link" href="#reservations">Read the visitor protocol <span aria-hidden="true">→</span></a>
    </div>
    <div className="practice-list" aria-label="Our operating principles">
      {practices.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
    </div>
  </section>
}
