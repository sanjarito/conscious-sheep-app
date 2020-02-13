import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../../components/Utils/Utils'
import LoginForm from '../../components/LoginForm/LoginForm.js'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    console.log('success')

    this.props.history.push("/");




  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_email: user_name.value,
      user_password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <Section className='LoginPage'>
          <h2>Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </Section>
    )
  }
}
