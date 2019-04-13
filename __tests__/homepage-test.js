import React from 'react';
import Homepage from '../components/Homepage';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Homepage />).toJSON();
  expect(tree).toMatchSnapshot();
});
