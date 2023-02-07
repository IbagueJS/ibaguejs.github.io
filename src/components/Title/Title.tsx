import './Title.scss'

interface ITitle {
 className: string
}

export const Title = ({ className } : ITitle) => {
  return (
    <h1 className={`title ${className}`}>IbagueJS</h1>
  )
}
