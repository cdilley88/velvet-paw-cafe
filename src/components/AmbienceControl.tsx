import { useRef } from 'react'

type AmbienceControlProps = {
  on: boolean
  onToggle: () => void
}

export function AmbienceControl({ on, onToggle }: AmbienceControlProps) {
  const rainAudio = useRef<HTMLAudioElement>(null)

  const handleToggle = () => {
    const audio = rainAudio.current

    if (audio) {
      if (on) {
        audio.pause()
        audio.currentTime = 0
      } else {
        audio.volume = 0.28
        void audio.play().catch(() => undefined)
      }
    }

    onToggle()
  }

  return <><audio ref={rainAudio} loop preload="metadata"><source src="/audio/rain.ogg" type="audio/ogg" /></audio><button className="ambience" type="button" aria-pressed={on} onClick={handleToggle} title="Toggle rain ambience">
    <span className={on ? 'sound-on' : ''} aria-hidden="true"><i/><i/><i/></span><span>Room tone<br/><small>{on ? 'Rain on' : 'Off'}</small></span>
  </button></>
}