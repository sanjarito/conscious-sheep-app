import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FavorListItem.css'

export default class FavorListItem extends Component {
  render() {
    const { favor } = this.props
    return (
      <Link to={`/favors/${favor.favor_id}`} className='FavorListItem'>
        <header className='FavorListItem__header'>
          <h2 className='FavorListItem__heading'>
            {favor.favor_title}
          </h2>
          <h2 className='FavorListItem__heading'>
            {favor.favor_category}
          </h2>
          <h2 className='FavorListItem__heading'>
            {favor.favor_hoursrequired}
          </h2>
        </header>
      </Link>
    )
  }
}
