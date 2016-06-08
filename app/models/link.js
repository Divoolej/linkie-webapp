import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr('string'),
  description: attr('string'),
  url: attr('string'),
  addedAt: attr('date'),

  link: DS.hasMany('link', { inverse: 'category' }),
  category: DS.belongsTo('category', { inverse: 'link' }),

  categoryId: attr('string')
});
