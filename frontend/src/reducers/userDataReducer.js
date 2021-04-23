import { actionTypes } from '../actions';

/**
 * @function userDataReducer
 * @param {object} state - collection of user data
 * @param {object} action - action to be reduced
 * @returns {object} - refreshed list of user data 
 */
function userDataReducer(state=null, action) {
  switch (action.type) {
    case actionTypes.LOADING_DATA:
      return action.payload;
    default:
      return state;
  };
}

export default userDataReducer;