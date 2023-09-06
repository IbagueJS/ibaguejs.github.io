import { useId } from 'react'
import { sponsors } from '../../utils/constants'
import './Ticker.scss'

export const Ticker = () => {
  return (
    <div className="ticker">
      <div className="slide-track">
        {sponsors.map((sponsor) => {
          const sponsorId = useId()

          return (
            <div key={sponsorId} className="slide">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.src}
                  height={sponsor.height}
                  width={sponsor.width}
                  alt={sponsor.alt}
                />
              </a>
            </div>
          )
        })}

        {/* Repeat */}
        {sponsors.map((sponsor) => {
          const sponsorId = useId()

          return (
            <div key={sponsorId} className="slide">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.src}
                  height={sponsor.height}
                  width={sponsor.width}
                  alt={sponsor.alt}
                />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
