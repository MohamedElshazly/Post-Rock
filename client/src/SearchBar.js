import React from 'react'
import {Link} from 'react-router-dom'

export default function SearchBar() {
    return (
        <div className="search-bar">
        <div className="container flex">
            <div className="search-icon">
                <span className="fas fa-search"></span>
                <input type="search" placeholder="search for bands..." />
            </div>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    )
}
