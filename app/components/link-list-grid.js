import Ember from 'ember';

export default Ember.Component.extend({
  storage: Ember.inject.service(),

  classNames: ['grid'],

  didInsertElement() {
    this.$().isotope(this.get('storage.isoOptions'));
  }
});
