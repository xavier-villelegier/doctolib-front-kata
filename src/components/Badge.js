import Text from './Text'
import classNames from 'classnames'
import './Badge.scss'

const Badge = ({ children, className }) => (
  <span className={classNames('dl-badge', className)}>
    <Text uiStyle="body-s-bold">{children}</Text>
  </span>
)

export default Badge
