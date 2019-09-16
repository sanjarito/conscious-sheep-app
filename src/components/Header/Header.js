import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {

    render() {
    return (
      <nav className='Header'>
      <div className="nav-left">
      <Link to='/'>
        <FontAwesomeIcon icon={faHome} />
      </Link>
      </div>
        <div className="nav-right">
          <Link to='/login'>
            Log-in
          </Link>

          <Link to='/signup'>
          Sign-up
          </Link>

          <Link to='/favors'>
            Favors List
          </Link>

          <Link to='/createfavor'>
            Create Favor
          </Link>
        </div>
      </nav>
    )
    }
}
