import React, { Component } from 'react'
import SubmitButton from './SubmitButton'


export default class ReviewForm extends Component {
  render() {
    return (
        <>
        <form className="row g-2">
            <div className='col-9'>
                <textarea className="form-control" id="commentBox" placeholder="Write your review here!" ></textarea>
            </div>
            <div className='col-auto'>
                <SubmitButton />
            </div>
        </form>
    </>
    )
  }
}
