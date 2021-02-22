import classNames from 'classnames'

import './Text.scss'

const Text = ({ children, uiStyle = 'body-s-regular', color = 'gray-darker' }) => (
  <div className={classNames(`dl-text-${uiStyle}`, `dl-text-${color}`)}>{children}</div>
)

export default Text
