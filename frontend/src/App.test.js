import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { storeFactory } from '../utils/testUtils';
import App, { UnconnectedApp } from './App';

/**
 * @function setup
 * @param {object} state - State for particular setup
 * @returns {ShallowWrapper}
 */
export const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
};

describe('Redux-related testing', () => {
  test('can access `display` state', () => {
    const display = [
      {
        "name": "Abe",
        "age": 45,
        "gender": "male",
        "_id": "123"
      }];
    const wrapper = setup({ display });
    const displayProp = wrapper.instance().props.display;
    expect(displayProp).toEqual(display);
  });

  test('can access `getUserList` as a function on the props', () => {
    const wrapper = setup();
    const getUserListProp = wrapper.instance().props.getUserList;
    expect(getUserListProp).toBeInstanceOf(Function);
  });
});

test('`getUserList` runs on App mount', () => {
  const getUserListMock = jest.fn();

  const props = {
    getUserList: getUserListMock,
    loading: false,
    users: [],
    display: []
  };

  const wrapper = shallow(<UnconnectedApp {...props} />);

  wrapper.instance().componentDidMount();

  const getUserListCallCount = getUserListMock.mock.calls.length;
  expect(getUserListCallCount).toBe(1);
})