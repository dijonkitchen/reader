import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import App from '../App';
import MainScreenNavigator from '../MainScreenNavigator';

describe('Main app', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<App />);
    expect(rendered).toBeTruthy();
  });

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should be a View component', () => {
    expect(wrapper.type()).toEqual(View);
  });

  test('should contain only one MainScreenNavigator component', () => {
    expect(wrapper.find(MainScreenNavigator).length).toBe(1);
  });
});
