import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShortStory from '../ShortStory';

Enzyme.configure({ adapter: new Adapter() });

describe('ShortStory component', () => {
  let wrapper;
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
