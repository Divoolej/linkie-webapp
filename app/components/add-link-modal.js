import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('select').material_select();
  }
});
