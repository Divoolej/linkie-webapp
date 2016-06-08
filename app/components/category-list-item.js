import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    filterCategory(category) {
      console.log(category.get('name'));
    }
  }
});
