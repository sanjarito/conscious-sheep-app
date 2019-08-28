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

            <Route
              exact
              path={'/'}
              component={Homepage}
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
