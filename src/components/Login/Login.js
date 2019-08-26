import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default class Header extends Component {
    render() {
      return (
        <main role="main">
       <header>
         <h1>Login</h1>
       </header>
       <section>
       <div class="form-container">
         <form id="new-user">
           <div class="form-section">
             <label for="user-name">Username:</label>
             <input type="text" name="username" placeholder="tiagon89" required />
           </div>

            <div class="form-section">
             <label for="user-password">Password:</label>
             <input type="text" name="username" placeholder="tiagon89" required />
           </div>
           <button id="login-button" type="submit">Submit</button>
         </form>
         </div>
       </section>
     </main>
     )
   }
}
