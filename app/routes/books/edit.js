import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * Only loads the book if the store doesn't have it already
   *
   * @param  {Object} params
   * @param  {Transition} transition
   * @return {Promise}
   */
  model: function (params, transition) {
    return this.store.find('book', params.book_id);
  }
});
