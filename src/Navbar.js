import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
        <div className="container flex">
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/bands">Bands</Link></li>
                    <li><Link to="tabs.html">Tabs</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    )
}
