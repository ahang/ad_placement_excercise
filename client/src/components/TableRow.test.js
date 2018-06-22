import React from 'react';
import renderer from 'react-test-renderer';
import TableRow from './TableRow';

test('TableRow should render', () => {
  const data = {
    id: 1,
    name: 'Space',
    start: '1/17/2017',
    end: '2/17/2017',
    cpm: 5,
    impressions: 123456,
    totalCPM: 123456
  };
  const component = renderer.create(
    <TableRow row={data} /> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});