import React from 'react';
import renderer from 'react-test-renderer';
import Table from './Table';

test('Table should render', () => {
  const data = [
    {
      id: 1,
      name: 'Space',
      start: '1/17/2017',
      end: '2/17/2017',
      cpm: 5,
      impressions: 123456,
      totalCPM: 123456
    }
  ];
  const component = renderer.create(
    <Table placements={data} /> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
