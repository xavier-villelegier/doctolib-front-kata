import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Avatar.scss'
import Text from './Text'
import { ReactComponent as UserIcon } from '../icons/user.svg'

const avatarTextSizes = {
  xsmall: 'body-xs-bold',
  small: 'body-s-bold',
  medium: 'title-s-bold',
  large: 'title-l-bold',
}

const Avatar = ({ icon: Icon = UserIcon, text, size = 'medium', src, className }) => (
  <div className={classNames('dl-avatar', className)}>
    {src ? (
      <img className={classNames('dl-avatar-circle', `dl-avatar-${size}`)} src={src} />
    ) : (
      <div className={classNames('dl-avatar-circle', `dl-avatar-${size}`, 'dl-avatar-color-green')}>
        {text ? (
          <Text uiStyle={avatarTextSizes[size]} color="white">
            {text}
          </Text>
        ) : (
          <Icon />
        )}
      </div>
    )}
  </div>
)

Avatar.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  src: PropTypes.string,
}

export default Avatar
