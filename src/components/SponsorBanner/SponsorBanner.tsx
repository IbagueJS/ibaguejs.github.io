import { Ticker } from '../Ticker/Ticker'
import './SponsorBanner.scss'

export const SponsorBanner = () => {
  return (
    <section className="sponsor-banner">
      <h2 className="sponsor-banner-title">Sponsors</h2>
      <p className="sponsor-banner-description">Nuestros Patrocinadores</p>

      <Ticker />
    </section>
  )
}
