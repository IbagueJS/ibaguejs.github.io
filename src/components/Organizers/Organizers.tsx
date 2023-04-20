import { OrganizerCard } from '../OrganizerCard/OrganizerCard'
import './Organizers.scss'

export const Organizers = () => {
  return (
    <div id="organizers" className='organizers'>
      <h2 className="organizers-title">Equipo Organizador</h2>
      <p className="organizers-description">
        Conoce a los organizadores detrás de esta comunidad
      </p>
      <div className="organizers-grid">
        <OrganizerCard />
        <OrganizerCard />
        <OrganizerCard />

        <OrganizerCard />
        <OrganizerCard />
        <OrganizerCard />

        <OrganizerCard />
        <OrganizerCard />
        <OrganizerCard />
      </div>
    </div>
  )
}
