import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  createdAt: DS.attr('date', {
    defaultValue: new Date()
  })
});
