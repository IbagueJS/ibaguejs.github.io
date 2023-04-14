import './SpeakerBanner.scss'

export const SpeakerBanner = () => {
  return (
    <div className="speaker-banner">
      <p>
        ¿Quieres proponer/exponer una charla? Abre un issue en nuestro repositorio de
        {" "}
        <a className="speaker-banner-anchor" href="https://github.com/IbagueJS/charlas" target="_blank" rel="noreferrer noopener">
          <span className="">Github</span>
        </a>
        {" "}
        con tu propuesta.
      </p>
    </div>
  )
}
