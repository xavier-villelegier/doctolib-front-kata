import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import classNames from 'classnames'
import './Toggle.scss'

class Toggle extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
  }

  render() {
    const { className, disabled, checked, onChange, name } = this.props

    return (
      <div className={classNames('toggle', className)}>
        <div className="toggle-wrapper">
          <input
            className="dl-toggle-control"
            type="checkbox"
            onChange={onChange}
            checked={checked}
            name={name}
            disabled={disabled}
          />
          <div className="toggle-slider" />
        </div>
      </div>
    )
  }
}

export default Toggle
