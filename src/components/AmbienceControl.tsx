import { useState } from 'react'

export function AmbienceControl() {
  const [on, setOn] = useState(false)
  return <button className="ambience" type="button" aria-pressed={on} onClick={() => setOn(!on)} title="Ambience is a visual-only concept control">
    <span className={on ? 'sound-on' : ''} aria-hidden="true"><i/><i/><i/></span><span>Room tone<br/><small>{on ? 'Concept on' : 'Off'}</small></span>
  </button>
}
