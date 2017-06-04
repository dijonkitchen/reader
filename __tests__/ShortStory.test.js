import React from 'react';
import { Image, View, Text } from 'react-native';
import { shallow, mount, render } from 'enzyme';

import ShortStory from '../ShortStory';

describe('ShortStory component', () => {
  beforeEach(() => {
    wrapper = shallow(<ShortStory />);
  });

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should be a View component', () => {
    expect(wrapper.type()).toEqual(View);
  });

  test('should be contain a Image component', () => {
    expect(wrapper.find(Image).length).toBe(1);
  });

  test('should be contain two Text components', () => {
    expect(wrapper.find(Text).length).toBe(2);
  });
});
