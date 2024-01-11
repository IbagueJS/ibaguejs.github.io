import { Button, useBoolean } from '@chakra-ui/react'
import './Navbar.scss'
import { MenuButton } from '../MenuButton/MenuButton'
import classNames from 'classnames'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useBoolean()

  return (
    <nav className={classNames('navbar', { 'is-open': isOpen })}>
      <img className="navbar__icon" src="/ibaguejs.github.io/ibaguejs_black_and_white.png" alt="" />
      <div className="navbar__right">
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
        <Button
          className="sponsor-button"
          color="yellow.100"
          colorScheme="yellow"
          onClick={() => window.open('https://forms.gle/fJRKkGKc4D4awkpA8', '_blank')}
        >
          ser colaborador
        </Button>
      </div>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}
