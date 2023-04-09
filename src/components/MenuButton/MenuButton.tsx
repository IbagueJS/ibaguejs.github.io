import { useBoolean } from '@chakra-ui/react'
import './MenuButton.scss'
import classNames from 'classnames'

export const MenuButton = () => {
  const [open, setOpen] = useBoolean()

  return (
    <div className={classNames('menu-btn', { close: !open})} onClick={setOpen.toggle}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  )
}
