import { Ticker } from '../Ticker/Ticker'
import './SponsorBanner.scss'

export const SponsorBanner = () => {
  return (
    <section id="sponsors" className="sponsor-banner">
      <h2 className="sponsor-banner-title">Apoyan</h2>
      <p className="sponsor-banner-description">Quienes nos apoyan</p>

      <Ticker />
    </section>
  )
}
