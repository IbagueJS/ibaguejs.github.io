import './MenuButton.scss'
import classNames from 'classnames'

export const MenuButton = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {
  return (
    <div className={classNames('menu-btn', { open: isOpen})} onClick={setIsOpen.toggle}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  )
}
