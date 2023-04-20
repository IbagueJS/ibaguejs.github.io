import { Button, useBoolean } from '@chakra-ui/react'
import './Navbar.scss'
import { MenuButton } from '../MenuButton/MenuButton'
import classNames from 'classnames'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useBoolean()
  const [hash, setHash] = useState(location.hash)

  return (
    <nav className={classNames('navbar', { 'is-open': isOpen })}>
      <img className="navbar__icon" src="ibaguejs_black_and_white.png" alt="" />
      <div className="navbar__right">
        <ul className="section-links">
          <li>
            <a
              className={classNames({ active: hash === 'who-we-are' ||  hash === ''})}
              href="#who-we-are"
              onClick={() => setHash('who-we-are')}
            >
              Quiénes Somos
            </a>
          </li>
          <li>
            <a
              className={classNames({ active: hash === 'sponsors' })}
              href="#sponsors"
              onClick={() => setHash('sponsors')}
            >
              Sponsors
            </a>
          </li>
          <li>
            <a
              className={classNames({ active: hash === 'events' })}
              href="#events"
              onClick={() => setHash('events')}
            >
              Eventos
            </a>
          </li>
          <li>
            <a
              className={classNames({ active: hash === 'organizers' })}
              href="#organizers"
              onClick={() => setHash('organizers')}
            >
              Organizadores
            </a>
          </li>
        </ul>
        <Button
          className="sponsor-button"
          color="yellow.100"
          colorScheme="yellow"
        >
          ser colaborador
        </Button>
      </div>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}
