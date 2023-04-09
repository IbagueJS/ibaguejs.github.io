import { Button } from '@chakra-ui/react'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='navbar__icon' src="ibaguejs_black_and_white.png" alt="" />
      <div className="navbar__right">
        <ul className="section-links">
          <li>
            <a className='active' href="#who-we-are">Quiénes Somos</a>
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
        <Button color='yellow.100' colorScheme='yellow'>
          ser colaborador
        </Button>
        <span className="menu material-icons">menu</span>
      </div>
    </nav>
  )
}
