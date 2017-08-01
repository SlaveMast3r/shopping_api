'use strict';
//const uuid = require('../util/uuid');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const uuid = require('uuid/v4');

const ItemSchema = new schema({
  id: {
    type: String,
    default: uuid,
    index: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'bought'],
    default: 'new'
  }
});

module.exports = mongoose.model('ShoppingItems', ItemSchema);
