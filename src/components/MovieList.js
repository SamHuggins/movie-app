import React, { Component } from 'react'
import Movie from './Movie'

export default class MovieList extends Component {
  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <Movie />
      </div>
    )
  }
}
