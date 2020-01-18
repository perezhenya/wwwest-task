import axios from 'axios';
import {
    GET_USERS_REQ,
    GET_USERS_RES,
    GET_USERS_ERR
} from '../constants/index';
import {API_KEY} from '../constants/index';


const newsAction = () => (dispatch) => {
    dispatch({
        type: GET_USERS_REQ
    })
    axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
    .then(res => {
        dispatch({
            type: GET_USERS_RES,
            payload: res.data.sources.slice(0,10)
        })
        
    })
    .catch(err => {
        dispatch({
            type: GET_USERS_ERR,
            payload: err
        })

    })
}


export default newsAction;