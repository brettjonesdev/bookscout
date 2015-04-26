import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * When the controller is set up, a new model is created, and will be filled by the controller
   */
  setupController: function (controller, model, transition) {
    controller.set('model', this.store.createRecord('book'));
  },

  /**
   * When the user leaves the route, the model needs to be deleted if it hasn't been saved
   */
  willDestroy: function () {
    var model = this.controller.get('model');

    // If the model hasn't been saved
    if (false === model.isNew) {
      return;
    }

    this.store.deleteRecord(model);
  }
});
