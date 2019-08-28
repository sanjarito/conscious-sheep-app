import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './FavorService.css'

export default class FavorService extends Component {
    render() {
      return (
        <main role="main">
       <header>
         <h1>Favors Service Page</h1>
       </header>
       <section>
         Favor Name
       </section>
       Message to user that requested Favor:
        <section class='favors'>
         Hello Bob, I can help you with your favor.
       </section>

       <button> Submit Service Request </button>

     </main>
     )
   }
}
