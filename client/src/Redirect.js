import React from 'react'
import {useLocation} from 'react-router-dom';
import {getParamValues, setAuthHeader} from '../src/utils/functions';
import axios from 'axios';

export default function Redirect() {
    const loc = useLocation();
    const access_token = getParamValues(loc.hash);
    localStorage.setItem('params', JSON.stringify(access_token));
    // console.log(loc)

    setAuthHeader();
    axios.get('https://api.spotify.com/v1/tracks/0Og5nozzTRlBn1k2PgMOiK').then(res=>{
        console.log(res.data.name)
    })
    return (
        <div>
            <h1>Redirecting....</h1>
        </div>
    )
}
