import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  storage: Ember.inject.service(),

  didInsertElement() {
    Ember.$('select').material_select();
  },

  actions: {
    _submitLink() {
      // obtain data from the form
      let link = this.get('store').createRecord('link', {
        title: this.get('title'),
        url: this.get('url'),
        categoryId: this.get('categoryId')
      });

      // POST data to server in profile route
      this.sendAction('submitLink', link);

      this.sendAction('refreshModel');

      Ember.$('.grid').isotope(this.get('storage.isoOptions'))
      .append(link)
      .isotope('appended', link)
      .isotope('layout');

      this.sendAction('refreshModel');

    }

  }
});
