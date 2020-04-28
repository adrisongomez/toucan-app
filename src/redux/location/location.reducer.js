import {LocationActionType} from './location.type';

const INITIAL_STATE = {
  locations: [],
};

const LocationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocationActionType.SET_LOCATION:
      return {...state, locations: action.payload};
    default:
      return state;
  }
};

export default LocationReducer;
