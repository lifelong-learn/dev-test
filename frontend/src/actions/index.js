import axios from 'axios';

export const actionTypes = {
  SET_LOADING: 'SET_LOADING',
  LOADING_DATA: 'LOADING_DATA',
  CLEAR_FILTER: 'CLEAR_FILTER',
  FILTER_AGE_OVER_THIRTY: 'FILTER_AGE_OVER_THIRTY',
  FILTER_AGE_UNDER_THIRTY: 'FILTER_AGE_UNDER_THIRTY',
  FILTER_GENDER_MALE: 'FILTER_GENDER_MALE',
  FILTER_GENDER_FEMALE: 'FILTER_GENDER_FEMALE',
};

export const getUserList = () => {
  return function(dispatch) {
    // set the loading indicator to true
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: true
    });

    return axios.get('http://localhost:4000/')
      .then(response => {
        // if data is available
        if (response.data !== undefined) {
          // load data as a fresh copy
          dispatch({
            type: actionTypes.LOADING_DATA,
            payload: response.data
          });

          // give a fresh copy of data being displayed
          dispatch({
            type: actionTypes.CLEAR_FILTER,
            payload: response.data
          });
  
        } else {
          throw new Error("Server returns no data");
        }
        
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch({
          type: actionTypes.SET_LOADING,
          payload: false
        });
      });
  };
}

// clearFilter() will make a fresh copy of data
// managed through userDataReducer. The copied data
// can then be managed through various filter operations
// under filterReducer.
export const clearFilter = () => {
  return function(dispatch, getState) {
    const users = getState().users;
    dispatch({
      type: actionTypes.CLEAR_FILTER,
      payload: users
    });
  };
}

export const filterAgeOverThirty = () => {
  return function(dispatch) {
    dispatch({
      type: actionTypes.FILTER_AGE_OVER_THIRTY
    });
  };
}

export const filterAgeUnderThirty = () => {
  return function(dispatch) {
    dispatch({
      type: actionTypes.FILTER_AGE_UNDER_THIRTY
    });
  };
}

export const filterGenderMale = () => {
  return function(dispatch) {
    dispatch({
      type: actionTypes.FILTER_GENDER_MALE
    });
  };
}

export const filterGenderFemale = () => {
  return function(dispatch) {
    dispatch({
      type: actionTypes.FILTER_GENDER_FEMALE
    });
  };
}