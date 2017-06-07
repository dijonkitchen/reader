import React from 'react';
import {
  ListView,
  View,
  TextInput,
} from 'react-native';
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

  test('should be a certain component', () => {
    expect(wrapper.type()).toEqual(View);
  });

  test('should contain only one ListView component', () => {
    expect(wrapper.find(ListView).length).toBe(1);
  });

  test('should contain only one TextInput component', () => {
    expect(wrapper.find(TextInput).length).toBe(1);
  });

  test('renders correctly', () => {
    const tree = renderer.create(
      <Stories />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
