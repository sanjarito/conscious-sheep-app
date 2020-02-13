import React, { Component } from 'react'

export const favor = {

}

const FavorContext = React.createContext({
  favor: favor,
  error: null,
  setError: () => {},
  clearError: () => { },
  setFavor: () => {},
  clearFavor: () => {},
})

export default FavorContext

export class FavorProvider extends Component {
  state = {
    favor: favor,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setFavor = favor => {
    this.setState({ favor })
  }

  clearFavor = () => {
    this.setFavor(null)

  }


  render() {
    const value = {
      favor: this.state.favor,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFavor: this.setFavor,
      clearFavor: this.clearFavor,
    }
    return (
      <FavorContext.Provider value={value}>
        {this.props.children}
      </FavorContext.Provider>
    )
  }
}
