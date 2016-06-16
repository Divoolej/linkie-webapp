import Ember from 'ember';

export default Ember.Component.extend({
  storage: Ember.inject.service(),

  classNames: ['grid'],

  didInsertElement() {
    Ember.$('.grid').isotope(this.get('storage.isoOptions')).isotope('layout');
  }
});
