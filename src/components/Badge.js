import Text from './Text'
import classNames from 'classnames'
import './Badge.scss'

const Badge = ({ children, className }) => (
  <span className={classNames('dl-badge', className)} role="status">
    <Text uiStyle="body-s-bold">{children}</Text>
  </span>
)

export default Badge
