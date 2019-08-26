import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Homepage from '../Homepage/Homepage'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import FavorsList from '../FavorsList/FavorsList'
import CreateFavor from '../CreateFavor/CreateFavor'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import $ from "jquery"
import './App.css'

class App extends Component {

  componentDidMount() {

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
          // This is the homepage route
            <Route
              exact
              path={'/'}
              component={Homepage}
            />
            // This is the login route
            <Route
              exact
              path={'/login'}
              component={Login}
            />
            // This is the signup route
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
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}


export default App
