import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  /**
   * Once the component is inserted, we bind Parsley to the form for the validation
   */
  didInsertElement: function () {
    this.$('form').parsley();
  },

  actions: {
    /**
     * Bubbles the submit form action to the controllers/routes
     */
    submit: function () {
      this.sendAction('submitAction');
    }
  }
});
