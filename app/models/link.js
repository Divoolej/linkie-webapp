import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr('string'),
  url: attr('string'),
  addedAt: attr('date'),
  categoryId: attr('string')
});
