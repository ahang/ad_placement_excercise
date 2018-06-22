import React from 'react';
import renderer from 'react-test-renderer';
import CustomDate from './CustomDate';

test('CustomDate should render', () => {
  const component = renderer.create(
    <CustomDate /> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});