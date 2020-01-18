import {
    GET_USERS_REQ,
    GET_USERS_RES
} from '../constants/index';

const newsInitialState = {
    news: [],
    loaded: false
}


const newsReducer = (state = newsInitialState, action ) => {
    switch(action.type) {
        case GET_USERS_REQ:
            return {
                ...state,
                loaded: false
            }
        case GET_USERS_RES:
            return {
                ...state,
                loaded: true,
                news: action.payload

            }
            default:
                return state
    }
    
    
}

export default newsReducer;