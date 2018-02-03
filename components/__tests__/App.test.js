import React from 'react';
import { View } from 'react-native';

import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../App';
import MainScreenNavigator from '../MainScreenNavigator';

Enzyme.configure({ adapter: new Adapter() });

describe('Main app', () => {
  let wrapper;
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
