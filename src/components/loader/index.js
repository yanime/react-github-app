import React from 'react'
import './loader.css';

export default () => (
    <div>
        <h1>Loading</h1>

        <div className="loader">
            <div className="inner">
                <i>.</i>
                <i>.</i>
                <i>.</i>
                <i>.</i>
                <i>.</i>
                <i>.</i>
            </div>
        </div>
    </div>
)