import { NavLink } from 'react-router-dom'

import './Menu.scss'
import Text from './Text'

import LogoDoctolib from '../images/logo-blue.png'

const Menu = ({ children }) => (
  <nav className="dl-menu">
    <div className="dl-logo-container">
      <img src={LogoDoctolib} className="dl-logo" alt="logo" />
    </div>
    <div className="dl-menu-items">{children}</div>
  </nav>
)

export const MenuItem = ({ title, route }) => (
  <NavLink className="dl-menu-item" activeClassName="dl-menu-item-active" to={route}>
    <Text>{title}</Text>
  </NavLink>
)

export default Menu
