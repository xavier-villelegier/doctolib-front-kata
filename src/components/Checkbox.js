import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ReactComponent as CheckmarkIcon } from '../icons/checkmark.svg'
import './Checkbox.scss'

const Checkbox = ({
  onChange,
  onFocus,
  onBlur,
  onClick,
  name,
  error,
  required,
  disabled,
  className,
  checked,
  indeterminate,
}) => (
  <div>
    <input
      type="checkbox"
      className="dl-checkbox-control"
      name={name}
      checked={indeterminate || checked}
      required={required}
      disabled={disabled}
      onBlur={(event) => {
        if (onBlur) {
          onBlur(event)
        }
      }}
      onFocus={(event) => {
        if (onFocus) {
          onFocus(event)
        }
      }}
      onChange={(event) => {
        if (onChange) {
          onChange(event)
        }
      }}
      onClick={(event) => {
        if (onClick) {
          onClick(event)
        }
      }}
    />
    <div
      className={classNames('dl-checkbox', className, {
        'dl-checkbox-error': !disabled && error,
        'dl-checkbox-disabled': disabled,
      })}
    >
      <CheckmarkIcon className="dl-checkbox-icon" />
    </div>
  </div>
)

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  error: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  defaultValue: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
}

export default Checkbox
