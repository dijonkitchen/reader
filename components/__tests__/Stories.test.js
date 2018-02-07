import React from 'react';
import {
  ListView,
  View,
  TextInput,
} from 'react-native';

import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Stories from '../Stories';

Enzyme.configure({ adapter: new Adapter() });

describe('Stories component', () => {
  let wrapper;
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
