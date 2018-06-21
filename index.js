const express = require('express');
const fs = require('fs');
const csv = require('csvtojson');
const placement = 'placement.csv';
const delivery = 'delivery.csv';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/getPlacementData', (req, res) => {
  csv()
  .fromFile(placement)
  .then((placementObj) => {
    res.json(placementObj)
  })
});

app.get('/getTotalImpressions/:id/:cpm', (req, res) => {
  const id = req.params.id;
  const cpm = req.params.cpm;
  csv()
  .fromFile(delivery)
  .then((deliveryObj) => {
    let totalImpressions = 0;
    deliveryObj.map(delivery => {
      if(delivery.placement_id === id) {
        totalImpressions = totalImpressions + parseInt(delivery.impressions);
      }
    })
    const totalCPM = totalImpressions * cpm;
    res.json({ totalImpressions, totalCPM });
  })
})

app.listen(PORT, () => {
  console.log(`Server Running`);
});