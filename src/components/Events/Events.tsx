import ReactMarkdown from 'react-markdown'
import { events } from '../../utils/events'
import './Events.scss'

export const Events = () => {
  const currentDate = new Date()
  const event = events[currentDate.getFullYear()][currentDate.getMonth()]
  return (
    <div id="events" className="events">
      <h2 className="events-title">Eventos</h2>
      <div className="events-info">
        {event ? (
          <>
            <div className="events-image">
              <img
                src={event.image.src}
                alt={event.image.alt}
                width={event.image.width}
                height={event.image.height}
              />
            </div>
            <div className="events-description">
              <h3 className="events-description-title">{event.title}</h3>
              <ReactMarkdown children={event.description} />
            </div>
          </>
        ) : (
          <p>Aún no tenemos información del evento de este mes, tan pronto la tengamos la compartiremos, revisa nuestras redes sociales! 😊 </p>
        )}
      </div>
    </div>
  )
}
