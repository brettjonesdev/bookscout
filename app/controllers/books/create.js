import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Create a book
     * We don't need to check anything in here, because the form can be only be
     * submitted if it passes the given validation to Parsley JS and its component
     */
    create: function () {
      // Let's create a Book model with the user information
      // We could code a better way to get those values by instanciating a model
      // and having the user directly updating the model from the DOM but it requires
      // quite some work to get it done properly without any side effect (useless
      // models in the store etc)
      var book = this.store.createRecord('book', {
          title: this.get('title'),
          author: this.get('author'),
          description: this.get('description'),
          price: this.get('price')
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
