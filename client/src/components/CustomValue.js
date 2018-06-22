import React from 'react';
import moment from 'moment';

const CustomValue = ({ info }) => {
  if(info.showData) {
    const { startDate, endDate } = info;
    const { total_impressions, total_cpm } = info.customData.data;
    return (
      <div>
        <p>
          Total 
          ({moment(startDate).format('MM/D/YYYY')} - {moment(endDate).format('MM/D/YYYY')}):
          {total_impressions} impressions,
          {total_cpm}
        </p>
        <p>
        </p>
      </div>
    )
  }
  return (
    <div>
      <p>No Custom Dates Selected</p>
    </div>
  )
}

export default CustomValue;
