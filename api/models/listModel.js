'use strict';
//const uuid = require('../util/uuid');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const uuid = require('uuid/v4');

const ListSchema = new schema({
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
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'ShoppingItems'
  }]
});

module.exports = mongoose.model('ShoppingLists', ListSchema);
