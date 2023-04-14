import './OrganizerCard.scss'

export const OrganizerCard = () => {
  return (
    <div className="organizer-card">
      <div className="organizer-card-image">
        <img src="" alt="" />
      </div>
      <h3 className="organizer-card-title">Nombre</h3>
      <p className="organizer-card-description">
        Software developer with +5 years in software construction, speaker and
        active participant of the communities. Co-organizer @medellinjs -
        @node_co
      </p>
      <div className="organizer-card-social-media">
        <a
          href="https://twitter.com/ibaguejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="organizer-card-social-media-icon"
            src="/twitter.svg"
            alt="twitter logo"
          />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img
            className="organizer-card-social-media-icon"
            src="/linkedin.svg"
            alt="linkedin logo"
          />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img
            className="organizer-card-social-media-icon"
            src="/github.svg"
            alt="github logo"
          />
        </a>
      </div>
    </div>
  )
}
