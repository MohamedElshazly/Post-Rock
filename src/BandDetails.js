import React from 'react'

export default function BandDetails() {
    return (
        <section className="band-details">
        <div className="container">
            <div className="card m-3">
                <h1 className="text-center">Mono</h1>
                <p className="sm text-center py-2"><a href="https://www.monoofjapan.com/">monoofjapan.com</a></p>
                <img src="images/mono.jpg" alt="" />
                
                
                <h2 className="py-2 ">Bio</h2>
                <p className="lead bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, delectus. Culpa enim, deleniti aliquam temporibus aspernatur inventore possimus non odit placeat. Exercitationem error consequatur unde! Tempora non quos sed voluptate!</p>
                
                <h2 className="py-2">Available on</h2>
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=jG61Iy48Qeo&list=PLBg4jk9_mV1_u2_RjRyq08LsvZPO2AX07&index=2">Youtube</a>
                    </li>
                    
                    <li>
                        <a href="https://www.deezer.com/us/artist/3075?autoplay=true">Deezer</a>
                    </li>
                    
                    <li>
                        <a href="https://open.spotify.com/artist/53LVoipNTQ4lvUSJ61XKU3">Spotify</a>
                    </li>
                </ul>
                
                <h2 className="py-2">Social media</h2>
                <a href="https://www.facebook.com/monoofjapan/"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="https://www.instagram.com/monoofjapan/"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="https://soundcloud.com/monoofjapan"><i className="fab fa-soundcloud fa-2x"></i></a>
            </div>
        </div>
    </section>
    )
}
