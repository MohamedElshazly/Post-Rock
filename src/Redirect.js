import React from 'react'
import {useLocation, useHistory} from 'react-router-dom';
import _ from 'lodash';
import {getParamValues} from '../src/utils/functions';

export default function Redirect() {
    
    const loc = useLocation();
    const history = useHistory();

    try {
        if (_.isEmpty(loc.hash)) {
            return history.push('/home');
          }
        const access_token = getParamValues(loc.hash);
        const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
        localStorage.setItem('params', JSON.stringify(access_token));
        localStorage.setItem('expiry_time', expiryTime);
        history.push('/home');
    }catch(error){
        console.log(error)
        history.push('/')
    }
    

    return (
        <div>
            <h1>Redirecting....</h1>
        </div>
    )
}
