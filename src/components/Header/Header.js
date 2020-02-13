import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../../services/token-service'

export default class Header extends Component {

  handleLogoutClick = () => {
   TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>


        <div className="nav-right">

          <Link to='/login'>
            Log-in
          </Link>

          <Link to='/register'>
          Sign-up
          </Link>

          <Link to='/favors'>
            Favors List
          </Link>

          <Link to='/favors/createfavor'>
            Create Favor
          </Link>


        </div>
      </div>
    )
  }

    render() {
      return (
        <nav className='Header'>
        <div className="nav-left">
        <Link to='/'>
          <FontAwesomeIcon icon={faHome} />
        </Link>
        </div>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      )
    }
  }
