import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  didInsertElement() {
    Ember.$('select').material_select();
  },

  actions: {
    submitLink() {
      let link = this.get('store').createRecord('link', {
        title: this.get('title'),
        url: this.get('url'),
        categoryId: this.get('categoryId')
      });
      link.save();
    }
  }
});
