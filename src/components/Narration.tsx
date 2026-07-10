import { useEffect, useState } from 'react'
import { narration } from '../data/site'

export function Narration() {
  const [index, setIndex] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setIndex((current) => (current + 1) % narration.length), 7000); return () => window.clearInterval(timer) }, [])
  return <aside className="narration" aria-label="Notes from the night desk"><span aria-hidden="true">“</span><p aria-live="polite">{narration[index]}</p><div>{narration.map((_, itemIndex) => <button key={itemIndex} onClick={() => setIndex(itemIndex)} aria-label={`Show narration ${itemIndex + 1}`} aria-current={itemIndex === index} />)}</div></aside>
}
