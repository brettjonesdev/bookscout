import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('bookshelf');
  this.route('inventory');

  this.resource('books', { path: '/books' }, function() {
    this.route('get', { path: '/:book_id' });
    this.route('create', { path: '/create' });
    this.route('edit', { path: '/edit/:book_id' });
    this.route('delete', { path: '/delete/:book_id' });
  });
});
