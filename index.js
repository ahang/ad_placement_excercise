const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Importing Route
const routes = require('./controllers/routes');
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server Running`);
});
