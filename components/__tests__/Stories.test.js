import React from 'react';
import { ListView, View } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import Stories from '../Stories';

describe('Stories component', () => {
  beforeEach(() => {
    wrapper = shallow(<Stories />);
  });

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should be a ListView component', () => {
    expect(wrapper.type()).toEqual(ListView);
  });

  test('renders correctly', () => {
    const tree = renderer.create(
      <Stories />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
