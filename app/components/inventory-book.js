import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    /**
     * Display the delete confirmation message with the delete link
     */
    displayDeleteConfirmation: function () {
      this.set('shouldDisplayDeleteConfirmation', true);
    },

    deleteBook: function (book) {
      book.destroyRecord();
    }
  }
});
