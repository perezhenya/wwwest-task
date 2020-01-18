import {
    GET_ITEMS_REQ,
    GET_ITEMS_RES,
} from '../constants/index';

const profileInitialState = {
    items: [],
    loaded: false
}


const profileReducer = (state = profileInitialState, action ) => {
    switch(action.type) {
        case GET_ITEMS_REQ:
            return {
                ...state,
                loaded: false
            }
        case GET_ITEMS_RES:
            return {
                ...state,
                loaded: true,
                items: action.payload
            }
            default:
                return state
    }
    
    
}

export default profileReducer;