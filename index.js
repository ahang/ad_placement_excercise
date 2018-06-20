const express = require('express');
const fs = require('fs');
const csv = require('fast-csv');
const placement = 'placement.csv';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/getPlacementData', (req, res) => {
  let placementData = [];
  fs.createReadStream(placement)
  .pipe(csv())
  .on('data', (data) => {
    placementData = [...placementData, data]
  })
  .on('end', (data) => {
    console.log(placementData);
    res.json(placementData);
  })
});

app.listen(PORT, () => {
  console.log(`Server Running`);
});