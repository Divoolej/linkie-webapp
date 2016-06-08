import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$(".button-collapse").sideNav({
      closeOnClick: false
    });
    Ember.$(".search-wrapper").focusin(function() {
      Ember.$(this).addClass("focused");
    });
    Ember.$(".search-wrapper").focusout(function() {
      Ember.$(this).removeClass("focused");
    });
    Ember.$("#search").attr("maxlength", 20);
  }
});
