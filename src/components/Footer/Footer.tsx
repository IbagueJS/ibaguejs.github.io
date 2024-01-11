import './Footer.scss'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <a
          href="https://www.facebook.com/Ibaguejs.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/ibaguejs.github.io/facebook.svg" alt="" />
        </a>
        <a
          href="https://twitter.com/ibaguejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/ibaguejs.github.io/twitter.svg" alt="" />
        </a>
        <a
          href="https://join.slack.com/t/ibague-js/shared_invite/zt-1pkorfyn7-6L4VOsl9M33lVDZU5taYkA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/ibaguejs.github.io/slack.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/company/ibaguejs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/ibaguejs.github.io/linkedin.svg" alt="" />
        </a>
        <a
          href="https://github.com/IbagueJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/ibaguejs.github.io/github.svg" alt="" />
        </a>
      </div>
      <p className="copy-right">IbaguéJS © {new Date().getFullYear()}. Todos los derechos reservados.</p>
      <p className="design-by">Diseñado por: @scaragrafo</p>
    </div>
  )
}
