import Ember from 'ember';

export default Ember.Controller.extend({
  model: {},

  categories: function () {
    return this.store.find('category');
  }.property(),

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

      var categories = this.get('categories').map(function (category) {
        if (!category.get('checked')) {
          return;
        }

        book.get('categories').pushObject(category);
      });

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
    },

    /**
     * Show the create category form
     */
    showCreateCategory: function () {
      this.set('createCategory', true);
    },

    /**
     * Creates a category from the displayed form
     */
    createCategory: function () {
      var category = this.store.createRecord('category', {
          title: this.get('categoryTitle')
        }),
        _this = this;

      // We reset the categoryTitle input
      this.set('categoryTitle', null);

      // And save the category
      category.save()
        .catch(function() {
          // If the save fails, we set the title into the input again
          _this.set('categoryTitle', category.get('title'));
          // And remove the category from the store
          category.deleteRecord();
        });
    }
  }
});
