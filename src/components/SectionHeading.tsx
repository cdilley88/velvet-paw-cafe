type Props = { eyebrow: string; title: string; intro?: string; light?: boolean }

export function SectionHeading({ eyebrow, title, intro, light = false }: Props) {
  return <header className={`section-heading${light ? ' section-heading-light' : ''}`}>
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}
  </header>
}
