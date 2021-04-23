import { actionTypes } from '../actions';

/**
 * @function loadStateReducer
 * @param {boolean} state - current indicator of data loading; true if still waiting for data to load
 * @param {object} action - action to be reduced
 * @returns {boolean} - new state of data loading 
 */
function loadStateReducer(state=false, action) {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return action.payload;
    default:
      return state;
  };
}

export default loadStateReducer;