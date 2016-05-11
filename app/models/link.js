import Model from 'ember-data/model';
import attr from 'ember-date/attr';

export default Model.extend({
  title: attr('string'),
  url: attr('string'),
  addedAt: attr('date')
});
