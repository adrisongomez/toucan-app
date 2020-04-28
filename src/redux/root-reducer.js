import {combineReducers} from 'redux';
import LocationReducer from './location/location.reducer';

const rootReducer = combineReducers([LocationReducer]);

export default rootReducer;
