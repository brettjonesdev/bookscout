import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'bookscout/tests/helpers/start-app';

var application;

module('Acceptance: BooksCreate', {
  beforeEach: function () {
    application = startApp();
  },

  afterEach: function () {
    Ember.run(application, 'destroy');
  }
});

test('should not validate the form if not filled properly', function (assert) {
  visit('/books/create');

  andThen(function () {
    assert.equal(currentPath(), 'books.create');
  });

  fillIn('.form-book-title input', '');
  fillIn('.form-book-author input', 'Test Author');
  fillIn('.form-book-price input', 100);
  fillIn('.form-book-description textarea', 'Test lorem ipsum dolor sit amet.');
  click('button');

  andThen(function () {
    // Should have been redirected to the inventory
    assert.equal(currentPath(), 'books.create');
    // And the book should be displayed
    assert.equal($('.parsley-errors-list.filled').length, 1);
  });
});

test('should create a book', function (assert) {
  visit('/books/create');

  andThen(function () {
    assert.equal(currentPath(), 'books.create');
  });

  fillIn('.form-book-title input', 'Test Title');
  fillIn('.form-book-author input', 'Test Author');
  fillIn('.form-book-price input', 100);
  fillIn('.form-book-description textarea', 'Test lorem ipsum dolor sit amet.');
  click('button');

  andThen(function () {
    // Should have been redirected to the inventory
    assert.equal(currentPath(), 'inventory');
    // And the book should be displayed
    assert.equal($('h3:contains(Test Title)').length, 1);
  });
});
