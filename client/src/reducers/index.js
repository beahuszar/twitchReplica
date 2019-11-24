import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer, // coming from the installed redux-form library
  streams: streamReducer
});
