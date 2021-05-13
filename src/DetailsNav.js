import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailsNav() {
    return (
        <div className="details-navbar">
        <div className="container flex">
           <h4><Link to="/bands">Back to Bands!</Link></h4>
            <nav>
                <ul>
                    <li><Link to="home">Home</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    )
}
