import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='navbar__icon' src="IBE.JS.svg" alt="" />
      <ul className="section-links">
        <li>
          <a href="#who-we-are">Quiénes Somos</a>
        </li>
        <li>
            <a href="#sponsors">Sponsors</a>
        </li>
        <li>
            <a href="#events">Eventos</a>
        </li>
        <li>
            <a href="#organizers">Organizadores</a>
        </li>
      </ul>
      <div className="navbar__right">
        <div className="social-media">

        </div>
        <span className="menu material-icons">menu</span>
      </div>
    </nav>
  )
}
