import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  createdAt: DS.attr('date', {
    defaultValue: new Date()
  }),

  /**
   * Computed property to get an excerpt
   *
   * @return {String}
   */
  excerpt: function () {
    return this.get('description').substring(0, 137) + '...';
  }.property('description')
});
