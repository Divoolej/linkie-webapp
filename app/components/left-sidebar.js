import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$(".button-collapse").sideNav({
      closeOnClick: true
    });
  }
});
