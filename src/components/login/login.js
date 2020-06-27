import React, { Component } from 'react'
import './login.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  login (e) {
    this.props.saveLoginData({ user: 'Mokesh S' })
  }

  render () {
    return (
      <div>
        <h1>Redux setup</h1>
        <h2>Click login button</h2>
        <div><button onClick={(e) => this.login(e)}>Login</button></div>
        <h2>Value retrieved from store. User - {this.props.user}</h2>
      </div>
    )
  }
}

export default Login
