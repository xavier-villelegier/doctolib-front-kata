import classNames from 'classnames'

import './Text.scss'

const Text = ({ children, className, uiStyle = 'body-s-regular', color = 'gray-darker', align = 'left' }) => (
  <div className={classNames(`dl-text-${uiStyle}`, `dl-text-color-${color}`, `dl-text-align-${align}`, className)}>
    {children}
  </div>
)

export default Text
