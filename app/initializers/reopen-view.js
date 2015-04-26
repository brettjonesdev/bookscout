import Ember from 'ember';

export function initialize(container, application) {
  var extendView = {
    attributeBindings: [
      'data-parsley-required',
      'data-parsley-type',
      'data-parsley-error-message',
      'data-parsley-errors-container',
      'data-parsley-pattern',
      'data-toggle'
    ]
  };

  Ember.TextField.reopen(extendView);
  Ember.TextArea.reopen(extendView);
}

export default {
  name: 'reopen-view',
  initialize: initialize
};
