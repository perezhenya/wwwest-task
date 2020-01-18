import {
    GET_ITEMS_REQ,
    GET_ITEMS_RES,
    GET_ITEMS_ERR
} from '../constants/index';
import axios from 'axios';

const profileAction = () => (dispatch) => {
    dispatch({
        type: GET_ITEMS_REQ
    })
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        dispatch({
            type: GET_ITEMS_RES,
            payload: res.data
        })
        
    })
    .catch(err => {
        dispatch({
            type: GET_ITEMS_ERR,
            payload: err
        })

    })
}


export default profileAction;