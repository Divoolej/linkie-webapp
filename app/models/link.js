import Model from 'ember-data/model';

export default Model.extend({
  title: attr('string'),
  url: attr('string'),
  addedAt: attr('date')
});
