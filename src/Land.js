import React from 'react';
// require('dotenv').config() 
import is_expired from './utils/is_expired';

export default function Land() {

    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
      } = process.env;


    const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    }
    const expired = is_expired();

    return (
        <div className="land">
            <div className="container grid">
                <h1 className="logo">Welcome to Post-Rock</h1>
            </div>
            {!expired ? (
                <a href="/home" className="btn btn-outline">Continue to Home...</a>
            ) : (
                <button className="btn"  type="submit" onClick={handleLogin}><i className="fab fa-spotify fa-2x" /> Login to spotify</button>
            )}
            
        </div>
    )
}
