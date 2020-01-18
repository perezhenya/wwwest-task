import {combineReducers} from 'redux';
import newsReducer from './newsReducer';
import profileReducer from './profileReducer';


export default combineReducers({
    news: newsReducer,
    profile: profileReducer,
   
})