import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaFacebook: function() {
      var controller = this.controllerFor('landing');
      this.get('torii').open('facebook-connect').then(function(authorization) {
        // TODO send access token to backend
        debugger;
      });
    }
  }
});
