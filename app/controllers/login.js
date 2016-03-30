import Ember from 'ember';

export default Ember.Controller.extend({

  loginFailed: false,
  isProcessing: false,

  // login: function() {
    // this.setProperties({
      // loginFailed: false,
      // isProcessing: true
    // });

  //   $.post("/login", {
  //     username: this.get("username"),
  //     password: this.get("password")
  //   }).then(function() {
  //     this.set("isProcessing", false);
  //     document.location = "/welcome";
  //   }.bind(this), function() {
  //     this.set("isProcessing", false);
  //     this.set("loginFailed", true);
  //   }.bind(this));
  // }

});
