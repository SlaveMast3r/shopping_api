'use strict';
var mongoose = require('mongoose'),
  Item = mongoose.model('ShoppingLists');

exports.list_all_baskets = function(req, res) {
  var str = 'Hello from List Baskets service!';

  console.log(str);
  res.end(str);
}

exports.create_a_basket = function(req, res) {
  var str = 'Hello from Create Basket service!';

  console.log(str);
  res.end(str);
}

exports.read_a_basket = function(req, res) {
  var str = 'Hello from Read Basket service!';

  console.log(str);
  res.end(str);
}

exports.update_a_basket = function(req, res) {
  var str = 'Hello from Update Basket service!';

  console.log(str);
  res.end(str);
}

exports.delete_a_basket = function(req, res) {
  var str = 'Hello from Delete Basket service!';

  console.log(str);
  res.end(str);
}
