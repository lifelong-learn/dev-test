import { combineReducers } from 'redux';
import loading from './loadStateReducer';
import users from './userDataReducer';
import display from './filterReducer';

export default combineReducers({
  loading,
  users,
  display
});