import ReactMarkdown from 'react-markdown'
import { events } from '../../utils/events'
import { Button } from '@chakra-ui/react'
import './Events.scss'

export const Events = () => {
  const currentDate = new Date()
  const event = events[currentDate.getFullYear()] ? events[currentDate.getFullYear()][currentDate.getMonth()] : null

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
              <Button
                className="events-link"
                color="yellow.100"
                colorScheme="yellow"
                onClick={() => window.open(`${event.link}`, '_blank')}
              >
                Registrate aquí
              </Button>
            </div>
            <div className="events-description">
              <h3 className="events-description-title">{event.title}</h3>
              <ReactMarkdown children={event.description} />
            </div>
          </>
        ) : (
          <p>
            Aún no tenemos información del evento de este mes, tan pronto la
            tengamos la compartiremos, ¡Revisa nuestras redes sociales! 😊{' '}
          </p>
        )}
      </div>
    </div>
  )
}
