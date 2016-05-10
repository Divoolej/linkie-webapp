import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaFacebook: function() {
      var route = this,
          controller = this.controllerFor('landing');
      this.get('session').open('facebook-connect').then(function() {
        route.transitionTo('profile');
      }, function(error) {
        controller.set('error', "Could not sign you in: " + error.message);
      });
    }
  }
});
