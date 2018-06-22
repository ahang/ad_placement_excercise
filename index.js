const express = require("express");
const moment = require("moment");
const csv = require("csvtojson");
const placement = "placement.csv";
const delivery = "delivery.csv";

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

app.get("/getPlacementData", (req, res) => {
  res.json(placementObj);
});

app.get("/getTotalImpressions/:id/:cpm", (req, res) => {
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

app.get("/getCustom/:start_date/:end_date", (req, res) => {
  const sDate = Date.parse(moment(req.params.start_date).format("MM/D/YYYY"));
  const eDate = Date.parse(moment(req.params.end_date).format("MM/D/YYYY"));
  let dataRange = [];
  dataRange = deliveryObj.filter(placement => {
    const pDate = Date.parse(placement.date);
    if (pDate >= sDate && pDate <= eDate) {
      return placement;
    }
  });
  const 
});

app.listen(PORT, () => {
  console.log(`Server Running`);
});
