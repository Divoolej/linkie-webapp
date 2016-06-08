import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $('select').material_select();
  }
});
