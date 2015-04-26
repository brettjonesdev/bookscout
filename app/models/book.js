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
   * Relationships
   */
  categories: DS.hasMany('category'),

  /**
   * Gets a gravatar URL that will return a dumb image, but at least it's an image
   *
   * @return {String}
   */
  gravatar: function () {
    return 'https://www.gravatar.com/avatar/' + md5(this.get('title')) + '?d=identicon&s=40';
  }.property('title'),

  /**
   * Computed property to get an excerpt
   *
   * @return {String}
   */
  excerpt: function () {
    return this.get('description').substring(0, 137) + '...';
  }.property('description')
});
