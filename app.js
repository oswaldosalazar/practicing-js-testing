const express = require('express')
const webRoutes = require('./routes/web')
const iceCream = require('./models/ice-cream')

const app = express();

app.use('/', webRoutes)

app.get('/api/ice-creams', (req, res, next) => {
  iceCream.getAll().then((result) => {
    res.json(result);
  });
});

module.exports = app;
