import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

export default class Header extends Component {
    render() {
      return (
      <main role="main">
      <header>
        <h1>Sign Up</h1>
      </header>
      <section>
        <form id="new-user">
          <div class="form-section">
            <label for="user-name">Username:</label>
            <input type="text" name="username" placeholder="tiagon89" required />
          </div>

           <div class="form-section">
            <label for="user-password">Password:</label>
            <input type="text" name="username" placeholder="tiagon89" required />
          </div>

          <div class="form-section">
            <label for="user-zipcode">Zipcode:</label>
            <input type="number" name="zipcode" placeholder="46077" required />
          </div>

          <div class="form-section">
            <label for="about-me">About Me</label>
            <textarea name="about-me" rows="10"   required></textarea>
          </div>

          <button id="signup-button" type="submit">Submit</button>
          
        </form>
      </section>
      </main>
     )
   }
}
