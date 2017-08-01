'use strict';
module.exports = function(app) {
  var shoppingList = require('../controllers/shoppingController')

  app.route('/items')
    .get(shoppingList.list_all_items)
    .post(shoppingList.create_a_item);

  app.route('/items/:itemId')
    .get(shoppingList.read_a_item)
    .put(shoppingList.update_a_item)
    .delete(shoppingList.delete_a_item);
}
