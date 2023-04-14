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
          <img className="social-media-icon" src="/facebook.svg" alt="" />
        </a>
        <a
          href="https://twitter.com/ibaguejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/twitter.svg" alt="" />
        </a>
        <a
          href="https://join.slack.com/t/ibague-js/shared_invite/zt-1pkorfyn7-6L4VOsl9M33lVDZU5taYkA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/slack.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/company/ibaguejs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/linkedin.svg" alt="" />
        </a>
        <a
          href="https://github.com/IbagueJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src="/github.svg" alt="" />
        </a>
      </div>
      <p className="copy-right">© IbaguéJS 2022. All Rights Reserved.</p>
    </div>
  )
}
