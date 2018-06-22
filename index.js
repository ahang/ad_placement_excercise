const express = require('express');
const moment = require('moment');
const csv = require('csvtojson');
const placement = 'placement.csv';
const delivery = 'delivery.csv';

const app = express();
const PORT = process.env.PORT || 5000;

let placementObj;
let deliveryObj;

const initializeData = () => {
  csv()
    .fromFile(placement)
    .then(pObj => {
      placementObj = pObj;
    })
    .then(() => {
      csv()
        .fromFile(delivery)
        .then(dObj => {
          deliveryObj = dObj;
        });
    });
};

initializeData();

app.get('/getPlacementData', (req, res) => {
  res.json(placementObj);
});

app.get('/getTotalImpressions/:id/:cpm', (req, res) => {
  const id = req.params.id;
  const cpm = req.params.cpm;
  let totalImpressions = 0;
  deliveryObj.map(delivery => {
    if (delivery.placement_id === id) {
      totalImpressions = totalImpressions + parseInt(delivery.impressions);
    }
  });
  const totalCPM = totalImpressions * cpm;
  res.json({ totalImpressions, totalCPM });
});

app.get('/getCustom/:start_date/:end_date', (req, res) => {
  const sDate = Date.parse(moment(req.params.start_date).format('MM/D/YYYY'));
  const eDate = Date.parse(moment(req.params.end_date).format('MM/D/YYYY'));
  let dataRange = [];
  const placementImpressions = {
    placement1: { id: '1', impressions: 0 },
    placement2: { id: '2', impressions: 0 },
    placement3: { id: '3', impressions: 0 },
    placement4: { id: '4', impressions: 0 },
    total_impressions: 0,
    total_cpm: 0,
  };
  dataRange = deliveryObj.filter(placement => {
    const pDate = Date.parse(placement.date);
    if (pDate >= sDate && pDate <= eDate) {
      return placement;
    }
  });

  dataRange.forEach(data => {
    switch (data.placement_id) {
      case '1':
        placementImpressions['placement1']['impressions'] =
          placementImpressions['placement1']['impressions'] +
          parseInt(data.impressions);
        break;
      case '2':
        placementImpressions['placement2']['impressions'] =
          placementImpressions['placement2']['impressions'] +
          parseInt(data.impressions);
        break;
      case '3':
        placementImpressions['placement3']['impressions'] =
          placementImpressions['placement3']['impressions'] +
          parseInt(data.impressions);
        break;
      case '4':
        placementImpressions['placement4']['impressions'] =
          placementImpressions['placement4']['impressions'] +
          parseInt(data.impressions);
        break;
      default:
        return data;
    }
  });
  handleTotalCPM(placementImpressions, res);
});

const handleTotalCPM = (data, res) => {
  for(let placement in data) {
    switch (data[placement]['id']) {
      case '1':
        cpm = placementObj[0]['cpm'];
        data['total_cpm'] = (parseInt(data[placement]['impressions']) * cpm) + data['total_cpm'];
        data['total_impressions'] = data['total_impressions'] + parseInt(data[placement]['impressions']);
        data[placement]['impressions'] = 0;
        break;
      case '2':
        cpm = placementObj[1]['cpm'];
        data['total_cpm'] = (parseInt(data[placement]['impressions']) * cpm) + data['total_cpm'];
        data['total_impressions'] = data['total_impressions'] + parseInt(data[placement]['impressions'])
        data[placement]['impressions'] = 0;
        break;
      case '3':
        cpm = placementObj[2]['cpm'];
        data['total_cpm'] = (parseInt(data[placement]['impressions']) * cpm) + data['total_cpm'];
        data['total_impressions'] = data['total_impressions'] + parseInt(data[placement]['impressions'])
        data[placement]['impressions'] = 0;
        break;
      case '4':
        cpm = placementObj[3]['cpm'];
        data['total_cpm'] = (parseInt(data[placement]['impressions']) * cpm) + data['total_cpm'];
        data['total_impressions'] = data['total_impressions'] + parseInt(data[placement]['impressions'])
        data[placement]['impressions'] = 0;
        break;
    }
  }
  res.json({
    total_impressions: data.total_impressions,
    total_cpm: data.total_cpm,
  });
};

app.listen(PORT, () => {
  console.log(`Server Running`);
});
