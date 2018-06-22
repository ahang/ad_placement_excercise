import React from 'react';
import renderer from 'react-test-renderer';
import CustomValue from './CustomValue';

test('CustomValue should render', () => {
  const state = {
      startDate: '1/7/2017',
      endDate: '2/7/2017',
      customData: {
        total_cpm: 12345,
        total_impressions: 99999
      },
      showData: false,
  }
  const component = renderer.create(
    <CustomValue info={state} showData={state.showData} /> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});