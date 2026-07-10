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
  return <><Header /><main id="main"><Hero /><About /><CaseFiles /><Narration /><Menu /><ReservationForm /><FieldReports /></main><Footer /><AmbienceControl /><div className="walking-cat" aria-hidden="true"><span /></div></>
}
