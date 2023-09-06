import './SpeakerBanner.scss'

export const SpeakerBanner = () => {
  return (
    <div className="speaker-banner">
      <p>
        ¿Quieres proponer/exponer una charla? Por favor llena el siguiente
        {" "}
        <a className="speaker-banner-anchor" href="https://forms.gle/fJRKkGKc4D4awkpA8" target="_blank" rel="noreferrer noopener">
          <span className="">Formulario</span>
        </a>
        {" "}
        con tu propuesta.
      </p>
    </div>
  )
}
