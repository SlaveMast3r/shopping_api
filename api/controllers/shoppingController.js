'use strict';
var mongoose = require('mongoose'),
  Item = mongoose.model('ShoppingItems');

exports.list_all_items = function(req, res) {
  console.log('Hello from \'List All Items\' service!');

  Item.find({}, '-_id -__v', function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

  //res.end('Hello from \'List All Items\' service!');
}

exports.create_a_item = function(req, res) {
  console.log('Hello from \'Create A Item\' service!');

  var new_item = new Item(req.body);
  new_item.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
  //res.end('Hello from \'Create A Item\' service!')
}

exports.read_a_item = function(req, res) {
  console.log('Hello from \'Read a Item\' service with ID: ' + req.params.itemId + ' .');
  res.end('Hello from \'Read a Item\' service with ID: ' + req.params.itemId + '.');
}

exports.update_a_item = function(req, res) {
  console.log('XXX');
}

exports.delete_a_item = function(req, res) {
  console.log('yyy');
}
