import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  didInsertElement() {
    Ember.$('select').material_select();
  },

  actions: {
    submitLink() {
      // obtain data from the form
      let link = this.get('store').createRecord('link', {
        title: this.get('title'),
        url: this.get('url'),
        categoryId: this.get('categoryId')
      });
      // POST data to server
      link.save();

      let iso = new Isotope('#links-grid');
      iso.appended( link )
      iso.layout();

    }
  }
});
