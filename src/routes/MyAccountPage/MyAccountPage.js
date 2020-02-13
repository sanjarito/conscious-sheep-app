import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './MyAccountPage.css'

export default class MyAccountPage extends Component {
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
