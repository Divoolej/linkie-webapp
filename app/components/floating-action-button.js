import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $('.modal-trigger').leanModal();
  }
});
