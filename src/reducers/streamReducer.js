import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      // const newState = {...state};
      // newState[action.payload.id] = action.payload;
      // return newState
      //
      // so that redux sees it as a new object and rerenders
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      // we are mapping the array to an object
      // as it is easier to manipulate the store's state in the reducer
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // _.omit creates a new state object, thus no need for spreading
      // action.payload is enough, as the action creator's payload is an id only (not an object)
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
