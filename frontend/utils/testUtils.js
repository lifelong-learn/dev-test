import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';
import rootReducer from '../src/reducers';

/**
 * Create a store factory to be used with imported reducers, middleware, and initial state.
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}