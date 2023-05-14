import React, { Component } from 'react'

import ReviewList from './ReviewList'

export default class Movie extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div>
                        <h5 className="card-header">Movie Name</h5>
                    </div>
                    <div class="card-body">
                        <ReviewList />
                    </div>
                </div>
            </>
        )
    }
}
