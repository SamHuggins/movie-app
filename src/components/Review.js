import React, { Component } from 'react'
import ReviewForm from './ReviewForm'


export default class Review extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        {this.props.username}
                    </div>
                    <div class="card-body">
                        {this.props.content}
                    </div>
                </div>

            </>
        )
    }
}
