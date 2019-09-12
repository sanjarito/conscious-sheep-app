import React, { Component } from 'react'
import config from '../../config'
// import { Link } from 'react-router-dom'
import './Homepage.css'


export default class Homepage extends Component {

  state = {
    data: [],
    error:null,
  };

  setData = data => {
    this.setState({
      data,
      error: null,
    })
  }


  componentDidMount() {

    console.log(config.API_ENDPOINT)

fetch(config.API_ENDPOINT, {
  method: 'GET',
  headers: {
    'content-type': 'application/json',

  }
})
  .then(res => {
    if (!res.ok) {
      return res.json().then(error => Promise.reject(error))
    }
    return res.json()
    console.log(res)
  })
  .then(this.setData)
  .catch(error => {
    console.error(error)
    this.setState({ error })
  })
}


  render() {
    return (
      <body>
      <main role="main">
          <header role="banner">
              <h1>Join the conscioussheep  </h1>
              <h3>A community based on asking and returning favors</h3>
          </header>

          <section>
             <p> If the means through which people become rich could be directly correlated to how much they help others...
             the world would be rich as a whole.
             </p>

          </section>

          <section>
             Need help?
              Request a favor and get help from the consciousheep community.
          </section>

          <section>
              Want to help?
              Access thousands of community member's requests for favors and lend a hand.
          </section>

          <section>
              How does it work? <br />
              Step 1 = > Sign up for free and get a free favor token. <br />
              Step 2 = > Use a favor token to request a favor from the community.
              <br />
              Step 3 = > Fulfil any favor from other members and get rewarded with a favor token.
              <br />
              Step 4 = > The more favors you help with the more requests for favors you can create of your own.
          </section>


      </main>

  </body>
   )
  }
}
