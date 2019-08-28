import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import $ from "jquery"
import './FavorsList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default class FavorsList extends Component {
  handleClick = () => {
      $('.favor-description').toggle()
    }
  render() {
    return (
      <body>
      <main role="main">
      <header role="banner">
        <h1>Favors List</h1>
      </header>
      <section>
        <header>
            <h2>Favor # 1 Title</h2>
            <p>Date Posted</p>
            <button onClick={this.handleClick} class="nav-links"><FontAwesomeIcon icon={faPlus} /></button>
        </header>
        <div class="favor-description">
        <blockquote> Favor Description - Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. </blockquote>
        <dl>
          <dt>Hours required :</dt>
          <dt>Favor type :</dt>

        </dl>
        </div>
        <button>Help Out</button>
      </section>
      <section>
        <header>
            <h2>Favor # 2 Title</h2>
            <p>Date Posted</p>
        </header>
        <button>Help Out</button>
      </section>
      <section>
        <header>
            <h2>Favor # 3 Title</h2>
            <p>Date Posted</p>
        </header>
        <button>Help Out</button>
      </section>
    </main>

  </body>
   )
  }
}
