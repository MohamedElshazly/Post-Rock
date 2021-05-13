import React from 'react';
// require('dotenv').config() 

export default function Land() {

    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
      } = process.env;


    const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    }

    return (
        <div className="land">
            <div className="container grid">
                <h1 className="logo">Welcome to Post-Rock</h1>
            </div>
            <button className="btn"  type="submit" onClick={handleLogin}><i className="fab fa-spotify fa-2x" /> Login to spotify</button>
        </div>
    )
}
