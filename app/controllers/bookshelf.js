import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['title', 'author'],
  queryParams: ['display'],

  /**
   * Should display results as a grid?
   *
   * @return {Boolean}
   */
  shouldDisplayGrid: function () {
    var display = this.get('display');

    // If display is not set or equal to grid
    return !display || 'grid' === this.get('display');
  }.property('display'),

  /**
   * Should display results as thumbnails?
   *
   * @return {Boolean}
   */
  shouldDisplayThumbnail: function () {
    return 'thumbnail' === this.get('display');
  }.property('display')
});
