import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import ShortStory from '../ShortStory';

describe('ShortStory component', () => {
  beforeEach(() => {
    wrapper = shallow(<ShortStory navigation={() => 'test'} />);
  });

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should be a certain component', () => {
    expect(wrapper.type()).toEqual(TouchableHighlight);
  });

  test('should be contain a Image component', () => {
    expect(wrapper.find(Image).length).toBe(1);
  });

  test('should be contain two Text components', () => {
    expect(wrapper.find(Text).length).toBe(2);
  });

  test('renders correctly', () => {
    const tree = renderer.create(
      <ShortStory navigation={() => 'test'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
