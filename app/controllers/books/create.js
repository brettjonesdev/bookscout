import Ember from 'ember';

export default Ember.Controller.extend({
  model: {},

  actions: {
    /**
     * Create a book
     * We don't need to check anything in here, because the form can be only be
     * submitted if it passes the given validation to Parsley JS and its component
     */
    create: function () {
      // Let's create a book model and fill it with the user information
      var book = this.store.createRecord('book', {
          title: this.get('model.title'),
          author: this.get('model.author'),
          description: this.get('model.description'),
          price: this.get('model.price')
        }),
        _this = this;

      // We don't need to wait for the API response, we assume that it's going to
      // work and send the user instantly to the inventory route where he'll be
      // able to see him new book
      // Our data store is already up to date
      this.transitionToRoute('inventory');

      book.save()
        .catch(function () {
          // If an error occurs, bring the user back to this route
          _this.transitionToRoute('books.create');
        });
    }
  }
});
