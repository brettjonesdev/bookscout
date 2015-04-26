import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * Get all the books
   *
   * @return {Promise}
   */
  model: function () {
    return this.store.findAll('book');
  }
});
