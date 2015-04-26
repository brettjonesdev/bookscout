import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Edit a book
     * Everything is bound to the model, so we only need to save it
     */
    edit: function () {
      var book = this.get('model'),
        _this = this;

      // We don't need to wait till the API answers since our store is already
      // up to date. Go to the inventory
      this.transitionToRoute('inventory');

      // Save the model to the API
      book.save()
        .catch(function () {
          // Something wrong happened when saving the model, bring the user back here
          _this.transitionToRoute('books.edit', book.get('id'));
        });
    }
  }
});
