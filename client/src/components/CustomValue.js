import React from 'react';
import moment from 'moment';
import NumberFormat from 'react-number-format';

const CustomValue = ({ info }) => {
  if(info.showData) {
    const { startDate, endDate } = info;
    const { total_impressions, total_cpm } = info.customData.data;
    console.log(total_impressions)
    return <div>
        <p>
          Total ({moment(startDate).format("MM/D/YYYY")} - {moment(endDate).format("MM/D/YYYY")}):
          <NumberFormat value={total_impressions} displayType={"text"} thousandSeparator={true} /> impressions,
          <NumberFormat value={total_cpm} displayType={"text"} prefix={'$'}
          thousandSeparator={true} />
        </p>
      </div>;
  }
  return (
    <div>
      <p>No Custom Dates Selected</p>
    </div>
  )
}

export default CustomValue;
