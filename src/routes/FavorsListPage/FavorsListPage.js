import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
import $ from "jquery"
import './FavorsListPage.css'
import FavorListContext from '../../contexts/FavorListContext'
import FavorApiService from '../../services/favor-api-service'
import FavorListItem from '../../components/FavorListItem/FavorListItem'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../../services/token-service.js'
import config from '../../config'


export default class FavorsListPage extends Component {

  state = { favors: []}

  static contextType = FavorListContext

  componentDidMount() {
    this.context.clearError()
    FavorApiService.getFavors()
    .then(this.context.setFavorList)
    .catch(this.context.setError)
  }

  renderFavors() {
  const { favorList = [] } = this.context
  console.log('we inside function')
  return favorList.map(favor =>
    <FavorListItem
      key={favor.favor_id}
      favor={favor}
    />
  )
}

render() {
   const { error } = this.context
   return (
     <Section list className='FavorListPage'>
     <h1> FavorsListPage </h1>
       {error
         ? <p className='red'>There was an error, try again</p>
         : this.renderFavors()}
     </Section>


   )
 }
}
