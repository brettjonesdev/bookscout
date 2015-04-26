import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * Get all the books
   *
   * @return {Promise}
   */
  model: function() {
    return Ember.RSVP.hash({
      model: this.store.findAll('book'),
      categories: this.store.findAll('category')
    });
  },

  /**
   * Setup all the results to the controller
   */
  setupController: function(controller, model) {
    controller.setProperties(model);
  }
});
