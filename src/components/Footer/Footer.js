import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css'

export default class Header extends Component {

    render() {
    return (
      <footer id="footer">
        <div className="container text-center">
          <span className="copyright">©2019 <a href="https://conscioussheep-app.santiago1.now.sh/">ConsciousSheep</a> &nbsp; &nbsp; All Rights Reserved</span>
        </div>
      </footer>
    )
    }
}
