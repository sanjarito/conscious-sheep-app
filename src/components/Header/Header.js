import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {

    render() {
    return (
      <nav className='Header'>
      <div class="nav-left">
      <Link to='/'>
        <a class="nav-links"><FontAwesomeIcon icon={faHome} /></a>
      </Link>
      </div>
        <div class="nav-right">
          <Link to='/login'>
            <a class="nav-links">Log-in</a>
          </Link>

          <Link to='/signup'>
            <a class="nav-links">Sign-up</a>
          </Link>

          <Link to='/favors'>
            <a class="nav-links">Favors List</a>
          </Link>

          <Link to='/createfavor'>
            <a class="nav-links">Create Favor</a>
          </Link>
        </div>
      </nav>
    )
    }
}
