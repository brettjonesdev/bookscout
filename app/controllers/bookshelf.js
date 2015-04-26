import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['title', 'author'],
  queryParams: ['display', 'sortBy', 'order'],
  display: 'grid',
  sortBy: 'title',
  order: 'asc',

  displays: [
    { option: 'grid', value: 'Grid' },
    { option: 'thumbnail', value: 'Thumbnail' }
  ],

  orders: [
    { option: 'asc', value: 'Ascending' },
    { option: 'desc', value: 'Descending' }
  ],

  sortParameters: [
    { option: 'title', value: 'Title' },
    { option: 'author', value: 'Author' },
    { option: 'price', value: 'Price' },
    { option: 'createdAt', value: 'What\'s new' }
  ],

  /**
   * Set sort properties when we need to sort the collection again
   */
  changeSortProperties: function () {
    this.set('sortProperties', [this.get('sortBy')]);
    this.set('sortAscending', 'asc' === this.get('order'));
  }.observes('sortBy', 'order'),

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
