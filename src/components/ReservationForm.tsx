import { FormEvent, useMemo, useState } from 'react'
import { SectionHeading } from './SectionHeading'

type FormState = { name: string; email: string; phone: string; date: string; time: string; party: string; visit: string; notes: string }
const initialForm: FormState = { name: '', email: '', phone: '', date: '', time: '', party: '2', visit: 'lounge', notes: '' }

export function ReservationForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const today = useMemo(() => new Date().toLocaleDateString('en-CA'), [])
  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }))
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) { event.currentTarget.reportValidity(); return }
    setSubmitted(true)
  }
  if (submitted) return <section className="reservation section-pad success-wrap" id="reservations">
    <div className="success-card" role="status"><span className="success-stamp">Confirmed</span><p className="eyebrow">Interview docketed</p><h2>Your interview has been scheduled.</h2><p>The cats have been informed. They have declined to comment.</p><dl><div><dt>Lead guest</dt><dd>{form.name}</dd></div><div><dt>Date & time</dt><dd>{form.date} at {form.time}</dd></div><div><dt>Party</dt><dd>{form.party} · {form.visit === 'lounge' ? 'Cat lounge + café' : 'Café only'}</dd></div></dl><button className="button button-dark" type="button" onClick={() => { setForm(initialForm); setSubmitted(false) }}>Book another interview</button></div>
  </section>
  return <section className="reservation section-pad" id="reservations">
    <div className="reservation-intro"><SectionHeading eyebrow="Book an Interview · Reservations" title="Your table is waiting." /><p>Lounge visits are limited to keep the room comfortable for both cats and guests. Café-only tables are always welcome when available.</p><div className="protocol"><p>Visitor protocol</p><ul><li>Arrive ten minutes before your lounge time.</li><li>Children under 12 need one adult per two young detectives.</li><li>Let cats approach on their own terms.</li><li>For access needs, leave a note or contact the desk.</li></ul></div></div>
    <form className="reservation-form" onSubmit={submit} noValidate={false}>
      <p className="form-label">Interview request · All marked fields required</p>
      <div className="field-row"><label>Full name <span aria-hidden="true">*</span><input required autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} /></label><label>Email address <span aria-hidden="true">*</span><input required type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} /></label></div>
      <div className="field-row"><label>Phone number <span aria-hidden="true">*</span><input required type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} /></label><label>Party size <span aria-hidden="true">*</span><select required value={form.party} onChange={(e) => update('party', e.target.value)}>{[1,2,3,4,5,6].map((size) => <option key={size}>{size}</option>)}</select></label></div>
      <div className="field-row"><label>Preferred date <span aria-hidden="true">*</span><input required type="date" min={today} value={form.date} onChange={(e) => update('date', e.target.value)} /></label><label>Preferred time <span aria-hidden="true">*</span><select required value={form.time} onChange={(e) => update('time', e.target.value)}><option value="">Select a time</option>{['9:00 AM','10:30 AM','12:00 PM','1:30 PM','3:00 PM','4:30 PM','6:00 PM'].map((time) => <option key={time}>{time}</option>)}</select></label></div>
      <fieldset><legend>Type of visit <span aria-hidden="true">*</span></legend><div className="radio-row"><label><input type="radio" name="visit" value="lounge" checked={form.visit === 'lounge'} onChange={(e) => update('visit', e.target.value)} /><span><b>Cat lounge + café</b><small>50-minute reserved lounge session</small></span></label><label><input type="radio" name="visit" value="cafe" checked={form.visit === 'cafe'} onChange={(e) => update('visit', e.target.value)} /><span><b>Café only</b><small>No lounge admission needed</small></span></label></div></fieldset>
      <label>Accessibility or comfort notes <span className="optional">Optional</span><textarea rows={4} value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Tell us how we can make the visit comfortable." /></label>
      <p className="form-disclaimer">This concept form demonstrates local validation only. It does not send or store personal information.</p>
      <button className="button button-dark" type="submit">Schedule the Interview <span aria-hidden="true">→</span></button>
    </form>
  </section>
}
