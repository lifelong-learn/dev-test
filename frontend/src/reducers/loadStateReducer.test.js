import { actionTypes } from '../actions';
import loadingReducer from './loadStateReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = loadingReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns state of true upon receiving action of SET_LOADING to true', () => {
  const action = {
    type: actionTypes.SET_LOADING,
    payload: true
  };
  const newState = loadingReducer(false, action);
  expect(newState).toBe(true);
})