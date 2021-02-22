import classNames from 'classnames'

import './Text.scss'

const Text = ({ children, uiStyle = 'body-s-regular', color = 'gray-darker', align = 'left' }) => (
  <div className={classNames(`dl-text-${uiStyle}`, `dl-text-color-${color}`, `dl-text-align-${align}`)}>{children}</div>
)

export default Text
