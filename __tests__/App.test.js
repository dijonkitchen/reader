import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('Main app', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />);
    expect(rendered).toBeTruthy();
  });
});
