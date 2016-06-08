import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$(".button-collapse").sideNav({
      closeOnClick: false
    });
    this.$(".search-wrapper").focusin(function() {
      $(this).addClass("focused");
    });
    this.$(".search-wrapper").focusout(function() {
      $(this).removeClass("focused");
    });
    this.$("#search").attr("maxlength", 20);
  }
});
