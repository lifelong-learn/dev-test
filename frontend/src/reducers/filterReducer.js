import { actionTypes } from '../actions';

/**
 * @function filterReducer
 * @param {boolean} state - current display of data
 * @param {object} action - action to be reduced
 * @returns {boolean} - new state of displayed data
 */
function filterReducer(state=null, action) {
  switch (action.type) {
    case actionTypes.CLEAR_FILTER:
      return action.payload;
    case actionTypes.FILTER_AGE_OVER_THIRTY:
      return state.filter(element => element.age >= 30);
    case actionTypes.FILTER_AGE_UNDER_THIRTY:
      return state.filter(element => element.age < 30);
    case actionTypes.FILTER_GENDER_MALE:
      return state.filter(element => element.gender.toLowerCase() === 'male');
    case actionTypes.FILTER_GENDER_FEMALE:
      return state.filter(element => element.gender.toLowerCase() === 'female');
    default:
      return state;
  };
}

export default filterReducer;