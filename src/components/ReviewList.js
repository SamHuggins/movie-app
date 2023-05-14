import React, { Component } from 'react'
import Review from './Review'



export default class ReviewList extends Component {
  render() {
    return (
      <div>
 
        <Review {...reviewOne}/>
        <Review {...reviewTwo}/>
      </div>
    )
  }
}
