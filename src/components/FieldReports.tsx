import { fieldReports } from '../data/reports'
import { SectionHeading } from './SectionHeading'

export function FieldReports() {
  return <section className="reports section-pad" id="field-reports">
    <SectionHeading eyebrow="Field Reports · Events & Dispatches" title="Word from the street." intro="Community gatherings, adoption days, and other developments relevant to the investigation." />
    <div className="report-grid">{fieldReports.map((report) => <article key={report.reference}><div className="report-meta"><span>{report.reference}</span><span>{report.category}</span></div><p className="report-date">{report.date}</p><h3>{report.title}</h3><p>{report.summary}</p><a href="#contact" aria-label={`Ask about ${report.title}`}>Request particulars <span aria-hidden="true">→</span></a></article>)}</div>
  </section>
}
