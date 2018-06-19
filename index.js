const express = require('express');
const fs = require('fs');
const csv = require('fast-csv');
const placement = 'placement.csv';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  let placementData = [];
  fs.createReadStream(placement)
  .pipe(csv())
  .on('data', (data) => {
    placementData = [...placementData, data]
  })
  .on('end', (data) => {
    console.log(placementData);
  })
  res.send({ 'Hello': 'World' });
});

app.listen(PORT, () => {
  console.log(`Server Running`);
});