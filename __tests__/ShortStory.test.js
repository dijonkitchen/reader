import React from 'react';
import { ListView, View } from 'react-native';
import { shallow, mount, render } from 'enzyme';

import ShortStory from '../ShortStory';

describe('ShortStory component', () => {
  beforeEach(() => {
    wrapper = shallow(<ShortStory />);
  });

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should be a ListView component', () => {
    expect(wrapper.type()).toEqual(View);
  });
});
