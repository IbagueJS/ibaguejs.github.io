import ReactMarkdown from 'react-markdown'
import './Events.scss'

export const Events = () => {
  return (
    <div id="events" className='events'>
      <h2 className='events-title'>Eventos</h2>
      <div className="events-info">
        <div className="events-image">
          <img src="queues-nodejs.jpeg" alt="" width={564} height={386}/>
        </div>
        <div className="events-description">
          <h3 className="events-description-title">Meetup de Abril</h3>
          <ReactMarkdown children={`Este mes tendremos dos temas interesantes de conocer en el mundo JavaScript, un nuevo Framework que quiere revolucionar el mundo front-end como lo es Svelte y una herramienta para hacer pruebas Unitarias llamada Mocha.

🎙️ Svelte - Oscar Barajas @gndx

🎙️ Pruebas unitarias con Mocha - Pablo Dorado @pandres95

📅  Programación



[ 10:00 - 10:15 ] Bienvenida @IbagueJS.

[ 10:15 - 11:00 ] Svelte

[ 11:00 - 11:45 ] Pruebas unitarias con Mocha

[ 11:45 - 12:00 ] Preguntas.`} />
        </div>
      </div>

    </div>
  )
}
