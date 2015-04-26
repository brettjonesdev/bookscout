import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  review: DS.attr('string'),
  releaseDate: DS.attr('date'),
  price: DS.attr('number'),
  createdAt: DS.attr('date', {
    defaultValue: new Date()
  })
});
