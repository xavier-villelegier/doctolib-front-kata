import './Card.scss'

const Card = ({ title, children }) => (
  <div className="dl-card">
    {title && <div className="dl-card-title">{title}</div>}
    {children}
  </div>
)

export default Card
