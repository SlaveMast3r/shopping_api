'use strict';
module.exports = function(app) {
  var shoppingList = require('../controllers/listController')

  app.route('/lists')
    .get(shoppingList.list_all_baskets)
    .post(shoppingList.create_a_basket);

  app.route('/list/:listId')
    .get(shoppingList.read_a_basket);
    .put(shoppingList.update_a_basket)
    .delete(shoppingList.delete_a_basket);
}
