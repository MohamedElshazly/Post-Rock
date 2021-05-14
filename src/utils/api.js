import Axios from 'axios'; 
import {setAuthHeader} from './functions'

export const get = async (url, params) => {
    
    setAuthHeader();
    const result = await Axios.get(url, params);
    return result.data;
}