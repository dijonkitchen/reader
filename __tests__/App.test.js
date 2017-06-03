import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import App from '../App';

describe('Main app', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />);
    expect(rendered).toBeTruthy();
  });

  test('render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })
});
