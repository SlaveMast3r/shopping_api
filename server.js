const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Item = require('./api/models/shoppingModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/shoppingdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var shoppingRoutes = require('./api/routes/shoppingRoutes');
shoppingRoutes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Shopping List RESTful API server started on: ' + port);
