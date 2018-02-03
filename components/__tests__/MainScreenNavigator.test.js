import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainScreenNavigator from '../MainScreenNavigator';

Enzyme.configure({ adapter: new Adapter() });

describe('MainScreenNavigator component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainScreenNavigator />);
  });

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
