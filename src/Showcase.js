import React from 'react'
import { Link } from 'react-router-dom'
export default function Showcase() {
    return (
        <section className="showcase">
            <div className="container grid">
                <div className="showcase-text">
                    <h1 className="logo">Post-Rock</h1>
                    <h1>
                        Learn all there is to know about your favorite Post-Rock bands. 
                    </h1>
                    <Link to="/bands" className="btn btn-outline">Go to Bands!</Link>
                </div>
                <img src="images/mono1.jpg" alt="mono" />
            </div>
    </section>
    )
}
