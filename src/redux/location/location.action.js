import {LocationActionType} from './location.type';

export const setLocation = (locations) => ({
  type: LocationActionType.SET_LOCATION,
  payload: locations,
});
