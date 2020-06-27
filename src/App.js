import React, {Component} from 'react'
import './App.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LoginContainer from './redux/containers/loginContainer'

class App extends Component {
 
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginContainer} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

