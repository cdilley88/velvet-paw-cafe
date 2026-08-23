import { useRef, useState } from 'react'
import { About } from './components/About'
import { AmbienceControl } from './components/AmbienceControl'
import { CaseFiles } from './components/CaseFiles'
import { FieldReports } from './components/FieldReports'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Narration } from './components/Narration'
import { ReservationForm } from './components/ReservationForm'

export default function App() {
  const [roomToneOn, setRoomToneOn] = useState(false)
  const meowAudio = useRef<HTMLAudioElement>(null)

  const playRandomMeow = () => {
    const audio = meowAudio.current
    const meows = ['/audio/meows/domino1.ogg', '/audio/meows/domino2.ogg', '/audio/meows/domino3.ogg']

    if (!audio) return

    audio.pause()
    audio.src = meows[Math.floor(Math.random() * meows.length)]
    audio.volume = 0.72
    void audio.play().catch(() => undefined)
  }

  return <><Header /><main id="main"><Hero roomToneOn={roomToneOn} /><About /><CaseFiles /><Narration /><Menu /><ReservationForm /><FieldReports /></main><Footer /><AmbienceControl on={roomToneOn} onToggle={() => setRoomToneOn((current) => !current)} /><div className={`room-tone-vignette${roomToneOn ? ' is-active' : ''}`} aria-hidden="true" /><div className={`room-tone-weather${roomToneOn ? ' is-active' : ''}`} aria-hidden="true" /><audio ref={meowAudio} preload="none" /><button className="walking-cat" type="button" onClick={playRandomMeow} aria-label="Hear a surprise cat meow" title="Hear a surprise cat meow"><span aria-hidden="true" /></button></>
}