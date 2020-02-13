import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Section } from '../../components/Utils/Utils'
import FavorContext from '../../contexts/FavorContext'
import FavorApiService from '../../services/favor-api-service'
import './FavorPage.css'

export default class FavorPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = FavorContext

  componentDidMount() {

    const { favor_id } = this.props.match.params
    console.log(favor_id)

    this.context.clearError()
    FavorApiService.getFavor(favor_id)
      .then(this.context.setFavor)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearFavor()
  }

  renderFavor() {

    const { favor } = this.context
    return <>
      <h2>{favor.favor_title}</h2>
      <p>
        {favor.favor_description}
      </p>
    </>
    }

  render() {
    const { error, favor } = this.context
    let content
    if (error) {
      content = (error.error === `Favor doesn't exist`)
        ? <p className='red'>Favor not found</p>
        : <p className='red'>There was an error</p>
    } else if (!favor.favor_id) {
      content = <div className='loading' />
    } else {
      content = this.renderFavor()
    }
    return (
      <Section className='FavorPage'>
        {content}
      </Section>
    )
  }
}
