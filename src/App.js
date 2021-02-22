import './App.scss'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Components from './containers/Components'
import Playground from './containers/Playground'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/components">Components</Link>
            </li>
            <li>
              <Link to="/playground">Playground</Link>
            </li>
          </ul>
        </nav>
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
