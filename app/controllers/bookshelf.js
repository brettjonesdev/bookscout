import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['title', 'author'],
  queryParams: ['display'],
  display: 'grid',

  /**
   * Sets the new display when the user clicks on the switch
   */
  changeDisplay: function () {
    this.set('display', this.get('displaySwitch') ? 'thumbnail' : 'grid');
  }.observes('displaySwitch'),

  /**
   * Initialize the switch value
   *
   * @return {Boolean}
   */
  displaySwitch: function () {
    return 'thumbnail' === this.get('display');
  }.property(),

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
