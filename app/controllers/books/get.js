import Ember from 'ember';

export default Ember.Controller.extend({
  /**
   * Return the link to search the book on Amazon
   *
   * @return {String}
   */
  amazonLink: function () {
    var search = '%@ %@'.fmt(this.get('model.title'), this.get('model.author'));
    search = search.replace(' ', '+');

    return 'http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=%@'.fmt(search);
  }.property('model.title')
});
