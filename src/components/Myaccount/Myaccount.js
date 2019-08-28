import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Myaccount.css'

export default class Header extends Component {
    render() {
      return (
        <main role="main">
      <header>
        <h1>Hello Username</h1>
      </header>
      <section>
        Edit my Account
      </section>

       <section class='favors'>
        My Favors
      </section>
       <section class='favors'>
        Favors helping with
      </section>
    </main>
     )
   }
}
