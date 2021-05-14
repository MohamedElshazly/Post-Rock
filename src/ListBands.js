import React from 'react'
import { Link } from 'react-router-dom'

export default function ListBands() {
    return (
        <section className="bands">
        <h2 className="md text-center my-2 py-2">
            Popular Bands
        </h2>
        <div className="container grid grid-3">

            <Link className="wrap" to="/band-details">
                <div className="card"> 
                    <h4>Mono</h4>
                    <img className="logo" src="https://i.scdn.co/image/9ab3dc04b842a371968453579ce4a92a3f93752f" alt="" />
                </div>
            </Link>

            <div className="card">
                <h4>Mogwai</h4>
                <img className="logo" src="images/Mogwai.jpg" alt="" />
            </div>
            <div className="card">
                <h4>Godspeed You! Black Emperor</h4>
                <img className="logo" src="images/gbye.jpg" alt="" />
            </div>
            <div className="card">
                <h4>Explosions in the Sky</h4>
                <img className="logo" src="images/Explosions_in_the_Sky.jpg" alt="" />
            </div>
            <div className="card">
                <h4>God Is an Astronaut</h4>
                <img className="logo" src="images/God_Is_An_Astronaut.jpg" alt="" />
            </div>
            <div className="card">
                <h4>No Clear Mind</h4>
                <img className="logo" src="images/no_clear_mind.jpg" alt="" />
            </div>           
        </div>
        <Link to="/bands" className="btn">View More!</Link> 
    </section>
    )
}
