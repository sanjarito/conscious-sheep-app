import React, { Component } from 'react'

const FavorListContext = React.createContext({
  favorList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setFavorList: () => {},
})
export default FavorListContext

export class FavorListProvider extends Component {
  state = {
    favorList: [],
    error: null,
  };

  setFavorList = favorList => {
    this.setState({ favorList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      favorList: this.state.favorList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFavorList: this.setFavorList,
    }
    return (
      <FavorListContext.Provider value={value}>
        {this.props.children}
      </FavorListContext.Provider>
    )
  }
}
