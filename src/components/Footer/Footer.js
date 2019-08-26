import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default class Header extends Component {

    render() {
    return (
      <footer id="footer">
        <div class="container text-center">
          <span class="copyright">©2019 <a href="#">ConsciousSheep</a> &nbsp; &nbsp; All Rights Reserved</span>
        </div>
      </footer>
    )
    }
}
