import React from 'react'

export default function Footer() {
    return (
        <section className="footer">
        <div className="container grid grid-3">
            <div>
                <h1>Post-Rock</h1>
                <p>Copyright &copy; 2021</p>
            </div>

            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="bands.html">Bands</a></li>
                    <li><a href="tabs.html">Tabs</a></li>
                </ul>
            </nav>

            <div className="social">
                <a href="https://github.com/MohamedElshazly"><i className="fab fa-github fa-2x"></i></a>
                <a href="https://github.com/MohamedElshazly"><i className="fab fa-linkedin fa-2x"></i></a>
                <a href="https://twitter.com/M_A_E_99"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
        </div>
    </section>
    )
}
