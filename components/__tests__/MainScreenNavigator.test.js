import React from 'react';
import { View } from 'react-native';
import { shallow, mount, render } from 'enzyme';

import MainScreenNavigator from '../MainScreenNavigator';

describe('MainScreenNavigator component', () => {
  beforeEach(() => {
    wrapper = shallow(<MainScreenNavigator />);
  });

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
