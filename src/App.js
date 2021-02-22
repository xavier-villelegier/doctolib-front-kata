import './App.scss'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Components from './containers/Components'
import Playground from './containers/Playground'
import Menu, { MenuItem } from './components/Menu'

function App() {
  return (
    <Router>
      <div>
        <Menu>
          <MenuItem title="Components" route="/components" />
          <MenuItem title="Playground" route="/playground" />
        </Menu>
        <Switch>
          <Route exact path="/">
            <Redirect to="/components" />
          </Route>
          <Route path="/components" component={Components} />
          <Route path="/playground" component={Playground} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
