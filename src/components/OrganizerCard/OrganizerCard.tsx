import { socialMediaLogo } from '../../utils/constants'
import './OrganizerCard.scss'

export const OrganizerCard = ({ organizer }) => {
  return (
    <div className="organizer-card">
      <div className="organizer-card-image">
        <img src={organizer.image.src} alt={organizer.image.alt} height={185} />
      </div>
      <h3 className="organizer-card-title">{organizer.name}</h3>
      <p className="organizer-card-description">{organizer.description}</p>
      <div className="organizer-card-social-media">
        {organizer.socialMedia.map((socialMedia) => (
          <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
            <img
              className="organizer-card-social-media-icon"
              src={socialMediaLogo[socialMedia.type].src}
              alt={socialMediaLogo[socialMedia.type].alt}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
