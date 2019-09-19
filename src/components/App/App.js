import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Homepage from '../Homepage/Homepage'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import FavorsList from '../FavorsList/FavorsList'
import FavorService from '../FavorService/FavorService'
import Myaccount from '../Myaccount/Myaccount'
import CreateFavor from '../CreateFavor/CreateFavor'
import { Route, Switch } from 'react-router-dom'
import config from '../../config'
// import $ from "jquery"
import './App.css'

class App extends Component {
  state = {
  favors: [],
  error: null
};

setFavors = favors => {
  this.setState({
    favors,
    error: null,
  })
}

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(this.setFavors)
    .catch(error => {
      console.log(error)
      this.setState({ error })
    })
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <Switch>

            <Route
              exact
              path={'/'}
              render={routeProps => {
              const favors = this.state.favors
            return (
            <Homepage
              favors={favors}
              {...routeProps}
            />
          )
          }}
          />

            <Route
              exact
              path={'/login'}
              component={Login}
            />

            <Route
              exact
              path={'/signup'}
              component={Signup}
            />

            <Route
              exact
              path={'/favors'}
              component={FavorsList}
            />

            <Route
              exact
              path={'/createfavor'}
              component={CreateFavor}
            />

            <Route
              exact
              path={'/favorservice'}
              component={FavorService}
            />

            <Route
              exact
              path={'/myaccount'}
              component={Myaccount}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}


export default App
